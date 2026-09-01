"use client";

import { useState, type FormEvent } from "react";

export const interestOptions = [
  "FirmaFan",
  "Partnerskab",
  "Ligasponsor",
  "Legeaftale",
  "Legekammerat",
  "Andet",
] as const;

type FormState = {
  name: string;
  company: string;
  email: string;
  phone: string;
  interest: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const initialForm: FormState = {
  name: "",
  company: "",
  email: "",
  phone: "",
  interest: "",
  message: "",
};

function validateForm(form: FormState): FormErrors {
  const errors: FormErrors = {};

  if (!form.name.trim()) {
    errors.name = "Angiv dit navn.";
  }

  if (!form.company.trim()) {
    errors.company = "Angiv virksomhedens navn.";
  }

  if (!form.email.trim()) {
    errors.email = "Angiv din e-mail.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
    errors.email = "Angiv en gyldig e-mailadresse.";
  }

  if (!form.interest) {
    errors.interest = "Vælg hvad du er interesseret i.";
  }

  if (!form.message.trim()) {
    errors.message = "Skriv en kort besked.";
  }

  return errors;
}

type ContactFormProps = {
  idPrefix?: string;
  onSuccess?: () => void;
};

export function ContactForm({ idPrefix = "contact", onSuccess }: ContactFormProps) {
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextErrors = validateForm(form);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setStatus("error");
      setStatusMessage("Ret venligst markeringerne i formularen.");
      return;
    }

    setStatus("submitting");
    setStatusMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = (await response.json()) as { message?: string; error?: string };

      if (!response.ok) {
        setStatus("error");
        setStatusMessage(data.error ?? "Noget gik galt. Prøv igen eller skriv til info@lykkeliga.dk.");
        return;
      }

      setStatus("success");
      setStatusMessage(data.message ?? "Tak for din henvendelse. Vi vender tilbage hurtigst muligt.");
      setForm(initialForm);
      setErrors({});
      onSuccess?.();
    } catch {
      setStatus("error");
      setStatusMessage("Kunne ikke sende formularen. Prøv igen eller skriv til info@lykkeliga.dk.");
    }
  }

  const inputClassName =
    "w-full border border-white/15 bg-[#07111d] px-3 py-2 text-white placeholder:text-white/40 focus:border-[#00b3a4] focus:outline-none";

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="space-y-5"
      aria-describedby={statusMessage ? `${idPrefix}-form-status` : undefined}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-1">
          <label htmlFor={`${idPrefix}-name`} className="text-sm text-white/75">
            Navn <span className="text-[#00f4c8]">*</span>
          </label>
          <input
            id={`${idPrefix}-name`}
            name="name"
            type="text"
            autoComplete="name"
            value={form.name}
            onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))}
            className={inputClassName}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? `${idPrefix}-name-error` : undefined}
          />
          {errors.name ? (
            <p id={`${idPrefix}-name-error`} className="text-sm text-[#e07a6a]">
              {errors.name}
            </p>
          ) : null}
        </div>

        <div className="space-y-1">
          <label htmlFor={`${idPrefix}-company`} className="text-sm text-white/75">
            Virksomhed <span className="text-[#00f4c8]">*</span>
          </label>
          <input
            id={`${idPrefix}-company`}
            name="company"
            type="text"
            autoComplete="organization"
            value={form.company}
            onChange={(event) => setForm((current) => ({ ...current, company: event.target.value }))}
            className={inputClassName}
            aria-invalid={Boolean(errors.company)}
            aria-describedby={errors.company ? `${idPrefix}-company-error` : undefined}
          />
          {errors.company ? (
            <p id={`${idPrefix}-company-error`} className="text-sm text-[#e07a6a]">
              {errors.company}
            </p>
          ) : null}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-1">
          <label htmlFor={`${idPrefix}-email`} className="text-sm text-white/75">
            E-mail <span className="text-[#00f4c8]">*</span>
          </label>
          <input
            id={`${idPrefix}-email`}
            name="email"
            type="email"
            autoComplete="email"
            value={form.email}
            onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))}
            className={inputClassName}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? `${idPrefix}-email-error` : undefined}
          />
          {errors.email ? (
            <p id={`${idPrefix}-email-error`} className="text-sm text-[#e07a6a]">
              {errors.email}
            </p>
          ) : null}
        </div>

        <div className="space-y-1">
          <label htmlFor={`${idPrefix}-phone`} className="text-sm text-white/75">
            Telefonnummer
          </label>
          <input
            id={`${idPrefix}-phone`}
            name="phone"
            type="tel"
            autoComplete="tel"
            value={form.phone}
            onChange={(event) => setForm((current) => ({ ...current, phone: event.target.value }))}
            className={inputClassName}
          />
        </div>
      </div>

      <div className="space-y-1">
        <label htmlFor={`${idPrefix}-interest`} className="text-sm text-white/75">
          Hvad er du interesseret i? <span className="text-[#00f4c8]">*</span>
        </label>
        <select
          id={`${idPrefix}-interest`}
          name="interest"
          value={form.interest}
          onChange={(event) => setForm((current) => ({ ...current, interest: event.target.value }))}
          className={inputClassName}
          aria-invalid={Boolean(errors.interest)}
          aria-describedby={errors.interest ? `${idPrefix}-interest-error` : undefined}
        >
          <option value="">Vælg en mulighed</option>
          {interestOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        {errors.interest ? (
          <p id={`${idPrefix}-interest-error`} className="text-sm text-[#e07a6a]">
            {errors.interest}
          </p>
        ) : null}
      </div>

      <div className="space-y-1">
        <label htmlFor={`${idPrefix}-message`} className="text-sm text-white/75">
          Besked <span className="text-[#00f4c8]">*</span>
        </label>
        <textarea
          id={`${idPrefix}-message`}
          name="message"
          rows={5}
          value={form.message}
          onChange={(event) => setForm((current) => ({ ...current, message: event.target.value }))}
          className={inputClassName}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? `${idPrefix}-message-error` : undefined}
        />
        {errors.message ? (
          <p id={`${idPrefix}-message-error`} className="text-sm text-[#e07a6a]">
            {errors.message}
          </p>
        ) : null}
      </div>

      {statusMessage ? (
        <p
          id={`${idPrefix}-form-status`}
          role={status === "success" ? "status" : "alert"}
          className={`text-sm ${status === "success" ? "text-[#00f4c8]" : "text-[#e07a6a]"}`}
        >
          {statusMessage}
        </p>
      ) : null}

      <div className="flex flex-wrap items-center justify-end gap-3 pt-2">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex items-center rounded-full bg-[#00b3a4] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#00c9b8] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "submitting" ? "Sender..." : "Send henvendelse"}
        </button>
      </div>
    </form>
  );
}

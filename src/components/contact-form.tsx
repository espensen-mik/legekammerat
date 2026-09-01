"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import {
  CONTACT_INTEREST_OPTIONS,
  type ContactInterest,
} from "@/src/lib/contact-interest";
import { CONTACT_FIELD_LIMITS, isValidContactEmail } from "@/src/lib/contact-validation";

type FormState = {
  name: string;
  company: string;
  email: string;
  phone: string;
  interest: string;
  message: string;
  website: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const SUBMIT_ERROR_MESSAGE =
  "Din besked kunne ikke sendes. Prøv igen, eller kontakt os direkte på e-mail.";
const SUCCESS_MESSAGE = "Tak for din henvendelse. Vi vender tilbage hurtigst muligt.";

function createInitialForm(initialInterest?: ContactInterest): FormState {
  return {
    name: "",
    company: "",
    email: "",
    phone: "",
    interest: initialInterest ?? "",
    message: "",
    website: "",
  };
}

function validateForm(form: FormState): FormErrors {
  const errors: FormErrors = {};

  if (!form.name.trim()) {
    errors.name = "Angiv dit navn.";
  } else if (form.name.trim().length > CONTACT_FIELD_LIMITS.name) {
    errors.name = "Navnet er for langt.";
  }

  if (!form.company.trim()) {
    errors.company = "Angiv virksomhedens navn.";
  } else if (form.company.trim().length > CONTACT_FIELD_LIMITS.company) {
    errors.company = "Virksomhedsnavnet er for langt.";
  }

  if (!form.email.trim()) {
    errors.email = "Angiv din e-mail.";
  } else if (!isValidContactEmail(form.email.trim())) {
    errors.email = "Angiv en gyldig e-mailadresse.";
  }

  if (!form.interest) {
    errors.interest = "Vælg hvad du er interesseret i.";
  }

  if (!form.message.trim()) {
    errors.message = "Skriv en kort besked.";
  } else if (form.message.trim().length > CONTACT_FIELD_LIMITS.message) {
    errors.message = "Beskeden er for lang.";
  }

  if (form.phone.trim().length > CONTACT_FIELD_LIMITS.phone) {
    errors.phone = "Telefonnummeret er for langt.";
  }

  return errors;
}

type ContactFormProps = {
  idPrefix?: string;
  initialInterest?: ContactInterest;
  onSuccess?: () => void;
};

export function ContactForm({
  idPrefix = "contact",
  initialInterest,
  onSuccess,
}: ContactFormProps) {
  const [form, setForm] = useState<FormState>(() => createInitialForm(initialInterest));
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const statusRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (status === "success") {
      statusRef.current?.focus();
    }
  }, [status]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (status === "submitting") {
      return;
    }

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
        setStatusMessage(data.error ?? SUBMIT_ERROR_MESSAGE);
        return;
      }

      setStatus("success");
      setStatusMessage(data.message ?? SUCCESS_MESSAGE);
      setForm(createInitialForm(initialInterest));
      setErrors({});
      onSuccess?.();
    } catch {
      setStatus("error");
      setStatusMessage(SUBMIT_ERROR_MESSAGE);
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
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-[9999px] h-0 w-0 overflow-hidden"
      >
        <label htmlFor={`${idPrefix}-website`}>Website</label>
        <input
          id={`${idPrefix}-website`}
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={form.website}
          onChange={(event) => setForm((current) => ({ ...current, website: event.target.value }))}
        />
      </div>

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
            maxLength={CONTACT_FIELD_LIMITS.name}
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
            maxLength={CONTACT_FIELD_LIMITS.company}
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
            maxLength={CONTACT_FIELD_LIMITS.email}
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
            maxLength={CONTACT_FIELD_LIMITS.phone}
            value={form.phone}
            onChange={(event) => setForm((current) => ({ ...current, phone: event.target.value }))}
            className={inputClassName}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? `${idPrefix}-phone-error` : undefined}
          />
          {errors.phone ? (
            <p id={`${idPrefix}-phone-error`} className="text-sm text-[#e07a6a]">
              {errors.phone}
            </p>
          ) : null}
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
          {CONTACT_INTEREST_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
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
          maxLength={CONTACT_FIELD_LIMITS.message}
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
          ref={statusRef}
          id={`${idPrefix}-form-status`}
          tabIndex={-1}
          role={status === "success" ? "status" : "alert"}
          className={`text-sm outline-none ${status === "success" ? "text-[#00f4c8]" : "text-[#e07a6a]"}`}
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

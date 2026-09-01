export const CONTACT_INTERESTS = ["firmafan", "partner"] as const;

export type ContactInterest = (typeof CONTACT_INTERESTS)[number];

export const CONTACT_INTEREST_OPTIONS: ReadonlyArray<{
  value: ContactInterest;
  label: string;
}> = [
  {
    value: "firmafan",
    label: "FirmaFan – 5.000–25.000 kr. årligt",
  },
  {
    value: "partner",
    label: "Partner – fra 75.000 kr. årligt",
  },
];

export function isContactInterest(value: string): value is ContactInterest {
  return CONTACT_INTERESTS.includes(value as ContactInterest);
}

export function getContactInterestLabel(value: string): string | undefined {
  return CONTACT_INTEREST_OPTIONS.find((option) => option.value === value)?.label;
}

export function contactInterestFromHash(hash: string): ContactInterest | undefined {
  if (hash === "#kontakt-firmafan") return "firmafan";
  if (hash === "#kontakt-partner") return "partner";
  return undefined;
}

export function contactHref(interest?: ContactInterest): string {
  if (interest === "firmafan") return "#kontakt-firmafan";
  if (interest === "partner") return "#kontakt-partner";
  return "#kontakt";
}

export function isContactHash(hash: string): boolean {
  return hash === "#kontakt" || hash === "#kontakt-firmafan" || hash === "#kontakt-partner";
}

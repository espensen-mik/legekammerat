export const CONTACT_FIELD_LIMITS = {
  name: 200,
  company: 200,
  email: 254,
  phone: 30,
  message: 5000,
} as const;

export function isValidContactEmail(value: string): boolean {
  return (
    value.length > 0 &&
    value.length <= CONTACT_FIELD_LIMITS.email &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
  );
}

export function isWithinContactFieldLimit(
  field: keyof typeof CONTACT_FIELD_LIMITS,
  value: string,
): boolean {
  return value.length <= CONTACT_FIELD_LIMITS[field];
}

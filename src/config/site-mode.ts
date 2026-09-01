/**
 * Site mode switch for temporary launch vs full multi-page site.
 *
 * - "launch"  → one-page commercial site at `/` (current default)
 * - "full"    → original multi-page homepage and navigation
 *
 * To restore the full site later, change this value to "full".
 * See LAUNCH.md for full restoration instructions.
 */
export const SITE_MODE = "launch" as "launch" | "full";

export const isLaunchMode = SITE_MODE === "launch";

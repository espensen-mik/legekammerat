/**
 * Root homepage router.
 *
 * Temporary launch: renders LaunchHomepage (one-page site).
 * Full site: set SITE_MODE to "full" in src/config/site-mode.ts to render FullHomepage.
 *
 * The preserved full homepage lives in src/components/full-homepage.tsx.
 * See LAUNCH.md for restoration instructions.
 */
import { SITE_MODE } from "@/src/config/site-mode";
import { FullHomepage } from "@/src/components/full-homepage";
import { LaunchHomepage } from "@/src/components/launch-homepage";

export default function Home() {
  return SITE_MODE === "launch" ? <LaunchHomepage /> : <FullHomepage />;
}

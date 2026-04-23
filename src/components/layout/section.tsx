import { type ReactNode } from "react";
import { Container } from "@/src/components/layout/container";

type SectionProps = {
  children: ReactNode;
  className?: string;
  contentClassName?: string;
};

export function Section({ children, className = "", contentClassName = "" }: SectionProps) {
  return (
    <section className={`py-24 sm:py-28 ${className}`}>
      <Container className={contentClassName}>{children}</Container>
    </section>
  );
}

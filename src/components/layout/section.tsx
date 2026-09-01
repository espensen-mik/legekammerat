import { type ReactNode } from "react";
import { Container } from "@/src/components/layout/container";

type SectionProps = {
  children: ReactNode;
  className?: string;
  contentClassName?: string;
  id?: string;
};

export function Section({ children, className = "", contentClassName = "", id }: SectionProps) {
  return (
    <section id={id} className={`py-24 sm:py-28 ${className}`}>
      <Container className={contentClassName}>{children}</Container>
    </section>
  );
}

import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/ui/Reveal';
import { STATEMENT_QUOTE, SITE_NAME } from '@/lib/constants';

export function StatementSection() {
  return (
    <section className="bg-bg-dark py-28 sm:py-36">
      <Container size="narrow" className="text-center">
        <Reveal>
          <p className="mb-8 flex items-center justify-center gap-3 text-xs font-medium tracking-[0.28em] uppercase text-accent-soft">
            <span className="accent-divider" />
            The Conclusion
            <span className="accent-divider" />
          </p>
        </Reveal>
        <Reveal delay={100}>
          <blockquote className="font-serif text-3xl leading-[1.3] text-text-on-dark italic sm:text-4xl">
            “{STATEMENT_QUOTE}”
          </blockquote>
        </Reveal>
        <Reveal delay={200}>
          <p className="mt-8 text-xs tracking-[0.25em] uppercase text-text-on-dark-muted">
            {SITE_NAME} · Property Evaluation
          </p>
        </Reveal>
      </Container>
    </section>
  );
}

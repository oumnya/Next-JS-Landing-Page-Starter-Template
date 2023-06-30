import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="AUTO DEPLOYED BY CLOUDSTATION."
      subtitle="Start your Free Trial."
      button={
        <Link href="https://creativedesignsguru.com/category/nextjs/">
          <a>
            <Button>Get Started NOW!!!</Button>
          </a>
        </Link>
      }
    />
  </Section>
);

export { Banner };

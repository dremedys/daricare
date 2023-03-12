import { HeroSection } from '@/components/home/hero-section/hero-section';
import { Reasons } from '@/components/home/reasons/reasons';
import { MainLayout } from '@/layout/main-layout';

import { Request } from '../components/home/request/request';
import { Feats } from '@/components/home/feats/feats';

export default function Home() {
  return (
    <MainLayout>
      <HeroSection />
      <Reasons />
      <Feats />
      <Request />
    </MainLayout>
  );
}

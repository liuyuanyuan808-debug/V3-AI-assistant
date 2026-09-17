import { notFound } from 'next/navigation';
import { TipStepPage } from '@/components/tips/TipStepPage';
import { STEPS } from '@/lib/steps/data';

interface PageProps {
  params: Promise<{ step: string }>;
}

export function generateStaticParams() {
  return Array.from({ length: STEPS.length }, (_, i) => ({ step: String(i + 1) }));
}

export default async function Page({ params }: PageProps) {
  const { step } = await params;
  const n = Number(step);
  if (!Number.isInteger(n) || n < 1 || n > STEPS.length) notFound();
  return <TipStepPage tipNumber={n} />;
}

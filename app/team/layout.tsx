import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Jamoa - Bizning Mutaxassislar',
  description: 'Legisland jamoasi - tajribali advokatlar va yuristlar. Korporativ huquq, fuqarolik ishlari va soliq bo\'yicha mutaxassislar.',
  keywords: ['advokat', 'yurist', 'huquqshunos', 'jamoa', 'Legisland'],
  openGraph: {
    title: 'Jamoa | Legisland',
    description: 'Tajribali advokatlar va yuristlar jamoasi bilan tanishing.',
    type: 'website',
  },
};

export default function TeamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

// components/ServiceCard.tsx
import Link from 'next/link';

type Props = {
  title: string;
  description: string;
  slug: string;
};

export default function ServiceCard({ title, description, slug }: Props) {
  return (
    <div className="bg-white dark:bg-[#0B2240] rounded-xl shadow hover:shadow-lg transition-all p-6">
      <h3 className="text-xl font-semibold mb-2 text-orange-500">{title}</h3>
      <p className="text-gray-700 dark:text-gray-300 mb-4">{description}</p>
      <Link href={`/services/${slug}`} className="text-sm text-orange-500 font-semibold hover:underline">
        Learn More →
      </Link>
    </div>
  );
}

import Link from 'next/link';

export default function LessonCard({
  title,
  slug,
}: {
  title: string;
  slug: string;
}) {
  return (
    <Link
      href={`/lessons/${slug}`}
      className="block border border-gray-300 rounded-lg p-4 hover:bg-blue-50 transition"
    >
      <h2 className="text-xl font-semibold">{title}</h2>
    </Link>
  );
}

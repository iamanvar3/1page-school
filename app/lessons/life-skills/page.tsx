import Link from 'next/link';
import MDXLayout from '@/components/MDXLayout';

export default function LifeSkillsPage() {
  return (
    <MDXLayout>
      <h1 className="mb-4">Life Skills</h1>
      <p className="text-lg text-muted-foreground mb-6">
        Essential lessons to help you grow in life.
      </p>

      <ul className="space-y-4 text-xl">
        <li>
          <Link href="/lessons/life-skills/debt" className="hover:underline">
            💰 1. Debt Management
          </Link>
        </li>
        <li>
          <Link href="/lessons/life-skills/marriage" className="hover:underline">
            ❤️ 2. Marriage & Relationships
          </Link>
        </li>
        <li>
          <Link href="/lessons/life-skills/confidence" className="hover:underline">
            💪 3. Confidence
          </Link>
        </li>
        <li>
          <Link href="/lessons/life-skills/regulation" className="hover:underline">
            🧘 4. Emotional Regulation
          </Link>
        </li>
        <li>
          <Link href="/lessons/life-skills/table-manners" className="hover:underline">
            🍽️ 5. Table Manners
          </Link>
        </li>
      </ul>
    </MDXLayout>
  );
}

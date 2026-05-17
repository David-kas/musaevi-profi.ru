import Link from "next/link";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export function Breadcrumbs({
  items,
}: {
  items: { name: string; path: string }[];
}) {
  const all = [{ name: "Главная", path: "/" }, ...items];

  return (
    <>
      <JsonLd data={breadcrumbSchema(all)} />
      <nav aria-label="Хлебные крошки" className="mb-6 text-sm text-emerald-900/70">
        <ol className="flex flex-wrap items-center gap-2">
          {all.map((item, i) => (
            <li key={item.path} className="flex items-center gap-2">
              {i > 0 && <span aria-hidden>/</span>}
              {i === all.length - 1 ? (
                <span className="text-emerald-950 font-medium">{item.name}</span>
              ) : (
                <Link
                  href={item.path}
                  className="hover:text-gold-600 transition-colors"
                >
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}

import type { PriceCategory } from "@/data/prices";

export function PriceTable({ categories }: { categories: PriceCategory[] }) {
  return (
    <div className="space-y-12">
      {categories.map((cat) => (
        <div key={cat.id} id={cat.id}>
          <h3 className="font-display text-2xl font-semibold text-emerald-950">
            {cat.title}
          </h3>
          {cat.description && (
            <p className="mt-2 text-sm text-emerald-900/70">{cat.description}</p>
          )}
          <div className="mt-4 overflow-x-auto rounded-2xl border border-emerald-900/10 bg-white/80">
            <table className="w-full min-w-[320px] text-left text-sm">
              <thead>
                <tr className="border-b border-emerald-900/10 bg-beige-50/80">
                  <th className="px-4 py-3 font-semibold text-emerald-950">
                    Процедура
                  </th>
                  <th className="px-4 py-3 font-semibold text-emerald-950">
                    Цена
                  </th>
                  <th className="hidden px-4 py-3 font-semibold text-emerald-950 sm:table-cell">
                    Примечание
                  </th>
                </tr>
              </thead>
              <tbody>
                {cat.items.map((item) => (
                  <tr
                    key={item.name}
                    className="border-b border-emerald-900/5 last:border-0 hover:bg-beige-50/50"
                  >
                    <td className="px-4 py-3 text-emerald-950">{item.name}</td>
                    <td className="whitespace-nowrap px-4 py-3 font-medium text-gold-700">
                      {item.price}
                    </td>
                    <td className="hidden px-4 py-3 text-emerald-800/60 sm:table-cell">
                      {item.note || item.duration || "—"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
}

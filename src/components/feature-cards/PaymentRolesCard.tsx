import { ArrowUpRight } from "lucide-react"
import Icon from "@/components/ui/icon"

const competitors = [
  { brand: "Ваш бренд", share: 38, color: "bg-violet-500" },
  { brand: "Конкурент A", share: 31, color: "bg-gray-600" },
  { brand: "Конкурент B", share: 21, color: "bg-gray-700" },
  { brand: "Остальные", share: 10, color: "bg-gray-800" },
]

const insights = [
  { text: "Конкурент A снизил цену на 12% в Самокате", type: "warning" },
  { text: "Ваш fill rate вырос до 94% в Яндекс Лавке", type: "success" },
]

export function PaymentRolesCard() {
  return (
    <div className="rounded-2xl bg-[#141414] border border-[#262626] p-6 flex flex-col">
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#1f1f1f] border border-[#2a2a2a]">
        <Icon name="Target" size={20} className="text-gray-400" />
      </div>

      <h3 className="mb-2 text-lg font-semibold text-white">Competitive Intelligence</h3>
      <p className="mb-4 text-sm text-gray-400">Сравнивайте скорость продаж, доли полки и ценовую стратегию конкурентов по каждой сети и региону</p>

      <a href="#" className="mb-6 inline-flex items-center text-sm text-gray-400 hover:text-white transition-colors">
        Подробнее <ArrowUpRight className="ml-1 h-4 w-4" />
      </a>

      <div className="mt-auto space-y-4 rounded-xl bg-[#1a1a1a] border border-[#262626] p-4">
        <p className="text-xs text-gray-500 uppercase tracking-wider">Доля присутствия · Самокат · Москва</p>

        <div className="flex h-3 w-full overflow-hidden rounded-full gap-0.5">
          {competitors.map((c) => (
            <div
              key={c.brand}
              className={`${c.color} h-full transition-all`}
              style={{ width: `${c.share}%` }}
            />
          ))}
        </div>

        <div className="space-y-1.5">
          {competitors.map((c) => (
            <div key={c.brand} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className={`h-2 w-2 rounded-full ${c.color}`} />
                <span className="text-xs text-gray-400">{c.brand}</span>
              </div>
              <span className="text-xs font-semibold text-white">{c.share}%</span>
            </div>
          ))}
        </div>

        <div className="border-t border-[#2a2a2a] pt-3 space-y-2">
          {insights.map((insight, i) => (
            <div key={i} className="flex items-start gap-2 rounded-lg bg-[#0f0f0f] px-3 py-2">
              <Icon
                name={insight.type === "warning" ? "AlertTriangle" : "CheckCircle"}
                size={13}
                className={insight.type === "warning" ? "text-amber-400 mt-0.5 shrink-0" : "text-emerald-400 mt-0.5 shrink-0"}
              />
              <p className="text-xs text-gray-400">{insight.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PaymentRolesCard

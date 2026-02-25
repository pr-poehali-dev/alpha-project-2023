import { BarChart2, ArrowUpRight, TrendingDown } from "lucide-react"
import Icon from "@/components/ui/icon"

const stockItems = [
  { sku: "Йогурт клубника 150г", network: "Яндекс Лавка", fillRate: 94, trend: "up" },
  { sku: "Творог 5% 200г", network: "Самокат", fillRate: 71, trend: "down" },
  { sku: "Кефир 1% 1л", network: "ВкусВилл", fillRate: 88, trend: "up" },
  { sku: "Молоко 3.2% 1л", network: "Перекрёсток", fillRate: 43, trend: "down" },
]

export function LinkAccountsCard() {
  return (
    <div className="rounded-2xl bg-[#141414] border border-[#262626] p-6 flex flex-col">
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#1f1f1f] border border-[#2a2a2a]">
        <Icon name="BarChart2" size={20} className="text-gray-400" />
      </div>

      <h3 className="mb-2 text-lg font-semibold text-white">Real-Time Tracking</h3>
      <p className="mb-4 text-sm text-gray-400">Остатки каждые 1–3 часа по каждой точке, скорость продаж, OOS и lost sales по всем сетям</p>

      <a href="#" className="mb-6 inline-flex items-center text-sm text-gray-400 hover:text-white transition-colors">
        Подробнее <ArrowUpRight className="ml-1 h-4 w-4" />
      </a>

      <div className="mt-auto space-y-2 rounded-xl bg-[#1a1a1a] border border-[#262626] p-3">
        <div className="flex items-center justify-between px-3 py-1.5">
          <span className="text-xs text-gray-500 uppercase tracking-wider">SKU</span>
          <span className="text-xs text-gray-500 uppercase tracking-wider">Fill Rate</span>
        </div>
        {stockItems.map((item, index) => (
          <div key={index} className="flex items-center justify-between rounded-lg bg-[#0f0f0f] px-3 py-2.5">
            <div>
              <p className="text-sm font-medium text-white">{item.sku}</p>
              <p className="text-xs text-gray-500">{item.network}</p>
            </div>
            <div className="flex items-center gap-2">
              <span className={`text-sm font-semibold ${item.fillRate >= 80 ? "text-emerald-400" : item.fillRate >= 60 ? "text-amber-400" : "text-red-400"}`}>
                {item.fillRate}%
              </span>
              {item.trend === "down" ? (
                <TrendingDown className="h-3.5 w-3.5 text-red-400" />
              ) : (
                <Icon name="TrendingUp" size={14} className="text-emerald-400" />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default LinkAccountsCard

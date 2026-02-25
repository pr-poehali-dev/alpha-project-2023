import { ArrowUpRight } from "lucide-react"
import Icon from "@/components/ui/icon"

const forecast = [
  { day: "Пн", value: 65 },
  { day: "Вт", value: 80 },
  { day: "Ср", value: 72 },
  { day: "Чт", value: 90 },
  { day: "Пт", value: 85 },
  { day: "Сб", value: 95 },
  { day: "Вс", value: 60 },
]

const recommendations = [
  { label: "Safety stock", value: "480 ед.", icon: "Package", color: "text-violet-400" },
  { label: "Пополнить до пятницы", value: "Самокат, р-н Арбат", icon: "AlertCircle", color: "text-amber-400" },
  { label: "Ожидаемые продажи", value: "+23% к неделе", icon: "TrendingUp", color: "text-emerald-400" },
]

export function SendFundsCard() {
  const maxVal = Math.max(...forecast.map(f => f.value))

  return (
    <div className="rounded-2xl bg-[#141414] border border-[#262626] p-6 flex flex-col">
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#1f1f1f] border border-[#2a2a2a]">
        <Icon name="Sparkles" size={20} className="text-gray-400" />
      </div>

      <h3 className="mb-2 text-lg font-semibold text-white">Predictive Analytics</h3>
      <p className="mb-4 text-sm text-gray-400">AI-прогноз спроса, оптимальный safety stock и рекомендации по пополнению с учётом сезонности и промо</p>

      <a href="#" className="mb-6 inline-flex items-center text-sm text-gray-400 hover:text-white transition-colors">
        Подробнее <ArrowUpRight className="ml-1 h-4 w-4" />
      </a>

      <div className="mt-auto space-y-4 rounded-xl bg-[#1a1a1a] border border-[#262626] p-4">
        <p className="text-xs text-gray-500 uppercase tracking-wider">Прогноз спроса · Йогурт клубника · 7 дней</p>

        <div className="flex items-end gap-1 h-16">
          {forecast.map((f) => (
            <div key={f.day} className="flex flex-col items-center gap-1 flex-1">
              <div
                className="w-full rounded-sm bg-violet-500/30 hover:bg-violet-500/50 transition-colors"
                style={{ height: `${(f.value / maxVal) * 100}%` }}
              />
              <span className="text-[9px] text-gray-600">{f.day}</span>
            </div>
          ))}
        </div>

        <div className="space-y-2">
          {recommendations.map((rec, i) => (
            <div key={i} className="flex items-center justify-between rounded-lg bg-[#0f0f0f] px-3 py-2.5">
              <div className="flex items-center gap-2">
                <Icon name={rec.icon} size={14} className={rec.color} fallback="Info" />
                <span className="text-xs text-gray-400">{rec.label}</span>
              </div>
              <span className="text-xs font-semibold text-white">{rec.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SendFundsCard

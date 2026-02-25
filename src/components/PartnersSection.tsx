const networks = [
  { name: "Яндекс Лавка", short: "ЯЛ" },
  { name: "Самокат", short: "СМ" },
  { name: "ВкусВилл", short: "ВВ" },
  { name: "Перекрёсток", short: "ПК" },
  { name: "Магнит", short: "МГ" },
  { name: "Пятёрочка", short: "П5" },
  { name: "Золотое Яблоко", short: "ЗЯ" },
]

export function PartnersSection() {
  return (
    <section className="px-4 py-8">
      <p className="text-center text-xs text-gray-600 uppercase tracking-widest mb-5">Мониторинг доступен для всех ключевых сетей</p>
      <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
        {networks.map((net) => (
          <div key={net.name} className="flex items-center gap-2 text-gray-500 hover:text-gray-300 transition-colors">
            <span className="flex h-6 w-6 items-center justify-center rounded bg-[#1f1f1f] text-[10px] font-bold text-violet-400">{net.short}</span>
            <span className="text-sm font-medium">{net.name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
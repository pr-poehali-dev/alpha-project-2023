import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="flex items-center justify-between px-8 py-4">
      <div className="flex items-center gap-2">
        <PoolkyLogo />
        <span className="text-lg font-semibold text-white">
          Poolky
        </span>
      </div>

      <nav className="hidden md:flex items-center gap-8">
        <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
          Возможности
        </a>
        <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
          Аналитика
        </a>
        <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
          Сети
        </a>
        <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
          Тарифы
        </a>
        <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
          Контакты
        </a>
      </nav>

      <Button
        variant="outline"
        className="rounded-full border-violet-500 text-violet-400 hover:bg-violet-500/10 hover:text-violet-300 bg-transparent"
      >
        Запросить демо
      </Button>
    </header>
  )
}

function PoolkyLogo() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="2" width="10" height="10" rx="3" fill="#8B5CF6" />
      <rect x="16" y="2" width="10" height="10" rx="3" fill="#8B5CF6" opacity="0.5" />
      <rect x="2" y="16" width="10" height="10" rx="3" fill="#8B5CF6" opacity="0.5" />
      <rect x="16" y="16" width="10" height="10" rx="3" fill="#8B5CF6" opacity="0.25" />
    </svg>
  )
}
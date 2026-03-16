const typeSamples = [
  { tag: "H1", size: "48px / 3rem", weight: "Bold (700)", lineHeight: "1.2", className: "text-5xl font-bold font-sans-n" },
  { tag: "H2", size: "32px / 2rem", weight: "Semibold (600)", lineHeight: "1.3", className: "text-3xl font-semibold font-sans-n" },
  { tag: "H3", size: "24px / 1.5rem", weight: "Semibold (600)", lineHeight: "1.4", className: "text-2xl font-semibold font-sans-n" },
  { tag: "Body", size: "16px / 1rem", weight: "Regular (400)", lineHeight: "1.6", className: "text-base font-sans-n" },
  { tag: "Small", size: "14px / 0.875rem", weight: "Regular (400)", lineHeight: "1.5", className: "text-sm font-sans-n" },
  { tag: "Caption", size: "12px / 0.75rem", weight: "Medium (500)", lineHeight: "1.4", className: "text-xs font-medium font-sans-n uppercase tracking-wider" },
];

const fontFamilies = [
  {
    name: "Core Sans N",
    role: "Основной · переписка",
    description: "Основной шрифт для деловой переписки, документов и внутренних коммуникаций.",
    className: "font-sans-n",
    sample: "АБВГДЕЖЗИКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзиклмнопрстуфхцчшщъыьэюя 0123456789",
  },
  {
    name: "Core Sans E",
    role: "Соцсети",
    description: "Используется для контента в социальных сетях, постов, сторис и рекламных креативов.",
    className: "font-sans-e",
    sample: "АБВГДЕЖЗИКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзиклмнопрстуфхцчшщъыьэюя 0123456789",
  },
  {
    name: "Core Sans BR",
    role: "Визитки",
    description: "Применяется на визитных карточках и представительских материалах.",
    className: "font-sans-br",
    sample: "АБВГДЕЖЗИКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзиклмнопрстуфхцчшщъыьэюя 0123456789",
  },
];

const Typography = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-3">Раздел 04</p>
      <h1 className="text-4xl font-sans-n font-bold text-foreground mb-8">Типографика</h1>

      {/* Fonts */}
      <div className="grid gap-6 md:grid-cols-2 mb-16">
        {fontFamilies.map((f) => (
          <div key={f.name} className="p-6 rounded-lg border border-border">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-1">{f.role}</p>
            <p className={`text-3xl ${f.className} font-bold text-foreground mb-2`}>{f.name}</p>
            <p className="text-sm text-muted-foreground">{f.description}</p>
            <p className={`mt-4 text-lg ${f.className} text-foreground break-all`}>{f.sample}</p>
          </div>
        ))}
      </div>

      {/* Hierarchy */}
      <h2 className="text-2xl font-sans-n font-semibold mb-6">Иерархия стилей</h2>
      <div className="space-y-6 mb-16">
        {typeSamples.map((s) => (
          <div key={s.tag} className="flex flex-col md:flex-row md:items-baseline gap-4 pb-6 border-b border-border last:border-0">
            <div className="md:w-48 shrink-0">
              <span className="text-xs font-mono text-muted-foreground uppercase">{s.tag}</span>
              <div className="text-xs text-muted-foreground mt-1 space-y-0.5">
                <p>{s.size}</p>
                <p>{s.weight}</p>
                <p>Интерлиньяж: {s.lineHeight}</p>
              </div>
            </div>
            <p className={`${s.className} text-foreground`}>
              Группа Смарт — инвестиции в будущее
            </p>
          </div>
        ))}
      </div>

      {/* Usage example */}
      <h2 className="text-2xl font-sans-n font-semibold mb-6">Пример в контексте</h2>
      <div className="p-8 rounded-lg border border-border bg-card">
        <h3 className="text-2xl font-sans-n font-semibold text-foreground mb-3">
          Инвестиции в недвижимость малых форматов
        </h3>
        <p className="text-base font-sans-n text-muted-foreground leading-relaxed mb-4">
          Группа Смарт осуществляет инвестиции в производственно-складскую недвижимость, индустриальные парки и земельные участки. Наша стратегия основана на глубоком анализе рынка и долгосрочном видении развития регионов.
        </p>
        <p className="text-xs font-sans-n uppercase tracking-[0.2em] text-muted-foreground">
          Группа Смарт · 2026
        </p>
      </div>
    </div>
  );
};

export default Typography;

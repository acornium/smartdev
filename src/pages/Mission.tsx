import { Shield, TrendingUp, Building2, Compass } from "lucide-react";

const values = [
  { icon: Shield, title: "Надёжность", desc: "Стабильный и ответственный подход к инвестициям, основанный на глубокой аналитике и многолетнем опыте" },
  { icon: TrendingUp, title: "Стратегическое развитие", desc: "Долгосрочное видение рынка и системный подход к росту портфеля активов" },
  { icon: Building2, title: "Экспертиза", desc: "Глубокое понимание сегмента недвижимости малых форматов и индустриальных объектов" },
  { icon: Compass, title: "Ориентир на результат", desc: "Создание измеримой ценности для партнёров и развитие инфраструктуры регионов" },
];

const directions = [
  "Производственно-складская недвижимость",
  "Индустриальные парки",
  "Земельные участки",
  "Торговая недвижимость",
];

const Mission = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-3">Раздел 01</p>
      <h1 className="text-4xl font-sans-n font-bold text-foreground mb-8">Миссия и ценности</h1>

      {/* Mission */}
      <div className="bg-primary text-primary-foreground rounded-lg p-8 mb-12">
        <p className="text-xs uppercase tracking-[0.2em] opacity-60 mb-3">Миссия</p>
        <p className="text-xl md:text-2xl font-sans-n leading-relaxed">
          Инвестиции в развитие недвижимости малых форматов в России — создание качественной инфраструктуры для бизнеса и роста регионов.
        </p>
      </div>

      {/* Values */}
      <h2 className="text-2xl font-sans-n font-semibold mb-6">Ценности бренда</h2>
      <div className="grid gap-6 md:grid-cols-2 mb-16">
        {values.map((v) => (
          <div key={v.title} className="flex gap-4 p-5 rounded-lg border border-border">
            <v.icon className="h-6 w-6 text-primary shrink-0 mt-0.5" />
            <div>
              <h3 className="font-sans-n font-semibold text-foreground mb-1">{v.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Directions */}
      <h2 className="text-2xl font-sans-n font-semibold mb-6">Направления деятельности</h2>
      <div className="grid gap-3 md:grid-cols-2 mb-16">
        {directions.map((d, i) => (
          <div key={d} className="flex items-center gap-3 p-4 bg-muted rounded-lg">
            <span className="text-xs font-mono text-muted-foreground">0{i + 1}</span>
            <span className="text-foreground font-medium">{d}</span>
          </div>
        ))}
      </div>

      {/* Tone of Voice */}
      <h2 className="text-2xl font-sans-n font-semibold mb-4">Tone of Voice</h2>
      <p className="text-muted-foreground leading-relaxed mb-4">
        Коммуникация бренда «Группа Смарт» строится на трёх принципах:
      </p>
      <div className="flex flex-wrap gap-3">
        {["Деловой", "Уверенный", "Экспертный"].map((t) => (
          <span key={t} className="px-4 py-2 rounded-full border border-primary/20 text-sm font-medium text-primary bg-primary/5">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Mission;

import { Link } from "react-router-dom";
import { Target, Image, Palette, Type, FileText, ArrowRight } from "lucide-react";
import logoUrl from "/logo-smart-group.svg";

const sections = [
  { title: "Миссия и ценности", desc: "Позиционирование и философия бренда", url: "/mission", icon: Target },
  { title: "Логотип", desc: "Правила использования логотипа", url: "/logo", icon: Image },
  { title: "Цветовая палитра", desc: "Фирменные цвета и коды", url: "/colors", icon: Palette },
  { title: "Типографика", desc: "Шрифты и текстовые стили", url: "/typography", icon: Type },
  { title: "Фирменные носители", desc: "Визитки, бланки, презентации", url: "/stationery", icon: FileText },
];

const Index = () => {
  return (
    <div className="min-h-[calc(100vh-3.5rem)]">
      {/* Hero */}
      <section className="relative flex flex-col items-center justify-center py-32 px-6 text-primary-foreground overflow-hidden" style={{ backgroundColor: '#002137' }}>
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/20 -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-white/10 translate-y-1/3 -translate-x-1/4" />
        </div>
        <div className="relative z-10 text-center max-w-3xl animate-fade-in">
          <img
            src={logoUrl}
            alt="Логотип Группа Смарт"
            className="h-24 mx-auto mb-8"
          />
          <p className="text-lg md:text-xl opacity-80 font-sans-n max-w-xl mx-auto leading-relaxed">
            Многопрофильная инвестиционная группа, финансирующая проекты с высоким потенциалом развития в различных отраслях экономики России
          </p>
          <div className="mt-4 text-sm uppercase tracking-[0.25em] opacity-50">
            Брендбук
          </div>
        </div>
      </section>

      {/* Navigation Grid */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-2xl font-sans-n font-semibold text-foreground mb-10">
          Разделы брендбука
        </h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {sections.map((s, i) => (
            <Link
              key={s.url}
              to={s.url}
              className="group flex flex-col p-6 rounded-lg border border-border bg-card hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <s.icon className="h-6 w-6 text-primary mb-4" />
              <h3 className="text-lg font-sans-n font-semibold text-card-foreground mb-1">{s.title}</h3>
              <p className="text-sm text-muted-foreground flex-1">{s.desc}</p>
              <div className="mt-4 flex items-center text-sm text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                Перейти <ArrowRight className="ml-1 h-4 w-4" />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Index;

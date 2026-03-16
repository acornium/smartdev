import { X } from "lucide-react";
import logoUrl from "/logo-smart-group.svg";

const Logo = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-3">Раздел 02</p>
      <h1 className="text-4xl font-sans-n font-bold text-foreground mb-8">Логотип</h1>

      {/* Main logo */}
      <h2 className="text-2xl font-sans-n font-semibold mb-4">Основная версия</h2>
      <div className="grid gap-6 md:grid-cols-2 mb-12">
        <div className="flex items-center justify-center p-12 rounded-lg border border-border bg-white">
          <img src={logoUrl} alt="Логотип на белом фоне" className="max-h-32 object-contain brightness-0" />
        </div>
        <div className="flex items-center justify-center p-12 rounded-lg bg-primary">
          <img src={logoUrl} alt="Логотип на тёмном фоне" className="max-h-32 object-contain" />
        </div>
      </div>

      {/* Clear space */}
      <h2 className="text-2xl font-sans-n font-semibold mb-4">Охранное поле</h2>
      <p className="text-muted-foreground mb-6 leading-relaxed">
        Минимальное расстояние вокруг логотипа равно высоте символа «С» в слове «Смарт». Это пространство должно оставаться свободным от любых графических и текстовых элементов.
      </p>
      <div className="flex items-center justify-center p-16 rounded-lg border border-border mb-12 bg-muted/30">
        <div className="relative border-2 border-dashed border-primary/30 p-10">
          <img src={logoUrl} alt="Охранное поле логотипа" className="h-16 object-contain brightness-0" />
          <span className="absolute -top-5 left-1/2 -translate-x-1/2 text-[10px] text-primary font-mono">X</span>
          <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[10px] text-primary font-mono">X</span>
          <span className="absolute top-1/2 -left-4 -translate-y-1/2 text-[10px] text-primary font-mono">X</span>
          <span className="absolute top-1/2 -right-4 -translate-y-1/2 text-[10px] text-primary font-mono">X</span>
        </div>
      </div>

      {/* Min size */}
      <h2 className="text-2xl font-sans-n font-semibold mb-4">Минимальный размер</h2>
      <p className="text-muted-foreground mb-6 leading-relaxed">
        Для сохранения читаемости логотип не должен использоваться в размере менее 24 мм по ширине в печати и 80 px на экране.
      </p>
      <div className="flex items-center gap-8 mb-12">
        <div className="text-center">
          <img src={logoUrl} alt="Минимальный размер" className="h-6 object-contain mb-2 brightness-0" />
          <span className="text-xs text-muted-foreground font-mono">80px / 24mm</span>
        </div>
      </div>

      {/* Wrong usage */}
      <h2 className="text-2xl font-sans-n font-semibold mb-4">Недопустимое использование</h2>
      <div className="grid gap-4 md:grid-cols-3 mb-8">
        {[
          { label: "Не растягивать", style: "scale-x-150" },
          { label: "Не поворачивать", style: "rotate-45" },
          { label: "Не менять цвет", style: "hue-rotate-180 saturate-200" },
        ].map((item) => (
          <div key={item.label} className="relative flex flex-col items-center justify-center p-8 rounded-lg border border-destructive/20 bg-destructive/5">
            <X className="absolute top-3 right-3 h-5 w-5 text-destructive" />
            <img
              src={logoUrl}
              alt={item.label}
              className="h-12 object-contain mb-3 brightness-0"
              style={{ filter: item.style.includes("hue") ? `brightness(0) ${item.style}` : `brightness(0)`, transform: item.style.includes("scale") || item.style.includes("rotate") ? item.style.replace("scale-x-150", "scaleX(1.5)").replace("rotate-45", "rotate(45deg)") : undefined }}
            />
            <span className="text-xs text-destructive font-medium">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Logo;

import logoUrl from "/logo-smart-group.svg";

const Stationery = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-3">Раздел 05</p>
      <h1 className="text-4xl font-sans-n font-bold text-foreground mb-8">Фирменные носители</h1>

      {/* Business Card */}
      <h2 className="text-2xl font-sans-n font-semibold mb-4">Визитная карточка</h2>
      <div className="grid gap-6 md:grid-cols-2 mb-16">
        {/* Front */}
        <div className="aspect-[1.75/1] rounded-lg bg-primary text-primary-foreground flex flex-col justify-between p-6 shadow-lg">
          <img src={logoUrl} alt="Logo" className="h-8 object-contain object-left" />
          <div>
            <p className="font-sans-n font-semibold text-sm">Марат Симонянц</p>
            <p className="text-xs opacity-70 mt-0.5">Председатель совета директоров</p>
          </div>
        </div>
        {/* Back */}
        <div className="aspect-[1.75/1] rounded-lg bg-white border border-border flex flex-col justify-between p-6 shadow-lg">
          <div />
          <div className="space-y-1 text-xs text-muted-foreground">
            <p>+7 (985) 999 00 88</p>
            <p>+7 (495) 989 95 93</p>
            <p>ms@smartdg.ru</p>
            <p>г. Москва, ул. Василисы Кожиной, д.1 к.1</p>
          </div>
        </div>
      </div>

      {/* Letterhead */}
      <h2 className="text-2xl font-sans-n font-semibold mb-4">Фирменный бланк</h2>
      <div className="aspect-[1/1.414] max-w-md rounded-lg border border-border bg-white p-8 mb-16 shadow-lg">
        <div className="flex items-center justify-between mb-12 pb-4 border-b border-border">
          <img src={logoUrl} alt="Logo" className="h-6 object-contain brightness-0" />
          <div className="text-[8px] text-muted-foreground text-right space-y-0.5">
            <p>ООО «Группа Смарт»</p>
            <p>ИНН 7701234567</p>
          </div>
        </div>
        <div className="space-y-3">
          <div className="h-2 bg-muted rounded w-1/3" />
          <div className="h-2 bg-muted rounded w-full" />
          <div className="h-2 bg-muted rounded w-full" />
          <div className="h-2 bg-muted rounded w-5/6" />
          <div className="h-2 bg-muted rounded w-full" />
          <div className="h-2 bg-muted rounded w-2/3" />
        </div>
        <div className="mt-auto pt-12">
          <div className="h-2 bg-muted rounded w-1/4" />
        </div>
      </div>

      {/* Envelope */}
      <h2 className="text-2xl font-sans-n font-semibold mb-4">Конверт</h2>
      <div className="aspect-[2.2/1] max-w-lg rounded-lg border border-border bg-white p-6 mb-16 shadow-lg flex flex-col justify-between">
        <img src={logoUrl} alt="Logo" className="h-5 object-contain object-left brightness-0" />
        <div className="self-end text-right space-y-0.5">
          <div className="h-1.5 bg-muted rounded w-32 ml-auto" />
          <div className="h-1.5 bg-muted rounded w-40 ml-auto" />
          <div className="h-1.5 bg-muted rounded w-28 ml-auto" />
        </div>
      </div>

      {/* Email signature */}
      <h2 className="text-2xl font-sans-n font-semibold mb-4">Подпись для e-mail</h2>
      <div className="max-w-md rounded-lg border border-border bg-white p-5 mb-16 shadow-lg">
        <div className="flex gap-4">
          <div className="w-1 bg-primary rounded-full shrink-0" />
          <div>
            <p className="text-xs text-muted-foreground mb-2">С уважением,</p>
            <p className="font-sans-n font-semibold text-sm text-foreground">Андрей Филев</p>
            <p className="text-xs text-muted-foreground">Инвестиционный директор</p>
            <p className="text-xs text-muted-foreground">АО Группа Смарт</p>
            <p className="text-xs text-muted-foreground mt-2">+7 (916) 657-01-71</p>
            <p className="text-xs text-muted-foreground">a.filev@smartdg.ru</p>
            <img src={logoUrl} alt="Logo" className="h-4 object-contain object-left mt-3 brightness-0" />
          </div>
        </div>
      </div>

      {/* Presentation slide */}
      <h2 className="text-2xl font-sans-n font-semibold mb-4">Обложка презентации</h2>
      <div className="aspect-video max-w-2xl rounded-lg bg-primary text-primary-foreground flex flex-col items-center justify-center p-12 shadow-lg">
        <img src={logoUrl} alt="Logo" className="h-12 object-contain mb-6" />
        <h3 className="text-2xl md:text-3xl font-sans-n font-bold text-center">Группа Смарт</h3>
        <p className="text-sm opacity-60 mt-2 tracking-wider uppercase">Инвестиции в недвижимость</p>
      </div>

      {/* Merch */}
      <h2 className="text-2xl font-sans-n font-semibold mt-16 mb-6">Мерч и сувенирная продукция</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {[
          { file: "кепка.png", label: "Кепка" },
          { file: "кружка.png", label: "Кружка" },
          { file: "ланьярд.png", label: "Ланьярд" },
          { file: "термос.png", label: "Термос" },
          { file: "толстовка.png", label: "Толстовка" },
          { file: "шоппер.png", label: "Шоппер" },
        ].map((item) => (
          <div key={item.file} className="rounded-lg border border-border overflow-hidden">
            <div className="aspect-[4/3] bg-muted/30 flex items-center justify-center">
              <img
                src={`${import.meta.env.BASE_URL}${item.file}`}
                alt={item.label}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="p-3 border-t border-border">
              <p className="text-sm font-sans-n font-medium text-foreground">{item.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stationery;

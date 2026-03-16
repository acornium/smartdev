import { useState } from "react";
import { Check, Copy } from "lucide-react";

interface ColorCard {
  name: string;
  hex: string;
  rgb: string;
  cmyk: string;
  hsl: string;
  bg: string;
  textClass: string;
}

const colors: ColorCard[] = [
  {
    name: "Тёмно-синий (основной)",
    hex: "#002137",
    rgb: "0, 33, 55",
    cmyk: "100, 40, 0, 78",
    hsl: "200° 100% 11%",
    bg: "#002137",
    textClass: "text-white",
  },
  {
    name: "Белый (дополнительный)",
    hex: "#FFFFFF",
    rgb: "255, 255, 255",
    cmyk: "0, 0, 0, 0",
    hsl: "0° 0% 100%",
    bg: "#FFFFFF",
    textClass: "text-foreground",
  },
  {
    name: "Светло-серый (фоновый)",
    hex: "#F4F5F7",
    rgb: "244, 245, 247",
    cmyk: "1, 1, 0, 3",
    hsl: "220° 14% 96%",
    bg: "#F4F5F7",
    textClass: "text-foreground",
  },
  {
    name: "Средне-серый (текстовый)",
    hex: "#6B7280",
    rgb: "107, 114, 128",
    cmyk: "16, 11, 0, 50",
    hsl: "220° 9% 46%",
    bg: "#6B7280",
    textClass: "text-white",
  },
];

const Colors = () => {
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = (value: string, label: string) => {
    navigator.clipboard.writeText(value);
    setCopied(label);
    setTimeout(() => setCopied(null), 1500);
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-3">Раздел 03</p>
      <h1 className="text-4xl font-sans-n font-bold text-foreground mb-4">Цветовая палитра</h1>
      <p className="text-muted-foreground mb-10 leading-relaxed max-w-2xl">
        Фирменная палитра строится на контрасте тёмно-синего и белого. Нажмите на код цвета, чтобы скопировать его в буфер обмена.
      </p>

      <div className="grid gap-6 md:grid-cols-2">
        {colors.map((c) => (
          <div key={c.hex} className="rounded-lg border border-border overflow-hidden">
            <div
              className={`h-32 flex items-end p-5 ${c.textClass}`}
              style={{ backgroundColor: c.bg }}
            >
              <span className="text-lg font-sans-n font-semibold">{c.name}</span>
            </div>
            <div className="p-5 space-y-2">
              {[
                { label: "HEX", value: c.hex },
                { label: "RGB", value: c.rgb },
                { label: "CMYK", value: c.cmyk },
                { label: "HSL", value: c.hsl },
              ].map((item) => (
                <button
                  key={item.label}
                  onClick={() => copyToClipboard(item.value, `${c.hex}-${item.label}`)}
                  className="w-full flex items-center justify-between py-1.5 px-3 rounded hover:bg-muted transition-colors text-left group"
                >
                  <span className="text-xs text-muted-foreground font-mono uppercase">{item.label}</span>
                  <span className="flex items-center gap-2 text-sm font-mono text-foreground">
                    {item.value}
                    {copied === `${c.hex}-${item.label}` ? (
                      <Check className="h-3.5 w-3.5 text-green-600" />
                    ) : (
                      <Copy className="h-3.5 w-3.5 opacity-0 group-hover:opacity-50 transition-opacity" />
                    )}
                  </span>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Colors;

import React from "react";

const countries = [
  { name: "Россия", flag: "/ru.svg", alt: "Флаг России" },
  { name: "Армения", flag: "/am.svg", alt: "Флаг Армении" },
  { name: "Грузия", flag: "/ge.svg", alt: "Флаг Грузии" },
  { name: "Турция", flag: "/tr.svg", alt: "Флаг Турции" },
  { name: "ОАЭ", flag: "/ae.svg", alt: "Флаг ОАЭ" },
];

const exchanges = [
  { img: "/270.png", alt: "Binance", url: "https://www.binance.com" },
  { img: "/294.png", alt: "OKX", url: "https://www.okx.com" },
  { img: "/521.png", alt: "Bybit", url: "https://www.bybit.com" },
  { img: "/544.png", alt: "MEXC", url: "https://www.mexc.com" },
];

const countriesCol1 = [
  { name: "Россия", flag: "/ru.svg", alt: "Флаг России" },
  { name: "Армения", flag: "/am.svg", alt: "Флаг Армении" },
  { name: "Грузия", flag: "/ge.svg", alt: "Флаг Грузии" },
];
const countriesCol2 = [
  { name: "Турция", flag: "/tr.svg", alt: "Флаг Турции" },
  { name: "ОАЭ", flag: "/ae.svg", alt: "Флаг ОАЭ" },
];

const Footer = () => (
  <footer className="w-full bg-black text-white py-8 px-2 md:px-8 shadow-lg footer-shadow">
    <div className="container max-w-[960px] mx-auto flex flex-col md:flex-row items-center md:items-start justify-between text-[12px] md:text-[14px] gap-8 md:gap-0">
      {/* Левая колонка */}
      <div className="flex-1 flex flex-col items-center md:items-start mb-4 md:mb-0 text-center md:text-left">
        <div className="mb-2">© 2021–2025 Fiat24.ru — сервис по организации обмена криптовалюты.</div>
        <div className="flex flex-row flex-nowrap items-center justify-center md:justify-start gap-2">
          <span>Связаться с нами:</span>
          <a href="mailto:info@fiat24.ru" className="underline">info@fiat24.ru</a>
        </div>
      </div>
      {/* Центр */}
      <div className="flex-1 flex flex-col items-center">
        <div className="font-bold mb-2">Где мы работаем</div>
        <div className="flex flex-row gap-6">
          <ul className="flex flex-col gap-1">
            {countriesCol1.map((c) => (
              <li key={c.name} className="flex items-center gap-2">
                <img src={c.flag} alt={c.alt} className="w-5 h-4 object-contain rounded-sm border border-white/30" />
                <span>{c.name}</span>
              </li>
            ))}
          </ul>
          <ul className="flex flex-col gap-1">
            {countriesCol2.map((c) => (
              <li key={c.name} className="flex items-center gap-2">
                <img src={c.flag} alt={c.alt} className="w-5 h-4 object-contain rounded-sm border border-white/30" />
                <span>{c.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* Правая колонка */}
      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="font-bold mb-2">Интеграция с биржами</div>
        <div className="flex flex-row flex-wrap gap-3 items-center justify-center">
          {exchanges.map((ex) => (
            <a
              key={ex.alt}
              href={ex.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <img src={ex.img} alt={ex.alt} className="w-8 h-8 md:w-10 md:h-10 object-contain" />
            </a>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;

import React from "react";

const Footer = () => (
  <footer className="w-full bg-black text-white py-6 flex flex-col items-center justify-center text-center text-[12px] md:text-[14px] shadow-lg footer-shadow">
    <div>© 2021–2025 Fiat24.ru — сервис по организации обмена криптовалюты.</div>
    <div>Наши адреса:<br />Россия, Москва, Москва-Сити, Башня «Федерация»<br />ОАЭ, Дубай, Downtown Dubai, Burj Khalifa</div>
    <div>E-mail: <a href="mailto:info@fiat24.ru" className="underline">info@fiat24.ru</a></div>
  </footer>
);

export default Footer;

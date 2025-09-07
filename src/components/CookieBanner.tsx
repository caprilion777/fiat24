"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

const COOKIE_KEY = "cookie_consent";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    console.log("CookieBanner mounted");
    if (typeof window !== "undefined") {
      const consent = localStorage.getItem(COOKIE_KEY);
      console.log("CookieBanner consent:", consent);
      setVisible(!consent);
    }
  }, []);

  const handleChoice = (value: "accepted" | "declined") => {
    localStorage.setItem(COOKIE_KEY, value);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="cookie-banner-overlay">
      <div className="cookie-banner-block">
        <span>
          Мы используем cookies для улучшения работы сайта. Подробнее см. в нашей {" "}
          <Link href="/cookies-policy" className="cookie-banner-link" target="_blank">
            <b>Политике конфиденциальности</b>
          </Link>.
        </span>
        <div className="cookie-banner-actions">
          <button className="cookie-btn accept" onClick={() => handleChoice("accepted")}>Согласиться</button>
          <button className="cookie-btn decline" onClick={() => handleChoice("declined")}>Отказаться</button>
        </div>
      </div>
    </div>
  );
}

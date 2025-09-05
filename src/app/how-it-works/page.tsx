"use client";

import React from "react";
import { motion } from "framer-motion";

const bg = "#F9F9F9";
const text = "#1E1E1E";

const steps = [
  {
    title: "1. Оставьте заявку",
    content: (
      <div style={{ marginTop: 8, marginBottom: 8, marginLeft: 16, fontSize: 16 }}>
        <div>Перейдите в раздел «Оставить заявку», заполните форму (сумма, валюта, город получения, контакт в Telegram) и отправьте её.</div>
      </div>
    ),
  },
  {
    title: "2. Подтверждение и оплата",
    content: (
      <div style={{ marginTop: 8, marginBottom: 8, marginLeft: 16, fontSize: 16 }}>
        <div>Оператор свяжется с вами через Telegram, уточнит детали, курс и время встречи. Для бронирования сделки оплатите 5 USDT на официальный кошелёк сервиса.</div>
      </div>
    ),
  },
  {
    title: "3. Сделка",
    content: (
      <div style={{ marginTop: 8, marginBottom: 8, marginLeft: 16, fontSize: 16 }}>
        <div>На встрече проверяется сумма наличных, вы переводите криптовалюту и получаете деньги. Сделка завершается после подтверждения обеими сторонами.</div>
      </div>
    ),
  },
];

export default function HowItWorks() {
  return (
    <div style={{ background: bg, color: text, minHeight: "100vh", padding: 0 }}>
      <div
        style={{ maxWidth: 960, margin: "0 auto", background: bg, borderRadius: 16, color: text }}
        className="pt-[112px] md:pt-[112px] pb-8 md:pb-16 px-4 text-[16px] md:text-[18px]"
      >
        <h1
          className="font-bold mb-6 responsive-heading"
          style={{ color: text }}
        >
          {"Обмен криптовалюты на наличные — инструкция для клиентов"}
        </h1>
        <p className="mb-6 text-[16px] md:text-[18px]">
          Мы делаем процесс обмена быстрым, безопасным и прозрачным.
        </p>
        <ol className="mb-8 ml-6 text-[16px] md:text-[18px]">
          {steps.map((step, i) => (
            <motion.li
              key={step.title}
              className="relative mb-8"
              style={{ listStyle: "none" }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.18, duration: 0.5, type: "spring", stiffness: 60 }}
            >
              <span className="absolute left-0 top-1/2 -translate-y-1/2 text-[140px] md:text-[120px] font-bold opacity-20 select-none pointer-events-none z-0" style={{ color: '#169EAD' }}>
                {i + 1}
              </span>
              <div className="relative z-10">
                <span className="step-title" style={{ color: text }}>{step.title}</span>
                <br />
                {step.content}
              </div>
            </motion.li>
          ))}
        </ol>
        <h2 className="font-bold mb-6 responsive-heading" style={{ color: text }}>
          {"Почему это безопасно и удобно"}
        </h2>
        <ul style={{ marginLeft: 24, fontSize: 16 }}>
          <li>
            <span role="img" aria-label="check">✔</span> <b>Прозрачность:</b> вы заранее знаете сумму и условия сделки.
          </li>
          <li>
            <span role="img" aria-label="check">✔</span> <b>Надёжность:</b> все операции контролируются нашими операторами.
          </li>
          <li>
            <span role="img" aria-label="check">✔</span> <b>Экономия времени:</b> не нужно искать обменники и ждать очереди.
          </li>
        </ul>
      </div>
    </div>
  );
}

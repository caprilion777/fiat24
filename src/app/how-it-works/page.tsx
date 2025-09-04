"use client";

import React from "react";
import { motion } from "framer-motion";

const bg = "#A09D9B";
const text = "#0F0F0F";

const steps = [
  {
    title: "1. Оставьте заявку",
    content: (
      <ul style={{ marginTop: 8, marginBottom: 8, marginLeft: 16, listStyle: 'disc' }}>
        <li>Перейдите в раздел «Оставить заявку», заполните форму (сумма, валюта, город получения, контакт в Telegram) и отправьте её.</li>
      </ul>
    ),
  },
  {
    title: "2. Подтверждение и оплата",
    content: (
      <ul style={{ marginTop: 8, marginBottom: 8, marginLeft: 16, listStyle: 'disc' }}>
        <li>Оператор свяжется с вами через Telegram, уточнит детали, курс и время встречи. Для бронирования сделки оплатите 5 USDT на официальный кошелёк сервиса.</li>
      </ul>
    ),
  },
  {
    title: "3. Сделка",
    content: (
      <ul style={{ marginTop: 8, marginBottom: 8, marginLeft: 16, listStyle: 'disc' }}>
        <li>На встрече проверяется сумма наличных, вы переводите криптовалюту и получаете деньги. Сделка завершается после подтверждения обеими сторонами.</li>
      </ul>
    ),
  },
];

export default function HowItWorks() {
  return (
    <div style={{ background: bg, color: text, minHeight: "100vh", padding: 0 }}>
      <div
        style={{ maxWidth: 960, margin: "0 auto", background: bg, borderRadius: 16, color: '#1C1C1C' }}
        className="pt-[120px] md:pt-[72px] pb-8 md:pb-16 px-4"
      >
        <h1
          className="font-bold mb-6 text-[24px] md:text-[28px]"
          style={{ color: '#1C1C1C', textShadow: '0 2px 12px #fff' }}
        >
          {"Обмен криптовалюты на наличные — инструкция для клиентов"}
        </h1>
        <p style={{ fontSize: 18, marginBottom: 24 }}>
          Мы делаем процесс обмена быстрым, безопасным и прозрачным.
        </p>
        <ol style={{ fontSize: 18, marginLeft: 24, marginBottom: 32 }}>
          {steps.map((step, i) => (
            <motion.li
              key={step.title}
              className="relative mb-8"
              style={{ listStyle: "none" }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.18, duration: 0.5, type: "spring", stiffness: 60 }}
            >
              <span className="absolute left-0 top-1/2 -translate-y-1/2 text-[140px] md:text-[120px] font-bold text-white opacity-20 select-none pointer-events-none z-0">
                {i + 1}
              </span>
              <div className="relative z-10">
                <b className="hero-strong-shadow" style={{ color: '#fff' }}>{step.title}</b>
                <br />
                {step.content}
              </div>
            </motion.li>
          ))}
        </ol>
        <h2 className="text-[24px] md:text-[28px] font-bold mb-6" style={{ color: '#1C1C1C', textShadow: '0 2px 12px #fff' }}>
          {"Почему это безопасно и удобно"}
        </h2>
        <ul style={{ fontSize: 18, marginLeft: 24 }}>
          <li>
            <span role="img" aria-label="check">✅</span> <b>Прозрачность:</b> вы заранее знаете сумму и условия сделки.
          </li>
          <li>
            <span role="img" aria-label="check">✅</span> <b>Надёжность:</b> все операции контролируются нашими операторами.
          </li>
          <li>
            <span role="img" aria-label="check">✅</span> <b>Экономия времени:</b> не нужно искать обменники и ждать очереди.
          </li>
        </ul>
      </div>
    </div>
  );
}

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
        <li>Перейдите в раздел «Оставить заявку», нажав на соответствующую кнопку.</li>
      </ul>
    ),
  },
  {
    title: "2. Заполните форму",
    content: (
      <>
        Укажите необходимые данные:
        <ul className="list-disc pl-5" style={{ marginTop: 8, marginBottom: 8 }}>
          <li>Сумму и валюту, которую хотите получить (RUB, EUR, USD)</li>
          <li>Страну и город получения наличных</li>
          <li>Контакт в Telegram для обратной связи</li>
          <li>Дополнительные комментарии (по желанию)</li>
        </ul>
        После заполнения нажмите «Отправить заявку».
      </>
    ),
  },
  {
    title: "3. Обработка заявки",
    content: (
      <ul className="list-disc pl-5" style={{ marginTop: 8, marginBottom: 8 }}>
        <li>Ваша заявка проверяется операторами.</li>
        <li>Они свяжутся с вами через Telegram, уточнят детали и сообщат курс (обычно в USDT).</li>
        <li>Согласовывается время и место встречи.</li>
      </ul>
    ),
  },
  {
    title: "4. Оплата заявки",
    content: (
      <ul className="list-disc pl-5" style={{ marginTop: 8, marginBottom: 8 }}>
        <li>Стоимость бронирования сделки составляет 5 USDT.</li>
        <li>Оплата производится на официальный криптокошелёк сервиса.</li>
        <li>После оплаты ваша заявка подтверждается и резервируется.</li>
      </ul>
    ),
  },
  {
    title: "5. Регистрация сделки",
    content: (
      <ul className="list-disc pl-5" style={{ marginTop: 8, marginBottom: 8 }}>
        <li>Предоставьте оператору ФИО и контактный номер для регистрации сделки, получения пропуска и согласования времени посещения офиса.</li>
        <li>Данные обрабатываются конфиденциально в соответствии с внутренними правилами безопасности.</li>
      </ul>
    ),
  },
  {
    title: "6. Встреча и завершение сделки",
    content: (
      <ul className="list-disc pl-5" style={{ marginTop: 8, marginBottom: 8 }}>
        <li>Приходите в согласованное место в назначенное время.</li>
        <li>На месте проверяется согласованная с оператором сумма наличных.</li>
        <li>Затем вы переводите оговорённую сумму криптовалюты на указанный кошелёк и получаете наличные.</li>
        <li>Сделка считается завершённой после подтверждения обеими сторонами.</li>
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

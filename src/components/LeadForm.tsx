"use client";

import React, { useState } from "react";
import CustomSelect from "./CustomSelect";

const bg = "#F9F9F9";
const text = "#1E1E1E";

const Application = () => {
  const [form, setForm] = useState({
    amount: "",
    currency: "",
    country: "",
    city: "",
    telegram: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Тут можно добавить отправку на сервер
  };

  return (
    <section
      id="form"
      style={{ background: bg, color: text, minHeight: "100vh", padding: 0 }}
      className="flex justify-center"
    >
      <div
        style={{ maxWidth: 480, width: "100%", background: bg, color: text }}
        className="shadow-lg pt-[128px] md:pt-[112px] pb-8 md:pb-16 px-4 text-[16px] md:text-[18px] min-h-[600px] mx-auto w-full max-w-[480px]"
      >
        <h2 className="font-bold mb-6 responsive-heading text-center" style={{ color: text }}>
          Оставить заявку
        </h2>
        {submitted ? (
          <div className="text-center text-green-600 font-semibold py-8">Заявка отправлена!</div>
        ) : (
          <form className="flex flex-col gap-5" onSubmit={handleSubmit} autoComplete="off">
            <div>
              <label className="block mb-2 font-semibold" htmlFor="amount">Сумма</label>
              <input
                id="amount"
                name="amount"
                type="number"
                min="1"
                required
                value={form.amount}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#169EAD] placeholder:text-[#9CA3AF] bg-white"
                placeholder="Введите сумму"
              />
            </div>
            <CustomSelect
              id="currency"
              label={
                <>
                  Валюта <span className="font-normal" style={{ color: '#9CA3AF' }}>(RUB, USD, EUR)</span>
                </>
              }
              value={form.currency}
              onChange={val => setForm(f => ({ ...f, currency: val }))}
              options={[
                { value: "RUB", label: "RUB" },
                { value: "USD", label: "USD" },
                { value: "EUR", label: "EUR" },
              ]}
              placeholder="-- Выберите валюту --"
            />
            <CustomSelect
              id="country"
              label="Страна получения"
              value={form.country}
              onChange={val => setForm(f => ({ ...f, country: val }))}
              options={[
                { value: "Россия", label: "Россия" },
                { value: "Армения", label: "Армения" },
                { value: "Грузия", label: "Грузия" },
                { value: "Турция", label: "Турция" },
                { value: "ОАЭ", label: "ОАЭ" },
              ]}
              placeholder="-- Выберите страну --"
            />
            <div>
              <label className="block mb-2 font-semibold" htmlFor="city">Город получения</label>
              <input
                id="city"
                name="city"
                type="text"
                required
                value={form.city}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#169EAD] placeholder:text-[#9CA3AF] bg-white"
                placeholder="Введите город"
              />
            </div>
            <div>
              <label className="block mb-2 font-semibold" htmlFor="telegram">
                Контакт в Telegram <span className="font-normal" style={{ color: '#9CA3AF' }}>(телефон или @username)</span>
              </label>
              <input
                id="telegram"
                name="telegram"
                type="text"
                required
                value={form.telegram}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#169EAD] placeholder:text-[#9CA3AF] bg-white"
                placeholder="Введите данные"
              />
            </div>
            <button
              type="submit"
              className="bg-black text-white rounded-full px-5 py-2 text-base md:text-lg font-semibold transition hover:bg-gray-800 w-full mt-2 light-sweep"
            >
              Отправить заявку
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Application;

"use client";

import React from "react";

const bg = "#F9F9F9";
const text = "#1E1E1E";

export default function Conditions() {
  return (
    <div style={{ background: bg, color: text, minHeight: "100vh", padding: 0 }}>
      <div
        style={{ maxWidth: 960, margin: "0 auto", background: bg, borderRadius: 16, color: text }}
        className="pt-[112px] md:pt-[112px] pb-8 md:pb-16 px-4 text-[16px] md:text-[18px]"
      >
        <h1 className="font-bold mb-6 responsive-heading" style={{ color: text }}>
          {"Fiat24 — Условия использования, AML/KYC и Декларация"}
        </h1>
        <style>{`
          @media (max-width: 600px) {
            .usloviya-divider {
              border-top: 1px dashed #000 !important;
              border-image: repeating-linear-gradient(to right, #000 0 3px, transparent 3px 6px) 100 stretch !important;
            }
          }
        `}</style>
        <h2 className="font-bold mt-10 mb-6" style={{ color: text }}>1. Условия использования сервиса Fiat24</h2>
        <h3 className="font-bold mb-4 mt-4" style={{ color: text }}>Общие положения</h3>
        <p style={{ fontSize: 16, marginLeft: 24 }}>
          Fiat24 предоставляет сервис по организации обмена криптовалюты в деньги — наличные или безналичные (RUB, EUR, USD).
        </p>
        <p style={{ fontSize: 16, marginLeft: 24 }}>
          Использование сервиса означает согласие с настоящими Условиями и политикой AML/KYC.
        </p>
        <p style={{ fontSize: 16, marginLeft: 24 }}>
          Все операции проводятся в строгом соответствии с международными стандартами борьбы с отмыванием денег и финансированием терроризма (FATF/5AMLD).
        </p>
        <h3 className="font-bold mb-4 mt-4" style={{ color: text }}>Требования к пользователям</h3>
        <ul style={{ marginLeft: 24, fontSize: 16, listStyleType: 'none', paddingLeft: 0 }}>
          <li>• Пользователь совершеннолетний (18+) и дееспособный.</li>
          <li>• Предоставляет достоверные данные для проведения сделки.</li>
          <li>• Не использует сервис для противоправных целей.</li>
          <li>• Не включён в санкционные списки (OFAC SDN и др.).</li>
        </ul>
        <h3 className="font-bold mb-4 mt-4" style={{ color: text }}>Процесс обмена</h3>
        <ol style={{ listStyleType: 'decimal', marginLeft: 24, paddingLeft: 24, fontSize: 16 }}>
          <li>Пользователь оставляет заявку на сайте Fiat24.</li>
          <li>Оператор связывается через Telegram и уточняет условия сделки: сумму, валюту, способ получения (наличные или безналичные средства), время и порядок проведения операции.</li>
          <li>Для бронирования сделки пользователь переводит фиксированную сумму в размере 5 USDT на официальный криптокошелёк Fiat24.</li>
          <li>Проведение сделки:
            <ul style={{ marginLeft: 24, fontSize: 16, listStyleType: 'none', paddingLeft: 0 }}>
              <li>• <b>Наличные:</b> на встрече проверяется сумма, пользователь переводит криптовалюту и получает деньги.</li>
              <li>• <b>Безналичные средства:</b> криптовалюта переводится на официальный криптокошелёк Fiat24 по согласованному курсу, а эквивалентные денежные средства перечисляются на банковский счёт или иной согласованный реквизит клиента.</li>
            </ul>
          </li>
          <li>Сделка завершается после подтверждения обеими сторонами.</li>
        </ol>
        <h3 className="font-bold mb-4 mt-4" style={{ color: text }}>Безопасность и ответственность</h3>
        <ul style={{ marginLeft: 24, fontSize: 16, listStyleType: 'none', paddingLeft: 0 }}>
          <li>• Fiat24 обеспечивает прозрачность сделки, контроль операторов и защиту персональных данных.</li>
          <li>• Пользователь подтверждает законность владения криптовалютой и денежными средствами.</li>
          <li>• Fiat24 оставляет за собой право приостановить выполнение заявки при подозрении на нарушения AML/KYC или противоправные действия.</li>
        </ul>
        <h3 className="font-bold mb-4 mt-4" style={{ color: text }}>Персональные данные</h3>
        <ul style={{ marginLeft: 24, fontSize: 16, listStyleType: 'none', paddingLeft: 0 }}>
          <li>• Данные пользователя обрабатываются и используются исключительно для организации сделки.</li>
          <li>• Fiat24 гарантирует конфиденциальность данных и их нераспространение без согласия пользователя, кроме случаев, предусмотренных законом.</li>
        </ul>
        <h3 className="font-bold mb-4 mt-4" style={{ color: text }}>Отмена и возврат</h3>
        <ul style={{ marginLeft: 24, fontSize: 16, listStyleType: 'none', paddingLeft: 0 }}>
          <li>• Пользователь может отменить заявку до подтверждения условий сделки оператором.</li>
          <li>• Все переводы и оплаты проводятся через безопасные каналы Fiat24.</li>
        </ul>
        <h3 className="font-bold mb-4 mt-4" style={{ color: text }}>Ограничения и гарантии</h3>
        <ul style={{ marginLeft: 24, fontSize: 16, listStyleType: 'none', paddingLeft: 0 }}>
          <li>• Fiat24 не предоставляет инвестиционных или финансовых консультаций.</li>
          <li>• Пользователь осознаёт риски, связанные с операциями с криптовалютой.</li>
        </ul>
        <h2 className="font-bold mt-10 mb-6" style={{ color: text }}>2. AML / KYC политика</h2>
        <ul style={{ marginLeft: 24, fontSize: 16, listStyleType: 'none', paddingLeft: 0 }}>
          <li>• Fiat24 соблюдает международные стандарты AML/KYC (FATF/5AMLD).</li>
          <li>• Пользователь подтверждает законность владения криптовалютой и денежными средствами.</li>
          <li>• Fiat24 вправе приостанавливать операции при подозрении на нарушения или противоправную деятельность.</li>
          <li>• Все действия направлены на обеспечение прозрачности, безопасности и соответствия законодательству.</li>
        </ul>
        <h2 className="font-bold mt-10 mb-6" style={{ color: text }}>3. Декларация легальности активов</h2>
        <p style={{ fontSize: 16, marginLeft: 24 }}>Пользователь подтверждает, что:</p>
        <ul style={{ marginLeft: 24, fontSize: 16, listStyleType: 'none', paddingLeft: 0 }}>
          <li>• Все денежные средства и криптовалютные активы получены легальным путём и принадлежат ему.</li>
          <li>• Все операции совершаются исключительно в личных интересах.</li>
          <li>• Пользователь осознаёт риски, связанные с криптовалютой, и соблюдает налоговые обязательства в своей юрисдикции.</li>
          <li>• Пользователь действует самостоятельно, без давления третьих лиц, и несёт ответственность за достоверность предоставленных данных.</li>
          <li>• Пользователь подтверждает отсутствие претензий к объёмам и происхождению средств, а также своё намерение добровольно завершить сделку.</li>
        </ul>
      </div>
    </div>
  );
}

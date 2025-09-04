"use client";

import React from "react";

const bg = "#F9F9F9";
const text = "#1E1E1E";

export default function Conditions() {
  return (
    <div style={{ background: bg, color: text, minHeight: "100vh", padding: 0 }}>
      <div
        style={{ maxWidth: 960, margin: "0 auto", background: bg, borderRadius: 16, color: text }}
        className="pt-[120px] md:pt-[72px] pb-8 md:pb-16 px-4 text-[16px] md:text-[18px]"
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
        <hr className="usloviya-divider" style={{ border: 'none', borderTop: '1px dashed #000', margin: '40px 0', borderImage: 'repeating-linear-gradient(to right, #000 0 7px, transparent 7px 14px) 100 stretch' }} />
        <h2 className="font-bold mb-4" style={{ color: text }}>1. Условия использования сервиса Fiat24</h2>
        <h3 className="font-bold mb-2 mt-4" style={{ color: text }}>Общие положения</h3>
        <ul style={{ marginLeft: 24, fontSize: 16 }}>
          <li>Fiat24 предоставляет платформу для безопасного обмена криптовалюты на наличные.</li>
          <li>Использование сервиса означает согласие с настоящими Условиями и AML/KYC политикой.</li>
          <li>Все операции проводятся в соответствии с законодательством РФ и международными стандартами FATF/5AMLD.</li>
        </ul>
        <h3 className="font-bold mb-2 mt-4" style={{ color: text }}>Требования к пользователям</h3>
        <ul style={{ marginLeft: 24, fontSize: 16 }}>
          <li>Пользователь совершеннолетний (18+) и дееспособный.</li>
          <li>Предоставляет корректные данные: контакт в Telegram, сумму сделки, город получения наличных.</li>
          <li>Не использует сервис для противоправных целей.</li>
          <li>Не включён в санкционные списки (OFAC SDN и др.) и не является резидентом стран с ограничением использования сервиса (например, США, Украина).</li>
        </ul>
        <h3 className="font-bold mb-2 mt-4" style={{ color: text }}>Процесс обмена</h3>
        <ul style={{ marginLeft: 24, fontSize: 16 }}>
          <li>Пользователь оставляет заявку через сайт Fiat24.</li>
          <li>Оператор уточняет условия сделки: сумму, валюту, время и место встречи.</li>
          <li>Для бронирования сделки пользователь переводит фиксированную сумму на безопасный кошелёк Fiat24, используемый для гарантии сделки.</li>
          <li>Сделка завершается при передаче криптовалюты и наличных. Все операции проходят <b>соблюдая стандарты безопасности и прозрачности</b>.</li>
        </ul>
        <h3 className="font-bold mb-2 mt-4" style={{ color: text }}>Безопасность и ответственность</h3>
        <ul style={{ marginLeft: 24, fontSize: 16 }}>
          <li>Fiat24 обеспечивает контроль за процессом обмена, прозрачность и защиту данных пользователя.</li>
          <li>Все участники сделки соблюдают законодательство РФ и международные стандарты AML/KYC.</li>
          <li>Пользователь подтверждает законность владения криптовалютой и денежными средствами.</li>
          <li>Fiat24 оставляет за собой право временно приостановить обработку заявки при подозрении на нарушения AML/KYC или подозрительные действия.</li>
        </ul>
        <h3 className="font-bold mb-2 mt-4" style={{ color: text }}>Персональные данные</h3>
        <ul style={{ marginLeft: 24, fontSize: 16 }}>
          <li>Данные пользователя обрабатываются в соответствии с законодательством РФ и используются только для проведения сделки.</li>
          <li>Fiat24 гарантирует конфиденциальность данных и не передаёт их третьим лицам без согласия пользователя, кроме случаев, предусмотренных законом.</li>
        </ul>
        <h3 className="font-bold mb-2 mt-4" style={{ color: text }}>Отмена и возврат</h3>
        <ul style={{ marginLeft: 24, fontSize: 16 }}>
          <li>Пользователь может отменить заявку до подтверждения сделки оператором.</li>
          <li>Все переводы и оплаты проводятся через безопасные каналы сервиса Fiat24.</li>
        </ul>
        <h3 className="font-bold mb-2 mt-4" style={{ color: text }}>Ограничения и гарантии</h3>
        <ul style={{ marginLeft: 24, fontSize: 16 }}>
          <li>Fiat24 не предоставляет инвестиционных рекомендаций или финансовых консультаций.</li>
          <li>Пользователь осознаёт все риски, связанные с обменом криптовалюты.</li>
          <li>Споры решаются в соответствии с законодательством РФ; Fiat24 помогает урегулировать вопросы безопасности и прозрачности сделки.</li>
        </ul>
        <hr className="usloviya-divider" style={{ border: 'none', borderTop: '1px dashed #000', margin: '40px 0', borderImage: 'repeating-linear-gradient(to right, #000 0 7px, transparent 7px 14px) 100 stretch' }} />
        <h2 className="font-bold mb-4" style={{ color: text }}>2. AML / KYC политика</h2>
        <ul style={{ marginLeft: 24, fontSize: 16 }}>
          <li>Fiat24 соблюдает международные стандарты AML/KYC и обеспечивает их выполнение для всех операций.</li>
          <li>Пользователь подтверждает добросовестность владения криптовалютой и денежными средствами.</li>
          <li>В случае подозрений на противоправные действия Fiat24 оставляет за собой право приостановить обработку заявки.</li>
          <li>Все действия сервиса направлены на <b>максимальную прозрачность, безопасность и соответствие законодательству</b>.</li>
        </ul>
        <hr className="usloviya-divider" style={{ border: 'none', borderTop: '1px dashed #000', margin: '40px 0', borderImage: 'repeating-linear-gradient(to right, #000 0 7px, transparent 7px 14px) 100 stretch' }} />
        <h2 className="font-bold mb-4" style={{ color: text }}>3. Декларация легальности активов</h2>
        <div style={{ marginLeft: 24, fontSize: 16 }}>
          <p>Пользователь подтверждает:</p>
          <ol style={{ marginLeft: 24 }}>
            <li>Денежные средства и криптовалютные активы получены легальным путём и принадлежат ему.</li>
            <li>Все операции совершаются в личных интересах.</li>
            <li>Пользователь осознаёт функциональность и риски криптовалюты и соблюдает налоговые обязательства РФ.</li>
            <li>Криптовалютные кошельки и банковские счета принадлежат пользователю и используются только им.</li>
            <li>Пользователь не находится под влиянием третьих лиц и несёт ответственность за предоставленную информацию.</li>
            <li>Пользователь подтверждает отсутствие претензий к объёмам средств и криптовалюты и своё желание завершить сделку.</li>
          </ol>
        </div>
      </div>
    </div>
  );
}

import Image from 'next/image';

const Hero = () => (
  <section
    id="home"
    className="relative h-screen w-full bg-white overflow-hidden"
  >
    <Image
      src="/hero-bg.jpg"
      alt="Hero background"
      fill
      priority
      className="object-cover object-center pointer-events-none select-none"
      sizes="100vw"
    />
    <div className="absolute inset-0 bg-black/30 z-0" aria-hidden="true" />
    <div className="relative z-10 flex flex-col items-center justify-center h-full w-full px-4 text-center translate-y-16">
      <h1 className="text-white hero-strong-shadow text-[24px] md:text-[36px] font-bold mb-4">
        Обмен криптовалюты на наличные - быстро и удобно
      </h1>
      <p className="text-white hero-strong-shadow text-lg md:text-xl mb-6 max-w-2xl font-bold">
        Мы бронируем сделку и подтверждаем встречу
      </p>
      <div className="grid gap-2 mb-8 text-white text-base md:text-lg text-left font-bold hero-strong-shadow">
        <div>Почему это удобно для вас:</div>
        <div>• Экономия времени</div>
        <div>• Надёжность</div>
        <div>• Прозрачность</div>
      </div>
      <div className="flex flex-col gap-3 w-full max-w-md md:flex-row md:justify-center md:items-center mb-4">
        <a
          href="#form"
          className="bg-black text-white rounded-full px-5 py-2 text-base md:text-lg font-semibold transition hover:bg-gray-800 w-full md:w-auto text-center light-sweep"
        >
          Оставить заявку
        </a>
        <a
          href="https://t.me/<MY_HANDLE>"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white border border-white rounded-full px-5 py-2 text-base md:text-lg font-semibold transition w-full md:w-auto text-center"
        >
          Связаться в Telegram
        </a>
      </div>
    </div>
  </section>
);

export default Hero;

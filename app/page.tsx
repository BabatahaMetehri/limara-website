"use client";
import { useState } from "react";
import Image from "next/image";

const benefits = [
  {
    title: "Личный кабинет ученицы",
    text: "Все уроки, домашние задания, переводчик, неправильные глаголы и интерактивные задания — в одном красивом пространстве.",
    icon: "💻",
  },
  {
    title: "Уроки под тебя",
    text: "Темы, которые реально интересны: жизнь, отношения, учеба, путешествия, сериалы, TikTok, self-growth и уверенность.",
    icon: "🎀",
  },
  {
    title: "Нейролингвистический подход",
    text: "Интервальное повторение, мультисенсорное обучение и техники запоминания, чтобы английский оставался в голове.",
    icon: "🧠",
  },
  {
    title: "Без школьного стресса",
    text: "Никакого скучного натаскивания. Уроки проходят спокойно, тепло и с ощущением: «я реально могу говорить».",
    icon: "🫶",
  },
];

const prices = [
  {
    name: "Индивидуальные занятия",
    tag: "General English",
    price: "11 200 ₽",
    period: "8 занятий",
    desc: "Персональные уроки под твой уровень, цели и интересы.",
    highlight: true,
    message: "Хочу записаться на индивидуальные занятия 💖",
  },
  {
    name: "Speaking Club",
    tag: "A2–B2",
    price: "3 500 ₽",
    period: "4 занятия",
    desc: "Практическое погружение в язык на самые spicy темы.",
    highlight: false,
    message: "Хочу записаться в Speaking Club 💖",
  },
  {
    name: "Self-study курс",
    tag: "A1–A2",
    price: "3 000 ₽",
    period: "15 тем",
    desc: "Базовые темы для самостоятельного старта и уверенной базы.",
    highlight: false,
    message: "Хочу купить Self-study курс 💖",
  },
  {
    name: "Enhance Your Vocabulary",
    tag: "B1–B2",
    price: "3 000 ₽",
    period: "10 тем",
    desc: "Up-to-date topics for girls: пополняем словарный запас красиво и актуально.",
    highlight: false,
    message: "Хочу купить курс Enhance Your Vocabulary 💖",
  },
];

const testimonials = [
  {
    name: "EVA",
    photo: "/images/eva.jpg",
    text: "Очень нравится тичер! Уроки расслабленные, но при этом много информации. Все адаптировано под меня, мои жизненные ситуации и переживания. С обычным серьезным подходом я бы давно забросила.",
  },
  {
    name: "ADEL (identifies as a girl ig ✌️)",
    photo: "/images/adel.jpg",
    text: "Хороший педагог. Объясняет все понятно и доходчиво. Занимаемся несколько недель, чувствую, как сильно импрувнулась за это время. Всем советую! (no one asked lil bro)",
  },
  {
    name: "LIKA",
    photo: "/images/lika.jpg",
    text: "Очень классный преподаватель. Нет занудного натаскивания по учебникам. Изучение акцентируется на касающихся меня темах, поэтому материал лучше закрепляется.",
  },
  {
    name: "ANNA",
    photo: "/images/anna.jpg",
    text: "Спасибо тебе большое. Ты самый лучший учитель английского, мне невероятно повезло заниматься именно с тобой.",
  },
];

const faqs = [
  {
    q: "Для кого эти занятия?",
    a: "Для девушек, которые хотят улучшить английский, начать говорить, подтянуть базу, подготовиться к учебе или просто наконец перестать бояться языка.",
  },
  {
    q: "Можно ли заниматься из Казани?",
    a: "Да! Уроки проходят онлайн, поэтому можно заниматься из Казани, другого города или даже другой страны.",
  },
  {
    q: "Если у меня слабый уровень?",
    a: "Это абсолютно нормально. Уроки подстраиваются под твой уровень, темп и цели.",
  },
  {
    q: "Есть пробный урок?",
    a: "Да. Напиши «Демо» и получи пробный урок за 300 ₽.",
  },
];

function TelegramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248-1.97 9.289c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.17 14.17l-2.96-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.646.416z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#fff4fb] text-[#351827]">
      <Hero />
      <StickerMarquee />
      <Benefits />
      <LessonFlow />
      <Certificates />
      <Pricing />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}

function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section className="relative min-h-screen px-5 py-8 md:px-10">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,#ffb6e6_0,transparent_30%),radial-gradient(circle_at_80%_10%,#fff06a_0,transparent_22%),radial-gradient(circle_at_70%_80%,#ff78c8_0,transparent_30%)]" />
      <div className="absolute left-4 top-24 hidden rotate-[-12deg] rounded-full bg-white/70 px-5 py-2 text-sm font-black shadow-xl backdrop-blur sm:block">
        girls only ✦ Kazan / online
      </div>
      <div className="absolute right-8 top-28 hidden rotate-[10deg] rounded-3xl border-4 border-white bg-[#ff4fb8] px-5 py-3 text-lg font-black text-white shadow-2xl md:block">
        say it in English 💅
      </div>

      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/60 bg-white/50 px-5 py-3 shadow-lg backdrop-blur-xl">
        <div className="flex items-center gap-2">
          <div className="grid h-10 w-10 place-items-center rounded-full bg-[#ff4fb8] text-xl shadow-md">
            🎀
          </div>
          <div>
            <p className="text-sm font-black leading-none">Lara Talks</p>
            <p className="text-xs text-[#8f5072]">English for girls</p>
          </div>
        </div>

        <div className="hidden items-center gap-6 text-sm font-bold md:flex">
          <a href="#benefits" className="hover:text-[#ff2fa3]">
            Почему я
          </a>
          <a href="#certificates" className="hover:text-[#ff2fa3]">
            Сертификаты
          </a>
          <a href="#pricing" className="hover:text-[#ff2fa3]">
            Тарифы
          </a>
          <a href="#reviews" className="hover:text-[#ff2fa3]">
            Отзывы
          </a>
          <a
            href="https://t.me/gzonthemove"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-[#ff2fa3]"
            aria-label="Telegram"
          >
            <TelegramIcon className="h-5 w-5" />
          </a>
          <a
            href="https://www.instagram.com/laraatalks/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-[#ff2fa3]"
            aria-label="Instagram"
          >
            <InstagramIcon className="h-5 w-5" />
          </a>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setMenuOpen((o) => !o)}
            className="grid h-10 w-10 place-items-center rounded-full border-2 border-[#351827] bg-white/80 md:hidden"
            aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"}
          >
            {menuOpen ? (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="h-5 w-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="h-5 w-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
          <a
            href="https://t.me/gzonthemove"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[#351827] px-5 py-3 text-sm font-black text-white shadow-lg transition hover:scale-105"
          >
            Написать «Демо»
          </a>
        </div>
      </nav>

      {menuOpen && (
        <div className="mx-auto mt-2 max-w-7xl overflow-hidden rounded-3xl border border-white/60 bg-white/80 px-5 py-4 shadow-xl backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-1">
            {[
              ["#benefits", "Почему я"],
              ["#certificates", "Сертификаты"],
              ["#pricing", "Тарифы"],
              ["#reviews", "Отзывы"],
            ].map(([href, label]) => (
              <a
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="rounded-2xl px-4 py-3 text-lg font-black transition hover:bg-[#ffd6ef] hover:text-[#ff2fa3]"
              >
                {label}
              </a>
            ))}
            <div className="mt-3 flex gap-3 border-t border-[#351827]/10 pt-3">
              <a
                href="https://t.me/gzonthemove"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="flex flex-1 items-center justify-center gap-2 rounded-full bg-[#ff2fa3] px-4 py-3 font-black text-white transition hover:scale-105"
              >
                <TelegramIcon className="h-5 w-5" />
                Telegram
              </a>
              <a
                href="https://www.instagram.com/laraatalks/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="flex flex-1 items-center justify-center gap-2 rounded-full bg-[#351827] px-4 py-3 font-black text-white transition hover:scale-105"
              >
                <InstagramIcon className="h-5 w-5" />
                Instagram
              </a>
            </div>
          </div>
        </div>
      )}

      <div className="mx-auto grid max-w-7xl items-center gap-12 pb-16 pt-16 md:grid-cols-2 md:pt-24">
        <div>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border-2 border-white bg-white/70 px-4 py-2 text-sm font-black shadow-lg backdrop-blur">
            <span>✨</span>
            <span>пробный урок за 300 ₽</span>
          </div>

          <h1 className="max-w-3xl text-5xl font-black tracking-[-0.06em] text-[#351827] md:text-7xl lg:text-8xl">
            Английский,
            <span className="block text-[#ff2fa3] drop-shadow-sm">
              который тебе
            </span>
            реально зайдет
          </h1>

          <p className="mt-6 max-w-xl text-lg font-medium leading-8 text-[#684459] md:text-xl">
            Уютные онлайн-занятия для девушек, которые хотят говорить уверенно,
            понимать английский без паники и учиться без скучной школьной
            атмосферы.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="https://t.me/gzonthemove"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-full bg-[#ff2fa3] px-8 py-5 text-center text-lg font-black text-white shadow-[0_18px_0_#351827] transition hover:-translate-y-1 hover:shadow-[0_22px_0_#351827]"
            >
              Хочу демо-урок 💖
            </a>
            <a
              href="#pricing"
              className="rounded-full border-4 border-[#351827] bg-white px-8 py-5 text-center text-lg font-black text-[#351827] shadow-lg transition hover:bg-[#fff06a]"
            >
              Смотреть тарифы
            </a>
          </div>

          <div className="mt-10 grid max-w-xl grid-cols-3 gap-3">
            {["girls only", "online", "A1–B2"].map((item) => (
              <div
                key={item}
                className="rounded-3xl border-2 border-white bg-white/60 p-4 text-center font-black shadow-md backdrop-blur"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-lg">
          <div className="absolute -left-8 -top-8 h-28 w-28 rounded-full bg-[#fff06a] blur-sm" />
          <div className="absolute -bottom-8 -right-8 h-40 w-40 rounded-full bg-[#ff78c8] blur-sm" />

          <div className="relative rotate-2 rounded-[3rem] border-[10px] border-white bg-[#e875e7] p-4 shadow-2xl">
            <div className="absolute -right-5 -top-6 z-20 rotate-12 rounded-2xl bg-[#fff06a] px-5 py-3 text-2xl font-black shadow-xl">
              ✦ cute but smart 😘
            </div>

            <div className="overflow-hidden rounded-[2.3rem] bg-[#e875e7]">
              <Image
                src="/images/lara-hero.jpg"
                alt="Лара — преподаватель английского"
                width={900}
                height={900}
                className="aspect-square object-cover"
                priority
                unoptimized={true}
              />
            </div>
          </div>

          <div className="absolute -bottom-10 left-4 rotate-[-6deg] rounded-3xl border-4 border-white bg-white px-5 py-4 shadow-2xl">
            <p className="text-sm font-black text-[#ff2fa3]">Lara English</p>
            <p className="text-xl font-black">teacher bestie 🐾</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function StickerMarquee() {
  return (
    <section className="border-y-4 border-[#351827] bg-[#fff06a] py-4">
      <div className="flex animate-marquee gap-8 whitespace-nowrap text-2xl font-black tracking-tight text-[#351827]">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="flex gap-8">
            <span>🎀 Английский без стресса</span>
            <span>💖 Speaking confidence</span>
            <span>🐾 Girls only</span>
            <span>✨ Казань / online</span>
            <span>💅 No boring textbooks</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function Benefits() {
  return (
    <section id="benefits" className="px-5 py-24 md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 text-sm font-black uppercase tracking-[0.3em] text-[#ff2fa3]">
            Почему занятия работают
          </p>
          <h2 className="text-4xl font-black tracking-[-0.04em] md:text-6xl">
            Комфорт ученицы + результат — главные приоритеты
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4 wrap-break-word hyphens-auto">
          {benefits.map((item, index) => (
            <div
              key={item.title}
              className={`group rounded-4xl border-4 border-white p-6 shadow-xl transition hover:-translate-y-2 ${
                index % 2 === 0 ? "bg-white" : "bg-[#ffd6ef]"
              }`}
            >
              <div className="mb-6 grid h-16 w-16 place-items-center rounded-3xl bg-[#ff2fa3] text-3xl shadow-lg transition group-hover:rotate-12">
                {item.icon}
              </div>
              <h3 className="mb-3 text-2xl font-black">{item.title}</h3>
              <p className="leading-7 text-[#684459]">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function LessonFlow() {
  return (
    <section className="relative overflow-hidden px-5 py-24 md:px-10">
      <div className="absolute inset-0 skew-y-3 bg-[#ffd6ef]" />
      <div className="relative mx-auto max-w-7xl text-[#351827]">
        <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <div>
            <p className="mb-3 text-sm font-black uppercase tracking-[0.3em] text-[#ff2fa3]">
              Как это выглядит
            </p>
            <h2 className="text-4xl font-black tracking-[-0.04em] md:text-6xl text-[#351827]">
              Не урок. А твое личное English-пространство.
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#684459]">
              Каждое занятие строится вокруг твоего уровня, интересов и реальных
              ситуаций. Учим не “для галочки", а чтобы ты могла говорить.
            </p>
          </div>

          <div className="grid gap-4">
            {[
              [
                "01",
                "Пишешь «Демо»",
                "Лара узнает твой уровень, цель и что тебе важно.",
              ],
              [
                "02",
                "Пробный урок",
                "Мини-диагностика, знакомство и первые полезные задания.",
              ],
              [
                "03",
                "Персональный план",
                "Темы, формат, домашки и темп подбираются под тебя.",
              ],
              [
                "04",
                "Говоришь увереннее",
                "Через регулярную практику английский становится своим.",
              ],
            ].map(([num, title, text]) => (
              <div
                key={num}
                className="rounded-[2rem] border border-white bg-white/60 p-5"
              >
                <div className="flex gap-5">
                  <div className="text-4xl font-black text-[#ff2fa3]">
                    {num}
                  </div>
                  <div>
                    <h3 className="text-2xl text-[#351827]">{title}</h3>
                    <p className="mt-1 text-[#684459]">{text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Certificates() {
  return (
    <section id="certificates" className="px-5 py-24 md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-sm font-black uppercase tracking-[0.3em] text-[#ff2fa3]">
              Сертификаты
            </p>
            <h2 className="text-4xl font-black tracking-[-0.04em] md:text-6xl">
              Красиво, но с базой 💅
            </h2>
          </div>
          <p className="max-w-md text-lg leading-8 text-[#684459]">
            Лара не просто “милая teacher", она реально квалифицированный
            преподаватель.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <CertificateCard
            num="01"
            title="Международный сертификат преподавателя английского"
            subtitle="Аккредитованный Cambridge"
            image="/images/cert-cambridge.jpg"
          />
          <CertificateCard
            num="02"
            title="Дополнительный сертификат / обучение"
            subtitle="send me a small description of this certificate to add here"
            image="/images/cert-2.jpg"
          />
        </div>
      </div>
    </section>
  );
}

function CertificateCard({
  num,
  title,
  subtitle,
  image,
}: {
  num: string;
  title: string;
  subtitle: string;
  image: string;
}) {
  return (
    <div className="group overflow-hidden rounded-[2.5rem] border-4 border-white bg-white p-4 shadow-2xl">
      <div className="mb-4 flex items-center justify-between">
        <div className="rounded-full bg-[#351827] px-5 py-2 text-xl font-black text-white">
          {num}
        </div>
        <div className="rounded-full bg-[#fff06a] px-4 py-2 font-black">
          verified ✦
        </div>
      </div>

      <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-[#ffd6ef]">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition group-hover:scale-105"
        />
      </div>

      <div className="p-4">
        <h3 className="text-2xl font-black">{title}</h3>
        <p className="mt-2 text-[#684459]">{subtitle}</p>
      </div>
    </div>
  );
}

function Pricing() {
  return (
    <section id="pricing" className="px-5 py-24 md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-black uppercase tracking-[0.3em] text-[#ff2fa3]">
            Тарифы
          </p>
          <h2 className="text-4xl font-black tracking-[-0.04em] md:text-6xl">
            {/* Start your English learning journey today */}
            Начните свой путь изучения английского языка уже сегодня!
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {prices.map((item) => (
            <div
              key={item.name}
              className={`relative flex flex-col rounded-[2rem] border-4 p-6 shadow-xl transition hover:-translate-y-2 ${
                item.highlight
                  ? "border-[#351827] bg-[#ff2fa3] text-white shadow-[0_18px_0_#351827]"
                  : "border-white bg-white"
              }`}
            >
              {item.highlight && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 rounded-full bg-[#fff06a] px-5 py-2 text-sm font-black text-[#351827] shadow-lg">
                  popular
                </div>
              )}

              <p
                className={`mb-3 inline-block rounded-full px-3 py-1 text-xs font-black uppercase ${
                  item.highlight
                    ? "bg-white text-[#ff2fa3]"
                    : "bg-[#ffd6ef] text-[#ff2fa3]"
                }`}
              >
                {item.tag}
              </p>

              <h3 className="min-h-16 text-2xl font-black">{item.name}</h3>
              <p className="mt-4 text-sm font-bold opacity-80">{item.period}</p>
              <p className="mt-1 text-4xl font-black">{item.price}</p>
              <p
                className={`mt-5 leading-7 ${item.highlight ? "text-white/80" : "text-[#684459]"}`}
              >
                {item.desc}
              </p>

              <a
                href={`https://t.me/gzonthemove?text=${encodeURIComponent(item.message)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-auto block rounded-full px-5 py-4 text-center font-black transition hover:scale-105 ${
                  item.highlight
                    ? "bg-white text-[#351827]"
                    : "bg-[#351827] text-white"
                }`}
              >
                Выбрать
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section id="reviews" className="bg-[#ffd6ef] px-5 py-24 md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12">
          <p className="mb-3 text-sm font-black uppercase tracking-[0.3em] text-[#ff2fa3]">
            Отзывы
          </p>
          <h2 className="text-4xl font-black tracking-[-0.04em] md:text-6xl">
            Девочки уже говорят увереннее
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {testimonials.map((item, index) => (
            <div
              key={item.name}
              className={`rounded-[2rem] border-4 border-white p-6 shadow-xl ${
                index % 2 === 0 ? "bg-white" : "bg-[#fff06a]"
              }`}
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="relative h-12 w-12 overflow-hidden rounded-full">
                  <Image
                    src={item.photo}
                    alt={item.name}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <div>
                  <p className="font-black">{item.name}</p>
                  <p className="text-sm text-[#684459]">ученица Lara English</p>
                </div>
              </div>
              <p className="text-lg leading-8 text-[#4e2d3e]">“{item.text}”</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  return (
    <section className="px-5 py-24 md:px-10">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="mb-3 text-sm font-black uppercase tracking-[0.3em] text-[#ff2fa3]">
            FAQ
          </p>
          <h2 className="text-4xl font-black tracking-[-0.04em] md:text-6xl">
            Перед тем как написать «Демо»
          </h2>
        </div>

        <div className="grid gap-4">
          {faqs.map((item) => (
            <details
              key={item.q}
              className="group rounded-[2rem] border-4 border-white bg-white p-6 shadow-lg"
            >
              <summary className="flex cursor-pointer list-none items-center text-xl font-black">
                <span className="mr-2 text-[#ff2fa3]">✦</span>
                {item.q}
                <span className="faq-chevron ml-auto text-[#ff2fa3]">▼</span>
              </summary>
              <p className="mt-4 leading-8 text-[#684459]">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="px-5 pb-10 md:px-10">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[3rem] bg-[#351827] p-8 text-white shadow-2xl md:p-14">
        <div className="grid gap-10 md:grid-cols-[1fr_0.7fr] md:items-center">
          <div>
            <p className="mb-3 text-sm font-black uppercase tracking-[0.3em] text-[#fff06a]">
              Готова?
            </p>
            <h2 className="text-4xl font-black tracking-[-0.04em] md:text-7xl">
              Напиши «Демо» и начни говорить красивее уже сейчас
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
              Пробный урок — 300 ₽. Лара поможет понять твой уровень, подобрать
              формат и показать, что английский может быть не страшным, а очень
              твоим.
            </p>
            <a
              href="https://t.me/gzonthemove"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block rounded-full bg-[#ff2fa3] px-9 py-5 text-lg font-black text-white shadow-[0_12px_0_#fff06a] transition hover:-translate-y-1"
            >
              Написать «Демо» 💌
            </a>
          </div>

          <div className="overflow-hidden rounded-[2rem] bg-white/10 backdrop-blur">
            <div className="relative aspect-[3/4] w-full">
              <Image
                src="/images/lara-2.jpg"
                alt="Lara — преподаватель английского"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <div className="p-6">
              <p className="text-2xl font-black">Lara English</p>
              <p className="mt-2 text-white/70">
                Преподаватель английского языка для девушек. Казань / online.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#351827] px-5 py-8 text-white md:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-black">
            Lara English © {new Date().getFullYear()}
          </p>
          <p className="mt-1 text-sm text-white/60">
            Английский для девушек · Казань / online
          </p>
        </div>
        <div className="flex gap-3">
          <a
            href="https://t.me/gzonthemove"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full bg-[#ff2fa3] px-4 py-2 text-sm font-black transition hover:scale-105"
          >
            <TelegramIcon className="h-4 w-4" />
            Telegram
          </a>
          <a
            href="https://www.instagram.com/laraatalks/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full bg-[#ff2fa3] px-4 py-2 text-sm font-black transition hover:scale-105"
          >
            <InstagramIcon className="h-4 w-4" />
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}

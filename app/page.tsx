"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

/* ------------------------------------------------------------------ */
/*  Content                                                            */
/* ------------------------------------------------------------------ */

type Tone = "azure" | "blush" | "ink" | "honey";

const benefits: {
  title: string;
  text: string;
  back: string;
  icon: "dashboard" | "spark" | "brain" | "leaf";
  img: string;
  tone: Tone;
}[] = [
  {
    title: "Личный кабинет ученицы",
    text: "Уроки, задания и переводчик в едином пространстве.",
    back: "Весь твой прогресс под рукой - всегда перед глазами, без хаоса в тетрадях.",
    icon: "dashboard",
    img: "/images/platform.jpg",
    tone: "azure",
  },
  {
    title: "Программа под тебя",
    text: "Темы подбираются под твои цели и интересы: учёба, путешествия, карьера, общение и уверенность в себе.",
    back: "Каждое занятие - про то, что важно именно тебе, а не про абстрактный учебник.",
    icon: "spark",
    img: "/images/lara-2.jpg",
    tone: "blush",
  },
  {
    title: "Нейролингвистический подход",
    text: "Интервальное повторение, мультисенсорное обучение и техники запоминания, чтобы английский оставался в памяти.",
    back: "Меньше зубрёжки - больше понимания. Язык усваивается естественно и надолго.",
    icon: "brain",
    img: "/images/lara-2.jpg",
    tone: "ink",
  },
  {
    title: "Спокойная атмосфера",
    text: "Без школьного стресса и натаскивания. Занятия идут тепло, в комфортном темпе и с настоящей поддержкой.",
    back: "Уверенность вместо страха ошибиться - и ощущение «я правда могу говорить».",
    icon: "leaf",
    img: "/images/lesson.jpg",
    tone: "honey",
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
    message: "Здравствуйте! Хочу записаться на индивидуальные занятия",
  },
  {
    name: "Speaking Club",
    tag: "A2–B2",
    price: "3 500 ₽",
    period: "4 занятия",
    desc: "Живая разговорная практика на актуальные и интересные темы.",
    highlight: false,
    message: "Здравствуйте! Хочу записаться в Speaking Club",
  },
  {
    name: "Self-study курс",
    tag: "A1–A2",
    price: "3 000 ₽",
    period: "15 тем",
    desc: "Базовые темы для самостоятельного старта и уверенной базы.",
    highlight: false,
    message: "Здравствуйте! Хочу купить Self-study курс",
  },
  {
    name: "Enhance Your Vocabulary",
    tag: "B1–B2",
    price: "3 000 ₽",
    period: "10 тем",
    desc: "Актуальная лексика, чтобы говорить богато и современно.",
    highlight: false,
    message: "Здравствуйте! Хочу купить курс Enhance Your Vocabulary",
  },
];

const testimonials = [
  {
    name: "EVA",
    photo: "/images/eva.jpg",
    text: "Очень нравится тичер! Уроки расслабленные, но при этом много информации. Всё адаптировано под меня, мои жизненные ситуации и переживания. С обычным серьёзным подходом я бы давно забросила.",
  },
  {
    name: "ADEL",
    photo: "/images/adel.jpg",
    text: "Хороший педагог. Объясняет всё понятно и доходчиво. Занимаемся несколько недель, чувствую, как сильно импрувнулась за это время. Всем советую!",
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
    a: "В основном для девушек, которые хотят улучшить английский, начать говорить, подтянуть базу или подготовиться к учёбе и экзаменам. Бывают исключения - напишите, и мы всё обсудим.",
  },
  {
    q: "Откуда можно заниматься?",
    a: "Занятия проходят онлайн, поэтому учиться можно из любого города и даже другой страны. Очно проходит только подготовка к экзаменам - в Казани.",
  },
  {
    q: "Если у меня слабый уровень?",
    a: "Это абсолютно нормально. Уроки подстраиваются под твой уровень, темп и цели - начнём с того места, где ты сейчас.",
  },
  {
    q: "Есть пробный урок?",
    a: "Да. Напишите «Демо» - и получите пробный урок за 300 ₽.",
  },
];

const TG = "https://t.me/gzonthemove";
const IG = "https://www.instagram.com/laraatalks/";

/* ------------------------------------------------------------------ */
/*  Icons                                                              */
/* ------------------------------------------------------------------ */

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

function StarIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2l1.7 6.5L20 10l-6.3 1.5L12 18l-1.7-6.5L4 10l6.3-1.5z" />
    </svg>
  );
}

function PinIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.4" />
    </svg>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M5 12.5l4 4 10-10" />
    </svg>
  );
}

function BenefitIcon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className,
  };
  if (name === "dashboard")
    return (
      <svg {...common}>
        <rect x="3" y="4" width="18" height="14" rx="2.5" />
        <path d="M3 9h18" />
        <path d="M6.5 6.5h.01M9 6.5h.01" />
        <path d="M9 21h6M12 18v3" />
      </svg>
    );
  if (name === "spark")
    return (
      <svg {...common}>
        <path d="M12 3l1.8 5L19 9.8l-5.2 1.8L12 17l-1.8-5.4L5 9.8 10.2 8z" />
        <path d="M18.5 14.5l.7 2 2 .7-2 .7-.7 2-.7-2-2-.7 2-.7z" />
      </svg>
    );
  if (name === "brain")
    return (
      <svg {...common}>
        <path d="M12 6a3 3 0 0 0-5.5 1.6A3 3 0 0 0 5 12.3a3 3 0 0 0 1.7 4.4A2.7 2.7 0 0 0 12 16z" />
        <path d="M12 6a3 3 0 0 1 5.5 1.6A3 3 0 0 1 19 12.3a3 3 0 0 1-1.7 4.4A2.7 2.7 0 0 1 12 16z" />
        <path d="M12 6v10" />
      </svg>
    );
  // leaf
  return (
    <svg {...common}>
      <path d="M5 19c0-7 6-12 14-13 0 9-5 14-12 14a6 6 0 0 1-2-1z" />
      <path d="M9 16c2-3.2 5-5.2 8-6" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Scroll-reveal wrapper                                              */
/* ------------------------------------------------------------------ */

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`reveal ${shown ? "in" : ""} ${className}`}
    >
      {children}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function Home() {
  return (
    <main className="grain relative min-h-screen overflow-hidden text-ink">
      <PageAtmosphere />
      <Hero />
      <Marquee />
      <Benefits />
      <LessonFlow />
      {/* <ExamPrep /> */}
      <Certificates />
      <Pricing />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}

/* Soft fixed gradient blooms behind everything for depth */
function PageAtmosphere() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="anim-drift absolute -left-32 top-[8%] h-[36rem] w-[36rem] rounded-full bg-azure/45 blur-[120px]" />
      <div
        className="anim-drift absolute -right-40 top-[34%] h-[34rem] w-[34rem] rounded-full bg-blush/30 blur-[130px]"
        style={{ animationDelay: "-7s" }}
      />
      <div
        className="anim-drift absolute bottom-[6%] left-[20%] h-[30rem] w-[30rem] rounded-full bg-honey/25 blur-[130px]"
        style={{ animationDelay: "-13s" }}
      />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Hero                                                               */
/* ------------------------------------------------------------------ */

function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);
  const stageRef = useRef<HTMLDivElement>(null);

  // Mouse parallax (desktop, pointer-fine only)
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (
      window.matchMedia("(hover: none)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;

    const el = stageRef.current;
    if (!el) return;
    let raf = 0;
    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const r = el.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        el.style.setProperty("--mx", x.toFixed(3));
        el.style.setProperty("--my", y.toFixed(3));
      });
    };
    const onLeave = () => {
      el.style.setProperty("--mx", "0");
      el.style.setProperty("--my", "0");
    };
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(raf);
    };
  }, []);

  const navLinks: [string, string][] = [
    ["#benefits", "Почему я"],
    // ["#exams", "Экзамены"],
    ["#certificates", "Сертификаты"],
    ["#pricing", "Тарифы"],
    ["#reviews", "Отзывы"],
  ];

  return (
    <section ref={stageRef} className="relative px-5 pb-20 pt-6 md:px-10">
      {/* Nav */}
      <nav className="rise mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/70 bg-white/55 px-4 py-3 shadow-[0_12px_40px_-20px_rgba(40,37,47,0.5)] backdrop-blur-xl md:px-5">
        <div className="flex items-center gap-3">
          <Image
            src="/images/limara_logo_le.png"
            alt="Lara English"
            width={512}
            height={495}
            priority
            className="h-12 w-auto"
          />
          <div className="leading-tight">
            <p className="font-display text-lg font-semibold leading-none">
              Lara English
            </p>
            <p className="text-xs tracking-wide text-ink-soft">
              english for girls
            </p>
          </div>
        </div>

        <div className="hidden items-center gap-7 text-sm font-semibold md:flex">
          {navLinks.map(([href, label]) => (
            <a
              key={href}
              href={href}
              className="relative text-ink/80 transition-colors after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:rounded-full after:bg-blush-deep after:transition-all after:duration-300 hover:text-ink hover:after:w-full"
            >
              {label}
            </a>
          ))}
          <a
            href={TG}
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink/70 transition hover:text-azure-deep"
            aria-label="Telegram"
          >
            <TelegramIcon className="h-5 w-5" />
          </a>
          <a
            href={IG}
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink/70 transition hover:text-blush-deep"
            aria-label="Instagram"
          >
            <InstagramIcon className="h-5 w-5" />
          </a>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setMenuOpen((o) => !o)}
            className="grid h-11 w-11 place-items-center rounded-full border border-ink/15 bg-white/70 md:hidden"
            aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              className="h-5 w-5"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 7h16M4 12h16M4 17h16"
                />
              )}
            </svg>
          </button>
          <a
            href={TG}
            target="_blank"
            rel="noopener noreferrer"
            className="sheen hidden rounded-full bg-ink px-5 py-3 text-sm font-semibold text-cream shadow-lg transition hover:-translate-y-0.5 sm:inline-block"
          >
            Написать «Демо»
          </a>
        </div>
      </nav>

      {menuOpen && (
        <div className="mx-auto mt-2 max-w-7xl overflow-hidden rounded-3xl border border-white/70 bg-white/85 px-4 py-4 shadow-xl backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-1">
            {navLinks.map(([href, label]) => (
              <a
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="rounded-2xl px-4 py-3 text-lg font-semibold transition hover:bg-azure-soft"
              >
                {label}
              </a>
            ))}
            <div className="mt-3 flex gap-3 border-t border-ink/10 pt-3">
              <a
                href={TG}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="flex flex-1 items-center justify-center gap-2 rounded-full bg-azure-deep px-4 py-3 font-semibold text-white"
              >
                <TelegramIcon className="h-5 w-5" />
                Telegram
              </a>
              <a
                href={IG}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="flex flex-1 items-center justify-center gap-2 rounded-full bg-ink px-4 py-3 font-semibold text-white"
              >
                <InstagramIcon className="h-5 w-5" />
                Instagram
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Hero body */}
      <div className="mx-auto grid max-w-7xl items-center gap-12 pt-14 md:grid-cols-[1.05fr_0.95fr] md:pt-20">
        <div>
          <div
            className="rise mb-6 inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/65 px-4 py-2 text-sm font-semibold shadow-sm backdrop-blur"
            style={{ animationDelay: "0.05s" }}
          >
            <StarIcon className="h-4 w-4 text-blush-deep" />
            <span>Пробный урок - 300 ₽</span>
          </div>

          <h1
            className="rise text-5xl font-semibold leading-[0.98] tracking-tight md:text-7xl lg:text-[5.4rem]"
            style={{ animationDelay: "0.12s" }}
          >
            Английский,
            <span className="mt-1 block italic text-blush-deep">
              на котором ты
            </span>
            <span className="block">по-настоящему заговоришь</span>
          </h1>

          <p
            className="rise mt-7 max-w-xl text-lg leading-8 text-ink-soft md:text-xl"
            style={{ animationDelay: "0.22s" }}
          >
            Уютные онлайн-занятия для девушек, которые хотят говорить уверенно,
            понимать речь без паники и учиться без школьного стресса.
          </p>

          <div
            className="rise mt-9 flex flex-col gap-4 sm:flex-row"
            style={{ animationDelay: "0.32s" }}
          >
            <a
              href={TG}
              target="_blank"
              rel="noopener noreferrer"
              className="sheen group rounded-full bg-blush-deep px-8 py-5 text-center text-lg font-semibold text-white shadow-[0_16px_36px_-12px_rgba(223,102,153,0.8)] transition hover:-translate-y-1 hover:shadow-[0_22px_44px_-12px_rgba(223,102,153,0.85)]"
            >
              Записаться на демо
            </a>
            <a
              href="#pricing"
              className="rounded-full border border-ink/15 bg-white/70 px-8 py-5 text-center text-lg font-semibold text-ink shadow-sm backdrop-blur transition hover:-translate-y-1 hover:bg-white"
            >
              Смотреть тарифы
            </a>
          </div>

          <div
            className="rise mt-10 grid max-w-xl grid-cols-3 gap-3"
            style={{ animationDelay: "0.42s" }}
          >
            {[
              ["для девушек", "english for girls"],
              ["онлайн", "из любой точки"],
              ["A1–B2", "любой уровень"],
            ].map(([big, small]) => (
              <div
                key={big}
                className="rounded-3xl border border-white/70 bg-white/55 p-4 text-center shadow-sm backdrop-blur"
              >
                <p className="font-display text-xl font-semibold">{big}</p>
                <p className="mt-1 text-xs text-ink-soft">{small}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Portrait stage */}
        <div className="relative mx-auto w-full max-w-md [perspective:1200px]">
          {/* floating decorative chips with parallax */}
          <div
            className="absolute left-1 top-6 z-20 rounded-2xl border border-white/80 bg-white/85 px-3.5 py-2.5 text-xs shadow-xl backdrop-blur sm:-left-6 sm:top-10 sm:px-4 sm:py-3 sm:text-sm"
            style={{
              transform:
                "translate(calc(var(--mx, 0) * -34px), calc(var(--my, 0) * -34px))",
            }}
          >
            <p className="flex items-center gap-1.5 font-semibold text-azure-ink">
              <CheckIcon className="h-4 w-4" /> Cambridge certified
            </p>
          </div>

          <div
            className="absolute right-1 bottom-20 z-20 rotate-3 rounded-2xl border border-white/80 bg-blush-deep px-3.5 py-2.5 text-xs font-semibold text-white shadow-xl sm:-right-4 sm:bottom-24 sm:px-4 sm:py-3 sm:text-sm"
            style={{
              transform:
                "rotate(3deg) translate(calc(var(--mx, 0) * 30px), calc(var(--my, 0) * 30px))",
            }}
          >
            speak with confidence
          </div>

          <div className="anim-floaty-slow relative">
            <div
              className="relative rounded-[2.5rem] border-[7px] border-white bg-azure p-3 shadow-[0_40px_80px_-30px_rgba(40,37,47,0.55)]"
              style={{
                transform:
                  "rotateX(calc(var(--my, 0) * -5deg)) rotateY(calc(var(--mx, 0) * 7deg))",
                transformStyle: "preserve-3d",
              }}
            >
              <div className="overflow-hidden rounded-[2rem] bg-azure-mid">
                <Image
                  src="/images/lara-hero.jpg"
                  alt="Лара - преподаватель английского языка"
                  width={900}
                  height={900}
                  className="aspect-square object-cover"
                  priority
                  unoptimized
                />
              </div>
            </div>
          </div>

          {/* signature plate */}
          <div className="absolute -bottom-7 left-4 z-20 rotate-[-4deg] rounded-2xl border border-white/80 bg-white/90 px-5 py-3 shadow-xl backdrop-blur">
            <p className="font-display text-base font-semibold text-blush-deep">
              Lara
            </p>
            <p className="text-sm text-ink-soft">преподаватель английского</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Marquee                                                            */
/* ------------------------------------------------------------------ */

function Marquee() {
  const items = [
    "Английский без стресса",
    "Уверенная речь",
    "Для девушек",
    "Онлайн из любой точки",
    "Без скучных учебников",
    "Подготовка к экзаменам",
    "Нейроподход",
  ];
  return (
    <section className="border-y border-ink/10 bg-azure-soft/80 py-4 backdrop-blur">
      <div className="flex animate-marquee gap-6 whitespace-nowrap font-display text-2xl font-semibold text-ink/85">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="flex shrink-0 items-center gap-6">
            {items.map((t) => (
              <span key={t} className="flex items-center gap-6">
                {t}
                <StarIcon className="h-3.5 w-3.5 text-blush-deep" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Benefits - flip cards                                              */
/* ------------------------------------------------------------------ */

const toneBack: Record<Tone, string> = {
  azure: "from-azure-ink/95 via-azure-ink/82 to-azure-deep/70",
  blush: "from-blush-deep/95 via-blush-deep/82 to-ink/72",
  ink: "from-ink/96 via-ink/86 to-azure-ink/72",
  honey: "from-[#8a5a23]/95 via-[#a06d31]/82 to-ink/72",
};

const toneChip: Record<Tone, string> = {
  azure: "bg-azure text-azure-ink",
  blush: "bg-blush-soft text-blush-deep",
  ink: "bg-ink text-cream",
  honey: "bg-honey/55 text-[#8a5a23]",
};

function BenefitCard({
  item,
  index,
}: {
  item: (typeof benefits)[number];
  index: number;
}) {
  const [flipped, setFlipped] = useState(false);
  return (
    <Reveal delay={index * 90}>
      <button
        type="button"
        onClick={() => setFlipped((f) => !f)}
        className={`flip block h-[23rem] w-full text-left ${
          flipped ? "is-flipped" : ""
        }`}
        aria-label={`${item.title} - перевернуть карточку`}
      >
        <div className="flip-inner rounded-[2rem] shadow-[0_26px_60px_-30px_rgba(40,37,47,0.5)]">
          {/* Front */}
          <div
            className={`flip-face flex flex-col rounded-[2rem] border border-ink/5 p-7 ${
              index % 2 === 0 ? "bg-cream-2" : "bg-azure-soft"
            }`}
          >
            <div
              className={`grid h-16 w-16 place-items-center rounded-2xl ${toneChip[item.tone]} shadow-sm`}
            >
              <BenefitIcon name={item.icon} className="h-8 w-8" />
            </div>
            <h3 className="mt-6 text-2xl font-semibold leading-tight">
              {item.title}
            </h3>
            <p className="mt-3 flex-1 leading-7 text-ink-soft">{item.text}</p>
            <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blush-deep">
              <span className="anim-spin-slow inline-block">✦</span>
              перевернуть
            </span>
          </div>

          {/* Back */}
          <div className="flip-face flip-back rounded-[2rem]">
            <Image
              src={item.img}
              alt=""
              fill
              sizes="(max-width: 1024px) 50vw, 25vw"
              className="object-cover"
              unoptimized
            />
            <div
              className={`absolute inset-0 bg-gradient-to-br ${toneBack[item.tone]}`}
            />
            <div className="absolute inset-0 flex flex-col justify-between p-7 text-cream-2">
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-white/15 backdrop-blur">
                <BenefitIcon name={item.icon} className="h-7 w-7" />
              </div>
              <div>
                <p className="font-display text-2xl font-semibold leading-snug">
                  {item.back}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-sm font-medium backdrop-blur">
                  {item.title}
                </span>
              </div>
            </div>
          </div>
        </div>
      </button>
    </Reveal>
  );
}

function Benefits() {
  return (
    <section id="benefits" className="px-5 py-24 md:px-10">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mb-14 max-w-3xl">
          <p className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.3em] text-azure-deep">
            <StarIcon className="h-4 w-4" /> Почему занятия работают
          </p>
          <h2 className="text-4xl leading-tight md:text-6xl">
            Комфорт ученицы и реальный результат -{" "}
            <span className="italic text-blush-deep">главные приоритеты</span>
          </h2>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((item, index) => (
            <BenefitCard key={item.title} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Lesson flow                                                        */
/* ------------------------------------------------------------------ */

function LessonFlow() {
  const steps: [string, string, string][] = [
    ["01", "Пишешь «Демо»", "Лара узнаёт твой уровень, цель и что тебе важно."],
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
  ];

  return (
    <section className="relative overflow-hidden px-5 py-24 md:px-10">
      <div className="absolute inset-0 -skew-y-2 bg-gradient-to-br from-azure-soft via-cream-2 to-blush-soft/60" />
      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <Reveal>
            <p className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.3em] text-azure-deep">
              <StarIcon className="h-4 w-4" /> Как это выглядит
            </p>
            <h2 className="text-4xl leading-tight md:text-6xl">
              Не урок, а твоё личное{" "}
              <span className="italic text-blush-deep">
                English-пространство
              </span>
            </h2>
            <p className="mt-6 text-lg leading-8 text-ink-soft">
              Каждое занятие строится вокруг твоего уровня, интересов и реальных
              ситуаций. Учим не «для галочки», а чтобы ты могла говорить.
            </p>
          </Reveal>

          <div className="grid gap-4">
            {steps.map(([num, title, text], i) => (
              <Reveal key={num} delay={i * 90}>
                <div className="group flex gap-5 rounded-[1.8rem] border border-white/70 bg-white/65 p-6 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:bg-white/85">
                  <div className="font-display text-4xl font-semibold text-blush-deep transition group-hover:scale-110">
                    {num}
                  </div>
                  <div>
                    <h3 className="text-2xl">{title}</h3>
                    <p className="mt-1 text-ink-soft">{text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Exam preparation (offline, Kazan)                                  */
/* ------------------------------------------------------------------ */

function ExamPrep() {
  const points = [
    "Разбираем формат экзамена шаг за шагом",
    "Тренируем все части: чтение, письмо, аудирование и говорение",
    "Пробные тесты и работа над типичными ошибками",
    "Снимаем тревогу и страх перед экзаменом",
  ];

  return (
    <section id="exams" className="px-5 py-12 md:px-10">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] border border-white/60 bg-gradient-to-br from-azure-deep via-azure-ink to-ink p-8 text-cream-2 shadow-[0_40px_90px_-40px_rgba(44,89,127,0.9)] md:p-14">
            {/* decorative orbs */}
            <div className="anim-floaty pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-azure-mid/30 blur-2xl" />
            <div className="anim-floaty-slow pointer-events-none absolute -bottom-20 left-1/3 h-56 w-56 rounded-full bg-blush/20 blur-2xl" />

            <div className="relative grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-center">
              <div>
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-semibold backdrop-blur">
                  <PinIcon className="h-4 w-4 text-honey" />
                  Очно · Казань
                </div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-honey">
                  Подготовка к экзаменам
                </p>
                <h2 className="text-4xl leading-tight text-cream-2 md:text-6xl">
                  Готовлю к итоговым{" "}
                  <span className="italic text-honey">экзаменам</span> спокойно
                  и уверенно
                </h2>
                <p className="mt-6 max-w-xl text-lg leading-8 text-cream-2/80">
                  Отдельное направление для школьниц: системная подготовка к
                  ОГЭ, ЕГЭ и выпускным экзаменам по английскому. Это
                  единственный формат, который проходит очно - в Казани, где
                  живёт Лара.
                </p>

                <a
                  href={`${TG}?text=${encodeURIComponent(
                    "Здравствуйте! Хочу узнать о подготовке к экзаменам (Казань)",
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sheen mt-8 inline-flex items-center gap-2 rounded-full bg-honey px-8 py-4 text-lg font-semibold text-ink shadow-lg transition hover:-translate-y-1"
                >
                  Узнать о подготовке
                </a>
              </div>

              <ul className="grid gap-3">
                {points.map((p, i) => (
                  <Reveal key={p} delay={i * 80}>
                    <li className="flex items-start gap-3 rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur">
                      <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-honey text-ink">
                        <CheckIcon className="h-3.5 w-3.5" />
                      </span>
                      <span className="leading-7 text-cream-2/90">{p}</span>
                    </li>
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Certificates                                                       */
/* ------------------------------------------------------------------ */

function Certificates() {
  const certs: Cert[] = [
    {
      num: "01",
      title: "Международный сертификат преподавателя английского",
      subtitle: "Аккредитация Cambridge",
      image: "/images/cert-cambridge.jpg",
      w: 2480,
      h: 3509,
    },
    {
      num: "02",
      title: "Дополнительное обучение",
      subtitle: "Методики нейропедагогики",
      image: "/images/cert-2.jpg",
      w: 905,
      h: 1280,
    },
  ];
  const [openCert, setOpenCert] = useState<number | null>(null);

  useEffect(() => {
    if (openCert === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenCert(null);
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [openCert]);

  return (
    <section id="certificates" className="px-5 py-24 md:px-10">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.3em] text-azure-deep">
              <StarIcon className="h-4 w-4" /> Квалификация
            </p>
            <h2 className="max-w-2xl text-4xl leading-tight md:text-6xl">
              За лёгкостью уроков -{" "}
              <span className="italic text-blush-deep">серьёзная база</span>
            </h2>
          </div>
          <p className="max-w-md text-lg leading-8 text-ink-soft">
            Лара - квалифицированный преподаватель с международным сертификатом
            Cambridge и дополнительным обучением в области нейропедагогики.
          </p>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2">
          {certs.map((cert, i) => (
            <CertificateCard
              key={cert.num}
              cert={cert}
              delay={i * 120}
              onOpen={() => setOpenCert(i)}
            />
          ))}
        </div>
      </div>

      {openCert !== null && (
        <CertLightbox
          cert={certs[openCert]}
          onClose={() => setOpenCert(null)}
        />
      )}
    </section>
  );
}

type Cert = {
  num: string;
  title: string;
  subtitle: string;
  image: string;
  w: number;
  h: number;
};

function ExpandIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.9}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M8 4H5a1 1 0 0 0-1 1v3M16 4h3a1 1 0 0 1 1 1v3M8 20H5a1 1 0 0 1-1-1v-3M16 20h3a1 1 0 0 1 1-1v-3" />
    </svg>
  );
}

function CertificateCard({
  cert,
  delay,
  onOpen,
}: {
  cert: Cert;
  delay: number;
  onOpen: () => void;
}) {
  return (
    <Reveal delay={delay}>
      <button
        type="button"
        onClick={onOpen}
        aria-label={`Открыть сертификат полностью: ${cert.title}`}
        className="group block w-full overflow-hidden rounded-[2.5rem] border border-ink/5 bg-cream-2 p-4 text-left shadow-[0_24px_60px_-32px_rgba(40,37,47,0.5)] transition hover:-translate-y-1 hover:shadow-[0_30px_70px_-32px_rgba(40,37,47,0.55)]"
      >
        <div className="mb-4 flex items-center justify-between">
          <div className="grid h-11 w-11 place-items-center rounded-full bg-ink font-display text-lg font-semibold text-cream">
            {cert.num}
          </div>
          <div className="flex items-center gap-1.5 rounded-full bg-azure-soft px-4 py-2 text-sm font-semibold text-azure-ink">
            <CheckIcon className="h-4 w-4" /> подтверждено
          </div>
        </div>

        <div className="relative aspect-[4/3] overflow-hidden rounded-[1.8rem] bg-azure-soft">
          <Image
            src={cert.image}
            alt={cert.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-top transition duration-700 group-hover:scale-105"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-ink/5 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
          <span className="pointer-events-none absolute bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-sm font-semibold text-ink opacity-0 shadow-lg backdrop-blur transition duration-300 group-hover:opacity-100">
            <ExpandIcon className="h-4 w-4" /> Открыть полностью
          </span>
          <span className="pointer-events-none absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-white/95 text-ink shadow-md backdrop-blur md:hidden">
            <ExpandIcon className="h-4 w-4" />
          </span>
        </div>

        <div className="p-4">
          <h3 className="text-2xl leading-tight">{cert.title}</h3>
          <p className="mt-2 text-ink-soft">{cert.subtitle}</p>
        </div>
      </button>
    </Reveal>
  );
}

function CertLightbox({ cert, onClose }: { cert: Cert; onClose: () => void }) {
  return (
    <div
      className="lb-backdrop fixed inset-0 z-[100] flex items-center justify-center bg-ink/85 p-4 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={cert.title}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Закрыть"
        className="absolute right-4 top-4 z-10 grid h-12 w-12 place-items-center rounded-full bg-white/90 text-ink shadow-lg transition hover:scale-105"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2.2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-5 w-5"
        >
          <path d="M6 6l12 12M18 6L6 18" />
        </svg>
      </button>

      <div
        className="lb-panel flex max-h-[90vh] w-full max-w-3xl flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={cert.image}
          alt={cert.title}
          width={cert.w}
          height={cert.h}
          priority
          unoptimized
          className="h-auto w-auto max-h-[80vh] max-w-full rounded-2xl object-contain shadow-2xl"
        />
        <div className="mt-4 max-w-xl text-center text-cream-2">
          <p className="font-display text-xl font-semibold">{cert.title}</p>
          <p className="mt-1 text-sm text-cream-2/70">{cert.subtitle}</p>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Pricing                                                            */
/* ------------------------------------------------------------------ */

function Pricing() {
  return (
    <section id="pricing" className="px-5 py-24 md:px-10">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mb-14 text-center">
          <p className="mb-4 flex items-center justify-center gap-2 text-sm font-semibold uppercase tracking-[0.3em] text-azure-deep">
            <StarIcon className="h-4 w-4" /> Тарифы
          </p>
          <h2 className="mx-auto max-w-3xl text-4xl leading-tight md:text-6xl">
            Начни свой путь в английском{" "}
            <span className="italic text-blush-deep">уже сегодня</span>
          </h2>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {prices.map((item, i) => (
            <Reveal key={item.name} delay={i * 80}>
              <div
                className={`relative flex h-full flex-col rounded-[2rem] border p-6 shadow-[0_24px_60px_-34px_rgba(40,37,47,0.55)] transition hover:-translate-y-2 ${
                  item.highlight
                    ? "border-transparent bg-gradient-to-b from-blush-deep to-[#c84e86] text-white"
                    : "border-ink/5 bg-cream-2"
                }`}
              >
                {item.highlight && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-honey px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-ink shadow-md">
                    популярный
                  </div>
                )}

                <p
                  className={`mb-4 inline-block w-fit rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide ${
                    item.highlight
                      ? "bg-white/20 text-white"
                      : "bg-azure-soft text-azure-ink"
                  }`}
                >
                  {item.tag}
                </p>

                <h3 className="min-h-[3.5rem] text-2xl leading-tight">
                  {item.name}
                </h3>
                <p
                  className={`mt-4 text-sm font-medium ${item.highlight ? "text-white/80" : "text-ink-soft"}`}
                >
                  {item.period}
                </p>
                <p className="mt-1 font-display text-4xl font-semibold">
                  {item.price}
                </p>
                <p
                  className={`mt-5 flex-1 leading-7 ${item.highlight ? "text-white/85" : "text-ink-soft"}`}
                >
                  {item.desc}
                </p>

                <a
                  href={`${TG}?text=${encodeURIComponent(item.message)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`sheen mt-6 block rounded-full px-5 py-4 text-center font-semibold transition hover:-translate-y-0.5 ${
                    item.highlight ? "bg-white text-ink" : "bg-ink text-cream"
                  }`}
                >
                  Выбрать
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Testimonials                                                       */
/* ------------------------------------------------------------------ */

function Testimonials() {
  return (
    <section id="reviews" className="px-5 py-24 md:px-10">
      <div className="mx-auto max-w-7xl rounded-[3rem] bg-blush-soft/55 px-5 py-16 md:px-12">
        <Reveal className="mb-12">
          <p className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.3em] text-blush-deep">
            <StarIcon className="h-4 w-4" /> Отзывы
          </p>
          <h2 className="text-4xl leading-tight md:text-6xl">
            Ученицы уже говорят{" "}
            <span className="italic text-azure-deep">увереннее</span>
          </h2>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2">
          {testimonials.map((item, index) => (
            <Reveal key={item.name} delay={index * 80}>
              <div className="h-full rounded-[2rem] border border-white/70 bg-cream-2/90 p-7 shadow-[0_20px_50px_-30px_rgba(40,37,47,0.45)] backdrop-blur">
                <div className="mb-4 flex items-center gap-3">
                  <div className="relative h-12 w-12 overflow-hidden rounded-full ring-2 ring-white">
                    <Image
                      src={item.photo}
                      alt={item.name}
                      fill
                      sizes="48px"
                      className="object-cover"
                      unoptimized
                    />
                  </div>
                  <div>
                    <p className="font-display text-lg font-semibold">
                      {item.name}
                    </p>
                    <p className="text-sm text-ink-soft">
                      ученица Lara English
                    </p>
                  </div>
                </div>
                <p className="text-lg leading-8 text-ink/85">«{item.text}»</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  FAQ                                                                */
/* ------------------------------------------------------------------ */

function FAQ() {
  return (
    <section className="px-5 py-24 md:px-10">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          <p className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.3em] text-azure-deep">
            <StarIcon className="h-4 w-4" /> FAQ
          </p>
          <h2 className="text-4xl leading-tight md:text-6xl">
            Перед тем как написать{" "}
            <span className="italic text-blush-deep">«Демо»</span>
          </h2>
        </Reveal>

        <div className="grid gap-4">
          {faqs.map((item, i) => (
            <Reveal key={item.q} delay={i * 70}>
              <details className="group rounded-[1.8rem] border border-ink/5 bg-cream-2 p-6 shadow-sm transition hover:shadow-md">
                <summary className="flex cursor-pointer list-none items-center text-xl font-semibold">
                  <StarIcon className="mr-3 h-4 w-4 shrink-0 text-blush-deep" />
                  {item.q}
                  <span className="faq-chevron ml-auto text-blush-deep">▾</span>
                </summary>
                <p className="mt-4 leading-8 text-ink-soft">{item.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Final CTA                                                          */
/* ------------------------------------------------------------------ */

function FinalCTA() {
  return (
    <section className="px-5 pb-12 md:px-10">
      <Reveal className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[3rem] bg-ink p-8 text-white shadow-2xl md:p-14">
          <div className="anim-drift pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-azure-deep/30 blur-3xl" />
          <div className="anim-floaty pointer-events-none absolute -bottom-24 right-10 h-72 w-72 rounded-full bg-blush-deep/30 blur-3xl" />

          <div className="relative grid gap-10 md:grid-cols-[1fr_0.7fr] md:items-center">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-honey">
                Готова?
              </p>
              <h2 className="text-4xl leading-tight text-white md:text-7xl">
                Напиши «Демо» и начни говорить{" "}
                <span className="italic text-blush">увереннее</span> уже сейчас
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
                Пробный урок - 300 ₽. Определим уровень, подберём формат
                обучения и начнем говорить.
              </p>
              <a
                href={TG}
                target="_blank"
                rel="noopener noreferrer"
                className="sheen mt-8 inline-flex items-center gap-2 rounded-full bg-blush-deep px-9 py-5 text-lg font-semibold text-white shadow-[0_16px_36px_-12px_rgba(223,102,153,0.9)] transition hover:-translate-y-1"
              >
                <TelegramIcon className="h-5 w-5" />
                Написать «Демо»
              </a>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur">
              <div className="relative aspect-[3/4] w-full">
                <Image
                  src="/images/lara-2.jpg"
                  alt="Лара - преподаватель английского языка"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div className="p-6">
                <p className="font-display text-2xl font-semibold">
                  Lara English
                </p>
                <p className="mt-2 text-white/70">
                  Преподаватель английского для девушек. Онлайн.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Footer                                                             */
/* ------------------------------------------------------------------ */

function Footer() {
  return (
    <footer className="border-t border-ink/10 px-5 py-10 md:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <Image
            src="/images/limara_logo_le.png"
            alt="Lara English"
            width={512}
            height={495}
            className="h-11 w-auto"
          />
          <div>
            <p className="font-display text-lg font-semibold">
              Lara English © {new Date().getFullYear()}
            </p>
            <p className="mt-0.5 text-sm text-ink-soft">
              Английский для девушек · Онлайн · Подготовка к экзаменам в Казани
            </p>
          </div>
        </div>
        <div className="flex gap-3">
          <a
            href={TG}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full bg-azure-deep px-5 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5"
          >
            <TelegramIcon className="h-4 w-4" />
            Telegram
          </a>
          <a
            href={IG}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5"
          >
            <InstagramIcon className="h-4 w-4" />
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}

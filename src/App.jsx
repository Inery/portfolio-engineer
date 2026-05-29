import {
  ArrowUpRight,
  Code2,
  Database,
  GitBranch,
  Github,
  Layers,
  Linkedin,
  Mail,
  MessageCircle,
  Rocket,
  Server,
  Sparkles,
  Workflow,
} from "lucide-react";

const skillGroups = [
  {
    icon: Code2,
    title: "Python, JavaScript & Node.js",
    items: [
      "Desenvolvimento com Python",
      "Experiência com JavaScript moderno",
      "Node.js para APIs e serviços",
    ],
  },
  {
    icon: Layers,
    title: "Front-end & Back-end",
    items: [
      "React e React Native",
      "Noções de desenvolvimento full stack",
      "Integração entre camadas de aplicação",
      "Integração de APIs entre front e back",
    ],
  },
  {
    icon: Server,
    title: "APIs, tempo real e pagamentos",
    items: [
      "APIs REST com FastAPI",
      "WebSocket em tempo real",
      "Integração com pagamentos (Mercado Pago)",
      "Arquitetura de serviços para SaaS",
    ],
  },
  {
    icon: Database,
    title: "Banco de dados & Auth",
    items: [
      "RDBMS com PostgreSQL",
      "Modelagem de dados e consultas SQL",
      "Manipulação de informações e persistência",
      "Supabase (Banco + Auth)",
    ],
  },
  {
    icon: Workflow,
    title: "Arquitetura e organização",
    items: [
      "Entendimento de arquitetura de software",
      "Organização de projetos",
      "Arquitetura SaaS (Software as a Service)",
      "Boas práticas de escalabilidade",
    ],
  },
  {
    icon: GitBranch,
    title: "Ferramentas, IA e entrega",
    items: [
      "Controle de versão com Git e GitHub",
      "IA aplicada ao desenvolvimento em IDEs",
      "Otimização de código e automação de tarefas",
      "Deploy em Render e Vercel",
    ],
  },
  {
    icon: Rocket,
    title: "Projeto aplicado: CorreFood",
    items: [
      "Criação do app e site CorreFood",
      "Arquitetura SaaS em produção",
      "Integração de APIs e serviços",
      "Operação full stack ponta a ponta",
    ],
    link: "https://correfood.com/",
  },
];

const projects = [
  {
    name: "CorreFood",
    description:
      "Plataforma SaaS para operações de delivery com comunicação em tempo real, processamento de pagamentos e painel de gestão.",
    stack: ["React", "FastAPI", "Supabase", "PostgreSQL", "WebSockets"],
    link: "https://correfood.com/",
  },
  {
    name: "Site Psicologia Nayara",
    description:
      "Site institucional para atendimento em psicologia, com foco em presença digital, apresentação de serviços e canal de contato.",
    stack: ["Python", "Flask", "HTML", "CSS", "Vercel"],
    link: "https://site-psicologia-nayara.vercel.app",
  },
];

const trainings = [
  {
    title: "Curso com Python: desenvolvimento inteligente com IA",
    institution: "Santander Open Academy",
    format: "Online",
    status: "Finalizado",
  },
  {
    title: "Product Management: design e lançamento de produtos digitais",
    institution: "Santander Open Academy",
    format: "Online",
    status: "Em andamento",
  },
  {
    title: "Santander Jornada Tech AWS",
    institution: "Santander Open Academy",
    format: "Online",
    status: "Em andamento",
  },
  {
    title: "Segurança digital para o seu dia a dia",
    institution: "Santander Open Academy",
    format: "Online",
    status: "Em andamento",
  },
  {
    title: "Introdução à ciência de dados",
    institution: "IE University",
    format: "Online",
    status: "Finalizado",
  },
  {
    title: "Segurança na Nuvem",
    institution: "Amazon Web Services (AWS)",
    format: "Online",
    status: "Finalizado",
  },
  {
    title: "AWS Cloud Fundamentals",
    institution: "Amazon Web Services (AWS)",
    format: "Online",
    status: "Finalizado",
  },
  {
    title: "AWS Cloud Fundamentals - SMBs",
    institution: "Amazon Web Services (AWS)",
    format: "Online",
    status: "Finalizado",
  },
];

const deliveryFlow = [
  "Discovery técnico com foco no problema real.",
  "Arquitetura orientada a escalabilidade e manutenção.",
  "Entrega contínua com métricas de qualidade e negócio.",
];

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 backdrop-blur-xl bg-slate-950/60">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 md:px-10">
        <a href="#home" className="brand-mark">
          IN
        </a>

        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-300 md:flex">
          <a href="#skills" className="nav-link">
            Skills
          </a>
          <a href="#training" className="nav-link">
            Formações
          </a>
          <a href="#projects" className="nav-link">
            Projetos
          </a>
          <a href="#contact" className="nav-link">
            Contato
          </a>
        </nav>

        <a href="#contact" className="cta-outline text-sm">
          Vamos conversar
        </a>
      </div>
    </header>
  );
}

function Hero() {
  const heroMetrics = [
    { label: "Projetos em Destaque", value: String(projects.length) },
    { label: "Competências Técnicas", value: String(skillGroups.length) },
    { label: "Objetivo Atual", value: "1ª oportunidade" },
  ];

  return (
    <section id="home" className="section-shell pt-10 md:pt-16">
      <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="reveal">
          <p className="inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">
            <Sparkles size={14} />
            Igor Nery • Engenharia de Software
          </p>

          <h1 className="mt-5 max-w-[14ch] text-4xl font-black leading-[1.02] tracking-tight text-white md:text-6xl lg:text-[4.5rem]">
            Construo aplicações full stack com
            <span className="gradient-text block">arquitetura sólida e entrega consistente.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300 md:text-lg">
            Sou graduando em Engenharia de Software, em processo de transição de carreira para tecnologia, buscando minha primeira oportunidade na área. Tenho experiência prática com desenvolvimento Full Stack, integração de APIs, arquitetura SaaS e uso de IA no dia a dia para aumentar produtividade e qualidade de entrega.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            <span className="chip">Graduação em Engenharia de Software</span>
            <span className="chip">Transição de carreira</span>
            <span className="chip">Buscando 1ª oportunidade</span>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a href="#projects" className="cta-solid">
              Ver projetos
              <ArrowUpRight size={18} />
            </a>
            <a href="#skills" className="cta-outline">
              Explorar stack
            </a>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {heroMetrics.map((metric, index) => (
              <article
                key={metric.label}
                className="panel reveal"
                style={{ animationDelay: `${index * 120}ms` }}
              >
                <p className="text-2xl font-black text-white">{metric.value}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.15em] text-slate-400">
                  {metric.label}
                </p>
              </article>
            ))}
          </div>
        </div>

        <aside className="panel relative overflow-hidden p-6 md:p-8 reveal" style={{ animationDelay: "220ms" }}>
          <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-300/20 blur-3xl" />
          <div className="absolute -bottom-14 -left-12 h-36 w-36 rounded-full bg-emerald-300/20 blur-3xl" />

          <div className="relative space-y-5">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-cyan-200/90">
              System Overview
            </p>

            <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-4">
              <p className="font-mono text-xs text-slate-400">services/core-api.ts</p>
              <p className="mt-2 font-mono text-sm text-cyan-200">
                Fast API layer + auth + payment webhooks
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-4">
              <p className="font-mono text-xs text-slate-400">ui/dashboard.tsx</p>
              <p className="mt-2 font-mono text-sm text-emerald-200">
                Real-time analytics + tenant management
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-4">
              <p className="font-mono text-xs text-slate-400">infra/deploy.yml</p>
              <p className="mt-2 font-mono text-sm text-amber-200">
                CI/CD pipeline with preview deployments
              </p>
            </div>

            <div className="mt-6 rounded-2xl border border-white/10 bg-slate-950/60 p-4">
              <p className="text-sm font-semibold text-slate-100">Fluxo de entrega</p>
              <ul className="mt-3 space-y-2 text-sm text-slate-300">
                {deliveryFlow.map((step) => (
                  <li key={step} className="flex items-start gap-2">
                    <span className="signal-dot mt-1" />
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="section-shell">
      <div className="section-heading reveal">
        <p className="section-kicker">Competências Técnicas</p>
        <h2 className="section-title">Habilidades e conhecimentos aplicados no desenvolvimento de software</h2>
        <p className="mt-4 max-w-4xl text-base leading-relaxed text-slate-300">
          Conhecimentos em desenvolvimento full stack, arquitetura SaaS, integração de APIs, bancos relacionais e uso de IA no fluxo de engenharia para produtividade e qualidade.
        </p>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {skillGroups.map((group, index) => {
          const Icon = group.icon;
          return (
            <article
              key={group.title}
              className="panel reveal"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div className="flex items-center gap-3">
                <div className="icon-wrap">
                  <Icon size={18} />
                </div>
                <h3 className="text-lg font-bold text-white">{group.title}</h3>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="chip">
                    {item}
                  </span>
                ))}
              </div>

              {group.link ? (
                <a
                  href={group.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan-200 hover:text-cyan-100"
                >
                  Ver projeto
                  <ArrowUpRight size={16} />
                </a>
              ) : null}
            </article>
          );
        })}
      </div>
    </section>
  );
}

function Training() {
  const completedTrainings = trainings.filter(
    (training) => training.status === "Finalizado"
  ).length;
  const inProgressTrainings = trainings.length - completedTrainings;

  return (
    <section id="training" className="section-shell">
      <div className="section-heading reveal">
        <p className="section-kicker">Formações</p>
        <h2 className="section-title">Cursos e certificações em evolução contínua</h2>
        <p className="mt-4 max-w-4xl text-base leading-relaxed text-slate-300">
          Formação complementar com foco em desenvolvimento de software, cloud, produto digital e segurança, reforçando a base técnica para atuação em projetos reais.
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          <span className="chip">{trainings.length} formações</span>
          <span className="chip">{completedTrainings} finalizadas</span>
          <span className="chip">{inProgressTrainings} em andamento</span>
        </div>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {trainings.map((training, index) => (
          <article
            key={training.title}
            className="panel reveal"
            style={{ animationDelay: `${index * 70}ms` }}
          >
            <div className="flex flex-wrap items-start justify-between gap-3">
              <h3 className="max-w-[28rem] text-lg font-bold text-white">
                {training.title}
              </h3>

              <span
                className={`rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] ${
                  training.status === "Finalizado"
                    ? "border-emerald-300/40 bg-emerald-300/10 text-emerald-200"
                    : "border-amber-300/40 bg-amber-300/10 text-amber-100"
                }`}
              >
                {training.status}
              </span>
            </div>

            <p className="mt-5 text-sm font-semibold text-slate-200">
              Instituição: {training.institution}
            </p>
            <p className="mt-1 text-sm text-slate-400">
              Modalidade: {training.format}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="section-shell">
      <div className="section-heading reveal">
        <p className="section-kicker">Projetos</p>
        <h2 className="section-title">Produtos reais com foco em impacto e performance</h2>
      </div>

      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {projects.map((project, index) => (
          <article
            key={project.name}
            className="panel reveal flex h-full flex-col"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">
              Case {index + 1}
            </p>

            <h3 className="mt-3 text-2xl font-black text-white">{project.name}</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">{project.description}</p>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <span key={item} className="chip">
                  {item}
                </span>
              ))}
            </div>

            {project.link ? (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-cyan-200 hover:text-cyan-100"
              >
                Abrir projeto
                <ArrowUpRight size={16} />
              </a>
            ) : (
              <p className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-slate-400">
                Case privado ou em lançamento
              </p>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <footer id="contact" className="section-shell pb-20">
      <div className="panel reveal p-8 text-center md:p-12">
        <p className="section-kicker justify-center">Contato</p>
        <h2 className="section-title mt-4">Vamos construir o próximo produto juntos</h2>
        <p className="mx-auto mt-4 max-w-2xl text-slate-300">
          Disponível para oportunidades em engenharia de software, desenvolvimento de produto e colaboração técnica.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="https://github.com/Inery"
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn"
          >
            <Github size={18} />
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/igor-nery-42b742360/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn"
          >
            <Linkedin size={18} />
            LinkedIn
          </a>

          <a href="mailto:igorneri99@hotmail.com" className="social-btn">
            <Mail size={18} />
            Email
          </a>

          <a
            href="http://wa.me/5544999793369"
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn"
          >
            <MessageCircle size={18} />
            WhatsApp
          </a>
        </div>

        <p className="mt-8 text-xs uppercase tracking-[0.15em] text-slate-500">
          © 2026 • Portfolio Engineering
        </p>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="app-shell text-slate-100">
      <div className="background-layer" aria-hidden="true" />
      <Navbar />
      <main className="relative z-10 mx-auto w-full max-w-6xl px-6 md:px-10">
        <Hero />
        <Skills />
        <Training />
        <Projects />
        <Contact />
      </main>
      <a
        href="#home"
        className="fixed bottom-5 right-5 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-slate-900/70 text-slate-100 backdrop-blur transition hover:border-cyan-300/60 hover:text-cyan-200"
        aria-label="Voltar ao topo"
      >
        <Rocket size={16} />
      </a>
    </div>
  );
}

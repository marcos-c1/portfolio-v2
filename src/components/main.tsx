import { LanguageContext, Languages } from "@/contexts/language";
import Link from "next/link";
import Image from "next/image";
import { useContext } from "react";
import { Experience as IExperience } from "@/app/interfaces/experience";
import { Project as IProject } from "@/app/interfaces/project";
import { Certificate as ICertificate } from "@/app/interfaces/cert";
import { Education as IEducation } from "@/app/interfaces/education";

function About() {
  const langContext = useContext(LanguageContext);

  const aboutMe: (string | undefined)[] =
    langContext?.lang == Languages.ptbr
      ? [
          "Sobre mim",
          "Em 2016, tive meu primeiro contato com o mundo da tecnologia ao me interessar no jogo ",
          " feito pela Mojang, decidi explorar como funcionava a codificação por detrás dos panos deste jogo sensacional que naquela época era uma dos jogos mais apreciados pelos meus colegas de classe.",
          'Nessa "aventura" que surgiu como um hobby, construí os meus primeiros algoritmos de comunicação entre o servidor e o cliente, e foi ali que descobri que a minha curiosidade era uma paixão genuína pela programação. Avançando até hoje, tive o privilégio de trabalhar com mentes brilhantes no mundo corporativo da esfera pública, além de participar de eventos e palestras ao longo da minha carreira acadêmica.',
          "Meu foco principal atualmente é construir aplicações robustas e escaláveis como desenvolvedor Backend, seja nos meus projetos pessoais ou para algum cliente como trabalhador autônomo. Eu gosto de criar softwares no ponto ideal onde os padrões de arquitetura e a engenharia se comunicam para a resolução de eventuais problemas — isto é, softwares que ao mesmo tempo sejam úteis para a sociedade por natureza mas também bem-estruturados em nível de código.",
        ]
      : [
          "About me",
          "In 2016, I had my first contact with the world of technology when I became interested in the game ",
          " made by Mojang. I decided to explore how coding worked behind the scenes of this sensational game, which at the time was one of the most popular games among my classmates.",
          'In this "adventure" that began as a hobby, I built my first communication algorithms between the server and the client, and it was there that I discovered that my curiosity was a genuine passion for programming. Fast forward to today, I have had the privilege of working with brilliant minds in the corporate world of the public sphere, as well as participating in events and lectures throughout my academic career.',
          "My main focus currently is building robust and scalable applications as a Backend developer, whether in my personal projects or for a client as a freelancer. I like to create software at the ideal point where architectural patterns and engineering communicate to solve eventual problems — that is, software that is both useful to society in nature but also well-structured at the code level.",
          ,
        ];

  return (
    <section
      id="about"
      className="
        mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="About me"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          {aboutMe && aboutMe[0]}
        </h2>
      </div>
      <div>
        <p className="mb-4">
          {aboutMe && aboutMe[1]}
          <a
            className="font-medium text-slate-200 hover:text-sky-300 focus-visible:text-sky-300"
            href="https://www.minecraft.net/en-us"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="advertising agency (opens in a new tab)"
          >
            Minecraft
          </a>
          {aboutMe && aboutMe[2]}
        </p>
        <p className="mb-4">{aboutMe && aboutMe[3]}</p>
        <p>{aboutMe && aboutMe[4]}</p>
      </div>
    </section>
  );
}

function Education() {
  const langContext = useContext(LanguageContext);
  const education: IEducation = {
    title:
      langContext?.lang == Languages.ptbr
        ? "Formação Acadêmica"
        : "Academic Education",
    course:
      langContext?.lang == Languages.ptbr
        ? "Bacharelado em Ciências da Computação"
        : "Bachelor of Computer Science",
    university:
      langContext?.lang == Languages.ptbr
        ? "Instituto Federal de Brasília"
        : "Federal Institute of Brasília",
    acronym: "IFB",
    attachmentTitle:
      langContext?.lang == Languages.ptbr
        ? "Extração de características em snoRNAs usando modelos matemáticos."
        : "Feature extraction in snoRNAs using mathematical models",
    attachmentLink: "/tcc/TCC_MARCOS_B_CAMPOS.pdf",
    resume:
      langContext?.lang == Languages.ptbr
        ? "Os algoritmos de extração de características que empregam abordagens matemáticas, em contraposição aos tradicionais algoritmos genéticos de extração, têm provado ser altamente eficazes na classificação dos snoRNAs. Eles alcançaram uma taxa de precisão superior a 90% na avaliação da predição, o que evidencia sua utilidade na identificação desses pequenos RNAs em sequências de vertebrados e invertebrados."
        : "Feature extraction algorithms that employ mathematical approaches, as opposed to traditional genetic extraction algorithms, have proven to be highly effective in classifying snoRNAs. They achieved an accuracy rate of over 90% in evaluating the prediction, which highlights their usefulness in identifying these small RNAs in vertebrate and invertebrate sequences.",
    technologiesUsed: [
      "Python",
      "Shell",
      "Numpy",
      "MatPlotLib",
      "Pandas",
      "SciPy",
      "Scikit-Learn",
      "BioPython",
      "IGraph",
    ],
    date: langContext?.lang == Languages.ptbr ? "2019 —  2024" : "2019 —  2024",
    semester: langContext?.lang == Languages.ptbr ? "Graduado" : "Graduated",
  };

  return (
    <section
      id="education"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Education background"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          {education.title}
        </h2>
      </div>
      <div>
        <ol className="group/list">
          <li className="mb-12">
            <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
              <header
                className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
                aria-label="2019 to Present"
              >
                <p>{education.date}</p>
                <p className="mt-2">{education.semester}</p>
              </header>
              <div className="z-10 sm:col-span-6">
                <h3 className="font-medium leading-snug text-slate-200">
                  <div>
                    <a
                      className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-sky-300 focus-visible:text-sky-300 group/link text-base"
                      href="https://www.ifb.edu.br/taguatinga"
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label="Instituto Federal de Brasília, Campus Taguatinga (abre em uma nova aba)"
                    >
                      <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                      <p>
                        {education.course} ·{" "}
                        <span className="inline-flex">
                          {education.university} — {education.acronym}
                          <Image
                            className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                            src="/go-to.svg"
                            alt="Redirect to page"
                            width={16}
                            height={16}
                            priority
                          />
                        </span>
                      </p>
                    </a>
                  </div>
                </h3>
                <a
                  className="relative mt-2 inline-flex items-center text-sm font-medium text-slate-300 hover:text-sky-300 focus-visible:text-sky-300"
                  href={education.attachmentLink}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="TCC (abre em uma nova aba)"
                >
                  <Image
                    className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                    src="/link.svg"
                    alt="Redirect to page"
                    width={16}
                    height={16}
                    priority
                  />
                  <span>
                    <span className="font-bold ml-2">TCC: </span>
                    {education.attachmentTitle}
                  </span>
                </a>

                <p className="mt-2 text-sm leading-normal">
                  {education.resume}
                </p>
                <ul
                  className="mt-2 flex flex-wrap"
                  aria-label="Tecnologias usadas"
                >
                  {education.technologiesUsed.map((t, i) => (
                    <li key={i} className="mr-1.5 mt-2">
                      <div
                        key={i}
                        className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 "
                      >
                        {t}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        </ol>
      </div>
    </section>
  );
}

function Experience() {
  const langContext = useContext(LanguageContext);
  const experience: IExperience[] = [
    //{
    //  title:
    //    langContext?.lang == Languages.ptbr
    //      ? "Desenvolvedor Backend"
    //      : "Backend Developer",
    //  company:
    //    langContext?.lang == Languages.ptbr
    //      ? "Mundo Apex Consultoria e Treinamento"
    //      : "Apex World Consulting & Training",
    //  occupation:
    //    langContext?.lang == Languages.ptbr
    //      ? "Trabalhador em tempo integral"
    //      : "Full-time worker",
    //  resume:
    //    langContext?.lang == Languages.ptbr
    //      ? "Trabalhei como desenvolvedor backend na aplicação Velit. O principal objetivo era transicionar a aplicação legada feita em Java para o ambiente da Oracle APEX, passando todas as funcionalidades do aplicativo desktop para web/mobile."
    //      : "I worked as a backend developer on the Velit application. The main objective was to transition the legacy application made in Java to the Oracle APEX environment, going through all the functionalities of the desktop application for web/mobile.",
    //  technologiesUsed: ["JavaScript", "HTML & CSS", "PL/SQL", "APEX"],
    //  date:
    //    langContext?.lang == Languages.ptbr
    //      ? "Jul 2024 — Presente"
    //      : "Jul 2024 — Present",
    //  websiteURL: "https://mundoapex.com.br/",
    //},
    {
      title:
        langContext?.lang == Languages.ptbr
          ? "Desenvolvedor Frontend"
          : "Frontend Developer",
      company: "Caronas Burguer",
      occupation:
        langContext?.lang == Languages.ptbr
          ? "Trabalhador autônomo"
          : "Freelancer",
      resume:
        langContext?.lang == Languages.ptbr
          ? "Contruir e manter componentes em layout responsivo usados para construir o frontend do site Caronas Burguer, em todas as páginas. Trabalhei como desenvolvedor independente de acordo com as sugestões propostas pelo dono da hamburgueria, para implementar e providenciar a melhor experiência ao usuário."
          : "Build and maintain responsive layout components used to build the frontend of the Caronas Burguer website, on all pages. I worked as an independent developer according to the suggestions proposed by the burger restaurant owner, to implement and provide the best user experience.",
      technologiesUsed: ["PHP", "HTML & CSS", "BootStrap"],
      date: "Jun 2024 — Jul 2024",
      websiteURL: "https://www.caronasburger.com.br/",
    },
    {
      title:
        langContext?.lang == Languages.ptbr
          ? "Desenvolvedor Backend"
          : "Backend Developer",
      company:
        langContext?.lang == Languages.ptbr
          ? "Tribunal de Contas da União"
          : "Federal Court of Union",
      acronym: "TCU",
      occupation:
        langContext?.lang == Languages.ptbr ? "Estagiário" : "Internship",
      resume:
        langContext?.lang == Languages.ptbr
          ? "Construir, customizar, implementar e corrigir as funcionalidades para os clientes do sistema Radex. Integrar os microsserviços da rede interna do TCU em colaboração com os auditores de controle interno e externo, conforme o Regimento Interno do Tribunal de Contas da União."
          : "Build, customize, implement and fix features for Radex system customers. Integrate the microservices from TCU's internal network in collaboration with internal and external control auditors, in accordance with the Regulations Internal Audit Court of the Union.",
      technologiesUsed: ["JavaScript", "HTML & CSS", "PL/SQL", "APEX"],
      date: "2022 — 2024",
      websiteURL: "https://portal.tcu.gov.br/inicio",
    },
    {
      title:
        langContext?.lang == Languages.ptbr
          ? "Cientista de Dados"
          : "Data Scientist",
      company:
        langContext?.lang == Languages.ptbr
          ? "Empresa Brasileira de Serviços Hospitalares"
          : "Brazilian Hospital Services Company",
      acronym: "EBSERH",
      occupation:
        langContext?.lang == Languages.ptbr ? "Estagiário" : "Internship",
      resume:
        langContext?.lang == Languages.ptbr
          ? "Atuava no setor de Análise e Dimensionamento de Pessoal, responsável por administrar a base de dados de todos os hospitais universitários federais regidos pela Empresa Brasileira de Serviços Hospitalares. Desenvolvi um algoritmo de aprendizado de máquina supervisionado capaz de extrair o texto de imagens usando a biblioteca de código aberto chamada Tesseract."
          : "I worked in the Personnel Analysis and Dimensioning sector, responsible for managing the database of all federal university hospitals governed by the Brazilian Hospital Services Company. I developed a supervised machine learning algorithm capable of extracting text from images using the open source library called Tesseract.",
      attachmentLinks: [
        "https://www.gov.br/ebserh/pt-br/hospitais-universitarios",
        "https://www.gov.br/saude/pt-br",
      ],
      attachmentTitle: ["HUF's", "Department of Health"],
      technologiesUsed: [
        "DBeaver",
        "SQL",
        "M",
        "Power BI",
        "Web-scrapping",
        "OCR - Tesseract",
      ],
      date: langContext?.lang == Languages.ptbr ? "2020 — 2024" : "2020 — 2024",
      websiteURL: "https://www.gov.br/ebserh/pt-br",
    },
  ];

  return (
    <section
      id="experience"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Work experience"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          {langContext?.lang == Languages.ptbr
            ? "Experiência Profissional"
            : "Professional Experience"}
        </h2>
      </div>
      <div>
        <ol className="group/list">
          {experience.map((e, i) => (
            <li key={i} className="mb-12">
              <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                <header
                  className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
                  aria-label="2024 to Present"
                >
                  {e.date}
                </header>
                <div className="z-10 sm:col-span-6">
                  <h3 className="font-medium leading-snug text-slate-200">
                    <div>
                      <a
                        className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-sky-300 focus-visible:text-sky-300 group/link text-base"
                        href={e.websiteURL}
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label={`${e.occupation} at ${e.company} (opens in a new tab)`}
                      >
                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                        <span>
                          {e.title} ·{" "}
                          <span className="inline-flex">
                            {e.company}
                            <Image
                              className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                              src="/go-to.svg"
                              alt="Redirect to page"
                              width={16}
                              height={16}
                              priority
                            />
                          </span>
                        </span>
                      </a>
                    </div>
                    <div>
                      <div
                        className="text-slate-500 text-sm"
                        aria-hidden="true"
                      >
                        {e.occupation}
                      </div>
                    </div>
                  </h3>
                  <p className="mt-2 text-sm leading-normal">{e.resume}</p>
                  {e.acronym == "EBSERH" && (
                    <ul
                      className="mt-2 flex flex-wrap"
                      aria-label="Related links"
                    >
                      {e.attachmentLinks &&
                        e.attachmentLinks.map((a, i) => (
                          <li key={i} className="mr-4">
                            <a
                              className="relative mt-2 inline-flex items-center text-sm font-medium text-slate-300 hover:text-sky-300 focus-visible:text-sky-300"
                              href={a}
                              target="_blank"
                              rel="noreferrer noopener"
                              aria-label={`${e.attachmentTitle && e.attachmentTitle[i]}(abre em uma nova aba)`}
                            >
                              <Image
                                className="mr-1 relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                                src="/link.svg"
                                alt="Redirect to page"
                                width={16}
                                height={16}
                                priority
                              />

                              <span>
                                {e.attachmentTitle && e.attachmentTitle[i]}
                              </span>
                            </a>
                          </li>
                        ))}
                    </ul>
                  )}
                  <ul
                    className="mt-2 flex flex-wrap"
                    aria-label="Technologies used"
                  >
                    {e.technologiesUsed.map((t, i) => (
                      <li key={i} className="mr-1.5 mt-2">
                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">
                          {t}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ol>
        <div className="mt-12">
          <a
            className="inline-flex items-baseline leading-tight hover:text-sky-300 focus-visible:text-sky-300 font-semibold text-slate-200 group/link text-base"
            href="/cv/marcos-resume.pdf"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="View Full Résumé (opens in a new tab)"
          >
            <span className="inline-flex">
              {langContext?.lang == Languages.ptbr ? "Ver CV" : "See CV"}
              <span className="inline-flex">
                <Image
                  className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                  src="/go-to.svg"
                  alt="Redirect to page"
                  width={16}
                  height={16}
                  priority
                />
              </span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  const langContext = useContext(LanguageContext);

  const projects: IProject[] = [
    {
      name:
        langContext?.lang == Languages.ptbr
          ? "Rastreador de incidências do COVID-19"
          : "COVID-19 Incidence Tracker",
      resume:
        langContext?.lang == Languages.ptbr
          ? "Um aplicativo web e mobile informativo sobre a incidência da doença COVID-19 nos estados brasileiros de forma transparência consumindo as APIs públicas do Ministério da Saúde. Os tópicos abordados incluem os sintomas graves e comuns da doença e os cuidados especiais que devem ser tomados caso o paciente apresente os sintomas."
          : "An informative web and mobile application about the incidence of the COVID-19 disease in Brazilian states in a transparent way using the public APIs of the Ministry of Health. Topics covered include the serious and common symptoms of the disease and the special care that should be taken if the patient presents symptoms.",
      technologiesUsed: ["Flutter", "Dart", "C++", "CMake"],
      url: "https://marcos-c1.github.io/covid-app-io/",
      imagePath: "/covid-app.png",
    },
    {
      name:
        langContext?.lang == Languages.ptbr
          ? "Sistema de Recursos Humanos — CRUD"
          : "Human Resources System — CRUD",
      resume:
        langContext?.lang == Languages.ptbr
          ? "Uma aplicação desktop básica que implementa as quatro funções básicas que os modelos devem ser capazes de realizar, que são CREATE, READ, UPDATE e DELETE (CRUD) para o cadastramento de clientes."
          : "A basic desktop application that implements the four basic functions that models must be able to perform, which are CREATE, READ, UPDATE and DELETE (CRUD) for customer registration.",
      technologiesUsed: ["Java", "PostGres", "Swing API"],
      url: "https://github.com/marcos-c1/crud-rh",
      imagePath: "/crud-rh.png",
    },
    {
      name:
        langContext?.lang == Languages.ptbr
          ? "Tema Hypernova"
          : "Hypernova Theme",
      resume:
        langContext?.lang == Languages.ptbr
          ? "Um tema escuro para VSCode baseado no tema Gruvbox de Pavel Pertsev"
          : "A dark theme for VSCode based on Gruvbox theme of Pvel Pertsev",
      url: "https://marketplace.visualstudio.com/items?itemName=marcos-c1.hypernova",
      imagePath: "/hypernova-extension.png",
    },
    {
      name: "marcosc1.vercel.app (v1)",
      resume:
        langContext?.lang == Languages.ptbr
          ? "Um antigo site de portfólio construído com Vercel para expor meus projetos pessoais e minhas experiências profissionais."
          : "An old portfolio site built with Vercel to showcase my personal projects and my professional experiences.",
      technologiesUsed: ["Vue.js", "Typescript", "Vercel"],
      url: "https://marcosc1.vercel.app/",
      imagePath: "/portfolio.png",
    },
  ];

  return (
    <section
      id="projects"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Selected projects"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          {langContext?.lang == Languages.ptbr
            ? "Projetos pessoais"
            : "Personal projects"}
        </h2>
      </div>
      <div>
        <ul className="group/list">
          {projects.map((p, i) => (
            <li key={i} className="mb-12">
              <div className="group relative grid justify-items-center sm:justify-items-start gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                <div className="z-10 sm:order-2 sm:col-span-6">
                  <h3>
                    <a
                      className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-sky-300 focus-visible:text-sky-300  group/link text-base"
                      href={p.url}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label={`${p.name} (opens in a new tab)`}
                    >
                      <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                      <span>
                        {p.name}
                        <span className="inline-flex">
                          <Image
                            className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                            src="/go-to.svg"
                            alt="Redirect to page"
                            width={16}
                            height={16}
                            priority
                          />
                        </span>
                      </span>
                    </a>
                  </h3>
                  <p className="mt-2 text-sm leading-normal">{p.resume}</p>
                  <ul
                    className="mt-2 flex flex-wrap"
                    aria-label="Technologies used:"
                  >
                    {p.technologiesUsed &&
                      p.technologiesUsed.map((t, i) => (
                        <li key={i} className="mr-1.5 mt-2">
                          <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">
                            {t}
                          </div>
                        </li>
                      ))}
                  </ul>
                </div>
                <Image
                  className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1 transparent"
                  src={p.imagePath}
                  alt={`${p.name}`}
                  width={200}
                  height={48}
                  decoding="async"
                  priority
                />
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-12">
          <a
            className="inline-flex items-center font-semibold leading-tight text-slate-200 group"
            aria-label="View Full Project Archive"
            /* href="/archive" */ href="https://github.com/marcos-c1"
            target="_blank"
          >
            <span>
              <span className="border-b border-transparent pb-px transition group-hover:border-sky-300 motion-reduce:transition-none">
                {langContext?.lang == Languages.ptbr
                  ? "Ver todos os projetos"
                  : "See all projects"}
              </span>
              <span className="inline-flex whitespace-nowrap">
                <Image
                  className="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                  src="/redirect.svg"
                  alt="Link to the collection of projects page"
                  width={16}
                  height={16}
                  priority
                />
              </span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

function Certs() {
  const langContext = useContext(LanguageContext);
  const certs: ICertificate[] = [
    {
      year: 2024,
      name: "CPA: Programming Essentials in C++",
      provider: "Cisco",
      imageAlt: "Cisco Cert in C++",
      imagePath: "/cert-cpa.png",
      url: "/certs/cpa_prog_cpp.pdf",
    },
    {
      year: 2019,
      name: "Python Essentials 1",
      provider: "Cisco",
      imageAlt: "Cisco Cert in Python",
      imagePath: "/cert-pe.png",
      url: "/certs/python_essentials.pdf",
    },
    {
      year: 2023,
      name:
        langContext?.lang == Languages.ptbr
          ? "Curso Web Moderno Completo com JavaScript"
          : "Complete Modern Web with JavaScript Course",
      provider: "Udemy",
      imageAlt:
        langContext?.lang == Languages.ptbr
          ? "Curso Web Moderno Completo com JavaScript"
          : "Complete Modern Web with JavaScript Course",
      imagePath: "/cert-web-moderno.png",
      url: "/certs/web_moderno_js.pdf",
    },
  ];

  return (
    <section
      id="certs"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Blog posts"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          {langContext?.lang == Languages.ptbr
            ? "Certificados"
            : "Certifications"}
        </h2>
      </div>
      <div>
        <ul className="group/list">
          {certs.map((c, i) => (
            <li key={i} className="mb-12">
              <div className="group relative grid grid-cols-8 gap-4 transition-all sm:items-center sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                <Image
                  className="z-10 col-span-2 rounded text-transparent border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:col-span-2"
                  src={c.imagePath}
                  alt={c.imageAlt}
                  width={200}
                  height={48}
                  decoding="async"
                  priority
                />

                <div className="z-10 col-span-6">
                  <p className="-mt-1 text-sm font-semibold leading-6">
                    {c.year}
                  </p>
                  <h3 className="-mt-1">
                    <a
                      className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-sky-300 focus-visible:text-sky-300  group/link text-base"
                      href={c.url}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label={`${c.name} (opens in a new tab)`}
                    >
                      <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                      <span>
                        {c.name} ·{" "}
                        <span className="inline-flex">
                          {c.provider}
                          <Image
                            className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                            src="/go-to.svg"
                            alt="Redirect to page"
                            width={16}
                            height={16}
                            priority
                          />
                        </span>
                      </span>
                    </a>
                  </h3>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-12">
          <Link
            className="inline-flex items-center font-semibold leading-tight text-slate-200 group"
            aria-label="View Full Project Archive"
            href={{
              pathname: "/certifications",
              query: {
                lang: langContext?.lang,
              },
            }}
          >
            <span>
              <span className="border-b border-transparent pb-px transition group-hover:border-sky-300 motion-reduce:transition-none">
                {langContext?.lang == Languages.ptbr
                  ? "Ver todos os certificados"
                  : "See all certifications"}
              </span>
              <span className="inline-flex whitespace-nowrap">
                <Image
                  className="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                  src="/redirect.svg"
                  alt="Link to the collection of projects page"
                  width={16}
                  height={16}
                  priority
                />
              </span>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Content() {
  return (
    <main id="content" className="pt-24 lg:w-1/2">
      <About />
      <Education />
      <Experience />
      <Projects />
      <Certs />
    </main>
  );
}

"use client";
import Image from "next/image";
import { Card } from "@/components/card";
import { Manrope } from "next/font/google";
import { useContext } from "react";
import { LanguageContext, Languages } from "@/contexts/language";
import { Certificate as ICertificate } from "@/app/interfaces/cert";

const manRope = Manrope({
  subsets: ["latin"],
  display: "swap",
});

export default function Page() {
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
    {
      year: 2023,
      name:
        langContext?.lang == Languages.ptbr
          ? "JavaScript do básico ao avançado (c/ Node.js e projetos)"
          : "JavaScript from basic to advanced (with Node.js and projects)",
      provider: "Udemy",
      imageAlt:
        langContext?.lang == Languages.ptbr
          ? "JavaScript do básico ao avançado (c/ Node.js e projetos)"
          : "JavaScript from basic to advanced (with Node.js and projects)",
      imagePath: "/cert-js-basico-avancado.png",
      url: "/certs/js_basico_ao_avancado.pdf",
    },
    {
      year: 2023,
      name:
        langContext?.lang == Languages.ptbr
          ? "Desenvolvimento avançado em Java"
          : "Advanced Development in Java",
      provider: "DIO",
      imageAlt:
        langContext?.lang == Languages.ptbr
          ? "Desenvolvimento avançado em Java"
          : "Advanced Development in Java",
      imagePath: "/cert-java.png",
      url: "/certs/java.pdf",
    },
    {
      year: 2024,
      name:
        langContext?.lang == Languages.ptbr
          ? "Programação C# com CRM Dynamics"
          : "C# Programming with CRM Dynamics",
      provider: "DIO",
      imageAlt:
        langContext?.lang == Languages.ptbr
          ? "Programação C# com CRM Dynamics"
          : "C# Programming with CRM Dynamics",
      imagePath: "/cert-csharp-crm.png",
      url: "/certs/csharp_crm.pdf",
    },
  ];

  return (
    <div
      className={`${manRope.className} bg-slate-870 mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0 transition-all `}
    >
      <div className="lg:py-24">
        <a
          className="group mb-2 inline-flex items-center font-semibold leading-tight text-sky-300"
          href="/"
        >
          <Image
            className="mr-1 h-4 w-4 rotate-180 transition-transform group-hover:-translate-x-2 dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
            src="/go-back.svg"
            alt="Link to the home page"
            width={16}
            height={16}
            priority
          />
          Marcos Campos
        </a>
        <h1 className="text-3xl font-bold tracking-tight text-slate-200 sm:text-4xl mb-15">
          Todos os certificados
        </h1>
        <ul className="group/list">
          <li className="mb-12">
            {certs.map((c, i) => (
              <Card cert={c} key={i} />
            ))}
          </li>
        </ul>
      </div>
    </div>
  );
}


"use client";

import Image from "next/image";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { Card } from "@/components/card";
import { Manrope } from "next/font/google";
import { Languages } from "@/contexts/language";
import { Certificate as ICertificate } from "@/app/interfaces/cert";

const manRope = Manrope({
  subsets: ["latin"],
  display: "swap",
});

export function CertList() {
  const paramLang = parseInt(useSearchParams().get("lang") ?? "1")
    ? Languages.eng
    : Languages.ptbr;
  const [lang, setLang] = useState<Languages>(paramLang);
  const [isHiddenModal, setHiddenModal] = useState<Boolean>(true);

  const handleModal = () => {
    setHiddenModal(!isHiddenModal);
  };

  const handleLang = () => {
    if (lang == Languages.ptbr) setLang(Languages.eng);
    else setLang(Languages.ptbr);
    setHiddenModal(!isHiddenModal);
  };

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
        lang == Languages.ptbr
          ? "Curso Web Moderno Completo com JavaScript"
          : "Complete Modern Web with JavaScript Course",
      provider: "Udemy",
      imageAlt:
        lang == Languages.ptbr
          ? "Curso Web Moderno Completo com JavaScript"
          : "Complete Modern Web with JavaScript Course",
      imagePath: "/cert-web-moderno.png",
      url: "/certs/web_moderno_js.pdf",
    },
    {
      year: 2023,
      name:
        lang == Languages.ptbr
          ? "JavaScript do básico ao avançado (c/ Node.js e projetos)"
          : "JavaScript from basic to advanced (with Node.js and projects)",
      provider: "Udemy",
      imageAlt:
        lang == Languages.ptbr
          ? "JavaScript do básico ao avançado (c/ Node.js e projetos)"
          : "JavaScript from basic to advanced (with Node.js and projects)",
      imagePath: "/cert-js-basico-avancado.png",
      url: "/certs/js_basico_ao_avancado.pdf",
    },
    {
      year: 2023,
      name:
        lang == Languages.ptbr
          ? "Desenvolvimento avançado em Java"
          : "Advanced Development in Java",
      provider: "DIO",
      imageAlt:
        lang == Languages.ptbr
          ? "Desenvolvimento avançado em Java"
          : "Advanced Development in Java",
      imagePath: "/cert-java.png",
      url: "/certs/java.pdf",
    },
    {
      year: 2024,
      name:
        lang == Languages.ptbr
          ? "Programação C# com CRM Dynamics"
          : "C# Programming with CRM Dynamics",
      provider: "DIO",
      imageAlt:
        lang == Languages.ptbr
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
          {lang == Languages.ptbr
            ? "Todos os certificados"
            : "All certifications"}
        </h1>
        <ul className="list-none">
          <li className="mb-10 mt-5 relative select-none">
            <button
              className="inline-flex items-center text-sm font-medium text-slate-300 hover:text-sky-300 focus-visible:text-sky-300 hover:text-slate-200"
              aria-label="Choose the language that you prefer"
              onClick={handleModal}
            >
              <Image
                className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
                src={
                  lang == Languages.ptbr
                    ? "/brazil-flag.svg"
                    : "/united-states-flag.svg"
                }
                alt="Redirect to page"
                width={28}
                height={28}
                priority
              />
              <Image
                className="ml-3 relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
                src="/select.svg"
                alt="Redirect to page"
                width={12}
                height={12}
                priority
              />
            </button>
            <button
              className={`${isHiddenModal ? "hidden" : "block"} relative mt-2 flex flex-row`}
              onClick={handleLang}
            >
              <Image
                className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
                src={
                  lang == Languages.ptbr
                    ? "/united-states-flag.svg"
                    : "/brazil-flag.svg"
                }
                alt="Redirect to page"
                width={28}
                height={28}
                priority
              />
              <span className="pl-2 font-inherit text-sm align-center">
                {lang == Languages.ptbr ? "English" : "Portuguese"}
              </span>
            </button>
          </li>
        </ul>

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

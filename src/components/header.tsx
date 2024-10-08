"use client";
import { LanguageContext, Languages } from "@/contexts/language";
import { HeaderStructure } from "@/app/interfaces/header";
import Image from "next/image";
import { useContext, useState } from "react";

enum SectionList {
  ABOUT_ME = 0,
  EDUCATION,
  EXPERIENCE,
  PROJECTS,
  CERTIFICATIONS,
}

export default function Header() {
  const langContext = useContext(LanguageContext);
  const [isHiddenModal, setHiddenModal] = useState<Boolean>(true);

  const headerStructure: HeaderStructure = {
    title:
      langContext?.lang == Languages.ptbr
        ? "Desenvolvedor Backend"
        : "Backend Developer",
    summary:
      langContext?.lang == Languages.ptbr
        ? "Eu construo sistemas sólidos e seguros que sustentam as experiências que você ama."
        : "I build strong & secure systems that support the experiences that you love.",
    sections: [
      langContext?.lang == Languages.ptbr ? "Sobre mim" : "About me",
      langContext?.lang == Languages.ptbr ? "Educação" : "Background education",
      langContext?.lang == Languages.ptbr ? "Experiências" : "Experience",
      langContext?.lang == Languages.ptbr ? "Projetos" : "Projects",
      langContext?.lang == Languages.ptbr ? "Certificações" : "Certifications",
    ],
    templateRef:
      langContext?.lang == Languages.ptbr
        ? "Inspirado no modelo dos projetos de "
        : "Inspired on projects templates of ",
  };

  const handleModal = () => {
    setHiddenModal(!isHiddenModal);
  };

  const handleLang = () => {
    if (langContext?.lang == Languages.ptbr) langContext.setLang(Languages.eng);
    else langContext?.setLang(Languages.ptbr);
    setHiddenModal(!isHiddenModal);
  };

  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
          <a href="/">Marcos B. Campos</a>
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
          {headerStructure.title}
        </h2>
        <p className="mt-4 max-w-xs leading-normal">
          {headerStructure.summary}
        </p>
        <nav className="nav hidden lg:block" aria-label="In-page jump links">
          <ul className="mt-16 w-max">
            <li>
              <a className="group flex items-center py-3" href="#about">
                <span
                  className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none

                                animate-expand supports-no-view-driven-animations:animate-none
        [animation-range:0_0] [animation-timeline:scroll()]
                                "
                ></span>
                <span
                  className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200

                                animate-colorized supports-no-view-driven-animations:animate-none
        [animation-range:0_0] [animation-timeline:scroll()]
                                "
                >
                  {headerStructure.sections[SectionList.ABOUT_ME]}
                </span>
              </a>
            </li>
            <li>
              <a className="group flex items-center py-3" href="#education">
                <span
                  className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none

                            animate-expand supports-no-view-driven-animations:animate-none
        [animation-range:95px_702px] [animation-timeline:scroll()]
                            "
                ></span>
                <span
                  className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200

                                animate-colorized supports-no-view-driven-animations:animate-none
        [animation-range:95px_702px] [animation-timeline:scroll()]
                                "
                >
                  {headerStructure.sections[SectionList.EDUCATION]}
                </span>
              </a>
            </li>
            <li>
              <a className="group flex items-center py-3" href="#experience">
                <span
                  className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none

                            animate-expand supports-no-view-driven-animations:animate-none
        [animation-range:702px_1173px] [animation-timeline:scroll()]
                            "
                ></span>
                <span
                  className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200

                                animate-colorized supports-no-view-driven-animations:animate-none
        [animation-range:702px_1173px] [animation-timeline:scroll()]

                                "
                >
                  {headerStructure.sections[SectionList.EXPERIENCE]}
                </span>
              </a>
            </li>
            <li>
              <a
                className="group ease-in flex items-center py-3"
                href="#projects"
              >
                <span
                  className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none
                                ease-in
                                animate-expand supports-no-view-driven-animations:animate-none
        [animation-range:1173_2290px] [animation-timeline:scroll()]
                                "
                ></span>
                <span
                  className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200

                                animate-colorized supports-no-view-driven-animations:animate-none
        [animation-range:1173px_2290px] [animation-timeline:scroll()]
                                "
                >
                  {headerStructure.sections[SectionList.PROJECTS]}
                </span>
              </a>
            </li>
            <li>
              <a className="group flex items-center py-3" href="#certs">
                <span
                  className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none

                                animate-expand supports-no-view-driven-animations:animate-none
        [animation-range:2290px_2700px] [animation-timeline:scroll()]
                                "
                ></span>
                <span
                  className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200

                                animate-colorized supports-no-view-driven-animations:animate-none
        [animation-range:2290px_2700px] [animation-timeline:scroll()]
                                "
                >
                  {headerStructure.sections[SectionList.CERTIFICATIONS]}
                </span>
              </a>
            </li>
          </ul>
        </nav>
        <ul className="flex flex-col">
          <li>
            <a
              className="mt-10 elative inline-flex items-center text-sm font-medium text-slate-300 hover:text-sky-300 focus-visible:text-sky-300"
              href="/cv/marcos-resume.pdf"
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
              <span className="font-bold ml-2">Curriculum Vitae</span>
            </a>
          </li>
          <li className="mb-10 mt-5 relative select-none">
            <button
              className="inline-flex items-center text-sm font-medium text-slate-300 hover:text-sky-300 focus-visible:text-sky-300 hover:text-slate-200"
              aria-label="Choose the language that you prefer"
              onClick={handleModal}
            >
              <Image
                className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
                src={
                  langContext?.lang == Languages.ptbr
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
                  langContext?.lang == Languages.ptbr
                    ? "/united-states-flag.svg"
                    : "/brazil-flag.svg"
                }
                alt="Redirect to page"
                width={28}
                height={28}
                priority
              />
              <span className="pl-2 font-inherit text-sm align-center">
                {langContext?.lang == Languages.ptbr ? "English" : "Portuguese"}
              </span>
            </button>
          </li>
        </ul>
      </div>
      <small className="flex justify-start items-end">
        {headerStructure.templateRef}
        <a
          href="https://github.com/bchiang7"
          target="_blank"
          className="inline-flex self-start text-sm font-medium text-slate-300 hover:text-sky-300 focus-visible:text-sky-300"
        >
          <Image
            className="relative mx-2 dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
            src="/github.svg"
            alt="marcos-c1"
            width={12}
            height={12}
            priority
          />
          <span>Britanny Chiang</span>
        </a>
      </small>
      <ul
        className="lg:fixed lg:left-10 lg:right-auto lg:bottom-1/3 lg:z-10 lg:flex-col flex ml-1 mt-8 items-center"
        aria-label="Social media"
      >
        <li className="lg:my-5 mr-5 text-xs shrink-0">
          <a
            className="block hover:text-slate-200"
            href="https://github.com/marcos-c1"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub (opens in a new tab)"
            title="GitHub"
          >
            <span className="sr-only">GitHub</span>
            <Image
              className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
              src="/github.svg"
              alt="marcos-c1"
              width={24}
              height={24}
              priority
            />
          </a>
        </li>
        <li className="lg:my-5 mr-5 text-xs shrink-0">
          <a
            className="block hover:text-slate-200"
            href="https://www.linkedin.com/in/marcos-c1/"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="LinkedIn (opens in a new tab)"
            title="LinkedIn"
          >
            <span className="sr-only">LinkedIn</span>
            <Image
              className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
              src="/linkedin.svg"
              alt="marcos-c1"
              width={24}
              height={24}
              priority
            />
          </a>
        </li>
        <li className="lg:my-5 mr-5 text-xs shrink-0">
          <a
            className="block hover:text-slate-200"
            href="https://leetcode.com/u/marcos-c1/"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="CodePen (opens in a new tab)"
            title="CodePen"
          >
            <span className="sr-only">LeetCode</span>
            <Image
              className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
              src="/leetcode.svg"
              alt="marcos-c1"
              width={24}
              height={24}
              priority
            />
          </a>
        </li>
        <li className="lg:my-5 mr-5 text-xs shrink-0">
          <a
            className="block hover:text-slate-200"
            href="https://www.instagram.com/marcos1bc/"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Instagram (opens in a new tab)"
            title="Instagram"
          >
            <span className="sr-only">Instagram</span>
            <Image
              className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
              src="/instagram.svg"
              alt="marcos-c1"
              width={24}
              height={24}
              priority
            />
          </a>
        </li>
        <li className="lg:my-5 mr-5 text-xs shrink-0">
          <a
            className="block hover:text-slate-200"
            href="https://x.com/marcos_bc1"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Twitter (opens in a new tab)"
            title="Twitter"
          >
            <span className="sr-only">Twitter</span>
            <Image
              className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
              src="/twitter.svg"
              alt="marcos-c1"
              width={24}
              height={24}
              priority
            />
          </a>
        </li>
      </ul>
    </header>
  );
}

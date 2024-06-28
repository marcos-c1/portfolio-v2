import Image from "next/image";

function About() {
    return (
        <section id="about" className="
        mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="About me">
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Sobre Mim</h2>
            </div>
            <div>
                <p className="mb-4">
                    Em 2016, tive meu primeiro contato com o mundo da tecnologia ao me interessar no jogo <a className="font-medium text-slate-200 hover:text-sky-300 focus-visible:text-sky-300" href="https://www.minecraft.net/en-us" target="_blank" rel="noreferrer noopener" aria-label="advertising agency (opens in a new tab)">Minecraft</a> feito pela Mojang, decidi explorar como funcionava a codificação por detrás dos panos deste jogo sensacional que naquela época era uma dos jogos mais apreciados pelos meus colegas de classe.
                </p>
                <p className="mb-4">
                    Nessa "aventura" que surgiu como um hobby, construí os meus primeiros algoritmos de comunicação entre o servidor e o cliente, e foi ali que descobri que a minha curiosidade era uma paixão genuína pela programação. Avançando até hoje, tive o privilégio de trabalhar com mentes brilhantes no mundo corporativo da esfera pública, além de participar de eventos e palestras ao longo da minha carreira acadêmica.
                </p>
                <p>
                    Meu foco principal atualmente é construir aplicações robustas e escaláveis como desenvolvedor Backend, seja nos meus projetos pessoais ou para algum cliente como trabalhador autônomo. Eu gosto de criar softwares no ponto ideal onde os padrões de arquitetura e a engenharia se comunicam para a resolução de eventuais problemas — isto é, softwares que ao mesmo tempo sejam úteis para a sociedade por natureza mas também bem-estruturados em nível de código.
                </p>
            </div>
        </section>
    )
}

function Education() {
    return (
        <section id="education" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24

        " aria-label="Education background">
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Formação Acadêmica</h2>
            </div>
            <div>
                <ol className="group/list">
                    <li className="mb-12">
                        <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg">
                            </div>
                            <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2" aria-label="2019 to Present">
                                <p>2019 — Presente</p>
                                <p className="mt-2">8º Semestre</p>
                            </header>
                            <div className="z-10 sm:col-span-6">
                                <h3 className="font-medium leading-snug text-slate-200">
                                    <div>
                                        <a className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-sky-300 focus-visible:text-sky-300 group/link text-base" href="https://www.ifb.edu.br/taguatinga" target="_blank" rel="noreferrer noopener" aria-label="Instituto Federal de Brasília, Campus Taguatinga (abre em uma nova aba)">
                                            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block">
                                            </span>
                                            <p>
                                                Bacharel em Ciências da Computação · <span className="inline-flex">Instituto Federal de Brasília — IFB
                                                    <Image
                                                        className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                                                        src="/go-to.svg"
                                                        alt="Redirect to page"
                                                        width={16}
                                                        height={16}
                                                        priority
                                                    />
                                                </span>
                                            </p></a>
                                    </div>
                                </h3>
                                <a className="relative mt-2 inline-flex items-center text-sm font-medium text-slate-300 hover:text-sky-300 focus-visible:text-sky-300" href="/tcc/TCC_MARCOS_B_CAMPOS.pdf" target="_blank" rel="noreferrer noopener" aria-label="TCC (abre em uma nova aba)">
                                    <Image
                                        className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                                        src="/link.svg"
                                        alt="Redirect to page"
                                        width={16}
                                        height={16}
                                        priority
                                    />
                                    <span><span className="font-bold ml-2">TCC:</span> Extração de características em snoRNAs usando modelos matemáticos.</span>
                                </a>

                                <p className="mt-2 text-sm leading-normal">
                                    Os algoritmos de extração de características que empregam abordagens matemáticas, em contraposição aos tradicionais algoritmos genéticos de extração, têm provado ser altamente eficazes na classificação dos snoRNAs. Eles alcançaram uma taxa de precisão superior a 90% na avaliação da predição, o que evidencia sua utilidade na identificação desses pequenos RNAs em sequências de vertebrados e invertebrados.</p>
                                <ul className="mt-2 flex flex-wrap" aria-label="Tecnologias usadas">
                                    <li className="mr-1.5 mt-2">
                                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">Python
                                        </div>
                                    </li>
                                    <li className="mr-1.5 mt-2">
                                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">Shell
                                        </div>
                                    </li>
                                    <li className="mr-1.5 mt-2">
                                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">Numpy
                                        </div>
                                    </li>
                                    <li className="mr-1.5 mt-2">
                                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">MatPlotLib
                                        </div>
                                    </li>
                                    <li className="mr-1.5 mt-2">
                                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">Pandas
                                        </div>
                                    </li>
                                    <li className="mr-1.5 mt-2">
                                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">SciPy
                                        </div>
                                    </li>
                                    <li className="mr-1.5 mt-2">
                                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">Scikit-Learn
                                        </div>
                                    </li>
                                    <li className="mr-1.5 mt-2">
                                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">BioPython
                                        </div>
                                    </li>
                                    <li className="mr-1.5 mt-2">
                                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">IGraph
                                        </div>
                                    </li>
                                </ul></div>
                        </div>
                    </li>
                </ol>
            </div>
        </section >
    )
}
function Experience() {
    return (
        <section id="experience" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Work experience">
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Experiência Profissional</h2>
            </div>
            <div>
                <ol className="group/list">
                    <li className="mb-12">
                        <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg">
                            </div>
                            <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2" aria-label="2024 to Present">2024 — Present</header>
                            <div className="z-10 sm:col-span-6">
                                <h3 className="font-medium leading-snug text-slate-200">
                                    <div>
                                        <a className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-sky-300 focus-visible:text-sky-300 group/link text-base" href="https://www.klaviyo.com" target="_blank" rel="noreferrer noopener" aria-label="Senior Frontend Engineer, Accessibility at Klaviyo (opens in a new tab)">
                                            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block">
                                            </span>
                                            <span>
                                                Desenvolvedor Frontend · <span className="inline-flex">Caronas Burguer
                                                    <Image
                                                        className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                                                        src="/go-to.svg"
                                                        alt="Redirect to page"
                                                        width={16}
                                                        height={16}
                                                        priority
                                                    />
                                                </span>
                                            </span></a>
                                    </div>
                                    <div>
                                        <div className="text-slate-500 text-sm" aria-hidden="true">Trabalhador autônomo</div>
                                    </div>
                                </h3>
                                <p className="mt-2 text-sm leading-normal">Contruir e manter componentes em layout responsivo usados para construir o frontend do site Caronas Burguer, em todas as páginas. Trabalhei como desenvolvedor independente de acordo com as sugestões propostas pelo dono da hamburgueria, para implementar e providenciar a melhor experiência ao usuário.</p>
                                <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                                    <li className="mr-1.5 mt-2">
                                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">PHP
                                        </div>
                                    </li>
                                    <li className="mr-1.5 mt-2">
                                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">HTML
                                            &amp; CSS</div>
                                    </li>
                                    <li className="mr-1.5 mt-2">
                                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">BootStrap
                                        </div>
                                    </li>
                                </ul></div>
                        </div>
                    </li>
                    <li className="mb-12">
                        <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg">
                            </div>
                            <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2" aria-label="2018 to 2024">2022 — 2024</header>
                            <div className="z-10 sm:col-span-6">
                                <h3 className="font-medium leading-snug text-slate-200">
                                    <div>
                                        <a className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-sky-300 focus-visible:text-sky-300  group/link text-base" href="https://portal.tcu.gov.br/inicio" target="_blank" rel="noreferrer noopener" aria-label="Lead Engineer at Upstatement (opens in a new tab)">
                                            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span><span>Desenvolvedor Backend · <span className="inline-flex">Tribunal de Contas da União — TCU
                                                <Image
                                                    className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                                                    src="/go-to.svg"
                                                    alt="Redirect to page"
                                                    width={16}
                                                    height={16}
                                                    priority
                                                />
                                            </span>
                                            </span></a>
                                    </div>
                                    <div>
                                        <div className="text-slate-500 text-sm" aria-hidden="true">Estagiário</div>
                                    </div>
                                </h3>
                                <p className="mt-2 text-sm leading-normal">Construir, customizar, implementar e corrigir as funcionalidades para os clientes do sistema Radex. Integrar os microsserviços da rede interna do TCU em colaboração com os auditores de controle interno e externo, conforme o Regimento Interno do Tribunal de Contas da União. </p>
                                <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                                    <li className="mr-1.5 mt-2">
                                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">JavaScript</div>
                                    </li>
                                    <li className="mr-1.5 mt-2">
                                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">HTML &amp; CSS
                                        </div>
                                    </li>
                                    <li className="mr-1.5 mt-2">
                                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">PL/SQL</div>
                                    </li>
                                    <li className="mr-1.5 mt-2">
                                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">APEX</div></li>

                                </ul>
                            </div>
                        </div>
                    </li>
                    <li className="mb-12">
                        <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                            <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2" aria-label="July to December 2017">2020 — 2022</header>
                            <div className="z-10 sm:col-span-6">
                                <h3 className="font-medium leading-snug text-slate-200">
                                    <div>
                                        <a className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-sky-300 focus-visible:text-sky-300  group/link text-base" href="https://www.gov.br/ebserh/pt-br" target="_blank" rel="noreferrer noopener" aria-label="Cientista de Dados na EBSERH (abre em uma nova aba)">
                                            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                                            <span>Cientista de Dados · <span className="inline-block">Empresa Brasileira de Serviços Hospitalares — EBSERH
                                                <Image
                                                    className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                                                    src="/go-to.svg"
                                                    alt="Redirect to page"
                                                    width={16}
                                                    height={16}
                                                    priority
                                                />
                                            </span>
                                            </span></a>
                                    </div>
                                    <div>
                                        <div className="text-slate-500 text-sm" aria-hidden="true">Estagiário</div>
                                    </div>
                                </h3>
                                <p className="mt-2 text-sm leading-normal">
                                    Atuava no setor de Análise e Dimensionamento de Pessoal, responsável por administrar a base de dados de todos os hospitais universitários federais regidos pela Empresa Brasileira de Serviços Hospitalares. Desenvolvi um algoritmo de aprendizado de máquina supervisionado capaz de extrair o texto de imagens usando a biblioteca de código aberto chamada Tesseract.</p>
                                <ul className="mt-2 flex flex-wrap" aria-label="Related links">
                                    <li className="mr-4">
                                        <a className="relative mt-2 inline-flex items-center text-sm font-medium text-slate-300 hover:text-sky-300 focus-visible:text-sky-300" href="https://www.gov.br/ebserh/pt-br/hospitais-universitarios" target="_blank" rel="noreferrer noopener" aria-label="HUF's regidos pela EBSERH (abre em uma nova aba)">
                                            <Image
                                                className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                                                src="/link.svg"
                                                alt="Redirect to page"
                                                width={16}
                                                height={16}
                                                priority
                                            />

                                            <span>HUF's</span>
                                        </a>
                                    </li>
                                    <li className="mr-4">
                                        <a className="relative mt-2 inline-flex items-center text-sm font-medium text-slate-300 hover:text-sky-300 focus-visible:text-sky-300" href="https://www.gov.br/saude/pt-br" target="_blank" rel="noreferrer noopener" aria-label="Ministério da Saúde (abre em uma nova aba)">
                                            <Image
                                                className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                                                src="/link.svg"
                                                alt="Redirect to page"
                                                width={16}
                                                height={16}
                                                priority
                                            />
                                            <span>Ministério da Saúde</span>
                                        </a>
                                    </li>
                                </ul>
                                <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                                    <li className="mr-1.5 mt-2">
                                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">DBeaver</div></li>
                                    <li className="mr-1.5 mt-2">
                                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">SQL</div></li>
                                    <li className="mr-1.5 mt-2">
                                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">M</div>
                                    </li>
                                    <li className="mr-1.5 mt-2">
                                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">Power BI</div>
                                    </li>
                                    <li className="mr-1.5 mt-2">
                                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">Web-scrapping</div>
                                    </li>
                                    <li className="mr-1.5 mt-2">
                                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">OCR - Tesseract</div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                </ol>
                <div className="mt-12">
                    <a className="inline-flex items-baseline leading-tight hover:text-sky-300 focus-visible:text-sky-300 font-semibold text-slate-200 group/link text-base" href="/cv/marcos-resume.pdf" target="_blank" rel="noreferrer noopener" aria-label="View Full Résumé (opens in a new tab)">
                        <span className="inline-flex">Ver CV
                            <span className="inline-flex"><Image
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
            </div >
        </section >
    )
}
function Projects() {
    return (
        <section id="projects" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Selected projects">
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Projetos pessoais</h2>
            </div>
            <div>
                <ul className="group/list">
                    <li className="mb-12">
                        <div className="group relative grid justify-items-center sm:justify-items-start gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                            <div className="z-10 sm:order-2 sm:col-span-6">
                                <h3>
                                    <a className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-sky-300 focus-visible:text-sky-300  group/link text-base" href="https://marcos-c1.github.io/covid-app-io/" target="_blank" rel="noreferrer noopener" aria-label="Build a Spotify Connected App (opens in a new tab)">
                                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span><span> Rastreador de incidências do COVID-19 <span className="inline-flex">
                                            <Image
                                                className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                                                src="/go-to.svg"
                                                alt="Redirect to page"
                                                width={16}
                                                height={16}
                                                priority />
                                        </span>
                                        </span>
                                    </a>
                                </h3>
                                <p className="mt-2 text-sm leading-normal">Um aplicativo web e mobile informativo sobre a incidência da doença COVID-19 nos estados brasileiros de forma transparência consumindo as APIs públicas do Ministério da Saúde. Os tópicos abordados incluem os sintomas graves e comuns da doença e os cuidados especiais que devem ser tomados caso o paciente apresente os sintomas. </p>
                                <ul className="mt-2 flex flex-wrap" aria-label="Technologies used:">
                                    <li className="mr-1.5 mt-2">
                                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">Flutter</div>
                                    </li>
                                    <li className="mr-1.5 mt-2">
                                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">Dart
                                        </div>
                                    </li>
                                    <li className="mr-1.5 mt-2">
                                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">C++
                                        </div>
                                    </li>
                                    <li className="mr-1.5 mt-2">
                                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">CMake
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <Image
                                className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
                                src="/covid-app.png"
                                alt="Covid Tracker on Brazilian States for information about COVID-19"
                                width={200}
                                height={48}
                                style={{ color: "transparent" }}
                                decoding="async"
                                priority />
                        </div>
                    </li>
                    <li className="mb-12">
                        <div className="group relative justify-items-center sm:justify-items-start grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                            <div className="z-10 sm:order-2 sm:col-span-6">
                                <h3>
                                    <a className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-sky-300 focus-visible:text-sky-300  group/link text-base" href="https://github.com/marcos-c1/crud-rh" target="_blank" rel="noreferrer noopener" aria-label="Spotify Profile (opens in a new tab)">
                                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block">
                                        </span>
                                        <span>Sistema de Recursos Humanos — <span className="inline-flex"> CRUD
                                            <Image
                                                className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                                                src="/go-to.svg"
                                                alt="Redirect to page"
                                                width={16}
                                                height={16}
                                                priority />
                                        </span>
                                        </span>
                                    </a>
                                </h3>
                                <p className="mt-2 text-sm leading-normal">Uma aplicação desktop básica que implementa as quatro funções básicas que os modelos devem ser capazes de realizar, que são <b>CREATE</b>, <b>READ</b>, <b>UPDATE</b> e <b>DELETE</b> (CRUD) para o cadastramento de clientes.</p>
                                <ul className="mt-2 flex flex-wrap" aria-label="Technologies used:">
                                    <li className="mr-1.5 mt-2">
                                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">Java</div>
                                    </li>
                                    <li className="mr-1.5 mt-2">
                                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">PostGres</div></li><li className="mr-1.5 mt-2">
                                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">Swing API
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <Image
                                className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
                                src="/crud-rh.png"
                                alt="CRUD desktop application of a human resource environment"
                                width={200}
                                height={48}
                                style={{ color: "transparent" }}
                                decoding="async"
                                priority />
                        </div>
                    </li>
                    {/* <li className="mb-12">
                        <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div><div className="z-10 sm:order-2 sm:col-span-6">
                                <h3>
                                    <a className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-sky-300 focus-visible:text-sky-300  group/link text-base" href="https://halcyon-theme.netlify.app/" target="_blank" rel="noreferrer noopener" aria-label="Halcyon Theme (opens in a new tab)">
                                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                                        <span>Halcyon
                                            <span className="inline-block">Theme
                                                <Image
                                                    className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                                                    src="/go-to.svg"
                                                    alt="Redirect to page"
                                                    width={16}
                                                    height={16}
                                                    priority />
                                            </span>
                                        </span>
                                    </a>
                                </h3>
                                <p className="mt-2 text-sm leading-normal">Minimal dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more.</p>
                                <a className="relative mt-2 inline-flex items-center text-sm font-medium text-slate-300 hover:text-sky-300 focus-visible:text-sky-300" href="https://marketplace.visualstudio.com/items?itemName=brittanychiang.halcyon-vscode" target="_blank" rel="noreferrer noopener" aria-label="Over 100,000 installs on Visual Studio Code Marketplace (opens in a new tab)">
                                    <Image
                                        className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                                        src="/download.svg"
                                        alt="Redirect to page"
                                        width={16}
                                        height={16}
                                        priority />
                                    <span>100k+ Installs</span>
                                </a>
                            </div>
                            <img alt="Halcyon Theme homepage hero with screenshot of VS Code editor" loading="lazy" width="200" height="48" decoding="async" data-nimg="1" className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1" style={{ color: "transparent" }} src="/_next/image?url=%2Fimages%2Fprojects%2Fhalcyon.png&amp;w=640&amp;q=75" />
                        </div>
                    </li> */}
                    <li className="mb-12">
                        <div className="group relative justify-items-center sm:justify-items-start grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div><div className="z-10 sm:order-2 sm:col-span-6">
                                <h3>
                                    <a className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-sky-300 focus-visible:text-sky-300  group/link text-base" href="https://marcosc1.vercel.app/" target="_blank" rel="noreferrer noopener" aria-label="brittanychiang.com (v4) (opens in a new tab)">
                                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                                        <span>marcosc1.vercel.app <span className="inline-flex">(v1)
                                            <Image
                                                className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                                                src="/go-to.svg"
                                                alt="Redirect to page"
                                                width={16}
                                                height={16}
                                                priority />
                                        </span>
                                        </span>
                                    </a>
                                </h3>
                                <p className="mt-2 text-sm leading-normal">Um antigo site de portfólio construído com Vercel para expor meus projetos pessoais e minhas experiências profissionais.</p>
                                <a className="relative mt-2 inline-flex items-center text-sm font-medium text-slate-300 hover:text-sky-300 focus-visible:text-sky-300" href="https://github.com/bchiang7/v4" target="_blank" rel="noreferrer noopener" aria-label="7317 stars on GitHub (opens in a new tab)">
                                </a>
                                <ul className="mt-2 flex flex-wrap" aria-label="Technologies used:">
                                    <li className="mr-1.5 mt-2">
                                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">Vue.js</div>
                                    </li>
                                    <li className="mr-1.5 mt-2">
                                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">Typescript</div>
                                    </li>
                                    <li className="mr-1.5 mt-2">
                                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">Vercel</div>
                                    </li>
                                </ul>
                            </div>
                            <Image
                                className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
                                src="/portfolio.png"
                                alt="My old portfolio made entire with Vue.js"
                                width={200}
                                height={48}
                                style={{ color: "transparent" }}
                                decoding="async"
                                priority />
                        </div>
                    </li>
                </ul>
                <div className="mt-12">
                    <a className="inline-flex items-center font-semibold leading-tight text-slate-200 group" aria-label="View Full Project Archive" /* href="/archive" */ href="https://github.com/marcos-c1" target="_blank">
                        <span>
                            <span className="border-b border-transparent pb-px transition group-hover:border-sky-300 motion-reduce:transition-none">Ver todos os projetos</span>
                            <span className="inline-flex whitespace-nowrap">
                                <Image
                                    className="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                                    src="/redirect.svg"
                                    alt="Link to the collection of projects page"
                                    width={16}
                                    height={16}
                                    priority />
                            </span>
                        </span>
                    </a>
                </div>
            </div>
        </section>
    )
}

function Certs() {
    return (
        <section id="certs" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Blog posts">
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Certificados</h2>
            </div>
            <div>
                <ul className="group/list">
                    <li className="mb-12">
                        <div className="group relative grid grid-cols-8 gap-4 transition-all sm:items-center sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                            <Image
                                className="z-10 col-span-2 rounded text-transparent border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:col-span-2"
                                src="/cert-cpa.png"
                                alt="Cisco Cert in C++"
                                width={200}
                                height={48}
                                decoding="async"
                                priority />

                            <div className="z-10 col-span-6">
                                <p className="-mt-1 text-sm font-semibold leading-6">2024</p>
                                <h3 className="-mt-1">
                                    <a className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-sky-300 focus-visible:text-sky-300  group/link text-base" href="https://upstatement.com/blog/integrating-algolia-search-with-wordpress-multisite/" target="_blank" rel="noreferrer noopener" aria-label="Integrating Algolia Search with WordPress Multisite (opens in a new tab)">
                                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                                        <span>CPA: Programming Essentials in C++ · <span className="inline-flex">Cisco
                                            <Image
                                                className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                                                src="/go-to.svg"
                                                alt="Redirect to page"
                                                width={16}
                                                height={16}
                                                priority />
                                        </span>
                                        </span>
                                    </a>
                                </h3>
                            </div>
                        </div>
                    </li>
                    <li className="mb-12">
                        <div className="group relative grid grid-cols-8 gap-4 transition-all sm:items-center sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>

                            <Image
                                className="z-10 col-span-2 rounded text-transparent border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:col-span-2"
                                src="/cert-pe.png"
                                alt="Cisco Cert in C++"
                                width={200}
                                height={48}
                                decoding="async"
                                priority />

                            <div className="z-10 col-span-6">
                                <p className="-mt-1 text-sm font-semibold leading-6">2019</p>
                                <h3 className="-mt-1">
                                    <a className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-sky-300 focus-visible:text-sky-300  group/link text-base" href="https://upstatement.com/blog/building-a-headless-mobile-app-cms-from-scratch/" target="_blank" rel="noreferrer noopener" aria-label="Building a Headless Mobile App CMS From Scratch (opens in a new tab)">
                                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                                        <span>Python Essentials 1 · <span className="inline-flex">Cisco
                                            <Image
                                                className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                                                src="/go-to.svg"
                                                alt="Redirect to page"
                                                width={16}
                                                height={16}
                                                priority />
                                        </span>
                                        </span>
                                    </a>
                                </h3>
                            </div>
                        </div>
                    </li>
                    <li className="mb-12">
                        <div className="group relative grid grid-cols-8 gap-4 transition-all sm:items-center sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>

                            <Image
                                className="z-10 col-span-2 rounded text-transparent border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:col-span-2"
                                src="/cert-web-moderno.png"
                                alt="Curso Web Moderno Completo com JavaScript 2022 + Projetos"
                                width={200}
                                height={48}
                                decoding="async"
                                priority />

                            <div className="z-10 col-span-6">
                                <p className="-mt-1 text-sm font-semibold leading-6">2019</p>
                                <h3 className="-mt-1">
                                    <a className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-sky-300 focus-visible:text-sky-300  group/link text-base" href="https://upstatement.com/blog/building-a-headless-mobile-app-cms-from-scratch/" target="_blank" rel="noreferrer noopener" aria-label="Building a Headless Mobile App CMS From Scratch (opens in a new tab)">
                                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                                        <span>Curso Web Moderno Completo com JavaScript · <span className="inline-flex">Udemy
                                            <Image
                                                className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                                                src="/go-to.svg"
                                                alt="Redirect to page"
                                                width={16}
                                                height={16}
                                                priority />
                                        </span>
                                        </span>
                                    </a>
                                </h3>
                            </div>
                        </div>
                    </li>
                </ul>
                <div className="mt-12">
                    <a className="inline-flex items-center font-semibold leading-tight text-slate-200 group" aria-label="View Full Project Archive" href="/certifications">
                        <span>
                            <span className="border-b border-transparent pb-px transition group-hover:border-sky-300 motion-reduce:transition-none">Ver todos os certificados</span>
                            <span className="inline-flex whitespace-nowrap">
                                <Image
                                    className="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                                    src="/redirect.svg"
                                    alt="Link to the collection of projects page"
                                    width={16}
                                    height={16}
                                    priority />
                            </span>
                        </span>
                    </a>
                </div>
            </div>
        </section>
    )

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
    )

}
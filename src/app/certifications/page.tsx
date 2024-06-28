import Image from "next/image";
import { Card } from "@/components/card";
import { certs } from "@/app/constants";
import { Manrope } from "next/font/google";

const manRope = Manrope({
    subsets: ["latin"],
    display: "swap",
});


export default function Page() {
    return (
        <div className={`${manRope.className} bg-slate-870 mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0 transition-all `}>
            <div className="lg:py-24">
                <a className="group mb-2 inline-flex items-center font-semibold leading-tight text-sky-300" href="/">
                    <Image
                        className="mr-1 h-4 w-4 rotate-180 transition-transform group-hover:-translate-x-2 dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                        src="/go-back.svg"
                        alt="Link to the home page"
                        width={16}
                        height={16}
                        priority />
                    Marcos Campos</a>
                <h1 className="text-3xl font-bold tracking-tight text-slate-200 sm:text-4xl mb-15">Todos os certificados</h1>
                <ul className="group/list">
                    <li className="mb-12">
                        {certs.map((c, i) => (<Card cert={c} />)
                        )}
                    </li>

                </ul>
            </div>

        </div >
    )
}
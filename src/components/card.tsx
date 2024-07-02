import Image from "next/image";
import { Certificate } from "@/app/interfaces/cert";

export function Card({ cert: cert }: { cert: Certificate }) {
  return (
    <div className="group relative my-10 grid grid-cols-8 gap-4 transition-all sm:items-center sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
      <Image
        className="z-10 col-span-2 rounded text-transparent border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:col-span-2"
        src={`${cert.imagePath}`}
        alt={`${cert.imageAlt}`}
        width={200}
        height={48}
        decoding="async"
        priority
      />

      <div className="z-10 col-span-6">
        <p className="-mt-1 text-md font-semibold leading-6">{`${cert.year}`}</p>
        <h3 className="-mt-1">
          <a
            className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-sky-300 focus-visible:text-sky-300  group/link text-base"
            href={`${cert.url}`}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Integrating Algolia Search with WordPress Multisite (opens in a new tab)"
          >
            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
            <span className="text-lg">
              {cert.name} ·{" "}
              <span className="inline-flex">
                {cert.provider}
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
  );
}


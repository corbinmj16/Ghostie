import { DashContext } from "@/Contexts";
import { useContext } from "react";

export default function AppHeader() {
    const { show } = useContext(DashContext);

    return (
        <header className="bg-white lg:fixed lg:inset-y-0 lg:left-0 lg:flex lg:w-112 lg:items-start lg:overflow-y-auto xl:w-120">
            <div className="hidden lg:sticky lg:top-0 lg:flex lg:w-16 lg:flex-none lg:items-center lg:whitespace-nowrap lg:py-12 lg:text-sm lg:leading-7 lg:[writing-mode:vertical-rl]">
                <span className="font-mono text-slate-500">Hosted by</span>
                <span className="mt-6 flex gap-6 font-bold text-slate-900">
                    {show.publisher}
                </span>
            </div>
            <div className="relative z-10 mx-auto px-4 pb-4 pt-10 sm:px-6 md:max-w-2xl md:px-4 lg:min-h-full lg:flex-auto lg:border-x lg:border-slate-200 lg:px-8 lg:py-12 xl:px-12">
                <a
                    className="relative mx-auto block w-48 overflow-hidden rounded-lg bg-slate-200 shadow-xl shadow-slate-200 sm:w-64 sm:rounded-xl lg:w-auto lg:rounded-2xl"
                    aria-label="Homepage"
                    href="/"
                >
                    <img
                        fetchpriority="high"
                        width={960}
                        height={960}
                        decoding="async"
                        data-nimg={1}
                        className="w-full"
                        style={{ color: "transparent" }}
                        src={show.images[1].url}
                    />
                    <div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-black/10 sm:rounded-xl lg:rounded-2xl" />
                </a>
                <div className="mt-10 text-center lg:mt-12 lg:text-left">
                    <p className="text-xl font-bold text-slate-900">
                        <a href="/">{show.name}</a>
                    </p>
                    <p className="mt-3 text-lg font-medium leading-8 text-slate-700">
                        {show.description}
                    </p>
                </div>
                {/* <section className="mt-12 hidden lg:block">
                    <h2 className="flex items-center font-mono text-sm font-medium leading-7 text-slate-900">
                        <svg
                            aria-hidden="true"
                            viewBox="0 0 10 10"
                            className="h-2.5 w-2.5"
                        >
                            <path
                                d="M0 5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V5Z"
                                className="fill-violet-300"
                            />
                            <path
                                d="M6 1a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V1Z"
                                className="fill-pink-300"
                            />
                        </svg>
                        <span className="ml-2.5">About</span>
                    </h2>
                    <p className="mt-2 text-base leading-7 text-slate-700">
                        In this show, Eric and Wes dig deep to get to the facts
                        with guests who have been labeled villains by a society
                        quick to judge, without actually getting the full story.
                        Tune in every Thursday to get to the truth with another
                        misunderstood outcast as they share the missing context
                        in their tragic tale.
                    </p>
                </section> */}
                <section className="mt-10 lg:mt-12">
                    <h2 className="sr-only flex items-center font-mono text-sm font-medium leading-7 text-slate-900 lg:not-sr-only">
                        <svg
                            aria-hidden="true"
                            viewBox="0 0 10 10"
                            className="h-2.5 w-2.5"
                        >
                            <path
                                d="M0 5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V5Z"
                                className="fill-indigo-300"
                            />
                            <path
                                d="M6 1a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V1Z"
                                className="fill-blue-300"
                            />
                        </svg>
                        <span className="ml-2.5">Listen</span>
                    </h2>
                    <div className="h-px bg-gradient-to-r from-slate-200/0 via-slate-200 to-slate-200/0 lg:hidden" />
                    <ul
                        role="list"
                        className="mt-4 flex justify-center gap-10 text-base font-medium leading-7 text-slate-700 sm:gap-8 lg:flex-col lg:gap-4"
                    >
                        <li className="flex">
                            <a
                                className="group flex items-center"
                                aria-label="Spotify"
                                href={show.external_urls.spotify}
                                target="_blank"
                            >
                                <svg
                                    aria-hidden="true"
                                    viewBox="0 0 32 32"
                                    className="h-8 w-8 fill-slate-400 group-hover:fill-slate-600"
                                >
                                    <path d="M15.8 3a12.8 12.8 0 1 0 0 25.6 12.8 12.8 0 0 0 0-25.6Zm5.87 18.461a.8.8 0 0 1-1.097.266c-3.006-1.837-6.787-2.252-11.244-1.234a.796.796 0 1 1-.355-1.555c4.875-1.115 9.058-.635 12.432 1.427a.8.8 0 0 1 .265 1.096Zm1.565-3.485a.999.999 0 0 1-1.371.33c-3.44-2.116-8.685-2.728-12.755-1.493a1 1 0 0 1-.58-1.91c4.65-1.41 10.428-.726 14.378 1.7a1 1 0 0 1 .33 1.375l-.002-.002Zm.137-3.629c-4.127-2.45-10.933-2.675-14.871-1.478a1.196 1.196 0 1 1-.695-2.291c4.52-1.374 12.037-1.107 16.785 1.711a1.197 1.197 0 1 1-1.221 2.06" />
                                </svg>
                                <span className="hidden sm:ml-3 sm:block">
                                    Spotify
                                </span>
                            </a>
                        </li>
                    </ul>
                </section>
            </div>
        </header>
    );
}

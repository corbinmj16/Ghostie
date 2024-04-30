export default function Episode({ episode }) {
    return (
        <article aria-labelledby="episode-5-title" className="mb-10 sm:mb-12">
            <div className="lg:px-8">
                <div className="lg:max-w-4xl">
                    <div className="mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:px-0">
                        <div className="flex flex-col items-start">
                            <h2
                                id="episode-5-title"
                                className="mt-2 text-lg font-bold text-slate-900"
                            >
                                <a href="/5">{episode.name}</a>
                            </h2>
                            <time
                                dateTime="2022-02-24T00:00:00.000Z"
                                className="order-first font-mono text-sm leading-7 text-slate-500"
                            >
                                {episode.release_date}
                            </time>
                            {/* <p
                                className="mt-1 text-base leading-7 text-slate-700"
                                dangerouslySetInnerHTML={{
                                    __html: episode.html_description,
                                }}
                            ></p> */}
                            <div className="mt-4 flex items-center gap-4">
                                <audio controls>
                                    <source
                                        src={episode.audio_preview_url}
                                        type="audio/mp3"
                                    />
                                    Your browser does not support the audio tag.
                                </audio>
                                <a
                                    href={episode.external_urls.spotify}
                                    aria-label={`Play ` + episode.name}
                                    className="flex items-center gap-x-3 text-sm font-bold leading-6 text-pink-500 hover:text-pink-700 active:text-pink-900"
                                >
                                    <svg
                                        aria-hidden="true"
                                        viewBox="0 0 10 10"
                                        className="h-2.5 w-2.5 fill-current"
                                    >
                                        <path d="M8.25 4.567a.5.5 0 0 1 0 .866l-7.5 4.33A.5.5 0 0 1 0 9.33V.67A.5.5 0 0 1 .75.237l7.5 4.33Z" />
                                    </svg>
                                    <span aria-hidden="true">Listen</span>
                                </a>
                                <span
                                    aria-hidden="true"
                                    className="text-sm font-bold text-slate-400"
                                >
                                    /
                                </span>
                                <a
                                    className="flex items-center text-sm font-bold leading-6 text-pink-500 hover:text-pink-700 active:text-pink-900"
                                    aria-label="Show notes for episode 5: Bill Lumbergh"
                                    href="/5"
                                >
                                    Show notes
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
}

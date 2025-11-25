import React from 'react';

function Group() {
    return (
        <div className="relative w-full max-w-[1440px] mx-auto min-h-screen md:h-[2000px] flex flex-col md:block px-6 py-12 md:p-0 gap-12 md:gap-0">

            {/* Title Section */}
            <div className="md:absolute flex flex-col font-serif font-bold justify-center leading-tight md:leading-[0] md:left-[calc(50%-158px)] text-[#5d4037] text-5xl md:text-[77px] text-center md:text-nowrap md:top-[95px] md:translate-y-[-50%] z-10">
                <p className="whitespace-normal md:whitespace-pre">Behind Rangakshi</p>
            </div>

            <div className="md:absolute flex flex-col font-serif font-bold justify-center leading-normal md:leading-[0] md:left-[calc(50%-51px)] text-[#5d4037] text-lg md:text-[20px] text-center md:text-nowrap md:top-[175px] md:translate-y-[-50%] z-10">
                <p className="whitespace-normal md:whitespace-pre">The story, meaning, and soul behind my brand.</p>
            </div>

            {/* Image - Mobile: Shown early, Desktop: Positioned absolutely */}
            <div className="md:absolute md:h-[727px] md:left-[63px] md:top-[-196px] md:w-[343px] w-full h-[400px] relative order-last md:order-none mt-8 md:mt-0">
                <img alt="" className="absolute inset-0 w-full h-full object-cover md:object-50%-50% opacity-[0.33] pointer-events-none" src="/assets/99924e5020c982471ac13e439d9983e16da68849.png" />
            </div>

            {/* Why the Name Section */}
            <div className="md:absolute flex md:h-[330px] items-center justify-center md:left-[calc(50%-650px)] md:top-[1112px] md:translate-x-[100%] md:translate-y-[-50%] md:w-[36px] w-full py-4 md:py-0">
                <div className="flex-none md:rotate-[270deg]">
                    <div className="flex flex-col font-serif font-bold justify-center leading-normal md:leading-[0] relative text-[#5d4037] text-3xl md:text-[48px] text-center md:text-nowrap">
                        <p className="whitespace-normal md:whitespace-pre">Why the Name:</p>
                    </div>
                </div>
            </div>

            {/* What Rangakshi Is Section */}
            <div className="md:absolute flex md:h-[426px] items-center justify-center md:left-[calc(50%-600px)] md:top-[1548px] md:translate-x-[-50%] md:translate-y-[-50%] md:w-[36px] w-full py-4 md:py-0">
                <div className="flex-none md:rotate-[270deg]">
                    <div className="flex flex-col font-serif font-bold justify-center leading-normal md:leading-[0] relative text-[#5d4037] text-3xl md:text-[48px] text-center md:text-nowrap">
                        <p className="whitespace-normal md:whitespace-pre">What Rangakshi Is:</p>
                    </div>
                </div>
            </div>

            {/* Quote */}
            <div className="md:absolute flex flex-col font-serif italic justify-center leading-normal md:leading-[0] md:left-[63px] not-italic text-[#5d4037] text-2xl md:text-[40px] text-center md:text-left md:text-nowrap md:top-[559px] md:translate-y-[-50%]">
                <p className="whitespace-normal md:whitespace-pre">A name that feels like art, intuition, and identity.</p>
            </div>

            {/* Content Block 1 */}
            <div className="md:absolute flex flex-col font-sans font-medium md:h-[284px] justify-center leading-relaxed md:leading-[28px] md:left-[calc(50%+160.5px)] not-italic text-base md:text-[22px] text-[rgba(93,64,55,0.8)] text-center md:top-[351px] md:translate-x-[-50%] md:translate-y-[-50%] md:w-[983px] w-full space-y-4 md:space-y-0">
                <p className="mb-0">
                    <span className="font-sans font-semibold not-italic">Rangakshi</span>
                    <span>{` is more than a name — it’s a feeling, a journey, and an identity I created for myself.`}</span>
                </p>
                <p className="mb-0 hidden md:block">&nbsp;</p>
                <p className="mb-0">The word is born from two roots:</p>
                <p className="mb-0">
                    “<span className="font-sans font-semibold not-italic">Rang</span>” meaning color, art, creation,
                </p>
                <p className="mb-0">
                    and “<span className="font-sans font-semibold not-italic">Akshi</span>” meaning the eye, the one who sees.
                </p>
                <p className="mb-0 hidden md:block">&nbsp;</p>
                <p className="mb-0">
                    <span>{`Together, `}</span>
                    <span className="font-sans font-semibold not-italic">Rangakshi</span>
                    <span>{` becomes “the eye that sees through colors” — a soul who experiences the world through creativity, beauty, design, and emotion.`}</span>
                </p>
                <p>It reflects the way I look at life: visually, intuitively, artistically.</p>
            </div>

            {/* Content Block 2 */}
            <div className="md:absolute flex flex-col font-sans font-medium md:h-[351px] justify-center leading-relaxed md:leading-[28px] md:left-[247px] not-italic text-base md:text-[22px] text-[rgba(93,64,55,0.8)] text-center md:text-left md:top-[1108.5px] md:translate-y-[-50%] md:w-[922px] w-full space-y-4 md:space-y-0">
                <p className="mb-0">
                    I wanted a name that felt<span className="font-sans font-semibold not-italic">{` authentic, artistic, `}</span>
                    <span>{`and `}</span>
                    <span className="font-sans font-semibold not-italic">{`deeply `}</span>personal — something that captured both my personality and my work.
                </p>
                <p className="mb-0">
                    <span className="hidden md:inline">
                        <br aria-hidden="true" />{" "}
                    </span>
                    <span className="font-sans font-semibold not-italic">Rangakshi</span>
                    <span>{` is that perfect blend of:`}</span>
                </p>
                <p className="mb-0 hidden md:block">&nbsp;</p>
                <p className="mb-0 flex flex-col md:block gap-2">
                    <span>{`✓ `}</span>
                    <span className="font-sans font-semibold not-italic">Art + Design</span>
                    <span className="hidden md:inline">
                        <br aria-hidden="true" />
                        {` ✓ `}
                    </span>
                    <span className="font-sans font-semibold not-italic">Color + Emotion</span>
                    <span className="hidden md:inline">
                        <br aria-hidden="true" />
                        {` ✓ `}
                    </span>
                    <span className="font-sans font-semibold not-italic">Intuition + Aesthetics</span>
                </p>
                <p className="mb-0 hidden md:block">&nbsp;</p>
                <p>It expresses my nature — someone who sees stories in colors, finds meaning in visuals, and creates with heart.</p>
            </div>

            {/* Content Block 3 */}
            <div className="md:absolute flex flex-col font-sans font-semibold md:h-[379px] justify-center leading-relaxed md:leading-[28px] md:left-[247px] not-italic text-base md:text-[22px] text-[rgba(93,64,55,0.8)] text-center md:text-left md:top-[1563.5px] md:translate-y-[-50%] md:w-[989px] w-full space-y-4 md:space-y-0">
                <p className="mb-0">Rangakshi is my creative universe.</p>
                <p className="mb-0">
                    <br aria-hidden="true" className="hidden md:block" />
                    {` It is:`}
                </p>
                <p className="mb-0 hidden md:block">&nbsp;</p>
                <p className="mb-0 flex flex-col gap-2">
                    <span>✨ My design identity – where UI/UX, branding, and visual storytelling merge.</span>
                    <span>✨ My artistic expression – from illustrations to photography, moodboards, and digital art.</span>
                    <span>✨ My lifestyle lens – feminine, intentional, soulful, and aesthetic.</span>
                    <span>✨ My personal brand – a space where my creativity, voice, and energy come together.</span>
                </p>
                <p className="mb-0 hidden md:block">&nbsp;</p>
                <p>
                    It is where design meets soul,
                    <br aria-hidden="true" className="hidden md:block" />
                    art meets intention,
                    <br aria-hidden="true" className="hidden md:block" />
                    {` and creativity becomes identity.`}
                </p>
            </div>

            {/* Content Block 4 */}
            <div className="md:absolute flex flex-col font-sans font-semibold md:h-[259px] justify-center leading-tight md:leading-[0] md:left-[716.5px] not-italic text-base md:text-[0px] text-[rgba(93,64,55,0.7)] text-center md:top-[755.5px] md:translate-x-[-50%] md:translate-y-[-50%] md:w-[1087px] w-full space-y-6 md:space-y-0">
                <p className="leading-normal md:leading-[28px] mb-0 text-[#5d4037] text-3xl md:text-[44px]">
                    <span>{`When you step into `}</span>
                    <span className="font-sans font-bold not-italic">Rangakshi</span>, I want it to feel like:
                </p>
                <p className="leading-[28px] mb-0 text-[22px] hidden md:block">&nbsp;</p>
                <div className="flex flex-col gap-4 md:block">
                    <p className="font-sans font-bold leading-normal md:leading-[28px] mb-0 text-lg md:text-[22px] text-[rgba(93,64,55,0.8)] whitespace-normal md:whitespace-pre-wrap">{`🌿   A soft, warm, creative space.`}</p>
                    <p className="font-sans font-bold leading-normal md:leading-[28px] mb-0 text-lg md:text-[22px] text-[rgba(93,64,55,0.8)] whitespace-normal md:whitespace-pre-wrap">
                        <br aria-hidden="true" className="hidden md:block" />
                        {`🌙  A place of inspiration and authenticity.`}
                    </p>
                    <p className="font-sans font-bold leading-normal md:leading-[28px] mb-0 text-lg md:text-[22px] text-[rgba(93,64,55,0.8)] whitespace-normal md:whitespace-pre-wrap">
                        <br aria-hidden="true" className="hidden md:block" />
                        {`💫  A visual diary of honest art, feminine energy, and thoughtful design`}
                    </p>
                </div>
                <p className="leading-normal md:leading-[28px] text-lg md:text-[22px] whitespace-normal md:whitespace-pre-wrap">
                    <span className="font-sans font-bold not-italic text-[rgba(93,64,55,0.8)]">
                        .<br aria-hidden="true" className="hidden md:block" />
                        {`🪞  A reflection of who I am — and what I’m becomi`}
                    </span>
                    ng.
                </p>
            </div>
        </div>
    );
}

export const PixelPerfection: React.FC = () => {
    return (
        <div className="bg-white relative w-full overflow-x-hidden" data-name="Desktop - 29">
            <div className="relative w-full h-full md:scale-[0.8] md:origin-top-left xl:scale-100">
                <Group />
            </div>
        </div>
    );
}

import imgImage8 from "@/assets/04f1cf80f0a7f25fdb62c58dea7a21809fef463d.png";

export default function Component() {
  return (
    <div className="bg-black overflow-clip relative rounded-[60px] size-full" data-name="7">
      <div className="absolute left-[60px] top-[60px]" data-name="Nav">
        <div className="content-stretch flex items-start relative">
          <div className="content-stretch flex items-center justify-center px-[34px] py-[16px] relative rounded-[40px] shrink-0" data-name="Badge" style={{ backgroundImage: "linear-gradient(127.87deg, rgb(22, 23, 31) 0%, rgb(0, 0, 0) 100%)" }}>
            <div aria-hidden="true" className="absolute border-2 border-[#373946] border-solid inset-0 pointer-events-none rounded-[40px]" />
            <p className="font-['Poppins:Medium',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[18px] text-center text-white whitespace-nowrap">AI-Powered Shift</p>
          </div>
        </div>
      </div>
      <div className="absolute h-[686px] left-[calc(33.33%+21px)] rounded-[32px] top-[195px] w-[1220px]" data-name="1671ee04b3ef57e23f950a829b12f9fad4412fd7 1">
        <video autoPlay className="absolute max-w-none object-cover rounded-[32px] size-full" controlsList="nodownload" loop playsInline>
          <source src="/_videos/v1/1671ee04b3ef57e23f950a829b12f9fad4412fd7" />
        </video>
      </div>
      <div className="absolute content-stretch flex flex-col gap-[12px] items-start left-[100px] not-italic text-white top-[392px] w-[545px]">
        <p className="font-['Bebas_Neue:Regular',sans-serif] leading-[60px] min-w-full relative shrink-0 text-[60px] w-[min-content]">The Paradigm</p>
        <p className="font-['Work_Sans:Light',sans-serif] h-[139px] leading-[36px] relative shrink-0 text-[24px] w-[484px]">As AI reshapes design, prompts become a way to guide systems, set boundaries, and explore variations instantly, a new capability in the designer’s toolkit.</p>
      </div>
      <p className="absolute font-['Work_Sans:Light',sans-serif] h-[359px] leading-[0] left-[103px] not-italic text-[0px] text-white top-[-1000px] w-[1350px]">
        <span className="font-['Work_Sans:Bold',sans-serif] leading-[120px] text-[80px]">{`75% `}</span>
        <span className="leading-[120px] text-[80px]">of global knowledge workers are using genAI (usage nearly doubled in six months) - 2024</span>
      </p>
      <a className="absolute block font-['Work_Sans:Regular',sans-serif] font-normal h-[40px] leading-[0] left-[103px] text-[#5e5e5e] text-[20px] top-[980px] tracking-[-0.4px] w-[880px]" href="https://gemini.google/overview/image-generation/">
        <p className="cursor-pointer decoration-solid leading-[40px] underline">Image source: Gemini image generation</p>
      </a>
      <div className="absolute left-[calc(83.33%+63px)] top-[60px]">
        <div className="content-stretch flex flex-col gap-[7px] items-start relative">
          <div className="h-[24px] relative shrink-0 w-[96px]" data-name="image 8">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[432%] left-[-44.12%] max-w-none top-[-186%] w-[188.24%]" src={imgImage8} />
            </div>
          </div>
          <p className="font-['Work_Sans:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[#5e5e5e] text-[14px] w-[197px]">Content present is not on behalf of Google or Alphabet</p>
        </div>
      </div>
    </div>
  );
}
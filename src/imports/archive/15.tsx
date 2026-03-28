import imgImage8 from "@/assets/04f1cf80f0a7f25fdb62c58dea7a21809fef463d.png";

export default function Component() {
  return (
    <div className="bg-black overflow-clip relative rounded-[60px] size-full" data-name="15">
      <div className="absolute left-[60px] top-[60px]" data-name="Nav">
        <div className="content-stretch flex items-start relative">
          <div className="content-stretch flex items-center justify-center px-[34px] py-[16px] relative rounded-[40px] shrink-0" data-name="Badge" style={{ backgroundImage: "linear-gradient(127.87deg, rgb(22, 23, 31) 0%, rgb(0, 0, 0) 100%)" }}>
            <div aria-hidden="true" className="absolute border-2 border-[#373946] border-solid inset-0 pointer-events-none rounded-[40px]" />
            <p className="font-['Poppins:Medium',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[18px] text-center text-white whitespace-nowrap">Insight Curator</p>
          </div>
        </div>
      </div>
      <div className="-translate-y-1/2 absolute content-stretch flex flex-col gap-[12px] h-[495px] items-start left-[100px] not-italic text-white top-[calc(50%+36.5px)] w-[437px]">
        <p className="font-['Bebas_Neue:Regular',sans-serif] leading-[60px] relative shrink-0 text-[60px] w-[415px]">Synthesis</p>
        <div className="font-['Work_Sans:Light',sans-serif] h-[423px] leading-[0] relative shrink-0 text-[24px] w-[432px]">
          <p className="leading-[36px] mb-0">Synthesis has always been the most human part of research — making meaning out of complexity.</p>
          <p className="leading-[36px]">AI supports this by doing the heavy lifting: grouping insights, summarizing interviews, comparing user behaviors, and surfacing relationships that might take hours to find manually. Designers still provide the judgement, but the process becomes dramatically faster and richer.</p>
        </div>
      </div>
      <div className="-translate-y-1/2 absolute h-[728px] left-[calc(25%+106px)] rounded-[32px] top-1/2 w-[1294px]" data-name="Looppanel - Looppanel (1080p, h264, youtube) 1" />
      <div className="-translate-y-1/2 absolute h-[728px] left-[calc(25%+106px)] rounded-[32px] top-1/2 w-[1294px]" data-name="Looppanel - Looppanel (1080p, h264, youtube) 2">
        <video autoPlay className="absolute max-w-none object-cover rounded-[32px] size-full" controlsList="nodownload" loop playsInline>
          <source src="/_videos/v1/24e026a026b645b9aba27a53fb54afe93012e670" />
        </video>
      </div>
      <a className="absolute block font-['Work_Sans:Regular',sans-serif] font-normal h-[40px] leading-[0] left-[103px] text-[#5e5e5e] text-[20px] top-[980px] tracking-[-0.4px] w-[483px]" href="https://www.youtube.com/watch?v=s3v3RNL9oVA">
        <p className="cursor-pointer decoration-solid leading-[40px] underline">Youtube Video Source: Looppanel</p>
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
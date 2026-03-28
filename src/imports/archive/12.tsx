import imgImage8 from "@/assets/04f1cf80f0a7f25fdb62c58dea7a21809fef463d.png";

export default function Component() {
  return (
    <div className="bg-black overflow-clip relative rounded-[60px] size-full" data-name="12">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col gap-[16px] items-start leading-[0] left-1/2 text-center top-1/2 w-[1358px]">
        <div className="bg-clip-text flex flex-col font-['Bebas_Neue:Regular',sans-serif] h-[140px] justify-center not-italic relative shrink-0 text-[130px] text-[transparent] w-full" style={{ backgroundImage: "linear-gradient(98.4306deg, rgb(255, 63, 2) 0%, rgb(253, 193, 3) 45.315%)" }}>
          <p className="leading-[280px]">Insight Curator</p>
        </div>
        <div className="font-['Work_Sans:Regular',sans-serif] font-normal h-[92px] relative shrink-0 text-[32px] text-white w-full">
          <p className="leading-[50px] mb-0">Organizes raw data into meaningful patterns.</p>
          <p className="leading-[50px]">It filters the noise, highlights what matters, and brings hidden insights to the surface.</p>
        </div>
      </div>
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
export default function TagsContainer() {
  return (
    <div className="content-stretch flex gap-[8px] items-end relative size-full" data-name="tags-container">
      <div className="bg-[rgba(29,170,251,0.1)] relative rounded-[4px] shrink-0" data-name="chip-titleTag">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[8px] py-[6px] relative">
            <div className="bg-clip-text bg-gradient-to-r flex flex-col font-['Segoe_UI:Semibold',sans-serif] from-[#1daafb] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-[transparent] to-1/2 to-[#89d1fd] whitespace-nowrap">
              <p className="leading-[16px]">Inscrições abertas</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
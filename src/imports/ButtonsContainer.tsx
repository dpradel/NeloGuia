import svgPaths from "./svg-xqao10bigi";

function ButtonsContainerBackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex flex-row items-center justify-center min-w-[inherit] overflow-clip rounded-[inherit] size-full">
      <div className="content-stretch flex gap-[8px] h-full items-center justify-center min-w-[inherit] px-[8px] relative">{children}</div>
    </div>
  );
}

export default function ButtonsContainer() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative size-full" data-name="buttons-container">
      <div className="h-[32px] min-w-[144px] relative rounded-[4px] shrink-0" data-name="btn-primary" style={{ backgroundImage: "linear-gradient(261.906deg, rgb(39, 153, 250) 0%, rgb(4, 99, 200) 75%)" }}>
        <ButtonsContainerBackgroundImage>
          <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="main-container">
            <p className="font-['Segoe_UI:Bold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-right text-white whitespace-nowrap">INSCREVA-SE</p>
          </div>
        </ButtonsContainerBackgroundImage>
        <div aria-hidden="true" className="absolute border border-[#1f72ff] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
      <div className="bg-gradient-to-b from-[rgba(243,245,249,0.1)] h-[32px] min-w-[144px] relative rounded-[4px] shrink-0 to-[rgba(243,245,249,0.05)]" data-name="btn-secondary">
        <ButtonsContainerBackgroundImage>
          <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="main-container">
            <p className="font-['Segoe_UI:Semibold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">SABER MAIS</p>
            <div className="relative shrink-0 size-[16px]" data-name="ic-arrowRight-mini">
              <div className="absolute inset-[22.92%_20.82%_16.67%_18.75%]" data-name="Primary">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.66895 9.66406">
                  <path d={svgPaths.p440cf00} fill="var(--fill-0, white)" id="Primary" />
                </svg>
              </div>
            </div>
          </div>
        </ButtonsContainerBackgroundImage>
        <div aria-hidden="true" className="absolute border border-[rgba(243,245,249,0.03)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
    </div>
  );
}
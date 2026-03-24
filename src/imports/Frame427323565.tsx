import clsx from "clsx";
import svgPaths from "./svg-h2srfnjb1y";

function BtnIcon({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-[rgba(243,245,249,0)] relative rounded-[4px] shrink-0 size-[32px]">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center relative size-full">{children}</div>
      </div>
    </div>
  );
}
type NavBreadcrumbTextProps = {
  text: string;
};

function NavBreadcrumbText({ text }: NavBreadcrumbTextProps) {
  return (
    <div className="absolute left-0 opacity-0 top-[13.5px] w-[485.5px]">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center relative w-full">
          <div className="bg-[rgba(243,245,249,0)] relative rounded-[4px] shrink-0" data-name="nav-breadcrumb-item">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center pb-[3px] pt-px px-[2px] relative">
                <p className="font-['Tahoma:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-right text-white whitespace-nowrap">{text}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
type ContainerButtonsHintPopupTextProps = {
  text: string;
};

function ContainerButtonsHintPopupText({ text }: ContainerButtonsHintPopupTextProps) {
  return (
    <div className="-translate-x-1/2 absolute backdrop-blur-[12px] bg-[rgba(53,53,53,0.5)] left-[calc(50%+0.5px)] max-w-[176px] opacity-0 rounded-[2px] top-[28px] w-[90px]">
      <div aria-hidden="true" className="absolute border border-[rgba(243,245,249,0.07)] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <div className="flex flex-col items-center justify-center max-w-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center max-w-[inherit] px-[6px] py-[4px] relative w-full">
          <div className="flex flex-col font-['Segoe_UI:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[11px] text-[rgba(255,255,255,0.7)] w-full">
            <p className="leading-[15px]">{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
type NavTrialBannerProps = {
  additionalClassNames?: string;
};

function NavTrialBanner({ additionalClassNames = "" }: NavTrialBannerProps) {
  return (
    <div className={clsx("bg-[rgba(29,170,251,0.1)] relative shrink-0", additionalClassNames)}>
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center px-[12px] py-[3px] relative">
          <ImgLogoProfit className="relative shrink-0" plan="Ultra" />
          <div className="bg-[rgba(243,245,249,0)] h-[32px] relative rounded-[4px] shrink-0" data-name="btn-tertiary">
            <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex gap-[8px] h-full items-center justify-center px-[8px] relative">
                <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
                  <p className="font-['Segoe_UI:Semibold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#1daafb] text-[12px] text-center whitespace-nowrap">{"Resgate seu teste grátis"}</p>
                  <div className="relative shrink-0 size-[16px]" data-name="ic-arrowRight-mini">
                    <div className="absolute inset-[22.92%_20.82%_16.67%_18.75%]" data-name="Primary">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.66895 9.66406">
                        <path d={svgPaths.p440cf00} fill="var(--fill-0, #1DAAFB)" id="Primary" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div aria-hidden="true" className="absolute border border-[rgba(243,245,249,0)] border-solid inset-0 pointer-events-none rounded-[4px]" />
          </div>
        </div>
      </div>
    </div>
  );
}
type ImgLogoProfitProps = {
  className?: string;
  plan?: "None" | "Training" | "One" | "Plus" | "Pro" | "Ultra" | "Corporate";
  theme?: "Dark" | "Light";
};

function ImgLogoProfit({ className, plan = "None", theme = "Dark" }: ImgLogoProfitProps) {
  const isCorporate = plan === "Corporate";
  const isLight = theme === "Light";
  const isPlus = plan === "Plus";
  const isPro = plan === "Pro";
  const isUltra = plan === "Ultra";
  return (
    <div className={className || `relative ${isCorporate ? "h-[24px] w-[114px]" : ""}`}>
      <div className={`flex ${isCorporate ? "flex-row items-center size-full" : "content-stretch items-start relative"}`}>
        {["One", "Plus", "Pro", "Ultra", "Corporate"].includes(plan) && (
          <div className={`relative ${isCorporate ? "content-stretch flex items-center size-full" : isUltra ? "h-[24px] shrink-0 w-[119px]" : isPro ? "h-[24px] shrink-0 w-[103px]" : isPlus ? "h-[24px] shrink-0 w-[109px]" : "h-[24px] shrink-0 w-[106px]"}`}>
            {plan === "One" && (
              <div className="absolute h-[18px] left-[0.24px] top-[3px] w-[105.519px]" data-name="profit-one">
                <div className="absolute contents inset-[0.03%_0_0.23%_21.71%]" data-name="Group">
                  <div className="absolute inset-[0.03%_30.02%_0.23%_21.71%]" data-name="Group">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox={isLight ? "0 0 50.9309 17.9535" : "0 0 50.9309 17.9534"}>
                      <g id="Group">
                        <path d={isLight ? svgPaths.p36a14240 : svgPaths.p3bcf700} fill={isLight ? "var(--fill-0, #1D242F)" : "var(--fill-0, #F2F2F2)"} id="Vector" />
                        <path d={isLight ? svgPaths.p1923d500 : svgPaths.p23ee5070} fill={isLight ? "var(--fill-0, #1D242F)" : "var(--fill-0, #F2F2F2)"} id="Vector_2" />
                        <path d={isLight ? svgPaths.p25486300 : svgPaths.p14cbb900} fill={isLight ? "var(--fill-0, #1D242F)" : "var(--fill-0, #F2F2F2)"} id="Vector_3" />
                        <path d={isLight ? svgPaths.p12f4c400 : svgPaths.p17cd4df2} fill={isLight ? "var(--fill-0, #1D242F)" : "var(--fill-0, #F2F2F2)"} id="Vector_4" />
                        <path d={isLight ? svgPaths.p36ade140 : svgPaths.p38ab9f00} fill={isLight ? "var(--fill-0, #1D242F)" : "var(--fill-0, #F2F2F2)"} id="Vector_5" />
                      </g>
                    </svg>
                  </div>
                  <div className={`absolute ${isLight ? "inset-[19.84%_0_21.15%_72.24%]" : "inset-[19.83%_0_21.15%_72.24%]"}`} data-name="Group">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29.2971 10.6224">
                      <g id="Group">
                        <path d={svgPaths.p35097d80} fill={isLight ? "var(--fill-0, #1D242F)" : "var(--fill-0, #F2F2F2)"} id="Vector" />
                        <path d={isLight ? svgPaths.p2f66c5a0 : svgPaths.p2e680500} fill={isLight ? "var(--fill-0, #1D242F)" : "var(--fill-0, #F2F2F2)"} id="Vector_2" />
                        <path d={isLight ? svgPaths.pf61a600 : svgPaths.pd6eccd0} fill={isLight ? "var(--fill-0, #1D242F)" : "var(--fill-0, #F2F2F2)"} id="Vector_3" />
                      </g>
                    </svg>
                  </div>
                </div>
                <div className="absolute inset-[0_82.52%_0_0]" data-name="Group">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.4466 18">
                    <g id="Group">
                      <path d={svgPaths.p9835b00} fill={isLight ? "url(#paint0_linear_2_3581)" : "url(#paint0_linear_2_3546)"} id="Vector" />
                      <path d={svgPaths.p13f17030} fill={isLight ? "url(#paint1_linear_2_3581)" : "url(#paint1_linear_2_3546)"} id="Vector_2" />
                      <g id="Group_2">
                        <path d={isLight ? svgPaths.p249ba00 : svgPaths.p3e1d4100} fill={isLight ? "url(#paint2_linear_2_3581)" : "url(#paint2_linear_2_3546)"} id="Vector_3" />
                      </g>
                    </g>
                    <defs>
                      <linearGradient gradientUnits="userSpaceOnUse" id={isLight ? "paint0_linear_2_3581" : "paint0_linear_2_3546"} x1="1.95781" x2="18.139" y1="1.97491" y2="1.97491">
                        <stop stopColor="#00C2F4" />
                        <stop offset="0.1645" stopColor="#00BEF3" />
                        <stop offset="0.322" stopColor="#00B3F0" />
                        <stop offset="0.4766" stopColor="#009FEA" />
                        <stop offset="0.6296" stopColor="#0084E2" />
                        <stop offset="0.7813" stopColor="#0061D9" />
                        <stop offset="0.9302" stopColor="#0037CD" />
                        <stop offset="0.959" stopColor="#002ECA" />
                      </linearGradient>
                      <linearGradient gradientUnits="userSpaceOnUse" id={isLight ? "paint1_linear_2_3581" : "paint1_linear_2_3546"} x1="7.93588" x2="24.1245" y1="15.2873" y2="-5.2064">
                        <stop stopColor="#0063D8" />
                        <stop offset="0.1651" stopColor="#0074DF" />
                        <stop offset="1" stopColor="#00C8FF" />
                      </linearGradient>
                      <linearGradient gradientUnits="userSpaceOnUse" id={isLight ? "paint2_linear_2_3581" : "paint2_linear_2_3546"} x1="-0.114161" x2="11.0212" y1="11.7747" y2="11.7747">
                        <stop stopColor="#00A6EC" />
                        <stop offset="1" stopColor="#0063D8" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            )}
            {isPlus && (
              <div className="absolute h-[18px] left-[0.13px] top-[3px] w-[108.734px]" data-name="profit-plus">
                <div className="absolute contents inset-[0.03%_0_0.23%_21.07%]" data-name="Group">
                  <div className="absolute inset-[0.03%_32.09%_0.23%_21.07%]" data-name="Group">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox={isLight ? "0 0 50.9308 17.9535" : "0 0 50.9308 17.9534"}>
                      <g id="Group">
                        <path d={isLight ? svgPaths.p320f3d00 : svgPaths.p2fa8f972} fill={isLight ? "var(--fill-0, #1D242F)" : "var(--fill-0, #F2F2F2)"} id="Vector" />
                        <path d={isLight ? svgPaths.p3c613c80 : svgPaths.pd366000} fill={isLight ? "var(--fill-0, #1D242F)" : "var(--fill-0, #F2F2F2)"} id="Vector_2" />
                        <path d={isLight ? svgPaths.paf9d0f0 : svgPaths.p360a2900} fill={isLight ? "var(--fill-0, #1D242F)" : "var(--fill-0, #F2F2F2)"} id="Vector_3" />
                        <path d={isLight ? svgPaths.p3ac6bb00 : svgPaths.p2806cf70} fill={isLight ? "var(--fill-0, #1D242F)" : "var(--fill-0, #F2F2F2)"} id="Vector_4" />
                        <path d={isLight ? svgPaths.p18383300 : svgPaths.p2d8a4070} fill={isLight ? "var(--fill-0, #1D242F)" : "var(--fill-0, #F2F2F2)"} id="Vector_5" />
                      </g>
                    </svg>
                  </div>
                  <div className="absolute inset-[20.77%_0_21.15%_70.1%]" data-name="Group">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox={isLight ? "0 0 32.5116 10.4547" : "0 0 32.5116 10.4546"}>
                      <g id="Group">
                        <path d={isLight ? svgPaths.p2781ff00 : svgPaths.p32595cf0} fill={isLight ? "var(--fill-0, #1D242F)" : "var(--fill-0, #F2F2F2)"} id="Vector" />
                        <path d={svgPaths.p2bd38380} fill={isLight ? "var(--fill-0, #1D242F)" : "var(--fill-0, #F2F2F2)"} id="Vector_2" />
                        <path d={svgPaths.pcbd7100} fill={isLight ? "var(--fill-0, #1D242F)" : "var(--fill-0, #F2F2F2)"} id="Vector_3" />
                        <path d={svgPaths.p1fcc3480} fill={isLight ? "var(--fill-0, #1D242F)" : "var(--fill-0, #F2F2F2)"} id="Vector_4" />
                      </g>
                    </svg>
                  </div>
                </div>
                <div className="absolute inset-[0_83.03%_0_0]" data-name="Group">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.4468 18">
                    <g id="Group">
                      <path d={svgPaths.p378e400} fill={isLight ? "url(#paint0_linear_2_3468)" : "url(#paint0_linear_2_3617)"} id="Vector" />
                      <path d={svgPaths.p33bb3e00} fill={isLight ? "url(#paint1_linear_2_3468)" : "url(#paint1_linear_2_3617)"} id="Vector_2" />
                      <g id="Group_2">
                        <path d={isLight ? svgPaths.p3df1f180 : svgPaths.p3e1d4100} fill={isLight ? "url(#paint2_linear_2_3468)" : "url(#paint2_linear_2_3617)"} id="Vector_3" />
                      </g>
                    </g>
                    <defs>
                      <linearGradient gradientUnits="userSpaceOnUse" id={isLight ? "paint0_linear_2_3468" : "paint0_linear_2_3617"} x1="1.95807" x2="18.1393" y1="1.97491" y2="1.97491">
                        <stop stopColor="#00C2F4" />
                        <stop offset="0.1645" stopColor="#00BEF3" />
                        <stop offset="0.322" stopColor="#00B3F0" />
                        <stop offset="0.4766" stopColor="#009FEA" />
                        <stop offset="0.6296" stopColor="#0084E2" />
                        <stop offset="0.7813" stopColor="#0061D9" />
                        <stop offset="0.9302" stopColor="#0037CD" />
                        <stop offset="0.959" stopColor="#002ECA" />
                      </linearGradient>
                      <linearGradient gradientUnits="userSpaceOnUse" id={isLight ? "paint1_linear_2_3468" : "paint1_linear_2_3617"} x1="7.93592" x2="24.1246" y1="15.2873" y2="-5.2064">
                        <stop stopColor="#0063D8" />
                        <stop offset="0.1651" stopColor="#0074DF" />
                        <stop offset="1" stopColor="#00C8FF" />
                      </linearGradient>
                      <linearGradient gradientUnits="userSpaceOnUse" id={isLight ? "paint2_linear_2_3468" : "paint2_linear_2_3617"} x1="-0.114009" x2="11.0214" y1="11.7747" y2="11.7747">
                        <stop stopColor="#00A6EC" />
                        <stop offset="1" stopColor="#0063D8" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            )}
            {isPro && (
              <div className="absolute h-[18px] left-[-0.39px] top-[3px] w-[102.771px]" data-name="profit-pro">
                <div className="absolute inset-[0.03%_0_0.23%_22.19%]" data-name="Group">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 79.9676 17.9535">
                    <g id="Group">
                      <g id="Group_2">
                        <path d={svgPaths.p18b54900} fill={isLight ? "var(--fill-0, #1D242F)" : "var(--fill-0, #F2F2F2)"} id="Vector" />
                        <path d={isLight ? svgPaths.p17008600 : svgPaths.p1daa1a80} fill={isLight ? "var(--fill-0, #1D242F)" : "var(--fill-0, #F2F2F2)"} id="Vector_2" />
                        <path d={svgPaths.p32814400} fill={isLight ? "var(--fill-0, #1D242F)" : "var(--fill-0, #F2F2F2)"} id="Vector_3" />
                        <path d={svgPaths.p2e44af80} fill={isLight ? "var(--fill-0, #1D242F)" : "var(--fill-0, #F2F2F2)"} id="Vector_4" />
                        <path d={svgPaths.p1d8b2800} fill={isLight ? "var(--fill-0, #1D242F)" : "var(--fill-0, #F2F2F2)"} id="Vector_5" />
                      </g>
                      <path d={isLight ? svgPaths.p20966180 : svgPaths.p5e12f00} fill={isLight ? "var(--fill-0, #1D242F)" : "var(--fill-0, #F2F2F2)"} id="Vector_6" />
                      <path d={isLight ? svgPaths.p3777c700 : svgPaths.p186b4200} fill={isLight ? "var(--fill-0, #1D242F)" : "var(--fill-0, #F2F2F2)"} id="Vector_7" />
                      <path d={isLight ? svgPaths.p21cfa100 : svgPaths.p1251a00} fill={isLight ? "var(--fill-0, #1D242F)" : "var(--fill-0, #F2F2F2)"} id="Vector_8" />
                    </g>
                  </svg>
                </div>
                <div className="absolute inset-[0_82.1%_0_0]" data-name="Group">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.3971 18">
                    <g id="Group">
                      <path d={svgPaths.p14db9af0} fill="url(#paint0_linear_2_3481)" id="Vector" />
                      <path d={svgPaths.p1a0ebcf0} fill="url(#paint1_linear_2_3481)" id="Vector_2" />
                      <g id="Group_2">
                        <path d={svgPaths.p14038980} fill="url(#paint2_linear_2_3481)" id="Vector_3" />
                      </g>
                    </g>
                    <defs>
                      <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_2_3481" x1="1.95263" x2="18.0904" y1="1.97491" y2="1.97491">
                        <stop stopColor="#00C2F4" />
                        <stop offset="0.1645" stopColor="#00BEF3" />
                        <stop offset="0.322" stopColor="#00B3F0" />
                        <stop offset="0.4766" stopColor="#009FEA" />
                        <stop offset="0.6296" stopColor="#0084E2" />
                        <stop offset="0.7813" stopColor="#0061D9" />
                        <stop offset="0.9302" stopColor="#0037CD" />
                        <stop offset="0.959" stopColor="#002ECA" />
                      </linearGradient>
                      <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_2_3481" x1="7.91452" x2="24.1132" y1="15.2873" y2="-5.1641">
                        <stop stopColor="#0063D8" />
                        <stop offset="0.1651" stopColor="#0074DF" />
                        <stop offset="1" stopColor="#00C8FF" />
                      </linearGradient>
                      <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_2_3481" x1="-0.113933" x2="10.9916" y1="11.7747" y2="11.7747">
                        <stop stopColor="#00A6EC" />
                        <stop offset="1" stopColor="#0063D8" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            )}
            {isUltra && (
              <div className="absolute h-[18px] left-[0.18px] top-[3px] w-[118.643px]" data-name="profit-ultra">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 118.643 18">
                  <g id="profit-ultra">
                    <g id="Profit">
                      <path d={isLight ? svgPaths.p17a7c850 : svgPaths.p2e397a00} fill={isLight ? "var(--fill-0, #1D242F)" : "var(--fill-0, #F2F2F2)"} id="Vector" />
                      <path d={isLight ? svgPaths.p2eb67a00 : svgPaths.p26908000} fill={isLight ? "var(--fill-0, #1D242F)" : "var(--fill-0, #F2F2F2)"} id="Vector_2" />
                      <path d={isLight ? svgPaths.p3ea1ee80 : svgPaths.p1eac8180} fill={isLight ? "var(--fill-0, #1D242F)" : "var(--fill-0, #F2F2F2)"} id="Vector_3" />
                      <path d={isLight ? svgPaths.p44d1000 : svgPaths.p306258a0} fill={isLight ? "var(--fill-0, #1D242F)" : "var(--fill-0, #F2F2F2)"} id="Vector_4" />
                      <path d={isLight ? svgPaths.p9147400 : svgPaths.p288a27c0} fill={isLight ? "var(--fill-0, #1D242F)" : "var(--fill-0, #F2F2F2)"} id="Vector_5" />
                    </g>
                    <g id="SÃ­mbolo">
                      <path d={svgPaths.p1f72cfe0} fill={isLight ? "url(#paint0_linear_2_3504)" : "url(#paint0_linear_2_3411)"} id="Vector_6" />
                      <path d={svgPaths.p10696f80} fill={isLight ? "url(#paint1_linear_2_3504)" : "url(#paint1_linear_2_3411)"} id="Vector_7" />
                      <g id="Group">
                        <path d={isLight ? svgPaths.p17f01d00 : svgPaths.p12dda670} fill={isLight ? "url(#paint2_linear_2_3504)" : "url(#paint2_linear_2_3411)"} id="Vector_8" />
                      </g>
                    </g>
                    <g id="ULTRA">
                      <path d={svgPaths.p2402100} fill={isLight ? "var(--fill-0, #1D242F)" : "var(--fill-0, #F2F2F2)"} />
                      <path d={svgPaths.p2042db00} fill={isLight ? "var(--fill-0, #1D242F)" : "var(--fill-0, #F2F2F2)"} />
                      <path d={svgPaths.p5942f00} fill={isLight ? "var(--fill-0, #1D242F)" : "var(--fill-0, #F2F2F2)"} />
                      <path d={svgPaths.p2b4eaa80} fill={isLight ? "var(--fill-0, #1D242F)" : "var(--fill-0, #F2F2F2)"} />
                      <path d={svgPaths.p27230700} fill={isLight ? "var(--fill-0, #1D242F)" : "var(--fill-0, #F2F2F2)"} />
                    </g>
                  </g>
                  <defs>
                    <linearGradient gradientUnits="userSpaceOnUse" id={isLight ? "paint0_linear_2_3504" : "paint0_linear_2_3411"} x1="1.95813" x2="18.1402" y1="1.97491" y2="1.97491">
                      <stop stopColor="#00C2F4" />
                      <stop offset="0.1645" stopColor="#00BEF3" />
                      <stop offset="0.322" stopColor="#00B3F0" />
                      <stop offset="0.4766" stopColor="#009FEA" />
                      <stop offset="0.6296" stopColor="#0084E2" />
                      <stop offset="0.7813" stopColor="#0061D9" />
                      <stop offset="0.9302" stopColor="#0037CD" />
                      <stop offset="0.959" stopColor="#002ECA" />
                    </linearGradient>
                    <linearGradient gradientUnits="userSpaceOnUse" id={isLight ? "paint1_linear_2_3504" : "paint1_linear_2_3411"} x1="7.93661" x2="24.125" y1="15.2873" y2="-5.20723">
                      <stop stopColor="#0063D8" />
                      <stop offset="0.1651" stopColor="#0074DF" />
                      <stop offset="1" stopColor="#00C8FF" />
                    </linearGradient>
                    <linearGradient gradientUnits="userSpaceOnUse" id={isLight ? "paint2_linear_2_3504" : "paint2_linear_2_3411"} x1="-0.114075" x2="11.0219" y1="11.7747" y2="11.7747">
                      <stop stopColor="#00A6EC" />
                      <stop offset="1" stopColor="#0063D8" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            )}
            {isCorporate && (
              <div className="h-[18px] relative shrink-0 w-[113px]" data-name="brand_logo-Profit_Corporate">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 113 18.0001">
                  <g id="brand_logo-Profit_Corporate">
                    <g id="Vector">
                      <path d={svgPaths.p34cc7f80} fill={isLight ? "url(#paint0_linear_2_3464)" : "url(#paint0_linear_2_3500)"} />
                      <path d={svgPaths.p36689100} fill={isLight ? "url(#paint1_linear_2_3464)" : "url(#paint1_linear_2_3500)"} />
                      <path d={svgPaths.p1a996c80} fill={isLight ? "url(#paint2_linear_2_3464)" : "url(#paint2_linear_2_3500)"} />
                    </g>
                    <g id="corporate">
                      <path d={svgPaths.p135bc700} fill={isLight ? "var(--fill-0, #1D242F)" : "var(--fill-0, #F2F2F2)"} />
                      <path d={svgPaths.p36acd00} fill={isLight ? "var(--fill-0, #1D242F)" : "var(--fill-0, #F2F2F2)"} />
                      <path d={svgPaths.p1519b0c0} fill={isLight ? "var(--fill-0, #1D242F)" : "var(--fill-0, #F2F2F2)"} />
                      <path d={svgPaths.p2b92e600} fill={isLight ? "var(--fill-0, #1D242F)" : "var(--fill-0, #F2F2F2)"} />
                      <path d={svgPaths.p98c3700} fill={isLight ? "var(--fill-0, #1D242F)" : "var(--fill-0, #F2F2F2)"} />
                      <path d={svgPaths.p2817ef00} fill={isLight ? "var(--fill-0, #1D242F)" : "var(--fill-0, #F2F2F2)"} />
                      <path d={svgPaths.p3c610680} fill={isLight ? "var(--fill-0, #1D242F)" : "var(--fill-0, #F2F2F2)"} />
                      <path d={svgPaths.p326b3000} fill={isLight ? "var(--fill-0, #1D242F)" : "var(--fill-0, #F2F2F2)"} />
                      <path d={svgPaths.p18482900} fill={isLight ? "var(--fill-0, #1D242F)" : "var(--fill-0, #F2F2F2)"} />
                    </g>
                  </g>
                  <defs>
                    <linearGradient gradientUnits="userSpaceOnUse" id={isLight ? "paint0_linear_2_3464" : "paint0_linear_2_3500"} x1="-0.217616" x2="21.0259" y1="8.7631" y2="8.7631">
                      <stop stopColor="#00A6EC" />
                      <stop offset="1" stopColor="#0063D8" />
                    </linearGradient>
                    <linearGradient gradientUnits="userSpaceOnUse" id={isLight ? "paint1_linear_2_3464" : "paint1_linear_2_3500"} x1="-0.231683" x2="20.9951" y1="8.7633" y2="8.7633">
                      <stop stopColor="#00C2F4" />
                      <stop offset="0.1645" stopColor="#00BEF3" />
                      <stop offset="0.322" stopColor="#00B3F0" />
                      <stop offset="0.4766" stopColor="#009FEA" />
                      <stop offset="0.6296" stopColor="#0084E2" />
                      <stop offset="0.7813" stopColor="#0061D9" />
                      <stop offset="0.9302" stopColor="#0037CD" />
                      <stop offset="0.959" stopColor="#002ECA" />
                    </linearGradient>
                    <linearGradient gradientUnits="userSpaceOnUse" id={isLight ? "paint2_linear_2_3464" : "paint2_linear_2_3500"} x1="7.9196" x2="23.3993" y1="14.6402" y2="-5.08424">
                      <stop stopColor="#0063D8" />
                      <stop offset="0.1651" stopColor="#0074DF" />
                      <stop offset="1" stopColor="#00C8FF" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            )}
          </div>
        )}
        {plan === "None" && (
          <div className="h-[24px] relative shrink-0 w-[100px]" data-name="container">
            <div className="absolute inset-[0.03%_1.66%_0.37%_30.49%]" data-name="Group">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 67.8508 23.9036">
                <g id="Group">
                  <path d={svgPaths.p3ee50700} fill={isLight ? "var(--fill-0, #1D242F)" : "var(--fill-0, #F2F2F2)"} id="Vector" />
                  <path d={svgPaths.p2d61bf80} fill={isLight ? "var(--fill-0, #1D242F)" : "var(--fill-0, #F2F2F2)"} id="Vector_2" />
                  <path d={svgPaths.p3cb3400} fill={isLight ? "var(--fill-0, #1D242F)" : "var(--fill-0, #F2F2F2)"} id="Vector_3" />
                  <path d={svgPaths.p3723ccf0} fill={isLight ? "var(--fill-0, #1D242F)" : "var(--fill-0, #F2F2F2)"} id="Vector_4" />
                  <path d={svgPaths.p32aa9f00} fill={isLight ? "var(--fill-0, #1D242F)" : "var(--fill-0, #F2F2F2)"} id="Vector_5" />
                </g>
              </svg>
            </div>
            <div className="absolute inset-[0_75.39%_0_0]" data-name="Group">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.6095 24">
                <g id="Group">
                  <path d={svgPaths.p39939f00} fill="url(#paint0_linear_2_3606)" id="Vector" />
                  <path d={svgPaths.p796fd00} fill="url(#paint1_linear_2_3606)" id="Vector_2" />
                  <g id="Group_2">
                    <path d={svgPaths.p13b10544} fill="url(#paint2_linear_2_3606)" id="Vector_3" />
                  </g>
                </g>
                <defs>
                  <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_2_3606" x1="2.61204" x2="24.1993" y1="2.63328" y2="2.63328">
                    <stop stopColor="#00C2F4" />
                    <stop offset="0.1645" stopColor="#00BEF3" />
                    <stop offset="0.322" stopColor="#00B3F0" />
                    <stop offset="0.4766" stopColor="#009FEA" />
                    <stop offset="0.6296" stopColor="#0084E2" />
                    <stop offset="0.7813" stopColor="#0061D9" />
                    <stop offset="0.9302" stopColor="#0037CD" />
                    <stop offset="0.959" stopColor="#002ECA" />
                  </linearGradient>
                  <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_2_3606" x1="10.587" x2="32.1687" y1="20.3829" y2="-6.95393">
                    <stop stopColor="#0063D8" />
                    <stop offset="0.1651" stopColor="#0074DF" />
                    <stop offset="1" stopColor="#00C8FF" />
                  </linearGradient>
                  <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_2_3606" x1="-0.15237" x2="14.7033" y1="15.6995" y2="15.6995">
                    <stop stopColor="#00A6EC" />
                    <stop offset="1" stopColor="#0063D8" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        )}
        {plan === "Training" && (
          <div className="content-stretch flex h-[24px] items-center relative shrink-0" data-name="logo-container">
            <div className="h-[18px] relative shrink-0 w-[135px]" data-name="profit-training">
              <div className="absolute contents inset-[0.03%_0_0.23%_16.46%]" data-name="Group">
                <div className="absolute inset-[0.03%_46.96%_0.23%_16.46%]" data-name="Group">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 49.3854 17.9535">
                    <g id="Group">
                      <path d={isLight ? svgPaths.pc46fee0 : svgPaths.p15bb3160} fill={isLight ? "var(--fill-0, #1D242F)" : "var(--fill-0, #F2F2F2)"} id="Vector" />
                      <path d={isLight ? svgPaths.p950c000 : svgPaths.p39155a00} fill={isLight ? "var(--fill-0, #1D242F)" : "var(--fill-0, #F2F2F2)"} id="Vector_2" />
                      <path d={isLight ? svgPaths.p2fa85200 : svgPaths.p38f3a900} fill={isLight ? "var(--fill-0, #1D242F)" : "var(--fill-0, #F2F2F2)"} id="Vector_3" />
                      <path d={isLight ? svgPaths.p28448900 : svgPaths.p22a21200} fill={isLight ? "var(--fill-0, #1D242F)" : "var(--fill-0, #F2F2F2)"} id="Vector_4" />
                      <path d={isLight ? svgPaths.p3159aa00 : svgPaths.p208da140} fill={isLight ? "var(--fill-0, #1D242F)" : "var(--fill-0, #F2F2F2)"} id="Vector_5" />
                    </g>
                  </svg>
                </div>
                <div className="absolute inset-[20.5%_0_20.89%_53.64%]" data-name="Group">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 62.5923 10.5487">
                    <g id="Group">
                      <path d={isLight ? svgPaths.p32c60b80 : svgPaths.p2f314d00} fill={isLight ? "var(--fill-0, #1D242F)" : "var(--fill-0, #F2F2F2)"} id="Vector" />
                      <path d={isLight ? svgPaths.p2568fef0 : svgPaths.p21aaa180} fill={isLight ? "var(--fill-0, #1D242F)" : "var(--fill-0, #F2F2F2)"} id="Vector_2" />
                      <path d={isLight ? svgPaths.p2b7c9680 : svgPaths.pc86ef0} fill={isLight ? "var(--fill-0, #1D242F)" : "var(--fill-0, #F2F2F2)"} id="Vector_3" />
                      <path d={isLight ? svgPaths.p1cc6ca80 : svgPaths.p33ef5bf0} fill={isLight ? "var(--fill-0, #1D242F)" : "var(--fill-0, #F2F2F2)"} id="Vector_4" />
                      <path d={isLight ? svgPaths.p14e01700 : svgPaths.p36618f00} fill={isLight ? "var(--fill-0, #1D242F)" : "var(--fill-0, #F2F2F2)"} id="Vector_5" />
                      <path d={isLight ? svgPaths.pee78200 : svgPaths.p2c79c980} fill={isLight ? "var(--fill-0, #1D242F)" : "var(--fill-0, #F2F2F2)"} id="Vector_6" />
                      <path d={isLight ? svgPaths.p134785e0 : svgPaths.pa225540} fill={isLight ? "var(--fill-0, #1D242F)" : "var(--fill-0, #F2F2F2)"} id="Vector_7" />
                      <path d={svgPaths.p23d26680} fill={isLight ? "var(--fill-0, #1D242F)" : "var(--fill-0, #F2F2F2)"} id="Vector_8" />
                    </g>
                  </svg>
                </div>
              </div>
              <div className="absolute inset-[0_86.75%_0_0]" data-name="Group">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.8873 18">
                  <g id="Group">
                    <path d={svgPaths.p19ba4d00} fill="url(#paint0_linear_2_3558)" id="Vector" />
                    <path d={svgPaths.p303002c0} fill="url(#paint1_linear_2_3558)" id="Vector_2" />
                    <g id="Group_2">
                      <path d={svgPaths.pe85dc00} fill="url(#paint2_linear_2_3558)" id="Vector_3" />
                    </g>
                  </g>
                  <defs>
                    <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_2_3558" x1="1.89857" x2="17.5887" y1="1.97491" y2="1.97491">
                      <stop stopColor="#00C2F4" />
                      <stop offset="0.1645" stopColor="#00BEF3" />
                      <stop offset="0.322" stopColor="#00B3F0" />
                      <stop offset="0.4766" stopColor="#009FEA" />
                      <stop offset="0.6296" stopColor="#0084E2" />
                      <stop offset="0.7813" stopColor="#0061D9" />
                      <stop offset="0.9302" stopColor="#0037CD" />
                      <stop offset="0.959" stopColor="#002ECA" />
                    </linearGradient>
                    <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_2_3558" x1="7.69536" x2="23.9925" y1="15.2873" y2="-4.71775">
                      <stop stopColor="#0063D8" />
                      <stop offset="0.1651" stopColor="#0074DF" />
                      <stop offset="1" stopColor="#00C8FF" />
                    </linearGradient>
                    <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_2_3558" x1="-0.110607" x2="10.6868" y1="11.7747" y2="11.7747">
                      <stop stopColor="#00A6EC" />
                      <stop offset="1" stopColor="#0063D8" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
type BtnTertiaryProps = {
  className?: string;
  selected?: boolean;
  status?: "Default" | "Hover";
  text?: string;
};

function BtnTertiary({ className, selected = false, status = "Default", text = "Button text" }: BtnTertiaryProps) {
  const isSelected = selected;
  return (
    <div className={className || `h-[32px] relative rounded-[2px] ${isSelected ? "bg-[rgba(38,137,222,0.15)]" : "bg-[rgba(243,245,249,0)]"}`}>
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[2px] h-full items-center justify-center overflow-clip pb-[2px] px-[12px] relative">
          <div className="content-stretch flex items-center relative shrink-0" data-name="main-container">
            {isSelected && <p className="font-['Segoe_UI:Semibold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#89d1fd] text-[12px] text-center whitespace-nowrap">{text}</p>}
            {status === "Default" && !selected && <p className="font-['Segoe_UI:Semibold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.7)] text-center whitespace-nowrap">{text}</p>}
            {status === "Hover" && !selected && <p className="font-['Segoe_UI:Semibold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">{text}</p>}
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(243,245,249,0)] border-solid inset-0 pointer-events-none rounded-[2px]" />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="backdrop-blur-[12px] bg-[rgba(33,33,33,0.8)] relative size-full">
      <div className="content-stretch flex flex-col isolate items-start relative size-full">
        <div className="h-[43px] shrink-0 sticky top-0 w-full z-[2]" data-name="nav-header">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center justify-between pt-[4px] px-[48px] relative size-full">
              <NavBreadcrumbText text="Início" />
              <div className="content-stretch flex flex-[1_0_0] gap-[24px] items-center max-w-[1544px] min-h-px min-w-px relative" data-name="innerContainer">
                <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="container-primary">
                  <div className="flex flex-row items-center size-full">
                    <div className="content-stretch flex gap-[24px] items-center pr-[24px] relative w-full">
                      <div className="h-[24px] relative shrink-0 w-[125px]" data-name="img-logo-neloStore-125x24">
                        <div className="absolute h-[16.392px] left-[27px] top-[3.99px] w-[43.326px]" data-name="nelo">
                          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 43.3258 16.392">
                            <g id="nelo">
                              <path d={svgPaths.p3a09f800} fill="var(--fill-0, white)" id="Vector" />
                              <path d={svgPaths.p235a5f00} fill="var(--fill-0, white)" id="Vector_2" />
                              <path d={svgPaths.p2ee30900} fill="var(--fill-0, white)" id="Vector_3" />
                              <path d={svgPaths.p2b979800} fill="var(--fill-0, white)" id="Vector_4" />
                            </g>
                          </svg>
                        </div>
                        <div className="absolute h-[11.657px] left-[73px] top-[8.61px] w-[48.618px]" data-name="STORE">
                          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48.6176 11.6574">
                            <g id="STORE">
                              <path d={svgPaths.p32d8b100} fill="var(--fill-0, white)" id="Vector" />
                              <path d={svgPaths.p359a3680} fill="var(--fill-0, white)" id="Vector_2" />
                              <path d={svgPaths.p33c79600} fill="var(--fill-0, white)" id="Vector_3" />
                              <path d={svgPaths.p3c310500} fill="var(--fill-0, white)" id="Vector_4" />
                              <path d={svgPaths.p3f19700} fill="var(--fill-0, white)" id="Vector_5" />
                            </g>
                          </svg>
                        </div>
                        <div className="-translate-y-1/2 absolute left-0 size-[20px] top-1/2" data-name="ic-store-colored">
                          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                            <path d={svgPaths.p2cb50100} fill="url(#paint0_radial_2_3398)" id="Secondary" />
                            <defs>
                              <radialGradient cx="0" cy="0" gradientTransform="translate(9.99995 19.9993) rotate(-90) scale(20 25.8454)" gradientUnits="userSpaceOnUse" id="paint0_radial_2_3398" r="1">
                                <stop stopColor="#125CE0" />
                                <stop offset="1" stopColor="#00CB8D" />
                              </radialGradient>
                            </defs>
                          </svg>
                          <div className="absolute inset-[16.67%_8.33%_0_8.75%]" data-name="Primary">
                            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.5833 16.6667">
                              <path d={svgPaths.p19254400} fill="var(--fill-0, white)" id="Primary" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row items-center self-stretch">
                        <div className="content-stretch flex gap-[8px] h-full items-center px-[8px] relative shrink-0" data-name="Tab">
                          <div className="relative shrink-0 size-[16px]" data-name="ic-searchLeft">
                            <div className="absolute inset-[2.24%_2.33%_2.33%_2.24%]" data-name="Primary">
                              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.2685 15.2684">
                                <path clipRule="evenodd" d={svgPaths.p1a3d2500} fill="var(--fill-0, white)" fillOpacity="0.7" fillRule="evenodd" id="Primary" />
                              </svg>
                            </div>
                          </div>
                          <div className="flex flex-col font-['Tahoma:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.7)] whitespace-nowrap">
                            <p className="leading-[16px]">Pesquisar na loja...</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex gap-[24px] items-center justify-end opacity-0 relative shrink-0" data-name="container-secondary">
                  <NavTrialBanner additionalClassNames="rounded-[6px]" />
                </div>
                <div className="content-stretch flex gap-[4px] items-center justify-end relative shrink-0" data-name="container-buttons">
                  <BtnIcon>
                    <div className="relative shrink-0 size-[16px]" data-name="container-icon">
                      <div className="absolute left-0 size-[16px] top-0" data-name="ic-shoppingCart-outline">
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9999 16">
                          <g id="Primary">
                            <path d={svgPaths.p28068300} fill="var(--fill-0, white)" fillOpacity="0.7" />
                            <path d={svgPaths.p3ae1a300} fill="var(--fill-0, white)" fillOpacity="0.7" />
                            <path clipRule="evenodd" d={svgPaths.p3bcba6c0} fill="var(--fill-0, white)" fillOpacity="0.7" fillRule="evenodd" />
                          </g>
                        </svg>
                      </div>
                    </div>
                    <ContainerButtonsHintPopupText text="Carrinho" />
                    <div className="absolute bg-[#2689de] bottom-0 content-stretch flex flex-col items-center justify-center pb-[2px] right-0 rounded-[16px] size-[13px]" data-name="counter">
                      <div className="flex flex-col font-['Segoe_UI:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-white whitespace-nowrap">
                        <p className="leading-[13px]">3</p>
                      </div>
                    </div>
                  </BtnIcon>
                  <BtnIcon>
                    <div className="relative shrink-0 size-[16px]" data-name="container-icon">
                      <div className="absolute left-0 size-[16px] top-0" data-name="ic-user-outline">
                        <div className="absolute inset-[0_1.44%]" data-name="Primary">
                          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.5393 16">
                            <g id="Primary">
                              <path clipRule="evenodd" d={svgPaths.p216a2700} fill="var(--fill-0, white)" fillOpacity="0.7" fillRule="evenodd" />
                              <path clipRule="evenodd" d={svgPaths.p7fa7dc0} fill="var(--fill-0, white)" fillOpacity="0.7" fillRule="evenodd" />
                            </g>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <ContainerButtonsHintPopupText text="Minha conta" />
                  </BtnIcon>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[42px] shrink-0 sticky top-0 w-full z-[1]" data-name="nav-header">
          <div className="flex flex-row items-end size-full">
            <div className="content-stretch flex items-end justify-between pl-[36px] pr-[48px] relative size-full">
              <NavBreadcrumbText text="Início" />
              <div className="content-stretch flex flex-[1_0_0] h-full items-center justify-center max-w-[1544px] min-h-px min-w-px relative" data-name="innerContainer">
                <div className="content-stretch flex flex-[1_0_0] h-full items-center min-h-px min-w-px relative">
                  <BtnTertiary className="bg-[rgba(243,245,249,0)] h-[32px] relative rounded-[2px] shrink-0" text="Plataformas" />
                  <BtnTertiary className="bg-[rgba(243,245,249,0)] h-[32px] relative rounded-[2px] shrink-0" text="Automações" />
                  <BtnTertiary className="bg-[rgba(243,245,249,0)] h-[32px] relative rounded-[2px] shrink-0" text="Copy Invest" />
                  <BtnTertiary className="bg-[rgba(243,245,249,0)] h-[32px] relative rounded-[2px] shrink-0" text="Opcionais" />
                  <BtnTertiary className="bg-[rgba(243,245,249,0)] h-[32px] relative rounded-[2px] shrink-0" text="Grupos" />
                  <BtnTertiary className="bg-[rgba(243,245,249,0)] h-[32px] relative rounded-[2px] shrink-0" text="Cursos" />
                  <BtnTertiary className="bg-[rgba(243,245,249,0)] h-[32px] relative rounded-[2px] shrink-0" text="Tipos de Trade" />
                </div>
                <div className="content-stretch flex gap-[24px] items-center justify-end relative shrink-0" data-name="container-secondary">
                  <NavTrialBanner additionalClassNames="rounded-bl-[6px] rounded-tl-[6px] rounded-tr-[6px]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[rgba(243,245,249,0.05)] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}
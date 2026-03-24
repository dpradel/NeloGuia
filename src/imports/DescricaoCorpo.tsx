const imgImage = "https://placehold.co/600x400";
const imgImage1 = "https://placehold.co/600x400";
const imgImage2 = "https://placehold.co/600x400";

function Wrapper1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 w-full z-[1]">
      <div className="content-stretch flex flex-col gap-[8px] items-start pb-[8px] px-[16px] relative w-full">{children}</div>
    </div>
  );
}

function DescricaoCorpo1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-[#2b2b2b] flex-[1_0_0] min-h-px min-w-px relative rounded-[8px] w-full">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[16px] isolate items-center pb-[16px] relative size-full">{children}</div>
      </div>
    </div>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Tahoma:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.7)] text-center w-full">
        <p className="leading-[19px]">{children}</p>
      </div>
    </div>
  );
}
type Text1Props = {
  text: string;
};

function Text1({ text }: Text1Props) {
  return <Wrapper>{text}</Wrapper>;
}
type TextProps = {
  text: string;
};

function Text({ text }: TextProps) {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Segoe_UI:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white w-full">
        <p className="leading-[19px]">{text}</p>
      </div>
    </div>
  );
}

export default function DescricaoCorpo() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] isolate items-start py-[16px] relative rounded-[8px] size-full" data-name="Descrição > Corpo">
      <div className="relative shrink-0 w-full z-[2]" data-name="Descrição > Título">
        <div className="content-stretch flex items-start px-[4px] relative w-full">
          <div className="flex flex-[1_0_0] flex-col font-['Segoe_UI:Semibold',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[16px] text-white">
            <p className="leading-[21px]">Treino e preparação</p>
          </div>
        </div>
      </div>
      <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full z-[1]">
        <div className="content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-px overflow-clip relative self-stretch" data-name="Descrição">
          <DescricaoCorpo1>
            <div className="h-[139px] relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full z-[2]" data-name="image">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-tl-[8px] rounded-tr-[8px] size-full" src={imgImage} />
            </div>
            <Wrapper1>
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                <Text text="Período de treino" />
              </div>
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                <Text1 text="De 01 a 09 de março de 2026, todos os inscritos terão acesso ao ambiente simulado para familiarização. Os resultados do treino NÃO contam para o ranking." />
              </div>
            </Wrapper1>
          </DescricaoCorpo1>
        </div>
        <div className="content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-px overflow-clip relative self-stretch" data-name="Descrição">
          <DescricaoCorpo1>
            <div className="h-[139px] relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full z-[2]" data-name="image">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-tl-[8px] rounded-tr-[8px] size-full" src={imgImage1} />
            </div>
            <Wrapper1>
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                <Text text="Ambiente simulado" />
              </div>
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                <Text1 text="O ambiente de treino utiliza dados reais de mercado com delay de 15 minutos. O ambiente de competição usa dados em tempo real." />
              </div>
            </Wrapper1>
          </DescricaoCorpo1>
        </div>
        <div className="content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-px overflow-clip relative" data-name="Descrição">
          <div className="bg-[#2b2b2b] content-stretch flex flex-col gap-[16px] isolate items-center pb-[16px] relative rounded-[8px] shrink-0 w-full" data-name="Descrição > Corpo">
            <div className="h-[139px] relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full z-[2]" data-name="image">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-tl-[8px] rounded-tr-[8px] size-full" src={imgImage2} />
            </div>
            <Wrapper1>
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                <Text text="Material de apoio" />
              </div>
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                <Wrapper>{`Todos os participantes recebem acesso ao curso 'Fundamentos de Day Trade' na Nelo Store, com 12 aulas gravadas sobre análise técnica, tape reading e gerenciamento.`}</Wrapper>
              </div>
            </Wrapper1>
          </div>
        </div>
      </div>
    </div>
  );
}
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

export function Tag({ className, children, ...props }: React.ComponentProps<'div'>) {
  return (
    <div className={twMerge(clsx("bg-[#1DAAFB]/10 rounded-[4px] px-[8px] py-[6px] inline-flex items-center justify-center", className))} {...props}>
      <span className="bg-clip-text bg-gradient-to-r from-[#1daafb] to-[#89d1fd] text-transparent font-sans font-semibold text-[12px] leading-[16px]">
        {children}
      </span>
    </div>
  );
}



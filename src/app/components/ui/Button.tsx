import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

interface ButtonProps extends React.ComponentProps<'button'> {
  variant?: 'primary' | 'secondary';
}

export function Button({ variant = 'primary', className, children, ...props }: ButtonProps) {
  const baseClasses = "h-[32px] px-[16px] min-w-[144px] relative rounded-[4px] shrink-0 font-sans text-[12px] whitespace-nowrap overflow-hidden inline-flex items-center justify-center transition-all duration-200 active:scale-[0.98]";
  
  const variants = {
    primary: "text-white font-semibold bg-gradient-to-r from-[#2799FA] to-[#0463C8] ring-1 ring-inset ring-[#1f72ff] hover:opacity-90",
    secondary: "text-white font-semibold bg-gradient-to-b from-[rgba(243,245,249,0.1)] to-[rgba(243,245,249,0.05)] ring-1 ring-inset ring-[rgba(243,245,249,0.03)] hover:from-[rgba(243,245,249,0.15)] hover:to-[rgba(243,245,249,0.1)] backdrop-blur-sm"
  };

  return (
    <button className={twMerge(clsx(baseClasses, variants[variant]), className)} {...props}>
      {children}
    </button>
  );
}



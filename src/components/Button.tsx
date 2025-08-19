import { cn } from '@/lib/utils';
import { cva, VariantProps } from 'class-variance-authority';
import { ButtonHTMLAttributes } from 'react';

const buttonVariants = cva(
  // 기본 클래스
  `inline-flex items-center justify-center rounded-lg font-medium 
   transition-colors focus-visible:outline-none focus-visible:ring-2 
   focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 
   disabled:pointer-events-none hover:cursor-pointer`,
  {
    variants: {
      variant: {
        primary: 'bg-blue-600 text-white hover:bg-blue-700',
        secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300',
        danger: 'bg-red-600 text-white hover:bg-red-700',
        outline: 'border border-gray-300 bg-transparent hover:bg-gray-100',
        ghost: 'hover:bg-gray-100 hover:text-gray-900',
      },
      size: {
        36: 'h-9 px-3 text-sm',
        40: 'h-10 px-4 py-2',
        44: 'h-11 px-8',
        48: 'h-12 px-10 text-lg',
      },
      fullWidth: {
        true: 'w-full',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 40,
    },
  }
);

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {}

export default function Button({ className, variant, size, fullWidth, children, ...props }: ButtonProps) {
  return (
    <button className={cn(buttonVariants({ variant, size, fullWidth }), className)} {...props}>
      {children}
    </button>
  );
}

import { VariantProps, cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const badgeVariants = cva('px-2 font-bold text-sm transition rounded', {
  variants: {
    variant: {
      base: 'bg-accent text-primary hover:bg-primary hover:text-white cursor-pointer',
      primary: 'bg-primary text-white',
      dark: 'bg-neutral-dark text-white',
    },
    size: {
      base: 'pt-1.5 pb-1',
      sm: 'pt-[2.5px] pb-px',
    },
  },
  defaultVariants: {
    variant: 'base',
    size: 'base',
  },
});

interface BadgeProps
  extends React.ComponentProps<'div'>,
    VariantProps<typeof badgeVariants> {
  pill?: boolean;
  children: string;
}

const Badge = ({
  children,
  pill,
  className,
  variant,
  size,
  ...props
}: BadgeProps) => {
  return (
    <div
      role={variant === 'base' ? 'button' : undefined}
      className={cn(
        badgeVariants({ variant, className, size }),
        pill && 'rounded-full',
      )}
      {...props}
    >
      <span
        className={cn(
          'leading-none',
          size === 'sm' && 'text-xs',
          size === 'base' && 'text-sm',
        )}
      >
        {children}
      </span>
    </div>
  );
};

export { Badge, badgeVariants };

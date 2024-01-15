import { X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { FilterItem } from '@/types';

interface Props extends React.ComponentProps<'div'> {
  children: FilterItem;
  onClose?: () => void;
}

export const ClosableTag = ({
  children,
  className,
  onClose,
  ...props
}: Props) => {
  return (
    <div
      className={cn('flex', className)}
      {...props}
    >
      <div className="bg-accent text-primary rounded-es rounded-ss px-2 pb-1 pt-1.5 text-sm font-bold">
        <span className="text-sm">{children}</span>
      </div>
      <button
        className="bg-primary hover:bg-neutral-dark center-flex aspect-square h-[30px] rounded-ee rounded-se transition"
        onClick={onClose}
      >
        <X className="text-white" />
      </button>
    </div>
  );
};

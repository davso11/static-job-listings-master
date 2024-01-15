import { cn } from '@/lib/utils';
import { ClosableTag } from './closable-tag';
import { FilterItem } from '@/types';

interface Props extends React.ComponentProps<'div'> {
  data: FilterItem[];
  className?: string;
  removeTag: (tag: FilterItem) => void;
  clearTags: () => void;
}

export const Filter = ({ data, className, removeTag, clearTags }: Props) => {
  return (
    <div
      className={cn('filter-card relative left-0 top-0 transform', className)}
    >
      <div className="flex items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-4">
          {data.map((tagLabel) => (
            <ClosableTag
              key={tagLabel}
              onClose={() => removeTag(tagLabel)}
            >
              {tagLabel}
            </ClosableTag>
          ))}
        </div>

        <div
          role="button"
          className="leading-[30px] text-neutral hover:text-primary hover:underline"
          onClick={clearTags}
        >
          Clear
        </div>
      </div>
    </div>
  );
};

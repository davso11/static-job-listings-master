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
      className={cn(
        'filter-card absolute left-0 top-0 -translate-y-1/2 transform',
        className,
      )}
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
          className="text-neutral hover:text-primary leading-[30px] hover:underline"
          onClick={clearTags}
        >
          Clear
        </div>
      </div>
    </div>
  );
};

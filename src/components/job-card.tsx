import { cn } from '@/lib/utils';
import { Badge } from './ui/badge';
import { FilterItem, Job } from '@/types';

interface JobCardProps extends React.ComponentPropsWithRef<'article'> {
  data: Job;
  addTagToFilter: (tag: FilterItem) => void;
}

export const JobCard = ({
  data,
  className,
  addTagToFilter,
  ...props
}: JobCardProps) => {
  return (
    <article
      className={cn(
        'job-card relative flex flex-col justify-between gap-x-4 md:flex-row md:items-center',
        className,
      )}
      {...props}
    >
      {/* Featured indicator */}
      {data.featured && (
        <div className="absolute left-0 top-0 h-full w-1.5 rounded-es-md rounded-ss-md bg-primary" />
      )}

      {/* MOBILE: company logo */}
      <div className="sm:hidden">
        <img
          src={data.logo}
          alt={data.company}
          className="absolute left-6 top-0 w-12 -translate-y-1/2 transform"
        />
      </div>

      {/* LEFT */}
      <div className="flex shrink-0 items-center gap-x-6">
        <img
          src={data.logo}
          alt={data.company}
          className="hidden sm:block"
        />

        <div className="flex flex-col gap-y-1.5">
          <div className="flex items-center gap-x-5">
            <h3 className="company-name">{data.company}</h3>
            <div className="flex items-center gap-x-2">
              {data.new && (
                <Badge
                  pill
                  variant="primary"
                  size="sm"
                >
                  NEW!
                </Badge>
              )}
              {data.featured && (
                <Badge
                  pill
                  variant="dark"
                  size="sm"
                >
                  FEATURED
                </Badge>
              )}
            </div>
          </div>

          <a
            href=""
            className="group"
          >
            <h2 className="font-bold transition group-hover:text-primary md:text-xl">
              {data.position}
            </h2>
          </a>

          <div className="flex items-center gap-x-2 text-neutral md:gap-x-4">
            <span>{data.postedAt}</span>
            <div className="h-1 w-1 rounded-full bg-neutral" />
            <span>{data.contract}</span>
            <div className="h-1 w-1 rounded-full bg-neutral" />
            <span>{data.location}</span>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="my-6 border-b border-neutral md:hidden" />

      {/* Tags */}
      <div className="flex flex-wrap items-center gap-4">
        <Badge onClick={() => addTagToFilter(data.role)}>{data.role}</Badge>
        <Badge onClick={() => addTagToFilter(data.level)}>{data.level}</Badge>

        {data.tools.map((tool) => (
          <Badge
            key={tool}
            onClick={() => addTagToFilter(tool)}
          >
            {tool}
          </Badge>
        ))}

        {data.languages.map((language) => (
          <Badge
            key={language}
            onClick={() => addTagToFilter(language)}
          >
            {language}
          </Badge>
        ))}
      </div>
    </article>
  );
};

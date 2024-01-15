import { useMemo, useState } from 'react';
import { toast } from 'react-hot-toast';
import { jobs } from '@/constants/data';
import { Container } from './container';
import { JobCard } from './job-card';
import { Filter } from './filter';
import { FilterItem } from '@/types';
import { cn } from '@/lib/utils';

export const Content = () => {
  const [activeTags, setActiveTags] = useState<FilterItem[]>([]);

  const addTagToFilter = (tag: FilterItem) => {
    // No more than 3 tags
    if (activeTags.length >= 3) {
      toast.error('Oops! Pas plus de 3 tags svp', {
        className: 'font-normal',
      });
      return;
    }

    const isTagAlreadyActive = activeTags.some((t) => t === tag);
    if (!isTagAlreadyActive) {
      setActiveTags([...activeTags, tag]);
    }
  };

  // Remove tag from filter
  const removeTagFromFilter = (tag: FilterItem) => {
    setActiveTags((prev) => prev.filter((t) => t !== tag));
  };

  // Clear all tags from filter
  const clearTags = () => {
    setActiveTags([]);
  };

  // Filter jobs
  const filteredJobsByTags = useMemo(() => {
    if (activeTags.length === 0) {
      return jobs;
    }

    return jobs.filter((job) => {
      const tags = [job.role, job.level, ...job.languages, ...job.tools];
      return activeTags.every((tag) => tags.includes(tag));
    });
  }, [activeTags]);

  return (
    <main className="px-6">
      <Container className="relative pb-20 pt-20 md:pb-36">
        {/* Filter bar */}
        {activeTags.length > 0 && (
          <Filter
            data={activeTags}
            removeTag={removeTagFromFilter}
            clearTags={clearTags}
          />
        )}

        {/* JobList */}
        <div
          className={cn(
            'flex flex-col gap-y-10 md:gap-y-6',
            activeTags.length === 3 && 'xs:mt-0 mt-10',
          )}
        >
          {filteredJobsByTags.map((job) => (
            <JobCard
              key={job.id}
              data={job}
              addTagToFilter={addTagToFilter}
            />
          ))}
        </div>
      </Container>
    </main>
  );
};

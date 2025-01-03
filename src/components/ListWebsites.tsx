import { Badge } from "@/components/ui/badge";
import dataWebsites from "@/data/websites.json";
import { cn } from "@/lib/utils";
import { filteredTags, searchKeyword } from "@/store";
import { useStore } from "@nanostores/react";
import { useMemo, useEffect, useRef } from "react";
import { logger } from '@/lib/logger';

export default function ListWebsites() {
  const search = useStore(searchKeyword);
  const tags = useStore(filteredTags);
  const prevFilters = useRef({ search: '', tags: [] });

  // 只在过滤条件真正改变时记录日志
  useEffect(() => {
    const currentFilters = { search, tags };
    if (JSON.stringify(prevFilters.current) !== JSON.stringify(currentFilters)) {
      logger.log('Filters changed from:', prevFilters.current, 'to:', currentFilters);
      prevFilters.current = currentFilters;
    }
  }, [search, tags]);

  const filteredWebsites = useMemo(() => {
    // 避免重复的初始化日志
    if (!search && tags.length === 0) {
      return dataWebsites;
    }
    
    const searchTerm = (search || '').toLowerCase().trim();
    
    const filtered = dataWebsites.filter((website) => {
      const tagMatch = tags.length === 0 || tags.every((tag) => 
        (website.tags as string[]).includes(tag)
      );
      
      const searchMatch = !searchTerm || [
        website.title,
        website.description,
        ...(website.tags || [])
      ].some(text => 
        (text || '').toLowerCase().includes(searchTerm)
      );
      
      return tagMatch && searchMatch;
    });
    
    logger.log('Filtered results:', filtered.length);
    return filtered;
  }, [search, tags]);

  return (
    <div
      className={cn(
        "container mx-auto px-4 md:px-0",
        "grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3 xl:grid-cols-4",
      )}
    >
      {filteredWebsites.map((website) => (
        <a
          key={website.url}
          className={cn(
            "rounded bg-background p-4 shadow",
            "flex flex-col gap-4",
          )}
          href={website.url}
          target="_blank"
        >
          <div className="flex gap-2">
            <div className="h-12 w-12 bg-muted p-2">
              <img
                src={
                  website.favicon ||
                  "https://placehold.co/400?text=No%20Picture"
                }
                alt={website.title || ''}
                className="aspect-square w-full rounded object-cover"
              />
            </div>
            <p className="flex-1 text-sm font-semibold">{website.title}</p>
          </div>
          <div className="flex flex-1 flex-col justify-between gap-2">
            <div className="flex flex-col gap-1">
              <p className="line-clamp-3 text-xs text-muted-foreground">
                {website.description}
              </p>
              <div className="flex flex-wrap gap-1">
                {website.tags?.map((tag) => (
                  <Badge key={tag} className="px-1 py-0">{tag}</Badge>
                ))}
              </div>
            </div>
            <div>
              <span className="text-xs text-muted-foreground">
                Last reviewed at{" "}
                <span className="font-medium">{website.lastReviewAt}</span>
              </span>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}

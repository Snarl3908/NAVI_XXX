import dataWebsites from "@/data/websites.json";
import { cn } from "@/lib/utils";
import { filteredTags } from "@/store";
import { useStore } from "@nanostores/react";
import { X } from "lucide-react";
import { useMemo } from "react";
import { Button } from "./ui/button";
import { logger } from "@/lib/logger";
import { searchKeyword } from "@/store";

export default function ListTags() {
  const selectedTags = useStore(filteredTags);

  const tags = useMemo(() => {
    const tags = new Set<string>();
    dataWebsites.forEach((website) => {
      website.tags.forEach((tag) => tags.add(tag));
    });
    return Array.from(tags).sort((a, b) => a.localeCompare(b));
  }, []);

  const handleTagClick = (tag: string) => {
    try {
      const selected = selectedTags.includes(tag);
      logger.log('Tag clicked:', tag, 'Selected:', selected);
      
      searchKeyword.set('');
      
      const newTags = selected
        ? selectedTags.filter((t) => t !== tag)
        : [...selectedTags, tag];
      
      logger.log('New tags:', newTags);
      
      if (newTags.length === 0) {
        filteredTags.set([]);
        return;
      }
      
      filteredTags.set(newTags);
    } catch (error) {
      logger.log('Error handling tag click:', error);
    }
  };

  return (
    <div
      className={cn(
        "container mx-auto p-4 md:px-0 md:py-8",
        "flex flex-wrap items-center justify-center gap-1",
      )}
    >
      {tags.map((tag) => {
        const selected = selectedTags.includes(tag);
        return (
          <Button
            key={tag}
            size="sm"
            variant={selected ? "default" : "outline"}
            onClick={() => handleTagClick(tag)}
            className={cn(
              "flex cursor-pointer items-center gap-2 transition-all",
            )}
          >
            {tag} {selected && <X size={12} />}
          </Button>
        );
      })}
    </div>
  );
}

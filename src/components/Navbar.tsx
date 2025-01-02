import { ModeToggle } from "@/components/ModeToggle";
import { Button, buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { Home, Github, Coffee } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

function NavIcon({
  icon,
  tooltip,
  href,
  target,
  onClick,
}: {
  icon: React.ReactNode;
  tooltip: string;
  href?: string;
  target?: string;
  onClick?: () => void;
}) {
  const { theme } = siteConfig;

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <a
          href={href}
          target={target}
          onClick={onClick}
          className={cn(
            buttonVariants({
              variant: theme.styles.components.navIcon.variants.ghost,
              size: theme.styles.components.navIcon.variants.icon,
            }),
            ...theme.styles.components.navIcon.base
          )}
        >
          {icon}
        </a>
      </TooltipTrigger>
      <TooltipContent>
        <p>{tooltip}</p>
      </TooltipContent>
    </Tooltip>
  );
}

export default function Navbar() {
  const { social: { links } } = siteConfig;

  return (
    <TooltipProvider>
      <div
        className={cn(
          "group pointer-events-none mb-4 flex h-full max-h-14",
          "fixed inset-x-0 bottom-4 z-20 mx-auto md:top-4",
        )}
      >
        <div className="fixed inset-x-0 bottom-0 h-16 w-full bg-background to-transparent backdrop-blur-lg [-webkit-mask-image:linear-gradient(to_top,black,transparent)] dark:bg-background md:top-0 md:[-webkit-mask-image:linear-gradient(to_bottom,black,transparent)]"></div>
        <div
          className={cn(
            "relative mx-auto flex h-full min-h-full items-center gap-2 rounded-full px-2",
            "pointer-events-auto transition-all",
            "bg-background [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
          )}
        >
          <NavIcon icon={<Home />} tooltip="Home" href="/" />
          <NavIcon
            icon={<Github />}
            tooltip="Source code of this website theme"
            href={links.github.url}
            target="_blank"
          />
          <NavIcon
            icon={<Coffee />}
            tooltip="This template on Astro theme"
            href="https://astro.build"
            target="_blank"
          />
          <Separator orientation="vertical" className="my-2 h-full" />
          <NavIcon
            icon={<Coffee />}
            tooltip="Buy me a coffee"
            href={links.buyMeACoffee.url}
            target="_blank"
          />
          <Separator orientation="vertical" className="h-full py-2" />
          <Tooltip>
            <TooltipTrigger asChild>
              <ModeToggle />
            </TooltipTrigger>
            <TooltipContent>
              <p>Theme</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </div>
    </TooltipProvider>
  );
}

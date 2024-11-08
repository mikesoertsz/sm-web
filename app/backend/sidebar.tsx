import React from "react";
import {
  Bird,
  Book,
  Bot,
  Code2,
  LifeBuoy,
  Settings2,
  SquareTerminal,
  SquareUser,
  Triangle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";

type SidebarItem = {
  icon: JSX.Element;
  label: string;
  ariaLabel: string;
  style: string;
};

const sidebarItems: SidebarItem[] = [
  {
    icon: <Triangle className="size-5 fill-foreground" />,
    label: "Home",
    ariaLabel: "Home",
    style: "outline",
  },
  {
    icon: <SquareTerminal className="size-5" />,
    label: "Playground",
    ariaLabel: "Playground",
    style: "ghost rounded-lg bg-muted",
  },
  {
    icon: <Bot className="size-5" />,
    label: "Models",
    ariaLabel: "Models",
    style: "ghost rounded-lg",
  },
  {
    icon: <Code2 className="size-5" />,
    label: "API",
    ariaLabel: "API",
    style: "ghost rounded-lg",
  },
  {
    icon: <Book className="size-5" />,
    label: "Documentation",
    ariaLabel: "Documentation",
    style: "ghost rounded-lg",
  },
  {
    icon: <Settings2 className="size-5" />,
    label: "Settings",
    ariaLabel: "Settings",
    style: "ghost rounded-lg",
  },
  {
    icon: <LifeBuoy className="size-5" />,
    label: "Help",
    ariaLabel: "Help",
    style: "ghost mt-auto rounded-lg",
  },
  {
    icon: <SquareUser className="size-5" />,
    label: "Account",
    ariaLabel: "Account",
    style: "ghost mt-auto rounded-lg",
  },
];

const SidebarButton = ({ item }: { item: SidebarItem }) => (
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className={item.style.split(" ").slice(1).join(" ")}
          aria-label={item.ariaLabel}
        >
          {item.icon}
        </Button>
      </TooltipTrigger>
      <TooltipContent side="right" sideOffset={5}>
        {item.label}
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
);

export default function Sidebar() {
  return (
    <aside className="fixed left-0 z-20 flex flex-col h-full border-r inset-y">
      <div className="p-2 border-b">
        <SidebarButton item={sidebarItems[0]} />
      </div>
      <nav className="grid gap-1 p-2">
        {sidebarItems.slice(1, -2).map((item, index) => (
          <SidebarButton key={index} item={item} />
        ))}
      </nav>
      <nav className="grid gap-1 p-2 mt-auto">
        {sidebarItems.slice(-2).map((item, index) => (
          <SidebarButton key={index} item={item} />
        ))}
      </nav>
    </aside>
  );
}

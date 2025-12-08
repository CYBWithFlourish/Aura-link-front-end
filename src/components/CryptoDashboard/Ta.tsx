import { cn } from "@/lib/utils";

interface TabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const tabs = ["PROFILE", "GIGS", "TRACKER"];

export const Tabs = ({ activeTab, onTabChange }: TabsProps) => {
  return (
    <div className="flex border-b border-border">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onTabChange(tab)}
          className={cn(
            "flex-1 py-4 text-sm font-medium tracking-widest transition-colors",
            activeTab === tab
              ? "text-foreground border-b-2 border-foreground"
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};
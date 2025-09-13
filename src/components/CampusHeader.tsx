import { GraduationCap, Bot } from "lucide-react";

export const CampusHeader = () => {
  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-primary rounded-lg">
              <GraduationCap className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Manikanta AI Assistant</h1>
              <p className="text-sm text-muted-foreground">Your 24/7 manikanta information guide</p>
            </div>
          </div>
          
          <div className="ml-auto flex items-center gap-2">
            <div className="flex items-center gap-2 px-3 py-1 bg-success/10 rounded-full">
              <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
              <span className="text-xs text-success font-medium">Online</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
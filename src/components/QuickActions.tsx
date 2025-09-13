import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Clock, 
  MapPin, 
  Utensils, 
  BookOpen, 
  FileText, 
  Calendar 
} from "lucide-react";

interface QuickActionsProps {
  onActionClick: (query: string) => void;
}

const QUICK_ACTIONS = [
  {
    icon: Clock,
    label: "Class Schedules",
    query: "What are the current class schedules and when do classes start?",
    color: "text-primary",
  },
  {
    icon: Utensils,
    label: "Dining Options",
    query: "What dining options are available on campus today?",
    color: "text-accent",
  },
  {
    icon: BookOpen,
    label: "Library Hours",
    query: "What are the library hours and services available?",
    color: "text-success",
  },
  {
    icon: MapPin,
    label: "Campus Facilities",
    query: "Tell me about campus facilities like gym, recreation center, and study spaces.",
    color: "text-warning",
  },
  {
    icon: FileText,
    label: "Admin Procedures",
    query: "How do I handle course registration and administrative procedures?",
    color: "text-primary",
  },
  {
    icon: Calendar,
    label: "Events & Activities",
    query: "What events and activities are happening on campus this week?",
    color: "text-accent",
  },
];

export const QuickActions = ({ onActionClick }: QuickActionsProps) => {
  return (
    <Card className="p-4 mb-4">
      <h3 className="text-sm font-semibold text-foreground mb-3">Quick Questions</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
        {QUICK_ACTIONS.map((action) => {
          const IconComponent = action.icon;
          return (
            <Button
              key={action.label}
              variant="ghost"
              size="sm"
              onClick={() => onActionClick(action.query)}
              className="h-auto p-3 flex flex-col items-center gap-2 hover:bg-secondary/50"
            >
              <IconComponent className={`w-5 h-5 ${action.color}`} />
              <span className="text-xs text-center leading-tight">{action.label}</span>
            </Button>
          );
        })}
      </div>
    </Card>
  );
};
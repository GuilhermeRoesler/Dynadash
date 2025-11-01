import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface MetricCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  description?: string;
  trend?: {
    value: string;
    isPositive: boolean;
  };
}

export const MetricCard = ({
  title,
  value,
  icon: Icon,
  description,
  trend,
}: MetricCardProps) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="p-3 bg-gradient-primary rounded-lg">
            <Icon className="h-6 w-6 text-primary-foreground" />
          </div>
          {trend && (
            <span
              className={`text-sm font-medium ${
                trend.isPositive ? "text-success" : "text-destructive"
              }`}
            >
              {trend.value}
            </span>
          )}
        </div>
        <h3 className="text-sm font-medium text-muted-foreground mb-1">
          {title}
        </h3>
        <p className="text-3xl font-bold text-foreground mb-1">{value}</p>
        {description && (
          <p className="text-xs text-muted-foreground">{description}</p>
        )}
      </CardContent>
    </Card>
  );
};

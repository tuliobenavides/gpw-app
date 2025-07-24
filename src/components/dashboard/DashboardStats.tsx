import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, Calendar, Clock, Users } from "lucide-react";

export const DashboardStats = () => {
  const stats = [
    {
      title: "Total Patients",
      value: "2,543",
      icon: Users,
      change: "+12% from last month",
    },
    {
      title: "Appointments Today",
      value: "18",
      icon: Calendar,
      change: "3 upcoming",
    },
    {
      title: "Avg. Wait Time",
      value: "8 min",
      icon: Clock,
      change: "-2 min from last week",
    },
    {
      title: "System Status",
      value: "Healthy",
      icon: Activity,
      change: "All systems operational",
    },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <Card key={stat.title}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              {stat.title}
            </CardTitle>
            <stat.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <p className="text-xs text-muted-foreground">
              {stat.change}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
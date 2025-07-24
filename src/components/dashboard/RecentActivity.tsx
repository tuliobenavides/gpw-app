import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const RecentActivity = () => {
  const activities = [
    {
      id: 1,
      patient: "Sarah Johnson",
      action: "Appointment scheduled",
      time: "10 minutes ago",
      status: "confirmed",
    },
    {
      id: 2,
      patient: "Michael Chen",
      action: "Lab results uploaded",
      time: "25 minutes ago",
      status: "review",
    },
    {
      id: 3,
      patient: "Emma Davis",
      action: "Prescription refilled",
      time: "1 hour ago",
      status: "completed",
    },
    {
      id: 4,
      patient: "David Wilson",
      action: "Follow-up required",
      time: "2 hours ago",
      status: "pending",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "confirmed":
        return "default";
      case "review":
        return "secondary";
      case "completed":
        return "outline";
      case "pending":
        return "destructive";
      default:
        return "default";
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-center justify-between space-x-4">
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">
                  {activity.patient}
                </p>
                <p className="text-sm text-muted-foreground">
                  {activity.action}
                </p>
              </div>
              <div className="flex flex-col items-end space-y-1">
                <Badge variant={getStatusColor(activity.status)}>
                  {activity.status}
                </Badge>
                <p className="text-xs text-muted-foreground">
                  {activity.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
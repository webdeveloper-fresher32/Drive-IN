import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Car } from "@/types/dashboard";
import { calculateStats } from "@/utils/dashboard";

interface StatsCardsProps {
  cars: Car[];
  filteredCars: Car[];
  statusFilter: string;
}

export function StatsCards({
  cars,
  filteredCars,
  statusFilter,
}: StatsCardsProps) {
  const allStats = calculateStats(cars);
  const filteredStats = calculateStats(filteredCars);

  const cards = [
    {
      title: "Total Cars",
      value: statusFilter !== "all" ? filteredStats.total : allStats.total,
      totalValue: allStats.total,
      isActive: statusFilter === "all" || statusFilter === "",
      color: "text-slate-50",
    },
    {
      title: "Approved",
      value:
        statusFilter !== "all" ? filteredStats.approved : allStats.approved,
      totalValue: allStats.approved,
      isActive: statusFilter === "approved",
      color: "text-green-600",
      ringColor: "ring-green-500",
    },
    {
      title: "Pending",
      value: statusFilter !== "all" ? filteredStats.pending : allStats.pending,
      totalValue: allStats.pending,
      isActive: statusFilter === "pending",
      color: "text-yellow-600",
      ringColor: "ring-yellow-500",
    },
    {
      title: "Rejected",
      value:
        statusFilter !== "all" ? filteredStats.rejected : allStats.rejected,
      totalValue: allStats.rejected,
      isActive: statusFilter === "rejected",
      color: "text-red-600",
      ringColor: "ring-red-500",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
      {cards.map((card, index) => (
        <Card
          key={index}
          className={`
            ${card.isActive && card.ringColor ? `ring-2 ${card.ringColor}` : ""}
            ${!card.isActive && statusFilter !== "all" ? "opacity-60" : ""}
          `}
        >
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-400">
              {card.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className={`text-2xl font-bold ${card.color}`}>
              {card.value}
            </div>
            {statusFilter !== "all" && !card.isActive && (
              <div className="text-xs text-muted-foreground">
                of {card.totalValue} total
              </div>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

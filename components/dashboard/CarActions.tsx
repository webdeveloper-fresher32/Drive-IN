import { Button } from "@/components/ui/button";
import { Car } from "@/types/dashboard";

interface CarActionsProps {
  car: Car;
  onApprove: (carId: number) => void;
  onReject: (carId: number) => void;
  onEdit: (car: Car) => void;
  isLoading: boolean;
}

export function CarActions({
  car,
  onApprove,
  onReject,
  onEdit,
  isLoading,
}: CarActionsProps) {
  return (
    <div className="flex items-center gap-1 justify-end text-sm">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => onApprove(car.id)}
        className="h-auto p-1 text-green-600 hover:text-green-700 hover:bg-transparent"
        disabled={car.status === "approved" || isLoading}
      >
        Approve
      </Button>
      <span className="text-gray-300">|</span>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => onReject(car.id)}
        className="h-auto p-1 text-red-600 hover:text-red-700 hover:bg-transparent"
        disabled={car.status === "rejected" || isLoading}
      >
        Reject
      </Button>
      <span className="text-gray-300">|</span>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => onEdit(car)}
        className="h-auto p-1 text-blue-600 hover:text-blue-700 hover:bg-transparent"
        disabled={isLoading}
      >
        Edit
      </Button>
    </div>
  );
}

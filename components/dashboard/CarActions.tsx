import React, { memo, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Car } from "@/types/dashboard";

interface CarActionsProps {
  car: Car;
  onApprove: (carId: number) => void;
  onReject: (carId: number) => void;
  onEdit: (car: Car) => void;
  isLoading: boolean;
}

export const CarActions = memo(function CarActions({
  car,
  onApprove,
  onReject,
  onEdit,
  isLoading,
}: CarActionsProps) {
  const handleApprove = useCallback(() => {
    onApprove(car.id);
  }, [car.id, onApprove]);

  const handleReject = useCallback(() => {
    onReject(car.id);
  }, [car.id, onReject]);

  const handleEdit = useCallback(() => {
    onEdit(car);
  }, [car, onEdit]);

  return (
    <div className="flex items-center gap-1 justify-end text-sm">
      <Button
        variant="ghost"
        size="sm"
        onClick={handleApprove}
        className="h-auto p-1 text-green-600 hover:text-green-700 hover:bg-transparent"
        disabled={car.status === "approved" || isLoading}
      >
        Approve
      </Button>
      <span className="text-gray-300">|</span>
      <Button
        variant="ghost"
        size="sm"
        onClick={handleReject}
        className="h-auto p-1 text-red-600 hover:text-red-700 hover:bg-transparent"
        disabled={car.status === "rejected" || isLoading}
      >
        Reject
      </Button>
      <span className="text-gray-300">|</span>
      <Button
        variant="ghost"
        size="sm"
        onClick={handleEdit}
        className="h-auto p-1 text-blue-600 hover:text-blue-700 hover:bg-transparent"
        disabled={isLoading}
      >
        Edit
      </Button>
    </div>
  );
});

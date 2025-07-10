import React, { memo } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Car } from "@/types/dashboard";
import { CarActions } from "./CarActions";
import { getStatusVariant, formatDate } from "@/utils/dashboard";

interface CarTableProps {
  cars: Car[];
  startIndex: number;
  endIndex: number;
  totalItems: number;
  isLoading: boolean;
  onApprove: (carId: number) => void;
  onReject: (carId: number) => void;
  onEdit: (car: Car) => void;
}

const CarRow = memo(
  ({
    car,
    isLoading,
    onApprove,
    onReject,
    onEdit,
  }: {
    car: Car;
    isLoading: boolean;
    onApprove: (carId: number) => void;
    onReject: (carId: number) => void;
    onEdit: (car: Car) => void;
  }) => {
    return (
      <TableRow key={car.id} className="hover:bg-muted/50">
        <TableCell className="font-medium">#{car.id}</TableCell>
        <TableCell className="font-semibold">{car.carModel}</TableCell>
        <TableCell>{car.carYear}</TableCell>
        <TableCell>{car.location}</TableCell>
        <TableCell className="font-mono">
          <span className="text-green-600 font-semibold">
            ${car.rentalPricePerDay}
          </span>
        </TableCell>
        <TableCell>
          <Badge variant={getStatusVariant(car.status)} className="capitalize">
            {car.status}
          </Badge>
        </TableCell>
        <TableCell className="text-sm text-gray-600 dark:text-gray-400">
          {car.submittedBy}
        </TableCell>
        <TableCell className="text-right text-sm text-gray-600 dark:text-gray-400">
          {formatDate(car.submittedAt)}
        </TableCell>
        <TableCell className="text-right">
          <CarActions
            car={car}
            onApprove={onApprove}
            onReject={onReject}
            onEdit={onEdit}
            isLoading={isLoading}
          />
        </TableCell>
      </TableRow>
    );
  }
);

CarRow.displayName = "CarRow";

export const CarTable = memo(function CarTable({
  cars,
  startIndex,
  endIndex,
  totalItems,
  isLoading,
  onApprove,
  onReject,
  onEdit,
}: CarTableProps) {
  return (
    <Table>
      <TableCaption>
        Showing {startIndex + 1} to {Math.min(endIndex, totalItems)} of{" "}
        {totalItems} entries
      </TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">ID</TableHead>
          <TableHead>Car Model</TableHead>
          <TableHead>Year</TableHead>
          <TableHead>Location</TableHead>
          <TableHead>Price/Day</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Submitted By</TableHead>
          <TableHead className="text-right">Submitted Date</TableHead>
          <TableHead className="text-left">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {cars.map((car) => (
          <CarRow
            key={car.id}
            car={car}
            isLoading={isLoading}
            onApprove={onApprove}
            onReject={onReject}
            onEdit={onEdit}
          />
        ))}
      </TableBody>
    </Table>
  );
});

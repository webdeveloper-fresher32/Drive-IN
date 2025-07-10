import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Car, QueryParams } from "@/types/dashboard";
import { StatsCards } from "./StatsCards";
import { TableFilters } from "./TableFilters";
import { CarTable } from "./CarTable";
import { CarEditDialog } from "./CarEditDialog";
import { DashboardPagination } from "./DashboardPagination";
import { useDashboardQuery } from "@/hooks/useDashboardQuery";
import { useCarForm } from "@/hooks/useCarForm";

interface CarListingsProps {
  initialCars: Car[];
  carsTotal: number;
  query: QueryParams;
  carForm: ReturnType<typeof useCarForm>;
  onApprove: (carId: number) => void;
  onReject: (carId: number) => void;
  onSaveEdit: () => void;
}

export function CarListings({
  initialCars,
  carsTotal,
  query,
  carForm,
  onApprove,
  onReject,
  onSaveEdit,
}: CarListingsProps) {
  const { resetPage } = useDashboardQuery();

  const status = query.status || "all";
  const page = parseInt(query.page as string) || 1;
  const limit = parseInt(query.limit as string) || 5;

  const filteredData =
    status === "all"
      ? initialCars
      : initialCars.filter((car) => car.status === status);

  const totalItems = filteredData.length;
  const totalPages = Math.ceil(totalItems / limit);
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const currentItems = filteredData.slice(startIndex, endIndex);

  const handleStatusFilterChange = (value: string) => {
    resetPage({ status: value });
  };

  const handleItemsPerPageChange = (value: string) => {
    resetPage({ limit: value });
  };

  return (
    <div className="space-y-6">
      <StatsCards
        cars={initialCars}
        filteredCars={filteredData}
        statusFilter={status}
      />

      <Card>
        <CardHeader>
          <div className="flex justify-between items-start">
            <div className="space-y-4">
              <CardTitle>Car Inventory</CardTitle>
              <CardDescription>
                A comprehensive list of all cars in your rental fleet
              </CardDescription>
            </div>
            <TableFilters
              statusFilter={status}
              itemsPerPage={limit}
              onStatusChange={handleStatusFilterChange}
              onItemsPerPageChange={handleItemsPerPageChange}
            />
          </div>

          {/* Filter Summary */}
          {status !== "all" && (
            <div className="mt-3 p-3 bg-muted/50 rounded-md">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">
                  Showing {status} listings: {totalItems} result
                  {totalItems !== 1 ? "s" : ""}
                </span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleStatusFilterChange("all")}
                  className="h-auto p-1 text-xs text-blue-600 hover:text-blue-700"
                >
                  Clear filter
                </Button>
              </div>
            </div>
          )}
        </CardHeader>

        <CardContent>
          <CarTable
            cars={currentItems}
            startIndex={startIndex}
            endIndex={endIndex}
            totalItems={totalItems}
            isLoading={carForm.isLoading}
            onApprove={onApprove}
            onReject={onReject}
            onEdit={carForm.openEditDialog}
          />

          {totalPages > 1 && (
            <DashboardPagination
              currentPage={page}
              totalPages={totalPages}
              queryKey="page"
            />
          )}
        </CardContent>
      </Card>

      <CarEditDialog
        isOpen={carForm.isEditDialogOpen}
        isLoading={carForm.isLoading}
        formData={carForm.formData}
        onClose={carForm.closeEditDialog}
        onSave={onSaveEdit}
        onFieldChange={carForm.updateFormField}
      />
    </div>
  );
}

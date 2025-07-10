import { useState } from "react";
import { useSession } from "next-auth/react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DashboardProps } from "@/types/dashboard";
import { withAuth } from "@/components/withAuth";
import { useFeedback } from "@/contexts/FeedbackContext";
import { useDashboardQuery } from "@/hooks/useDashboardQuery";
import { useCarForm } from "@/hooks/useCarForm";
import { DashboardHeader } from "@/components/layout/DashboardHeader";
import { CarListings } from "./CarListings";
import { AuditTrail } from "./AuditTrail";

function Dashboard({
  initialCars,
  initialAuditLogs,
  carsTotal,
  auditTotal,
}: DashboardProps) {
  const { data: session } = useSession();
  const { addMessage } = useFeedback();
  const { query, router } = useDashboardQuery();
  const carForm = useCarForm();
  const [activeTab, setActiveTab] = useState("listings");

  const handleApprove = async (carId: number) => {
    carForm.setIsLoading(true);
    try {
      const response = await fetch(`/api/cars/${carId}/approve`, {
        method: "POST",
      });

      if (response.ok) {
        addMessage({
          type: "success",
          title: "Car Approved",
          description: "The car listing has been successfully approved.",
        });
        router.reload();
      } else {
        addMessage({
          type: "error",
          title: "Approval Failed",
          description: "Failed to approve the car listing. Please try again.",
        });
      }
    } catch (error) {
      addMessage({
        type: "error",
        title: "Error",
        description: "An unexpected error occurred while approving the car.",
      });
    } finally {
      carForm.setIsLoading(false);
    }
  };

  const handleReject = async (carId: number) => {
    carForm.setIsLoading(true);
    try {
      const response = await fetch(`/api/cars/${carId}/reject`, {
        method: "POST",
      });

      if (response.ok) {
        addMessage({
          type: "success",
          title: "Car Rejected",
          description: "The car listing has been rejected.",
        });
        router.reload();
      } else {
        addMessage({
          type: "error",
          title: "Rejection Failed",
          description: "Failed to reject the car listing. Please try again.",
        });
      }
    } catch (error) {
      addMessage({
        type: "error",
        title: "Error",
        description: "An unexpected error occurred while rejecting the car.",
      });
    } finally {
      carForm.setIsLoading(false);
    }
  };

  const handleSaveEdit = async () => {
    if (!carForm.editingCar) return;

    carForm.setIsLoading(true);
    try {
      const updatedData = {
        carModel: carForm.formData.carModel,
        carYear: parseInt(carForm.formData.carYear),
        rentalPricePerDay: parseInt(carForm.formData.rentalPricePerDay),
        location: carForm.formData.location,
        status: carForm.formData.status,
      };

      const response = await fetch(`/api/cars/${carForm.editingCar.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedData),
      });

      if (response.ok) {
        addMessage({
          type: "success",
          title: "Car Updated",
          description: "The car listing has been successfully updated.",
        });
        carForm.closeEditDialog();
        router.reload();
      } else {
        addMessage({
          type: "error",
          title: "Update Failed",
          description: "Failed to update the car listing. Please try again.",
        });
      }
    } catch (error) {
      addMessage({
        type: "error",
        title: "Error",
        description: "An unexpected error occurred while updating the car.",
      });
    } finally {
      carForm.setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto py-8 px-4 space-y-6">
      <DashboardHeader />

      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-2">
          Car Rental Dashboard
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Manage and monitor your car rental inventory
        </p>
      </div>

      <Tabs
        value={activeTab}
        onValueChange={setActiveTab}
        className="space-y-6"
      >
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="listings">Car Listings</TabsTrigger>
          <TabsTrigger value="audit">Audit Trail</TabsTrigger>
        </TabsList>

        <TabsContent value="listings">
          <CarListings
            initialCars={initialCars}
            carsTotal={carsTotal}
            query={query}
            carForm={carForm}
            onApprove={handleApprove}
            onReject={handleReject}
            onSaveEdit={handleSaveEdit}
          />
        </TabsContent>

        <TabsContent value="audit">
          <AuditTrail
            initialAuditLogs={initialAuditLogs}
            auditTotal={auditTotal}
            query={query}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default withAuth(Dashboard);

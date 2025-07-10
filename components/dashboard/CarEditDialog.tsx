import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CarFormData } from "@/types/dashboard";

interface CarEditDialogProps {
  isOpen: boolean;
  isLoading: boolean;
  formData: CarFormData;
  onClose: () => void;
  onSave: () => void;
  onFieldChange: (field: keyof CarFormData, value: string) => void;
}

export function CarEditDialog({
  isOpen,
  isLoading,
  formData,
  onClose,
  onSave,
  onFieldChange,
}: CarEditDialogProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Car Listing</DialogTitle>
          <DialogDescription>
            Make changes to the car listing details below.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="carModel" className="text-right">
              Car Model
            </Label>
            <Input
              id="carModel"
              value={formData.carModel}
              onChange={(e) => onFieldChange("carModel", e.target.value)}
              className="col-span-3"
              disabled={isLoading}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="carYear" className="text-right">
              Year
            </Label>
            <Input
              id="carYear"
              type="number"
              value={formData.carYear}
              onChange={(e) => onFieldChange("carYear", e.target.value)}
              className="col-span-3"
              disabled={isLoading}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="rentalPrice" className="text-right">
              Price/Day
            </Label>
            <Input
              id="rentalPrice"
              type="number"
              value={formData.rentalPricePerDay}
              onChange={(e) =>
                onFieldChange("rentalPricePerDay", e.target.value)
              }
              className="col-span-3"
              disabled={isLoading}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="location" className="text-right">
              Location
            </Label>
            <Input
              id="location"
              value={formData.location}
              onChange={(e) => onFieldChange("location", e.target.value)}
              className="col-span-3"
              disabled={isLoading}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="status" className="text-right">
              Status
            </Label>
            <Select
              value={formData.status}
              onValueChange={(value) => onFieldChange("status", value)}
              disabled={isLoading}
            >
              <SelectTrigger className="col-span-3">
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="approved">Approved</SelectItem>
                <SelectItem value="rejected">Rejected</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={onClose} disabled={isLoading}>
            Cancel
          </Button>
          <Button onClick={onSave} disabled={isLoading}>
            {isLoading ? "Saving..." : "Save Changes"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

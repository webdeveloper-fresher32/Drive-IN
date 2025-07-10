import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface TableFiltersProps {
  statusFilter: string;
  itemsPerPage: number;
  onStatusChange: (value: string) => void;
  onItemsPerPageChange: (value: string) => void;
}

export function TableFilters({
  statusFilter,
  itemsPerPage,
  onStatusChange,
  onItemsPerPageChange,
}: TableFiltersProps) {
  return (
    <div className="flex items-center gap-4">
      {/* Status Filter */}
      <div className="flex items-center gap-2">
        <Label htmlFor="statusFilter" className="text-sm whitespace-nowrap">
          Filter by status:
        </Label>
        <Select value={statusFilter} onValueChange={onStatusChange}>
          <SelectTrigger className="w-32">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="approved">Approved</SelectItem>
            <SelectItem value="pending">Pending</SelectItem>
            <SelectItem value="rejected">Rejected</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Items per page */}
      <div className="flex items-center gap-2">
        <Label htmlFor="itemsPerPage" className="text-sm whitespace-nowrap">
          Show:
        </Label>
        <Select
          value={itemsPerPage.toString()}
          onValueChange={onItemsPerPageChange}
        >
          <SelectTrigger className="w-20">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="5">5</SelectItem>
            <SelectItem value="10">10</SelectItem>
            <SelectItem value="25">25</SelectItem>
            <SelectItem value="50">50</SelectItem>
          </SelectContent>
        </Select>
        <span className="text-sm text-muted-foreground">entries</span>
      </div>
    </div>
  );
}

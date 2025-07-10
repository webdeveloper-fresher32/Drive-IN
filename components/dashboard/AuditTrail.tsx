import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { AuditLog, QueryParams } from "@/types/dashboard";
import { AuditTable } from "./AuditTable";
import { DashboardPagination } from "./DashboardPagination";
import { useDashboardQuery } from "@/hooks/useDashboardQuery";

interface AuditTrailProps {
  initialAuditLogs: AuditLog[];
  auditTotal: number;
  query: QueryParams;
}

export function AuditTrail({
  initialAuditLogs,
  auditTotal,
  query,
}: AuditTrailProps) {
  const { resetPage } = useDashboardQuery();

  const auditAction = query.auditAction || "all";
  const auditPage = parseInt(query.auditPage as string) || 1;
  const auditLimit = parseInt(query.auditLimit as string) || 10;

  const filteredLogs =
    auditAction === "all"
      ? initialAuditLogs
      : initialAuditLogs.filter((log) => log.action === auditAction);

  const auditTotalItems = filteredLogs.length;
  const auditTotalPages = Math.ceil(auditTotalItems / auditLimit);
  const auditStartIndex = (auditPage - 1) * auditLimit;
  const auditEndIndex = auditStartIndex + auditLimit;
  const currentAuditItems = filteredLogs.slice(auditStartIndex, auditEndIndex);

  const handleAuditActionFilterChange = (value: string) => {
    resetPage({ auditAction: value, auditPage: "1" });
  };

  const handleAuditItemsPerPageChange = (value: string) => {
    resetPage({ auditLimit: value, auditPage: "1" });
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle>Audit Trail</CardTitle>
            <CardDescription>
              Track all administrative actions performed on car listings
            </CardDescription>
          </div>
          <div className="flex items-center gap-4">
            {/* Action Filter */}
            <div className="flex items-center gap-2">
              <Label
                htmlFor="auditActionFilter"
                className="text-sm whitespace-nowrap"
              >
                Filter by action:
              </Label>
              <Select
                value={auditAction}
                onValueChange={handleAuditActionFilterChange}
              >
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Actions</SelectItem>
                  <SelectItem value="approve">Approve</SelectItem>
                  <SelectItem value="reject">Reject</SelectItem>
                  <SelectItem value="edit">Edit</SelectItem>
                  <SelectItem value="create">Create</SelectItem>
                  <SelectItem value="delete">Delete</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Items per page */}
            <div className="flex items-center gap-2">
              <Label
                htmlFor="auditItemsPerPage"
                className="text-sm whitespace-nowrap"
              >
                Show:
              </Label>
              <Select
                value={auditLimit.toString()}
                onValueChange={handleAuditItemsPerPageChange}
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
        </div>

        {/* Filter Summary */}
        {auditAction !== "all" && (
          <div className="mt-3 p-3 bg-muted/50 rounded-md">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">
                Showing {auditAction} actions: {auditTotalItems} result
                {auditTotalItems !== 1 ? "s" : ""}
              </span>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleAuditActionFilterChange("all")}
                className="h-auto p-1 text-xs text-blue-600 hover:text-blue-700"
              >
                Clear filter
              </Button>
            </div>
          </div>
        )}
      </CardHeader>

      <CardContent>
        <AuditTable
          auditLogs={currentAuditItems}
          auditCurrentPage={auditPage}
          auditItemsPerPage={auditLimit}
          auditTotal={auditTotalItems}
        />

        {auditTotalPages > 1 && (
          <DashboardPagination
            currentPage={auditPage}
            totalPages={auditTotalPages}
            queryKey="auditPage"
          />
        )}
      </CardContent>
    </Card>
  );
}

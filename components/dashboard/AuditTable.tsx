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
import { AuditLog } from "@/types/dashboard";
import {
  getActionBadgeVariant,
  formatDateTime,
  formatDataChanges,
} from "@/utils/dashboard";

interface AuditTableProps {
  auditLogs: AuditLog[];
  auditCurrentPage: number;
  auditItemsPerPage: number;
  auditTotal: number;
}

export function AuditTable({
  auditLogs,
  auditCurrentPage,
  auditItemsPerPage,
  auditTotal,
}: AuditTableProps) {
  return (
    <Table>
      <TableCaption>
        Showing {(auditCurrentPage - 1) * auditItemsPerPage + 1} to{" "}
        {Math.min(auditCurrentPage * auditItemsPerPage, auditTotal)} of{" "}
        {auditTotal} audit entries
      </TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Timestamp</TableHead>
          <TableHead>Admin</TableHead>
          <TableHead>Action</TableHead>
          <TableHead>Target</TableHead>
          <TableHead>Changes</TableHead>
          <TableHead>IP Address</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {auditLogs.map((log) => (
          <TableRow key={log.id} className="hover:bg-muted/50">
            <TableCell className="text-sm">
              {formatDateTime(log.timestamp)}
            </TableCell>
            <TableCell>
              <div>
                <div className="font-medium">{log.adminName}</div>
                <div className="text-xs text-muted-foreground">
                  {log.adminEmail}
                </div>
              </div>
            </TableCell>
            <TableCell>
              <Badge
                variant={getActionBadgeVariant(log.action)}
                className="capitalize"
              >
                {log.action}
              </Badge>
            </TableCell>
            <TableCell>
              <div>
                <div className="font-medium">{log.targetName}</div>
                <div className="text-xs text-muted-foreground">
                  ID: {log.targetId}
                </div>
              </div>
            </TableCell>
            <TableCell className="max-w-xs">
              <div
                className="text-sm text-muted-foreground truncate"
                title={formatDataChanges(log.previousData, log.newData)}
              >
                {formatDataChanges(log.previousData, log.newData)}
              </div>
            </TableCell>
            <TableCell className="text-sm text-muted-foreground">
              {log.ipAddress}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

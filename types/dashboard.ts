export interface Car {
  id: number;
  carModel: string;
  carYear: number;
  rentalPricePerDay: number;
  location: string;
  status: 'pending' | 'approved' | 'rejected';
  submittedBy: string;
  submittedAt: string;
}

export interface AuditLog {
  id: number;
  adminEmail: string;
  adminName: string;
  action: 'approve' | 'reject' | 'edit' | 'create' | 'delete';
  targetType: 'car_listing';
  targetId: number;
  targetName: string;
  previousData?: any;
  newData?: any;
  timestamp: string;
  ipAddress: string;
  userAgent: string;
}

export interface DashboardProps {
  initialCars: Car[];
  initialAuditLogs: AuditLog[];
  carsTotal: number;
  auditTotal: number;
}

export interface CarFormData {
  carModel: string;
  carYear: string;
  rentalPricePerDay: string;
  location: string;
  status: string;
}

export interface QueryParams {
  status?: string;
  page?: string;
  limit?: string;
  auditAction?: string;
  auditPage?: string;
  auditLimit?: string;
}

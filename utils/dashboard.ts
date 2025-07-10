import { Car } from '@/types/dashboard';

export const getStatusVariant = (status: string) => {
  switch (status) {
    case 'approved':
      return 'default';
    case 'pending':
      return 'secondary';
    case 'rejected':
      return 'destructive';
    default:
      return 'outline';
  }
};

export const getActionBadgeVariant = (action: string) => {
  switch (action) {
    case 'approve':
      return 'default';
    case 'reject':
      return 'destructive';
    case 'edit':
      return 'secondary';
    case 'create':
      return 'outline';
    case 'delete':
      return 'destructive';
    default:
      return 'outline';
  }
};

export const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
};

export const formatDateTime = (dateString: string) => {
  return new Date(dateString).toLocaleString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
};

export const formatDataChanges = (previousData: any, newData: any) => {
  if (!previousData || !newData) return 'N/A';

  const changes = [];
  for (const key in newData) {
    if (previousData[key] !== newData[key]) {
      changes.push(`${key}: ${previousData[key]} → ${newData[key]}`);
    }
  }
  return changes.length > 0 ? changes.join(', ') : 'No changes';
};

export const calculateStats = (cars: Car[]) => {
  const total = cars.length;
  const approved = cars.filter(car => car.status === 'approved').length;
  const pending = cars.filter(car => car.status === 'pending').length;
  const rejected = cars.filter(car => car.status === 'rejected').length;

  return { total, approved, pending, rejected };
};

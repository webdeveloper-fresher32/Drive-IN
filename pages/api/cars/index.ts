import type { NextApiRequest, NextApiResponse } from 'next';
import { SampleCarsDataSet, SampleAuditLogs } from '../../../db/mockAPI';
import { Car, AuditLog } from '../../../types/dashboard';

let carsData: Car[] = [...SampleCarsDataSet];
let auditLogs: AuditLog[] = [...SampleAuditLogs];

function createAuditLog(
  action: 'approve' | 'reject' | 'edit' | 'create' | 'delete',
  carId: number,
  carName: string,
  adminEmail: string = 'api-admin@carrental.com',
  adminName: string = 'API Admin',
  previousData?: any,
  newData?: any,
  req?: NextApiRequest
) {
  const newLog: AuditLog = {
    id: auditLogs.length + 1,
    adminEmail,
    adminName,
    action,
    targetType: 'car_listing',
    targetId: carId,
    targetName: carName,
    previousData,
    newData,
    timestamp: new Date().toISOString(),
    ipAddress: req?.headers['x-forwarded-for'] as string || req?.connection?.remoteAddress || '127.0.0.1',
    userAgent: req?.headers['user-agent'] || 'Unknown'
  };
  auditLogs.unshift(newLog);
  return newLog;
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      const { status, page = 1, limit = 10 } = req.query;
      
      let filteredCars = carsData;
      if (status && status !== 'all') {
        filteredCars = carsData.filter(car => car.status === status);
      }
      
      const pageNum = parseInt(page as string);
      const limitNum = parseInt(limit as string);
      const startIndex = (pageNum - 1) * limitNum;
      const endIndex = startIndex + limitNum;
      const paginatedCars = filteredCars.slice(startIndex, endIndex);
      
      res.status(200).json({
        cars: paginatedCars,
        total: filteredCars.length,
        page: pageNum,
        limit: limitNum,
        totalPages: Math.ceil(filteredCars.length / limitNum)
      });
      break;
      
    case 'POST':
      const newCar: Car = {
        id: Math.max(...carsData.map(c => c.id)) + 1,
        carModel: req.body.carModel,
        carYear: req.body.carYear,
        rentalPricePerDay: req.body.rentalPricePerDay,
        location: req.body.location,
        status: req.body.status || 'pending',
        submittedBy: req.body.submittedBy,
        submittedAt: new Date().toISOString()
      };
      
      carsData.push(newCar);
      createAuditLog('create', newCar.id, newCar.carModel, 'admin@carrental.com', 'Admin User', null, newCar, req);
      
      res.status(201).json(newCar);
      break;
      
    default:
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

export { carsData, auditLogs, createAuditLog };

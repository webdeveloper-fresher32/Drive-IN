import type { NextApiRequest, NextApiResponse } from 'next';
import { carsData, auditLogs, createAuditLog } from './index';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  const carId = parseInt(id as string);
  
  const carIndex = carsData.findIndex(car => car.id === carId);
  
  if (carIndex === -1) {
    return res.status(404).json({ error: 'Car not found' });
  }
  
  const car = carsData[carIndex];
  
  switch (req.method) {
    case 'GET':
      res.status(200).json(car);
      break;
      
    case 'PUT':
      const previousData = { ...car };
      const updatedCar = {
        ...car,
        ...req.body,
        id: carId 
      };
      
      carsData[carIndex] = updatedCar;
      createAuditLog('edit', carId, car.carModel, 'admin@carrental.com', 'Admin User', previousData, updatedCar, req);
      
      res.status(200).json(updatedCar);
      break;
      
    case 'DELETE':
      const deletedCar = carsData.splice(carIndex, 1)[0];
      createAuditLog('delete', carId, car.carModel, 'admin@carrental.com', 'Admin User', deletedCar, null, req);
      
      res.status(200).json({ message: 'Car deleted successfully' });
      break;
      
    default:
      res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

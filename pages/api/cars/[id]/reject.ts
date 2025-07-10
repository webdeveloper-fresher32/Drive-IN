import type { NextApiRequest, NextApiResponse } from 'next';
import { carsData, createAuditLog } from '../index';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
  
  const { id } = req.query;
  const carId = parseInt(id as string);
  
  const carIndex = carsData.findIndex(car => car.id === carId);
  
  if (carIndex === -1) {
    return res.status(404).json({ error: 'Car not found' });
  }
  
  const car = carsData[carIndex];
  const previousStatus = car.status;
  
  carsData[carIndex] = {
    ...car,
    status: 'rejected'
  };
  
  createAuditLog(
    'reject',
    carId,
    car.carModel,
    'admin@carrental.com',
    'Admin User',
    { status: previousStatus },
    { status: 'rejected' },
    req
  );
  
  res.status(200).json({
    message: 'Car rejected successfully',
    car: carsData[carIndex]
  });
}

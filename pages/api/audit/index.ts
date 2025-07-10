import type { NextApiRequest, NextApiResponse } from 'next';
import { auditLogs } from '../cars/index';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
  
  const { action, page = 1, limit = 10 } = req.query;
  
  let filteredLogs = auditLogs;
  if (action && action !== 'all') {
    filteredLogs = auditLogs.filter(log => log.action === action);
  }
  
  const pageNum = parseInt(page as string);
  const limitNum = parseInt(limit as string);
  const startIndex = (pageNum - 1) * limitNum;
  const endIndex = startIndex + limitNum;
  const paginatedLogs = filteredLogs.slice(startIndex, endIndex);
  
  res.status(200).json({
    logs: paginatedLogs,
    total: filteredLogs.length,
    page: pageNum,
    limit: limitNum,
    totalPages: Math.ceil(filteredLogs.length / limitNum)
  });
}

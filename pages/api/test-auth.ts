import { NextApiRequest, NextApiResponse } from 'next';
import { getServerSession } from 'next-auth/next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { email, password } = req.body;

  if (email && password === 'demo123') {
    const demoUsers = [
      { id: '1', email: 'admin@carrental.com', name: 'Admin User' },
      { id: '2', email: 'manager@carrental.com', name: 'Manager User' }
    ];

    const user = demoUsers.find(u => u.email === email);
    if (user) {
      return res.status(200).json({ success: true, user });
    }
  }

  return res.status(401).json({ success: false, message: 'Invalid credentials' });
}

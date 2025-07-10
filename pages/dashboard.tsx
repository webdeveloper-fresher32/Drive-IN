import { GetServerSideProps } from "next";
import { FeedbackProvider } from "@/contexts/FeedbackContext";
import Dashboard from "@/components/dashboard/Dashboard";
import { ToastContainer } from "@/components/Toast";
import { Car, AuditLog } from "@/types/dashboard";

interface DashboardPageProps {
  initialCars: Car[];
  initialAuditLogs: AuditLog[];
  carsTotal: number;
  auditTotal: number;
}

export default function DashboardPage({
  initialCars,
  initialAuditLogs,
  carsTotal,
  auditTotal,
}: DashboardPageProps) {
  return (
    <FeedbackProvider>
      <Dashboard
        initialCars={initialCars}
        initialAuditLogs={initialAuditLogs}
        carsTotal={carsTotal}
        auditTotal={auditTotal}
      />
      <ToastContainer />
    </FeedbackProvider>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const {
    page = "1",
    search = "",
    status = "",
    sortBy = "createdAt",
    sortOrder = "desc",
  } = context.query;
  const { auditPage = "1" } = context.query;

  const pageNum = parseInt(page as string, 10);
  const auditPageNum = parseInt(auditPage as string, 10);
  const limit = 10;

  try {
    const carsResponse = await fetch(
      `${process.env.NEXTAUTH_URL}/api/cars?page=${pageNum}&limit=${limit}&search=${search}&status=${status}&sortBy=${sortBy}&sortOrder=${sortOrder}`
    );
    const carsData = await carsResponse.json();

    const auditResponse = await fetch(
      `${process.env.NEXTAUTH_URL}/api/audit?page=${auditPageNum}&limit=${limit}`
    );
    const auditData = await auditResponse.json();

    return {
      props: {
        initialCars: carsData.cars || [],
        initialAuditLogs: auditData.logs || [],
        carsTotal: carsData.total || 0,
        auditTotal: auditData.total || 0,
      },
    };
  } catch (error) {
    console.error("Error fetching dashboard data:", error);
    return {
      props: {
        initialCars: [],
        initialAuditLogs: [],
        carsTotal: 0,
        auditTotal: 0,
      },
    };
  }
};

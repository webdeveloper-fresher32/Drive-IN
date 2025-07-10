import { useEffect } from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import PageHead from "@/components/PageHead";

export default function HomePage() {
  const router = useRouter();
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === "loading") return;

    if (session) {
      router.replace("/dashboard");
    } else {
      router.replace("/auth/signin");
    }
  }, [session, status, router]);

  return (
    <>
      <PageHead
        title="Car Rental Pro"
        description="Professional car rental management platform with modern dashboard and analytics"
        canonicalUrl="/"
      />
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900 mx-auto"></div>
          <p className="mt-4 text-gray-600">Redirecting...</p>
        </div>
      </div>
    </>
  );
}

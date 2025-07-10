import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, ComponentType } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface WithAuthProps {
  [key: string]: any;
}

export function withAuth<T extends WithAuthProps>(
  WrappedComponent: ComponentType<T>
) {
  const AuthenticatedComponent = (props: T) => {
    const { data: session, status } = useSession();
    const router = useRouter();

    useEffect(() => {
      if (status === "loading") return;

      if (!session) {
        router.push(
          `/auth/signin?callbackUrl=${encodeURIComponent(router.asPath)}`
        );
      }
    }, [session, status, router]);

    if (status === "loading") {
      return (
        <div className="min-h-screen flex items-center justify-center">
          <Card className="w-full max-w-md">
            <CardHeader>
              <CardTitle className="text-center">Loading...</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 dark:border-gray-100"></div>
              </div>
            </CardContent>
          </Card>
        </div>
      );
    }

    if (!session) {
      return null;
    }

    return <WrappedComponent {...props} />;
  };

  AuthenticatedComponent.displayName = `withAuth(${
    WrappedComponent.displayName || WrappedComponent.name
  })`;

  return AuthenticatedComponent;
}

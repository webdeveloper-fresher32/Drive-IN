import { useSession, signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { LogOut, User } from "lucide-react";

export function DashboardHeader() {
  const { data: session } = useSession();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <img src="/logo.svg" alt="Logo" className="h-[25px] w-auto" />
          </div>
        </div>
        <div className="flex items-center gap-4">
          {session?.user && (
            <div className="flex items-center gap-2 text-sm">
              <User className="h-4 w-4" />
              <span className="font-medium">
                {session.user.name || session.user.email}
              </span>
            </div>
          )}
          <ThemeToggle />
          <Button
            variant="outline"
            size="sm"
            onClick={() => signOut({ callbackUrl: "/auth/signin" })}
            className="gap-2"
          >
            <LogOut className="h-4 w-4" />
            Sign Out
          </Button>
        </div>
      </div>
    </header>
  );
}

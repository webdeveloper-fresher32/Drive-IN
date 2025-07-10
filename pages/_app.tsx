import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { FeedbackProvider } from "@/contexts/FeedbackContext";
import { ToastContainer } from "@/components/Toast";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <ThemeProvider>
        <FeedbackProvider>
          <Component {...pageProps} />
          <ToastContainer />
        </FeedbackProvider>
      </ThemeProvider>
    </SessionProvider>
  );
}

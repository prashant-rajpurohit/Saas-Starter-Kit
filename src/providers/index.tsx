import { ThemeProvider } from "./theme-provider";
import QueryProvider from "./query-client";
import { AuthProvider } from "./auth-provider";

export default function Providers({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <QueryProvider>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <AuthProvider>{children}</AuthProvider>
        </ThemeProvider>
      </QueryProvider>
    </>
  );
}

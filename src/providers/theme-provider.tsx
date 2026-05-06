import { ThemeProvider as NextThemeProvider } from "next-themes";
export function ThemeProvider({
  children,
  ...props
}: React.PropsWithChildren<
  React.ComponentProps<typeof NextThemeProvider>
>) {
  return <NextThemeProvider {...props}>{children}</NextThemeProvider>;
}

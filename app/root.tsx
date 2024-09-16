import { Outlet, Scripts, ScrollRestoration, Links } from "@remix-run/react";
import { Header } from "./components/header";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Links />
      </head>
      <body style={{ backgroundColor: "gray" }}>
        <MantineProvider>
          <Header />
          <ScrollRestoration />
          <Scripts />
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

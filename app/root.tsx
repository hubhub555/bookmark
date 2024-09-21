import {
  Outlet,
  Scripts,
  ScrollRestoration,
  Links,
  useLoaderData,
} from "@remix-run/react";
import type { LoaderFunction, LoaderFunctionArgs } from "@remix-run/node";
import { Header } from "./components/header";
import { MantineProvider } from "@mantine/core";
import { authenticator } from "~/services/auth.server";
import "@mantine/core/styles.css";

export const loader: LoaderFunction = async ({
  request,
}: LoaderFunctionArgs) => {
  const isLogin = await authenticator.isAuthenticated(request);
  return isLogin;
};

export function Layout({ children }: { children: React.ReactNode }) {
  const isLogin = useLoaderData<typeof loader>();
  return (
    <html lang="ja">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Links />
      </head>
      <body style={{ backgroundColor: "white" }}>
        <MantineProvider>
          <Header auth={isLogin} />
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

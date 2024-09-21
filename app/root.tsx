import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import type { LoaderFunction, LoaderFunctionArgs } from "@remix-run/node";
import {
  Links,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import { authenticator } from "~/services/auth.server";
import { Header } from "./components/Header";

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

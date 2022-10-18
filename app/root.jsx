import { json } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  Link
} from "@remix-run/react";

import { getEnv } from "../env.server";
import Navigation from "~/components/Navigation";
import styles from "./styles/app.css";

export const meta = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});

export function loader() {
  return json({
    ENV: getEnv(),
  });
}

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

/* 
  cupcake 
  dracula
  halloween
*/

export default function App() {
  const data = useLoaderData();
  return (
    <html lang="en" className="h-full">
      <head>
        <Meta />
        <Links />
      </head>

      <body className="h-full w-full overflow-hidden">
        <Navigation>
          <Link
            to={"/"}
            className="focus:text-yellow-500 font-medium border-b-2 border-transparent focus:border-yellow-500 flex px-5 items-center py-4 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none transition duration-150 ease-in-out"
          >
            Home
          </Link>
          <Link
            to={"/dashboard"}
            className="focus:text-yellow-500 font-medium border-b-2 border-transparent focus:border-yellow-500 flex px-5 items-center py-4 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none transition duration-150 ease-in-out"
          >
            Dashboard
          </Link>
        </Navigation>
        <Outlet />
        <ScrollRestoration />

        <Scripts />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.ENV = ${JSON.stringify(data.ENV)}`,
          }}
        />

        <LiveReload />
      </body>
    </html>
  );
}

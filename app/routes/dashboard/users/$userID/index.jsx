import { Link, useLoaderData } from "@remix-run/react";
import { useLocation } from '@remix-run/react';
import { json } from "@remix-run/node";
import { getUserById } from "~/api/users/get-user-by-id.server";
import Navigation from "~/components/Navigation";
import Profile from "~/components/Profile";

export async function loader({ params }) {
  const { userID } = params;
  const response = await getUserById(userID);
  return json({ user: response });
}

export default function UserRoute() {
  const { user } = useLoaderData();
  const { pathname } = useLocation();
  return (
    <div>
      <Profile user={user} />
    </div>
  );
}

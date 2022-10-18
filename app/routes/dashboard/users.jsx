import { Outlet, useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/node";
import { getAllUsers } from "~/api/users/get-all-users.server";
import TwoColumns from "~/components/TwoColumns";
import UsersList from "~/components/UsersList";

export async function loader() {
  const response = await getAllUsers();
  return json({ users: response });
}

export default function DashboardUsersRoute() {
  const { users } = useLoaderData();
  return (
    <TwoColumns leftBg={"bg-gray-600"}>
      <UsersList users={users} />
      <Outlet />
    </TwoColumns>
  );
}

import { Outlet, Link, useLoaderData } from "@remix-run/react";
import Navigation from "~/components/Navigation";

export function loader({ params }) {
  return params;
}

export default function UserRoute() {
  const { userID } = useLoaderData();
  return (
    <div className='h-full'>
      <Navigation bgColor="bg-yellow-500">
        <Link to={`/dashboard/users/${userID}`} className="focus:text-yellow-500 font-medium border-b-2 border-transparent focus:border-yellow-500 flex px-5 items-center py-4 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none transition duration-150 ease-in-out">
          About
        </Link>
        <Link to={"projects"} className="focus:text-yellow-500 font-medium border-b-2 border-transparent focus:border-yellow-500 flex px-5 items-center py-4 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none transition duration-150 ease-in-out">
          Projects
        </Link>
        <Link to={"messages"} className="focus:text-yellow-500 font-medium border-b-2 border-transparent focus:border-yellow-500 flex px-5 items-center py-4 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none transition duration-150 ease-in-out">
          Messages
        </Link>
        <Link to={"notes"} className="focus:text-yellow-500 font-medium border-b-2 border-transparent focus:border-yellow-500 flex px-5 items-center py-4 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none transition duration-150 ease-in-out">
          Notes
        </Link>
      </Navigation>
      <Outlet />
    </div>
  );
}

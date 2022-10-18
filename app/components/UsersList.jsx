import { Link } from "@remix-run/react";
export default function UsersList({ users = [] }) {
  return (
    <ul className="divide-y divide-gray-700">
      {users.map((person) => {
        const { id, avatar, first_name, last_name, email } = person;
        const fullName = `${first_name} ${last_name}`;
        return (
          <li key={id} className="p-4 hover:bg-gray-800">
            <Link
              to={`/dashboard/users/${id}`}
              className="flex"
              prefetch="intent"
            >
              <img
                className="h-10 w-10 rounded-full"
                src={avatar}
                alt={fullName}
              />
              <div className="ml-3">
                <p className="text-sm font-medium text-yellow-500 ">
                  {fullName}
                </p>
                <p className="text-sm text-gray-100">{email}</p>
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

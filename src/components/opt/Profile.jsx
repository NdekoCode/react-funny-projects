import React from "react";
import { useFetch, useIncrement } from "../../hooks/useUtils";
const Profile = () => {
  const [count, increnement] = useIncrement(1);
  const [user, userLoading] = useFetch(
    `https://jsonplaceholder.typicode.com/users/${count}`
  );

  return (
    <div className="mt-5 w-full max-w-7xl mx-auto px-3">
      <h1 className="font-bold text-4xl my-3">useMemo</h1>
      <form className="w-full max-w-7xl mx-auto px-3 md:px-0">
        <div className="mb-3">
          <input
            type="search"
            className="text-gray-600 outline-none shadow border w-full rounded-md px-2.5 py-2"
            name="filterText"
            placeholder="Search..."
            id="search"
            defaultValue=""
          />
        </div>
      </form>
      <div className="my-3 flex items-center justify-between">
        <button
          className="px-3 py-2 rounded-lg bg-blue-700 text-white"
          onClick={increnement}
        >
          Increment {count}
        </button>
        <button className="px-3 py-2 rounded-lg bg-gray-900 text-white">
          Changer
        </button>
      </div>
      {userLoading ? (
        <div className="min-h-screen w-full flex items-center justify-center">
          <p>Loading...</p>
        </div>
      ) : (
        <table className="table-auto text-gray-500 w-full text-sm border rounded-lg shadow-md">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr className="border-b">
              <th scope="col" className="py-3 px-6">
                #ID
              </th>
              <th scope="col" className="py-3 px-6">
                Nom
              </th>
              <th scope="col" className="py-3 px-6">
                Pseudo
              </th>
              <th scope="col" className="py-3 px-6">
                Email
              </th>
            </tr>
          </thead>
          <tbody>
            {user && (
              <tr
                className={`${
                  user.id % 2 === 0 ? "bg-gray-50" : "bg-white"
                } border-b text-center`}
              >
                <td
                  scope="row"
                  className="py-4 px-6 font-medium whitespace-nowrap text-gray-900"
                >
                  {user.id}
                </td>
                <td
                  scope="row"
                  className="py-4 px-6 font-medium whitespace-nowrap text-gray-900"
                >
                  {user.name}
                </td>
                <td>{user.username}</td>
                <td>{user.email}</td>
              </tr>
            )}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Profile;

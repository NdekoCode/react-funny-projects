import React, { useEffect, useState } from "react";

const Profile = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const responseData = await response.json();
      if (response.ok) {
        setUsers(responseData);
      }
    })();
  });
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
        <button className="px-3 py-2 rounded-lg bg-blue-600">decrement</button>
        <button className="px-3 py-2 rounded-lg bg-yellow-600">
          increment
        </button>
      </div>
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
          {users.map((user) => (
            <tr className="bg-gray-50 border-b text-center border-b">
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
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Profile;

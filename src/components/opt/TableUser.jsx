import React, { memo } from "react";

const TableUser = memo(({ count, user }) => {
  console.log("render");
  return (
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
              {count}
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
  );
});

export default TableUser;

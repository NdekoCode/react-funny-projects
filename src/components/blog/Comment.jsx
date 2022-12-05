import React from "react";
import { useFetch } from "../../hooks/useUtils";

const Comment = () => {
  const [comments, loading] = useFetch(
    "https://jsonplaceholder.typicode.com/comments?_limit=10"
  );
  if (loading) {
    return "Loading...";
  }
  return (
    <table className="table-auto text-gray-500 w-full text-sm border rounded-lg shadow-md">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50">
        <tr>
          <th scope="col" className="py-3 px-6">
            Name
          </th>
          <th scope="col" className="py-3 px-6">
            Email
          </th>
          <th scope="col" className="py-3 px-6">
            Body
          </th>
        </tr>
      </thead>
      <tbody>
        {comments.map((c, index) => (
          <tr
            key={c.id}
            className={`border-b ${
              index % 2 === 0 ? "bg-gray-50" : "bg-white"
            }`}
          >
            <td
              scope="row"
              className="py-4 px-6 font-medium whitespace-nowrap text-gray-900"
            >
              {c.name}
            </td>
            <td
              scope="row"
              className="py-4 px-6 font-medium whitespace-nowrap text-gray-900"
            >
              {c.email}
            </td>
            <td
              scope="row"
              className="py-4 px-6 font-medium whitespace-nowrap text-gray-900"
            >
              {c.body}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Comment;

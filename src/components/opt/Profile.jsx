import React, { useEffect, useMemo, useState } from "react";
import { useIncrement } from "../../hooks/useUtils";
import TableUser from "./TableUser";
const Profile = () => {
  const [count, increnement] = useIncrement(1);
  const [user, setUser] = useState({});
  const [userLoading, setLoading] = useState(true);
  const [isDark, setIsDark] = useState(false);
  const handleTheme = () => {
    setIsDark((d) => !d);
    document.body.className = theme;
  };
  const theme = isDark ? "dark-theme" : "light-theme";
  const isEnderTen = useMemo(() => count < 10);
  useEffect(() => {
    let controller = new AbortController();
    let signal = controller.signal;
    (async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${count}`,
        { signal: signal }
      );
      const responseData = await response.json();
      console.log("render");
      if (response.ok) {
        setLoading(false);
        setUser(responseData);
      } else {
        setLoading(false);
      }
    })();
    return () => {
      controller.abort();
    };
  }, [count]);

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
        {isEnderTen && (
          <button
            className="px-3 py-2 rounded-lg bg-blue-700 text-white"
            onClick={increnement}
          >
            Increment {count}
          </button>
        )}
        <button
          onClick={handleTheme}
          className="px-3 py-2 rounded-lg bg-gray-900 text-white ml-auto"
        >
          Changer
        </button>
      </div>
      {userLoading ? (
        <div className="min-h-screen w-full flex items-center justify-center">
          <p>Loading...</p>
        </div>
      ) : (
        <TableUser user={user} count={count} />
      )}
    </div>
  );
};

export default Profile;

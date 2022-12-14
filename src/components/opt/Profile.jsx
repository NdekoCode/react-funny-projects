import React, {
  memo,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useIncrement } from "../../hooks/useUtils";
import TableUser from "./TableUser";
const Profile = memo(() => {
  const input = useRef(null);
  const [count, increnement] = useIncrement(1);
  const [user, setUser] = useState({});
  const [userLoading, setLoading] = useState(true);
  const [isDark, setIsDark] = useState(false);
  const theme = useMemo(
    () => (isDark ? "dark-theme" : "light-theme"),
    [isDark]
  );
  const buttonText = useMemo(() =>
    isDark ? (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="ionicon h-4 w-4 fill-current"
        viewBox="0 0 512 512"
      >
        <title>Moon</title>
        <path
          d="M160 136c0-30.62 4.51-61.61 16-88C99.57 81.27 48 159.32 48 248c0 119.29 96.71 216 216 216 88.68 0 166.73-51.57 200-128-26.39 11.49-57.38 16-88 16-119.29 0-216-96.71-216-216z"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={32}
        />
      </svg>
    ) : (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="ionicon h-4 w-4 fill-current"
        viewBox="0 0 512 512"
      >
        <title>Sunny</title>
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeMiterlimit={10}
          strokeWidth={32}
          d="M256 48v48M256 416v48M403.08 108.92l-33.94 33.94M142.86 369.14l-33.94 33.94M464 256h-48M96 256H48M403.08 403.08l-33.94-33.94M142.86 142.86l-33.94-33.94"
        />
        <circle
          cx={256}
          cy={256}
          r={80}
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeMiterlimit={10}
          strokeWidth={32}
        />
      </svg>
    )
  );
  const handleTheme = useCallback(() => {
    setIsDark((d) => !d);
    document.body.className = theme;
  }, [theme]);
  const handleChange = (evt) => {
    const value = evt.target.value;
    console.log(value);
  };
  const isEnderTen = useMemo(() => count < 10, [count]);
  useEffect(() => {
    (async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${count}`
      );
      const responseData = await response.json();
      if (response.ok) {
        setLoading(false);
        setUser(responseData);
      } else {
        setLoading(false);
      }
    })();
  }, [count]);

  return (
    <div className="mt-5 w-full max-w-7xl mx-auto px-3">
      <h1 className="font-bold text-4xl my-3">
        useMemo {input.current?.value}
      </h1>
      <form className="w-full max-w-7xl mx-auto px-3 md:px-0">
        <div className="mb-3">
          <input
            ref={input}
            type="search"
            className="text-gray-600 outline-none shadow border w-full rounded-md px-2.5 py-2"
            name="filterText"
            placeholder="Search..."
            id="search"
            onChange={handleChange}
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
          {buttonText}
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
});

export default Profile;

import { createPortal } from "react-dom";
import { useFetch, useVisible } from "../../hooks/useUtils";
const TodoList = () => {
  const [todos, loading] = useFetch(
    "https://jsonplaceholder.typicode.com/todos?_limit=10"
  );
  const [visible, handleVisible] = useVisible();
  if (loading) {
    return "Loading...";
  }

  return (
    <>
      {visible &&
        createPortal(
          <div className="fade fixed bg-gray-900/75 inset-0 min-h-screen flex items-center justify-center">
            <div className="fadeEnter p-5 border shadow-lg bg-white relative">
              <button
                onClick={handleVisible}
                className="absolute px-1 py-2 bg-red-600 text-white rounded right-1 top-1"
              >
                X
              </button>
              <h2 className="text-4xl font-bold text-gray-600">Hey modal</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex,
                quia eaque sequi voluptates provident nam eligendi.
              </p>
            </div>
          </div>,
          document.body
        )}
      <ul className="list-inside list-disc">
        {todos.map((todo) => (
          <li className="p-2 shadow" key={todo.id}>
            {todo.title}
          </li>
        ))}
      </ul>
      <button
        onClick={handleVisible}
        className="px-2 py-2 rounded-md bg-blue-600 text-gray-50"
      >
        Click me
      </button>
    </>
  );
};
export default TodoList;

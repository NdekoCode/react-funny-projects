import { useFetch } from "../../hooks/useUtils";
const TodoList = () => {
  const [todos, loading] = useFetch(
    "https://jsonplaceholder.typicode.com/todos?_limit=10"
  );
  if (loading) {
    return "Loading...";
  }
  return (
    <ul className="list-inside list-disc">
      {todos.map((todo) => (
        <li className="p-2 shadow" key={todo.id}>
          {todo.title}
        </li>
      ))}
    </ul>
  );
};
export default TodoList;

import { useEffect } from "react";
const TodoList = () => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_limit=10"
      );
      const responseData = await response.json();
      if (response.ok) {
        setTodos(responseData);
      }
    })();
  }, []);
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
};
export default TodoList;

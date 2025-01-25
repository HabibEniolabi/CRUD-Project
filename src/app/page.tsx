import TodoList from "./components/TodoList.js";

export default function Home() {
  return (
    <div className="min-h-screen flex justify-center items-center overflow-y-auto no-scrollbar">
      <TodoList />
    </div>
  );
}

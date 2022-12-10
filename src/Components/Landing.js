import { useState } from "react";
const Landing = () => {
  const [todo, setTodo] = useState([]);
  const [valueTodo, setValueTodo] = useState("");
  const [btn, setBtn] = useState(false);

  const addHandler = (event) => {
    if (event.code === "Enter") {
      setTodo([
        ...todo,
        { todo: event.target.value, done: false, id: todo.length + 1 },
      ]);
      setValueTodo("");
    }
  };

  return (
    <div className="flex max-w-screen-md m-auto flex-col">
      <div>
        <h1 className="text-7xl font-bold"> To Do </h1>

        <div className="flex justify-between mt-4">
          <input
            className="w-full mr-3 rounded-md pl-3"
            type="text"
            value={valueTodo}
            onKeyPress={addHandler}
            onChange={(e) => setValueTodo(e.target.value)}
          />

          <span
            className="bg-white rounded-md cursor-pointer p-2 hover:bg-slate-500 hover:text-white"
            onClick={() => {
              setBtn(true);
            }}
          >
            Add Todo
          </span>
        </div>

        <ul className="mt-5 rounded-md py-6">
          {todo.map((value) => {
            return (
              <li
                className="bg-white w-full flex mb-3 p-3 rounded-md cursor-pointer"
                onClick={() => {
                  const test = todo.filter((f) => {
                    return f.id !== value.id;
                  });
                  setTodo([...test]);
                }}
              >
                {value.todo}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Landing;

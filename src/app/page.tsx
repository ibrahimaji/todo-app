import { TodoList } from "@/components/TodoList";
import { TodoInput } from "@/components/TodoInput";
import { Todo } from "@prisma/client";
import { prisma } from "@/db/utils/prisma";
import { createData } from "./action";

//cara konvensional
async function getTodos(): Promise<Todo[]> {
  const res = await fetch("http://localhost:3000/api/todos", {
    cache: "no-store",
  });
  const data = await res.json();
  return data;
}

export default async function Page() {
  const data = await getTodos();
  console.log(data);
  return (
    <div>
      <TodoList list={data} />
      <TodoInput />
    </div>
  );
}

// export default async function Page() {
//   const data = await prisma.todo.findMany();
//   return (
//     <div>
//       <h1>Todos</h1>
//       <div>
//         {data.map((item) => {
//           return <div key={item.id}>{item.title}</div>;
//         })}
//       </div>
//       <div>
//         <h3>Create Todo</h3>
//         <form action={createData}>
//           <input name="todo" />
//           <button type="submit">Post</button>
//         </form>
//       </div>
//     </div>
//   );
// }

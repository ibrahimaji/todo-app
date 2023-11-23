import { Todo } from "@prisma/client";

interface TodoListProps {
  list: Todo[];
}

export const TodoList: React.FC<TodoListProps> = ({ list }) => {
  return (
    <div>
      <h1>Todos:</h1>
      <div>
        {list.map(({ id, title, done }) => {
          return <div key={id}>{title}</div>;
        })}
      </div>
    </div>
  );
};

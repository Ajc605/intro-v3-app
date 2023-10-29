import { newTodo } from "@/utils/actions";

const NewTodoForm = () => {
  return (
    <div>
      <form action={newTodo}>
        <input
          name="content"
          type="test"
          className="border border-black/25 bg-slate-900"
        />
        <button type="submit">New todo</button>
      </form>
    </div>
  );
};

export default NewTodoForm;

interface Props {
  todo: Todo;
}

export const TodoListItem = ({ todo }: Props) => {
  return (
    <li>
      <label style={{ textDecoration: todo.complete ? 'line-through' : undefined }}>
        <input type="checkbox" checked={todo.complete} /> {todo.text}
      </label>
    </li>
  );
};

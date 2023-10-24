import { Task } from "../Task/Task";

export const ListTasks = ({ tasks,onDelete }) => {
  
  return (
    <>
      <ul style={{paddingInlineStart:'0px'}}>
        {tasks.map((item) => (
          <li key={item.id} style={{listStyle:'none'}}>
            <Task onDelete={onDelete}   task={item} />
          </li>
        ))}
      </ul>
    </>
  );
};

import { CircleAlert } from "lucide-react";
import InformationPlaceholder from "../../InformationPlaceholder/InformationPlaceholder";
import "./TaskList.css";

function StatusIndicator({ status }) {
  switch (status) {
    case "Pending":
      return (
        <div
          className="status-indicator"
          style={{ backgroundColor: "red" }}
        ></div>
      );
    case "In progress":
      return (
        <div
          className="status-indicator"
          style={{ backgroundColor: "yellow" }}
        ></div>
      );
    case "Finished":
      return (
        <div
          className="status-indicator"
          style={{ backgroundColor: "green" }}
        ></div>
      );
  }
}

function Task({ name, status, isPriority }) {
  return (
    <li className="task-component">
      <p className="kanit-semibold task-name">{name}</p>
      <div className="status-group">
        <StatusIndicator status={status} />
        {isPriority && <CircleAlert />}
      </div>
    </li>
  );
}

export default function TaskList({tasks}) {
  return (
    <InformationPlaceholder
      title="Tarefas pendentes"
      width="auto"
      height="500px"
      flexGrow={1}
    >
      <ul>
        {tasks
          .filter((task) => task.status == "In progress")
          .map((task) => (
            <Task
              key={task.id}
              name={task.name}
              status={task.status}
              isPriority={task.isPriority}
            />
          ))}
        {tasks
          .filter((task) => task.status == "Pending")
          .map((task) => (
            <Task
              key={task.id}
              name={task.name}
              status={task.status}
              isPriority={task.isPriority}
            />
          ))}
      </ul>
      <h2>Tarefas concluídas</h2>
      <ul>
        {tasks
          .filter((task) => task.status == "Finished")
          .map((task) => (
            <Task
              key={task.id}
              name={task.name}
              status={task.status}
              isPriority={task.isPriority}
            />
          ))}
      </ul>
    </InformationPlaceholder>
  );
}

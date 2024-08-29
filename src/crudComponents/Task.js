function Task(props) {
  return (
    <div>
      <h1 style={{ backgroundColor: props.completed ? "green" : "white" }}>
        {props.name}
      </h1>
      <button onClick={() => props.completeTask(props.id)}>complete</button>
      <button onClick={() => props.deleteTask(props.id)}>X</button>
    </div>
  );
}

export default Task;

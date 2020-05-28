import Task from '../../models/Task';

function createTask(text: string): Task {
  const task = new Task(text);

  return task;
}

export default createTask;

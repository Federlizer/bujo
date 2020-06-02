import Task from '../../models/Task';
import TaskDb from '../../db/Task';

async function createTask(text: string): Promise<Task> {
  const task = new Task({ text });

  const dbTask = await TaskDb.create({
    text:      task.text,
    date:      task.date.toDate(),
    completed: task.completed,
    monthly:   task.monthly,
  });

  task.id = dbTask.id;

  return task;
}

export default createTask;

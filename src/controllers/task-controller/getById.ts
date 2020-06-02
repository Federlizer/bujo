import Task from '../../models/Task';
import TaskDb from '../../db/Task';

async function getById(id: number): Promise<Task|null> {
  const dbTask = await TaskDb.findByPk(id);

  if (dbTask === null)
    return null;

  const task = new Task({
    id: dbTask.id,
    text: dbTask.text,
    date: dbTask.date,
    completed: dbTask.completed,
    monthly: dbTask.monthly,
  });

  return task;
}


export default getById;

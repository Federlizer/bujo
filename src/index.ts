import sequelize from './db';
import taskController from './controllers/task-controller';

import Task from './models/Task';

let taskId: number;

console.log('Authenticating...');
sequelize.authenticate()
  .then(() => {
    console.log('Successful connection to sequelize');

    return taskController.createTask('Some random text here');
  })
  .then((task: Task) => {
    if (task.id === undefined)
      throw new Error("Task.id is undefined");

    taskId = task.id;
    console.log(`New taskId: ${taskId}`);

    return taskController.getById(taskId!);
  })
  .then((task: Task | null) => {
    if (task === null)
      console.error(`Task with id ${taskId} wasn't found`);
    console.log(task);
  })
  .catch((err) => {
    console.error(err);
  });

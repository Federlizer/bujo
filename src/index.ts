import * as dayjs from 'dayjs';

import TaskDb from './db/Task';
import taskController from './controllers/task-controller';
import Task from './models/Task';

const start = dayjs();
const end = dayjs();

// sync all models
TaskDb
  .sync({ force: true })
  .then(() => {
    const tasks = [
      {
        text: 'Task today',
        date: "2020-06-02",
        completed: false,
        monthly: false,
      },
      {
        text: 'Task yesterday',
        date: "2020-06-01",
        completed: false,
        monthly: false,
      },
      {
        text: 'Task tomorrow',
        date: "2020-06-03",
        completed: false,
        monthly: false,
      },
    ];
    return TaskDb.bulkCreate(tasks);
  })
  .then(() => {
    return taskController.getInRange(start, end)
  })
  .then((tasks: Task[]) => {
    tasks.map((task: Task) => {
      console.log(`${task.text}: ${task.date.format('YYYY-MM-DD')}`);
      console.log(`${new Date(2020, 5, 2)}`);
    });
  })
  .catch((err: Error) => {
    console.error(err);
  });

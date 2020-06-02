import { Op } from 'sequelize';
import { Dayjs } from 'dayjs';

import TaskDb from '../../db/Task';
import Task from '../../models/Task';

function buildTaskObject(taskDbInstance: TaskDb): Task {
  const task = new Task({
    id:        taskDbInstance.get('id'),
    text:      taskDbInstance.get('text'),
    date:      taskDbInstance.get('date'),
    completed: taskDbInstance.get('completed'),
    monthly:   taskDbInstance.get('monthly'),
  });

  return task;
};

export default {
  /**
   * Creates a new task, inserts it in the database and returns it with
   * a newly assigned ID.
   *
   * @param {string} text - the text of the new task
   *
   * @returns {Task} a newly inserted task with the new ID assigned to it after insertion
   */
  async createTask(text: string): Promise<Task> {
    const task = new Task({ text });
    const taskDbInstance = await TaskDb.create({
      text:      task.text,
      date:      task.date,
      completed: task.completed,
      monthly:   task.monthly,
    });

    task.id = taskDbInstance.id;
    return task;
  },

  /**
   * Fetches a task from the database by a passed ID.
   *
   * @param {number} id - the id to search by
   *
   * @returns {Task|null} the found task or null if nothing is found
   */
  async getById(id: number): Promise<Task|null> {
    const taskDbInstance = await TaskDb.findByPk(id);

    if (taskDbInstance === null)
      return null;

    const task = buildTaskObject(taskDbInstance);

    return task;
  },

  /**
   * Fetches a list of tasks within a specified range. Both `start` and `end`
   * are inclusive.
   *
   * @param {Date} start - The start of the range, inclusive
   * @param {Date} end - The end of the range, inclusive
   *
   * @return {Task[]} A list of tasks within the range
   */
  async getInRange(start: Dayjs, end: Dayjs): Promise<Task[]> {
    const taskDbList = await TaskDb.findAll({
      where: {
        date: {
          [Op.gte]: start.format('YYYY-MM-DD'),
          [Op.lte]: end.format('YYYY-MM-DD'),
        }
      },
    });

    const tasks = taskDbList.map(buildTaskObject);

    return tasks;
  }
}

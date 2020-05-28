import Task from '../../models/Task';

/**
 * Will fetch a list of tasks within a specified range. Both `start` and `end`
 * are inclusive.
 *
 * @param {Date} start - The start of the range, inclusive
 * @param {Date} end - The end of the range, inclusive
 *
 * @return {Task[]} A list of tasks within the range
 */
function getInRange(start: Date, end: Date): Task[] {
  const dbList: Task[] = new Array<Task>();

  const tasksInRange = dbList.filter(task => {
    if (task.date.isBefore(start))
      return false;

    if (task.date.isAfter(end))
      return false;

    return true;
  });

  return tasksInRange;
}

export default getInRange;

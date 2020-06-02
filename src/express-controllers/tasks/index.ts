import { Request, Response } from 'express';

import taskController from '../../controllers/task-controller';

import Task from '../../models/Task';

export default {
  /**
   * GET /
   * Gets all tasks
   */
  async getAllTasks(_: Request, res: Response): Promise<void> {
    const tasks: Task[] = await taskController.getAll();

    res.status(200).json(tasks);
  },

  /**
   * POST /
   * Create a new task
   */
  async createNewTask(_: Request, res: Response): Promise<void> {
    res.status(500).send('Not implemented');
  },

  /**
   * GET /:id
   * Get a task by id
   */
  async getById(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const parsedId = Number.parseInt(id);

    if (Number.isNaN(parsedId)) {
      res.status(400).end();
      return;
    }

    const task: Task|null = await taskController.getById(parsedId);
    
    if (task === null) {
      res.status(404).end();
      return;
    }

    res.status(200).json(task);
  },

  /**
   * POST /:id
   * Complete a task by id
   */
  async completeTask(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const parsedId = Number.parseInt(id);

    if (Number.isNaN(parsedId)) {
      res.status(400).end();
      return;
    }

    /*
    const task: Task|null = await taskController.completeTaskById(id);

    if (task === null) {
      res.status(404).end();
      return;
    }

    res.status(200).end();
    */

    res.status(500).send('Not implemented');
  },

  /**
   * GET /range?start=datestring&end=datestring
   * Gets tasks within a specified range
   */
  async getInRange(_: Request, res: Response): Promise<void> {
    res.status(500).send('Not implemented');
  },
}

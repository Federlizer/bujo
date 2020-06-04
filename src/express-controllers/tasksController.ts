import * as Joi from '@hapi/joi';
import * as dayjs from 'dayjs';
import { Request, Response } from 'express';

import taskController from '../controllers/taskController';

import Task from '../models/Task';

import createTaskHttpBodySchema from '../validation/createTaskHttpBodySchema';

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
  async createNewTask(req: Request, res: Response): Promise<void> {
    const { error, value } = createTaskHttpBodySchema.validate(req.body);

    if (error) {
      res.status(400).send(error.message);
      return;
    }

    const { text, date, monthly } = value;

    const task: Task = await taskController.createTask({
      text,
      date,
      monthly,
    });

    res.status(200).json(task);
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
  async toggleTaskCompletion(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const parsedId = Number.parseInt(id);

    if (Number.isNaN(parsedId)) {
      res.status(400).end();
      return;
    }

    const task: Task|null = await taskController.toggleTaskCompletion(parsedId);

    if (task === null) {
      res.status(404).end();
      return;
    }

    res.status(200).json(task);
  },

  /**
   * GET /range?start=datestring&end=datestring
   * Gets tasks within a specified range
   */
  async getInRange(req: Request, res: Response): Promise<void> {
    const { start, end } = req.query;

    const dateSchema = Joi.date();

    const { error: startError, value: startValue} = dateSchema
      .validate(start);
    const { error: endError, value: endValue} = dateSchema
      .validate(end);

    if (startError) {
      res.status(400).send(startError.message);
      return;
    }

    if (endError) {
      res.status(400).send(endError.message);
      return;
    }

    const tasks: Task[] = await taskController
      .getInRange(dayjs(startValue), dayjs(endValue));

    res.status(200).json(tasks);
  },
}

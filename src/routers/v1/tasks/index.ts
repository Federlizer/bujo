import { Router } from 'express';

import tasksController from '../../../express-controllers/tasks';

const router = Router();

router.get('/', tasksController.getAllTasks);
router.post('/', tasksController.createNewTask);

router.get('/range', tasksController.getInRange);
router.get('/:id', tasksController.getById);
router.post('/:id', tasksController.toggleTaskCompletion);

export default router;

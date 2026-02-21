import { Router } from 'express'
import authMiddleware from '../middleware/authMiddleware.js'
import {
  getTasks,
  createTask,
  updateTask,
  deleteTask
} from '../controllers/taskController.js'

const router = Router()

router.get('/', authMiddleware, getTasks)
router.post('/', authMiddleware, createTask)
router.put('/:id', authMiddleware, updateTask)
router.delete('/:id', authMiddleware, deleteTask)

export default router

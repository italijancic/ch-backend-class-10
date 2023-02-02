import { Router } from 'express'
import userRoutes from './users.routes.js'
import authRoutes from './auth.routes.js'

const router = Router()

router.use('/api/users', userRoutes)

router.use('/api/auth', authRoutes)

export default router
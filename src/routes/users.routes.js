import { Router } from 'express'
import * as usersControllers from '../controllers/users.controller.js'
import {auth} from '../middlewares/auth.middleware.js'

const router = Router()

router.post('/', usersControllers.createUser)

router.get('/:email', auth, usersControllers.getUser)

export default router
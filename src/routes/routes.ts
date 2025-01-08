import express from 'express'
import { cpfController } from '../controllers/cpfController'
import { cnpjController } from '../controllers/cnpjController'
import { handle } from '../handle'

const router = express.Router()

router.get('/validate-cpf', handle(cpfController.validate))

router.get('/validate-cnpj', handle(cnpjController.validate))

export default router

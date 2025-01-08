import { Request, Response } from 'express'
import { validateCnpj } from '../services/cnpjService'

export const cnpjController = {
	validate(req: Request, res: Response) {
		const cnpj = req.query.cnpj as string

		if (!cnpj) {
			return res.status(400).json({ message: 'O CNPJ é obrigatório!' })
		}

		const isValid = validateCnpj(cnpj)

		if (!isValid) {
			return res.status(400).json({ message: 'CNPJ inválido!' })
		} else {
			return res.status(200).json({ message: 'CNPJ válido!' })
		}
	},
}

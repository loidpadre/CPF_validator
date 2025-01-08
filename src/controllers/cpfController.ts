import { Request, Response } from 'express'
import { validateCPF } from '../services/cpfService'

export const cpfController = {
	validate(req: Request, res: Response) {
		const cpf = req.query.cpf as string

		if (!cpf) {
			return res.status(400).json({ message: 'O CPF é obrigatorio!' })
		}

		const isValid = validateCPF(cpf)

		if (!isValid) {
			return res.status(400).json({ message: 'CPF inválido!' })
		} else {
			return res.status(200).json({ message: 'CPF válido!' })
		}
	},
}

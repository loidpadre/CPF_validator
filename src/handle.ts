import { Response, Request } from 'express'

export type Controller = (req: Request, res: Response) => void

export const handle = (controller: Controller) => {
	return (req: Request, res: Response) => {
		controller(req, res)
	}
}

import * as express from 'express'

const router: express.Router = express.Router()

router.get('/', (req: express.Request, res: express.Response) => {
  setTimeout(() => {
    res.send({ message: '[success] get test api' })
  }, 1000)
})

router.post('/', (req: express.Request, res: express.Response) => {
  setTimeout(() => {
    res.send({ message: '[success] post test api' })
  }, 1000)
})

router.post('/error/:status', (req: express.Request, res: express.Response) => {
  const status = Number(req.params.status)
  setTimeout(() => {
    res.status(status).send({
      message: `[error] post test api. status=${status}`,
    })
  }, 1000)
})

export default router

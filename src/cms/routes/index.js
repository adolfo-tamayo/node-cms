import express from 'express'
import siteRoutes from './sites.routes'

const router = express.Router()
router.use('/sites', siteRoutes)

export default router

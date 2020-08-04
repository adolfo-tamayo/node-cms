import { Router } from 'express'
import { Site } from '../models'
import slugify from 'slugify'

const router = Router()

router.route('/').get((req, res) => {
  Site.find()
    .then(sites => res.json(sites))
    .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/add').post((req, res) => {
  const name = req.body.name
  const shortName = slugify(name.toLowerCase())
  const newSite = new Site({ name, shortName })

  newSite.save()
    .then(() => res.status(201).json({ created: newSite }))
    .catch(err => res.status(400).json({ error: err }))
})

export default router

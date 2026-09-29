import express from 'express'
import { getOpportunities, createOpportunity } from '../controllers/opportunityController.js'

const router = express.Router()

router.get('/', getOpportunities)
router.post('/', createOpportunity)

export default router

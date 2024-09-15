import express from 'express'
import products from './Products.js'
import users from './Users.js'


const router = express.Router()

router.use('/products', products)
router.use('/users', users)

export default router
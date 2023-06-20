import express, { NextFunction, Request, Response } from 'express'
import ProductService from '../services/productService'

const router = express.Router()

router.get('/', async (req: Request, resp: Response, next: NextFunction) => {
    try {
        const products = await ProductService.getInstance().findAll()
        resp.status(200).json(products)
    } catch (e) {
        next(e)
    }
})

router.get('/:id', async (req: Request, resp: Response, next: NextFunction) => {
    try {
        const existingProduct = await ProductService.getInstance().findById(
            req.params.id
        )
        if (existingProduct) {
            resp.status(200).json(existingProduct)
        } else {
            resp.status(404).json({
                message: `Product ${req.params.id} not found.`,
            })
        }
    } catch (e) {
        next(e)
    }
})

router.post('/', async (req: Request, resp: Response, next: NextFunction) => {
    try {
        const payload = { ...req.body }
        const newProduct = await ProductService.getInstance().save(payload)
        resp.status(201).json({ ...newProduct.dataValues })
    } catch (e) {
        next(e)
    }
})

router.put('/:id', async (req: Request, resp: Response, next: NextFunction) => {
    try {
        const productId = req.params.id
        const data = await ProductService.getInstance().update(productId, {
            ...req.body,
        })

        resp.status(200).json(data)
    } catch (e) {
        next(e)
    }
})

router.delete(
    '/:id',
    async (req: Request, resp: Response, next: NextFunction) => {
        try {
            const productId = req.params.id
            await ProductService.getInstance().deleteByPrimaryKey(productId)

            resp.status(200).json({
                message: `Product ${productId} successfully deleted.`,
            })
        } catch (e) {
            next(e)
        }
    }
)

export default router

import { db } from '../database/models'
import Product from '../database/models/product'

class ProductService {
    private static instance: ProductService

    static getInstance(): ProductService {
        if (!ProductService.instance) {
            ProductService.instance = new ProductService()
        }
        return ProductService.instance
    }

    findAll = async () => {
        const products: Product[] = await db.Product.findAll()
        return products
    }

    findById = async (prodId: string) => {
        const product: Product | null = await db.Product.findByPk(prodId)
        return product
    }

    save = async (object: any) => {
        if (!object || Object.keys(object).length == 0) {
            throw new Error('Object must contain at least one property')
        }
        const product = await db.Product.create({ ...object })
        return product
    }

    update = async (id: string, object: any) => {
        if (!object && Object.keys(object).length == 0) {
            throw new Error(
                'Object to be updated must contain at least one property.'
            )
        }

        let existingProduct = await this.findById(id)
        if (!existingProduct) {
            throw new Error('Product not found')
        }

        await Product.update({ ...object }, { where: { id } })

        existingProduct = await this.findById(id)
        return existingProduct
    }

    deleteByPrimaryKey = async (id: string) => {
        const existingProduct = await this.findById(id)
        if (!existingProduct) {
            throw new Error('Product not found')
        }

        await existingProduct.destroy()
    }
}

export default ProductService

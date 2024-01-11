'use client'

import axios from 'axios'
import { useEffect, useState } from 'react'

export default function Product({ params }: { params: { slug: number } }) {
  const [product, setProduct] = useState<Product>()
  async function getProducts() {
    axios.get('/api/products').then(res => setProduct(res.data.products[params.slug - 1]))
  }
  useEffect(() => {
    getProducts()
  }, [])
  return (
    <div className="flex h-screen flex-col justify-center">
      <div className="mx-auto mt-16 max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="mx-auto flex flex-col sm:flex-row">
          <img
            alt="coffee"
            className="rounded-lg"
            src={product?.image_url}
            width={560}
            height={640}
          />
          <div className="mt-10 flex flex-col sm:mt-0 sm:ml-10">
            <h1 className="mt-1 text-4xl font-bold uppercase text-gray-900 sm:text-5xl sm:tracking-tight lg:text-5xl">
              {product?.name}
            </h1>
            <h1 className="mt-3 text-4xl font-bold text-gray-500 sm:text-3xl sm:tracking-tight lg:text-3xl">
              ${product?.price}
            </h1>
            <div className="mt-10 mb-5 border-t border-gray-200 pt-10 font-bold">
              Description
            </div>
            <p className="max-w-xl">{product?.description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}


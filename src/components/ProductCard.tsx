import Link from 'next/link'

interface ProductCardProps {
  product: {
    image_url: string,
    price: string,
    name: string,
    description: string
  }
}

export default function ProductCard({ product }: ProductCardProps ) {

  return (
    <Link href={`#`} className="group">
      <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
        <img
          alt="product image"
          src={product.image_url}
          
          className={'object-cover duration-700 ease-in-out group-hover:opacity-75	'}
        />
      </div>
      <div className="mt-4 flex items-center justify-between text-base font-medium text-gray-900">
        <h3>{product.name}</h3>
        <p>${product.price}</p>
      </div>
      <p className="mt-1 text-sm italic text-gray-500">
        {product.description}
      </p>
    </Link>
  )
}
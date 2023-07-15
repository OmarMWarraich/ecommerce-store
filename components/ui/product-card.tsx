"use client";

import Image from 'next/image';
import { Expand, ShoppingCart } from 'lucide-react';

import { Product } from '@/types';
import IconButton from '@/components/ui/icon-button';
import Currency from '@/components/ui/currency';

interface ProductCardProps {
    data: Product;
}

const ProductCard:React.FC<ProductCardProps> = ({
    data
}) => (
    <div className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4">
        {/* Images and Actions */}
        <div className="aspect-square rounded-xl bg-gray-100 relative">
            <Image
                src={data?.images?.[0]?.url}
                fill
                alt={data?.name}
                className="aspect-square object-cover rounded-md" />
            <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
                <div className="flex gap-x-6 justify-center">
                    <IconButton
                        onClick={() => console.log("Add to cart")}
                        icon={<Expand size={20} className="text-gray-600" />} />
                    <IconButton
                        onClick={() => console.log("Add to cart")}
                        icon={<ShoppingCart size={20} className="text-gray-600" />} />
                </div>
            </div>
        </div>
        {/* Description */}
        <div>
            <div className="font-semibold text-lg">
                {data?.name}
            </div>
            <div className="font-semibold text-lg">
                {data.category?.name}
            </div>
        </div>
        {/* Price */}
        <div className="flex justify-between items-center">
            <Currency value={data?.price} />


        </div>
    </div>
        );
        

export default ProductCard;
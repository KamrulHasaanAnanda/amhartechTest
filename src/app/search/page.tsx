"use client"
import ProductCard from '@/components/products/ProductCard';
import apiServices from '@/services/apiServices';
import { Grid } from '@radix-ui/themes';
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'

function page() {
    const searchParams = useSearchParams()
    const productName = searchParams.get('product_name')
    const order = searchParams.get('order')
    const [products, setProducts] = useState<Product[]>([]);


    useEffect(() => {
        getSearchedProduct()
    }, [productName, order])

    let getSearchedProduct = async () => {
        let res = await apiServices.searchedProducts(productName, order);
        if (res?.products?.length > 0) {
            setProducts(res.products)
        }

    }


    console.log("products", products)
    return (
        <Grid
            columns={{ xs: '2', sm: '3', md: '5' }} gap="5" mt="5" rows="auto" width="auto"
        >
            {products?.length > 0 ? (
                products.map((item) => (
                    <ProductCard key={item.id} product={item} />
                ))
            ) : (
                <p>No products found.</p>
            )}
        </Grid>
    )
}

export default page
"use client"

import React from 'react'
import Header from './Header'
import ProductsHeading from '../products/ProductsHeading'
import { usePathname } from 'next/navigation'

// import { Theme } from '@radix-ui/themes'

function MainLayout() {
    const pathname = usePathname()
    console.log('pathname', pathname)
    let component;
    if (pathname === "/login" || pathname === "/cart"|| pathname === "/checkout") {
        component = <></>
    } else {
        component = <>
            <Header />
            <ProductsHeading />

        </>
    }
    return component;
}

export default MainLayout
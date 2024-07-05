"use client"

import React from 'react'
import Header from './Header'
import ProductsHeading from '../products/ProductsHeading'
// import { Theme } from '@radix-ui/themes'

function MainLayout() {
    return (
        // <Theme appearance="dark">
        <>
            <Header />
            <ProductsHeading />

        </>
        // </Theme>
    )
}

export default MainLayout
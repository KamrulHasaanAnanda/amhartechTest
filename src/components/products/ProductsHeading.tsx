"use client"
import { Flex, Select, Text } from '@radix-ui/themes'
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useState } from 'react'

function ProductsHeading() {

    let router = useRouter();
    const searchParams = useSearchParams()
    const productName = searchParams.get('product_name')




    return (
        <Flex align="center" justify="between" width="100%" my="5">
            <Text size="8">Our products</Text>
            <Flex align="center" gap="2">
                <Text size="2">sort by:</Text>
                <Select.Root defaultValue="asc" onValueChange={(event) => {
                    if (productName) {
                        router.push(`/search?product_name=${productName}&sortBy="title"&order=${event}`);
                    } else {
                        router.push(`/search?sortBy="title"&order=${event}`);
                    }
                }}>
                    <Select.Trigger color="gray" />
                    <Select.Content color="gray" variant="solid">
                        <Select.Item value="asc">Title in ascending order</Select.Item>
                        <Select.Item value="desc">Title in descending order</Select.Item>
                    </Select.Content>
                </Select.Root>
            </Flex>
        </Flex>
    )
}

export default ProductsHeading
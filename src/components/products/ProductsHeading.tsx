"use client"
import { debounce, debounceRouterPush } from '@/configs/globalFunctions';
import { useThrottle } from '@/hooks/useThrottle';
import { Flex, Select, Text } from '@radix-ui/themes'
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useCallback } from 'react'

function ProductsHeading() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const productName = searchParams.get('product_name');


    // const debouncedRouterPush = useThrottle((event: string) => {
    //     if (productName && event !== "Default") {
    //         router.push(`/search?product_name=${productName}&sortBy=price&order=${event}`);
    //     } else if (event === "Default") {
    //         router.push(`/`);
    //     } else {
    //         router.push(`/search?sortBy=price&order=${event}`);
    //     }
    // }, 500);
    return (
        <Flex align="center" justify="between" width="100%" my="5">
            <Text className='' size="6">Our products</Text>
            <Flex align="center" gap="2">
                <Text size="2" className="hidden sm:block">sort by:</Text>
                <Select.Root defaultValue="Default" onValueChange={(event) => {
                    if (productName && event !== "Default") {
                        router.push(`/search?product_name=${productName}&sortBy=price&order=${event}`);
                    } else if (productName && event === "Default") {
                        router.push(`/search?product_name=${productName}`);
                    } else if (!productName && event === "Default") {
                        router.push(`/`);

                    } else {
                        router.push(`/search?sortBy=price&order=${event}`);
                    }
                }}>
                    <Select.Trigger color="gray" />
                    <Select.Content color="gray" variant="solid">
                        <Select.Item value="Default">Default</Select.Item>

                        <Select.Item value="asc">Price low to high</Select.Item>
                        <Select.Item value="desc">Price high to low</Select.Item>
                    </Select.Content>
                </Select.Root>
            </Flex>
        </Flex>
    )
}

export default ProductsHeading;

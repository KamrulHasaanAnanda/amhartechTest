"use client"
import { MagnifyingGlassIcon } from '@radix-ui/react-icons'
import { Box, Flex, TextField } from '@radix-ui/themes'

import React, { useState } from 'react'
import { CiShoppingCart } from "react-icons/ci";
import { SiLootcrate } from "react-icons/si";

import { useRouter, useSearchParams } from 'next/navigation'


function Header() {

    let router = useRouter();
    const searchParams = useSearchParams()
    const order = searchParams.get('order')
    const [searchQuery, setSearchQuery] = useState('');


    const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
        if (order) {
            router.push(`/search?product_name=${event.target.value}&sortBy="title"&order=${order}`);
        } else {
            router.push(`/search?product_name=${event.target.value}`);
        }
    };

    return (
        <div className='flex justify-between'>
            <Flex align={"center"}>
                <SiLootcrate className='text-4xl font-bold' />
                <h1 className='font-bold text-base'>AchCom</h1>
            </Flex>

            <Flex gap={"3"} align={"center"}>
                <Box maxWidth="250px">
                    <TextField.Root value={searchQuery}
                        onChange={handleSearchInputChange} placeholder="Search " size="2">

                        <TextField.Slot>

                        </TextField.Slot>
                        <TextField.Slot>
                            <MagnifyingGlassIcon height="16" width="16" />
                        </TextField.Slot>
                    </TextField.Root>
                </Box>
                <CiShoppingCart />
            </Flex>


        </div>
    )
}

export default Header
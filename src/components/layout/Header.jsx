import { MagnifyingGlassIcon } from '@radix-ui/react-icons'
import { Box, Flex, TextField } from '@radix-ui/themes'
import React from 'react'
import { CiShoppingCart } from "react-icons/ci";
import { SiLootcrate } from "react-icons/si";



function Header() {
    return (
        <div className='flex justify-between'>
            <Flex align={"center"}>
                <SiLootcrate className='text-4xl font-bold' />
                <h1 className='font-bold text-base'>AchCom</h1>
            </Flex>

            <Flex gap={"3"} align={"center"}>
                <Box maxWidth="250px">
                    <TextField.Root onChange={(e) => { console.log('eeeee', e) }} placeholder="Search " size="2">

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
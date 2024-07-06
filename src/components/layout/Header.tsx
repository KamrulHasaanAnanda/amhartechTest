"use client"
import { MagnifyingGlassIcon } from '@radix-ui/react-icons'
import { Box, Button, Flex, TextField } from '@radix-ui/themes'

import React, { useEffect, useState } from 'react'
import { CiShoppingCart } from "react-icons/ci";
import { SiLootcrate } from "react-icons/si";

import { useRouter, useSearchParams } from 'next/navigation'
import { useUser } from '@/hooks/useUsers';
import Image from 'next/image';
import UserDropdown from './UserDropdown';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/lib/store';
import { getUserCartData } from '@/lib/slices/cartSlice';


function Header() {
    let { revalidate, user } = useUser()

    let router = useRouter();
    const searchParams = useSearchParams()
    const order = searchParams.get('order')
    const [searchQuery, setSearchQuery] = useState('');

    const dispatch = useDispatch();
    // Assuming you have a user state
    const cartItems = useSelector((state: RootState) => state.cart.items);

    useEffect(() => {
        if (user && user.id) {
            dispatch(getUserCartData(user.id));
        }
    }, [dispatch, user]);

    const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
        if (order) {
            router.push(`/search?product_name=${event.target.value}&sortBy="title"&order=${order}`);
        } else {
            router.push(`/search?product_name=${event.target.value}`);
        }
    };



    return (
        <Flex justify={"between"}>
            <Flex align={"center"}>
                <SiLootcrate className='text-4xl font-bold'/>
                <h1 className='font-bold text-base hidden sm:block'>AchCom</h1>
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
                <div className='relative cursor-pointer' onClick={() => {
                    router.push('/cart')
                }}>
                    <div className={`absolute top-[-20px] left-[20px] text-xl font-bold ${cartItems.length > 0 ? 'text-white' : 'text-gray-400'}`}>
                        {cartItems.length}
                    </div>
                    <CiShoppingCart className="text-2xl" />
                </div>
                {
                    user ? <UserDropdown>
                        <Image src={user?.image} alt='user' width={40} height={40} className="rounded-[50%]" />
                    </UserDropdown> :
                        <Button radius="full" onClick={() => {
                            router.push('/login')
                        }} variant="soft" className='cursor-pointer'>
                            Login
                        </Button>
                }
            </Flex>


        </Flex>
    )
}

export default Header
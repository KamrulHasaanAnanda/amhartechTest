"use client"

import { useUser } from '@/hooks/useUsers';
import { removeUserCartData } from '@/lib/slices/cartSlice';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';


const SuccessPage: React.FC = () => {
    const dispatch = useDispatch();

    const searchParams = useSearchParams()
    const { user } = useUser()

    const router = useRouter()
    const session_id = searchParams.get('session_id')
    useEffect(() => {
        if (session_id && user?.id) {
            let userID = user?.id
            dispatch(removeUserCartData({ userId: userID }));
            (user?.id)
            const timer = setTimeout(() => {
                router.push("/");
            }, 1000);

            // Cleanup function to clear the timeout if the component unmounts
            return () => clearTimeout(timer);
        }
    }, [session_id, router]);


    return (
        <div className="flex flex-col items-center justify-center gap-4" style={{
            height: "calc(100vh - 100px)"
        }}>
            {
                session_id && <>
                    <h1 className="text-3xl font-bold">Payment Successful!</h1>
                    <p>Thank you for your purchase.</p>

                </>
            }
        </div>
    );
};

export default SuccessPage;
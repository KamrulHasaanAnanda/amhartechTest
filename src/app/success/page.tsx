"use client"

import { useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect } from 'react';


const SuccessPage: React.FC = () => {

    const searchParams = useSearchParams()
    const router = useRouter()
    const session_id = searchParams.get('session_id')
    useEffect(() => {
        if (session_id) {
            localStorage.removeItem('achcart')
            setTimeout(() => {
                router.push("/");
            })
        }
    }, [])


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
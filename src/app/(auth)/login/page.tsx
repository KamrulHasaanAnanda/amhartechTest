"use client"
import { useRouter } from 'next/navigation';
import React, { startTransition, useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button, Flex } from '@radix-ui/themes';
import { SiLootcrate } from 'react-icons/si';
import apiServices from '@/services/apiServices';
import notifications from '@/lib/notification';
import { setCookie } from 'typescript-cookie';
import { useUser } from '@/hooks/useUsers';

function Login() {
    let { revalidate, user } = useUser()

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleLogin = async () => {
        setLoading(true);
        let res = await apiServices.login(username, password);
        if (res?.message === "Invalid credentials") {
            notifications.error(res.message);
            setLoading(false);
            return;
        } else {
            notifications.success("Logged in successfully");
            setCookie('amh', res?.token)
            setCookie('ramh', res?.refreshToken)
            revalidate()
            // .set("tsm", result?.data?.data?.accessToken);
            // router.push('/');

            return;
        }

    };


    useEffect(() => {
        if (user) {
            setLoading(false);

            startTransition(() => {
                router.push("/");
                router.refresh();
            });

        }
    }, [user]);
    return (
        <div className="min-h-screen flex flex-col justify-center">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <Flex align={"center"}>
                    <SiLootcrate className='text-4xl font-bold' />
                    <h1 className='font-bold text-base'>AchCom</h1>
                </Flex>
                <h2 className="mt-4 text-center text-3xl font-extrabold text-white">
                    Sign in to your account
                </h2>
            </div>

            <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-md bg-black">
                <div className=" p-4 shadow sm:rounded-lg sm:px-10">
                    <div className="space-y-6" >
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-white">
                                User name
                            </label>
                            <div className="mt-1">
                                <input
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    id="email"
                                    name="name"
                                    type="text"
                                    autoComplete="name"
                                    required
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-white">
                                Password
                            </label>
                            <div className="mt-1">
                                <input
                                    id="password"
                                    name="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input
                                    id="remember-me"
                                    name="remember-me"
                                    type="checkbox"
                                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                                />
                                <label htmlFor="remember-me" className="ml-2 block text-sm text-white">
                                    Remember me
                                </label>
                            </div>

                            <div className="text-sm">
                                <Link href="/forgot-password" className="font-medium text-indigo-600 hover:text-indigo-500">
                                    Forgot your password?
                                </Link>
                            </div>
                        </div>

                        <div>
                            <Button loading={loading} onClick={handleLogin} variant="classic">
                                Login
                            </Button>
                            {/* <button
                                type="submit"
                                disabled={loading}
                                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                {loading ? 'Logging in...' : 'Login'}
                            </button> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Login
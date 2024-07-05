// hooks/useCurrentUser.ts
import { useGetCurrentUserQuery } from '@/lib/slices/userApiSlice'
import { useState, useEffect, useCallback } from 'react'


export function useUser() {
    const [user, setUser] = useState<User | null>(null)
    const { data, error, isLoading, refetch } = useGetCurrentUserQuery(undefined, {
        refetchOnMountOrArgChange: true, // This will refetch when the component mounts or query args change
    })

    useEffect(() => {
        if (data) {
            setUser(data)
        }
    }, [data])

    // Revalidate function
    const revalidate = useCallback(() => {
        refetch()
    }, [refetch])

    return { user, error, isLoading, revalidate }
}
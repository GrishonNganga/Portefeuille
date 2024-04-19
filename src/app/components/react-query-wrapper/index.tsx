'use client'

import {
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'

type ReactQueryWrapperProps = {
    children: React.ReactNode
}
export default function ReactQueryWrapper({ children }: ReactQueryWrapperProps) {
    const queryClient = new QueryClient()

    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    )
}
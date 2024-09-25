import React from 'react'
import { Stack } from 'expo-router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ThemeContextProvider } from '@/contexts/themeContext'

const queryClient = new QueryClient()

const RootLayout = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeContextProvider>
        <Stack>
          <Stack.Screen name='index' options={{
            headerShown: false,
          }} />
        </Stack>
      </ThemeContextProvider>
    </QueryClientProvider>
  )
}

export default RootLayout
import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { Stack, useNavigation } from 'expo-router'
import { ArrowLeft } from 'lucide-react-native'

const Loading = ({children}: {children: React.ReactNode}) => {
    const navigation = useNavigation();

  return (
    <View className='flex-1 items-center justify-center flex-col py-24 bg-white'>
        <StatusBar style='auto' backgroundColor='#2C2E55' />
            <Stack.Screen options={{
                headerTitle: '',
                headerShadowVisible: false,
                headerTransparent: true,
                headerBackVisible: false,
                headerLeft: () => (
                    <Pressable onPress={() => navigation.goBack()}>
                        <ArrowLeft size={30} color={"#fff"} strokeWidth={2} />
                    </Pressable>                    
                ),
            }} 
        />
        {children}
    </View>
  )
}

export default Loading
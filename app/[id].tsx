import { View, Text, Image, Pressable, ActivityIndicator } from 'react-native'
import React, { useContext } from 'react'
import { Stack, useLocalSearchParams, useNavigation } from 'expo-router'
import { StatusBar } from 'expo-status-bar';
import { ArrowLeft } from 'lucide-react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import About from '@/components/about';
import Stats from '@/components/stats';
import Evolution from '@/components/evolution';
import { useGetInformation } from '@/hooks/useFetch';
import { Colors } from '@/constants/Colors';
import Loading from '@/components/loading';
import ThemeContext from '@/contexts/themeContext';

const Tab = createMaterialTopTabNavigator();
const endpoint : string = "https://pokeapi.co/api/v2/pokemon/"

const Pokemon = () => {
    const { id } = useLocalSearchParams();
    const navigation = useNavigation();
    const { image, number, color, types, name, isLoading  } = useGetInformation(endpoint + id);
    const { theme } = useContext(ThemeContext);

    if (isLoading) return <Loading><ActivityIndicator size={'large'} color={'#000'} /></Loading>

    return (
        <View style={{backgroundColor: Colors[color]}} className='flex-1 items-center flex-col py-24'>
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
            }} />
            <Image source={require('../assets/images/square.png')} className='z-0 h-40 w-40 absolute -top-16 -left-14 opacity-5 rotate-12' />
            <View className='w-full items-center justify-between flex-row px-4'>
                <View className='w-3/4 items-start justify-center flex-col'>
                    <Text className='text-2xl text-pokemon-name font-bold mb-2'>{name?.toUpperCase()}</Text>
                    <View className='flex-row flex-wrap items-center justify-start space-x-2 w-full '>
                        <View className='border border-dashed border-stone-500 w-20 items-center justify-center p-1 rounded-full'>
                            <Text className='text-sm text-white font-bold'>{types[0]}</Text>
                        </View>

                        { types[1] &&
                            <View className='border border-dashed border-stone-500 w-20 items-center justify-center p-1 rounded-full'>
                                <Text className='text-sm text-white font-bold'>{types[1]}</Text>
                            </View>
                        }
                    </View>
                </View>
                <Text className='text-white text-2xl font-bold'>{'#' + number}</Text>
            </View>
            <Image source={require('../assets/images/dot-grid.png')} className='z-0 h-14 w-14 absolute opacity-5 top-48 left-12' />
            <Image source={require('../assets/images/back.png')} className='z-0 h-44 w-44 absolute opacity-5 top-48 -right-8' />
            <Image source={{uri: image}} className='z-20 h-60 w-60 absolute top-36 right-20' />
            <View className={`z-10 w-full h-3/4 bg-white p-4 mt-48 rounded-t-4xl items-center ${theme === 'light' ? 'bg-white' : 'bg-neutral-600'}`}>
                <Tab.Navigator className='w-full' screenOptions={{
                    tabBarStyle: {
                        backgroundColor: 'transparent',
                        elevation: 0,
                        shadowOpacity: 0,
                    },
                    tabBarLabelStyle: {
                        fontWeight: 'bold',
                        fontSize: 13
                    },
                    tabBarInactiveTintColor: '#D5D7D9',
                    tabBarIndicatorStyle: {
                        backgroundColor: "#7E89DF",
                        height: 3,
                        borderRadius: 100
                    }
                }}>
                    <Tab.Screen name='About'  children={() => <About id={id} />} />
                    <Tab.Screen name='Base Stats' children={() => <Stats id={id} />} />
                    {/* <Tab.Screen name='Evolution' component={Evolution} /> */}
                </Tab.Navigator>
            </View>
        </View>
    )
}

export default Pokemon
import { View, Text, ActivityIndicator } from 'react-native'
import React, { useContext } from 'react'
import { useQuery } from '@tanstack/react-query';
import { useGetEggGroups, useGetGender, useGetHabitat, useGetInformation } from '@/hooks/useFetch';
import Loading from './loading';
import ThemeContext from '@/contexts/themeContext';

interface AboutProps {
    id: string | string[];
}

const endpoint : string = "https://pokeapi.co/api/v2/pokemon/"

const About = ({ id }: AboutProps) => {
  const { theme} = useContext(ThemeContext);
  const { habitat } = useGetHabitat(id);
  const { gender } = useGetGender(id);
  const { egg } = useGetEggGroups(id);
  const { height, weight, abilities, isLoading } = useGetInformation(endpoint + id);

  if (isLoading) return <Loading><ActivityIndicator size={'large'} color={'#000'} /></Loading>

  return (
    <View className={`flex-1 items-center flex-col bg-white p-2 ${theme === 'light' ? 'bg-white' : 'bg-neutral-600'}`}>
      <View className='p-1 w-full items-center justify-between flex-row mb-2'>
        <Text className='text-lg text-not-active font-bold'>Habitat</Text>
        <View className='w-3/5'>
            <Text className='text-lg text-black font-bold'>{habitat ? habitat : 'None'}</Text>
        </View>
      </View>
      <View className='p-1 w-full items-center justify-between flex-row mb-2'>
        <Text className='text-lg text-not-active font-bold'>Height</Text>
        <View className='w-3/5'>
            <Text className='text-lg text-black font-bold'>{height}</Text>
        </View>
      </View>
      <View className='p-1 w-full items-center justify-between flex-row mb-2'>
        <Text className='text-lg text-not-active font-bold'>Weight</Text>
        <View className='w-3/5'>
            <Text className='text-lg text-black font-bold'>{weight}</Text>
        </View>
      </View>
      <View className='p-1 w-full items-center justify-between flex-row mb-2'>
        <Text className='text-lg text-not-active font-bold'>Abilities</Text>
        <View className='w-3/5'>
            <Text className='text-lg text-black font-bold'>{abilities[0]}{abilities[1] ? `, ${abilities[1]}` : ''}</Text>
        </View>
      </View>
      <Text className='self-start text-lg text-left text-black font-bold mb-2'>Breeding</Text>
      <View className='p-1 w-full items-center justify-between flex-row mb-2'>
        <Text className='text-lg text-not-active font-bold'>Gender</Text>
        <View className='w-3/5'>
            <Text className='text-lg text-black font-bold'>{gender? gender : 'None'}</Text>
        </View>
      </View>
      <View className='p-1 w-full items-center justify-between flex-row mb-2'>
        <Text className='text-lg text-not-active font-bold'>Egg Groups</Text>
        <View className='w-3/5'>
            <Text className='text-lg text-black font-bold'>{egg ? egg : 'None'}</Text>
        </View>        
      </View>
    </View>
  )
}

export default About
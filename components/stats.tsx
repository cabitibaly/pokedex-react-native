import { View, Text, ActivityIndicator } from 'react-native'
import React, { useContext } from 'react'
import { useGetInformation } from '@/hooks/useFetch'
import Loading from './loading';
import ThemeContext from '@/contexts/themeContext';

interface StatsProps {
  id: string | string[];
}

const endpoint : string = "https://pokeapi.co/api/v2/pokemon/"

const Stats = ({id}: StatsProps) => {
  const {stats, isLoading} = useGetInformation(endpoint + id);
  const { theme } = useContext(ThemeContext);

  if (isLoading) return <Loading><ActivityIndicator size={'large'} color={'#000'} /></Loading>

  return (
    <View className={`flex-1 items-center flex-col px-2 py-10 ${theme === 'light' ? 'bg-white' : 'bg-neutral-600'}`}>
        <View className='p-1 w-full items-center justify-between flex-row mb-2'>
          <Text className='w-20 text-left text-lg text-not-active font-bold'>HP</Text>
          <Text className='w-10 text-center text-black text-lg font-bold'>{stats.hp}</Text>    
          <View className='w-1/2 h-1.5 rounded-full bg-transp'>
              <View style={{width: `${stats.hp}%`, height: '100%', backgroundColor: `${stats.hp > 50 ? '#4BC07A':'#FB6C6C'}`}} className='rounded-full'></View>
          </View>
        </View>
        <View className='p-1 w-full items-center justify-between flex-row mb-2'>
          <Text className='text-lg text-not-active font-bold w-20'>Attacks</Text>
          <Text className='w-10 text-center text-black text-lg font-bold'>{stats.attack}</Text> 
          <View className='w-1/2 h-1.5 rounded-full bg-transp'>
              <View style={{width: `${stats.attack}%`, height: '100%', backgroundColor: `${stats.attack > 50 ? '#4BC07A':'#FB6C6C'}`}} className='rounded-full'></View>
          </View>
        </View>
        <View className='p-1 w-full items-center justify-between flex-row mb-2'>
          <Text className='text-lg text-not-active font-bold w-20'>Defense</Text>
          <Text className='w-10 text-center text-black text-lg font-bold'>{stats.defense}</Text> 
          <View className='w-1/2 h-1.5 rounded-full bg-transp'>
              <View style={{width: `${stats.defense}%`, height: '100%', backgroundColor: `${stats.defense > 50 ? '#4BC07A':'#FB6C6C'}`}} className='rounded-full'></View>
          </View>
        </View>
        <View className='p-1 w-full items-center justify-between flex-row mb-2'>
          <Text className='text-lg text-not-active font-bold w-20'>Sp. Atk</Text>
          <Text className='w-10 text-center text-black text-lg font-bold'>{stats.specialAttack}</Text> 
          <View className='w-1/2 h-1.5 rounded-full bg-transp'>
              <View style={{width: `${stats.specialAttack}%`, height: '100%', backgroundColor: `${stats.specialAttack > 50 ? '#4BC07A':'#FB6C6C'}`}} className='rounded-full'></View>
          </View>
        </View>
        <View className='p-1 w-full items-center justify-between flex-row mb-2'>
          <Text className='text-lg text-not-active font-bold w-20'>Sp. Def</Text>
          <Text className='w-10 text-center text-black text-lg font-bold'>{stats.specialDefense}</Text> 
          <View className='w-1/2 h-1.5 rounded-full bg-transp'>
              <View style={{width: `${stats.specialDefense}%`, height: '100%', backgroundColor: `${stats.specialDefense > 50 ? '#4BC07A':'#FB6C6C'}`}} className='rounded-full'></View>
          </View>
        </View>
        <View className='p-1 w-full items-center justify-between flex-row mb-2'>
          <Text className='text-lg text-not-active font-bold w-20'>Speed</Text>
          <Text className='w-10 text-center text-black text-lg font-bold'>{stats.speed}</Text> 
          <View className='w-1/2 h-1.5 rounded-full bg-transp'>
              <View style={{width: `${stats.speed}%`, height: '100%', backgroundColor: `${stats.speed > 50 ? '#4BC07A':'#FB6C6C'}`}} className='rounded-full'></View>
          </View>
        </View>
    </View>
  )
}

export default Stats
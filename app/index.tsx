import { View, Text, TextInput, ScrollView, Pressable, ActivityIndicator, Switch } from 'react-native'
import React, { useContext, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { LucideAlignJustify, Moon, Search, Sun } from 'lucide-react-native'
import { StatusBar } from 'expo-status-bar'
import { usePokemons, useSearchPokemon } from '@/hooks/useFetch'
import Cards from '@/components/cards'
import { useTheme } from '@react-navigation/native'
import ThemeContext from '@/contexts/themeContext'

const Home = () => {
    const { pokemons, isLoading } = usePokemons('pokemon?limit=80');
    const [search, setSearch] = useState('')
    const { sucess } = useSearchPokemon(search);
    const { theme, toggleTheme} = useContext(ThemeContext);
    
  return (
    <SafeAreaView className={`flex-1 items-center flex-col py-10 px-4 ${theme === 'light' ? 'bg-white' : 'bg-neutral-600'}`}>
        <StatusBar style='auto' backgroundColor={theme === 'light' ? '#2C2E55' : '#262626'} />
        <View className='w-full items-center justify-between flex-row' >
            <Text className='self-start text-5xl text-primary-text font-bold tracking-widest mb-2'>Pokédex</Text>
            <Pressable onPress={() =>toggleTheme()} >
                {
                    theme === 'light' ? 
                        <Sun size={40} color={'#000'} strokeWidth={2} />
                        :
                        <Moon size={40} color={'#000'} strokeWidth={2} />
                }
            </Pressable>            
        </View>
        
        <Text className='self-start text-lg text-secondary-text font-medium mb-6'>Search for a pokémon by name or using its National Pokédex Number</Text>
        <View className='h-14 rounded-xl w-full flex-row items-center justify-between mb-6'>
            <View className={`border border-solid rounded-xl p-2 w-full items-center justify-between flex-row ${theme === 'light' ? 'border-neutral-800' : 'border-neutral-400'}`}>
                <Search size={27} strokeWidth={2} color={'#5E617D'} />
                <TextInput onChangeText={(text) => setSearch(text)} className='w-full text-gray- text-primary-text text-lg font-normal p-2' placeholderTextColor={'#9ca3af'} placeholder='Name or number' />
            </View>
            {/* <Pressable onPress={() => console.log(pokemons?.results[0])} className='items-center justify-center rounded-xl w-14 h-full bg-icon'>
                <LucideAlignJustify size={40} color={'#fff'} strokeWidth={2} />
            </Pressable> */}
        </View>        
        <View className='w-full h-75 items-center justify-center'>

            {
                isLoading ? 
                    <ActivityIndicator size={'large'} color={'#000'} />
                    : 
                    <ScrollView className='w-full' showsVerticalScrollIndicator={false}>
                        <View className='flex flex-row flex-wrap items-center justify-between'>
                            {
                                (sucess && search) && <Cards url={'https://pokeapi.co/api/v2/pokemon/'+search.toLowerCase()} key={'poke'+search} />
                            }
                            {
                                pokemons?.results.map((pokemon, index) => {
                                    return <Cards 
                                        url={pokemon.url!} 
                                        key={index}
                                    />
                                })
                            }
                        </View>
                    </ScrollView>
            }
        </View>            
    </SafeAreaView>
  )
}

export default Home
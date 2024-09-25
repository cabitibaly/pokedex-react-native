import { View, Text, Image } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { Colors } from '@/constants/Colors';
import { useGetInformation } from '@/hooks/useFetch';

interface cardProps {
    url: string;
}

const Cards = ({ url }: cardProps) => {

    const { name, image, number, color } = useGetInformation(url);
    
    return (
        <Link className='mb-6' href={`/${number}`}>
            <View style={{backgroundColor: Colors[color]}} className={`w-40 h-44 bg-normal rounded-xl mr-1 items-center justify-center`}>
            <Image source={{uri: image}} className='w-28 h-28 object-cover' />
            <Text className='text-center text-lg text-primary-text font-bold'>{name}</Text>
            <Text className='text-center text-lg text-gray-100 font-bold'>{'#' + number}</Text>
            </View>
        </Link>
    )
}

export default Cards
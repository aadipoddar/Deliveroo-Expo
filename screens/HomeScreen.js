import { useNavigation } from '@react-navigation/native'
import { useLayoutEffect } from 'react'
import { Image, Text, TextInput, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import {
  AdjustmentsIcon,
  ChevronDownIcon,
  SearchIcon,
  UserIcon
} from 'react-native-heroicons/outline'

const HomeScreen = () => {

  const navigation = useNavigation()

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false
    })
  }, [])

  return (
    <SafeAreaView className='bg-white'>

      {/* Header */}
      <View className='flex-row pb-3 items-center mx-4 space-x-2 '>

        <Image
          source={{
            uri: 'https://links.papareact.com/wru',
          }}
          className='h-7 w-7 bg-gray-300 p-4 rounded-full'
        />

        <View className='flex-1'>
          <Text className='font-bold text-gray-400 text-xs'>Deliver now</Text>

          <Text className='font-bold text-xl'>
            Current Location
            <ChevronDownIcon size={20} color='#00CCBB' />
          </Text>

        </View>

        <UserIcon size={35} color='#00CCBB' />
      </View>


      {/* Search */}
      <View className='flex-row items-center space-x-2 px-1 pb-2 mx-4'>

        <View className='flex-row space-x-2 flex-1 bg-gray-300 p-3'>
          <SearchIcon size={20} color='gray' />
          <TextInput placeholder='Search for a meal!' keyboardType='default' />
        </View>

        <AdjustmentsIcon size={20} color='#00CCBB' />
      </View>

    </SafeAreaView>
  )
}

export default HomeScreen

// import { StatusBar } from 'expo-status-bar'
// import { Image, ScrollView, Text, View } from 'react-native'
// import { Redirect, router } from 'expo-router'
// import { SafeAreaView } from 'react-native-safe-area-context'
// import { images } from '../constants'
// import CustomButton from '../components/CustomButton'
// import { useGlobalContext } from '../context/GlobalProvider'

// export default function App () {

//   const { loading, isLogged } = useGlobalContext();

//   if(!loading && isLogged) return  <Redirect href="/home" />;

//   return (
//     <SafeAreaView className='bg-primary h-full'>
//       <ScrollView contentContainerStyle={{ height: '100%' }}>
//         <View className='w-full justify-center items-center min-h-[85vh] px-4'>
//           <Image
//             source={images.logo}
//             className='w-[130px] h-[84px]'
//             resizeMode='contain'
//           />

//           <Image
//             source={images.cards}
//             className='max-w-[380px] w-full h-[300px]'
//             resizeMode='contain'
//           />
//           <View className='relative mt-5'>
//             <Text className='text-3xl text-white font-bold text-center'>
//               Explore Boundless Possibilities with{' '}
//               <Text className='text-secondary-200'>Aora</Text>
//             </Text>
//             <Image
//               source={images.path}
//               className='w-[136px] h-[15px]
//               absolute -bottom-2 -right-8'
//               resizeMode='contain'
//             />
//           </View>
//           <Text className='text-sm font-pregular text-gray-100 mt-7 text-center'>
//             Experience a Fusion of Creativity and Innovation: Begin Your Aora
//             Journey Today
//           </Text>
//           <CustomButton
//             title='Continue with email'
//             handlePress={() => router.push('/sign-in')} // when clicked, we change the route to registration - /sign-in
//             containerStyles='w-full mt-7'
//           />
//         </View>
//       </ScrollView>
//       {/* we can change the visibility of the top panel (time, battery...)  */}
//       <StatusBar backgroundColor='#161622' style='light' />
//     </SafeAreaView>
//   )
// }


// import { StatusBar } from "expo-status-bar";
// import { Redirect, router } from "expo-router";
// import { View, Text, Image, ScrollView } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";

// import { images } from "../constants";
// import CustomButton from '../components/CustomButton';
// import { useGlobalContext } from "../context/GlobalProvider";
// import Loader from '../components/Loader';

// const App = () => {
//   const { loading, isLogged } = useGlobalContext();

//   if (!loading && isLogged) return <Redirect href="/home" />;

//   return (
//     <SafeAreaView className="bg-primary h-full">
//       <Loader isLoading={loading} />

//       <ScrollView
//         contentContainerStyle={{
//           height: "100%",
//         }}
//       >
//         <View className="w-full flex justify-center items-center h-full px-4">
//           <Image
//             source={images.logo}
//             className="w-[130px] h-[84px]"
//             resizeMode="contain"
//           />

//           <Image
//             source={images.cards}
//             className="max-w-[380px] w-full h-[298px]"
//             resizeMode="contain"
//           />

//           <View className="relative mt-5">
//             <Text className="text-3xl text-white font-bold text-center">
//               Discover Endless{"\n"}
//               Possibilities with{" "}
//               <Text className="text-secondary-200">Aora</Text>
//             </Text>

//             <Image
//               source={images.path}
//               className="w-[136px] h-[15px] absolute -bottom-2 -right-8"
//               resizeMode="contain"
//             />
//           </View>

//           <Text className="text-sm font-pregular text-gray-100 mt-7 text-center">
//             Where Creativity Meets Innovation: Embark on a Journey of Limitless
//             Exploration with Aora
//           </Text>

//           <CustomButton
//             title="Continue with Email"
//             handlePress={() => router.push("/sign-in")}
//             containerStyles="w-full mt-7"
//           />
//         </View>
//       </ScrollView>

//       <StatusBar backgroundColor="#161622" style="light" />
//     </SafeAreaView>
//   );
// };

// export default App;

import { StatusBar } from "expo-status-bar";
import { Redirect } from "expo-router";
import { View, Text, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { images } from "../constants";
import CustomButton from '../components/CustomButton';
import { useGlobalContext } from "../context/GlobalProvider";
import Loader from '../components/Loader';

const App = () => {
  const { loading } = useGlobalContext();

  // Всегда перенаправляем на домашнюю страницу
  return (
    <SafeAreaView className="bg-primary h-full">
      <Loader isLoading={loading} />

      <ScrollView
        contentContainerStyle={{
          height: "100%",
        }}
      >
        <View className="w-full flex justify-center items-center h-full px-4">
          <Image
            source={images.logo}
            className="w-[130px] h-[84px]"
            resizeMode="contain"
          />

          <Image
            source={images.cards}
            className="max-w-[380px] w-full h-[298px]"
            resizeMode="contain"
          />

          <View className="relative mt-5">
            <Text className="text-3xl text-white font-bold text-center">
              Discover Endless{"\n"}
              Possibilities with{" "}
              <Text className="text-secondary-200">Aora</Text>
            </Text>

            <Image
              source={images.path}
              className="w-[136px] h-[15px] absolute -bottom-2 -right-8"
              resizeMode="contain"
            />
          </View>

          <Text className="text-sm font-pregular text-gray-100 mt-7 text-center">
            Where Creativity Meets Innovation: Embark on a Journey of Limitless
            Exploration with Aora
          </Text>

          <CustomButton
            title="Continue with Email"
            handlePress={() => router.push("/sign-in")}
            containerStyles="w-full mt-7"
          />
        </View>
      </ScrollView>

      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
};

export default App;

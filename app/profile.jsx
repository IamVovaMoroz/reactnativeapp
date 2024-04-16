import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'



const Profile = () => {
  return (
    <View>
      <Text>profile</Text>
	  <Link href='/' style={{ color: 'blue' }}>
  Go to Home page
</Link>

    </View>
  )
}

export default Profile

const styles = StyleSheet.create({})

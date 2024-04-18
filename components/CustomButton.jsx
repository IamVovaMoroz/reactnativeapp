import { Text, TouchableOpacity } from 'react-native'
import React from 'react'

const CustomButton = ({
  title,
  handlePress,
  containerStyles,
  textStyles,
  isLoading
}) => {
  return (
    <TouchableOpacity
	onPress={handlePress}
	// sets the transparency of the button during an active press.
	activeOpacity={0.7}
	// if isLoading is true, an opacity-50 style is added to the button, making it semi-transparent.
      className={`bg-secondary-100 rounded-xl min-h-[62px] justify-center items-center ${containerStyles} {isLoading ? 'opacity-50' : ''}`}
	  disabled={isLoading} 
    >
      <Text className={`text-primary font-psemibold text-lg ${textStyles}`}>{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton

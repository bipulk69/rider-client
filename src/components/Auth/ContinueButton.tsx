import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

interface ContinueButtonProps {
  navigateTo: string;
}

const ContinueButton: React.FC<ContinueButtonProps> = ({navigateTo}) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate(navigateTo);
  };

  return (
    <View>
      <Pressable style={styles.continueBtn} onPress={handlePress}>
        <Text style={styles.btnText}>Continue</Text>
      </Pressable>
    </View>
  );
};

export default ContinueButton;

const styles = StyleSheet.create({
  continueBtn: {
    backgroundColor: '#65BA0D',
    padding: 13,
    borderRadius: 10,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});

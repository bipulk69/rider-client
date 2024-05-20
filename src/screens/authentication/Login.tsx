import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import theme from '../../constants/theme';
import InputBox from '../../components/Auth/InputBox';

const Login = () => {
  const [loading, setLoading] = useState(true);

  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
  });

  // if (loading) {
  //   return (
  //     <View>
  //       <Image source={require('../../assets/loading.png')} />
  //     </View>
  //   );
  // }
  return (
    <View style={styles.container}>
      <View style={{marginHorizontal: 20}}>
        <Text style={styles.title}>Singin</Text>
        <Text style={styles.helperText}>Hi there, nice to see you.</Text>

        <InputBox
          name="Mobile_no"
          keyboardType={'number-pad'}
          lableVisible={false}
          lable={'Mobile Number'}
          placeholder="eg 9999 - 999 - 999"
        />
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
  helperText: {
    fontSize: 16,
    color: '#666666',
  },
});

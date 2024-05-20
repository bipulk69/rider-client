import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import theme from '../../constants/theme';
import InputBox from '../../components/Auth/InputBox';
import ContinueButton from '../../components/Auth/ContinueButton';
import {set} from 'mongoose';
import {useNavigation} from '@react-navigation/native';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [mobile, setMobile] = useState('');

  return (
    <View style={styles.container}>
      <View style={{marginHorizontal: 20}}>
        <Text style={styles.title}>Create an account</Text>
        <InputBox
          name="Name"
          keyboardType={'default'}
          lableVisible={false}
          lable={'name'}
          placeholder="Full name"
          value={name}
          setValue={setName}
        />
        <InputBox
          name="email"
          keyboardType="default"
          lableVisible={false}
          lable={email}
          placeholder="Email"
          autoComplete={'email'}
          value={email}
          setValue={setEmail}
        />
        <InputBox
          name="mobile"
          keyboardType="default"
          lableVisible={false}
          lable={mobile}
          placeholder="Mobile no."
          value={mobile}
          setValue={setMobile}
        />
        <InputBox
          name="passowrd"
          keyboardType="default"
          lableVisible={false}
          lable={password}
          secureTextEntry={true}
          placeholder="Password"
          value={password}
          setValue={setPassword}
        />
        <InputBox
          name="passowrd"
          keyboardType="default"
          lableVisible={false}
          lable={password}
          secureTextEntry={true}
          placeholder="Confirm password"
          value={confirmPassword}
          setValue={setConfirmPassword}
        />

        <ContinueButton navigateTo="Verification" />
      </View>
    </View>
  );
};

export default Signup;

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
});

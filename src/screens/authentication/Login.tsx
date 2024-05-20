import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import theme from '../../constants/theme';
import InputBox from '../../components/Auth/InputBox';
import ContinueButton from '../../components/Auth/ContinueButton';

const Login = () => {
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
  });

  if (loading) {
    return (
      <View>
        <Image source={require('../../assets/loading.png')} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={{marginHorizontal: 20}}>
        <Text style={styles.title}>Singin</Text>
        <Text style={styles.helperText}>Hi there, nice to see you.</Text>

        <InputBox
          name="Username"
          keyboardType={'default'}
          lableVisible={false}
          lable={'Username'}
          placeholder="Username"
          value={username}
          setValue={setUsername}
        />

        <InputBox
          name="Passowrd"
          keyboardType={'default'}
          lableVisible={false}
          lable={'Password'}
          placeholder="Password"
          value={password}
          setValue={setPassword}
        />

        <ContinueButton navigateTo="SelfDeclaration" />

        <TouchableHighlight
          style={styles.forgotBtn}
          onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.forgotText}>Forgot Passowrd ?</Text>
        </TouchableHighlight>
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
    marginTop: 10,
  },
  forgotBtn: {
    alignItems: 'center',
    marginTop: 15,
  },
  forgotText: {
    color: '#65Ba0D',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
});

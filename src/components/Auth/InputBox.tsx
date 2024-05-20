import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import theme from '../../constants/theme';

interface InputBoxProps {
  value: string;
  multiline?: boolean;
  placeholder?: string;
  secureTextEntry?: boolean;
  maxLength?: number;
  keyboardType?:
    | 'default'
    | 'email-address'
    | 'numeric'
    | 'phone-pad'
    | 'ascii-capable'
    | 'numbers-and-punctuation'
    | 'url'
    | 'number-pad'
    | 'name-phone-pad'
    | 'decimal-pad'
    | 'twitter'
    | 'web-search'
    | 'visible-password';
  numberOfLines?: number;
  autoComplete?:
    | 'off'
    | 'username'
    | 'password'
    | 'email'
    | 'name'
    | 'tel'
    | 'street-address'
    | 'postal-code'
    | 'cc-number'
    | 'cc-csc'
    | 'cc-exp'
    | 'cc-exp-month'
    | 'cc-exp-year'
    | 'birthdate-day'
    | 'birthdate-month'
    | 'birthdate-year';
  editable?: boolean;
  textAlignVertical?: 'auto' | 'top' | 'bottom' | 'center';
  style?: any;
  lableStyle: any;
  lableVisible: boolean;
  error?: boolean;
  lable: string;
  name: string;
}

const InputBox: React.FC<InputBoxProps> = props => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <View>
      <View style={[{marginVertical: 10}, props.style]}>
        <View>
          {props.lableVisible == false ? null : (
            <Text style={[styles.lable, props.lableStyle]}>{props.lable}</Text>
          )}
        </View>
        <TextInput
          value={props.value}
          underlineColorAndroid="transparent"
          multiline={props.multiline}
          placeholder={props.placeholder}
          secureTextEntry={props.secureTextEntry}
          maxLength={props.maxLength}
          keyboardType={props.keyboardType}
          numberOfLines={props.numberOfLines}
          autoComplete={props.autoComplete}
          editable={props.editable}
          textAlignVertical={props.textAlignVertical}
          onFocus={handleFocus}
          onBlur={handleBlur}
          style={[
            props.style,
            styles.inputField,
            {
              borderColor:
                isFocused && props.error
                  ? theme.colors.error
                  : isFocused && !props.error
                  ? theme.colors.lightprimary
                  : props.error
                  ? theme.colors.error
                  : theme.colors.light_grey,
            },
          ]}
        />
      </View>
    </View>
  );
};

export default InputBox;

const styles = StyleSheet.create({
  lable: {
    fontSize: 12,
    color: theme.colors.primary_text,
    marginVertical: 5,
  },
  inputField: {
    backgroundColor: theme.colors.background,
    borderRadius: 8,
    marginVertical: 4,
    fontSize: 16,
    borderWidth: 1,
    color: theme.colors.primary_text,
    paddingHorizontal: 10,
  },
});

import {View, Text, TextInput} from 'react-native';
import customInputStyles from './CustomInputStyles';
import { colors } from '../../theme';
import React, {useImperativeHandle, useRef} from 'react';

const CustomInput = React.forwardRef((props, ref) => {
  const inputRef = useRef(null);

  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    },
  }));

  return (
    <>
      <View style={customInputStyles.inputContainer}>
        <TextInput
          ref={inputRef}
          secureTextEntry={props.name === 'password'}
          placeholder={props.name}
          returnKeyType={props.returnKeyType}
          autoCapitalize="none"
          placeholderTextColor={colors.grey}
          style={customInputStyles.inputs}
          onChangeText={props.formik.handleChange(props.name)}
          onBlur={props.formik.handleBlur(props.name)}
          onSubmitEditing={props.handleSubmitEditing || (() => {})}
          defaultValue={props.formik.values[props.name]}
        />
      </View>
      {props.formik.errors[props.name] && props.formik.touched[props.name] && (
        <Text style={customInputStyles.textWarning}>
          {props.formik.errors[props.name]}
        </Text>
      )}
    </>
  );
});

export default CustomInput;

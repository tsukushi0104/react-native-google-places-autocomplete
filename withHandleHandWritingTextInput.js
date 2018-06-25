import React, { Component } from 'react';
import { Platform, TextInput } from 'react-native';

// https://github.com/facebook/react-native/issues/18403
const withHandleHandWritingTextInput = (WrappedComponent) => {
  class HandleHandWritingTextInput extends TextInput {
    render() {
      const { onChangeText, onBlur, ...rest } = this.props;

      return (<WrappedComponent
        onChangeText={(text) => {
          this.tempText = text;
        }}
        onBlur={(e) => {
          if (onChangeText) {
            onChangeText(this.tempText);
          }
          if (onBlur) {
            onBlur(e);
          }
        }}
        {...rest}
      />);
    }
  }

  return HandleHandWritingTextInput;
};

export default withHandleHandWritingTextInput;

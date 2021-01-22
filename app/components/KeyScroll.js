import React from "react";
import { TouchableWithoutFeedback, Keyboard } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

function KeyScroll({ children }) {
  return (
    <KeyboardAwareScrollView
      enableOnAndroid={true}
      keyboardShouldPersistTaps="handled"
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        {children}
      </TouchableWithoutFeedback>
    </KeyboardAwareScrollView>
  );
}

export default KeyScroll;

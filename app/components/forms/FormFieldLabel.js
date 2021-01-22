import React from "react";
import { Text, TextInput } from "react-native";
import { useFormikContext } from "formik";
import { vh, vw } from "react-native-css-vh-vw";

import ErrorMessage from "./ErrorMessage";

import Colors from "../../config/colors";

function AppFormFieldLabel({
  name,
  style,
  label,
  theme,
  textError,
  ...otherProps
}) {
  const { setFieldTouched, handleChange, errors, touched } = useFormikContext();

  return (
    <>
      <Text
        style={{
          marginBottom: 10,
          textTransform: "capitalize",
          fontSize: vw(4.3),
          color: "#5F5F5F",
          letterSpacing: 0.5,
        }}
      >
        {label}
      </Text>
      <TextInput
        style={{
          height: vh(5),
          borderWidth: 0.5,
          borderRadius: 15,
          borderColor: Colors.gray,
          padding: 5,
          fontSize: vw(4.3),
          color: Colors.text,
          paddingHorizontal: 10,
          marginBottom: 20,
        }}
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        {...otherProps}
      />
      <ErrorMessage
        error={errors[name]}
        visible={touched[name]}
        styleText={textError}
      />
    </>
  );
}

export default AppFormFieldLabel;

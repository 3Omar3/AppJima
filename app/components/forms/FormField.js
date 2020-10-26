import React from "react";
import { useFormikContext } from "formik";

import TextInput from "../TextInput";
import ErrorMessage from "./ErrorMessage";

function AppFormField({ name, style, theme, textError, ...otherProps }) {
  const { setFieldTouched, handleChange, errors, touched } = useFormikContext();

  return (
    <>
      <TextInput
        onChangeText={handleChange(name)}
        onBlur={() => setFieldTouched(name)}
        style={style}
        theme={theme}
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

export default AppFormField;

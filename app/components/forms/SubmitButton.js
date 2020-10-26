import React from "react";
import { useFormikContext } from "formik";

import ButtonImage from "../ButtonImage";

function SubmitButton({ title, source, styleContainer, styleText }) {
  const { handleSubmit } = useFormikContext();

  return (
    <ButtonImage
      styleContainer={styleContainer}
      styleText={styleText}
      title={title}
      source={source}
      onPress={handleSubmit}
    />
  );
}

export default SubmitButton;

import React from "react";
import { useFormikContext } from "formik";

import ButtonImage from "../ButtonImage";

function SubmitButton({ title, source }) {
  const { handleSubmit } = useFormikContext();

  return <ButtonImage title={title} source={source} onPress={handleSubmit} />;
}

export default SubmitButton;

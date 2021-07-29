import React from "react";
import ControlContainer from "../Controls/ControlContainer";
import Label from "../Controls/Label";
import Textarea from "../Controls/Textarea";

interface IProps {
  name: string;
  id: string;
  label: string;
}

const TextareaGroup = (props: IProps) => {
  const { name, id, label } = props;

  const [isFocused, setIsFocused] = React.useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <ControlContainer fullWidth>
      <Label focused={isFocused} htmlFor={id}>
        {label}
      </Label>
      <Textarea
        onBlur={handleBlur}
        onFocus={handleFocus}
        fullWidth
        rows={4}
        name={name}
        id={id}
        required
      />
    </ControlContainer>
  );
};

export default TextareaGroup;

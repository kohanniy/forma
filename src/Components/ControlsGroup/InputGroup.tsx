import ControlContainer from "../Controls/ControlContainer";
import Label from "../Controls/Label";
import FormInput from "../Controls/FormInput";

interface IProps {
  type: string;
  name: string;
  id: string;
  placeholder?: string;
  label: string;
}

const InputGroup = (props: IProps) => {
  const { type, name, id, placeholder, label } = props;

  return (
    <ControlContainer fullWidth>
      <Label htmlFor={id}>{label}</Label>
      <FormInput
        name={name}
        type={type}
        id={id}
        placeholder={placeholder}
        required
      />
    </ControlContainer>
  );
};

export default InputGroup;

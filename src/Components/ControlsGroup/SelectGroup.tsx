import MenuItem from '@material-ui/core/MenuItem';
import Input from '@material-ui/core/Input';
import ControlContainer from '../Controls/ControlContainer';
import Label from '../Controls/Label';
import FormSelect from '../Controls/FormSelect';

interface IProps {
  label: string;
  id: string | number;
  name: string;
  options: Array<{ [n: string]: string }>;
}

const SelectGroup = (props: IProps) => {
  const { label, id, name, options } = props;

  return (
    <ControlContainer fullWidth>
      <Label htmlFor={id}>{label}</Label>
      <FormSelect
        labelId={id}
        name={name}
        defaultValue={options[0].value}
        input={<Input />}
        inputProps={{ id }}
      >
        {options.map((item) => (
          <MenuItem key={item.value} value={item.value}>
            {item.text}
          </MenuItem>
        ))}
      </FormSelect>
    </ControlContainer>
  );
};

export default SelectGroup;

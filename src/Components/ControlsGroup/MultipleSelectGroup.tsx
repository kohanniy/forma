import MenuItem from '@material-ui/core/MenuItem';
import Input from '@material-ui/core/Input';
import ControlContainer from '../Controls/ControlContainer';
import Label from '../Controls/Label';
import MultipleSelect from '../Controls/MultipleSelect';

interface IProps {
  label: string;
  id: string;
  name: string;
  categories: Array<{ [n: string]: string }>;
}

const MultipleSelectGroup = (props: IProps) => {
  const { label, id, name, categories } = props;

  return (
    <ControlContainer fullWidth>
      <Label htmlFor={id}>{label}</Label>
      <MultipleSelect
        labelId={id}
        id={id}
        name={name}
        input={<Input />}
        inputProps={{ id }}
      >
        {categories.map((category) => (
          <MenuItem key={category.value} value={category.value}>
            {category.text}
          </MenuItem>
        ))}
      </MultipleSelect>
    </ControlContainer>
  );
};

export default MultipleSelectGroup;

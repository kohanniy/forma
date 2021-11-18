import React from 'react';
import styled from 'styled-components';
import Select, { SelectProps } from '@material-ui/core/Select';
import Chip from '@material-ui/core/Chip';
import { DeleteCategoryIcon } from '../Icons/Icons';

const StyledSelect = styled((props) => <Select {...props} />)`
  &.MuiInputBase-root {
    color: #223367;
    font-size: 16px;
    font-weight: 500;
    line-height: 19px;
    letter-spacing: 0;
    outline: none;
    overflow: hidden;
  }

  &.MuiInput-underline::before,
  &.MuiInput-underline::after {
    display: none;
  }

  &.MuiInput-formControl {
    margin-top: 0;
  }

  & .MuiSelect-select {
    padding: 20px 0 20px 25px;
    border: 1px solid #c2c2c2;
    border-radius: 14px;
    outline: none;

    &:focus {
      border-radius: 14px;
      border-color: #606eea;
    }
  }

  & .MuiSelect-selectMenu {
    white-space: normal;
  }

  & .MuiSelect-icon {
    color: #606eaa;
    right: 27px;
  }
`;

const StyledChip = styled((props) => <Chip {...props} />)`
  &.MuiChip-root {
    color: #223367;
    height: auto;
    font-size: 16px;
    line-height: 19px;
    border-radius: 0;
    vertical-align: middle;
    justify-content: center;
    text-decoration: none;
    background-color: transparent;
    font-weight: 500;
    max-width: 100%;
  }

  &.MuiChip-root:not(:last-child) {
    margin-right: 25px;
  }

  & .MuiChip-label {
    padding-left: 0;
    padding-right: 8px;
    order: 0;
  }

  & svg {
    order: 1;
    width: 7px;
    height: 7px;

    & path {
      fill: #1890ff;
    }
  }
`;

const MultipleSelect = (props: SelectProps) => {
  const [category, setCategory] = React.useState<string[]>([]);

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;

  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setCategory(event.target.value as string[]);
  };

  return (
    <StyledSelect
      multiple
      value={category}
      onChange={handleChange}
      MenuProps={MenuProps}
      renderValue={(selected: any) => (
        <div>
          {(selected as string[]).map((value) => (
            <StyledChip
              key={value}
              label={value}
              icon={<DeleteCategoryIcon />}
            />
          ))}
        </div>
      )}
      {...props}
    />
  );
};

export default MultipleSelect;

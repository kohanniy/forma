import React from "react";
import styled from "styled-components";
import Container from "@material-ui/core/Container";
import IconButton from "@material-ui/core/IconButton";
import Chip from "@material-ui/core/Chip";
import ControlContainer from "../Controls/ControlContainer";
import Label from "../Controls/Label";
import FormInput from "../Controls/FormInput";
import { ArrowRightIcon, DeleteCategoryIcon } from "../Icons/Icons";

const InputWithBtnWrapper = styled(({ ...props }) => (
  <Container disableGutters {...props}>
    {props.children}
  </Container>
))`
  &.MuiContainer-root {
    display: flex;
    position: relative;
  }

  & .MuiInputBase-input {
    padding-inline-end: 70px;
  }
`;

const SubmitButton = styled(({ ...props }) => (
  <IconButton {...props}>{props.children}</IconButton>
))`
  &.MuiIconButton-root {
    box-sizing: border-box;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: 65px;
    flex: 0 0 auto;
    border-radius: 0 14px 14px 0;
    border: 1px solid #606eea;
    background-color: #606eea;

    @media (hover: hover) {
      &:hover {
        background-color: #303f9f;
        border-color: #303f9f;
      }
    }
  }

  &.MuiIconButton-root.Mui-disabled {
    border-color: #c2c2c2;
    background-color: #c2c2c2;
  }
`;

const KeywordsWrapper = styled(({ ...props }) => (
  <Container disableGutters {...props}>
    {props.children}
  </Container>
))`
  &.MuiContainer-root {
    margin-top: 10px;
  }
`;

const Keywords = styled(({ ...props }) => <Chip {...props} />)`
  &.MuiChip-root {
    color: #223367;
    height: 34px;
    padding: 0 11px;
    font-size: 14px;
    border-radius: 46px;
    font-weight: 300;
    line-height: 16px;
    margin-bottom: 5px;
    margin-right: 10px;
  }

  &.MuiChip-outlined {
    border: 1px solid #c4c4c4;
  }

  & .MuiChip-label {
    padding-left: 0;
    padding-right: 7px;
    order: 0;
    box-sizing: border-box;
    max-width: 200px;
  }

  & svg {
    order: 1;
    width: 7px;
    height: 7px;

    & path {
      fill: #c4c4c4;
    }
  }
`;

interface IProps {
  label: string;
  id: string | number;
  name: string;
  type: string;
}

const KeywordsGroup = (props: IProps) => {
  const { id, label, name, type } = props;

  const [value, setValue] = React.useState("");
  const [isDisabled, setIsDisabled] = React.useState(true);
  const [keywords, setKeywords] = React.useState<
    Array<{ id: string; value: string }>
  >([]);

  React.useEffect(() => {
    if (value === "") {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  }, [value]);

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setValue(evt.target.value);
  };

  const handleClick = () => {
    const keywordId = `f${(~~(Math.random() * 1e8)).toString(16)}`;
    const newKeyword = value;
    setKeywords([...keywords, { id: keywordId, value: newKeyword }]);
    setValue("");
  };

  const handleDelete = (evt: any) => {
    const newKeywords = keywords.filter(
      (keyword) => keyword.id !== evt.target.parentElement.dataset.id
    );
    setKeywords(newKeywords);
  };

  return (
    <ControlContainer fullWidth>
      <Label htmlFor={id}>{label}</Label>
      <InputWithBtnWrapper>
        <FormInput
          name={name}
          type={type}
          id={id}
          required
          onChange={handleChange}
          value={value}
        />
        <SubmitButton onClick={handleClick} disabled={isDisabled}>
          <ArrowRightIcon />
        </SubmitButton>
      </InputWithBtnWrapper>
      {keywords.length > 0 ? (
        <KeywordsWrapper>
          {keywords.map((keyword) => (
            <Keywords
              data-id={keyword.id}
              clickable
              variant="outlined"
              key={keyword.id}
              label={keyword.value}
              icon={<DeleteCategoryIcon />}
              onClick={handleDelete}
            />
          ))}
        </KeywordsWrapper>
      ) : null}
    </ControlContainer>
  );
};

export default KeywordsGroup;

import React from "react";
import LogoGroup from "../Components/ControlsGroup/LogoGroup";
import InputGroup from "../Components/ControlsGroup/InputGroup";
import TextareaGroup from "../Components/ControlsGroup/TextareaGroup";
import SelectGroup from "../Components/ControlsGroup/SelectGroup";
import MultipleSelectGroup from "../Components/ControlsGroup/MultipleSelectGroup";
import KeywordsGroup from "../Components/ControlsGroup/KeywordsGroup";
import SocialListGroup from "../Components/ControlsGroup/SocialsListGroup";

export interface IFormProps {
  type: string;
  label: string;
  id: string;
  name: string;
  placeholder?: string;
  options?: Array<{ [n: string]: string }>;
  accept?: string;
  description?: string;
  uploadBtnText?: string;
  inputType?: string;
  socials?: Array<{ id: string; icon: React.ReactNode; socialName: string }>;
}

const CustomControl: React.FC<IFormProps> = (props) => {
  const {
    type,
    label,
    id,
    name,
    placeholder,
    options,
    accept,
    description,
    uploadBtnText,
    inputType,
    socials
  } = props;

  const renderInput = () => {
    switch (type) {
      case "file":
        return (
          <LogoGroup
            key={id}
            type={type}
            description={description ? description : ""}
            uploadBtnText={uploadBtnText ? uploadBtnText : ""}
            accept={accept ? accept : ""}
            id={id}
            name={name}
          />
        );
      case "text":
      case "tel":
      case "url":
        return (
          <InputGroup
            key={id}
            label={label}
            id={id}
            name={name}
            type={type}
            placeholder={placeholder}
          />
        );
      case "textarea":
        return <TextareaGroup key={id} label={label} id={id} name={name} />;
      case "select":
        return (
          <SelectGroup
            key={id}
            id={id}
            label={label}
            name={name}
            options={options ? options : []}
          />
        );
      case "multiple-select":
        return (
          <MultipleSelectGroup
            key={id}
            categories={options ? options : []}
            id={id}
            label={label}
            name={name}
          />
        );
      case "keywords":
        return (
          <KeywordsGroup
            key={id}
            id={id}
            label={label}
            name={name}
            type={inputType ? inputType : ""}
          />
        );
      case "social":
        return <SocialListGroup socials={socials ? socials : []} />;
      default:
        return;
    }
  };

  return <>{renderInput()}</>;
};

export default CustomControl;

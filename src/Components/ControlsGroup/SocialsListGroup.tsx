import React from "react";
import ControlContainer from "../Controls/ControlContainer";
import SocialList from "../SocialList/SocialList";
import SocialItem from "../SocialList/SocialItem";

interface IProps {
  socials: Array<{ id: string, icon: React.ReactNode, socialName: string }>;
}

const SocialListGroup = (props: IProps) => {
  const { socials } = props;

  return (
    <ControlContainer fullWidth>
      <SocialList>
        {socials.map((value) => (
          <SocialItem
            key={value.id}
            icon={value.icon}
            id={value.id}
            socialName={value.socialName}
          />
        ))}
      </SocialList>
    </ControlContainer>
  );
};

export default SocialListGroup;

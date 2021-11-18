import React from 'react';
import UploadButton from '../Controls/UploadButton';
import FormLogo from '../Controls/FormLogo';

interface IProps {
  description: string;
  uploadBtnText: string;
  id: string;
  type: string;
  accept: string;
  name: string;
}

const LogoGroup = (props: IProps) => {
  const { description, uploadBtnText, id, type, accept, name } = props;

  const [src, setSrc] = React.useState('');

  React.useEffect(() => {
    setSrc(
      'https://quizizz.com/_media/quizzes/62221584-70d1-45b1-bac6-56a78350d7e3_900_900'
    );
  }, []);

  return src ? (
    <FormLogo src={src} />
  ) : (
    <UploadButton
      description={description}
      uploadBtnText={uploadBtnText}
      id={id}
      type={type}
      accept={accept}
      name={name}
    />
  );
};

export default LogoGroup;

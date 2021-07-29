import styled from 'styled-components'

const StyledForm = styled(({...props}) => (<form {...props}>{props.children}</form>))`
  display: flex;
  flex-direction: column;
`;

interface IProps {
  children: React.ReactNode,
  name: string,
  noValidate: boolean
}

const Form = (props: IProps) => {
  const {
    children,
    name,
    noValidate,
  } = props;

  const hadleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
  }

  return (
    <StyledForm noValidate={noValidate} name={name} onSubmit={hadleSubmit}>
      {children}
    </StyledForm>
  );
}

export default Form;

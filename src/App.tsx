import React from 'react';
import {
  makeStyles,
  Theme,
  createStyles,
} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormSection from './Components/FormSection';
import FormFooter from './Components/FormGrid/FormFooter';
import Form from './Components/Form';
import FormBody from './Components/FormGrid/FormBody';
import FormColumn from './Components/FormGrid/FormColumn';
import Fieldset from './Components/Fieldset/Fieldset';
import FieldsetHeader from './Components/Fieldset/FieldsetHeader';
import CustomControl from './utils/CustomControl';
import {
  fieldsetLogo,
  fieldsetPhone,
  fieldsetLink,
  fieldsetSocial,
} from './utils/constants';
import Header from './Components/AppBar';
import Menu from './Components/Menu';
import Main from './Components/Main';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 1),
      ...theme.mixins.toolbar,
      justifyContent: 'flex-end',
    },
  })
);

export default function App() {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header drawerOpen={open} onDrawerOpen={handleDrawerOpen} />
      <Menu drawerOpen={open} onDrawerClose={handleDrawerClose} />
      <Main drawerOpen={open}>
        <div className={classes.drawerHeader} />
        <FormSection component='section'>
          <Form name='about-company' noValidate>
            <FormBody>
              <FormColumn>
                <Fieldset>
                  <FieldsetHeader title='Логотип' />
                  {fieldsetLogo.map((item) => (
                    <React.Fragment key={item.id}>
                      {CustomControl(item)}
                    </React.Fragment>
                  ))}
                </Fieldset>
              </FormColumn>

              <FormColumn>
                <Fieldset>
                  <FieldsetHeader
                    title='Телефон'
                    description='Используется для кнопки «Позвонить» на странице вашей компании.'
                  />
                  {CustomControl(fieldsetPhone)}
                </Fieldset>
                <Fieldset>
                  <FieldsetHeader
                    title='Ссылка компании'
                    description='Используется для того, чтобы клиенты могли поситить ваш веб-сайт'
                  />
                  {fieldsetLink.map((item) => (
                    <React.Fragment key={item.id}>
                      {CustomControl(item)}
                    </React.Fragment>
                  ))}
                </Fieldset>
                <Fieldset>
                  <FieldsetHeader title='Социальные сети' />
                  {CustomControl(fieldsetSocial)}
                </Fieldset>
              </FormColumn>
            </FormBody>
            <FormFooter />
          </Form>
        </FormSection>
      </Main>
    </div>
  );
}

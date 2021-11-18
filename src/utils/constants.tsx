import {
  FacebookIcon,
  InstagramIcon,
  TelegramIcon,
  TwitterIcon,
  VKIcon,
  WhatsAppIcon,
  ViberIcon,
} from '../Components/Icons/Icons';

const categoriesOptions = [
  {
    value: 'val1',
    text: 'Val1',
  },
  {
    value: 'val2',
    text: 'Val2',
  },
  {
    value: 'val3',
    text: 'Val3',
  },
  {
    value: 'val4',
    text: 'Val4',
  },
];

const currencyOptions = [
  {
    value: 'uzs',
    text: 'UZS (Uzbekistan sum)',
  },
  {
    value: 'val2',
    text: 'Val2',
  },
  {
    value: 'val3',
    text: 'Val3',
  },
  {
    value: 'val4',
    text: 'Val4',
  },
];

export const socialListOptions = [
  {
    id: 'facebook',
    icon: <FacebookIcon />,
    socialName: 'Facebook',
  },
  {
    id: 'instagram',
    icon: <InstagramIcon />,
    socialName: 'Instagram',
  },
  {
    id: 'telegram',
    icon: <TelegramIcon />,
    socialName: 'Telegram',
  },
  {
    id: 'twitter',
    icon: <TwitterIcon />,
    socialName: 'Twitter',
  },
  {
    id: 'vk',
    icon: <VKIcon />,
    socialName: 'ВКонтакте',
  },
  {
    id: 'whatsapp',
    icon: <WhatsAppIcon />,
    socialName: 'WhatsApp',
  },
  {
    id: 'viber',
    icon: <ViberIcon />,
    socialName: 'Viber',
  },
];

export const fieldsetLogo = [
  {
    type: 'file',
    description:
      'Можно загрузить фотографию JPG или PNG, минимальное разрешение 400*400рх, размер не более 3Мбайт.',
    uploadBtnText: 'Загрузить логотип',
    accept: 'image/*',
    id: 'companyLogo',
    name: 'logo',
    label: ',',
  },
  {
    type: 'text',
    label: 'Название',
    id: 'companyName',
    name: 'name',
    placeholder: 'Nasa cosmonavtic',
  },
  {
    type: 'text',
    label: 'Деятельность компании',
    id: 'companyActivity',
    name: 'activity',
    placeholder: 'Отправка ракет в космос',
  },
  {
    type: 'textarea',
    label: 'Описание',
    id: 'companyDescription',
    name: 'description',
  },
  {
    type: 'select',
    label: 'Валюта',
    id: 'currencyCompany',
    name: 'currency',
    options: currencyOptions,
  },
  {
    type: 'multiple-select',
    label: 'Выберите две категории',
    id: 'companyCategories',
    name: 'categories',
    options: categoriesOptions,
  },
  {
    type: 'keywords',
    label: 'Ключевые слова',
    id: 'companyKeywords',
    name: 'keywords',
    options: categoriesOptions,
    inputType: 'text',
  },
];

export const fieldsetPhone = {
  type: 'tel',
  label: 'Номер телефона',
  id: 'phoneCompany',
  name: 'phone',
};

export const fieldsetLink = [
  {
    id: 'siteNameCompany',
    label: 'Название ссылки',
    name: 'site-name',
    type: 'text',
  },
  {
    id: 'siteLinkCompany',
    label: 'Ссылка',
    name: 'site-link',
    type: 'url',
  },
];

export const fieldsetSocial = {
  type: 'social',
  socials: socialListOptions,
  id: '',
  label: '',
  name: '',
};

export const drawerWidth = 240;

import classNames from 'classnames/bind';
import { FC } from 'react';

import s from './LangSwitcher.module.scss';
import { useTranslation } from 'react-i18next';
import { Button } from '../Button/Button';

const cn = classNames.bind(s);

interface ILangSwitcherProps {
  className?: string;
}

export const LangSwitcher: FC<ILangSwitcherProps> = (props) => {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <Button onClick={toggleLanguage} theme='clear'>
      {t('language')}
    </Button>
  );
};

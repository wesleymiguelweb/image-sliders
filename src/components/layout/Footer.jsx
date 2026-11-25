import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="py-10 text-xs font-semibold tracking-widest text-subtle">
      {t('footer')}
    </footer>
  );
}

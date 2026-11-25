import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../language/LanguageSwitcher.jsx';
import ThemeSwitcher from '../theme/ThemeSwitcher.jsx';

export default function Header() {
  const { t } = useTranslation();

  return (
    <header className="flex items-center justify-between gap-4 border-b border-line py-8">
      <strong className="text-mauve tracking-[.24em]">WILD / STORIES</strong>
      <div className="flex items-center gap-5">
        <nav
          aria-label={t('header.navLabel')}
          className="hidden text-xs font-semibold tracking-widest text-muted sm:block"
        >
          {t('header.nav')}
        </nav>
        <div className="flex items-center gap-2">
          <ThemeSwitcher />
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
}

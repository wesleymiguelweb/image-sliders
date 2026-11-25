import { Moon, Sun } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../hooks/useTheme.js';
import IconButton from '../ui/IconButton.jsx';

export default function ThemeSwitcher() {
  const { t } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';
  const actionLabel = isDark ? t('theme.toLight') : t('theme.toDark');

  return (
    <IconButton
      icon={isDark ? Sun : Moon}
      label={t('theme.toggle')}
      title={actionLabel}
      aria-pressed={isDark}
      onClick={toggleTheme}
      className="size-9"
    />
  );
}

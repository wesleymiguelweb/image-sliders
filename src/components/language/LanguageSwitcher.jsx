import { useEffect, useRef, useState } from 'react';
import { Check, ChevronDown, Languages } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { languages } from '../../constants/languages.js';

export default function LanguageSwitcher() {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);
  const triggerRef = useRef(null);

  const current =
    languages.find(({ code }) => code === i18n.resolvedLanguage) ?? languages[0];

  useEffect(() => {
    if (!open) {
      return undefined;
    }

    function handlePointerDown(event) {
      if (!containerRef.current?.contains(event.target)) {
        setOpen(false);
      }
    }

    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        setOpen(false);
        triggerRef.current?.focus();
      }
    }

    document.addEventListener('pointerdown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('pointerdown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [open]);

  function selectLanguage(code) {
    i18n.changeLanguage(code);
    setOpen(false);
    triggerRef.current?.focus();
  }

  return (
    <div ref={containerRef} className="relative">
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls="language-options"
        aria-label={`${t('language.button')} (${current.label})`}
        className="inline-flex items-center gap-2 rounded-xl border border-line bg-surface px-3 py-2 text-xs font-bold tracking-widest text-mauve shadow-sm transition hover:bg-surface-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mauve"
      >
        <Languages aria-hidden="true" size={16} strokeWidth={2.25} />
        {current.short}
        <ChevronDown
          aria-hidden="true"
          size={14}
          strokeWidth={2.5}
          className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>

      {open && (
        <div
          id="language-options"
          role="group"
          aria-label={t('language.label')}
          className="absolute right-0 z-20 mt-2 w-48 rounded-2xl border border-line bg-surface p-1.5 shadow-xl"
        >
          {languages.map(({ code, label, short }) => {
            const isActive = current.code === code;

            return (
              <button
                key={code}
                type="button"
                lang={code}
                aria-pressed={isActive}
                onClick={() => selectLanguage(code)}
                className={`flex w-full items-center justify-between gap-3 rounded-xl px-3 py-2 text-left text-sm font-semibold transition ${
                  isActive
                    ? 'bg-surface-soft text-mauve'
                    : 'text-muted hover:bg-surface-soft'
                }`}
              >
                <span className="flex items-baseline gap-2">
                  {label}
                  <span
                    aria-hidden="true"
                    className="text-[10px] font-bold uppercase tracking-widest text-subtle"
                  >
                    {short}
                  </span>
                </span>
                {isActive && (
                  <Check
                    aria-hidden="true"
                    size={16}
                    strokeWidth={3}
                    className="shrink-0 text-mauve"
                  />
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

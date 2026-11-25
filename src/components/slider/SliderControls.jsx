import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { padNumber } from '../../utils/format.js';

const buttonBase =
  'grid size-13 place-items-center rounded-2xl shadow-sm transition duration-200 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mauve';

export default function SliderControls({ current, total, onPrevious, onNext }) {
  const { t } = useTranslation();

  return (
    <div
      className="mt-8 flex items-center gap-3"
      role="group"
      aria-label={t('controls.label')}
    >
      <button
        type="button"
        onClick={onPrevious}
        aria-label={t('controls.previous')}
        className={`${buttonBase} border border-line bg-surface text-mauve hover:bg-surface-soft`}
      >
        <ArrowLeft aria-hidden="true" size={20} strokeWidth={2.25} />
      </button>
      <button
        type="button"
        onClick={onNext}
        aria-label={t('controls.next')}
        className={`${buttonBase} bg-button text-white hover:bg-button-hover`}
      >
        <ArrowRight aria-hidden="true" size={20} strokeWidth={2.25} />
      </button>
      <span className="ml-auto text-sm font-bold tabular-nums text-mauve">
        {padNumber(current + 1)} / {padNumber(total)}
      </span>
    </div>
  );
}

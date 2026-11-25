import { useTranslation } from 'react-i18next';
import { useSlider } from '../../hooks/useSlider.js';
import Pill from '../ui/Pill.jsx';
import SliderControls from './SliderControls.jsx';

export default function ImageSlider() {
  const { t } = useTranslation();
  const { current, total, slide: media, goPrevious, goNext } = useSlider();
  const slide = { ...media, ...t('slides', { returnObjects: true })[media.id] };

  function handleKeyDown(event) {
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      goPrevious();
    }

    if (event.key === 'ArrowRight') {
      event.preventDefault();
      goNext();
    }
  }

  return (
    <section
      aria-label={t('gallery.label')}
      aria-roledescription={t('gallery.roleDescription')}
      className="w-full min-w-0 rounded-[36px] focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-mauve"
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      <p className="mb-5 text-xs font-bold tracking-[.18em] text-accent">
        {t('gallery.featured', { topic: slide.eyebrow })}
      </p>
      <div className="relative aspect-[1.17] rounded-[28px] bg-frame p-6">
        <div
          aria-hidden="true"
          className={`absolute inset-10 rotate-[-7deg] rounded-3xl dark:opacity-25 ${slide.frameBack}`}
        />
        <div
          aria-hidden="true"
          className={`absolute inset-9 rotate-[5deg] rounded-3xl dark:opacity-25 ${slide.frameFront}`}
        />
        <img
          key={slide.image}
          src={slide.image}
          alt={slide.alt}
          className="slide-enter relative h-full w-full rounded-3xl object-cover shadow-2xl"
          draggable={false}
        />
        <Pill className="absolute bottom-9 left-9">{slide.habitat}</Pill>
      </div>
      <div key={slide.id} className="caption-enter mt-7">
        <h2 className="text-3xl font-bold">{slide.title}</h2>
        <p className="mt-3 text-base leading-relaxed text-muted">
          {slide.description}
        </p>
      </div>
      <SliderControls
        current={current}
        total={total}
        onPrevious={goPrevious}
        onNext={goNext}
      />
      <p className="sr-only" aria-live="polite">
        {t('gallery.slideAnnouncement', {
          current: current + 1,
          total,
          title: slide.title,
        })}
      </p>
    </section>
  );
}

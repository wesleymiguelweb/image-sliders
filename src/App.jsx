import { useTranslation } from 'react-i18next';
import Background from './components/layout/Background.jsx';
import Header from './components/layout/Header.jsx';
import Footer from './components/layout/Footer.jsx';
import ImageSlider from './components/slider/ImageSlider.jsx';

export default function App() {
  const { t } = useTranslation();

  return (
    <div className="relative isolate min-h-screen overflow-hidden text-ink">
      <Background />
      <div className="mx-auto max-w-[1280px] px-6 sm:px-10">
        <Header />
        <main className="grid gap-16 py-20 lg:grid-cols-2 lg:items-center lg:gap-20">
          <section aria-label={t('hero.label')} className="space-y-7">
            <p className="text-xs font-bold tracking-[.2em] text-accent">
              {t('hero.eyebrow')}
            </p>
            <h1 className="max-w-xl text-5xl font-bold leading-tight tracking-tight sm:text-6xl">
              {t('hero.title')}
            </h1>
            <p className="max-w-lg text-lg leading-relaxed text-muted">
              {t('hero.description')}
            </p>
          </section>
          <ImageSlider />
        </main>
        <Footer />
      </div>
    </div>
  );
}

'use client';
import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, MapPin, Building2 } from 'lucide-react';
import { useTranslations, useLocale } from 'next-intl';
import { Button } from '@/components/ui/Button';
import { METRICS, CERTIFICATIONS } from '@/mocks/index';

export function HeroHome() {
  const t = useTranslations('hero');
  const locale = useLocale();
  const lhref = (path: string) => `/${locale}${path}`;


  const [animated, setAnimated] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoVisible, setVideoVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setAnimated(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (prefersReducedMotion.matches) {
      video.pause();
      setVideoVisible(false);
    }

    const handleMotionChange = (e: MediaQueryListEvent) => {
      if (!videoRef.current) return;
      if (e.matches) {
        videoRef.current.pause();
        setVideoVisible(false);
      } else {
        videoRef.current.play().catch(() => setVideoVisible(false));
        setVideoVisible(true);
      }
    };

    prefersReducedMotion.addEventListener('change', handleMotionChange);

    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        setVideoVisible(false);
      });
    }

    return () => prefersReducedMotion.removeEventListener('change', handleMotionChange);
  }, []);

  return (
    <section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-gradient-hero"
      aria-label="Hero — Foursys"
    >
      <div className="absolute inset-0 z-0 bg-gradient-hero" aria-hidden="true">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          disablePictureInPicture
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${videoVisible ? 'opacity-100' : 'opacity-0'}`}
          aria-hidden="true"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
          <source src="/hero-video.mov" type="video/quicktime" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-navy/85 via-navy/75 to-navy/90" />
        <div className="absolute inset-0 opacity-30 animate-gradient-shift" style={{
          background: 'linear-gradient(135deg, rgba(249,115,22,0.15) 0%, transparent 50%, rgba(15,23,42,0.3) 100%)',
          backgroundSize: '200% 200%',
        }} />
      </div>

      <div className="absolute inset-0 pointer-events-none overflow-hidden z-[1]" aria-hidden="true">
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full bg-orange/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-navy-light/30 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/3 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/3 rounded-full" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.3) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="container-site relative z-10 pt-28 pb-16 flex flex-col items-start">
        {/* Badge */}
        <div
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-pill bg-orange/15 border border-orange/30 mb-8 transition-all duration-700 ${animated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          <span className="w-2 h-2 rounded-full bg-orange animate-pulse-slow" />
          <span className="text-label-md text-orange font-semibold tracking-wide">{t('badge')}</span>
        </div>

        {/* Headline — split by the highlight text to colorize it inline */}
        <h1
          className={`text-display-xl text-white max-w-4xl leading-[1.05] mb-5 transition-all duration-700 delay-100 ${animated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          {(() => {
            const highlight = t('highlight');
            const parts = t('headline').split(highlight);
            return (
              <>
                {parts[0]}
                <span className="text-gradient-orange">{highlight}</span>
                {parts[1] ?? ''}
              </>
            );
          })()}
        </h1>

        {/* Tagline */}
        <p
          className={`text-body-lg sm:text-body-xl text-white/90 max-w-2xl leading-relaxed mb-3 transition-all duration-700 delay-200 ${animated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          {t('tagline')}
        </p>
        <p
          className={`text-body-md text-white/60 max-w-xl mb-8 transition-all duration-700 delay-200 ${animated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          {t('subtagline')}
        </p>

        {/* Trust badges */}
        <div
          className={`flex flex-wrap gap-2 mb-10 transition-all duration-700 delay-[250ms] ${animated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl glass text-body-sm text-white/90 font-medium">
            <ShieldCheck className="w-4 h-4 text-orange flex-shrink-0" />
            {t('badge_governance')}
          </span>
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl glass text-body-sm text-white/80">
            <MapPin className="w-4 h-4 text-orange/80 flex-shrink-0" />
            {t('badge_presence')}
          </span>
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl glass text-body-sm text-white/80">
            <Building2 className="w-4 h-4 text-orange/80 flex-shrink-0" />
            {t('badge_sectors')}
          </span>
        </div>

        {/* CTAs */}
        <div
          className={`flex flex-col sm:flex-row sm:items-center gap-4 mb-4 transition-all duration-700 delay-300 ${animated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          <Button href={lhref('/contato')} variant="primary" size="xl" rightIcon={<ArrowRight className="w-5 h-5" />}>
            {t('cta_primary')}
          </Button>
          <Link
            href={lhref('/casos-de-sucesso')}
            className="text-body-lg text-white/70 hover:text-white underline underline-offset-4 transition-colors sm:ml-2"
          >
            {t('cta_secondary')}
          </Link>
        </div>
        <p className="text-body-sm text-white/50 mb-12">{t('trust')}</p>

        {/* Metrics bar */}
        <div
          className={`w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 pt-8 border-t border-white/10 transition-all duration-700 delay-500 ${animated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          {METRICS.map((metric) => (
            <div key={metric.id} className="glass rounded-xl p-5 flex flex-col gap-1 hover:bg-white/12 hover:scale-[1.02] transition-all duration-300 group">
              <span className="text-2xl sm:text-3xl lg:text-4xl text-white font-extrabold leading-none group-hover:text-orange-light transition-colors">
                {metric.value}
              </span>
              <p className="text-body-md text-white/90 font-semibold mt-1">{metric.label}</p>
              {metric.sublabel && <p className="text-body-sm text-white/50">{metric.sublabel}</p>}
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div
          className={`flex flex-wrap gap-2 mt-8 transition-all duration-700 delay-700 ${animated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          {CERTIFICATIONS.map(cert => (
            <span key={cert.id} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-pill bg-white/8 border border-white/15 text-label-sm text-white/70 font-semibold">
              ✓{cert.name}
            </span>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white/5 to-transparent pointer-events-none" aria-hidden="true" />
    </section>
  );
}

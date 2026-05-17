'use client';

import Lottie from 'lottie-react';

import animationData from '@/public/animations/car-loader.json';

import css from './Loader.module.css';

interface LoaderProps {
  fullscreen?: boolean;
  small?: boolean;
}

export default function Loader({
  fullscreen = false,
  small = false,
}: LoaderProps) {
  return (
    <div className={fullscreen ? css.overlay : css.inlineLoader}>
      <div className={`${css.loader} ${small ? css.small : ''}`}>
        <Lottie animationData={animationData} loop autoplay />
      </div>
    </div>
  );
}

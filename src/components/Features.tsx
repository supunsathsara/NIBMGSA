'use client';

import clsx from 'clsx';
import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

import { Button } from './Button';
import { Container } from './Container';

type FeaturesProps = {
  children: React.ReactNode;
  color: string;
  colorDark: string;
  id?: string;
};

export const Features = ({ children, id, color, colorDark }: FeaturesProps) => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: false });

  return (
    <section
      id={id || ''}
      ref={ref}
      className={clsx(
        'after:bg-[radial-gradient(ellipse_100%_40%_at_50%_60%,rgba(var(--feature-color),0.1),transparent) relative flex flex-col items-center overflow-x-clip before:pointer-events-none before:absolute before:h-[40rem] before:w-full before:bg-[conic-gradient(from_90deg_at_80%_50%,#000212,rgb(var(--feature-color-dark))),conic-gradient(from_270deg_at_20%_50%,rgb(var(--feature-color-dark)),#000212)] before:bg-no-repeat before:transition-[transform,opacity] before:duration-1000 before:ease-in before:[mask:radial-gradient(100%_50%_at_center_center,_black,_transparent)] before:[background-size:50%_100%,50%_100%] before:[background-position:1%_0%,99%_0%] after:pointer-events-none after:absolute after:inset-0',
        inView &&
          'is-visible before:opacity-100 before:[transform:rotate(180deg)_scale(2)]',
        !inView && 'before:rotate-180 before:opacity-40'
      )}
      style={
        {
          '--feature-color': color,
          '--feature-color-dark': colorDark,
        } as React.CSSProperties
      }
    >
      <div className="mt-[10.2rem] w-full">{children}</div>
    </section>
  );
};

type FeatureMainProps = {
  image?: StaticImageData;
  text: string;
  title: React.ReactNode;
  imgSize?: 'small' | 'large';
  btnText?: React.ReactNode;
};

const FeatureMain = ({
  image,
  text,
  title,
  imgSize,
  btnText,
}: FeatureMainProps) => {
  return (
    <>
      <div className="relative before:absolute before:inset-0 before:bg-[radial-gradient(ellipse_50%_50%_at_center,rgba(var(--feature-color),0.1),transparent)]">
        <Container
          className={clsx(
            'max-w-[90%] text-center',
            imgSize === 'small' ? 'w-[78rem]' : 'w-[102.4rem]'
          )}
        >
          <h2 className="text-gradient mb-11 translate-y-[40%] text-center text-6xl [transition:transform_1000ms_cubic-bezier(0.3,1.17,0.55,0.99)0s] md:text-8xl [.is-visible_&]:translate-y-0">
            {title}
          </h2>
          {image && (
            <div className="relative z-10 rounded-[14px] before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:bg-[linear-gradient(rgba(255,255,255,0.3),rgba(255,255,255,0)120%)] before:p-[1px] before:[mask:linear-gradient(black,black)content-box_content-box,linear-gradient(black,black)] before:[mask-composite:xor] after:pointer-events-none after:absolute after:inset-0 after:rounded-[inherit] after:bg-[rgba(255,255,255,0.15)] after:[mask:linear-gradient(black,transparent)]">
              <Image src={image} alt="issues" className="h-auto w-full" />
            </div>
          )}
        </Container>
      </div>
      <Container className="w-[78rem] max-w-[90%] text-center">
        <p className="mx-auto my-16 text-xl leading-tight text-white md:w-full md:text-3xl z-10 relative">
          {text}
        </p>
        {btnText && (
          <Button
            type="button"
            intent="secondary"
            size="sm"
            className="-top-6 mb-11"
          >
            {btnText}
          </Button>
        )}
        <hr className="mb-[7.2rem] h-[1px] border-none bg-[linear-gradient(to_right,transparent,rgba(255,255,255,0.1)50%,transparent)]" />
      </Container>
    </>
  );
};

type FeatureGridProps = {
  features: {
    icon: React.FC;
    title: string;
    text: string;
  }[];
};

const FeatureGrid = ({ features }: FeatureGridProps) => {
  return (
    <Container>
      <div className="mb-[14rem] grid w-full grid-cols-2 place-items-start gap-y-9 text-sm text-gray-300 md:grid-cols-3 md:place-items-center md:text-md">
        {features.map(({ title, text, icon: Icon }) => (
          <div
            key={title}
            className="w-full space-y-1 md:max-w-[25.6rem] [&_svg]:mb-[4px] [&_svg]:fill-white md:[&_svg]:mr-[6px] md:[&_svg]:mb-[2px] md:[&_svg]:inline"
          >
            <Icon />
            <span className="block text-white md:inline">
              {title}
            </span> <br /> {text}
          </div>
        ))}
      </div>
    </Container>
  );
};

type FeatureCardsProps = {
  features: {
    image?: StaticImageData;
    imgClassName?: string;
    title: string;
    text: string;
  }[];
};

const FeatureCards = ({ features }: FeatureCardsProps) => {
  return (
    <Container>
      <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2">
        {features.map(({ title, text, image, imgClassName }) => (
          <div
            key={title}
            className="relative aspect-[1.1/1] overflow-hidden rounded-[2.4rem] border border-gray-100 bg-[radial-gradient(ellipse_at_center,rgba(var(--feature-color),0.15),transparent)] py-6 px-8 before:pointer-events-none before:absolute before:inset-0 before:bg-glass-gradient md:rounded-[4.8rem] md:p-14"
          >
            <h3 className="mb-2 text-2xl text-white">{title}</h3>
            <p className="max-w-[31rem] text-md text-gray-300">{text}</p>

            {image && (
              <Image
                src={image}
                alt={title}
                className={clsx('absolute max-w-none', imgClassName)}
              />
            )}
          </div>
        ))}
      </div>
    </Container>
  );
};

Features.Main = FeatureMain;
Features.Grid = FeatureGrid;
Features.Cards = FeatureCards;

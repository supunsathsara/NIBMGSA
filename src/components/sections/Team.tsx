'use client';

import { Container } from '@components/Container';
import { CommitteeMembers as Members } from '@lib/data';
import clsx from 'clsx';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

export const Team = () => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: false });
  return (
    <section
      id="committee"
      ref={ref}
      className={clsx(
        'after:bg-[radial-gradient(ellipse_100%_40%_at_50%_60%,rgba(var(--feature-color),0.1),transparent) relative flex flex-col items-center overflow-x-clip before:pointer-events-none before:absolute before:h-[40rem] before:w-full before:bg-[conic-gradient(from_90deg_at_80%_50%,#000212,rgb(var(--feature-color-dark))),conic-gradient(from_270deg_at_20%_50%,rgb(var(--feature-color-dark)),#000212)] before:bg-no-repeat before:transition-[transform,opacity] before:duration-1000 before:ease-in before:[background-position:1%_0%,99%_0%] before:[background-size:50%_100%,50%_100%] before:[mask:radial-gradient(100%_50%_at_center_center,_black,_transparent)] after:pointer-events-none after:absolute after:inset-0',
        inView &&
          'is-visible before:opacity-100 before:[transform:rotate(180deg)_scale(2)]',
        !inView && 'before:rotate-180 before:opacity-40'
      )}
      style={
        {
          '--feature-color': '62,36,118',
          '--feature-color-dark': '62,36,118',
        } as React.CSSProperties
      }
    >
      <div className="mt-[10.2rem] w-full">
        <div className="relative before:absolute before:inset-0 before:bg-[radial-gradient(ellipse_50%_50%_at_center,rgba(var(62,36,118),0.1),transparent)]">
          <Container className="w-[78rem] max-w-[90%] text-center">
            <h2 className="text-gradient mb-11 translate-y-[40%] text-center text-6xl [transition:transform_1000ms_cubic-bezier(0.3,1.17,0.55,0.99)0s] md:text-8xl [.is-visible_&]:translate-y-0">
              Our Committee Members
            </h2>
            {/* <div className="relative rounded-[14px] before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:bg-[linear-gradient(rgba(255,255,255,0.3),rgba(255,255,255,0)120%)] before:p-[1px] before:[mask:linear-gradient(black,black)content-box_content-box,linear-gradient(black,black)] before:[mask-composite:xor] after:pointer-events-none after:absolute after:inset-0 after:rounded-[inherit] after:bg-[rgba(255,255,255,0.15)] after:[mask:linear-gradient(black,transparent)]">
              <Image
                src={MeetTeamImg}
                alt="meet-the-team"
                className="mx-auto h-auto w-1/2 text-center"
              />
            </div> */}
          </Container>
        </div>
        <Container className="mt-10 w-[78rem] max-w-[90%] text-center text-white">
          <>
            <p className="mx-auto mb-12 mt-16 text-xl leading-tight text-white md:mt-12 md:w-full md:text-3xl">
              Leading with Excellence, Guiding with Passion
            </p>
            <div className="grid grid-cols-2 gap-5 md:grid-cols-3">
              {Members.map((member) => (
                <div
                  key={member.designation}
                  className="flex flex-col items-center justify-center"
                >
                  <Image
                    src={`/committee/${member.image}`}
                    alt={member.name}
                    width={192}
                    height={192}
                    className="w-48 h-48 rounded-full"
                  />
                  <h3 className="text-2xl font-semibold">{member.name}</h3>
                  <p className="text-lg">{member.designation}</p>
                </div>
              ))}
            </div>
          </>
        </Container>
      </div>
    </section>
  );
};

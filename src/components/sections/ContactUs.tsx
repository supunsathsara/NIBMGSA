'use client';

import contactUsImg from '@assets/images/contact_us.svg';
import { Container } from '@components/Container';
import clsx from 'clsx';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

export const ContactUs = () => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: false });

  return (
    <section
      id="contact"
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
              Contact Us
            </h2>
            <div className="relative rounded-[14px] before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:bg-[linear-gradient(rgba(255,255,255,0.3),rgba(255,255,255,0)120%)] before:p-[1px] before:[mask-composite:xor] before:[mask:linear-gradient(black,black)content-box_content-box,linear-gradient(black,black)] after:pointer-events-none after:absolute after:inset-0 after:rounded-[inherit] after:bg-[rgba(255,255,255,0.15)] after:[mask:linear-gradient(black,transparent)]">
              <Image
                src={contactUsImg}
                alt="conatct-us"
                className="mx-auto h-auto w-1/2 text-center"
              />
            </div>
          </Container>
        </div>
        <Container className="w-[78rem] max-w-[90%] text-center text-white">
          <>
            <p className="mx-auto my-12 text-xl leading-tight text-white md:w-full md:text-3xl">
              Feel free to contact us for any inquiries.
            </p>

            <form
              action="#"
              className="z-10 mt-4 flex flex-col gap-3 text-start text-white"
            >
              <div className="flex w-full flex-row gap-3">
                <div className="flex w-1/2 flex-col">
                  <label htmlFor="name" className="float-left ml-1 text-xl">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    className="rounded-md border-2 border-white p-2 text-lg text-black"
                  />
                </div>
                <div className="flex w-1/2 flex-col">
                  <label htmlFor="email" className="text-xl">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="rounded-md border-2 border-white p-2 text-lg text-black"
                    required
                  />
                </div>
              </div>
              <div className="flex w-full flex-col">
                <label htmlFor="subject" className="text-xl">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  className="rounded-md border-2 border-white p-2 text-lg text-black"
                  required
                />
              </div>
              <div className="flex w-full flex-col">
                <label htmlFor="message" className="text-xl">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={10}
                  className="rounded-md border-2 border-white p-2 text-lg text-black"
                  required
                />
              </div>
              <div className="flex w-1/2 flex-col">
                <button
                  type="submit"
                  className="float-right mx-auto rounded-md border-2 border-white px-10 py-4 text-md font-bold hover:bg-gray-200 hover:text-black md:text-xl"
                >
                  Send
                </button>
              </div>
            </form>
          </>
        </Container>
      </div>
    </section>
  );
};

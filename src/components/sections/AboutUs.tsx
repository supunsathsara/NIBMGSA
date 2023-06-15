'use client';

import Logo from '@assets/images/logo-m.svg';
import { Features } from '@components/Features';
import { ChevronIcon } from '@components/icons/chevron';
import Link from 'next/link';

export const AboutUs = () => {
  return (
    <Features color="194,97,254" colorDark="53,42,79" id="about">
      <Features.Main
        title={<>About Us</>}
        image={Logo}
        imgSize="small"
        text="Welcome to the NIBM GALLE Students Association! We are the official student body representing the vibrant and diverse student community at the Galle campus of the National Institute of Business Management (NIBM). As an association, we aim to foster a sense of belonging, promote academic excellence, and provide a platform for personal and professional growth."
        btnText={
          <>
            <Link
              href="/about"
              className="flex items-center justify-center gap-1"
            >
              Read More <span className="sr-only">About Us</span>
              <ChevronIcon fill="#8A8F98" className="mb-0 ml-1" />
            </Link>
          </>
        }
      />
    </Features>
  );
};

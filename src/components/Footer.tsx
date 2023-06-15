import LogoM from '@assets/images/logo-m.svg';
import { Container } from '@components/Container';
import { GithubIcon } from '@components/icons/github';
import { TwitterIcon } from '@components/icons/twitter';
import Image from 'next/image';

import { FooterLink } from './FooterLink';

export const Footer = () => {
  return (
    <footer className="mt-12 border-t border-gray-100 py-[5.6rem] text-md">
      <Container className="flex flex-col justify-between lg:flex-row">
        <div>
          <div className="flex h-full flex-row justify-between lg:flex-col">
            <div className="flex items-center text-gray-400">
              <Image src={LogoM} alt={'Logo'} className="h-auto w-[40%]" />
            </div>
            <div className="mt-auto ml-3 flex space-x-4 text-gray-400">
              <TwitterIcon />
              <GithubIcon />
            </div>
          </div>
        </div>
        <FooterLink />
      </Container>
    </footer>
  );
};

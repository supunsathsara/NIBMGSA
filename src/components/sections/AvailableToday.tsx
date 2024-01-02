import Logo from '@assets/images/logo-m.svg';
import { Button } from '@components/Button';
import { Container } from '@components/Container';
import Image from 'next/image';
import Link from 'next/link';

export const AvailableToday = () => {
  return (
    <Container>
      <div className="flex flex-col items-center justify-center gap-10 pb-16 text-center">
        <Image src={Logo} alt="Linear app icon" className="w-[25.8rem]" />
        <h1 className="text-gradient text-5xl md:text-8xl">
          Empowering NIBM GALLE Students.

        </h1>
        <div className="flex gap-[1.6rem]">
          <Button type="button" intent="primary" size="lg">
            <Link href='/register'>
            Join us now
            </Link>
          </Button>
        </div>
      </div>
    </Container>
  );
};

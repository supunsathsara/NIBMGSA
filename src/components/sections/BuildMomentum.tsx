'use client';

import { Features } from '@components/Features';

import {
  CreepIcon,
  DelaysIcon,
  TrackingIcon,
} from '../icons/features/buildMomentum';

export const BuildMomentum = () => {
  return (
    <Features color="40,87,255" colorDark="48,58,117">
      <Features.Main
        title={<>Our Purpose</>}
        text="At NIBM GALLE Students Association, our primary purpose is to serve as the voice of the student body. We work diligently to address the needs, concerns, and interests of our fellow students, striving to create an inclusive and supportive environment for everyone. We believe in empowering students to reach their full potential and enhance their overall college experience."
      />
      <Features.Grid
        features={[
          {
            icon: DelaysIcon,
            title: 'Student Advocacy',
            text: 'We represent and support student interests.',
          },
          {
            icon: TrackingIcon,
            title: 'Community Building',
            text: 'We foster unity and inclusivity among students.',
          },
          {
            icon: CreepIcon,
            title: 'Personal and Professional Growth',
            text: 'We empower students for personal and career development.',
          },
        ]}
      />
    </Features>
  );
};

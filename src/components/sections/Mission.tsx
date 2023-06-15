'use client';

import CardRoadmapsImg from '@assets/images/card-roadmaps.webp';
import CardUpdatesImg from '@assets/images/card-updates.webp';
import RoadmapImg from '@assets/images/roadmap.webp';
import MissionImg from '@assets/images/mission.svg';
import improveImg from '@assets/images/improve.svg';
import powerfulImg from '@assets/images/powerful.svg';
import { Features } from '@components/Features';

import {
  DocumentsIcon,
  InsightsIcon,
  MultiTeamIcon,
  NotificationsIcon,
  RoadmapsIcon,
  TimelineIcon,
} from '../icons/features/setDirection';

export const Mission = () => {
  return (
    <Features color="0,225,244" colorDark="31,49,64">
      <Features.Main
        title={<>Our Mission</>}
        image={MissionImg}
        imgSize="small"
        text="Our mission is to facilitate an engaging and enriching student life by organizing a wide range of events, activities, and initiatives. These include academic seminars, workshops, career development programs, cultural festivals, sports competitions, community service projects, and much more. By offering these opportunities, we aim to nurture holistic development, encourage leadership skills, and promote a sense of camaraderie among our members."
      />
      <Features.Cards
        features={[
          {
            image: improveImg,
            imgClassName: 'bottom-[10%] right-[10%] w-[30%]',
            title: 'Academic Excellence',
            text: "We strive to promote academic excellence by organizing seminars, workshops, and study groups to enhance students' learning experience. Our mission is to provide the necessary resources and support for students to excel in their studies and achieve their academic goals.",
          },
          {
            image: powerfulImg,
            imgClassName: 'bottom-[10%] right-[10%] w-[40%]',
            title: 'Leadership Development',
            text: 'We are dedicated to developing leadership skills among our members. Through various initiatives such as leadership workshops, mentoring programs, and organizing student-led projects, we aim to empower students with the skills, confidence, and knowledge necessary to become effective leaders in their future endeavors.',
          },
        ]}
      />
    </Features>
  );
};

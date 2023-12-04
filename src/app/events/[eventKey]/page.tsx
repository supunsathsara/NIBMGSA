import { Events } from '@lib/data';
import {
  ArrowLeftCircle,
  Calendar,
  CalendarHeart,
  ChevronRight,
} from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

type Params = {
  params: {
    eventKey: string;
  };
};

export default function EventsDetailsPage({ params: { eventKey } }: Params) {
  console.log(eventKey);
  const Event = Events.find((event) => event.key === eventKey);

  if (!Event) notFound();

  // add a image array and map it to the image component
  const images = Array.from(
    { length: 5 },
    (_, i) => `/events/poson-dansela/${i + 1}.jpg`
  );
  return (
    <div className="mx-auto flex min-h-screen w-[90%] flex-col items-center p-nav-height">
      <Link href="/events" className="flex justify-between w-full mt-2">
        <ArrowLeftCircle className="my-4 cursor-pointer" size={50} />
      </Link>
      <h1 className="text-gradient mx-auto -mt-5 z-10 text-5xl md:text-8xl">
        {Event.name}
      </h1>

      <div className="mt-8 grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3">
        {images.map((image, index) => (
          <div key={index} className="flex items-center justify-center">
            <img
              src={image}
              alt={`Image ${index + 1}`}
              className="max-h-full max-w-full object-cover transition-all duration-500 ease-in-out hover:scale-110"
            />
          </div>
        ))}
      </div>
      <div className="my-10 flex w-full flex-col items-center rounded-lg border border-gray-300 border-opacity-50 p-3">
        <CalendarHeart className="my-4" size={50} />
        <p className="my-4 w-1/2 text-center text-xl">{Event.description}</p>
        <p className="my-4 w-1/2 text-center text-xl">
          <Calendar className="mr-2 mb-1 inline-block" size={22} />
          {Event.date}
        </p>
        <a
          href={Event.link}
          target="_blank"
          className="my-4 w-1/2 text-center text-xl"
        >
          <button className="rounded-full border bg-transparent py-2 px-4 font-bold text-white">
            Check out the event
            <ChevronRight className="ml-2 inline-block" size={16} />
          </button>
        </a>
      </div>
    </div>
  );
}

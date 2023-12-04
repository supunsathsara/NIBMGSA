import { Events } from '@lib/data';
import { Calendar, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function EventsPage() {
  return (
    <div className="mx-auto flex min-h-screen w-[90%] flex-col items-center pt-nav-height">
      <h1 className="text-gradient mx-auto mt-2 text-5xl md:text-8xl">
        Events
      </h1>
      <p className="my-4 w-1/2 text-center text-xl">
        We host a variety of events throughout the year, ranging from
        competitions to workshops to socials. Check out our past events below!
      </p>
      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
        {Events.map((event) => (
          <div
            key={event.key}
            className="hover:shadow-xl flex flex-col items-center rounded-lg border border-gray-300 border-opacity-50 p-3 transition-all duration-300 ease-in-out hover:scale-105"
          >
            <Link href={`/events/${event.key}`} className="block">
              <img
                src={`/events/${event.key}/3.jpg`}
                alt={`Main Image of ${event.name}`}
                className="shadow-md hover:shadow-xl mb-4 h-auto w-full rounded-lg object-cover transition-all duration-300 ease-in-out hover:scale-105"
              />
            </Link>
            <Link href={`/events/${event.key}`} className="block">
              <h3 className="text-2xl font-semibold">
                {event.name}
                <ChevronRight className="ml-2 inline-block" size={16} />
              </h3>
            </Link>
            <p className="text-lg">
              <Calendar className="mr-2 inline-block" size={16} />
              {event.date}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

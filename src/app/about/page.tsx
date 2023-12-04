/* eslint-disable react/no-unescaped-entities */
export default function AboutPage() {
  return (
    <div className="mx-auto flex min-h-screen w-[90%] flex-col items-center pt-nav-height">
      <h1 className="text-gradient mx-auto mt-2 text-5xl md:text-8xl">
        About Us
      </h1>
      <div className="mt-4 text-lg md:w-1/2 md:pl-8">
        <h2 className="mb-4 text-2xl font-bold">Our Story</h2>
        <p className="mb-4">
          The NIBM GALLE Students Association is a student-led organization at
          the Galle Campus of the National Institute of Business Management
          (NIBM). We are committed to fostering a vibrant and inclusive
          community that empowers and supports students throughout their
          academic journey.
        </p>
        <p className="mb-4">
          Our story began with a vision to create a platform where students can
          connect, collaborate, and thrive. We believe that a strong student
          association plays a crucial role in enhancing the overall student
          experience and creating opportunities for personal and professional
          growth.
        </p>
        <p className="mb-4">
          Over the years, we have worked tirelessly to organize various events,
          workshops, seminars, and social activities that enrich the lives of
          our members. These initiatives aim to promote academic excellence,
          leadership development, cultural diversity, and community engagement.
        </p>
        <p className="mb-4">
          Our dedicated team of student leaders, supported by faculty and staff,
          strives to create an environment where every student feels valued,
          heard, and inspired. We encourage collaboration, innovation, and the
          exchange of ideas, fostering a sense of belonging and camaraderie
          among our diverse student body.
        </p>
        <p>
          We welcome all NIBM Galle Campus students to join us in shaping the
          future of our association and making a positive impact on our campus
          and beyond. Together, we can create memorable experiences, develop
          valuable skills, and build lifelong connections.
        </p>
      </div>
    </div>
  );
}

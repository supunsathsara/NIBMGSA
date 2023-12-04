export default function PrivacyPage() {
  return (
    <div className="mx-auto flex min-h-screen w-[90%] flex-col items-center pt-nav-height">
      <h1 className="text-gradient mx-auto mt-2 mb-4 text-5xl md:text-8xl">
        Privacy Policy
      </h1>
      <p className="ml-3 mb-3 text-xl">
        At NIBM GALLE Students Association, we value and respect your privacy.
        This Privacy Policy outlines how we collect, use, and protect your
        personal information when you interact with our website and services.
      </p>
      <div className="mx-auto flex flex-col">
        <h2 className="p-2 text-3xl">1. Information We Collect</h2>
        <p className="ml-3 mb-3 text-lg">
          We may collect certain personally identifiable information (such as
          your name, email address, and phone number) when you voluntarily
          provide it to us through our website or other communication channels.
          Additionally, we may collect non-personally identifiable information
          such as IP addresses, browser type, and device information for
          statistical analysis and website improvement purposes.
        </p>
        <h2 className="p-2 text-3xl">2. How We Use Your Information</h2>
        <div className="ml-3 mb-3 text-lg">
          The information we collect is used for the following purposes:
          <ul className="ml-5 list-disc">
            <li>
              To provide you with information, services, and support related to
              NIBM GALLE Students Association.
            </li>
            <li>To personalize and enhance your website experience.</li>
            <li>
              To communicate with you regarding updates, events, and
              opportunities relevant to our association.
            </li>
            <li>To analyze website usage and improve our services.</li>
          </ul>
        </div>
        <h2 className="p-2 text-3xl">3. Data Security</h2>
        <p className="ml-3 mb-3 text-lg">
          We implement appropriate security measures to protect your personal
          information from unauthorized access, alteration, disclosure, or
          destruction. However, please note that no method of data transmission
          over the internet or electronic storage is 100% secure, and we cannot
          guarantee absolute security.
        </p>
        <h2 className="p-2 text-3xl">4. Third-Party Disclosure</h2>
        <p className="ml-3 mb-3 text-lg">
          We may share your personal information with trusted third-party
          service providers who assist us in operating our website and
          delivering our services. However, we do not sell, trade, or otherwise
          transfer your personal information to outside parties without your
          consent, except as required by law.
        </p>
        <h2 className="p-2 text-3xl">5. Cookies</h2>
        <p className="ml-3 mb-3 text-lg">
          Our website may use cookies and similar technologies to enhance your
          browsing experience. You have the option to disable cookies in your
          browser settings, although this may affect the functionality of
          certain website features.
        </p>
        <h2 className="p-2 text-3xl">6. Links to External Websites</h2>
        <p className="ml-3 mb-3 text-lg">
          Our website may contain links to external websites. We are not
          responsible for the privacy practices or content of these third-party
          sites. We encourage you to review their respective privacy policies
          before providing any personal information.
        </p>
        <h2 className="p-2 text-3xl">7. Updates to Privacy Policy</h2>
        <p className="ml-3 mb-3 text-lg">
          We may update this Privacy Policy from time to time to reflect changes
          in our practices and services. We encourage you to review this page
          periodically for any updates. Your continued use of our website and
          services signifies your acceptance of the updated Privacy Policy.
        </p>
        <p className="my-4 text-lg">
          If you have any questions or concerns about our Privacy Policy, please
          contact us at [email address].
        </p>
      </div>
    </div>
  );
}

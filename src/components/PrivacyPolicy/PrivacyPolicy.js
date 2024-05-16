import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="w-full h-auto postsenOne">
      <div className="flex flex-col items-center container mx-auto pt-20 pb-20">
        <h1 className="text-3xl font-bold my-8">PrivacyPolicy</h1>
        <div className="w-full flex flex-col items-start">
          <p className="text-lg">
            This privacy policy applies to viralthumbnail.ai and and is operated
            by KOP Worldwide B.V. This policy outlines how we collect, use, and
            protect personal information that is provided to us through this
            website. By using this website, you agree to the terms of this
            privacy policy.
          </p>
          <h2 className={`text-xl mt-8`}>1. Information We Collect</h2>
          <p className="text-lg">
            We may collect personal information such as your name, email
            address, and phone number when you fill out a form on our website or
            contact us through email. We may also collect non-personal
            information such as your IP address, browser type, and referring
            website.
          </p>
          <h2 className={`text-xl mt-8`}>2. Legal Basis for Processing</h2>
          <p className="text-lg">
            We process your data based on a variety of legal bases including
            consent (for marketing communications), contract (to provide
            services you've requested), and legitimate interests (for internal
            administrative purposes and website improvements).
          </p>
          <h2>3. How We Use Your Information</h2>
          <p className="text-lg">
            1. To respond to your inquiries and provide you with information
            about our services. 2. For internal business purposes. 3. To improve
            our website and services through analytics
          </p>
          <h2 className={`text-xl mt-8`}>4. Rights of Individuals</h2>
          <p className="text-lg">You have the following rights under GDPR: </p>
          <p className="text-lg">
            1. Access: You can request a copy of your personal data.{" "}
          </p>
          <p className="text-lg">
            2. Rectification: You can request correction of any incorrect data
            we hold about you.
          </p>{" "}
          <p className="text-lg">
            3. Erasure: Under certain conditions, you can request erasure of
            your personal data.
          </p>{" "}
          <p className="text-lg">
            4. Restrict Processing: You can request to restrict the processing
            of your data.{" "}
          </p>
          <p className="text-lg">
            5. Data Portability: You can request a transfer of your data to
            another service provider.
          </p>
          <p className="text-lg">
            6. Object: You can object to our processing of your data.
          </p>
          <p className="text-lg">
            7. Automated Decision Making: If we make an automated decision that
            affects you, you have the right to request human intervention,
            express your viewpoint, and contest the decision.
          </p>
          <h2 className={`text-xl mt-8`}>5. Data Retention</h2>
          <p className="text-lg">
            We retain your personal data only for as long as necessary to
            fulfill the purposes we collected it for, including legal,
            accounting, or reporting requirements.
          </p>
          <h2 className={`text-xl mt-8`}>6. Protection of Your Information</h2>
          <p className="text-lg">
            We take the security of your personal information seriously and have
            implemented appropriate technical and organizational measures to
            protect it from unauthorized access, use, or disclosure. We do not
            sell, rent, or share your personal information with third parties
            except to provide services or products you've requested or as
            required by law.
          </p>
          <h2 className={`text-xl mt-8`}>7. Cookies</h2>
          <p className="text-lg">
            We use various types of cookies, including analytical, tracking, and
            third-party cookies, to enhance your experience.
          </p>
          <h2 className={`text-xl mt-8`}>8. Third-Party Links</h2>
          <p className="text-lg">
            Our website may contain links to third-party websites. We are not
            responsible for their privacy practices or content. Always review
            their policies before providing any personal data.
          </p>
          <h2 className={`text-xl mt-8`}>9. Changes to This Privacy Policy</h2>
          <p className="text-lg">
            We may update our privacy policy. If changes significantly alter how
            we handle personal data, we will notify users in advance and, if
            necessary, seek renewed consent.
          </p>
          <h2 className={`text-xl mt-8`}>10. Complaints</h2>
          <p className="text-lg">
            If you have concerns about our data practices, you have the right to
            lodge a complaint with the Dutch Data Protection Authority
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

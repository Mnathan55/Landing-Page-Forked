


import React from "react";
import ourTeam from "../assets/images/our_team.jpeg";

const AboutUs = () => {
  return (
    <section className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16 text-center max-w-4xl">
        <h1 className="text-md md:text-lg font-bold mb-6 text-gray-900">
          Welcome to{" "}
          <span className="text-blue-600">Daflitech Technologies</span>
        </h1>
        <p className="text-lg leading-relaxed text-gray-700">
          At Daflitech Technologies, we are dedicated to delivering a wide range
          of innovative and tailored software solutions to help businesses
          thrive in the digital age. As the best software company, we specialize
          in Website Design, ensuring your online presence is both visually
          appealing and highly functional. Our Enterprise Resource Planning
          (ERP) solutions streamline business operations, allowing for increased
          efficiency and productivity. We also offer cutting-edge Android
          Application Development to give your business a competitive edge in
          the mobile-first world.
        </p>
        <p className="text-lg leading-relaxed text-gray-700 mt-6">
          Our unique offerings span the technological spectrum–from cutting-edge
          software development to transformative digital strategies. We don't
          just follow industry trends; we set them.
        </p>
        <p className="text-lg leading-relaxed text-gray-700 mt-6">
          A lot has changed since we began, but our purpose has not. Daflitech Technologies is
          more than a company; it's a dynamic force that propels businesses
          toward success:
        </p>
      </div>

      {/* Who We Are */}
      <div className="container mx-auto px-4 py-12 max-w-5xl grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-2xl font-bold mb-4">Who We Are</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Our unique offerings span the entire technological spectrum – from
            cutting-edge software development to transformative digital
            strategies. We don't just follow industry trends; we set them.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            A lot has changed since we began, but our purpose has not. Daflitech Technologies is
            more than a company; it's a dynamic force that propels businesses
            toward success:
          </p>

          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>
              We're obsessively Passionate about leading-edge innovation and
              transformation.
            </li>
            <li>
              We're courageously caring-striving to better the experience of our
              employees, clients,and society at large.
            </li>
            <li>
              We're devotedly inclusive – regardless of who you are – you are
              welcomed, respected, and supported.
            </li>
          </ul>
        </div>
        <img
          src={ourTeam}
          alt="Our Team at Daflitech"
          className="rounded-xl shadow-lg object-cover w-full h-64 md:h-80"
        />
      </div>

      {/* Goals: Mission, Vision, Plans */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4 max-w-6xl grid md:grid-cols-3 gap-10 text-center">
          <div className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-md transition duration-300">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">
              Our Mission
            </h3>
            <p className="text-gray-600">
              Customer satisfaction drives us. We deliver expert guidance,
              timely solutions, and cutting-edge technology at competitive
              prices to build lasting brand loyalty.
            </p>
          </div>
          <div className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-md transition duration-300">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">
              Our Vision
            </h3>
            <p className="text-gray-600">
              We strive to be a leader in the digital space, empowering
              businesses, students, and entrepreneurs to achieve new heights in
              a tech-driven world.
            </p>
          </div>
          <div className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-md transition duration-300">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">
              Our Plans
            </h3>
            <p className="text-gray-600">
              We offer tailored consulting and outsourcing services, forging
              strategic partnerships to help clients grow and succeed in today’s
              ever-evolving digital landscape.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

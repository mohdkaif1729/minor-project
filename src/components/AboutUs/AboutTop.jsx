import React from "react";
import AboutUsTopComponentImage from "../../assets/images/AboutUsTopComponentImage.webp";

function AboutTop() {
  return (
    <div className="grid grid-cols-3 lg:grid-rows-2 grid-rows-3">
      <div className="py-20 px-4 md:px-12  bg-[#dac0a3] col-span-3 lg:col-span-2 h-[40%] md:h-full">
        <p className="mb-4">ABOUT US</p>
        <h1 className="md:text-6xl text-3xl font-semibold leading-snug md:w-[50%]">
          Passionately Bringing Your Event Vision to Life
        </h1>
      </div>
      <div className="lg:row-span-2 lg:col-span-1 col-span-3 px-4 md:px-10 py-24 text-lg leading-loose border-l-2 border-[#f9debf]">
        <p>
          Growing up in a Punjabi family that was always looking for an excuse
          to celebrate was a blast! Reasons like “cousins coming over for a
          night stay and we&apos;re a family” or “&apos;someone&apos;s birthday
          or anniversary in a family” were always enough. Now we both Dev &
          Karan &#x28; Siblings and Partners&#x29; finding excuses to bring
          people together and bring back the happiness that has always been a
          part of celebrations and ensuring that we create an affair to remember
          for everyone and everybody. Corporate & Social events till this point
          had all been about theater and showmanship and revolved around
          impressing the clients and guests. We wish wanted to change all of
          that and be able to create corporate & social events that were
          personal and truly brought people together to celebrate.
        </p>
        <p className="mt-8">
          These days, we spend our time trying to understand the psychology of
          spaces and see how they can contribute to celebrations and make a
          difference with a class!
        </p>
        <div className="mt-32">
          <h2 className="font-semibold">EXPERIENCE</h2>
          <p>
            At Annahad Events, we believe that every event should be a unique
            and unforgettable experience. That&apos;s why we take a personalized
            approach when it comes to event planning. Our team of experts is
            passionate about bringing your vision to life and ensuring that
            every aspect of your event is tailored to meet your specific needs.
            From the initial planning stages to the execution of the event
            itself, we take care of every detail so that you don&apos;t have to.
            Whether you&apos;re looking to host a corporate event or a
            once-in-a-lifetime celebration, we&apos;ve got you covered.
          </p>
        </div>
      </div>
      <div className="p-4 md:p-12 lg:col-span-2  col-span-3">
        <img
          src={AboutUsTopComponentImage}
          alt="Dinning Table Image"
          className="w-full md:h-full"
        />
      </div>
    </div>
  );
}

export default AboutTop;

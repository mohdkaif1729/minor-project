import React, { useId } from "react";
import { BgVideo, HomeCard, Description } from "../index.js";
import { useEffect } from "react";

function Home() {
  useEffect(() => {
    document.title = "Home";
  }, []);
  const cards = [
    {
      sNo: "01",
      heading: "Annual Conferences",
      paragraph:
        "Our Annual Conferences are expertly curated to provide you and your attendees with a truly unforgettable experience. We'll work with you to create a customized event that aligns perfectly with your organization's goals and objectives. From content to logistics,we'll handle everything with seamless execution.",
      imagePath: "./annualConferences.jpg",
    },
    {
      sNo: "02",
      heading: "Awards Night",
      paragraph:
        "Our Awards Night events are anything but ordinary, with unique themes that set your event apart from the rest. We specialize in customizing packages to meet your specific vision and needs, from elegant décor to mouthwatering catering. Our attention to detail ensures that every aspect of your event is flawlessly executed.",
      imagePath: "../../../public/awardNight.jpg",
    },
    {
      sNo: "03",
      heading: "Luxury Gala Dinners",
      paragraph:
        "Our Luxury Gala Dinners are the epitome of elegance and sophistication. We pay attention to every detail to ensure that your event is nothing short of memorable. Our team of event planners will work with you to make sure that every aspect of your event is executed flawlessly.",
      imagePath: "../../../public/luxuryGalaDinner.jpg",
    },
    {
      sNo: "04",
      heading: "Networking Events",
      paragraph:
        "At our Networking Events, you'll find yourself surrounded by like-minded individuals who are passionate about business growth. Our events provide an ideal opportunity to meet new people, establish connections, and promote your brand. Experience the benefits of professional networking and watch your business relationships thrive!",
      imagePath: "../../../public/networkingEvents.jpg",
    },
    {
      sNo: "05",
      heading: "Off-Site Retreats",
      paragraph:
        "Looking for a unique way to connect with your team? Our off-site retreats offer a variety of exciting experiences that are sure to provide a fun and memorable team-building experience. At our event planning company, we offer customized packages to meet your specific needs and goals for the retreat. Contact us today to schedule your unforgettable off-site adventure!",
      imagePath: "../../../public/offSideRetreats.jpg",
    },
    {
      sNo: "06",
      heading: "Product Launch",
      paragraph:
        "Let us take the stress out of your product launch with our expert planning and coordination services. From unique themes to attention to detail, our team leaves no stone unturned to ensure a seamless execution. Whether you&apos;re launching a new product or rebranding, we&apos;ll work with you every step of the way to create an event that exceeds your expectations.",
      imagePath: "../../../public/productLaunch.jpg",
    },
  ];
  return (
    <div>
      <BgVideo />
      <Description />
      {cards.map((card) => {
        let id = useId();
        return (
          <div key={id}>
            <HomeCard
              sNo={card.sNo}
              heading={card.heading}
              paragraph={card.paragraph}
              imagePath={card.imagePath}
            />
          </div>
        );
      })}
    </div>
  );
}

export default Home;

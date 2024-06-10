import React from "react";
import FeatureCard from "./FeatureCard";
import { mm,lock,clock,coines}  from '../images';
const FeatureCardWrapper = () => {
  const features = [
    {
       icon: mm,
      title: "ذخیره‌سازی روی تلفن همراه",
      description:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
    },
    {
      icon: lock,
      title: "ذخیره‌سازی روی تلفن همراه",
      description:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
    },
    {
       icon: clock,
      title: "ذخیره‌سازی روی تلفن همراه",
      description:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
    },
    {
      icon:coines,
      title: "ذخیره‌سازی روی تلفن همراه",
      description:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
    },
  ];

  return (
    <div className="container mx-auto p-4 bg-mycard mt-14">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {features.map(({ icon, title, description }, index) => (
          <FeatureCard
            key={index}
            icon={icon}
            title={title}
            description={description}
          />
        ))}
      </div>
    </div>
  );
};

export default FeatureCardWrapper;

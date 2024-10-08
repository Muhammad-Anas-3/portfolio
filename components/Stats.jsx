"use client";

// package
import CountUp from "react-countup";

const Stats = () => {
  const stats = [
    {
      num: 6,
      text: "Months Experience",
    },
    {
      num: 6,
      text: "Projects Completed",
    },
    {
      num: 29,
      text: "Github Repository",
    },
    {
      num: 1,
      text: "Open Source Contribution",
    },
  ];
  return (
    <section className="pt-4 pb-12 overflow-hidden xl:pt-0 xl:pb-6">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[90vw] mx-auto xl:max-w-none">
          {stats.map((item, index) => {
            return (
              <div
                className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
                key={index}
              >
                <CountUp
                  end={item.num}
                  duration={5}
                  delay={2}
                  className="text-3xl xl:text-6xl font-extrabold"
                />
                <p
                  className={`${item.text.length < 15 ? "max-w-[80px]" : "max-w-[130px]"
                    } leading-snug text-white/80`}
                >
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;

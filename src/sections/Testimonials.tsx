import memojiAvatar1 from "@/assets/images/glowing-star.png";
import memojiAvatar2 from "@/assets/images/star-struck.png";
import memojiAvatar3 from "@/assets/images/sparkles.png";
import { SectionHeader } from "@/components/SectionHeader";
import Image from "next/image";
import { Card } from "@/components/Card";
import { Fragment } from "react";
const testimonials = [
  {
    name: "Responsive Applications",

    text: "I specialize in building responsive, high-performance applications with a focus on user experience. Using React and Tailwind CSS, I create intuitive, visually appealing web applications that meet functional and design requirements.",
    avatar: memojiAvatar1,
  },
  {
    name: "User-Friendly Designs",

    text: "I transform complex technical requirements into user-friendly designs. My expertise in React and state management ensures the final product improves user engagement and performance.",
    avatar: memojiAvatar2,
  },
  {
    name: "Full-Stack Development",

    text: "With experience in both front-end and back-end development, I create seamless, scalable solutions using Node.js, Express, and MongoDB, ensuring well-rounded products.",
    avatar: memojiAvatar1,
  },
  {
    name: "Collaborative Teamwork",

    text: "I thrive in collaborative environments, working closely with designers and product managers to meet deadlines and deliver high-quality, aligned results.",
    avatar: memojiAvatar2,
  },
  {
    name: "Continuous Improvement",

    text: "I’m committed to continuous learning and improvement. I refine my skills through feedback and take on challenges to deliver high-quality, user-centered applications.",
    avatar: memojiAvatar3,
  },
];

export const TestimonialsSection = () => {
  return (
    <div className="py-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Let's Build Something Great Together"
          title="Why I'm the Right Fit for Your Team"
        />

        <div
          className="mt-16 flex flex-row py-4"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 10%, black 70%, transparent)",
          }}
        >
          <div className="flex gap-8 pr-8 flex-none animate-move-left [animation-duration:20s] hover:[animation-play-state:paused]">
            {[...new Array(2)].fill(0).map((_, index) => (
              <Fragment key={index}>
                {testimonials.map((testimonial) => (
                  <Card
                    key={testimonial.name}
                    className="max-w-xs md:max-w-md p-6 md:p-8 hover:-rotate-3 transition duration-300"
                  >
                    <div className="flex gap-4 items-center ">
                      <div className="size-14  inline-flex justify-center items-center rounded-full flex-shrink-0">
                        <Image
                          src={testimonial.avatar}
                          alt="star"
                          className="max-w-full"
                        />
                      </div>
                      <div>
                        <div className="font-semibold">{testimonial.name}</div>
                      </div>
                    </div>
                    <p className="mt-4 text-sm">{testimonial.text}</p>
                  </Card>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

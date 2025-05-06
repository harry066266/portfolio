import StarIcon from "@/assets/icons/star.svg";
import { Fragment } from "react";
const words = [
  "Proactive",
  "Detail-oriented",
  "Results-driven",
  "Adaptable",
  "Innovative",
  "Collaborative",
  "Resourceful",
  "Dependable",
  "Analytical",
  "Efficient",
  "Motivated",
  "Self-disciplined",
];

export const TapeSection = () => {
  return (
    <div className="py-16 lg:py-24">
      <div className="bg-gradient-to-r from-emerald-300 to-sky-400 -rotate-3 -mx-1">
        <div
          className="flex"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 10%, black 70%, transparent)",
          }}
        >
          <div className="flex flex-none gap-4 py-3 animate-move-left [animation-duration:20s]">
            {[...new Array(2)].fill(0).map((_, index) => (
              <Fragment key={index}>
                {words.map((word) => (
                  <div key={word} className="inline-flex gap-4 items-center ">
                    <span className="text-gray-900 uppercase font-extrabold text-sm">
                      {word}
                    </span>
                    <StarIcon className="size-6 text-gray-900 -rotate-12" />
                  </div>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

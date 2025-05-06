import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

export const HeroOrbit = ({
  children,
  size,
  rotation,
  shouldOrbit = false,
  spinDuration,
  shouldSpin,
  orbitDuration,
}: PropsWithChildren<{
  size: number;
  rotation: number;
  shouldOrbit?: boolean;
  orbitDuration?: string;
  shouldSpin?: boolean;
  spinDuration?: string;
}>) => {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-20">
      <div
        className={twMerge(shouldOrbit == true && "animate-spin")}
        style={{ animationDuration: orbitDuration }}
      >
        <div
          className="flex justify-start items-start "
          style={{
            transform: `rotate(${rotation}deg)`, // 确保 rotation 变量正确传递
            height: `${size}px`,
            width: `${size}px`,
          }}
        >
          <div
            className={twMerge(shouldSpin == true && "animate-spin")}
            style={{ animationDuration: spinDuration }}
          >
            <div
              className="inline-flex"
              style={{ transform: `rotate(${rotation * -1}deg)` }} // rotation * -1 应该与外层的 rotation 匹配
            >
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

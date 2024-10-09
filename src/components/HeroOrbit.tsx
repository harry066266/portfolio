import { PropsWithChildren } from "react";

export const HeroOrbit = ({
  children,
  size,
  rotation,
}: PropsWithChildren<{ size: number; rotation: number }>) => {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      <div
        className="flex justify-start items-start"
        style={{
          transform: `rotate(${rotation}deg)`, // 确保 rotation 变量正确传递
          height: `${size}px`,
          width: `${size}px`,
        }}
      >
        <div
          className="inline-flex"
          style={{ transform: `rotate(${-rotation}deg)` }} // rotation * -1 应该与外层的 rotation 匹配
        >
          {children}
        </div>
      </div>
    </div>
  );
};

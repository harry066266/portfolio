import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";

const footerLinks = [
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/haoyuan-he-b76044348/",
    isExternal: true,
  },
  {
    title: "Github",
    href: "https://github.com/harry066266",
    isExternal: true,
  },
];

export const Footer = () => {
  return (
    <footer className="relative ">
      <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10"></div>
      <div className="container">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8">
          <div className="text-white/40">&copy; 2025. All rights reserved</div>
          <nav className="flex flex-col md:flex-row items-center gap-8">
            {footerLinks.map((footerLink) => (
              <a
                href={footerLink.href}
                key={footerLink.title}
                className="inline-flex items-center gap-1.5 z-10 hover:cursor-pointer"
                target="_blank" // 打开新标签页
                rel="noopener noreferrer" // 安全地打开外部链接
              >
                <span>{footerLink.title}</span>
                <ArrowUpRightIcon className="size-4" />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};

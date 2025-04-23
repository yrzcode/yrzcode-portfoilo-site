import { ReactNode } from "react";
export const SectionHeading = ({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div className={`py-20 ${className}`}>
      <h1 className="heading text-white-200">{children}</h1>
    </div>
  );
};

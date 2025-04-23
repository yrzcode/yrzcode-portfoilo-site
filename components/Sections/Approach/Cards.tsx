"use client";
import React from "react";

import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect, MagicButton } from "@/components/ui";

export const Cards = () => {
  return (
    <>
      <div className="cards-container">
        <Card
          title="Planning & Strategy"
          description="description description"
          icon={<AceternityIcon order="phase 1" />}
        >
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-emerald-900"
            dotSize={1}
          />
        </Card>
        <Card
          title="Nisha is Munni"
          description="description description"
          icon={<AceternityIcon order="phase 2" />}
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-black"
            colors={[
              [236, 72, 153],
              [232, 121, 249],
            ]}
            dotSize={1}
          />
        </Card>
        <Card
          title="Munni is Aditi"
          description="description description"
          icon={<AceternityIcon order="phase 3" />}
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-600"
            colors={[[125, 211, 252]]}
            dotSize={1}
          />
        </Card>
      </div>
    </>
  );
};

const Card = ({
  title,
  description,
  icon,
  children,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2] max-w-sm w-full mx-auto p-4 relative lg:h-[35rem] rounded-3xl"
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20 w-60">
        <div
          className="w- absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] 
        text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 
        transition duration-200 w-full mx-auto flex items-center justify-center"
        >
          {icon}
        </div>
        <h2
          className="text-center dark:text-white text-3xl opacity-0 
        group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4 font-bold group-hover/canvas-card:text-white 
        group-hover/canvas-card:-translate-y-2 transition duration-200"
        >
          {title}
        </h2>
        <h2
          className="text-sm color-[#e4ecff] 
        text-center dark:text-white opacity-0 group-hover/canvas-card:opacity-100 relative z-10 
        text-black mt-4 font-bold group-hover/canvas-card:text-white 
        group-hover/canvas-card:-translate-y-2 transition duration-200"
        >
          {description}
        </h2>
      </div>
    </div>
  );
};

const AceternityIcon = ({ order }: { order?: string }) => {
  return <MagicButton title={order} otherClasses="text-2xl font-bold" />;
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};

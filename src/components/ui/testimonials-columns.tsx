"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { SpotlightCard } from "@/components/ui/spotlight-card";

interface Testimonial {
  text: string;
  image: string;
  name: string;
  role: string;
}

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
  reverse?: boolean;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={props.className}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        initial={{
          translateY: props.reverse ? "-50%" : "0%",
        }}
        animate={{
          translateY: props.reverse ? "0%" : "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        style={{
          animationPlayState: isHovered ? "paused" : "running",
        }}
        className="flex flex-col gap-6 pb-6"
        whileHover={{ animationPlayState: "paused" }}
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, image, name, role }, i) => (
                <SpotlightCard
                  key={`${name}-${i}`}
                  spotlightColor="rgba(74, 222, 128, 0.15)"
                >
                  <div className="glass-card rounded-2xl p-6 border border-border/50 hover:border-primary/30 transition-all duration-300">
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                      "{text}"
                    </p>
                    <div className="flex items-center gap-3">
                      <img
                        src={image}
                        alt={name}
                        className="h-10 w-10 rounded-full object-cover"
                      />
                      <div>
                        <p className="text-sm font-medium text-foreground">
                          {name}
                      </p>
                        <p className="text-xs text-muted-foreground">{role}</p>
                      </div>
                    </div>
                  </div>
                </SpotlightCard>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};
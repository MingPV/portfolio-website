// components/ScrollReveal.tsx
import { useEffect, useRef, ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  animationDirection?: "left" | "right" | "up" | "down" | "fade";
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  animationDirection = "left",
}) => {
  const revealRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show-element");
          }
        });
      },
      {
        root: null, // Use the viewport as the root
        rootMargin: "0px 0px -20% 0px",
      }
    );

    const { current } = revealRef;
    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, []);

  const getAnimationClass = () => {
    switch (animationDirection) {
      case "fade":
        return "hidden-element-fade";
      case "left":
        return "hidden-element-left";
      case "right":
        return "hidden-element-right";
      case "up":
        return "hidden-element-up";
      case "down":
        return "hidden-element-down";
      default:
        return "hidden-element-fade";
    }
  };

  return (
    <div ref={revealRef} className={getAnimationClass()}>
      {children}
    </div>
  );
};

export default ScrollReveal;

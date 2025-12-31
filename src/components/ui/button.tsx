import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:scale-[1.02] hover:shadow-[0_0_40px_hsla(142,70%,50%,0.55)] active:scale-[0.98]",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 hover:shadow-[0_0_30px_hsla(0,70%,50%,0.4)]",
        outline:
          "border border-[hsla(142,70%,50%,0.3)] bg-transparent text-foreground hover:bg-[hsla(142,70%,50%,0.1)] hover:border-[hsla(142,70%,50%,0.5)] hover:shadow-[0_0_30px_hsla(142,70%,50%,0.35)]",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-[hsla(142,70%,45%,0.15)] hover:shadow-[0_0_25px_hsla(142,70%,50%,0.25)]",
        ghost:
          "text-foreground hover:bg-[hsla(142,70%,50%,0.1)] hover:text-primary hover:shadow-[0_0_20px_hsla(142,70%,50%,0.2)]",
        link:
          "text-primary underline-offset-4 hover:underline",
        hero:
          "bg-[linear-gradient(135deg,hsl(142,70%,45%)_0%,hsl(142,80%,35%)_100%)] text-white font-bold shadow-[0_0_35px_hsla(142,70%,50%,0.5)] hover:scale-[1.03] hover:shadow-[0_0_60px_hsla(142,70%,55%,0.7)] active:scale-[0.98]",
        glass:
          "bg-[linear-gradient(180deg,hsla(142,60%,50%,0.06)_0%,hsla(142,50%,40%,0.02)_100%)] border border-[hsla(142,70%,50%,0.2)] backdrop-blur-xl text-foreground hover:bg-[hsla(142,70%,50%,0.12)] hover:border-[hsla(142,70%,50%,0.45)] hover:shadow-[0_0_35px_hsla(142,70%,50%,0.35)]",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 px-4 text-xs",
        lg: "h-14 px-8 text-base",
        xl: "h-16 px-10 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };

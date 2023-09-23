import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority"
// import React, { Children } from "react";
import React from "react";


// interface ButtonProps {
//     children: React.ReactNode;
// href: string;
// }

export interface ButtonProps extends VariantProps<typeof buttonClasses>
// extends React.ButtonHTMLAttributes<HTMLButtonElement>
     {
    // asChild?: boolean,
    children: React.ReactNode;
    href: string;
}


const buttonClasses = cva("rounded-full inline-flex item-center", {
  variants: {
    variant: {
      primary: "bg-primary-gradient hover:text-shadow hover:box-shadow-primary",
      secondary: "",
      tertiary: "",
    },
    size: {
      small: "text-xs px-3 h-7",
      medium: "text-sm px-4 h-8",
      large: "text-md px-6 h-12",
    }
  },
  defaultVariants: {
    variant: "primary",
    size: "medium",
  }
});

const NewButton = ({ children, href, variant, size }: ButtonProps) => {
    return (
      <Link className={buttonClasses( { variant, size } )} href={href}>{children}</Link>
    );
};
  
export default NewButton;
import { cva } from "class-variance-authority";
import Link from "next/link";

import { cn } from "@/lib/utils";
const buttonVariantStyle = cva(
    "flex items-center rounded-full gap-5 justify-center font-medium transition-colors text-base items-center",
    {
        variants: {
            variant: {
                default:
                    "bg-green text-white hover:opacity-90 active:ring-2 active:ring-green ",
                outlinePrimary:
                    "bg-transparent border-2 border-green text-green hover:bg-emerald-100 active:ring-2 active:ring-green ",
                outlineSecondary:
                    "bg-transparent border-2 border-red text-red hover:bg-rose-100 active:ring-2 active:ring-red ",
            },
            size: {
                default: "h-9 py-3 px-6 gap-3 w-fit",
                lg: "h-10 px-8 gap-4 w-fit",
                full: "w-full h-10 px-8 gap-4",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    },
);
const Button = ({ className, children, href, variant, size, ...props }) => {
    if (href) {
        return (
            <Link
                href={href}
                className={cn(buttonVariantStyle({ variant, size, className }))}
            >
                {children}
            </Link>
        );
    }
    return (
        <button
            className={cn(buttonVariantStyle({ variant, size, className }))}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;

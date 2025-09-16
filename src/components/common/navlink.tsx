"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

export interface NavLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    href: string;
    children: ReactNode;
    active: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
    other: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
}

const NavLink = ({ href, children, active, other, className, ...props }: NavLinkProps) => {
    const pathname = usePathname();
    return (
        <Link href={href} {...props}>
            <Button className={cn("w-full font-semibold capitalize justify-start", className)} variant={pathname === href ? active : other}>
                {children}
            </Button>
        </Link>
    );
};

export default NavLink;
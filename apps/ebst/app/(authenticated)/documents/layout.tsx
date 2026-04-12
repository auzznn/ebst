"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    BookOpen,
    FileSpreadsheet,
    BarChart3,
    Building2,
    ListTree,
} from "lucide-react";

const navItems = [
    { title: "Invoice", href: "/documents", icon: BarChart3 },
];

export default function DocumentsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();

    return (
        <div className="flex flex-col h-full">
            {/* Sub-navigation tabs */}
            <nav className="border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
                <div className="flex items-center gap-1 px-4 overflow-x-auto">
                    {navItems.map((item) => {
                        const isActive =
                            item.href === "/documents"
                                ? pathname === "/documents"
                                : pathname.startsWith(item.href);

                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`flex items-center gap-2 px-3 py-3 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${isActive
                                    ? "border-primary text-primary"
                                    : "border-transparent text-muted-foreground hover:text-foreground hover:border-muted-foreground/30"
                                    }`}
                            >
                                <item.icon className="h-4 w-4" />
                                {item.title}
                            </Link>
                        );
                    })}
                </div>
            </nav>

            {/* Page content */}
            <div className="flex-1 overflow-y-auto">
                {children}
            </div>
        </div>
    );
}

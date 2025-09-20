"use client";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { FC, ReactNode, Children, isValidElement, Fragment } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";

interface DataGridBulkActionsProps<T> {
    selectedItems: T[];
    actions: React.ReactNode;
    onClearSelection: () => void;
}

const DataGridBulkActions = <T,>({
    selectedItems,
    actions,
    onClearSelection,
}: DataGridBulkActionsProps<T>) => {
    return (
        <AnimatePresence>
            {selectedItems.length > 0 && (
                <motion.div
                    className="fixed bottom-6 left-1/2 z-50"
                    initial={{
                        opacity: 0,
                        y: 50,
                        scale: 0.95,
                        x: "-50%"
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        x: "-50%"
                    }}
                    exit={{
                        opacity: 0,
                        y: 50,
                        scale: 0.95,
                        x: "-50%"
                    }}
                    transition={{
                        type: "spring",
                        damping: 25,
                        stiffness: 300,
                        duration: 0.4
                    }}
                >
                    <motion.div
                        className="bg-background border rounded-lg shadow-lg p-4 flex items-center gap-4 min-w-fit max-w-2xl"
                        initial={{ backdropFilter: "blur(0px)" }}
                        animate={{ backdropFilter: "blur(8px)" }}
                        exit={{ backdropFilter: "blur(0px)" }}
                    >
                        <motion.div
                            className="flex items-center gap-2"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.1 }}
                        >
                            <span className="text-sm font-medium">
                                {selectedItems.length} item{selectedItems.length > 1 ? 's' : ''} selected
                            </span>
                            <Button
                                variant="ghost"
                                size={"icon"}
                                onClick={onClearSelection}
                            >
                                <X className="h-4 w-4" />
                            </Button>
                        </motion.div>

                        <div className="h-6 w-px bg-border" />

                        <motion.div
                            className="flex items-center gap-2"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.1 }}
                        >
                            {actions}
                        </motion.div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default DataGridBulkActions;


interface BulkActionsWrapperProps {
    children: ReactNode;
    className?: string;
}

export const BulkActionsWrapper: FC<BulkActionsWrapperProps> = ({ children, className }) => {
    // Function to flatten children and handle fragments
    const flattenChildren = (children: ReactNode): ReactNode[] => {
        const result: ReactNode[] = [];

        Children.forEach(children, (child) => {
            if (!child) return; // Skip falsy values

            // Check if it's a Fragment
            if (isValidElement(child) && (child.type === Fragment || child.type === (<></>).type)) {
                // Recursively flatten fragment children
                result.push(...flattenChildren((child?.props as any)?.children));
            } else {
                result.push(child);
            }
        });

        return result;
    };

    // Flatten all children and filter out falsy values
    const validChildren = flattenChildren(children).filter(Boolean);

    return (
        <div className={cn("flex items-center space-x-2", className)}>
            {validChildren.slice(0, 3).map((child, index) => (
                <div key={index} className="flex items-center space-x-2">
                    {child}
                </div>
            ))}
            {validChildren.length > 3 && (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="space-y-2">
                        <DropdownMenuLabel>More Actions</DropdownMenuLabel>
                        {validChildren.slice(3).map((child, index) => (
                            <DropdownMenuItem asChild key={index} className="w-full">
                                {child}
                            </DropdownMenuItem>
                        ))}
                    </DropdownMenuContent>
                </DropdownMenu>
            )}
        </div>
    );
};


"use client";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { FC, ReactNode, Children, isValidElement, Fragment } from "react";
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
    if (selectedItems.length === 0) return null;

    return (
        <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
            <div className="bg-background border rounded-lg shadow-lg p-4 flex items-center gap-4 min-w-fit max-w-2xl">
                <div className="flex items-center gap-2">
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
                </div>

                <div className="h-6 w-px bg-border" />

                <div className="flex items-center gap-2">
                    {actions}
                </div>
            </div>
        </div>
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


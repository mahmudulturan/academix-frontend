import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ArrowUp, ArrowDown, ArrowUpDown, LucideEyeOff } from "lucide-react";
import { FC } from "react";
import { Column } from "@tanstack/react-table";
import { User } from "@/constant";

interface DataGridSortingDropdownProps {
  column: Column<User>;
  title: string;
  sortable?: boolean;
}

const DataGridSortingDropdown: FC<DataGridSortingDropdownProps> = ({
  column,
  title,
  sortable = true,
}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="data-[state=open]:bg-accent">
          {title}
          {column.getIsSorted() === "asc" ? (
            <ArrowUp className="size-3.5 text-muted-foreground/70" />
          ) : column.getIsSorted() === "desc" ? (
            <ArrowDown className="size-3.5 text-muted-foreground/70" />
          ) : (
            <ArrowUpDown className="size-3.5 text-muted-foreground/70" />
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start">
        {sortable && (
          <>
            <DropdownMenuItem
              onClick={() => column.toggleSorting(false)}
              className="cursor-pointer"
            >
              <ArrowUp className="size-3.5 text-muted-foreground/70" /> Sort
              ascending
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => column.toggleSorting(true)}
              className="cursor-pointer"
            >
              <ArrowDown className="size-3.5 text-muted-foreground/70" /> Sort
              descending
            </DropdownMenuItem>
            <DropdownMenuSeparator />
          </>
        )}
        <DropdownMenuItem
          onClick={() => column.toggleVisibility(false)}
          className="cursor-pointer"
        >
          <LucideEyeOff className="size-3.5 text-muted-foreground/70" /> Hide
          column
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DataGridSortingDropdown;

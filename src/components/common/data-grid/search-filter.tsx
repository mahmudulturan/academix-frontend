import { ChevronDown, Filter } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { FC } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Column, Table } from '@tanstack/react-table';

interface DataGridSearchFilterProps {
    globalFilter: string;
    setGlobalFilter: (value: string) => void;
    columns: Column<unknown, unknown>[];
}

const DataGridSearchFilter: FC<DataGridSearchFilterProps> = ({
    globalFilter,
    setGlobalFilter,
    columns
}) => {
    return (
        <div className="flex items-center justify-between border-b px-6">
            <div className="inline-flex items-center justify-start text-muted-foreground mr-2 h-12 max-h-12 min-h-12 gap-x-2 border-none text-sm">
                <div className="relative flex-1 max-w-sm">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                        placeholder="Search all columns..."
                        value={globalFilter}
                        onChange={(event) => setGlobalFilter(event.target.value)}
                        className="pl-9"
                    />
                </div>
                <Select
                >
                    <SelectTrigger className="w-[130px]">
                        <Filter className="mr-2 h-4 w-4" />
                        <SelectValue placeholder="Status" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">All Status</SelectItem>
                        <SelectItem value="active">Active</SelectItem>
                        <SelectItem value="inactive">Inactive</SelectItem>
                        <SelectItem value="pending">Pending</SelectItem>
                    </SelectContent>
                </Select>
                <Select>
                    <SelectTrigger className="w-[120px]">
                        <SelectValue placeholder="Role" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">All Roles</SelectItem>
                        <SelectItem value="admin">Admin</SelectItem>
                        <SelectItem value="user">User</SelectItem>
                        <SelectItem value="moderator">Moderator</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="ml-auto bg-transparent">
                        Columns <ChevronDown className="ml-2 h-4 w-4" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    {columns
                        .filter((column) => column.getCanHide())
                        .map((column) => {
                            return (
                                <DropdownMenuCheckboxItem
                                    key={column.id}
                                    className="capitalize"
                                    checked={column.getIsVisible()}
                                    onCheckedChange={(value) =>
                                        column.toggleVisibility(!!value)
                                    }
                                >
                                    {column.id}
                                </DropdownMenuCheckboxItem>
                            );
                        })}
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
};

export default DataGridSearchFilter;
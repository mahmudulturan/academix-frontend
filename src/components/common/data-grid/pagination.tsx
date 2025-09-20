import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ChevronLeftIcon, ChevronRightIcon, ChevronsLeftIcon, ChevronsRightIcon } from 'lucide-react';
import { FC } from 'react';
import { Table } from '@tanstack/react-table';

interface DataGridPaginationProps {
    table: Table<any>
}

const DataGridPagination: FC<DataGridPaginationProps> = ({ table }) => {
    return (
        <div className='sticky inset-x-0 bottom-0 z-20 border-t bg-background h-16'>
            <div className='flex flex-row items-center justify-between gap-2 space-x-2 px-6 py-3'>
                <div className='flex flex-row items-center gap-4 sm:gap-6 lg:gap-8'>
                    <div className='flex items-center space-x-2'>
                        <Select
                            value={`${table.getState().pagination.pageSize}`}
                            onValueChange={(value) => {
                                table.setPageSize(Number(value))
                            }}
                        >
                            <SelectTrigger className="w-16">
                                <SelectValue placeholder="Select" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    {[10, 15, 30, 40, 50].map((pageSize) => (
                                        <SelectItem key={pageSize} value={`${pageSize}`}>
                                            {pageSize}
                                        </SelectItem>
                                    ))}
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                        <p className="whitespace-nowrap text-sm font-medium">
                            <span className="hidden sm:inline">rows per page</span>
                            <span className="sm:hidden">rows</span>
                        </p>
                    </div>
                </div>
                <div className='flex items-center space-x-2'>
                    <div className='flex w-[100px] items-center justify-center text-sm font-medium'>
                        Page {table.getState().pagination.pageIndex + 1} of{' '}
                        {table.getPageCount()}
                    </div>
                    <Button
                        variant="outline"
                        size="icon"
                        onClick={() => table.setPageIndex(0)}
                        disabled={!table.getCanPreviousPage()}
                    >
                        <ChevronsLeftIcon className="h-4 w-4" />
                    </Button>
                    <Button
                        variant="outline"
                        size="icon"
                        onClick={() => table.previousPage()}
                        disabled={!table.getCanPreviousPage()}
                    >
                        <ChevronLeftIcon className="h-4 w-4" />
                    </Button>
                    <Button
                        variant="outline"
                        size="icon"
                        onClick={() => table.nextPage()}
                        disabled={!table.getCanNextPage()}
                        aria-label="Go to next page"
                    >
                        <ChevronRightIcon className="h-4 w-4" />
                    </Button>
                    <Button
                        variant="outline"
                        size="icon"
                        onClick={() => table.setPageIndex(table.getPageCount() - 1)}
                        disabled={!table.getCanNextPage()}
                        aria-label="Go to last page"
                    >
                        <ChevronsRightIcon className="h-4 w-4" />
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default DataGridPagination;
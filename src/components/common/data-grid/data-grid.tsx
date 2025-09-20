"use client";
import { useState } from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  Table,
  VisibilityState,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import DataGridSearchFilter from "./search-filter";
import DataGridContent from "./content";
import DataGridPagination from "./pagination";

interface DataGridProps<T> {
  data: T[];
  columns: ColumnDef<T>[];
  enableColumnVisibility?: boolean;
  enableRowSelection?: boolean;
  enableSorting?: boolean;
  enablePagination?: boolean;
}
const DataGrid = <T,>({
  data,
  columns,
  enableColumnVisibility = true,
  enableRowSelection = false,
  enableSorting = true,
  enablePagination = true
}: DataGridProps<T>) => {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = useState({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: enableSorting ? setSorting : undefined,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: enablePagination ? getPaginationRowModel() : undefined,
    getSortedRowModel: enableSorting ? getSortedRowModel() : undefined,
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: enableColumnVisibility ? setColumnVisibility : undefined,
    onRowSelectionChange: enableRowSelection ? setRowSelection : undefined,
    state: {
      sorting: enableSorting ? sorting : [],
      columnFilters,
      columnVisibility: enableColumnVisibility ? columnVisibility : {},
      rowSelection: enableRowSelection ? rowSelection : {},
    },
  });

  return (
    <div className="">
      <DataGridSearchFilter
        columns={(table).getAllColumns()}
      />
      <div className="relative flex flex-col overflow-hidden">
        <DataGridContent table={table} />
        <DataGridPagination table={table} />
      </div>
    </div>
  );
};

export default DataGrid;

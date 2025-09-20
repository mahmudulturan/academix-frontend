"use client";
import { FC, useState } from "react";
import {
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
import { columns } from "./columns";
import DataGridSearchFilter from "./search-filter";
import DataGridContent from "./content";
import DataGridPagination from "./pagination";
import { tableData } from "@/constant";

const DataGrid: FC = () => {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [globalFilter, setGlobalFilter] = useState("");
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = useState({});

  const table = useReactTable({
    data: tableData,
    columns: columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
      globalFilter,
    },
    globalFilterFn: "includesString",
  });

  return (
    <div className="">
      <DataGridSearchFilter
        globalFilter={globalFilter}
        setGlobalFilter={setGlobalFilter}
        columns={(table as Table<unknown>).getAllColumns()}
      />
      <div className="relative flex flex-col overflow-hidden">
        <DataGridContent table={table} />
        <DataGridPagination table={table} />
      </div>
    </div>
  );
};

export default DataGrid;

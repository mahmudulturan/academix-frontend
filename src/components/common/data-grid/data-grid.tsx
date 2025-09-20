"use client";
import { useState } from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
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
import DataGridBulkActions from "./bulk-actions";

interface DataGridProps<T> {
  data: T[];
  columns: ColumnDef<T>[];
  enableColumnVisibility?: boolean;
  enableRowSelection?: boolean;
  enableSorting?: boolean;
  enablePagination?: boolean;
  bulkActions?: (selectedItems: T[]) => React.ReactNode;
}
const DataGrid = <T,>({
  data,
  columns,
  enableColumnVisibility = true,
  enableRowSelection = false,
  enableSorting = true,
  enablePagination = true,
  bulkActions
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

  const selectedRows = table.getFilteredSelectedRowModel().rows;
  const selectedItems = selectedRows.map(row => row.original);

  const handleClearSelection = () => {
    setRowSelection({});
  };

  return (
    <div className="">
      <DataGridSearchFilter
        columns={(table).getAllColumns()}
      />
      <div className="relative flex flex-col overflow-hidden">
        <DataGridContent table={table} />
        <DataGridPagination table={table} />
      </div>

      {bulkActions && enableRowSelection && (
        <DataGridBulkActions
          selectedItems={selectedItems}
          actions={bulkActions(selectedItems)}
          onClearSelection={handleClearSelection}
        />
      )}
    </div>
  );
};

export default DataGrid;

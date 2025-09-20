"use client";
import { BulkActionsWrapper } from '@/components/common/data-grid/bulk-actions';
import { columns } from '@/components/common/data-grid/columns';
import DataGrid from '@/components/common/data-grid/data-grid';
import { Button } from '@/components/ui/button';
import { tableData } from '@/constant';
import { FC } from 'react';

const UsersPage: FC = () => {

    const bulkActions = <T,>(selectedItems: T[]) => {

        return <BulkActionsWrapper>
            <Button>
                Block
            </Button>
            <Button>
                Assign Role
            </Button>
            <Button
            variant={"destructive"}
            >
                Delete ({selectedItems.length})
            </Button>
            <Button
            onClick={() => alert("Edit")}
            >
                Edit
            </Button>
        </BulkActionsWrapper>
    }
    return (
        <div>
            <DataGrid
                columns={columns}
                data={tableData}
                enableColumnVisibility={true}
                enableRowSelection={true}
                enableSorting={true}
                enablePagination={true}
                bulkActions={bulkActions}
            />
        </div>
    );
};

export default UsersPage;
import { columns } from '@/components/common/data-grid/columns';
import DataGrid from '@/components/common/data-grid/data-grid';
import { tableData } from '@/constant';
import { FC } from 'react';

const UsersPage: FC = () => {
    return (
        <div>
            <DataGrid
                columns={columns}
                data={tableData}
                enableColumnVisibility={true}
                enableRowSelection={true}
                enableSorting={true}
                enablePagination={true}
            />
        </div>
    );
};

export default UsersPage;
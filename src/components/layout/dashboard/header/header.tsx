import Icon from '@/components/common/icon';
import { Button } from '@/components/ui/button';
import { PlusSignCircleIcon } from '@hugeicons/core-free-icons';
import { FC } from 'react';

const DashboardHeader: FC = () => {
    return (
        <div className='flex items-center justify-between px-6 py-4 bg-white border-b max-h-16'>
            <h1 className='text-xl font-semibold text-gray-900'>Documents</h1>
            <Button>
                <Icon
                    icon={PlusSignCircleIcon}
                    size={16}
                />
                <span>Quick Create</span>
            </Button>
        </div>
    );
};

export default DashboardHeader;
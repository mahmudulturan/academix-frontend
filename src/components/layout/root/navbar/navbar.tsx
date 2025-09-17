import { Link } from '@/i18n/routing';
import { FC } from 'react';

const Navbar: FC = () => {
    return (
        <div className='flex justify-between items-center p-4'>
            Navbar
            <Link href={"/dashboard"}>
                Dashboard
            </Link>
        </div>
    );
};

export default Navbar;
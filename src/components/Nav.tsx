import Link from 'next/link';
import DarkModeToggle from './DarkModeToggle';

export default function Nav() {
  return (
    <nav className='relative p-4'>
      <div className='mx-auto flex justify-between'>
        <div className='flex space-x-4'>
          <Link
            href='/'
            className='flex items-center px-3 py-2 text-xl font-bold'
          >
            Qusai Sabri
          </Link>
        </div>
        <div className='flex items-center gap-4 px-3 py-2 text-xl'>
          <Link href='/blog'>Blog</Link>
          <DarkModeToggle />
        </div>
      </div>
    </nav>
  );
}

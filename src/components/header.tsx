import { MobileNav, Search, UserNav } from '.'
import { ModeToggle } from './mode-toggle'

export function Header() {
  return (
    <header className='w-full h-[72px] border-b flex  justify-between items-center px-6'>
      <MobileNav />
      <div className='hidden md:flex items-center text-lg font-medium'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
          className='mr-2 h-4 w-4'
        >
          <path d='M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3' />
        </svg>
        Acme Inc
      </div>

      <div className='flex items-center gap-4'>
        <Search />
        <UserNav />
        <ModeToggle />
      </div>
    </header>
  )
}

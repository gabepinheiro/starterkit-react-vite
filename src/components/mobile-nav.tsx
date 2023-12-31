import { HamburgerMenuIcon } from '@radix-ui/react-icons'
import * as React from 'react'
import { Link, LinkProps, useNavigate } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { cn } from '@/lib/utils'

export function MobileNav() {
  const [open, setOpen] = React.useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant='ghost'
          className='mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden'
        >
          <HamburgerMenuIcon className='h-5 w-5' />
          <span className='sr-only'>Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side='left' className='pr-0'>
        <MobileLink to='/' className='flex items-center' onOpenChange={setOpen}>
          <div className='flex items-center text-lg font-medium'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='mr-2 h-6 w-6'
            >
              <path d='M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3' />
            </svg>
            Acme Inc
          </div>
        </MobileLink>
        <ScrollArea className='my-4 h-[calc(100vh-8rem)] pb-10 pl-6'>
          <div className='flex flex-col space-y-3'>
            <MobileLink key='overview' to='/' onOpenChange={setOpen}>
              Overview
            </MobileLink>
            <MobileLink key='tasks' to='/tasks' onOpenChange={setOpen}>
              Tasks
            </MobileLink>
            <MobileLink key='products' to='/' onOpenChange={setOpen}>
              Products
            </MobileLink>
            <MobileLink key='settings' to='/' onOpenChange={setOpen}>
              Products
            </MobileLink>
          </div>
          <div className='flex flex-col space-y-2'></div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  )
}

interface MobileLinkProps extends LinkProps {
  onOpenChange?: (open: boolean) => void
  children: React.ReactNode
  className?: string
}

function MobileLink({
  to,
  onOpenChange,
  className,
  children,
  ...props
}: MobileLinkProps) {
  const navigate = useNavigate()
  return (
    <Link
      to={to}
      onClick={() => {
        navigate(to)
        onOpenChange?.(false)
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </Link>
  )
}

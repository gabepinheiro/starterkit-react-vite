import * as React from 'react'
import { useNavigate } from 'react-router-dom'

import { Button, Icons, Input, Label } from '@/components'
import { useAuth } from '@/hooks'
import { cn } from '@/lib/utils'

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  const { login } = useAuth()
  const navigate = useNavigate()

  async function handleSubmit(event: React.SyntheticEvent) {
    event.preventDefault()

    setIsLoading(true)
    await new Promise(resolve => setTimeout(() => resolve(true), 2000))
    setIsLoading(false)

    // Example
    login({
      user: {
        username: 'John Doe',
        email: 'john.doe@mail.com',
      },
      token: 'myToken',
    })

    return navigate('/', { replace: true })
  }

  return (
    <div className={cn('grid gap-6', className)} {...props}>
      <form onSubmit={event => void handleSubmit(event)}>
        <div className='grid gap-2'>
          <div className='grid gap-1'>
            <Label className='sr-only' htmlFor='email'>
              Email
            </Label>
            <Input
              id='email'
              placeholder='name@example.com'
              type='email'
              autoCapitalize='none'
              autoComplete='email'
              autoCorrect='off'
              disabled={isLoading}
            />
          </div>
          <Button disabled={isLoading}>
            {isLoading && (
              <Icons.spinner className='mr-2 h-4 w-4 animate-spin' />
            )}
            Sign In
          </Button>
        </div>
      </form>
      <div className='relative'>
        <div className='absolute inset-0 flex items-center'>
          <span className='w-full border-t' />
        </div>
        <div className='relative flex justify-center text-xs uppercase'>
          <span className='bg-background px-2 text-muted-foreground'>
            Or continue with
          </span>
        </div>
      </div>
      <Button variant='outline' type='button' disabled={isLoading}>
        {isLoading ? (
          <Icons.spinner className='mr-2 h-4 w-4 animate-spin' />
        ) : (
          <Icons.gitHub className='mr-2 h-4 w-4' />
        )}{' '}
        Github
      </Button>
    </div>
  )
}

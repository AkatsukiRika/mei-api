/*
Copyright (C) 2023-2026 QuantumNous

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as
published by the Free Software Foundation, either version 3 of the
License, or (at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program. If not, see <https://www.gnu.org/licenses/>.

For commercial licensing, please contact support@quantumnous.com
*/
import { Link } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'

import {
  MaidBowIcon,
  MaidCafeBackdrop,
  MaidLaceTrim,
  MaidWelcomeBadge,
} from '@/components/layout/components/maid-cafe-decor'
import { Skeleton } from '@/components/ui/skeleton'
import { useSystemConfig } from '@/hooks/use-system-config'

type AuthLayoutProps = {
  children: React.ReactNode
}

export function AuthLayout({ children }: AuthLayoutProps) {
  const { t } = useTranslation()
  const { systemName, logo, loading } = useSystemConfig()

  return (
    <div className='relative grid min-h-svh max-w-none overflow-hidden'>
      <MaidCafeBackdrop />
      <Link
        to='/'
        className='absolute top-4 left-4 z-10 flex items-center gap-2 transition-opacity hover:opacity-80 sm:top-8 sm:left-8'
      >
        <div className='border-primary/25 relative h-8 w-8 rounded-full border p-0.5'>
          {loading ? (
            <Skeleton className='absolute inset-0 rounded-full' />
          ) : (
            <img
              src={logo}
              alt={t('Logo')}
              className='h-full w-full rounded-full object-cover'
            />
          )}
        </div>
        {loading ? (
          <Skeleton className='h-6 w-24' />
        ) : (
          <h1 className='inline-flex items-center gap-1.5 text-xl font-medium'>
            <span>{systemName}</span>
            <MaidBowIcon className='size-4' />
          </h1>
        )}
      </Link>
      <div className='container flex items-center pt-16 sm:pt-0'>
        <div className='mx-auto flex w-full flex-col items-center justify-center gap-3 px-4 py-8 sm:w-[496px]'>
          <MaidWelcomeBadge />
          <div className='bg-card/90 border-border/80 relative w-full overflow-hidden rounded-3xl border shadow-lg backdrop-blur-sm'>
            <MaidLaceTrim position='bottom' />
            <div className='flex flex-col justify-center space-y-2 p-6 sm:p-8'>
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

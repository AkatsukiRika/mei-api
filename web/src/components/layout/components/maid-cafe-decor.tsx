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
import { CakeSlice, Coffee, Heart, Sparkles } from 'lucide-react'
import { useTranslation } from 'react-i18next'

import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

export function MaidBowIcon(props: { className?: string }) {
  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      aria-hidden='true'
      className={cn('text-primary size-4 shrink-0', props.className)}
    >
      <path
        d='M11.2 11.5C8.6 7.8 3.6 6.4 2.7 9.4C1.9 12 4.8 14.9 10.6 12.8'
        fill='currentColor'
        fillOpacity='0.24'
        stroke='currentColor'
        strokeWidth='1.65'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M12.8 11.5C15.4 7.8 20.4 6.4 21.3 9.4C22.1 12 19.2 14.9 13.4 12.8'
        fill='currentColor'
        fillOpacity='0.24'
        stroke='currentColor'
        strokeWidth='1.65'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M10.8 13.3L7.4 19.2L10.3 18.2L11.5 20.2'
        stroke='currentColor'
        strokeWidth='1.65'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M13.2 13.3L16.6 19.2L13.7 18.2L12.5 20.2'
        stroke='currentColor'
        strokeWidth='1.65'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <circle cx='12' cy='12' r='2.1' fill='currentColor' />
    </svg>
  )
}

export function MaidHeadbandIcon(props: { className?: string }) {
  return (
    <svg
      viewBox='0 0 28 22'
      fill='none'
      aria-hidden='true'
      className={cn('text-primary size-5 shrink-0', props.className)}
    >
      {/* Frilled white/pink lace ruffle arch */}
      <path
        d='M3.5 15.5C3.5 9.2 8.2 4.5 14 4.5C19.8 4.5 24.5 9.2 24.5 15.5'
        stroke='currentColor'
        strokeWidth='1.6'
        strokeLinecap='round'
      />
      <path
        d='M2.5 14.2C2.8 11.8 4.8 11.4 5.4 9.5C6.2 7.2 8.4 7.5 9.6 6C11 4.2 13 5.2 14 4C15 5.2 17 4.2 18.4 6C19.6 7.5 21.8 7.2 22.6 9.5C23.2 11.4 25.2 11.8 25.5 14.2'
        fill='currentColor'
        fillOpacity='0.18'
        stroke='currentColor'
        strokeWidth='1.4'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      {/* Side satin ribbons */}
      <circle cx='4.2' cy='15.2' r='1.7' fill='currentColor' />
      <path
        d='M3.8 16.5L2.4 20M4.7 16.5L6 19.8'
        stroke='currentColor'
        strokeWidth='1.4'
        strokeLinecap='round'
      />
      <circle cx='23.8' cy='15.2' r='1.7' fill='currentColor' />
      <path
        d='M23.3 16.5L22 19.8M24.2 16.5L25.6 20'
        stroke='currentColor'
        strokeWidth='1.4'
        strokeLinecap='round'
      />
    </svg>
  )
}

export function MaidLaceTrim(props: {
  position?: 'top' | 'bottom'
  showCenterBow?: boolean
  className?: string
}) {
  const position = props.position ?? 'bottom'
  return (
    <div
      aria-hidden='true'
      data-slot='maid-lace-trim'
      className={cn(
        'pointer-events-none relative w-full select-none',
        props.className
      )}
    >
      <div
        className={cn(
          'h-[9px] w-full opacity-90',
          position === 'bottom'
            ? 'maid-lace-scallop-bottom'
            : 'maid-lace-scallop-top'
        )}
      />
      {props.showCenterBow && (
        <div className='bg-card border-primary/25 absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center gap-1 rounded-full border px-2 py-0.5 shadow-2xs'>
          <Heart className='text-primary/70 fill-primary/25 size-2.5' />
          <MaidBowIcon className='size-3.5' />
          <Heart className='text-primary/70 fill-primary/25 size-2.5' />
        </div>
      )}
    </div>
  )
}

export function MaidWelcomeBadge(props: {
  compact?: boolean
  className?: string
}) {
  const { t } = useTranslation()
  if (props.compact) {
    return (
      <Badge
        variant='secondary'
        data-slot='maid-welcome-badge'
        className={cn(
          'border-primary/20 bg-secondary/80 text-secondary-foreground gap-1.5 border px-2.5 py-0.5 font-medium shadow-2xs',
          props.className
        )}
      >
        <MaidHeadbandIcon className='size-3.5' />
        <span>{t('Maid Cafe Salon')}</span>
      </Badge>
    )
  }

  return (
    <Badge
      variant='secondary'
      data-slot='maid-welcome-badge'
      className={cn(
        'border-primary/25 bg-secondary/85 text-secondary-foreground h-auto gap-2 rounded-full border px-3.5 py-1.5 text-xs font-medium whitespace-normal shadow-xs backdrop-blur-xs',
        props.className
      )}
    >
      <MaidHeadbandIcon className='size-4' />
      <span>
        {t('Welcome home, Master! Freshly brewed AI APIs at your service')}
      </span>
      <Coffee className='text-primary size-3.5 shrink-0' aria-hidden='true' />
    </Badge>
  )
}

export function MaidSidebarTeaCard(props: { className?: string }) {
  const { t } = useTranslation()
  return (
    <div
      data-slot='maid-sidebar-tea-card'
      className={cn('px-2 pb-1', props.className)}
    >
      <div className='border-primary/20 from-secondary/85 via-card to-secondary/50 relative overflow-hidden rounded-2xl border bg-linear-to-br p-2.5 shadow-2xs group-data-[collapsible=icon]:flex group-data-[collapsible=icon]:items-center group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:p-1.5'>
        <MaidBowIcon className='hidden size-4 group-data-[collapsible=icon]:block' />
        <div className='flex items-start gap-2.5 group-data-[collapsible=icon]:hidden'>
          <div className='bg-primary/12 border-primary/20 flex size-8 shrink-0 items-center justify-center rounded-xl border'>
            <MaidHeadbandIcon className='size-5' />
          </div>
          <div className='min-w-0 flex-1'>
            <div className='flex items-center gap-1'>
              <span className='text-foreground truncate text-xs font-semibold'>
                {t('Maid Cafe Menu')}
              </span>
              <Heart
                aria-hidden='true'
                className='text-primary fill-primary/35 size-3 shrink-0'
              />
            </div>
            <p className='text-muted-foreground mt-0.5 line-clamp-2 text-[11px] leading-snug'>
              {t('Sweet strawberry latte & stable model routing')}
            </p>
            <div
              aria-hidden='true'
              className='text-primary/75 mt-1.5 flex items-center gap-2'
            >
              <Coffee className='size-3' />
              <CakeSlice className='size-3' />
              <Sparkles className='size-3' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function MaidCafeBackdrop(props: { className?: string }) {
  return (
    <div
      aria-hidden='true'
      data-slot='maid-cafe-backdrop'
      className={cn(
        'pointer-events-none fixed inset-0 -z-10 overflow-hidden select-none',
        props.className
      )}
    >
      <div className='maid-polka-pattern absolute inset-0 opacity-45 dark:opacity-20' />
      <div
        className='absolute -top-28 -left-24 h-96 w-96 rounded-full opacity-30 blur-3xl dark:opacity-15'
        style={{
          background:
            'radial-gradient(circle, oklch(0.78 0.15 356) 0%, transparent 70%)',
        }}
      />
      <div
        className='absolute top-1/4 -right-24 h-80 w-80 rounded-full opacity-25 blur-3xl dark:opacity-15'
        style={{
          background:
            'radial-gradient(circle, oklch(0.83 0.115 20) 0%, transparent 70%)',
        }}
      />
      <div className='maid-float-slow text-primary/20 absolute top-24 left-[7%] hidden lg:block'>
        <MaidBowIcon className='size-9' />
      </div>
      <div
        className='maid-float-slow text-primary/20 absolute top-36 right-[8%] hidden lg:block'
        style={{ animationDelay: '1.6s' }}
      >
        <MaidHeadbandIcon className='size-10' />
      </div>
      <div
        className='maid-float-slow text-primary/15 absolute bottom-20 left-[10%] hidden xl:block'
        style={{ animationDelay: '2.8s' }}
      >
        <CakeSlice className='size-8' />
      </div>
      <div
        className='maid-float-slow text-primary/15 absolute right-[11%] bottom-24 hidden xl:block'
        style={{ animationDelay: '0.9s' }}
      >
        <Coffee className='size-8' />
      </div>
    </div>
  )
}

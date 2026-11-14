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
import { act, render, screen } from '@testing-library/react'
import i18next from 'i18next'
import { afterEach, describe, expect, it } from 'vitest'

import {
  MaidCafeBackdrop,
  MaidLaceTrim,
  MaidSidebarTeaCard,
  MaidWelcomeBadge,
} from '../components/maid-cafe-decor'

afterEach(async () => {
  await act(async () => {
    await i18next.changeLanguage('en')
  })
})

describe('Maid Cafe decorative components', () => {
  it('renders the full welcome greeting by default and compact salon badge when compact is set', () => {
    const { rerender } = render(<MaidWelcomeBadge />)

    expect(
      screen.getByText(
        'Welcome home, Master! Freshly brewed AI APIs at your service'
      )
    ).toBeInTheDocument()

    rerender(<MaidWelcomeBadge compact />)

    expect(screen.getByText('Maid Cafe Salon')).toBeInTheDocument()
  })

  it('updates welcome greeting and sidebar tea menu copy when switching language', async () => {
    i18next.addResourceBundle(
      'zh',
      'translation',
      {
        'Maid Cafe Menu': '女仆茶歇特调',
        'Sweet strawberry latte & stable model routing':
          '草莓牛奶特调中 · 稳定路由竭诚为您服务',
        'Welcome home, Master! Freshly brewed AI APIs at your service':
          '欢迎回来，主人！为您献上现泡特调 AI 接口服务',
      },
      true,
      true
    )

    render(
      <>
        <MaidWelcomeBadge />
        <MaidSidebarTeaCard />
      </>
    )

    await act(async () => {
      await i18next.changeLanguage('zh')
    })

    expect(
      screen.getByText('欢迎回来，主人！为您献上现泡特调 AI 接口服务')
    ).toBeInTheDocument()
    expect(screen.getByText('女仆茶歇特调')).toBeInTheDocument()
    expect(
      screen.getByText('草莓牛奶特调中 · 稳定路由竭诚为您服务')
    ).toBeInTheDocument()
  })

  it('marks lace trim and ambient backdrop as aria-hidden decorative elements', () => {
    const { container } = render(
      <>
        <MaidLaceTrim position='bottom' showCenterBow />
        <MaidCafeBackdrop />
      </>
    )

    const trim = container.querySelector('[data-slot="maid-lace-trim"]')
    const backdrop = container.querySelector('[data-slot="maid-cafe-backdrop"]')

    expect(trim).toHaveAttribute('aria-hidden', 'true')
    expect(backdrop).toHaveAttribute('aria-hidden', 'true')
  })
})

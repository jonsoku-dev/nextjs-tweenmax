import 'jest-styled-components'

import { render, screen } from '@testing-library/react'
import React from 'react'
import { ThemeProvider } from 'styled-components'

import Anchor from '@/components/atoms/Anchor'
import { defaultTheme } from '@/utils/theme'

it('renders "Index"', () => {
  render(
    <ThemeProvider theme={defaultTheme}>
      <Anchor href={'https://naver.com'} text={'naver'} />
    </ThemeProvider>
  )
  const element = screen.getByText(/naver/)
  expect(element).toBeInTheDocument()
})

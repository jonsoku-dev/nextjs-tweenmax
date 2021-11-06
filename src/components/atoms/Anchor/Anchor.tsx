import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'

// jonsoku
export interface AnchorProps {
  /**
   * Client routing href
   */
  href: string
  /**
   * Anchor text
   */
  text: string
  /**
   * Text color
   */
  textColor?: string
}

const Text = styled.a<{ color?: string }>`
  color: ${({ color, theme }) => (color ? color : theme.palette.grey)};
`

export const Anchor: React.VFC<AnchorProps> = ({ href, text, textColor }) => {
  console.log(text)
  return (
    <Link href={href}>
      <Text color={textColor}>{text}</Text>
    </Link>
  )
}

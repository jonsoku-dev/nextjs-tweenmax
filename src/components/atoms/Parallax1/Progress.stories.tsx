import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import GlobalStyle from '@/components/GlobalStyle'

import Parallax from '.'

export default {
  title: 'atoms/Parallax',
  component: Parallax,
  argTypes: {
    textColor: { control: 'color' },
  },
} as ComponentMeta<typeof Parallax>

const Template: ComponentStory<typeof Parallax> = (args) => (
  <>
    <GlobalStyle />
    <Parallax {...args} />
  </>
)

export const Default = Template.bind({})

import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import GlobalStyle from '@/components/GlobalStyle'

import Progress2 from '.'

export default {
  title: 'atoms/Progress2',
  component: Progress2,
  argTypes: {
    textColor: { control: 'color' },
  },
} as ComponentMeta<typeof Progress2>

const Template: ComponentStory<typeof Progress2> = (args) => (
  <>
    <GlobalStyle />
    <Progress2 {...args} />
  </>
)

export const Default = Template.bind({})

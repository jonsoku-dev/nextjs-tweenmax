import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import Stroke from '@/components/atoms/Stroke'
import GlobalStyle from '@/components/GlobalStyle'

export default {
  title: 'atoms/Stroke',
  component: Stroke,
  argTypes: {
    textColor: { control: 'color' },
  },
} as ComponentMeta<typeof Stroke>

const Template: ComponentStory<typeof Stroke> = (args) => (
  <>
    <GlobalStyle />
    <Stroke {...args} />
  </>
)

export const Default = Template.bind({})

import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import Progress from '@/components/atoms/Progress'
import GlobalStyle from '@/components/GlobalStyle'

export default {
  title: 'atoms/Progress',
  component: Progress,
  argTypes: {
    textColor: { control: 'color' },
  },
} as ComponentMeta<typeof Progress>

const Template: ComponentStory<typeof Progress> = (args) => (
  <>
    <GlobalStyle />
    <Progress {...args} />
  </>
)

export const Default = Template.bind({})

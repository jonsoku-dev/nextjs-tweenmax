import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import GsapMotion1 from '@/components/atoms/GsapMotion1'
import GlobalStyle from '@/components/GlobalStyle'

export default {
  title: 'atoms/GsapMotion1',
  component: GsapMotion1,
  argTypes: {
    textColor: { control: 'color' },
  },
} as ComponentMeta<typeof GsapMotion1>

const Template: ComponentStory<typeof GsapMotion1> = (args) => (
  <>
    <GlobalStyle />
    <GsapMotion1 {...args} />
  </>
)

export const Default = Template.bind({})

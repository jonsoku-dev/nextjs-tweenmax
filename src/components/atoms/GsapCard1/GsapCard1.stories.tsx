import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import GsapCard1 from '@/components/atoms/GsapCard1'
import GlobalStyle from '@/components/GlobalStyle'

export default {
  title: 'atoms/GsapCard1',
  component: GsapCard1,
  argTypes: {
    textColor: { control: 'color' },
  },
} as ComponentMeta<typeof GsapCard1>

const Template: ComponentStory<typeof GsapCard1> = (args) => (
  <>
    <GlobalStyle />
    <GsapCard1 {...args} />
  </>
)

export const Default = Template.bind({})

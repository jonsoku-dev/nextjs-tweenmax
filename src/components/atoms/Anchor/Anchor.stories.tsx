import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import Anchor from '@/components/atoms/Anchor'

export default {
  title: 'atoms/Index',
  component: Anchor,
  argTypes: {
    textColor: { control: 'color' },
  },
} as ComponentMeta<typeof Anchor>

const Template: ComponentStory<typeof Anchor> = (args) => <Anchor {...args} />

export const Default = Template.bind({})
Default.args = {
  href: 'https://naver.com',
  text: 'Hello',
}

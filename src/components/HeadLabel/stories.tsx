import { Story, Meta } from '@storybook/react'

import HeadLabel from '.'

export default {
  component: HeadLabel,
  title: 'HeadLabel',
} as Meta

export const Basic: Story = () => <HeadLabel title="Habit Name" status="red" />

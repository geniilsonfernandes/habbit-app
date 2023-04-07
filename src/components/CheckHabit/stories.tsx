import { Story, Meta } from '@storybook/react'

import CheckHabit from '.'

export default {
  component: CheckHabit,
  title: 'CheckHabit',
} as Meta

export const Basic: Story = () => (
  <CheckHabit date={2} day="day" status="success" />
)

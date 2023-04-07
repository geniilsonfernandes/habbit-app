import { Story, Meta } from '@storybook/react'

import CardHabit from '.'

export default {
  component: CardHabit,
  title: 'CardHabit',
} as Meta

export const Basic: Story = () => (
  <CardHabit
    habbitName="Habit Name"
    intervalTime="Every 2 days"
    habits={[1, 2, 3, 4, 5, 6, 7, 8]}
    habbitColor="#A9A9AA"
  />
)

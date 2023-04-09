import { Story, Meta } from '@storybook/react'

import CardHabitShort from '.'

export default {
  component: CardHabitShort,
  title: 'CardHabitShort',
} as Meta

export const Basic: Story = () => <CardHabitShort />

import { Story, Meta } from '@storybook/react'

import CardHabit, { CardHabitProps } from '.'

export default {
  component: CardHabit,
  title: 'CardHabit',
  args: {
    habbitName: 'ler mais',
    intervalTime: 'todo dia',
    habbitColor: 'red',
    habits: [1, 2, 3, 4, 5, 6, 7, 8],
  },
} as Meta<CardHabitProps>

export const Basic: Story<CardHabitProps> = (args) => <CardHabit {...args} />

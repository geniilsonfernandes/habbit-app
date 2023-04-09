import { Story, Meta } from '@storybook/react'

import CardHabitShort, { CardHabitShortProps } from '.'

export default {
  component: CardHabitShort,
  title: 'CardHabitShort',
  args: {
    id: '1',
    HabitName: 'HabitName',
    intervalTime: 'intervalTime',
    status: 'success',
    habbitColor: '#3b3102',
  },
} as Meta<CardHabitShortProps>

export const Basic: Story<CardHabitShortProps> = (args) => (
  <CardHabitShort {...args} />
)

import { Story, Meta } from '@storybook/react'

import CheckHabit, { CheckHabitProps } from '.'

export default {
  component: CheckHabit,
  title: 'CheckHabit',
  args: {
    day: 'Mon',
    date: 1,
    status: 'default',
  },
} as Meta<CheckHabitProps>

export const Basic: Story<CheckHabitProps> = (args) => <CheckHabit {...args} />

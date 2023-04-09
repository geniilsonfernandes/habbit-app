import { Story, Meta } from '@storybook/react'

import CardHabit, { CardHabitProps } from '.'

export const MockData: CardHabitProps = {
  id: '1',
  habitName: 'Fazer exercícios',
  intervalTime: '2 dias por semana',
  habbitColor: '#F2C94C',
  habbitLastEightDays: [
    {
      id: '1',
      day: 'Seg',
      date: 14,
      status: 'success',
    },
    {
      id: '2',
      day: 'Ter',
      date: 15,
      status: 'success',
    },
    {
      id: '3',
      day: 'Qua',
      date: 16,
      status: 'delayed',
    },
    {
      id: '4',
      day: 'Qui',
      date: 17,
      status: 'delayed',
    },
    {
      id: '5',
      day: 'Sex',
      date: 18,
      status: 'success',
    },
    {
      id: '6',
      day: 'Sab',
      date: 19,
      status: 'failed',
    },
    {
      id: '7',
      day: 'Dom',
      date: 20,
      status: 'success',
    },
    {
      id: '8',
      day: 'Seg',
      date: 21,
      status: 'default',
    },
  ],
}

export default {
  component: CardHabit,
  title: 'CardHabit',
  args: MockData,
} as Meta<CardHabitProps>

export const Basic: Story<CardHabitProps> = (args) => <CardHabit {...args} />

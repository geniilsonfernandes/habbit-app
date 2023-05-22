import { Story, Meta } from '@storybook/react'

import CalendarChart from '.'

export default {
  component: CalendarChart,
  title: 'CalendarChart',
} as Meta

export const Basic: Story = () => <CalendarChart />

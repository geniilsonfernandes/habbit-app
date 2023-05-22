import { Story, Meta } from '@storybook/react'

import YearLineChart from '.'

export default {
  component: YearLineChart,
  title: 'YearLineChart',
} as Meta

export const Basic: Story = () => <YearLineChart />

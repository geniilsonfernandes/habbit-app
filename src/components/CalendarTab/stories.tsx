import { Story, Meta } from '@storybook/react'

import CalendarTab from '.'

export default {
  component: CalendarTab,
  title: 'CalendarTab',
} as Meta

export const Basic: Story = () => <CalendarTab />

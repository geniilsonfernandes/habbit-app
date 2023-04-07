import { Story, Meta } from '@storybook/react'

import HabbitCard from '.'

export default {
  component: HabbitCard,
  title: 'HabbitCard',
} as Meta

export const Basic: Story = () => <HabbitCard />

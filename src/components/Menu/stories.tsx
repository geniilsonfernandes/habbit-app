import { Story, Meta } from '@storybook/react'

import Menu from '.'

export default {
  component: Menu,
  title: 'Menu',
} as Meta

export const Basic: Story = () => <Menu />

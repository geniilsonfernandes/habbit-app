import { Story, Meta } from '@storybook/react'

import MenuList from '.'

export default {
  component: MenuList,
  title: 'MenuList',
} as Meta

export const Basic: Story = () => <MenuList />

import { Story, Meta } from '@storybook/react'

import MenuList, { MenuListProps } from '.'

export default {
  component: MenuList,
  title: 'MenuList',
  args: {
    isMobile: false,
  },
} as Meta<MenuListProps>

export const Basic: Story<MenuListProps> = (args) => <MenuList {...args} />

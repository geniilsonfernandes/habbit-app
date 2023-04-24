import { Story, Meta } from '@storybook/react'

import UserAvatar, { UserAvatarProps } from '.'

export default {
  component: UserAvatar,
  title: 'UserAvatar',
  args: {
    avatarUrl: 'https://avatars.githubusercontent.com/u/11637705?v=4',
    name: 'Rafael',
    onClick: () => console.log('click'),
  },
} as Meta<UserAvatarProps>

export const Basic: Story<UserAvatarProps> = (args) => <UserAvatar {...args} />

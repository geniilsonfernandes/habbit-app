import { Story, Meta } from '@storybook/react'

import Head, { HeadProps } from '.'

export default {
  component: Head,
  title: 'Head',
  args: {
    title: 'Habits',
    user: {
      name: 'jaca',
      img: 'https://avatars.githubusercontent.com/u/61945302?v=4',
    },
  },
} as Meta<HeadProps>

export const Basic: Story<HeadProps> = (args) => <Head {...args} />

import { Story, Meta } from '@storybook/react'

import Button, { ButtonProps } from '.'

export default {
  component: Button,
  title: 'Button',
  args: {
    children: 'Button',
    isDisabled: false,
    isLoding: false,
  },
  argTypes: {
    children: {
      type: 'string',
    },
  },
} as Meta<ButtonProps>

export const Basic: Story<ButtonProps> = (args) => <Button {...args} />

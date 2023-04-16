import { Story, Meta } from '@storybook/react'

import TextInput, { TextInputProps } from '.'

export default {
  component: TextInput,
  title: 'TextInput',
  args: {
    placeholder: 'Type your text',
    helperText: 'Helper text',
    label: 'Label',
    error: false,
    success: false,
    disabled: false,
    id: 'input',
  },
} as Meta<TextInputProps>

export const Basic: Story<TextInputProps> = (args) => <TextInput {...args} />

import { Story, Meta } from '@storybook/react'

import Input, { TextInputProps } from '.'

export default {
  component: Input,
  title: 'Form/Input',
  args: {
    placeholder: 'Type your text',
    helperText: '',
    label: 'Label',
    error: false,
    success: false,
    disabled: false,
    id: 'input',
  },
} as Meta<TextInputProps>

export const Default: Story<TextInputProps> = (args) => <Input {...args} />

export const Error: Story<TextInputProps> = (args) => <Input {...args} />

Error.args = {
  error: true,
  helperText: 'Error message',
}

export const WithLabel: Story<TextInputProps> = (args) => <Input {...args} />

WithLabel.args = {
  label: 'Label',
}

export const Password: Story<TextInputProps> = (args) => <Input {...args} />

Password.args = {
  type: 'password',
  placeholder: 'Type your password',
  helperText: '',
}

export const onRecoveryPassword: Story<TextInputProps> = (args) => (
  <Input {...args} />
)

onRecoveryPassword.args = {
  type: 'password',
  label: 'Password',
  placeholder: 'Type your password',
  onRecoveryPassword: () => console.log('onRecoveryPassword'),
}

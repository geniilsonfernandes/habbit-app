import { Story, Meta } from '@storybook/react'

import Input, { InputProps } from '.'

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
} as Meta<InputProps>

export const Default: Story<InputProps> = (args) => <Input {...args} />

export const Error: Story<InputProps> = (args) => <Input {...args} />

Error.args = {
  error: true,
  helperText: 'Error message',
}

export const WithLabel: Story<InputProps> = (args) => <Input {...args} />

WithLabel.args = {
  label: 'Label',
}

export const Password: Story<InputProps> = (args) => <Input {...args} />

Password.args = {
  type: 'password',
  placeholder: 'Type your password',
  helperText: '',
}

export const onRecoveryPassword: Story<InputProps> = (args) => (
  <Input {...args} />
)

onRecoveryPassword.args = {
  type: 'password',
  label: 'Password',
  placeholder: 'Type your password',
  onRecoveryPassword: () => console.log('onRecoveryPassword'),
}

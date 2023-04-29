import { Story, Meta } from '@storybook/react'

import Header, { HeaderProps } from '.'

export default {
  component: Header,
  title: 'Header',
  args: {
    title: 'Habit',
    leftComponent: <div>left</div>,
    rightComponent: <div>right</div>,
  },
} as Meta<HeaderProps>

export const Basic: Story<HeaderProps> = (args) => <Header {...args} />

export const WithGoBack: Story<HeaderProps> = (args) => (
  <Header {...args} goBack={() => console.log('goBack')} />
)

import { Story, Meta } from '@storybook/react'
import HeadLabel, { HeadLabelProps } from '.'

export default {
  component: HeadLabel,
  title: 'HeadLabel',
  args: {
    title: 'Habit Name',
    barColor: 'red',
    variant: 'light',
  },
} as Meta<HeadLabelProps>

export const Basic: Story<HeadLabelProps> = (args) => <HeadLabel {...args} />

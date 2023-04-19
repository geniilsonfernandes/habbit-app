import { Story, Meta } from '@storybook/react'
import Label, { LabelProps } from '.'

export default {
  component: Label,
  title: 'Label',
  args: {
    title: 'Habit Name',
    description: 'Habit Description',
    barColor: 'red',
  },
} as Meta<LabelProps>

export const Basic: Story<LabelProps> = (args) => <Label {...args} />

export const WithoutDescription: Story<LabelProps> = (args) => (
  <Label {...args} />
)
WithoutDescription.args = {
  description: '',
}

export const Vertical: Story<LabelProps> = (args) => <Label {...args} />
Vertical.args = {
  orientation: 'vertical',
}

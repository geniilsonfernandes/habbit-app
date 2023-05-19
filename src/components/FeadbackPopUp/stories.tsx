import { Story, Meta } from '@storybook/react'

import FeadbackPopUp from '.'

export default {
  component: FeadbackPopUp,
  title: 'FeadbackPopUp',
} as Meta

export const Basic: Story = () => (
  <FeadbackPopUp
    message="Habit created successfully"
    type="success"
    onClose={() => console.log("I'm closed")}
  />
)

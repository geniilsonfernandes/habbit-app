import { Story, Meta } from '@storybook/react'

import CreateHabit from '.'

export default {
  component: CreateHabit,
  title: 'CreateHabit',
} as Meta

export const Basic: Story = () => (
  <div
    style={{
      width: '412px',
      height: '80vh',
    }}
  >
    <CreateHabit />
  </div>
)

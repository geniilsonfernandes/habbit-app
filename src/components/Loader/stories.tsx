import { Story, Meta } from '@storybook/react'

import Loader, { LoaderProps } from '.'

export default {
  component: Loader,
  title: 'Loader',
} as Meta<LoaderProps>

export const Basic: Story<LoaderProps> = (args) => <Loader {...args} />

import { Story, Meta } from '@storybook/react'

import CategoryButton, { CategoryButtonProps } from '.'

export default {
  component: CategoryButton,
  title: 'CategoryButton',
} as Meta<CategoryButtonProps>

export const Basic: Story<CategoryButtonProps> = (arg) => (
  <CategoryButton {...arg} />
)

import type { StoryObj, Meta } from '@storybook/react'
import { Avatar, AvatarProps } from '@marcelo-de-castro-ignite/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/MarceloDCastro.png',
    alt: 'Marcelo de Castro',
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}

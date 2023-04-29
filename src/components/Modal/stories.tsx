import { Story, Meta } from '@storybook/react'
import { useArgs } from '@storybook/client-api'

import Modal, { ModalProps } from '.'

export default {
  component: Modal,
  title: 'Modal',
} as Meta<ModalProps>

export const Basic: Story<ModalProps> = (args) => {
  const [{ isOpen }, updateArgs] = useArgs()
  const handleClose = () => updateArgs({ isOpen: !isOpen })
  return (
    <>
      <button onClick={handleClose}>Open Modal</button>

      <Modal {...args} isOpen={isOpen} onClose={handleClose}>
        <div
          style={{
            width: '100%',
            height: '100%',
            background: 'red',
            padding: '2rem',
          }}
        >
          modal here
        </div>
      </Modal>
    </>
  )
}

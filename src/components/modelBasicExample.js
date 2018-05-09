import React from 'react'
import ColumnWithPopout from './column_with_popout';
import { Button, Header, Image, Modal } from 'semantic-ui-react'

const ModalBasicExample = ({ values, heading, paragraph }) => (
    <Modal size='large' trigger={<ColumnWithPopout heading={heading} paragraph={paragraph}></ColumnWithPopout>} >
        <Modal.Header>Select a Photo</Modal.Header>
        <Modal.Content image>
            <Image wrapped fluid src='https://s3.amazonaws.com/johnrudell-port-dev/background.jpg' />
            <Modal.Description>
                <Header>Default Profile Image</Header>
                <p>Here are the values that you input: {values}</p>
                <p>Is it okay to use this photo?</p>
            </Modal.Description>
        </Modal.Content>
    </Modal>
)

export default ModalBasicExample
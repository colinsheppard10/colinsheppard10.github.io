import React from 'react'
import ColumnWithPopout from './column_with_popout';
import { Button, Header, Image, Modal } from 'semantic-ui-react'

const ModalBasicExample = ({ values, heading, paragraph, image }) => (
    <Modal size='large' trigger={<ColumnWithPopout heading={heading} paragraph={paragraph}></ColumnWithPopout>} >
        <Modal.Header>{heading}</Modal.Header>
        <Modal.Content image>
            <Image wrapped fluid src={image} />
            <Modal.Description>
                <Header>{values}</Header>
                <p>{paragraph}</p>
            </Modal.Description>
        </Modal.Content>
    </Modal>
)

export default ModalBasicExample
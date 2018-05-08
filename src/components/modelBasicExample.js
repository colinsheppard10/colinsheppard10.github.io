import React from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'
import App from './app';
import ColumnWithPopout from './column_with_popout';

const ModalBasicExample = ({ values, heading, paragraph }) => {
    console.log("in model Basic Example");
    return (
        <Modal trigger={<ColumnWithPopout heading={heading} paragraph={paragraph}></ColumnWithPopout>} basic size='small' closeIcon>
            <Header icon='archive' content='Archive Old Messages' />
            <Modal.Content>
                <p>{values}</p>
            </Modal.Content>
            <Modal.Actions>
                <Button basic color='red' inverted>
                    <Icon name='remove' /> No
             </Button>
                <Button color='green' inverted>
                    <Icon name='checkmark' /> Yes
            </Button>
            </Modal.Actions>
        </Modal>
    )
}

export default ModalBasicExample
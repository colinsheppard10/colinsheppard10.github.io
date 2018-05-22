import React from 'react'
import ColumnWithPopout from './column_with_popout';
import { Button, Header, Image, Modal, Grid, Container, Icon } from 'semantic-ui-react'

const ModalBasicExample = ({ values, heading, paragraph, image, firstImage, firstDescription, gitHubLink }) => (
    <Modal size='large scrolling' trigger={<ColumnWithPopout heading={heading} firstImage={firstImage} firstDescription={firstDescription}></ColumnWithPopout>} closeIcon>
        <Modal.Header>
            {heading}
        </Modal.Header>
        <Modal.Content image scrolling>
            <Image wrapped fluid src={image} />
            <Modal.Description>
                <Header>{values}</Header>
                <p className='colparagraph'>{paragraph}</p>
            </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
            <Button a href={gitHubLink} target="_blank" primary>
                <Icon size='large' name='github' /> GitHub
            </Button>
        </Modal.Actions>
    </Modal>
)

export default ModalBasicExample







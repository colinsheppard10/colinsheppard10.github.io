import React from 'react'
import ColumnWithPopout from './column_with_popout';
import { Button, Header, Image, Modal, Grid, Container, Icon } from 'semantic-ui-react'
import Slider from "react-slick";


const ModalBasicExample = ({ values, heading, paragraph, image }) => (
    <Modal size='large scrolling' trigger={<ColumnWithPopout heading={heading} paragraph={paragraph}></ColumnWithPopout>} closeIcon>
        <Modal.Header>
            {heading}
        </Modal.Header>
        <Modal.Content image scrolling>
            <Image wrapped fluid src={image} />
            <Modal.Description>
                <Header>{values}</Header>
                <p>{paragraph}</p>
            </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
            <Button primary>
                <Icon size='large' name='github' /> GitHub
            </Button>
        </Modal.Actions>
    </Modal>
)

export default ModalBasicExample







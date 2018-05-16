import React from 'react'
import ColumnWithPopout from './column_with_popout';
import { Button, Header, Image, Modal, Grid, Container } from 'semantic-ui-react'
import Slider from "react-slick";


const ModalBasicExample = ({ values, heading, paragraph, image }) => (
    <Modal size='large' trigger={<ColumnWithPopout heading={heading} paragraph={paragraph}></ColumnWithPopout>} >
        <Modal.Header>{heading}</Modal.Header>
        <Modal.Content image scrolling>
            <Grid container stackable verticalAlign='middle'>
                <Grid.Row>
                    <Image size='huge' wrapped src={image} />
                </Grid.Row>
                <Grid.Row>
                    <Image size='huge' wrapped src={image} />
                </Grid.Row>
            </Grid>
            <Modal.Description>
                <Container text className='colcontainer'>
                    <Header>{values}</Header>
                    <p>{paragraph} </p>
                </Container>
            </Modal.Description>
        </Modal.Content>
    </Modal>
)

export default ModalBasicExample




import React, { Component } from 'react'
import ColumnWithPopout from './column_with_popout';
import { Button, Header, Image, Modal, Grid, Container, Icon } from 'semantic-ui-react'

class ModalBasicExample extends Component {
    constructor(props) {
        super(props);
        this.state = { modalOpen: false }
    }

    toggle = () => {
        this.setState({ modalOpen: !this.state.modalOpen })
    }

    render() {
        const { values, heading, paragraph, image, firstDescription, gitHubLink, firstImage } = this.props;
        return (
            <Modal open={this.state.modalOpen} size='large scrolling' trigger={<ColumnWithPopout onClick={this.toggle} heading={heading} firstImage={firstImage} firstDescription={firstDescription}></ColumnWithPopout>}>
                <div>
                    <Icon className='colicon' name='close' style={{ padding: '.3em .2em' }} onClick={this.toggle} />
                    <br />
                </div>
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
    }
}

export default ModalBasicExample







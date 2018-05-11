import ScreenCoverModel from './modelBasicExample';

import React, { Component } from 'react'
import { Visibility, Segment, Grid, Header, Image } from 'semantic-ui-react'
import { Element } from 'react-scroll';


export default class CompanySeg extends Component {
    state = {
        calculations: {
            onScreen: false,
        },
    }

    handleContextRef = contextRef => this.setState({ contextRef })

    handleUpdate = (e, { calculations }) => {
        if (calculations.onScreen) {
            this.props.callBack('company');
        }
        return this.setState({ calculations })
    }

    render() {
        const { calculations, contextRef } = this.state
        return (
            <div ref={this.handleContextRef}>
                <Visibility onUpdate={this.handleUpdate}>
                    <Segment style={{ padding: '0em' }} vertical>
                        <Element name="company" />
                        <Grid celled='internally' columns='equal' stackable>
                            <Grid.Row textAlign='center'>
                                <ScreenCoverModel values="one" heading="one" paragraph="one paragraph" />
                                <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                                    <Header as='h3' style={{ fontSize: '2em' }}>"I shouldn't have gone with their competitor."</Header>
                                    <p style={{ fontSize: '1.33em' }}>
                                        <Image avatar src='https://s3.amazonaws.com/johnrudell-port-dev/background.jpg' />
                                        <b>Nan</b> Chief Fun Officer Acme Toys
                                    </p>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Segment>
                </Visibility>
            </div>
        )
    }
}





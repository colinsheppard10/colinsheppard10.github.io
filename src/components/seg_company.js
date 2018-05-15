import ModelBasicExample from './modelBasicExample';

import React, { Component } from 'react'
import { Segment, Grid, Header, Image, Reveal } from 'semantic-ui-react'
import { Element } from 'react-scroll';


export default class CompanySeg extends Component {
    render() {
        return (
            <Element name="company">
                <Segment style={{ padding: '0em' }} vertical>
                    <Grid celled='internally' columns='equal' stackable>
                        <Grid.Row textAlign='center'>
                            <ModelBasicExample values="one value" heading="one heading" paragraph="one paragraph" image='https://s3.amazonaws.com/johnrudell-port-dev/background.jpg' />
                            <ModelBasicExample values="two value" heading="two heading" paragraph="two paragraph" image='https://s3.amazonaws.com/johnrudell-port-dev/background.jpg' />
                        </Grid.Row>
                        <Grid.Row textAlign='center'>
                            <ModelBasicExample values="three value" heading="three heading" paragraph="three paragraph" image='https://s3.amazonaws.com/johnrudell-port-dev/background.jpg' />
                            <ModelBasicExample values="four value" heading="four heading" paragraph="four paragraph" image='https://s3.amazonaws.com/johnrudell-port-dev/background.jpg' />
                        </Grid.Row>
                    </Grid>
                </Segment>
            </Element>
        )
    }
}









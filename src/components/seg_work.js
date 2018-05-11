import React, { Component } from 'react'
import { Segment, Grid, Header, Button, Image } from 'semantic-ui-react'
import { Element } from 'react-scroll';


export default class WorkSeg extends Component {
    render() {
        return (
            <div>
                <br />
                <Element name="work">
                    <Segment style={{ padding: '4em 0em' }} vertical>
                        <Grid container stackable verticalAlign='middle'>
                            <Grid.Row>
                                <Grid.Column width={8}>
                                    <Header as='h3' style={{ fontSize: '2em' }}>We Help Companies and Companions</Header>
                                    <p style={{ fontSize: '1.33em' }}>
                                        We can give your company superpowers to do things that they never thought possible. Let us delight
                                        your customers and empower your needs... through pure data analytics.
                                    </p>
                                    <Header as='h3' style={{ fontSize: '2em' }}>We Make Bananas That Can Dance</Header>
                                    <p style={{ fontSize: '1.33em' }}>
                                        Yes that's right, you thought it was the stuff of dreams, but even bananas can be bioengineered.
                                    </p>
                                </Grid.Column>
                                <Grid.Column floated='right' width={6}>
                                    <Image
                                        bordered
                                        rounded
                                        size='large'
                                        src='https://s3.amazonaws.com/johnrudell-port-dev/background.jpg'
                                    />
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column textAlign='center'>
                                    <Button size='huge'>Check Them Out</Button>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Segment>
                </Element>
            </div>
        )
    }
}




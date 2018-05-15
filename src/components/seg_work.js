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
                                    <Header className="colcolor" as='h3' style={{ fontSize: '2em' }}>The past few years...</Header>
                                    <p className="colcolor" style={{ fontSize: '1.33em' }}>
                                        I've worked on Java and JavaScript microServices for Aeris Communications, an IOT company.
                                    </p>
                                    <Header className="colcolor" as='h3' style={{ fontSize: '2em' }}>Currently...</Header>
                                    <p className="colcolor" style={{ fontSize: '1.33em' }}>
                                        I live in a tech incubator in NYC where I am working on an Ethereum BlockChain project.                                  </p>
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
                                    <Button size='huge'>GitHub</Button>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Segment>
                </Element>
            </div>
        )
    }
}




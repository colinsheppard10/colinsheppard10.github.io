import React, { Component } from 'react'
import { Segment, Grid, Header, Button, Image, Icon } from 'semantic-ui-react'
import { Element } from 'react-scroll';


export default class AboutSeg extends Component {
    render() {
        return (
            <div>
                <br />
                <Element name="about">
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
                                        I live in NYC where I work for a <a href='https://www.realblocks.com' target="_blank">fintech company</a> in the real estate space.                                  </p>
                                </Grid.Column>
                                <Grid.Column floated='right' width={6}>
                                    <Image
                                        bordered
                                        rounded
                                        size='medium'
                                        src='../../images/headShot.jpg'
                                    />
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column textAlign='center'>
                                    <Button href='https://github.com/colinsheppard10' target="_blank" size='huge'> GitHub</Button>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Segment>
                </Element>
            </div>
        )
    }
}




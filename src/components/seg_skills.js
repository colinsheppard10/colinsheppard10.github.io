import React, { Component } from 'react'
import { Segment, Container, Header, Button, Divider } from 'semantic-ui-react'
import { Element } from 'react-scroll';


export default class SkillsSeg extends Component {
    render() {
        return (
            <Element name="skills" >
                <Segment style={{ padding: '2em 0em' }} vertical>
                    <Container text>
                        <Divider
                            as='h4'
                            className='header'
                            horizontal
                            style={{ margin: '3em 0em', textTransform: 'uppercase' }}
                        >
                            <a>Skills</a>
                        </Divider>
                        <p className="colcolor" style={{ fontSize: '1.33em' }}>
                            In my time at Aeris, I worked with Kafka, Rabbit MQ, and Java RESTful web services for passing messages between services. I also gained experience using Cassandra, Redis, and SQL databases. These services were primarily written in Java and JavaScript, so I have experience in surrounding technologies like: Node JS, Maven, and the Spring framework. <br />My front-end skills are primarily  in React/Redux along with some limited experience in AngularJS.
                            <br />For BlockChain development, I use Truffle to deploy contracts and web3 for front-end integration. I made use of OpenZepplin’s open source library allowing my crowdsale to mint ERC20 tokens.
                        </p>
                        <Button as='a' size='large'>Read More</Button>
                        <Element name="personal" >

                            <Divider
                                as='h4'
                                className='header'
                                horizontal
                                style={{ margin: '3em 0em', textTransform: 'uppercase' }}
                            >
                                <a>Personal</a>
                            </Divider>

                            <Header className="colcolor" as='h3' style={{ fontSize: '1.33em' }}>Born and raised in Beverly on the south side of Chicago</Header>
                            <p className="colcolor" style={{ fontSize: '1.33em' }}>
                                I might spend time other places, but Chicago is my home. If you still want to know more about me, here's my <a href='https://www.facebook.com/colin.sheppard.75'>facebook</a> and the <a href='https://open.spotify.com/user/sheppar8'>music</a> I like - playlists prepended w/ "COL" are the good ones (sorry Maddie).
                            </p>
                            <Button as='a' size='large'>I'm Still Quite Interested</Button>
                        </Element>

                    </Container>
                </Segment>
            </Element>

        )
    }
}



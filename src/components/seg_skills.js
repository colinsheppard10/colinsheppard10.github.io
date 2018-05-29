import React, { Component } from 'react'
import { Segment, Container, Header, Button, Divider } from 'semantic-ui-react'
import { Element } from 'react-scroll';
import AnimateHeight from 'react-animate-height';

export default class SkillsSeg extends Component {
    constructor(props) {
        super(props);

        this.state = {
            buttonVisible: true,
            height: 0
        };
    }

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
                            In my time at Aeris I primarily worked on Java and JavaScript backend services. Through this work, I gained experience in surrounding technologies like: Node JS, Maven, and the Spring framework. I also used Kafka, Java RESTful web services, and  Rabbit MQ for passing messages between services. My database experience is in Cassandra, Redis, and SQL.<br />My front-end skills are primarily in React/Redux along with some limited experience in AngularJS.
                            <br />In my current BlockChain development, I use Truffle to deploy contracts and web3 for front-end integration. I make use of OpenZepplin’s open source library allowing my crowdsale to mint ERC20 tokens.
                        </p>
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
                                I might spend time other places, but Chicago is my home. I grew up playing football and rugby and I function best within a small team. Although I hold strong opinions, I believe "If the whole is to be Art, the parts must not try to be".
                            </p>
                            {this.state.buttonVisible && <Button onClick={() => {
                                this.setState({
                                    buttonVisible: false,
                                    height: 'auto'
                                });
                            }} as='a' size='large'>
                                I'm Still Interested
                            </Button>}
                            <AnimateHeight
                                duration={800}
                                height={this.state.height}
                            >
                                <p className="colcolor" style={{ fontSize: '1.33em' }}>
                                    If you still want to know more about me, here's my <a href='https://www.facebook.com/colin.sheppard.75' target="_blank">facebook</a> and the <a href='https://open.spotify.com/user/sheppar8' target="_blank">music</a> I like - playlists prepended w/ "COL" are the good ones (sorry Maddie).
                                </p>
                            </AnimateHeight>
                        </Element>
                    </Container>
                </Segment>
            </Element>

        )
    }
}



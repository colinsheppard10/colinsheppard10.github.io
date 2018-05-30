import ModelBasicExample from './modelBasicExample';

import React, { Component } from 'react'
import { Segment, Grid, Header, Image, Reveal } from 'semantic-ui-react'
import { Element } from 'react-scroll';


export default class ProjectsSeg extends Component {
    render() {
        return (
            <Element name="projects">
                <Segment style={{ padding: '0em' }} vertical>
                    <Grid celled='internally' columns='equal' stackable>
                        <Grid.Row textAlign='center'>
                            <ModelBasicExample values="Info: info_bot" heading="Info Bot"
                                paragraph="Info_bot understands human language and can answer questions with the help of Google and Twitter API's. I use a microService architecture to respond to question from a Slack user. The Main Bot service listens for new services to join. This means, the Twitter microService (or any other service) can crash and then reregister itself with the main service without effecting any other microSerivce. Here is an example question flow: (1) The user's input is sent from Slack to the main bot service. (2) WitAI translates the user's text into an a format that our service can understand. (3) Based on the response from WitAI, the main service can determine which microService can answer the user's question."
                                image='../../images/slackBot.png'
                                firstImage='../../images/nodeJs.png'
                                firstDescription='Ask a slack bot "what is going on in the world"'
                                gitHubLink='https://github.com/colinsheppard10/slackBot' />
                            <ModelBasicExample values="Info: Ethereum Crowdfunding With ERC20 Tokens" heading="X-Fit Coin"
                                paragraph="The X-Fit Coin is a crowdfunding platform for CrossFit gyms. The solidity crowdsale smart contract is based on OpenZepplin's open source library. The X-Fit tokens are ERC20 tokens. I used truffle to deploy my smart contracts, and Web3 for front end intergation."
                                image='../../images/xFitCoin.png'
                                firstImage='../../images/ethereum.png'
                                firstDescription='An ERC20 token crowdfunding platform for Cross-Fit gyms'
                                gitHubLink='https://github.com/GenusDev/crossfit-coin-backend' />
                        </Grid.Row>
                        <Grid.Row textAlign='center'>
                            <ModelBasicExample values="Info: Shine and Rise" heading="Shine and Rise"
                                paragraph="Shine and Rise is An Android app that gives users control over their home lighting. A user can toggle their light on/off from the Android application. The user may also set wake up alarms and have their lights turn on at a predetermined time. The light-alarm schedule is pushed up to a MySQL database from the Android application. The smart-lights use an ESP8266 wifi module to connect to the MySQL database."
                                image='../../images/shineAndRise.png'
                                firstImage='../../images/android.png'
                                firstDescription='A networked light switch, giving a user control over their home lighting with an Android app'
                                gitHubLink='https://github.com/colinsheppard10/ShineAndRise' />
                            <ModelBasicExample values="Info: Odds and Ends" heading="Odds and Ends"
                                paragraph="This repo is a collection of networking project odds and ends. The only stand alone project is DirectMessage which is a TCP messaging app. DirectMessage allows two people within the same subnet to easily connect their phones and pass messages between eachother."
                                image='../../images/directMessage.png'
                                firstImage='../../images/java.png'
                                firstDescription='A few more side projects'
                                gitHubLink='https://github.com/colinsheppard10/Networking' />
                        </Grid.Row>
                    </Grid>
                </Segment>
            </Element>
        )
    }
}









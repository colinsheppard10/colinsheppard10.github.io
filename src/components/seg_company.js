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
                            <ModelBasicExample values="Info: colin_bot" heading="Slack Bot MicroService Architecture"
                                paragraph="The slackBot usees a microService architecture to respond to question from a Slack user. The Main Bot service listens for new services to join. This means, the Twitter microService (or any other service) can crash and then reregister itself with the main service without effecting any other microSerivce."
                                image='../../images/slackBot.png' />
                            <ModelBasicExample values="Info: xFit coin" heading="Ethereum Crowdfunding With ERC20 Tokens" paragraph="The X-Fit Coin is a crowdfunding platform for CrossFit gyms. The solidity crowdsale smart contract is based on OpenZepplin's open source library. The X-Fit tokens are ERC20 tokens. I used truffle to deploy my smart contracts, and web3 for front end intergation."
                                image='../../images/xFitCoin.png' />
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









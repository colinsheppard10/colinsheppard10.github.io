import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react'
import ScreenCoverModel from './modelBasicExample';
import { Link, Element } from 'react-scroll';
import CareersSeg from './seg_careers';
import CompanySeg from './seg_company';
import WorkSeg from './seg_work';
import { connect } from 'react-redux';
import { activeItemAction } from '../actions/index';



/* eslint-disable react/no-multi-comp */
/* Heads up! HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled components for
 * such things.
 */
const HomepageHeading = ({ mobile }) => (
  <Container text>
    <Header
      as='h1'
      content='Colin Sheppard'
      inverted
      style={{
        fontSize: mobile ? '2em' : '4em',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop: mobile ? '1.5em' : '3em',
      }}
    />
    <Header
      as='h2'
      content='Software Engineer'
      inverted
      style={{
        fontSize: mobile ? '1.5em' : '1.7em',
        fontWeight: 'normal',
        marginTop: mobile ? '0.5em' : '1.5em',
      }}
    />

  </Container>
)

HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
}

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
class DesktopContainer extends Component {
  state = { activeItem: 'home' } // remove this and only have is as global activeItem

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })
  handleItemClick = (e, { name }) => this.setState({ activeItem: name }) // change this to call active item action

  render() {
    const { children } = this.props
    const { fixed } = this.state
    const { activeItem } = this.state // remove this

    return (
      <Responsive {...Responsive.onlyComputer}>
        <Visibility once={false} onBottomPassed={this.showFixedMenu} onBottomPassedReverse={this.hideFixedMenu}>
          <Segment className="colheading" inverted textAlign='center' style={{ minHeight: 700, padding: '1em 0em' }} vertical>

            <Element name="home" />
            <Menu
              fixed={fixed ? 'top' : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size='large'
              className="colborder"
            >
              <Container>
                <Link to="home" spy={true} smooth={true} duration={500}>
                  <Menu.Item className="coltext" name='home' as='a' active={activeItem === 'home'} onClick={this.handleItemClick} >Home</Menu.Item>
                </Link>

                <Link to="work" spy={true} smooth={true} duration={500}>
                  <Menu.Item className="coltext" className="coltext" name='work' as='a' active={activeItem === 'work'} onClick={this.handleItemClick}>Work</Menu.Item>
                </Link>

                <Link to="company" spy={true} smooth={true} duration={500}>
                  <Menu.Item className="coltext" className="coltext" name='company' as='a' active={activeItem === 'company'} onClick={this.handleItemClick}>Company</Menu.Item>
                </Link>

                <Link to="careers" spy={true} smooth={true} duration={500}>
                  <Menu.Item className="coltext" name='careers' as='a' active={activeItem === 'careers'} onClick={this.handleItemClick}>Careers</Menu.Item>
                </Link>

              </Container>
            </Menu>
            <HomepageHeading />
          </Segment>
        </Visibility>
        {children}
      </Responsive>
    )
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
}

class MobileContainer extends Component {
  state = {}

  handlePusherClick = () => {
    const { sidebarOpened } = this.state

    if (sidebarOpened) this.setState({ sidebarOpened: false })
  }

  handleToggle = () => this.setState({ sidebarOpened: !this.state.sidebarOpened })

  render() {
    const { children } = this.props
    const { sidebarOpened } = this.state

    return (
      <Responsive {...Responsive.onlyMobile}>
        <Sidebar.Pushable>
          <Sidebar as={Menu} animation='uncover' inverted vertical visible={sidebarOpened}>
            <Menu.Item as='a' active>Home</Menu.Item>
            <Menu.Item as='a'>Colin2 Work</Menu.Item>
            <Menu.Item as='a'>Company</Menu.Item>
            <Menu.Item as='a'>Careers</Menu.Item>
            <Menu.Item as='a'>Log in</Menu.Item>
            <Menu.Item as='a'>Sign Up</Menu.Item>
          </Sidebar>

          <Sidebar.Pusher dimmed={sidebarOpened} onClick={this.handlePusherClick} style={{ minHeight: '100vh' }}>
            <Segment inverted textAlign='center' style={{ minHeight: 350, padding: '1em 0em' }} vertical>
              <Container>
                <Menu inverted pointing secondary size='large'>
                  <Menu.Item onClick={this.handleToggle}>
                    <Icon name='sidebar' />
                  </Menu.Item>
                  <Menu.Item position='right'>
                    <Button as='a' inverted>Log in</Button>
                    <Button as='a' inverted style={{ marginLeft: '0.5em' }}>Sign Up</Button>
                  </Menu.Item>
                </Menu>
              </Container>
              <HomepageHeading mobile />
            </Segment>

            {children}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Responsive>
    )
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node,
}

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
)

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}

class HomepageLayout extends Component {
  render() {
    return (
      <ResponsiveContainer>
        <WorkSeg />
        <Segment>
          <CompanySeg />
        </Segment>
        <CareersSeg />
        <Segment inverted vertical style={{ padding: '5em 0em' }}>
          <Container>
            <Grid divided inverted stackable>
              <Grid.Row>
                <Grid.Column width={3}>
                  <Header inverted as='h4' content='Contact' />
                  <List link inverted>
                    <List.Item as='a'>colinsheppard10@gmail.com</List.Item>
                    <List.Item as='a'>LinkedIn</List.Item>
                    <List.Item as='a'>GitHub</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column width={7}>
                  <Header as='h4' inverted>I can make you a site like this</Header>
                  <p> -If you're working on something cool I'll probably do it for free.</p>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </Segment>
      </ResponsiveContainer>
    )
  }
}

function mapStateToProps(state) {
  return { activeItem: state.activeItem }
}

export default connect(mapStateToProps, { activeItemAction })(HomepageLayout);
import React from 'react';
import axios from 'axios';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import { Link, Redirect } from 'react-router-dom';
import SectionHeader from './partials/SectionHeader';
import Input from '../elements/Input';
import Button from '../elements/Button';
import { EMAIL_REGEX, BASE_AWS_URL } from '../../utils/Constants'

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

class SignupForm extends React.Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    loading: false,
    redirect: false,
  }

  submitUser = async (e) => {
    e.preventDefault();
    const {firstName, lastName, email} = this.state
    const valid = EMAIL_REGEX.test(String(email).toLocaleLowerCase())
    if(valid) {
      this.setState({loading: true})
      const res = await axios.post(`${BASE_AWS_URL}/api/user`, { "user": {email, firstName, lastName }})
      console.log(res)
      this.setState({loading: false, redirect: true})      
    }
  }

  render() {

    const {
      className,
      topOuterDivider,
      bottomOuterDivider,      
      topDivider,
      bottomDivider,
      hasBgColor,
      invertColor,
      ...props
    } = this.props;

    const outerClasses = classNames(
      'signin section',
      topOuterDivider && 'has-top-divider',
      bottomOuterDivider && 'has-bottom-divider',
      hasBgColor && 'has-bg-color',
      invertColor && 'invert-color',
      className
    );

    const innerClasses = classNames(
      'signin-inner section-inner',
      topDivider && 'has-top-divider',
      bottomDivider && 'has-bottom-divider'
    );

    const sectionHeader = {
      title: 'Hear about new products and updates with our newsletter.',
    };
    
    if(this.state.redirect)
      return <Redirect push to="/" />;

    return (
      <section
        {...props}
        className={outerClasses}
      >
        <div className="container">
          <div className={innerClasses}>
            <SectionHeader tag="h1" data={sectionHeader} className="center-content" />
            <div className="tiles-wrap">
              <div className="tiles-item">
                <div className="tiles-item-inner">
                  <form>
                    <fieldset>
                      <div className="mb-12">
                        <Input
                          label="First name"
                          placeholder="First name" 
                          labelHidden
                          onChange={e => this.setState({ firstName: e.target.value })}
                          required />
                      </div>
                      <div className="mb-12">
                        <Input
                          label="Last name"
                          placeholder="Last name" 
                          labelHidden
                          onChange={e => this.setState({ lastName: e.target.value })}
                          required />
                      </div>
                      <div className="mb-12">
                        <Input
                          type="email"
                          label="Email"
                          placeholder="Email"
                          labelHidden
                          onChange={e => this.setState({ email: e.target.value })}
                          required />
                      </div>
                      <div className="mt-24 mb-32">
                      <Button 
                        color="primary" 
                        wide
                        loading={this.state.loading}
                        onClick={this.submitUser}
                        >Sign up
                      </Button>
                      </div>
                    </fieldset>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

SignupForm.propTypes = propTypes;
SignupForm.defaultProps = defaultProps;

export default SignupForm;
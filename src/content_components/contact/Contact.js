import React, {Component} from 'react';
import PageTitle from "../shared/PageTitle";
import DelayWrapper from "../shared/DelayWrapper";
import AnimatedWrapper from '../shared/AnimatedWrapper';
import { CSSTransitionGroup } from 'react-transition-group';
import validator from 'validator';
import axios from 'axios';
import '../Others.css';
import './Contact.css';


class ContactComponent extends Component {

    constructor(props) {
        super(props);
        this.timeout = null;
        this.responseMessage = '';
        this.responseStatus = 0;
        this.errorForm = false;
            this.state = {
            errorEmail: '', errorPName: '', errorCName: '', isWaiting: false, isAlertVisible: false, formContent: {
                personName: '',
                companyName: '',
                activities: '',
                phoneSkype: '',
                email: '',
                message: ''
            }
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.showAlert = this.showAlert.bind(this);
        this.closeAlert = this.closeAlert.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        let inputs = this.state.formContent;
        inputs[name] = value;
        this.setState({formContent: inputs});
    }

    handleSubmit(e) {
        this.errorForm = false;
        e.preventDefault();
        const isEmail = validator.isEmail(this.state.formContent.email);

        if (validator.isEmpty(this.state.formContent.email)) {
            this.setState({errorEmail: '* Email is required'});
            this.errorForm = true;
        } else if (!isEmail) {
            this.setState({errorEmail: '* Email is not valid'});
            this.errorForm = true;
        } else {
            this.setState({errorEmail: ''});
        }
        if (validator.isEmpty(this.state.formContent.personName)) {
            this.setState({errorPName: '* Person name is required'});
            this.errorForm = true;
        } else {
            this.setState({errorPName: ''});
        }
        if (validator.isEmpty(this.state.formContent.companyName)) {
            this.setState({errorCName: '* Company name is required'});
            this.errorForm = true;
        } else {
            this.setState({errorCName: ''});
        }

        if (!this.errorForm) {
            this.setState({isWaiting: true});
            let that = this;
            axios.post('http://104.131.15.180:8823/send-email', {
                ...that.state.formContent
            })
                .then(function (response) {
                    that.setState({isWaiting: false});
                    if (response.data.code === 200) {
                        that.setState({formContent: {
                            personName: '',
                            companyName: '',
                            activities: '',
                            phoneSkype: '',
                            email: '',
                            message: ''
                        }})
                    }
                    that.showAlert(response.data.message, response.data.code);
                })
                .catch(function (error) {
                    if (!error.status) {
                        error.data = "Error! Connection with server failed!";
                        error.status = 500;
                    }
                    that.setState({isWaiting: false});
                    that.showAlert(error.data, error.status);
                });
        }
    }

    showAlert (message, status) {
        this.responseMessage = message;
        this.responseStatus = status;
        this.setState({isAlertVisible: true});
        this.timeout = setTimeout(() => this.closeAlert(), 5000)
    }

    closeAlert() {
        clearTimeout(this.timeout);
        this.setState({isAlertVisible: false});
    }

    componentWillUnmount() {
        clearTimeout(this.timeout);
    }

    render() {
        return (
            <div className="main-content other-components-content">
                <ShadePage {...this.state}/>
                <div
                    className="contact-container components-container d-flex flex-column align-items-center justify-content-start">

                    <AlertWrapper message={this.responseMessage} status={this.responseStatus} {...this.state}/>

                    <div className={`anim-in-text-top ${this.props.animout ? 'anim-out-text-top' : ''}`}><PageTitle
                        text="Contact Us"/></div>
                    <form onSubmit={this.handleSubmit}
                          className="contact-form d-flex flex-nowrap flex-column justify-content-start">
                        <div
                            className={`anim-in-items-fade d-flex flex-nowrap flex-column justify-content-start ${this.props.animout ? 'anim-out-items-fade' : ''}`}>
                            <div className="contact-form-row">
                                <div className="input-wrapper">
                                    <input type="text" name="personName" value={this.state.formContent.personName}
                                           onChange={this.handleInputChange}
                                           className="form-control form-control-input align-self-start"
                                           placeholder="Your Name, Surname"/>
                                    <p
                                        className={(this.state.errorPName.length > 0) ? '' : 'collapse'}>{this.state.errorPName}</p>
                                </div>
                            </div>
                            <div className=" contact-form-row">
                                <div className="input-wrapper">
                                    <input type="text" name="companyName" value={this.state.formContent.companyName}
                                           onChange={this.handleInputChange} className="form-control form-control-input"
                                           placeholder="Company Name"/>
                                    <p
                                        className={(this.state.errorCName.length > 0) ? '' : 'collapse'}>{this.state.errorCName}</p>

                                </div>
                                <div className="input-wrapper">
                                    <input type="text" name="activities" value={this.state.formContent.activities}
                                           onChange={this.handleInputChange} className="form-control form-control-input"
                                           placeholder="Activities of the organization"/>
                                </div>
                            </div>
                            <div className=" contact-form-row">
                                <div className="input-wrapper">
                                    <input type="text" name="phoneSkype" value={this.state.formContent.phoneSkype}
                                           onChange={this.handleInputChange} className="form-control form-control-input"
                                           placeholder="Phone/Skype"/>
                                </div>
                                <div className="input-wrapper">
                                    <input type="text" name="email" value={this.state.formContent.email}
                                           onChange={this.handleInputChange} className="form-control form-control-input"
                                           placeholder="Email address"/>
                                    <p
                                        className={(this.state.errorEmail.length > 0) ? '' : 'collapse'}>{this.state.errorEmail}</p>
                                </div>
                            </div>
                            <div className=" contact-form-row">
                                    <textarea name="message" value={this.state.formContent.message}
                                          onChange={this.handleInputChange} className="form-control" rows="10"
                                          placeholder="Your message"></textarea>
                            </div>
                        </div>
                        <div
                            className={`anim-in-text-bottom contact-form-row ${this.props.animout ? 'anim-out-text-bottom' : ''}`}>
                            <div className="d-flex flex-column flex-nowrap justify-content-end">
                                <button type="submit" className="btn btn-danger align-self-end contact-submit-button">
                                    Send us a message
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

const Contact = DelayWrapper(AnimatedWrapper(ContactComponent));
export default Contact;

const AlertWrapper = (state) => (
    <CSSTransitionGroup
        transitionName="alert"
        transitionEnter={true}
        transitionLeave={true}
        transitionEnterTimeout={600}
        transitionLeaveTimeout={600}>

        {state.isAlertVisible ? <AlertItem {...state} key="alert"/> : ''}


    </CSSTransitionGroup>
)

const AlertItem = (state) => {
        return (
            <div
                className={`mt-2 alert ${state.status === 200 ? 'alert-success' : 'alert-danger'} alert-dismissible `}
                role="alert">
                <button onClick={state.closeAlert} type="button" className="close"><span
                >&times;</span></button>
                {state.message}
                <div className="progress progress-bar-styles">
                    <div className={`progress-bar anim-progress  ${state.status === 200 ? 'success' : 'danger'}`}
                         role="progressbar"></div>
                </div>
            </div>
        )
};

const ShadePage = state => (
    <CSSTransitionGroup
        transitionName="fade"
        transitionEnter={true}
        transitionLeave={true}
        transitionEnterTimeout={300}
        transitionLeaveTimeout={300}>
        {state.isWaiting ? <Fader  key="fader"/> : ''}
    </CSSTransitionGroup>
);

const Fader = () => (
    <div className="contact-fader">
        <div className="preloader">
            <img src={require('../../images/477.gif')} alt=""/>
        </div>
    </div>
);


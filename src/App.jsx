import React from 'react';
import PropTypes from 'prop-types';

import injectSheet from 'react-jss';
import ReactRevealText from 'react-reveal-text';

import style from './style';

class Main extends React.Component {

    state = {
        isTextShown: false
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                isTextShown: true
            });
        }, 1000);
    }

    render() {
        const {
            classes
        } = this.props;

        const {
            isTextShown
        } = this.state;

        const msg = window.location.pathname.slice(1);

        return (
            <div className={classes.wrapper}>
                <ReactRevealText className={classes.text} text={msg || 'Mensagem vazia'} show={isTextShown} />
            </div>
        );
    }
}

Main.propTypes = {
    classes: PropTypes.object.isRequired
};

export default injectSheet(style)(Main);

import React, {Component} from 'react';
import PropTypes from "prop-types";

class Button extends Component {
    render() {
        return (
            <div className={"modal-button"} onClick={this.props.clicked}>
                {this.props.text}
            </div>
        );
    }
}
Button.propTypes = {
    text: PropTypes.string,
    clicked: PropTypes.func
};

export default Button;

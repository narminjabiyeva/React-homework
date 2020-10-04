import React, {Component} from 'react';
import './ModalWindow.scss'
import PropTypes from 'prop-types';
class ModalWindow extends Component {
    prevent =(e)=>{
        e.stopPropagation();
    };
    render() {
        return (
            <>
                <div className="modal" onClick={this.props.closed}>

                    <div className={"modal-window"} onClick={this.prevent}>
                        <div  className={"modal-header"}>
                            <p>{this.props.headertext}</p>
                            <div onClick={this.props.closed} className="modal-close">X</div>
                        </div>
                        <p className={"modal-text"}>{this.props.windowtext}</p>
                        <div className={"modal-buttons"}>
                            {
                                this.props.action
                            }
                        </div>

                    </div>
                </div>

            </>
        );
    }
}

ModalWindow.propTypes = {
    closed: PropTypes.func,
    headertext: PropTypes.string,
    windowtext: PropTypes.string,
    action: PropTypes.arrayOf(PropTypes.element)
};

export default ModalWindow;
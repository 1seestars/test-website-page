import React from 'react';
import {connect} from "react-redux";
import {closeModalWindow} from '../store/actions'

const ModalWindow = props => (
    <div style={{ display: props.isModalWindowOpen ? "block" : "none" }}>
        <div>
            <span>Month</span>
            <input value={props.month} />
        </div>
        <div>
            <span>Day</span>
            <input value={props.day} />
        </div>
        <button onClick={props.closeModalWindow}>X</button>
    </div>
)

const mapStateToProps = state => {
    return {
        month: state.month,
        day: state.day,
        isModalWindowOpen: state.isModalWindowOpen
    }
}

const mapDispatchToProps = {
    closeModalWindow
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalWindow)

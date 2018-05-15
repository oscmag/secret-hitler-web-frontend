import React from 'react';
import { connect } from 'react-redux';

import { toggleModal } from '../redux/actions';
import './Modal.css';

class Modal extends React.Component {

  componentWillMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  handleClickOutside = (event) => {
    if (this.node && !this.node.contains(event.target))
      this.props.toggleModal();
  }

  render() {
    const {modals, name, button, toggleModal, children} = this.props;
    if (!modals[name]) return null;
    return (
      <div ref={node => this.node = node} className="modal">
        {button === 'close' && <button className='close-button' onClick={toggleModal}>&#10005;</button>}
        {children}
        {button === 'okay' && <button className='okay-button' onClick={toggleModal}>Okay</button>}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    modals: state.app.modals,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  toggleModal: () => dispatch(toggleModal(ownProps.name)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
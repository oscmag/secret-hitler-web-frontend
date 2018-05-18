import React from 'react';
import { connect } from 'react-redux';

import { toggleModal } from '../redux/actions';
import './Modal.css';

class Modal extends React.Component {

  componentWillMount() {
    this.props.closeOnClickOutside
      && document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  handleClickOutside = (event) => {
    if (this.node && !this.node.contains(event.target))
      this.props.toggleModal();
  }

  render() {
    const {modals, name, closebutton, toggleModal, children} = this.props;
    if (!modals[name]) return null;
    return (
      <div ref={node => this.node = node} className="modal">
        {closebutton &&
          <button className='close-button' onClick={toggleModal}>
            &#10005;
          </button>}
        {children}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    modals: state.app.modals,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  toggleModal: () => dispatch(toggleModal(ownProps.name)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
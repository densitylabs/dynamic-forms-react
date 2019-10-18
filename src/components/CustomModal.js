import React from 'react';
import PropTypes from 'prop-types';
import { 
  Modal, 
  ModalHeader, 
  ModalBody,
  ModalFooter, 
  Button } from 'reactstrap';


class CustomModal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Modal isOpen={this.props.show} toggle={this.props.toggle} centered={this.props.centered}>
        <ModalHeader toggle={this.props.toggle}>{this.props.title} </ModalHeader>
        <ModalBody>
          {this.props.body}
        </ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={this.props.toggle}>{this.props.closeButtonText}</Button>
        </ModalFooter>
      </Modal>
    );
  }
}


CustomModal.propTypes = {
  show: PropTypes.bool,
  toggle: PropTypes.func,
  title: PropTypes.string,
  body: PropTypes.string,
  centered: PropTypes.bool,
  closeButtonText: PropTypes.string
};

export default CustomModal;

import React, { Component } from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50",
    transform: "translate(-50%, -50%"
  }
};

export default class PhotoCritique extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false
    };

    this.openMadal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  openModal() {
    this.setState({ modalIsOpen: true });
  }
  afterOpenModal() {
    this.subtitle.style.color = "#000000";
  }
  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  render() {
    return (
      <div>
        <button className="close-modal" onClick={this.openMadal}></button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h2 ref={subtitle => (this.subtitle = subtitle)}>
            WWW.Sean's Photo Critique
          </h2>
          <div>WWW.Kate Beckinsale's Photo PhotoCritique</div>
          <button onClick={this.closeModal}>Thanks for joining</button>
        </Modal>
      </div>
    );
  }
}

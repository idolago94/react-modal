import React, { Component } from 'react';
import './App.css';
import { Modal, openModal, closeModal } from './components/Modal';
import Gallery from './components/Gallery';

const images = [
  'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  'https://www.wonderplugin.com/videos/demo-image0.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4tpFYE_0UBWqPwXbhfIzVEewCGaLSzw_M4f_DKLZ1yS4vqzN-',
  'https://static.addtoany.com/images/dracaena-cinnabari.jpg',
  'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  'https://www.wonderplugin.com/videos/demo-image0.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4tpFYE_0UBWqPwXbhfIzVEewCGaLSzw_M4f_DKLZ1yS4vqzN-',
  'https://static.addtoany.com/images/dracaena-cinnabari.jpg',
  'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  'https://www.wonderplugin.com/videos/demo-image0.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4tpFYE_0UBWqPwXbhfIzVEewCGaLSzw_M4f_DKLZ1yS4vqzN-',
  'https://static.addtoany.com/images/dracaena-cinnabari.jpg',
  'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  'https://www.wonderplugin.com/videos/demo-image0.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4tpFYE_0UBWqPwXbhfIzVEewCGaLSzw_M4f_DKLZ1yS4vqzN-',
  'https://static.addtoany.com/images/dracaena-cinnabari.jpg'
]


class App extends Component {

  confirm() {
    console.log('confirm', document.querySelector("input[name='text']").value);
  }

  // modalWithGallery() {
  //   let gallery = new Modal
  //   document.getElementById('modal-body').innerHTML = gallery;
  //   openModal();
  // }

  render() {
    return (
      <div className="App">

        <Modal id='myModal'
          // hideCloseButton
        >
          {/* modal body */}
          <h1>My Custom Modal</h1>
          <input name='text' placeholder='text' />
          <button onClick={this.confirm.bind(this)} >CONFIRM</button>

          <Gallery sources={images} zoomHeight='300' />
        </Modal>

        <button onClick={openModal.bind(this)} >open modal</button>
        <button onClick={closeModal.bind(this)} >close modal</button>
        {/* <button onClick={this.modalWithGallery.bind(this)} >open modal with gallery</button> */}
      </div>
    );
  }
}

export default App;

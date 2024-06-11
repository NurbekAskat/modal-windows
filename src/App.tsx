import './App.css';
import Modal from './components/Modal/Modal';
import {useState} from 'react';

const App = () => {

  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className="btn btn-primary" onClick={() => setShowModal(true)}>Modal window</button>
      <Modal show={showModal} title="Modal" onClose={() => setShowModal(false)}>
        <div className="modal-body">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
        </div>
        <div className="modal-footer">
          <button className="btn btn-danger" onClick={() => setShowModal(false)}>Cancel</button>
        </div>
      </Modal>
    </>
  );
};

export default App;

import { Modal, Button  } from 'react-bootstrap'
import React, { useState , useCallback } from 'react'
import ModalContact from './ModalContact';
export default function ModalBtn({
      light,
      activeElement,
      setactiveElement,
      activeHoverElement,
      setactiveHoverElement,
      ModalTextResulteFunc,
      setalertModal,
      formContactbasName,
      formContactbasType,
      formContactbasLength,
      formContactbasWidth,
      formContactbasDepth,
      formContactbasNullik,
      setFormContactbasName,
      setFormContactbasType,
      setFormContactbasLength,
      setFormContactbasWidth,
      setFormContactbasDepth,
      setFormContactbasNullik,
    }){
    const [show, setShow] = useState(false);
    return (
      <>
      
      <button  onClick={() =>{ setShow(true);ym(52791373,'reachGoal','zakazat-catalog')}} className={'contact-btn '}>
       Заказать
      </button>

      <Modal
      
        show={show}
        onHide={() => setShow(false)}
      >
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
        <ModalContact
          setShow={setShow}
          activeElement={activeElement}
          setactiveElement={setactiveElement}
          activeHoverElement={activeHoverElement}
          setactiveHoverElement={setactiveHoverElement}
          ModalTextResulteFunc={ModalTextResulteFunc}
          setalertModal={setalertModal} 
          formContactbasName={formContactbasName}
          formContactbasType={formContactbasType}
          formContactbasLength={formContactbasLength}
          formContactbasWidth={formContactbasWidth}
          formContactbasDepth={formContactbasDepth}
          formContactbasNullik={formContactbasNullik}
          setFormContactbasName={setFormContactbasName}
          setFormContactbasType={setFormContactbasType}
          setFormContactbasLength={setFormContactbasLength}
          setFormContactbasWidth={setFormContactbasWidth}
          setFormContactbasDepth={setFormContactbasDepth}
          setFormContactbasNullik={setFormContactbasNullik}
        />
        </Modal.Body>
      </Modal>
      </>
    );
  }
  
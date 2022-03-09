import React from 'react';
import ReactModal from 'react-modal';
import { useState } from 'react';

export default function Modal( {show, onClose, children} ){

  return (
    <>
      <div className="modalBackground"> 
        <div className="modalContainer">
          <button onClick={() => onClose(false)}> Close </button>
          <div>{children}</div>
        </div>
      </div>
    </>
  );
}

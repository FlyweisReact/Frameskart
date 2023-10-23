/** @format */

import React from "react";

export function LoginModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <h5>Login / Sign Up</h5>
        <p className="desc">
          We do not share your personal details with anyone.
        </p>
        <form>
            <input type='text' />
        </form>
      </Modal.Body>
    </Modal>
  );
}

import React from "react";

function Modal({ name, description, id }) {
  return (
    <div
      class="modal fade bg-transparent"
      id={id}
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
    >
      <div class="modal-dialog bg-transparent">
        <div class="modal-content">
          <div class="modal-header modalbg rounded-2">
            <h5 class="modal-title bg-transparent text-white">{name}</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body bg-light text-dark rounded-5">
            <label htmlFor="" className="fw-bold bg-light text-dark">
              Description
            </label>
            <br />
            {description.des}
            <br />
            <label htmlFor="" className="fw-bold bg-light text-dark">
              Features
            </label>
            <br />
            {description.features}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;

import React from "react";

export default function ContactModalFail() {
  return (
    <div className="modal contact_modal failed" id="message_fail" tabIndex="-1">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <span className="modal-title"><strong>Warning</strong></span>
            <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close"><i className="fas fa-times"></i></button>
          </div>
          <div className="modal-body">
            <p>Oops! Something went wrong, please try again.</p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  );
}

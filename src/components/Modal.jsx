import { useEffect } from "react";

export default function Modal({ show, onClose, title, children }) {
  useEffect(() => {
    if (show) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
  }, [show]);

  if (!show) return null;

  return (
    <>
      <div className="modal-backdrop fade show"></div>
      <div className="modal d-block" tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{title}</h5>
              <button type="button" className="btn-close" onClick={onClose}></button>
            </div>
            <div className="modal-body">{children}</div>
            <div className="modal-footer">
              <button className="btn btn-primary" onClick={onClose}>Close</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

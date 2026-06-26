import React from 'react';
import Draggable from 'react-draggable';

interface WindowProps {
  id: string;
  title: string;
  width?: string;
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const ModalWindow: React.FC<WindowProps> = ({ id, title, width = "340px", isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <Draggable handle=".c-viewer__address-bar--drag">
      <div className={`c-${id} c-modal in-view is-moving`} style={{ position: 'fixed', zIndex: 999, top: '10%', left: 'calc(50% - 170px)' }}>
        <div className="c-viewer" style={{ width, maxWidth: '95vw' }}>
          <button className="c-viewer__close-button" onClick={onClose}>
            <span className="u-d-none">Close</span>
          </button>
          <div className="c-viewer__address-bar c-viewer__address-bar--drag">
            <div className="o-flexy o-flexy--middle">
              <div className="o-flexy__block"><i></i> <i></i> <i></i> <i></i> <i></i> <i></i></div>
              <div className="o-flexy__item">
                <span className="c-viewer__desc-text">{title}</span>
              </div>
              <div className="o-flexy__block"><i></i> <i></i> <i></i> <i></i> <i></i> <i></i></div>
            </div>
          </div>
          <div className="c-viewer__content" style={{ padding: '12px 14px', maxHeight: '310px', overflowY: 'auto', boxSizing: 'border-box' }}>
            {children}
          </div>
        </div>
      </div>
    </Draggable>
  );
};
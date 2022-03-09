import * as React from 'react';
import './Popup.css';
type Props = {
    handleClose: any;
    show: any;
    children: any;
}
export const Popup:React.FC<Props> = ({ handleClose, show, children }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";

    return (
        <div className={showHideClassName}>
            <section className="modal-main">
                {children}
                <button type="button">
                    Download
                </button>
                <button type="button" onClick={handleClose}>
                    Close
                </button>
            </section>
        </div>
    );
};

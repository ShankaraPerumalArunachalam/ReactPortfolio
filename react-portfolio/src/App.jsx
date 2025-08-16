import React, { useState } from 'react';
import Modal from './components/Modal';
import Terminal from './components/Terminal';
import RecruiterPage from './components/RecruiterPage'; // Import the new component

function App() {
    const [showModal, setShowModal] = useState(true);
    const [view, setView] = useState('terminal'); // Default view

    const handleRecruiterClick = () => {
        setView('recruiter'); // Switch the view to 'recruiter'
        setShowModal(false);
    };

    const handleTerminalClick = () => {
        setView('terminal');
        setShowModal(false);
    };

    return (
        <>
            <Modal isOpen={showModal}>
                <h2>Welcome to my Portfolio</h2>
                <p>Please choose your experience:</p>
                <div className="modal-buttons">
                    <button onClick={handleRecruiterClick}>For Recruiters</button>
                    <button onClick={handleTerminalClick}>Enter Terminal</button>
                </div>
            </Modal>
            
            {/* Conditionally render the component based on the 'view' state */}
            {!showModal && (view === 'terminal' ? <Terminal /> : <RecruiterPage setView={setView} />)}
        </>
    );
}

export default App;
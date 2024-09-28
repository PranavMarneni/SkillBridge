import React, { useState } from 'react';
import './input.css'; // Create a CSS file for styling

const InputForm = () => {
  const [jobLink, setJobLink] = useState('');
  const [alertMessage, setAlertMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (jobLink.trim()) {
      // Logic to handle the job link submission can go here
      setAlertMessage(`Link submitted: ${jobLink}`);
      setJobLink('');
    } else {
      setAlertMessage('Please enter a job link.');
    }
  };

  return (
    <div className="input-form">
      <h2 className="input-title">Add Your Job Links</h2>
      <p className="input-subtitle">Please place the links in the form underneath:</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Job links go here"
          value={jobLink}
          onChange={(e) => setJobLink(e.target.value)}
          className="job-input"
        />
        <p className="alert-message">{alertMessage}</p>
        <div className="button-container">
          <button type="submit" className="submit-button">Keep Submitting More</button>
          <button type="button" className="done-button" onClick={() => alert('Done submitting!')}>Done Submitting</button>
        </div>
      </form>
    </div>
  );
};

export default InputForm;

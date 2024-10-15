import React, { useState } from 'react';
import './CreateProposal.css';

const CreateProposal = () => {
  const [actionCount, setActionCount] = useState(1);

  const addAction = () => {
    setActionCount(actionCount + 1);
  };

  return (
    <div className="create-proposal-container">
      <div className="header">
      <div className="votes-info-dark-theme">
          <img src="https://criptic.vercel.app/_next/static/media/vote-pool.b7007dec.svg" alt="Vote Icon" className="vote-icon-dark-theme" />
          <div>
            <h2>YOU HAVE 100 VOTES</h2>
            <p>You need CRIPTIC tokens to participate in governance.</p>
          </div>
        </div>
        <button className="create-proposal-btn-dark-theme">CREATE PROPOSAL</button>
      </div>

      <div className="actions-section">
        <h3>Actions</h3>
        <p>Enter the on-chain actions this proposal should take. Actions are executed in the order laid out here.</p>
        {[...Array(actionCount)].map((_, index) => (
          <div className="action-box" key={index}>
            <h4>Action #{index + 1}</h4>
            <select className="token-select">
              <option value="criptic">CRIPTIC Token</option>
            </select>
            <select className="action-select">
              <option value="transfer">Transfer</option>
            </select>
            <input type="text" placeholder="Enter dst address" className="dst-address-input" />
            <input type="text" placeholder="Enter rawAmount in unit256" className="raw-amount-input" />
          </div>
        ))}
        <button className="add-action-btn" onClick={addAction}>Add another action</button>
      </div>

      <div className="proposal-details">
        <h3>Title</h3>
        <input type="text" placeholder="Enter title of your proposal" className="title-input" />
        <h3>Description</h3>
        <textarea placeholder="Add the proposal details here" className="description-input"></textarea>
      </div>

      <button className="create-proposal-btn">Create Proposal</button>
    </div>
  );
};

export default CreateProposal;

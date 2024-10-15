import React from 'react';
import './VoteWithCryptic.css';

const VoteWithCryptic = () => {
  return (
    <div className="vote-container-dark-theme">
      <div className="vote-header-dark-theme">
        <div className="votes-info-dark-theme">
          <img src="https://criptic.vercel.app/_next/static/media/vote-pool.b7007dec.svg" alt="Vote Icon" className="vote-icon-dark-theme" />
          <div>
            <h2>YOU HAVE 100 VOTES</h2>
            <p>You need CRIPTIC tokens to participate in governance.</p>
          </div>
        </div>
        <button className="create-proposal-btn-dark-theme">CREATE PROPOSAL</button>
      </div>

      <div className="tab-navigation-dark-theme">
        <span className="active-tab-dark-theme">ACTIVE 4</span>
        <span>OFF-CHAIN</span>
        <span>EXECUTABLE</span>
        <span>PAST 3</span>
      </div>

      <div className="proposal-dark-theme">
        <div className="proposal-header-dark-theme">
          <h3>PTIP 50 - Treasury Assets Management #1</h3>
          <p>Proposal #1</p>
        </div>
        <div className="proposal-vote-dark-theme">
          <button className="vote-now-btn-dark-theme">Vote Now</button>
          <div className="voting-end-dark-theme">
            <p>VOTING ENDS IN</p>
            <div className="countdown-dark-theme">
              <span>01</span> Days <span>23</span> Hours <span>59</span> Minutes <span>52</span> Seconds
            </div>
          </div>
        </div>
      </div>

      <div className="proposal-dark-theme">
        <div className="proposal-header-dark-theme">
          <h3>PTIP 61 - Stake XRP Earn Cake Syrup Pool</h3>
          <p>Proposal #5</p>
        </div>
        <div className="proposal-vote-dark-theme">
          <button className="vote-now-btn-dark-theme">Vote Now</button>
          <div className="voting-end-dark-theme">
            <p>VOTING ENDS IN</p>
            <div className="countdown-dark-theme">
              <span>01</span> Days <span>23</span> Hours <span>59</span> Minutes <span>52</span> Seconds
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VoteWithCryptic;

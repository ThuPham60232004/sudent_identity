import React, { useState } from "react";
import Web3Modal from "web3modal";
import { Web3Provider } from '@ethersproject/providers';
import "./WalletModal.css";

const WalletModal = ({ onClose, onConnect }) => {
    const [provider, setProvider] = useState(null);

    const connectWallet = async () => {
        try {
            const web3Modal = new Web3Modal({
                cacheProvider: false,
                providerOptions: {}
            });
            const instance = await web3Modal.connect();
            const provider = new Web3Provider(instance);
            setProvider(provider);
    
            const accounts = await provider.listAccounts();
            console.log("Connected account:", accounts[0]);
    
            onConnect(accounts[0], provider);  
        } catch (error) {
            console.error("Failed to connect wallet", error);
        }
    };
    
    return (
        <div className="modal-overlay_modal" onClick={onClose}>
            <div className="wallet-login_modal" onClick={(e) => e.stopPropagation()}>
                <div className="close_modal">
                    <h2>Sign in</h2>
                    <button className="close-btn_modal" onClick={onClose}>✕</button>
                </div>
                
                <div className="login-options_modal">
                    <div className="wallet-option_modal" onClick={connectWallet}>
                        <img src='https://forum.zeroqode.com/uploads/default/original/2X/4/401498d7adfbb383fea695394f4f653ea4e7c9a7.png' alt="MetaMask" className="icon_modal" />
                    </div>
                    <div className="wallet-option_modal" onClick={connectWallet}>
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5AsJoB6E5HdBs6ClI0rKXYSkfK_imGv5LbA&s' alt="TrustWallet" className="icon_modal" />
                    </div>
                    <div className="wallet-option_modal" onClick={connectWallet}>
                        <img src='https://chainbroker.io/_next/image/?url=https%3A%2F%2Fstatic.chainbroker.io%2Fmediafiles%2Fprojects%2Fwalletconnect%2Fwalletconnect.jpeg&w=2560&q=75' alt="WalletConnect" className="icon_modal" />
                    </div>
                    <div className="wallet-option_modal" onClick={connectWallet}>
                        <img src='https://static-00.iconduck.com/assets.00/coinbase-icon-2048x2048-oq45l9cy.png' alt="Coinbase" className="icon_modal" />
                    </div>
                    <div className="wallet-option_modal" onClick={connectWallet}>
                        <img src='https://spiritswap.finance/_next/static/media/paraSwap.b94e1099.png' alt="ParaSwap" className="icon_modal" />
                    </div>
                </div>

                <input
                    type="email"
                    placeholder="Email address"
                    className="login-input_modal"
                />
                
                <button className="login-btn_modal">
                    Phone number
                </button>
                <button className="login-btn_modal">
                   Passkey
                </button>
                
                <span className="divider">or</span>

                <button className="connect-wallet-btn_modal" onClick={connectWallet}>
                    Connect a Wallet
                </button>
            </div>
        </div>
    );
};

export default WalletModal;

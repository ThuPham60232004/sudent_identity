
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
            const account = accounts[0];
            
            // Gọi lại hàm onConnect từ Navbar với địa chỉ và provider
            onConnect(account, provider);

        } catch (error) {
            console.error("Failed to connect wallet", error);
        }
    };

    
    
    return (
        <div className="modal-overlay_modal" onClick={onClose}>
            <div className="wallet-login_modal" onClick={(e) => e.stopPropagation()}>
                <div className="close_modal">
                    <button className="close-btn_modal" onClick={onClose}>✕</button>
                </div>
                   <h2>CONNECT YOUR WALLET</h2>
                
                <div className="login-options_modal">
                    <div className="wallet-option_modal_metamask" onClick={connectWallet}>
                        <img src='https://altcoinsbox.com/wp-content/uploads/2023/03/metamask-logo.webp' alt="MetaMask" className="icon_modal" />
                        <p>MetaMask Wallet</p>
                    </div>
                    <div className="wallet-option_modal_trust" onClick={connectWallet}>
                        <img src='https://www.yadawallets.com/wp-content/uploads/2020/10/trust-wallet-logo.png' alt="TrustWallet" className="icon_modal" />
                        <p>Trust Wallet</p>
                    </div> 
                     <div className="wallet-option_modal_walletconnect" onClick={connectWallet}>
                        <img src='https://chainbroker.io/_next/image/?url=https%3A%2F%2Fstatic.chainbroker.io%2Fmediafiles%2Fprojects%2Fwalletconnect%2Fwalletconnect.jpeg&w=2560&q=75' alt="WalletConnect" className="icon_modal" />
                        <p>WalletConnect</p>
                    </div> 
                     <div className="wallet-option_modal_coinbase" onClick={connectWallet}>
                        <img src='https://static-00.iconduck.com/assets.00/coinbase-icon-2048x2048-oq45l9cy.png' alt="Coinbase" className="icon_modal" />
                        <p>Coinbase</p>
                    </div>
                    <div className="wallet-option_modal_paraswap" onClick={connectWallet}>
                        <img src='https://spiritswap.finance/_next/static/media/paraSwap.b94e1099.png' alt="ParaSwap" className="icon_modal" />
                        <p>ParaSwap</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WalletModal;


import React from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';

import './Home.css';

const exampleBTCAddress = [
  '19wJuNeV2Hd4WTxa8vDrvV3StSdMzoyPi9',
  '3EaWcuNXQrW2JTGy5Cotm4pftovW8UfR2o',
  '3H5gRBEowwSqr3ckY2MKwLsn64KdpU2gQg'
];

const Home = () => (
  <div className="Home">
    <h3>Click to Copy BTC Addresses</h3>
    {exampleBTCAddress.map(address => 
      <p className="Home-btc-address">
        <CopyToClipboard text={address}>
          <div>- {address}</div>
        </CopyToClipboard>
      </p>)}
  </div>
);

export default Home;

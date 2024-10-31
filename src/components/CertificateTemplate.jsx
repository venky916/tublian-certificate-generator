import '../App.css';
import React from 'react';
import LOGO from '../assets/tublian-logo.png';
import SIGNATURE from '../assets/signature.png';
import CERTIFIEDLOGO from '../assets/certified-logo.png';
import BACKGROUND_IMAGE from '../assets/background.png';

const CertificateTemplate = ({ name, description, certificateId, date }) => {
  return (
    <div id="certificate" className="certificate-container">

      <div className='background'>
        <img src={BACKGROUND_IMAGE} alt="background" />
      </div>


      {/* Header Section */}
      <div className="header">
        <img src={LOGO} alt="Tublian Logo" className="logo" />
        <h1 className="title">T U B L I A N</h1>
      </div>

      {/* Certificate Title */}
      <div className="certificate-title">
        <h2>CERTIFICATE</h2>
        <span className="sub-title">OF INTERNSHIP</span>
      </div>

      {/* certificate-holderName */}
      <div className='name'>
        <p className="certified-name">{name}</p>
        <div className="underline"></div>
      </div>

      {/* Certificate Body */}
      <div className="certificate-body">
        <p className="description">
          {description}
          {/* successfully completed the 4-Week AI Internship Program at Tublian,
          demonstrating exceptional dedication and a commendable work ethic
          throughout the internship. The contributions made, including the
          development of an advanced chatbot, have added significant value to
          the AI community. */}
        </p>
      </div>

      {/* Signature and Certification ID */}
      <div className="footer">
        <div className="founder">
          <div className="signature">
            <div>
              <img src={SIGNATURE} alt="sign" />
            </div>
            <p className="signature-name">Nilanjan Raychaudhuri</p>
            <p className="signature-title">Founder - Tublian</p>
          </div>
        </div>
        <div className="certify">
          <div className="certification-id">
            <img src={CERTIFIEDLOGO} alt="certify-logo" />
            <div>
              <h6>CERTIFIED</h6>
              <p>
                {certificateId}
                <br />
                {date}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificateTemplate;

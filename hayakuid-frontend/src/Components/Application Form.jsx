import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ApplicationForm = ({ isRenewal }) => {
  const [fullName, setFullName] = useState('');
  const [dob, setDob] = useState('');
  const [documentType, setDocumentType] = useState('');
  const [document, setDocument] = useState(null);
  const [villageLetter, setVillageLetter] = useState(null);
  const [momPassport, setMomPassport] = useState(null);
  const [dadPassport, setDadPassport] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    // Validation based on application type (new or renewal)
    if (isRenewal) {
      // For renewal, the user must upload an expired document (ID or Passport)
      if (
        (documentType === 'ID' && !file.type.startsWith('image/')) ||
        (documentType === 'Passport' && file.type !== 'application/pdf')
      ) {
        setError('Please upload the correct expired document type (ID image or Passport PDF).');
        setDocument(null);
        return;
      }
    } else {
      // For new applications, validate the required documents
      if (documentType === 'ID' && !file) {
        setError('Please upload documents like a birth certificate or proof of residence for ID.');
        setDocument(null);
        return;
      }

      if (documentType === 'Passport' && !file) {
        setError('Please upload documents like a birth certificate, proof of residence for Passport.');
        setDocument(null);
        return;
      }

      // Ensure the Village Chief letter is uploaded for new applicants
      if (!villageLetter) {
        setError('Please upload the Village Chief Letter as proof of residence.');
        return;
      }

      // Ensure mom's passport copy is uploaded
      if (!momPassport) {
        setError('Please upload the mother\'s passport copy.');
        return;
      }

      // Ensure dad's passport copy is uploaded
      if (!dadPassport) {
        setError('Please upload the father\'s passport copy.');
        return;
      }
    }

    setError(''); // Clear any previous errors
    setDocument(file);
  };

  const handleVillageLetterChange = (e) => {
    setVillageLetter(e.target.files[0]);
  };

  const handleMomPassportChange = (e) => {
    setMomPassport(e.target.files[0]);
  };

  const handleDadPassportChange = (e) => {
    setDadPassport(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!fullName || !dob || !document || !documentType || (isRenewal && !document) || (!isRenewal && !villageLetter)) {
      setError('Please fill in all fields and upload your required documents.');
      return;
    }

    // Show loading spinner while form submission is in progress
    setLoading(true);
    setError('');

    // Simulating form submission (replace with actual submission logic, e.g., API or Firebase)
    setTimeout(() => {
      setLoading(false);
      alert('Application submitted successfully!');
      navigate('/application/status'); // Redirect to status page after submission
    }, 2000);
  };

  return (
    <div className="application-form-container">
      <h2>{isRenewal ? 'Renew Application' : 'New Application'}</h2>

      {/* Display error message */}
      {error && <p className="error-message">{error}</p>}

      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Enter your full name"
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="dob">Date of Birth</label>
          <input
            type="date"
            id="dob"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="documentType">Document Type</label>
          <select
            id="documentType"
            value={documentType}
            onChange={(e) => setDocumentType(e.target.value)}
            required
          >
            <option value="">Select Document Type</option>
            <option value="ID">ID</option>
            <option value="Passport">Passport</option>
          </select>
        </div>

        <div className="input-group">
          <label htmlFor="document">Upload Document</label>
          <input
            type="file"
            id="document"
            onChange={handleFileChange}
            required
          />
          {isRenewal && <p>For renewal, please upload your expired ID/Passport.</p>}
          {!isRenewal && <p>For new applications, please upload required documents (e.g., birth certificate, proof of residence).</p>}
        </div>

        {!isRenewal && (
          <div className="input-group">
            <label htmlFor="villageLetter">Upload Village Chief Letter (Proof of Residence)</label>
            <input
              type="file"
              id="villageLetter"
              onChange={handleVillageLetterChange}
              required
            />
            <p>This document is required for new applicants.</p>
          </div>
        )}

        {/* Mom's Passport Upload */}
        {!isRenewal && (
          <div className="input-group">
            <label htmlFor="momPassport">Upload Mother's Passport Copy</label>
            <input
              type="file"
              id="momPassport"
              onChange={handleMomPassportChange}
              required
            />
            <p>This document is required for new applicants.</p>
          </div>
        )}

        {/* Dad's Passport Upload */}
        {!isRenewal && (
          <div className="input-group">
            <label htmlFor="dadPassport">Upload Father's Passport Copy</label>
            <input
              type="file"
              id="dadPassport"
              onChange={handleDadPassportChange}
              required
            />
            <p>This document is required for new applicants.</p>
          </div>
        )}

        <button type="submit" disabled={loading}>
          {loading ? 'Submitting...' : 'Submit Application'}
        </button>
      </form>
    </div>
  );
};

export default ApplicationForm;

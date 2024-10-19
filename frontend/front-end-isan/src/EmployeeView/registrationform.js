import React, { useState } from 'react';
import '../App.css';

function RegistrationForm() {
  const [step, setStep] = useState(1); // To keep track of the current step
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    number: '',
    clientId: '',
    gender: '',
    dob: '',
    pronoun: '',
    address: '',
    city: '',
    postalCode: '',
    maritalStatus: '',
    noOfDependents: '',
    immigrationStatus: '',
    sin: '',
    countryOfBirth: '',
    nationality: '',
    primaryLanguage: '',
    preferredOfficialLanguage: '',
    highestEducation: '',
    fieldOfEducation: '',
    consent: false,
    date: ''
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  // Step 1: Personal Info
  const personalInfo = (
    <div>
      <h2>Personal Info</h2>
      <input type="text" name="firstName" placeholder="First name" value={formData.firstName} onChange={handleChange} required />
      <input type="text" name="lastName" placeholder="Last name" value={formData.lastName} onChange={handleChange} required />
      <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
      <input type="text" name="number" placeholder="Number" value={formData.number} onChange={handleChange} required />
      <input type="text" name="clientId" placeholder="Client ID" value={formData.clientId} onChange={handleChange} />
      <input type="text" name="gender" placeholder="Gender" value={formData.gender} onChange={handleChange} />
      <input type="date" name="dob" placeholder="DOB" value={formData.dob} onChange={handleChange} />
      <input type="text" name="pronoun" placeholder="Pronoun" value={formData.pronoun} onChange={handleChange} />
      <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} />
      <input type="text" name="city" placeholder="City" value={formData.city} onChange={handleChange} />
      <input type="text" name="postalCode" placeholder="Postal Code" value={formData.postalCode} onChange={handleChange} />
      <button onClick={nextStep}>Next</button>
    </div>
  );

  // Step 2: Family Info
  const familyInfo = (
    <div>
      <h2>Family Info</h2>
      <input type="text" name="maritalStatus" placeholder="Marital Status" value={formData.maritalStatus} onChange={handleChange} />
      <input type="number" name="noOfDependents" placeholder="Number of Dependents" value={formData.noOfDependents} onChange={handleChange} />
      <input type="text" name="immigrationStatus" placeholder="Immigration Status" value={formData.immigrationStatus} onChange={handleChange} />
      <input type="text" name="sin" placeholder="SIN" value={formData.sin} onChange={handleChange} />
      <input type="text" name="countryOfBirth" placeholder="Country of Birth" value={formData.countryOfBirth} onChange={handleChange} />
      <input type="text" name="nationality" placeholder="Nationality" value={formData.nationality} onChange={handleChange} />
      <button onClick={prevStep}>Back</button>
      <button onClick={nextStep}>Next</button>
    </div>
  );

  // Step 3: Education
  const education = (
    <div>
      <h2>Education</h2>
      <input type="text" name="primaryLanguage" placeholder="Primary Language" value={formData.primaryLanguage} onChange={handleChange} />
      <input type="text" name="preferredOfficialLanguage" placeholder="Preferred Official Language" value={formData.preferredOfficialLanguage} onChange={handleChange} />
      <select name="highestEducation" value={formData.highestEducation} onChange={handleChange}>
        <option value="">Select Highest Education Level</option>
        <option value="highSchool">High School</option>
        <option value="bachelor">Bachelor's Degree</option>
        <option value="master">Master's Degree</option>
        <option value="phd">PhD</option>
      </select>
      <input type="text" name="fieldOfEducation" placeholder="Field of Education" value={formData.fieldOfEducation} onChange={handleChange} />
      <button onClick={prevStep}>Back</button>
      <button onClick={nextStep}>Next</button>
    </div>
  );

  // Step 4: Consent
  const consent = (
    <div>
      <h2>Consent</h2>
      <p>If you would like to change your consent, please email intake@isans.ca</p>
      <input type="checkbox" name="consent" checked={formData.consent} onChange={() => setFormData({ ...formData, consent: !formData.consent })} />
      <label>I hereby confirm that the information provided by me is current and accurate.</label>
      <input type="date" name="date" placeholder="Today's Date" value={formData.date} onChange={handleChange} />
      <button onClick={prevStep}>Back</button>
      <button type="submit">Submit</button>
    </div>
  );

  // Render the current step based on the 'step' state
  return (
    <div className="form-container">
      {step === 1 && personalInfo}
      {step === 2 && familyInfo}
      {step === 3 && education}
      {step === 4 && consent}
    </div>
  );
}

export default RegistrationForm;

import React, { useState } from 'react';

const initialFormValues = {
  phoneNumber: '',
  password: '',
};

const UpdateUser = (props) => {
  const [updatePhone, setUpdatePhone] = useState(true);
  const [updatePassword, setUpdatePassword] = useState(true);
  const [formValues, setFormValues] = useState(initialFormValues);

  const onChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handlePasswordSubmit = (e) => {};

  const handlePhoneSubmit = (e) => {};

  return (
    <div className='my-40 bg-blue-100 mx-200'>
      <div>
        <h3>Profile Page</h3>
        <p>Use this page to update your phone number and password.</p>
      </div>

      <div>
        <div className='flex justify-between'>
          <p>Password</p>
          {!updatePassword && (
            <input
              onChange={onChange}
              name='password'
              value={formValues.password}
            />
          )}

          <div>
            <button onClick={() => setUpdatePassword(!updatePassword)}>
              {updatePassword ? 'Update' : 'Cancel'}
            </button>
            {!updatePassword && (
              <button onClick={handlePasswordSubmit}>Submit</button>
            )}
          </div>
        </div>

        <div className='flex justify-between'>
          <p>Phone Number</p>
          {!updatePhone && (
            <input
              onChange={onChange}
              name='phoneNumber'
              value={formValues.phoneNumber}
            />
          )}

          <div>
            <button onClick={() => setUpdatePhone(!updatePhone)}>
              {updatePhone ? 'Update' : 'Cancel'}
            </button>
            {!updatePhone && (
              <button onClick={handlePhoneSubmit}>Submit</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateUser;

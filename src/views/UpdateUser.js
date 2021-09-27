import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { updateUser } from '../actions';

const initialFormValues = {
  phoneNumber: '',
  password: '',
};

const UpdateUser = (props) => {
  const [formValues, setFormValues] = useState(initialFormValues);
  const { push } = useHistory();
  const { updateUser } = props;

  const onChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    updateUser(formValues);
    setFormValues(initialFormValues);
    push('/home');
  };

  return (
    <div className='flex min-h-screen bg-white'>
      <div className='flex flex-col justify-center flex-1 px-4 py-12 sm:px-6  lg:px-20 xl:px-24'>
        <div className='w-full max-w-sm mx-auto lg:w-96'>
          <h2 className='my-8 text-4xl font-extrabold text-center text-gray-900'>
            Update Profile
          </h2>

          <form onSubmit={onSubmit} className='space-y-6'>
            <label className='block text-sm font-medium text-gray-700'>
              Phone Number
              <input
                id='phoneNumber'
                name='phoneNumber'
                value={formValues.phoneNumber}
                onChange={onChange}
                required
                className='block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
              />
            </label>

            {/* species */}
            <label className='block text-sm font-medium text-gray-700'>
              Password
              <input
                id='password'
                name='password'
                value={formValues.password}
                onChange={onChange}
                required
                className='block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
              />
            </label>

            <button
              type='submit'
              className='flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
            >
              Update
            </button>
          </form>

          <div className='flex justify-between h-fullitems-center'>
            <Link
              to='/home'
              className='w-full h-full mt-5 font-medium text-center text-indigo-600 border-solid hover:text-indigo-500 border-white-500'
            >
              Cancel
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, { updateUser })(UpdateUser);

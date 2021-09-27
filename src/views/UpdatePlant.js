import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { updatePlant } from '../actions';

const initialFormValues = {
  nickname: '',
  species: '',
  h2oFrequency: '',
};

const UpdatePlant = (props) => {
  const { updatePlant, plants } = props;
  const { push } = useHistory();
  const [formValues, setFormValues] = useState(initialFormValues);
  const plantID = window.location.href.slice(
    'http://localhost:3000/update-plant/'.length
  );
  const plantToBeUpdated = plants.filter((plant) => plant.id === plantID)[0];

  const onSubmit = (e) => {
    e.preventDefault();
    updatePlant(formValues, plantID);
    setFormValues(initialFormValues);
    push('/home');
  };

  const onChange = (e) =>
    setFormValues({ ...formValues, [e.target.name]: e.target.value });

  return (
    <div className='flex min-h-screen bg-white'>
      <div className='flex flex-col justify-center flex-1 px-4 py-12 sm:px-6  lg:px-20 xl:px-24'>
        <div className='w-full max-w-sm mx-auto lg:w-96'>
          <h2 className='my-8 text-4xl font-extrabold text-center text-gray-900'>
            Update Plant: {plantToBeUpdated.nickname}
          </h2>

          <form onSubmit={onSubmit} className='space-y-6'>
            {/* nickname */}
            <label className='block text-sm font-medium text-gray-700'>
              Nickname
              <input
                id='nickname'
                name='nickname'
                value={formValues.nickname}
                onChange={onChange}
                required
                className='block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
              />
            </label>

            {/* species */}
            <label className='block text-sm font-medium text-gray-700'>
              Species
              <input
                id='species'
                name='species'
                value={formValues.species}
                onChange={onChange}
                required
                className='block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
              />
            </label>

            {/* h2o frequency */}
            <label className='block text-sm font-medium text-gray-700'>
              H2O Frequency
              <input
                id='h2oFrequency'
                name='h2oFrequency'
                placeholder='days'
                value={formValues.h2oFrequency}
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
  return {
    plants: state.user.plants,
  };
};

export default connect(mapStateToProps, { updatePlant })(UpdatePlant);

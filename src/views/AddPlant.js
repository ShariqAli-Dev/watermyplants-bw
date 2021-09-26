import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { nanoid } from 'nanoid';
import { useHistory } from 'react-router';
import { connect } from 'react-redux';
import { addPlant } from '../actions';

const initialFormValues = {
  nickname: '',
  species: '',
  h2oFrequency: '',
  currentFreq: '0.75 day(s)',
  image: '',
  id: nanoid(),
};

const AddPlant = (props) => {
  const { addPlant } = props;
  const [formValues, setFormValues] = useState(initialFormValues);
  const { push } = useHistory();
  const onChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addPlant(formValues);
    setFormValues(initialFormValues);
    push('/home');
  };

  return (
    <div className='flex min-h-screen bg-white'>
      <div className='flex flex-col justify-center flex-1 px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24'>
        <div className='w-full max-w-sm mx-auto lg:w-96'>
          <h2 className='my-8 text-4xl font-extrabold text-center text-gray-900'>
            Add A New Plant!
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

            {/* h20 frequency */}
            <label className='block text-sm font-medium text-gray-700'>
              H20 Frequency
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

            {/* image */}
            {/* <label className='block text-sm font-medium text-gray-700'>
              Image (optional)
              <input
                id='image'
                name='image'
                placeholder='image address'
                value={formValues.image}
                onChange={onChange}
                className='block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
              />
            </label> */}

            <button
              type='submit'
              className='flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
            >
              Add Plant
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
      <div className='relative flex-1 hidden w-0 lg:block'>
        {/* 1000x700 image */}
        <img
          className='absolute inset-0 object-cover w-full h-full'
          src='https://images.unsplash.com/photo-1544860707-c352cc5a92e3?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwzODEwMjU1fHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80'
          alt='plant-background'
        />
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, { addPlant })(AddPlant);

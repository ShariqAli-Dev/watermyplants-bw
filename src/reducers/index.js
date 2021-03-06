import {
  ADD_PLANT,
  DELETE_PLANT,
  LOGGED_IN_USER,
  LOGGED_OUT_USER,
  WATER_PLANT,
  UPDATE_PLANT,
  UPDATE_USER,
} from '../actions';

export const initialState = {
  plants: [],
  isLoading: false,
  errorMsg: '',
  user: {
    username: '',
    phoneNumber: '',
    plants: [
      {
        nickname: 'Money Tree',
        id: '123412',
        species: 'Pachira aquatica',
        h2oFrequency: 1.6,
        currentFreq: '0.42 day(s)',
      },
      {
        nickname: 'Rubber Plant',
        id: '456456',
        species: 'Ficus elastica',
        h2oFrequency: 0.45,
        currentFreq: '0.35 day(s)',
      },
      {
        nickname: 'Giant Bird of Paradise',
        id: '565757',
        species: 'Strelitzia nicolai',
        h2oFrequency: 1.58,
        currentFreq: '0.12 day(s)',
      },
      {
        nickname: 'Madagascar Dragon Tree',
        id: '67867',
        species: 'Dracaena marginata',
        h2oFrequency: 1.75,
        currentFreq: '0.78 day(s)',
      },
      {
        nickname: 'Dracaena Corn Plant',
        id: '234234',
        species: 'Dracaena massangeana',
        h2oFrequency: 1.98,
        currentFreq: '0.45 day(s)',
      },
      {
        nickname: 'Bamboo Palm',
        id: '1251',
        species: 'Chamaedorea seifrizii',
        h2oFrequency: 2.25,
        currentFreq: '0.98 day(s)',
      },
    ],
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGGED_IN_USER:
      return { ...state, user: { ...state.user, ...action.payload } };
    case LOGGED_OUT_USER:
      return {
        ...state,
        user: {
          username: '',
          phoneNumber: '',
          plants: [],
        },
      };
    case UPDATE_USER:
      return {
        ...state,
        user: {
          ...state.user,
          ...action.payload,
        },
      };
    case ADD_PLANT:
      return {
        ...state,
        user: {
          ...state.user,
          plants: [...state.user.plants, action.payload],
        },
      };
    case DELETE_PLANT:
      return {
        ...state,
        user: {
          ...state.user,
          plants: state.user.plants.filter(
            (plant) => plant.id !== action.payload
          ),
        },
      };
    case WATER_PLANT:
      return {
        ...state,
        user: {
          ...state.user,
          plants: [
            ...state.user.plants.map((plant) => {
              if (plant.id === action.payload) {
                return {
                  ...plant,
                  currentFreq: `${plant.h2oFrequency} day(s)`,
                };
              }
              return plant;
            }),
          ],
        },
      };
    case UPDATE_PLANT:
      return {
        ...state,
        user: {
          ...state.user,
          plants: state.user.plants.map((plant, index) => {
            if (plant.id === action.payload.id)
              return {
                ...action.payload.plantInfo,
                currentFreq: state.user.plants[index].currentFreq,
              };
            return plant;
          }),
        },
      };
    default:
      return state;
  }
};

export default reducer;

import {filter} from 'domutils';

const initialState = {
  jobs: [],
};

export default function reducers(state = initialState, action) {
  switch (action.type) {
    case 'SET_JOB':
      const filtered = state.jobs.some(item => item.id === action.payload.id);

      if (!filtered) {
        return {...state, jobs: [...state.jobs, action.payload]};
      } else {
        return state;
      }

    case 'REMOVE_JOB':
      const removeFiltered = state.jobs.filter(
        item => item.id !== action.payload.id,
      );
      console.log(removeFiltered);
      return {...state, jobs: removeFiltered};

    default:
      return state;
  }
}

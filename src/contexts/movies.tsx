/* eslint-disable react/react-in-jsx-scope */
import { createContext, Dispatch, useContext, useReducer } from 'react';

export type MovieType = {
  id?: string | number;
  imgUrl: string;
  movieName: string;
};

type movieProps = {
  children: React.ReactNode;
};

type MoviesState = MovieType[];
type MoviesDispatch = Dispatch<Action>;
type Action = { type: 'ADD'; payload: MovieType } | { type: 'REMOVE'; id: number };

const MoviesStateContext = createContext<MoviesState | undefined>(undefined);
const MoviesDispatchContext = createContext<MoviesDispatch | undefined>(undefined);

// * Reducer *
function moviesReducer(state: MoviesState, action: Action): MoviesState {
  switch (action.type) {
    case 'ADD': {
      const isItemExists = state.find(movie => movie.id === action.payload.id);
      if (isItemExists) return state;

      return state.concat({
        id: action.payload.id,
        imgUrl: action.payload.imgUrl,
        movieName: action.payload.movieName,
      });
    }
    case 'REMOVE':
      return state.filter(movie => movie.id !== action.id);
    default:
      throw new Error('Invalid action');
  }
}

export const useMoviesState = () => {
  const state = useContext(MoviesStateContext);
  if (!state) throw new Error('MoviesProvider not found');
  return state;
};

export const useMoviesDispatch = () => {
  const dispatch = useContext(MoviesDispatchContext);
  if (!dispatch) throw new Error('MoviesProvider not found');
  return dispatch;
};

export const MoviesContextProvider: React.FC<movieProps> = ({ children }) => {
  const [movies, dispatch] = useReducer(moviesReducer, []);

  return (
    <MoviesDispatchContext.Provider value={dispatch}>
      <MoviesStateContext.Provider value={movies}>{children}</MoviesStateContext.Provider>
    </MoviesDispatchContext.Provider>
  );
};

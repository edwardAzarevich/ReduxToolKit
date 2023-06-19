import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { RootState } from './store/store';
import { userSlice } from './store/reducers/UserSlice';
import { useDispatch } from 'react-redux';
import { fetchUsers } from './store/reducers/ActionCreators';
import PostContainer from './components/PostContainer';
import PostContainer2 from './components/PostContainer2';

const App = () => {
    // const dispatch = useAppDispatch();
    // const { users, isLoading, error } = useAppSelector(state => state.userReducer);

    // useEffect(() => {
    //     dispatch(fetchUsers())
    // }, [])
    //const { } = useAppSelector((state: RootState) => state.userReducer.)
    return (
        <div className='App'>
            {/* {isLoading && <h1>Идет загрузка</h1>}
            {error && <h1>{error}</h1>}
            {JSON.stringify(users, null, 2)} */}
            <div style={{ display: 'flex' }}></div>
            <PostContainer2 />
            <PostContainer />
        </div>
    );
};

export default App;
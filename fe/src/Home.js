import React, {useEffect, useState} from 'react';
import axios from "axios";
import {getToken} from "./Utils/Common";
import WithListLoading from "./component/withListLoading";
import List from './component/List';

function Home() {
    const ListLoading = WithListLoading(List);
    const [appState, setAppState] = useState({
        loading: false,
        repos: null,
    });

    const password = getToken();
    const [ setError] = useState(null);

    const handleLogout = () => {
        localStorage.removeItem("token");
        window.history.back()
    }

    useEffect(() => {
        setAppState({ loading: true });
        axios.post('http://localhost:8080/api/repository', { password: password }).then(response => {
            setAppState({ loading: false, repos: response.data });
            console.log(response.data)
        }).catch(error => {
            setError(error);
        });
    }, [setAppState]);
  return (
    <div>
        <div className='container'>
            <p>My Repositories</p>
        </div>
        <div className='repo-container'>
            <ListLoading isLoading={appState.loading} repos={appState.repos} />
        </div>
        <button type="submit" onClick={handleLogout} >Logout</button>
    </div>
  );
}

export default Home;

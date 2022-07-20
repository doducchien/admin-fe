import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import Login from './page/auth/Login';
import { loginRequestAction } from './redux/action/authen-action';
import apiService from './service/api-service';

function App() {
  const dispatch = useDispatch();
  const authen = useSelector(state => state.authen.data)
  console.log({authen})

  useEffect(()=>{
    const data = {
      username: 'chiendd226@gmail.com',
      password: '000000'
    }
    apiService().post('/authn/signin', data)
    dispatch(loginRequestAction(data));
  }, [])

  return (
    <div className='w-100vw h-100vh'>
      <Switch>
        <Route path='/auth/login'>
            <Login/>
        </Route>
        <Route path='/' exact>
          <div>THis is home</div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;

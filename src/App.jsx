import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import logo from './logo.svg';
import { loginRequestAction } from './redux/action/authen-action';

function App() {
  const dispatch = useDispatch();
  const authen = useSelector(state => state.authen.data)
  console.log({authen})

  useEffect(()=>{
    const data = {
      username: 'chiendd226@gmail.com',
      password: '000000'
    }
    dispatch(loginRequestAction(data));
  }, [])

  return (
    <div className="App">
      {authen.username}
    </div>
  );
}

export default App;

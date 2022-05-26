import logo from './logo.svg';
import './App.css';
import {FaLinux , FaWindows ,FaApple} from 'react-icons/fa'
import { Button } from 'antd';
import 'antd/dist/antd.css';
function App() {
  return (
    <div className="App">
      <div className='header-title'>Lisme Free Audio Book Software</div>
      <div>
        <div className='main-title'>
          Lisme AudioBook
        </div>
        <div className='main-subtitle'>
          Latest Release
          <span style={{marginLeft:10,marginRight:10}}>
            <FaWindows/>
            <FaApple />
            <FaLinux />
          </span> 
          27.24 -March 29th
        </div>
        <div style={{marginTop:20}}>
          <Button style={{marginLeft:10,marginRight:10}} size={'large'} type="primary">Windows</Button>
          <Button style={{marginLeft:10,marginRight:10}} size={'large'} type="primary">macOS 10.13+</Button>
          <Button style={{marginLeft:10,marginRight:10}} size={'large'} type="primary">Linux</Button>
        </div>
      </div>
      <div style={{marginTop:30}}>
        <img height={700} src='lisme/linux.png' />
      </div>
    </div>
  );
}

export default App;

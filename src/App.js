import logo from './logo.svg';
import './App.css';
import {FaLinux , FaWindows ,FaApple} from 'react-icons/fa'
import { Button ,Tooltip} from 'antd';
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
          <Tooltip title={'Coming soon..!'}>
            <Button disabled style={{marginLeft:10,marginRight:10}} size={'large'} type="primary">Windows</Button>
          </Tooltip>
          <Tooltip title={'Coming soon..!'}>
            <Button disabled style={{marginLeft:10,marginRight:10}} size={'large'} type="primary">macOS 10.13+</Button>
          </Tooltip>
          <a href='https://github.com/captainnobo/lisme/releases/download/beta/Lisme-beta-0.1.0_linux.zip' target="_blank" rel='nofollow'>
            <Button style={{marginLeft:10,marginRight:10}} size={'large'} type="primary">Linux</Button>
          </a>
        </div>
      </div>
      <div style={{marginTop:30}}>
        <img height={700} src='./linux.png' />
      </div>
    </div>
  );
}

export default App;

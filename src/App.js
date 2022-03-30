import { Content } from './components/Content';
import { SideBar } from './components/SideBar';
import './styles/global.scss';
import './styles/content.scss';

function App() {
  return (
    <div style={{display: 'flex', flexDirection: 'row'}}>
      <SideBar />
      <Content />
    </div>
  )
}

export default App;

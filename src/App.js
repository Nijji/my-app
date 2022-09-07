// import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from "./components/Welcome";
import Message from "./components/Message";
import Counter from "./components/Counter";
import FunctionClick from "./components/FunctionClick";
import ClassClick from './components/ClassClick';
import Form from "./components/Form";
import CycleA  from "./components/CycleA";
import Fragments from './components/Fragments';
import ParentComp from './components/ParentComp';
import Ref from './components/Ref';
import Hoc1 from './components/Hoc1';
import MyProp from './components/MyProp';
import GetList from './components/GetList';
import PostList from './components/PostList';


function App() {
  return (
    <div className="App">
    <Greet name='wayne'heroName='batman'/>
    <Welcome/>
    <Message/>
    <Counter/>
    <FunctionClick/>
    <ClassClick/>
    <GetList/>
    <PostList/>
    <Form/>
    <CycleA/>
    <Fragments/>
    <ParentComp/>
    <Ref/>
    <Hoc1 name='vishwas'/>
    <MyProp/>
    
    </div>
  );
}

export default App;


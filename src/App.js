import React from 'react';
import Tabs from "./components/Tabs"; 
import "./App.css";

function App() {
  
  return (
    <div>
     <Tabs> 
       <div label="tab1"> 
         tab1<em>content</em>! 
       </div> 
       <div label="tab2"> 
         tab2 <em>content</em>! 
       </div> 
       <div label="tab3"> 
        tab3<em>content</em>! 
       </div> 
     </Tabs> 
     <button onClick={this.addTabs}>+</button>
    </div>
  );
}

export default App;

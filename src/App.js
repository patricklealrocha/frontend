import React, {useState} from 'react';

import './App.css';

import Header from './components/Header';



function App(){
    const [projects, setProjects] = useState(['Desenvolvimento de app','Front-end web','ReactJS']);

    function handleAddProject(){
        //projects.push(`New Project ${Date.now()}`);
        setProjects([...projects,`New Project ${Date.now()}`]);

    }
    return(
        <>
        <Header title = 'Projects'/>
          <ul>
              {projects.map(project => <li key = {project}>{project}</li>)}
          </ul>

          <button type="button" onClick = {handleAddProject}>Adicionar Projeto</button>
        
        </>
    );
} 
    
export default App;
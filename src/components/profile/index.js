import { Component } from "react";
import './index.css'
import Project from "../project"
import {v4} from 'uuid'
import { FiInstagram } from 'react-icons/fi';
import { FaLinkedin } from 'react-icons/fa';
import { MdMailOutline } from 'react-icons/md';

let details=[
  
]

class ProfileContainer extends Component{
    state={
        project_details:details,
        image:"",
        project_name:"",
        description:"",
        project_link:""
    }

    addtheproject=()=>{
        const {image,project_name,description}=this.state
        const re= {
            id:v4(),
            image:image,
            project_name:project_name,
            description:description
        }
        this.setState(prevState=>{
             return {project_details:[...prevState.project_details,re],
            image:"",
            project_name:"",
            description:"",
            project_link:""
        }
        })

    }

    projectnamechange=(event)=>{
        this.setState({project_name:event.target.value})

    }
    imageurl=(event)=>{
        this.setState({image:event.target.value})

    }
    project_link_change=(event)=>{
        this.setState({project_link:event.target.value})
    }

    projectdescription=(event)=>{
        this.setState({description:event.target.value})
    }
    render(){
        const {project_details,image,project_name,description,project_link}=this.state
        return(
            <>
            <nav class="navcontainer">
                    <h1 class="mainname">
                        vidya sagar
                    </h1>
                    <div class="buttonsection">
                        <button class="bi"><a href="#about">About</a></button>
                        <button class="bi"><a href="#project">project</a></button>
                        <button class="bi"><a href="#contact">Contact</a></button>
                    </div>
                </nav>
            <section id="home" class="top_container">

                <div class="detailscontainer">
                    <p class="uipara">UI/UX DESIGNER</p>
                    <h1>HELLO, my name <br/>is Vidya Sagar</h1>
                    <p>Short text with details about you, what you <br/> do or your professional career.You can add <br/> More information on the about page.</p>
                    <div class="de_button">
                        <button class="pr_bu"><a href="#project">Projects</a></button>
                        <button class="li_bu">LinkedIn</button>
                    </div>
                </div>

                <div class="add_project_container">
                    <h1 class="add_project">
                        Add project
                    </h1>
                    <label for="name">Project Name</label><br/>
                    <input id="name" type="text" class="in inpu" value={project_name} onChange={this.projectnamechange}/><br/>
                    <label for="pro">Project Link</label><br/>
                    <input id="pro" type="text" class="in inpu" value={project_link} onChange={this.project_link_change}/><br/>
                    <label for="link">Image Link</label><br/>
                    <input id="link" type="text" class="in inpu" value={image} onChange={this.imageurl}/><br/>
                    <label for="description">Description</label><br/>
                    <textarea id="description" type="text" rows="8" cols="50" class="in" value={description} onChange={this.projectdescription}></textarea><br/>
                    <button class="addbutton" onClick={this.addtheproject}>Add</button>
                </div>
            </section>
            <section id="project" class="project_section">
                <h1 class="heading_project"> 
                        Projects
                </h1>
                {
                    project_details.map((each)=>(
                        <Project data={each} key={each.id}/>
                    ))
                }
            
            </section >
            <section id="contact" class="fici">
            <h1>Contact section</h1>
            <div class="icon_container">
            <a href="/"><FiInstagram class="icon"/></a>
            <a href="/"><FaLinkedin class="icon"/></a>
            <a href="/"><MdMailOutline class="icon"/></a>
            </div>
            </section>
            </>
    )
    }
}
export default ProfileContainer;
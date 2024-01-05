import "./index.css"

const Project=(props)=>{
    const {data}=props
    const {project_name,image,description}=data

    return(
        <div class="pojectCard">
            <div class="detailscard">
                <h1 class="projectname">{project_name}</h1>
                <p class="project_desc">{description}</p>
                <button class="project_bu">View project</button>
            </div>
            <img src={image} alt="error_image" class="imgage"/>
        </div>
    )
};

export default Project;
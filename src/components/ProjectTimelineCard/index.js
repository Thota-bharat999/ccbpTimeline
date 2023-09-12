import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = props => {
  const {data} = props
  return (
    <div>
      <img src={data.imageUrl} alt="project" className="project-image" />
      <div className="course-container">
        <h1 className="course-title">{data.projectTitle}</h1>
        <div className="duration-container">
          <AiFillCalendar />
          <p className="duration">{data.duration}</p>
        </div>
      </div>
      <p className="project-description">{data.description}</p>
      <div className="linkDiv">
        <a href={data.projectUrl}>Visit</a>
      </div>
    </div>
  )
}

export default ProjectTimelineCard

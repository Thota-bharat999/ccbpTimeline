import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = props => {
  const {data} = props
  return (
    <div className="main-container">
      <div className="course-title-container">
        <h1 className="course-title">{data.courseTitle}</h1>
        <div className="duration-container">
          <AiFillClockCircle />
          <p className="duration">{data.duration}</p>
        </div>
      </div>
      <p className="description">{data.description}</p>
      <div className="list-container">
        {data.tagsList.map(each => (
          <p className="items-container">{each.name}</p>
        ))}
      </div>
    </div>
  )
}

export default CourseTimelineCard

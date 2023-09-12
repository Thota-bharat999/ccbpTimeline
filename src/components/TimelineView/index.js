import {Chrono} from 'react-chrono'
import CourseTimelineCard from '../CourseTimelineCard'

import ProjectTimelineCard from '../ProjectTimelineCard'

import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props

  return (
    <div className="bg-container">
      <h1 className="heading">
        MY JOURNEY OF <br />
        <span className="span-heading">CCBP 4.0</span>
      </h1>
      <div className="chrono-container">
        <Chrono
          items={timelineItemsList}
          mode="VERTICAL_ALTERNATING"
          theme={{
            secondary: 'white',
            primary: 'green',
            titleColor: 'Red',
            cardBgColor: 'white',
          }}
        >
          {timelineItemsList.map(each => {
            if (each.categoryId === 'COURSE') {
              return <CourseTimelineCard data={each} />
            }
            return <ProjectTimelineCard data={each} />
          })}
        </Chrono>
      </div>
    </div>
  )
}

export default TimelineView

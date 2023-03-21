import React from "react";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaGraduationCap, FaSchool, FaUserGraduate } from 'react-icons/fa';

const Education = () => {
  return (
    <div className="py-8" id="education">
      <div className="flex justify-center items-center">
        {/* <hr className="w-40 mr-2" /> */}
        <span className="text-3xl  font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">Education</span>
        {/* <hr className="w-40 ml-2" /> */}
      </div>

    <VerticalTimeline>
    <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2021 - present"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<FaUserGraduate/>}
  >
    <h3 className="vertical-timeline-element-title">University</h3>
    <h4 className="vertical-timeline-element-subtitle">CCN University of Science & Technology</h4>
    <p>
    BSC in Computer Science And Engineering(CSE)
    </p>
  </VerticalTimelineElement>

    <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2018 - 2020"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<FaGraduationCap/>}
  >
    <h3 className="vertical-timeline-element-title">College</h3>
    <h4 className="vertical-timeline-element-subtitle">Government Shaheed Suhrawardy College</h4>
    <p>
    Science
    </p>
  </VerticalTimelineElement>
    <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2016 - 2018"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<FaSchool/>}
  >
    <h3 className="vertical-timeline-element-title">SSC</h3>
    <h4 className="vertical-timeline-element-subtitle">Bangodda Iqra Model School</h4>
    <p>
    Science
    </p>
  </VerticalTimelineElement>
    </VerticalTimeline>

    </div>
  );
};

export default Education;

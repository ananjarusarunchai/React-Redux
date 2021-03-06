import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as courseAction from '../../actions/courseActions'
import { bindActionCreators } from 'redux';
import CourseList from './CourseList';
import { browserHistory } from 'react-router';

class CoursePage extends React.Component {
  constructor(props, context) {
    super(props, context);
    
    this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
  }

  courseRow(course, index) {
    return <div key={index}>{course.title}</div>;
  }

  redirectToAddCoursePage() {
    browserHistory.push('/course')
  }

  render() {
    const { courses } = this.props;
    return (
      <div>
        <h1>Course</h1>
        <input type="submit" 
               value="Add Course"
               className="btn btn-primary"
               onClick={this.redirectToAddCoursePage}
          />
        <CourseList courses={courses} />
      </div>
    )
  }
}

CoursePage.propTypes = {
  actions: PropTypes.object.isRequired,
  courses: PropTypes.array.isRequired,
};

function mapStateToProps(state, ownProps) {
  return {
    courses: state.courses
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseAction, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursePage);

import { server } from '../store';
import axios from 'axios';

// Create Course
export const createCourse = formdata => async dispatch => {
  try {
    dispatch({ type: 'createCourseRequest' });
    const { data } = await axios.post(`${server}/createcourse`, formdata, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      withCredentials: true,
    });
    dispatch({ type: 'createCourseSuccess', payload: data.message });
    console.log(data);
  } catch (error) {
    dispatch({
      type: 'createCourseFail',
      payload: error.response.data.message,
    });
  }
};


// ADD Lecture
export const addLecture = (id, formdata) => async dispatch => {
  try {
    dispatch({ type: 'addLectureRequest' });
    const { data } = await axios.post(`${server}/course/${id}`, formdata, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      withCredentials: true,
    });
    dispatch({ type: 'addLectureSuccess', payload: data.message });
    // console.log(data);
  } catch (error) {
    dispatch({
      type: 'addLectureFail',
      payload: error.response.data.message,
    });
  }
};

import { server } from '../store';
import axios from 'axios';

// Get All Courses
export const getAllCourses =
  (category = '', keyword = '') =>
  async dispatch => {
    try {
      dispatch({ type: 'allCoursesRequest' });
      const { data } = await axios.get(
        `${server}/courses?keyword=${keyword}&category=${category}`
      );
      dispatch({ type: 'allCoursesSuccess', payload: data.courses });
      console.log(data);
    } catch (error) {
      dispatch({
        type: 'allCoursesFail',
        payload: error.response.data.message,
      });
    }
  };




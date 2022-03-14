import { RETRIEVE_STUDENTS } from "../actionTypes";

import { getAllStudents }  from "../services";

export const retrieveStudents = () => async (dispatch: any) => {
  try {
    const data = await getAllStudents();
    dispatch({
      type: RETRIEVE_STUDENTS,
      payload: data,
    });
  } catch (err) {
    console.log(err);
  }
};
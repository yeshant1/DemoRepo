
import { api } from './api';
import type { Course } from '../models/course';

const COURSE_URL = '/gateway/course';

export async function getAllCourses() {
  const response = await api.get(COURSE_URL);
  return response.data;
}

export async function saveCourse(course: Course, thumbnail?: File | null) {
  const formData = new FormData();
  formData.append('title', course.title ? String(course.title) : "");
  formData.append('subtitle', course.subtitle);
  formData.append('price', course.price.toString());
  
  if (thumbnail) {
    formData.append('thumbnail', thumbnail);
  }

  const userStr = localStorage.getItem('currentUser');
  const token = userStr ? JSON.parse(userStr).token : undefined;
  console.log('Token from localStorage before saveCourse:', token);

  const authHeader = api.defaults.headers.common['Authorization'];
  console.log('Sending saveCourse request with Authorization:', authHeader);

  // ✅ send formData, not query params
  return api.post(`${COURSE_URL}/add`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
      'Authorization': authHeader,
    },
  });
}

export async function deleteCourse(courseId: number) {
  const userStr = localStorage.getItem('currentUser');
  const token = userStr ? JSON.parse(userStr).token : undefined;
  console.log('Token from localStorage before deleteCourse:', token);

  const authHeader = api.defaults.headers.common['Authorization'];
  console.log('Sending deleteCourse request with Authorization:', authHeader);

  return api.delete(`${COURSE_URL}/${courseId}`, {
    headers: {
      'Authorization': authHeader,
    },
  });
}

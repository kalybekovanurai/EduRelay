export interface Students {
  id: number;
  name: string;
  major: string;
  faculty: string;
  skills: string;
  canTeach: string;
  wantsToLearn: string;
  contacts: string;
  email: string;
  password: string;
  avatar: string;
}

export interface StudentsState {
  student: Students | null;
  students: Students[];
  loading: boolean;
  error: string | null;
}

export interface LoginPayload {
  email: string;
  password: string;
}

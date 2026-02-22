export interface AISearchResult {
  id: number;
  name: string;
  major: string;
  faculty: string;
  skills: string;
  canTeach: string;
  wantsToLearn: string;
  contacts: string;
  email: string;
  avatar: string;
}

export interface SearchState {
  results: AISearchResult[];
  loading: boolean;
  error: string | null;
}

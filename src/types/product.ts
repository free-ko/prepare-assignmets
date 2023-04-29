type Grade = 'A+' | 'A' | 'A-' | 'B+' | 'B' | 'B-' | 'C';
export type Product = {
  id?: string;
  grade: Grade;
  imgURL: string;
  company: string;
  name: string;
  isSaved: boolean;
};

import { Student } from "./Student";

export class Teacher {

  constructor(
    id: number, 
    name: string,
    gradeId: string,
    phone: string, 
    email: string, 
    maxClassSize: number, 
    avatar: string, 
    students: Student[]
) {
    this.id = id
    this.name = name
    this.gradeId = gradeId
    this.phone = phone
    this.email = email
    this.maxClassSize = maxClassSize
    this.avatar = avatar
    this.students = students
  }
    id: number;
    name: string;
    gradeId: string;
    phone: string;
    email: string;
    maxClassSize: number;
    avatar: string;
    students: Student[];
}
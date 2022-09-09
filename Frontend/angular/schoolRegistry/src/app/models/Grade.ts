export class Grade {
    gradeName: string;
    gradeId: string;
    description: string;

    constructor(gradeName: string, gradeId: string, description: string) {
        this.gradeId = gradeId;
        this.gradeName = gradeName;
        this.description = description;
    }
}
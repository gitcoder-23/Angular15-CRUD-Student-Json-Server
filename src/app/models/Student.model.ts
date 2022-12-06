export class StudentModel {
  constructor(
    public id?: string | undefined,
    // public id: number=0,
    public studentName?: string,
    public email?: string,
    public className?: string,
    public mobile?: string
  ) {}
}

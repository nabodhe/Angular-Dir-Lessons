export interface Employee {
    empCode: number;
    empName: string;
    //getSalary: (abc: number) => number; // arrow function
    getManagerName(xyz: number): string;
}

export class CEmployee implements Employee{
  empCode: number;
  empName: string;
  //getSalary: (abc: number) => number;
  getManagerName(xyz: number): string {
    this.empCode = xyz;
    return this.empCode + " " + this.empName;
    }

}

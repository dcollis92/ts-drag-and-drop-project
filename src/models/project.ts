// Project Type
export enum ProjectStatus {
  Active,
  Finished,
}

export class Project {
  // ability to build projects w same structure
  constructor(
    public id: string,
    public title: string,
    public description: string,
    public people: number,
    public status: ProjectStatus
  ) {}
}

import { Phase } from '../shared/phase';
export class Project {
  constructor(public name:string, public description:string, public imagePath:string, public phases: Phase[]){}
}

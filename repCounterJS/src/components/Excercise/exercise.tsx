export enum PoseType {
  BINARY = 'BINARY',
  ANGLE = 'ANGLE'
}

export class Exercise {
  anchors: number[];
  angles: number[];
  name: string;
  type: PoseType;
  reps: number;

  constructor({name, anchors, angles, reps, type}: any) {
    this.name = name;
    this.anchors = anchors;
    this.angles = angles;
    this.reps = reps;
    this.type = type;
  }
}

export const upper = [
  // new Exercise({ name: 'CURLS', anchors: [12, 14, 16], angles: [210, 310], reps: 10, startInverted: false, type: PoseType.ANGLE }),
  new Exercise({ name: 'CURLS', anchors: [16, 14, 0], angles: [0, 100], reps: 3, type: PoseType.BINARY }),
  new Exercise({ name: 'PULL UP', anchors: [6, 16, 9], angles: [0, 100], reps:3, type: PoseType.BINARY }),
  new Exercise({ name: 'SHR PRS', anchors: [16, 0, 0], angles: [0, 100], reps:3, type: PoseType.BINARY }),
]

export const lower = [
  // new Exercise({name, anchors, angles, reps, startInverted, reduceTop, type}),
]


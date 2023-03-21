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
  new Exercise({ name: 'PUL UP', anchors: [6, 16, 0], angles: [0, 100], reps: 10, type: PoseType.BINARY }),
  new Exercise({ name: 'PSH UP', anchors: [14, 6, 0], angles: [0, 100], reps: 10, type: PoseType.BINARY }),
  new Exercise({ name: 'CURLS', anchors: [12, 14, 16], angles: [0, 100], reps: 10, type: PoseType.BINARY }),
  new Exercise({ name: 'SHD PR', anchors: [16, 0, 0], angles: [0, 100], reps: 10, type: PoseType.BINARY }),
  new Exercise({ name: 'SID RS', anchors: [16, 12, 0], angles: [0, 100], reps: 10, type: PoseType.BINARY }),
  new Exercise({ name: 'OVR HD', anchors: [16, 6, 0], angles: [0, 100], reps: 10, type: PoseType.BINARY }),
  new Exercise({ name: 'PL DWN', anchors: [16, 14, 0], angles: [0, 100], reps: 10, type: PoseType.BINARY }),
  new Exercise({ name: 'JMP ST', anchors: [24, 26, 0], angles: [0, 100], reps: 10, type: PoseType.BINARY }),
  new Exercise({ name: 'SLT ST', anchors: [16, 12, 0], angles: [0, 100], reps: 10, type: PoseType.BINARY }),
  new Exercise({ name: 'BND ST', anchors: [24, 26, 0], angles: [0, 100], reps: 10, type: PoseType.BINARY }),
  new Exercise({ name: '1LG ST', anchors: [24, 26, 0], angles: [0, 100], reps: 10, type: PoseType.BINARY }),
]

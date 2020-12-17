export enum Weekday {
  Monday = 0,
  Tuesday = 1,
  Wednesday = 2,
  Thursday = 3,
  Friday = 4,
  Saturday = 5,
  Sunday = 6,
}

type Art = {
  blob: string
  scale: number
  offset: {
    x: number
    y: number
  }
}

export interface CalendarDay {
  date: number;
  soundCloudUrl: string;
}

export interface CalendarData {
  [key: number]: CalendarDay;
}

export interface CellCalenderReservation {
    DayNumber: number;
    DateM: string;
    DateS: string;
    WeekDayM: string;
    WeekDayS: string;
    Holiday: number;
    halfHoliday: string;
    HotelingStatus: string;
    CermonyStatus: string;
    FoodStatus: string;
    Price: number;
    ExtraItemPrice: number;
    IncomeReasonRentItemID: string;
    PersonMaxCapacity: number;
    PersonCapacity: number;
    empty_day_tag: number;
    timeout: number;
    selected_in_range_date: number,
    checkin_selected_in_range_date: number,
    checkin_selected_date: number,
    checkout_selected_in_range_date: number,
    checkout_selected_date: number

}
export interface Month {
    Title: string;
    Days: CellCalenderReservation[]
}
export interface Calender {
    startDate: string;
    endDate: string;
    miladiStartDate: string;
    miladiEndDate: string;
    data: Month[];
}

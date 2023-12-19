export interface CellCalenderReservation{

DateM: string;
DateS: string;
WeeDayM: string;
WeeDayS: string;
Holiday: number;
halfHoliday:string;
HotelingStatus:string;
CermonyStatus:string;
FoodStatus:string;
Price:number;
IncomeReasonRentItemID:string;
empty_day_tag:number;
timeout:number;
DayNumber:number;
pick:number;
selected_in_range_date:number,
checkin_selected_in_range_date:number,
checkin_selected_date:number,
checkout_selected_in_range_date:number,
checkout_selected_date:number
}
export interface Month{
    Title:string;
    Days:CellCalenderReservation[]
}
export interface Calender{
    startDate: string;
    endDate: string;
    miladiStartDate: string;
    miladiEndDate: string;
    data: Month[];
}

export interface IPayPeriodOptions {
    id: string;
    value: string;
}

export interface ITimeSheetData {
    id: string;
    payPeriodId: string;
    title: string;
    dateRange: string;
    startDate: string;
    endDate: string;
    month: string;
    year: string;
}
export interface IEmployeeDetails {
    firstName: string;
    lastName?: string;
    middleName?: string;
    fullName: string;
    employeeId: string;
    email?: string;
    phone: string;
    address: string;
    address2: string;
    city: string;
    state: string;
    zip: string;
    isExpanded?: boolean;
    isSelected?: boolean;
}
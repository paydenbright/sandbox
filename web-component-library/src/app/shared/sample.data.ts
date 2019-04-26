import { ITabs } from '../shared/components/tabs/tabs.model';
import { IPayPeriodOptions, ITimeSheetData } from '../time-sheet/time-sheet.model';
import { IActionBarBtns } from './components/action-bar/action-bar.model';
import { IEmployeeDetails } from './models/employee-details.model';

export const PAY_PERIOD_OPTIONS: IPayPeriodOptions[] = [
  {
    id: 'ppo-id-0',
    value: "Week 1"
  },
  {
    id: 'ppo-id-1',
    value: "Week 2"
  },
  {
    id: 'ppo-id-2',
    value: "Week 3"
  },
  {
    id: 'ppo-id-3',
    value: "Week 4"
  },
  {
    id: 'ppo-id-4',
    value: "Week 5"
  },
];

export const TIME_SHEET_TABS: ITabs[] = [
  {
    name: 'Timesheets',
    isSelected: true,
  },
  {
    name: 'Overtime/Comp Time',
    isSelected: false,
  },
  {
    name: 'Personnel',
    isSelected: false,
  },
];


export const TIME_SHEET_ACTION_BAR_BTNS: IActionBarBtns[] = [

  {
    id: "abb-id-0",
    name: "Select All",
    altName: "Deselect All",
    class: "btn-default",
    icon: "color-white custom-square",
    altIcon: "fa-check color-green"
  },
  {
    id: "abb-id-1",
    name: "Expand All",
    altName: "Collapse All",
    class: "btn-default",
    icon: "color-green fa-plus",
    altIcon: "color-blue fa-minus"
  },
  {
    id: "abb-id-2",
    name: "Open Selected Timesheets",
    class: "btn-default",
    icon: "color-black fa-print",
  },

]

export const TIME_SHEET_DATA: ITimeSheetData[] = [
  {
    id: "tsd-id-0",
    payPeriodId: "ppo-id-0",
    title: "Pay Period: Week 1",
    dateRange: " 01/APR/2019 - 07/APR/2019",
    startDate: "1",
    endDate: "7",
    month: "April",
    year: "2019",
  },
  {
    id: "tsd-id-1",
    payPeriodId: "ppo-id-1",
    title: "Pay Period: Week 2",
    dateRange: " 08/APR/2019 - 14/APR/2019",
    startDate: "8",
    endDate: "14",
    month: "April",
    year: "2019",
  },
  {
    id: "tsd-id-2",
    payPeriodId: "ppo-id-2",
    title: "Pay Period: Week 3",
    dateRange: " 15/APR/2019 - 21/APR/2019",
    startDate: "15",
    endDate: "21",
    month: "April",
    year: "2019",
  },
  {
    id: "tsd-id-3",
    payPeriodId: "ppo-id-3",
    title: "Pay Period: Week 4",
    dateRange: " 22/APR/2019 - 28/APR/2019",
    startDate: "22",
    endDate: "28",
    month: "April",
    year: "2019",
  },
  {
    id: "tsd-id-4",
    payPeriodId: "ppo-id-4",
    title: "Pay Period: Week 5",
    dateRange: " 28/APR/2019 - 05/MAY/2019",
    startDate: "28",
    endDate: "05",
    month: "May",
    year: "2019",
  }
]

export const EMPOLYEE_DATA: IEmployeeDetails[] = [
  { firstName: "John", lastName: "Doe", middleName: "D.", fullName: "John D. Doe", employeeId: "1234-1234-1234", email: "John.D.Doe@fakemail.com", phone: "777.777.7777", address: "N/A", address2: "N/A", city: "N/A", state: "N/A", zip: "N/A", isExpanded: false, isSelected: false },
  { firstName: "Mark", lastName: "Striker", middleName: "A.", fullName: "Mark A. Striker", employeeId: "5234-2345-2345", email: "Mark.A.Striker@fakemail.com", phone: "777.777.7777", address: "N/A", address2: "N/A", city: "N/A", state: "N/A", zip: "N/A", isExpanded: false, isSelected: false },
  { firstName: "Susan", lastName: "Flowers", middleName: "D.", fullName: "Susan D. Flowers", employeeId: "4567-4567-4567", email: "Susan.D.Flowers@fakemail.com", phone: "777.777.7777", address: "N/A", address2: "N/A", city: "N/A", state: "N/A", zip: "N/A", isExpanded: false, isSelected: false },
  { firstName: "Jane", lastName: "Doe", middleName: "B.", fullName: "Jane B. Doe", employeeId: "5678-5678-5678", email: "Jane.B.Doe@fakemail.com", phone: "777.777.7777", address: "N/A", address2: "N/A", city: "N/A", state: "N/A", zip: "N/A", isExpanded: false, isSelected: false },
  { firstName: "Queen", lastName: "Latifa", middleName: "T.", fullName: "Queen T. Latifa", employeeId: "6789-6789-6789", email: "Queen.T.Latifa@fakemail.com", phone: "777.777.7777", address: "N/A", address2: "N/A", city: "N/A", state: "N/A", zip: "N/A", isExpanded: false, isSelected: false },
  { firstName: "Tyrone", lastName: "Powers", middleName: "J.", fullName: "Tyrone J. Powers", employeeId: "7890-7890-7890-", email: "Tyrone.J.Powers@fakemail.com", phone: "777.777.7777", address: "N/A", address2: "N/A", city: "N/A", state: "N/A", zip: "N/A", isExpanded: false, isSelected: false },
  { firstName: "Lee", lastName: "Chen", middleName: "", fullName: "Lee D. Chen", employeeId: "2345-2345-2345", email: "Lee.D.Chen@fakemail.com", phone: "777.777.7777", address: "N/A", address2: "N/A", city: "N/A", state: "N/A", zip: "N/A", isExpanded: false, isSelected: false },
  { firstName: "Gabriel", lastName: "Micheals", middleName: "P.", fullName: "Gabriel P. Micheals", employeeId: "3456-3456-3456", email: "Gabriel.P.Micheals@fakemail.com", phone: "777.777.7777", address: "N/A", address2: "N/A", city: "N/A", state: "N/A", zip: "N/A", isExpanded: false, isSelected: false },
  { firstName: "Olivia", lastName: "River", middleName: "S.", fullName: "Olivia S. River", employeeId: "6543-6543-6543", email: "Olivia.S.River@fakemail.com", phone: "777.777.7777", address: "N/A", address2: "N/A", city: "N/A", state: "N/A", zip: "N/A", isExpanded: false, isSelected: false },
  { firstName: "Non", lastName: "Binary", middleName: "L.", fullName: "Non L. Binary", employeeId: "2234-2234-2234", email: "Non.L.Binary@fakemail.com", phone: "777.777.7777", address: "N/A", address2: "N/A", city: "N/A", state: "N/A", zip: "N/A", isExpanded: false, isSelected: false },

]


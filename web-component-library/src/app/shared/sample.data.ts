import { ITabs } from '../shared/components/tabs/tabs.model';
import { IPayPeriodOptions } from '../home/home.model';
import { IActionBarBtns } from './components/action-bar/action-bar.model';

export const PAY_PERIOD_OPTIONS: IPayPeriodOptions[] = [
  {
    id: 'ppo-id-0',
    value: 'Week 1',
  },
  {
    id: 'ppo-id-1',
    value: 'Week 2',
  },
  {
    id: 'ppo-id-2',
    value: 'Week 3',
  },
  {
    id: 'ppo-id-3',
    value: 'Week 4',
  },
  {
    id: 'ppo-id-4',
    value: 'Week 5',
  },
];

export const HOME_TABS: ITabs[] = [
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


export const HOME_ACTION_BAR_BTNS: IActionBarBtns[] = [
  {
    id: "abb-id-0",
    name: "Open Selected Timesheets",
    class: "btn-default",
    icon: "color-black fa-print",
  },
  {
    id: "abb-id-1",
    name: "Expand All",
    class: "btn-default",
    icon: "color-green fa-plus",
  },
  {
    id: "abb-id-2",
    name: "Collapse All",
    class: "btn-default",
    icon: "color-blue fa-square"
  },
]
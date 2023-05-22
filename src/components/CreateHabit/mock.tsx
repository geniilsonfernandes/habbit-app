import {
  FaBook,
  FaRunning,
  FaMeetup,
  FaCode,
  FaLanguage,
  FaUtensils,
} from 'react-icons/fa'

const categories = [
  {
    id: '0',
    key: 'reading',
    title: 'Reading the book',
    color: '#6cf583',
    icon: <FaBook color="#fff" size="20px" />,
  },
  {
    id: '1',
    key: 'running',
    title: 'Running',
    color: '#f5cd79',
    icon: <FaRunning color="#fff" size="20px" />,
  },
  {
    id: '2',
    key: 'meditation',
    title: 'Meditation',
    color: '#e73159',
    icon: <FaMeetup color="#fff" size="20px" />,
  },
  {
    id: '3',
    key: 'coding',
    title: 'Coding',
    color: '#f3a4e2',
    icon: <FaCode color="#fff" size="20px" />,
  },
  {
    id: '4',
    key: 'english',
    title: 'English',
    color: '#a4f3e8',
    icon: <FaLanguage color="#fff" size="20px" />,
  },
  {
    id: '5',
    key: 'cooking',
    title: 'Cooking',
    color: '#f3f2a4',
    icon: <FaUtensils color="#fff" size="20px" />,
  },
]

const days = [
  {
    key: 'SUN',
    title: 'Sun',
  },
  {
    key: 'MON',
    title: 'Mon',
  },
  {
    key: 'TUE',
    title: 'Tue',
  },
  {
    key: 'WED',
    title: 'Wed',
  },
  {
    key: 'THU',
    title: 'Thu',
  },
  {
    key: 'FRI',
    title: 'Fri',
  },
  {
    key: 'SAT',
    title: 'Sat',
  },
]

export { categories, days }

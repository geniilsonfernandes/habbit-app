import {
  CategoryScale,
  Chart as ChartJS,
  Filler,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js'
import { useMemo } from 'react'
import { Line } from 'react-chartjs-2'
import HabitRecord from 'services/entities/HabitRecord'
import { Status } from 'shared/habit/helper/statusMap'
import theme from 'styles/theme'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
)

export const options = {
  responsive: true,
  interaction: {
    intersect: false,
  },
  stacked: false,

  plugins: {
    title: {
      display: false,
      text: 'Habit Char',
    },
    legend: {
      display: false,
    },
  },
}

type YearLineChartProps = {
  HabitMonths?: Array<HabitRecord[]>
}

const YearLineChart = ({ HabitMonths }: YearLineChartProps) => {
  const dataGraph = useMemo(() => {
    const months = HabitMonths

    const filterByStatus = (status: Status) => {
      const done = months?.map((mm) => {
        const done = mm.filter((day) => day.progress === status).length

        return done
      })

      return done
    }

    const success = filterByStatus('success')
    const failed = filterByStatus('failed')

    const labels = [
      'jan',
      'fev',
      'mar',
      'abr',
      'mai',
      'jun',
      'jul',
      'ago',
      'set',
      'out',
      'nov',
      'dez',
    ]
    const datasets = [
      {
        fill: true,
        label: '',

        data: success,
        borderColor: theme.colors.habit.green[500],

        pointRadius: 4,
      },
      {
        fill: true,
        label: '',

        data: failed,
        borderColor: theme.colors.habit.red[500],

        pointRadius: 4,
      },
    ]

    return {
      labels,
      datasets,
    }
  }, [HabitMonths])

  return (
    <Line
      options={{
        ...options,
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
            suggestedMin: 0, // Define o valor mínimo exibido no eixo
            suggestedMax: 36, // Define o valor máximo exibido no eixo
            grid: {
              display: true,
            },
            ticks: {
              stepSize: 1,
            },
          },
          y1: {
            type: 'linear' as const,
            display: true,
            position: 'right' as const,
            grid: {
              drawOnChartArea: false,
            },
          },
        },
        plugins: {
          tooltip: {
            enabled: false,
          },
          legend: {
            display: false,
          },
        },
      }}
      data={dataGraph}
    />
  )
}

export default YearLineChart

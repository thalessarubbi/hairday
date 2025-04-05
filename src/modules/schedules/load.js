import { scheduleFetch } from "../../services/schedule-fetch"
import { hoursLoad } from "../form/hours-load"
import { scheduleShow } from "./show"

const selectedDate = document.getElementById('date')

export async function schedulesDay() {
  const date = selectedDate.value
  const dailySchedules = await scheduleFetch({ date })

  scheduleShow({ dailySchedules })

  hoursLoad({ date, dailySchedules })
}
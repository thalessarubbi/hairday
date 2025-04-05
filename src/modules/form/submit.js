import dayjs from "dayjs";

const form = document.querySelector('form');
const clientName = document.getElementById('client');
const selectedDate = document.getElementById('date');

const inputToday = dayjs(new Date()).format('YYYY-MM-DD');

selectedDate.value = inputToday
selectedDate.min = inputToday

form.submit = async (event) => {
  event.preventDefault()

  try {
    const name = clientName.value.trim()

    if (!name) {
      return alert('Informe o nome do cliente!')
    }

    const hourSelected = document.querySelector('.hour-selected')

    if (!hourSelected) {
      return alert('Selecione um horário!')
    }

    const [hour] = hourSelected.textContent.split(':')
    const when = dayjs(selectedDate.value).add(hour, 'hour')
    const id = new Date().getTime()


  } catch (error) {
    alert('Não foi possível realizar o agendamento.')
  }
}
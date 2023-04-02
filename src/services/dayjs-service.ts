import dayjs, { Dayjs } from 'dayjs'

const dayJsInstance = dayjs

function getPreparedDateValue(dateValue: Dayjs | string) {
  return dayJsInstance(dateValue).isValid()
    ? dayJsInstance(dateValue)
    : dayJsInstance()
}

function formatDate(dateValue: Dayjs | string, formatValue: string): string {
  return getPreparedDateValue(dateValue).format(formatValue)
}

export { formatDate }

import { createContext } from 'react'

import { ISqlMetric } from '@/types/types'

interface ILogContext {
  fetchErrorMsg: string
  metrics: Partial<ISqlMetric[]>
  updateErrorMsg: (state: string) => void
  updateLogMetrics: (state: Partial<ISqlMetric[]>) => void
}

const defaultCtxState: ILogContext = {
  metrics: [],
  fetchErrorMsg: '',
  updateErrorMsg: () => null,
  updateLogMetrics: () => null,
}

const LogContext = createContext<ILogContext>(defaultCtxState)

export default LogContext

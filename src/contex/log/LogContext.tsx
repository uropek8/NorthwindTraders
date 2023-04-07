import { createContext } from 'react'

import { ISqlMetric } from '@/types/types'

interface ILogContext {
  metrics: Partial<ISqlMetric[]>
  updateLogMetrics: (state: Partial<ISqlMetric[]>) => void
}

const defaultCtxState: ILogContext = {
  metrics: [],
  updateLogMetrics: () => null,
}

const LogContext = createContext<ILogContext>(defaultCtxState)

export default LogContext

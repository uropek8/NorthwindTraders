import { createContext } from 'react'

import { ISqlMetric } from '@/types/types'

interface ILogContext {
  metrics: Partial<ISqlMetric[]>
  fetchErrorMsg: string
  isShowSidebar: boolean
  toggleSidebar: (state: boolean) => void
  updateErrorMsg: (state: string) => void
  updateLogMetrics: (state: Partial<ISqlMetric[]>) => void
}

const defaultCtxState: ILogContext = {
  metrics: [],
  fetchErrorMsg: '',
  isShowSidebar: false,
  toggleSidebar: () => null,
  updateErrorMsg: () => null,
  updateLogMetrics: () => null,
}

const LogContext = createContext<ILogContext>(defaultCtxState)

export default LogContext

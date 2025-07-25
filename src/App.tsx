import './App.css'
import ExchangeRateAndMarkupFrame from './components/ExchangeRateAndMarkup'
import HeaderWithTabs from './components/HeaderWithTabs'
import { DashboardLayout } from './components/layout/DefaultLayout'
import { SearchAndActions } from './components/SearchAndActions'
import Stepper from './components/Stepper'
import PayPeriodTypeInput from './components/ui/PayPeriodTypeInput'
import WorkerTable from './components/WorkerTable'

function App() {

  return (
    <DashboardLayout>
      <div className='flex flex-col px-8 py-6'>
        <div className='flex flex-col p-6 bg-white rounded-md gap-6'>
          <HeaderWithTabs/>
          <Stepper/>
          <PayPeriodTypeInput/>
          <ExchangeRateAndMarkupFrame/>
          <SearchAndActions/>
          <WorkerTable/>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default App

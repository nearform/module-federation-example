import Loading from 'loading/Loading'
import RedLoadingCss from './RedLoading.module.css'

const RedLoading = () => (
  <div className={RedLoadingCss['red-loading-container']}>
    <Loading />
  </div>
)

export default RedLoading

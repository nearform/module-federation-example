import Loading from 'loading/Loading'
import ColorLoadingCss from './ColorLoading.module.css'

const ColorLoading = () => (
  <div className={ColorLoadingCss['loading-container']}>
    <Loading />
  </div>
)

export default ColorLoading

import React from 'react'

const Loading = React.lazy(() => import('ui-loading/Loading'))

const UILoading = () => {
  return (
    <React.Suspense>
      <Loading />
    </React.Suspense>
  )
}

export default UILoading

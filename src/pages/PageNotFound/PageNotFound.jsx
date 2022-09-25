import React from 'react'
import NotFoundInfo from '../../components/NotFound/NotFoundInfo/NotFoundInfo'
import { PageNotFoundWrapper } from './PageNotFoundStyle'

const PageNotFound = () => {
  return (
    <PageNotFoundWrapper>
      <NotFoundInfo/>
      <img src={require('../../components/NotFound/NotFoundImg/notfound-img.png')} alt='404 error' style={{width:'40%', filter:'drop-shadow(10px 8px 4px #51344d)'}}/>
    </PageNotFoundWrapper>
  )
}

export default PageNotFound
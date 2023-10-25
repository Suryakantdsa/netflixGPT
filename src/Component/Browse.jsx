import React, { useEffect } from 'react'
import Header from './Header'
import useNowPlayingMovie from '../hooks/useNowPlayingMovie'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import usePopularMovie from '../hooks/usePopularMovie'
import useTopRatedMovie from '../hooks/useTopRatedMovie'
import useUpcomingMovie from '../hooks/useUpcomingMovie'

const Browse = () => {
 useNowPlayingMovie()
 usePopularMovie()
 useTopRatedMovie()
 useUpcomingMovie()
  return (
    <div>
        <Header/>
        <MainContainer/>
        <SecondaryContainer/>
    </div>
  )
}

export default Browse
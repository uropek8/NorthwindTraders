import { FC, ReactElement } from 'react'

import {
  HomeBody,
  HomeTitle,
  HomeSubTitle,
  HomeContent,
  HomeInfo,
  HomeText,
  HomeImage,
  HomeLink,
} from './Home.styles'

const Home: FC = (): ReactElement => {
  return (
    <HomeBody>
      <HomeTitle>Welcome to Northwind Traders</HomeTitle>
      <HomeSubTitle>Running on Cloudflare&apos;s D1</HomeSubTitle>
      <HomeContent>
        <HomeInfo>
          <HomeText>
            This is a demo of the Northwind dataset, running on{' '}
            <HomeLink to={'https://workers.cloudflare.com/'}>
              Cloudflare Workers
            </HomeLink>
            , and D1 - Cloudflare&apos;s newest SQL database, running on SQLite.
          </HomeText>
          <HomeText>
            Read our{' '}
            <HomeLink to={'https://blog.cloudflare.com/introducing-d1'}>
              D1 announcement
            </HomeLink>{' '}
            to learn more about D1.
          </HomeText>
          <HomeText>
            This dataset was sourced from{' '}
            <HomeLink to={'https://github.com/jpwhite3/northwind-SQLite3'}>
              northwind-SQLite3
            </HomeLink>
            .
          </HomeText>
          <HomeText>
            You can use the UI to explore Supplies, Orders, Customers, Employees
            and Products, or you can use search if you know what you&apos;re
            looking for.
          </HomeText>
        </HomeInfo>
        <HomeImage>
          <img
            src="https://imagedelivery.net/4wj01aQOZZ0hemsvbxWAvA/763bcbcd-da6d-46ec-f5e1-70c1c1a33d00/public"
            alt="Database"
          />
        </HomeImage>
      </HomeContent>
    </HomeBody>
  )
}

export default Home

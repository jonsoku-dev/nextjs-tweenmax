import type { NextPage } from 'next'
import styled from 'styled-components'

import Anchor from '@/components/atoms/Anchor'
import useHello from '@/hooks/useHello'

const Container = styled.div`
  background-color: red;
`

interface HomePageProps {}

const Home: NextPage<HomePageProps> = () => {
  const { text } = useHello()
  return (
    <Container>
      <Anchor href={'https://naver.com'} text={text} />
    </Container>
  )
}

export default Home

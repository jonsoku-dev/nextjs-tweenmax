/*
 * Copyright (c) 2021 LINE Corporation. All rights reserved.
 * LINE Corporation PROPRIETARY/CONFIDENTIAL. Use is subject to license terms.
 */

import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

export interface ParallaxProps {}

const Parallax: React.FC<ParallaxProps> = () => {
  const [per, setPer] = useState(0)
  const [scrollTop, setScrollTop] = useState(0)

  useEffect(() => {
    const handler = () => {
      const _scrollTop = document.documentElement.scrollTop
      const per = Math.ceil(
        (_scrollTop / (document.body.scrollHeight - window.outerHeight)) * 100
      )
      setPer(per)
      setScrollTop(_scrollTop)
    }
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <Container>
      <FullBar>
        <ActiveBar per={per} />
      </FullBar>
      <IconWrapper
        style={{
          transform: `translateY(-${scrollTop / 3.5}px)`,
        }}
      >
        {Array.from({ length: 9 }).map((i, k) => (
          <Icon key={k} />
        ))}
      </IconWrapper>
      <IconWrapper2
        style={{
          transform: `translateY(-${scrollTop / 2}px)`,
        }}
      >
        {Array.from({ length: 9 }).map((i, k) => (
          <Icon key={k} />
        ))}
      </IconWrapper2>
      {Array.from({ length: 13 }).map((i, k) => (
        <Section key={k}>
          <Title>Title {k + 1}</Title>
          <Span>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Asperiores, consequuntur cupiditate deserunt dolores eaque esse est
            excepturi facilis hic in iusto odio perspiciatis rem. Architecto ea
            labore laborum maxime mollitia. Accusantium aspernatur assumenda at
            autem, beatae culpa delectus dolores dolorum eum exercitationem
            explicabo harum hic iure iusto maiores maxime minus molestiae non
            nostrum praesentium quia quod, repellendus reprehenderit veniam,
            voluptates. Ad adipisci alias atque autem, beatae consequuntur
            debitis dolore dolorem doloremque, facere, magnam modi qui quidem
            sed vero? Cum dignissimos doloremque facere laborum nisi officia
            quas quos ratione rem! Consequatur. Ab amet eveniet laborum nam nemo
            nihil numquam possimus quos repudiandae unde! Fugiat fugit non
            officiis omnis rem. Ab ad cum deleniti eligendi ipsum libero
            necessitatibus nemo quibusdam recusandae voluptatum! Ad, aspernatur
            cupiditate delectus deleniti doloremque dolores ex explicabo fuga
            inventore officiis porro, quae quam quibusdam ratione repellat saepe
            soluta suscipit. Asperiores atque cupiditate doloribus expedita
            mollitia! Delectus, illum, velit. Accusantium ad alias aliquam, at
            autem, blanditiis earum est fuga fugiat harum id in magnam magni
            minus molestias nesciunt pariatur quaerat, quibusdam quod rem saepe
            sapiente sequi sint veritatis vitae! Ab adipisci commodi, dicta,
            earum illo libero nam non odio pariatur quidem totam, veniam
            voluptate! Dolorem laboriosam quas saepe voluptates. Aspernatur
            atque facere fugiat fugit obcaecati odio quidem tenetur unde!
            Aliquam autem sed tempore ut. Alias amet autem, consectetur et eum
            explicabo facilis id incidunt modi nulla, officiis placeat quam
            tenetur vel velit veniam vitae voluptate? A eveniet neque ut.
            Commodi dolorem error explicabo id iusto obcaecati, perspiciatis
            repudiandae sapiente totam vel. Ad aliquid animi, consequuntur
            deleniti deserunt eius error nemo perferendis quis recusandae
            reprehenderit repudiandae soluta temporibus, tenetur veritatis!
            Adipisci atque commodi consequuntur fugiat labore laudantium maiores
            molestias, neque pariatur possimus quam quibusdam, repellat totam
            voluptatem voluptates! Fugiat ipsa magni nostrum sequi totam.
            Accusantium atque dolor in quidem rem!
          </Span>
        </Section>
      ))}
    </Container>
  )
}

export default Parallax

const Container = styled.div`
  height: 10000px;
  background: linear-gradient(
    150deg,
    red,
    orange,
    yellow,
    green,
    skyblue,
    blue,
    purple
  );
`

const FullBar = styled.div`
  height: 140px;
  width: 5px;
  background-color: black;
  position: fixed;
  left: 20px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
`
const ActiveBar = styled.div<{ per: number }>`
  height: ${(props) => props.per}%;
  width: 5px;
  background-color: yellow;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 11;
  transition: width 0.2s ease;
`

const IconWrapper = styled.div`
  position: fixed;
`

const IconWrapper2 = styled.div`
  position: fixed;
  top: -200px;
  left: 700px;
  z-index: 1000;
`
const Icon = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 320px;
  height: 180px;
  border-radius: 50%;
  background-color: #eee;

  &:nth-of-type(1) {
    top: 300px;
    left: 500px;
  }

  &:nth-of-type(2) {
    top: 800px;
    left: 0px;
  }

  &:nth-of-type(3) {
    top: 1800px;
    left: 400px;
  }

  &:nth-of-type(4) {
    top: 3000px;
    left: -100px;
  }

  &:nth-of-type(5) {
    top: 4200px;
    left: 500px;
  }

  &:nth-of-type(6) {
    top: 5900px;
    left: -140px;
  }

  &:nth-of-type(7) {
    top: 7000px;
    left: 500px;
  }

  &:nth-of-type(8) {
    top: 8000px;
    left: -190px;
  }

  &:nth-of-type(9) {
    top: 9500px;
    left: 600px;
  }
`

const Section = styled.section`
  position: relative;
  width: 400px;
  background-color: black;
  margin: 30px auto;
  padding: 20px;
  z-index: 100;
`
const Title = styled.h2`
  color: #fff;
`
const Span = styled.span`
  color: #555;
`

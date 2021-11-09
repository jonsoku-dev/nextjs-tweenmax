/*
 * Copyright (c) 2021 LINE Corporation. All rights reserved.
 * LINE Corporation PROPRIETARY/CONFIDENTIAL. Use is subject to license terms.
 */

import { gsap, Power3, Power4 } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

export interface GsapCard1Props {}

const isBrowser = process.browser

if (isBrowser) {
  gsap.registerPlugin(ScrollTrigger)
}

const cardData = [
  { id: 1, name: 'FIRST CARD' },
  { id: 2, name: 'CARD' },
  { id: 3, name: 'CARD' },
  {
    id: 4,
    name: 'CARD',
  },
  { id: 5, name: 'LAST CARD' },
]

const GsapCard1: React.FC<GsapCard1Props> = () => {
  const itemsRef = useRef<(HTMLDivElement | null)[]>([])
  const [windowWidth, setWindowWidth] = useState(
    isBrowser ? window.innerWidth : 0
  )
  const [windowHeight, setWindowHeight] = useState(
    isBrowser ? window.innerHeight : 0
  )

  const handleResize = useCallback(() => {
    setWindowWidth(window.innerWidth)
    setWindowHeight(window.innerHeight)
  }, [])

  const resetHandler = useCallback(() => {
    const gap = 40
    cardData.forEach((item, i) => {
      gsap.to(itemsRef.current[i], 1, {
        top: windowHeight / 2 - i * gap, // 처음 값을 지정한다. 아래로 내려감. 0부터 length 값까지 top 까지 증가하여 카드들이 떨어져있는것처럼 보이게 된다.
        left: windowWidth / 2 + (i * gap - gap * cardData.length),
        rotation: 0,
        ease: Power3.easeInOut,
        delay: i * 0.2,
      })
    })
  }, [windowWidth, windowHeight])

  const randomHandler = useCallback(() => {
    cardData.forEach((item, i) => {
      gsap.to(itemsRef.current[i], 1, {
        top: Math.random() * windowHeight * 0.8,
        left: Math.random() * windowWidth * 0.8,
        rotation: Math.random() * 180,
        ease: Power4.easeInOut,
        delay: i * 0.1,
      })
    })
  }, [windowHeight, windowWidth])

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [handleResize])

  useEffect(() => {
    if (isBrowser) {
      resetHandler()
    }
  }, [windowHeight, windowWidth])

  return (
    <>
      <CardWrapper>
        {cardData.map((card, i) => (
          <CardItem key={card.id} ref={(el) => (itemsRef.current[i] = el)}>
            {card.name}
          </CardItem>
        ))}
      </CardWrapper>
      <ButtonWrapper>
        <RandomButton type="button" onClick={randomHandler}>
          Random
        </RandomButton>
        <ResetButton type="button" onClick={resetHandler}>
          Reset
        </ResetButton>
      </ButtonWrapper>
    </>
  )
}

export default GsapCard1

const CardWrapper = styled.section`
  position: relative;
  height: 100vh;
  width: 100vw;
`

const CardItem = styled.div`
  position: absolute;
  width: 200px;
  height: 110px;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 5px 5px 12px rgba(0, 0, 0, 0.3);

  font-size: 1rem;
  text-align: right;
  color: rgba(255, 255, 255, 0.5);

  &:nth-child(1) {
    background: linear-gradient(62deg, #fbab7e, #f7ce68);
  }

  &:nth-child(2) {
    background: linear-gradient(20deg, #ff5e7e, #ff99ac);
  }

  &:nth-child(3) {
    background: linear-gradient(160deg, #0093e9, #80d0c7);
  }

  &:nth-child(4) {
    background: linear-gradient(40deg, #fd1d1d, #833ab4);
  }

  &:nth-child(5) {
    background: linear-gradient(20deg, black 0%, #fc00ff 100%);
  }
`

const ButtonWrapper = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
`
const CommonButton = styled.button`
  position: relative;
  z-index: 100;
  margin: 0 5px;
  background: black;
  color: #fff;
  padding: 8px 20px;
  transition: all 0.3s ease-out;

  &:hover {
    background-color: #970000;
  }
`
const RandomButton = styled(CommonButton)``
const ResetButton = styled(CommonButton)``

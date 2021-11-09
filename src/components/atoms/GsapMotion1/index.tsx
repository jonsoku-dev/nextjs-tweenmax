/*
 * Copyright (c) 2021 LINE Corporation. All rights reserved.
 * LINE Corporation PROPRIETARY/CONFIDENTIAL. Use is subject to license terms.
 */

import { gsap, Power3, Power4 } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

export interface GsapMotion1Props {}

const totalNum = 100
const isBrowser = process.browser

if (isBrowser) {
  gsap.registerPlugin(ScrollTrigger)
}

const dummyData = Array.from({ length: totalNum })

const GsapMotion1: React.FC<GsapMotion1Props> = () => {
  const itemsRef = useRef<(HTMLDivElement | null)[]>([])
  const titleRef = useRef<HTMLHeadingElement | null>(null)
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

  const no1Handler = useCallback(() => {
    console.log(windowWidth, windowHeight)
    dummyData.forEach((item, i) => {
      gsap.killTweensOf(itemsRef.current[i])
      gsap.to(itemsRef.current[i], 1, {
        top: Math.random() * (windowHeight - 150) + 60,
        left: Math.random() * (windowWidth - 80) + 20,
        rotationX: 0,
        rotationY: 0,
        rotationZ: 0,
        autoAlpha: 'random(.1,1)',
        scale: 1,
        ease: Power4.easeInOut,
        delay: 'random(0,.5)',
      })
    })
  }, [windowHeight, windowWidth])

  const no2Handler = useCallback(() => {
    const scaleNum = Math.random() * 3
    dummyData.forEach((item, i) => {
      gsap.killTweensOf(itemsRef.current[i])
      gsap.to(itemsRef.current[i], 1, {
        top: Math.random() * (windowHeight - 250) + 100,
        left: Math.random() * (windowWidth - 200) + 80,
        rotationX: 'random(-60,60)',
        rotationY: 'random(-60,60)',
        rotationZ: 'random(-90,90)',
        autoAlpha: scaleNum / 3,
        scale: scaleNum, //"random(.1,2.5)",
        //webkitFilter:"blur(" + scaleNum / 3 + "px)",
        ease: Power4.easeInOut,
        delay: 'random(0,.5)',
      })
    })
  }, [windowHeight, windowWidth])

  const no3Handler = useCallback(() => {
    dummyData.forEach((item, i) => {
      gsap.killTweensOf(itemsRef.current[i])
      gsap.to(itemsRef.current[i], 1, {
        top: windowHeight / 2 + Math.sin(i / 3) * 40,
        left: i * 20, //windowWidth / 2 ,
        rotationX: 0,
        rotationY: 0,
        rotationZ: 0,
        autoAlpha: 1,
        scale: 0.5,
        ease: Power4.easeInOut,
        delay: 'random(0,.5)',
      })
    })
  }, [windowHeight, windowWidth])

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [handleResize])

  useEffect(() => {
    if (isBrowser) {
      no1Handler()
    }
  }, [windowHeight, windowWidth])

  useEffect(() => {
    gsap.from(titleRef.current, 1, {
      top: -50,
      autoAlpha: 0,
      ease: Power3.easeOut,
    })
  }, [])

  return (
    <Container>
      <Title ref={titleRef}>Tamastudy</Title>
      <TextWrapper>
        {dummyData.map((item, i) => (
          <TextItem
            key={i}
            ref={(el) => (itemsRef.current[i] = el)}
            top={windowHeight / 2}
            left={windowWidth / 2}
          >
            {i}
          </TextItem>
        ))}
      </TextWrapper>
      <ButtonWrapper>
        <CommonButton onClick={no1Handler} type="button">
          NO 1
        </CommonButton>
        <CommonButton onClick={no2Handler} type="button">
          NO 2
        </CommonButton>
        <CommonButton onClick={no3Handler} type="button">
          NO 3
        </CommonButton>
      </ButtonWrapper>
    </Container>
  )
}

export default GsapMotion1

const Container = styled.div`
  background-color: #b9b9b9;
`

const Title = styled.h1`
  position: fixed;
  text-align: center;
  width: 100%;
  font-weight: 800;
  font-size: 40px;
`

const TextWrapper = styled.section`
  position: relative;
  height: 100vh;
  width: 100vw;
`

const TextItem = styled.div<{ top?: number; left?: number }>`
  position: absolute;
  font-size: 2rem;
  text-align: right;
  color: #fff;

  top: ${(props) => props.top ?? 0}px;
  left: ${(props) => props.left ?? 0}px;
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

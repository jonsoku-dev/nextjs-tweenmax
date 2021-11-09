/*
 * Copyright (c) 2021 LINE Corporation. All rights reserved.
 * LINE Corporation PROPRIETARY/CONFIDENTIAL. Use is subject to license terms.
 */

import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

export interface Progress2Props {}

const Progress2: React.FC<Progress2Props> = () => {
  const [per, setPer] = useState(0)

  useEffect(() => {
    const handler = () => {
      const _scrollTop = document.documentElement.scrollTop
      const per = Math.ceil(
        (_scrollTop / (document.body.scrollHeight - window.outerHeight)) * 100
      )
      setPer(per)
    }
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <Container>
      <FullBar>
        <ActiveBar per={per}></ActiveBar>
      </FullBar>
    </Container>
  )
}

export default Progress2

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

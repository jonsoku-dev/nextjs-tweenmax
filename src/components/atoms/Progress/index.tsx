/*
 * Copyright (c) 2021 LINE Corporation. All rights reserved.
 * LINE Corporation PROPRIETARY/CONFIDENTIAL. Use is subject to license terms.
 */

import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

export interface ProgressProps {}

const Progress: React.FC<ProgressProps> = () => {
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

export default Progress

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
  height: 5px;
  width: 100%;
  background-color: black;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 10;
`
const ActiveBar = styled.div<{ per: number }>`
  height: 5px;
  width: ${(props) => props.per}%;
  background-color: yellow;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 11;
  transition: width 0.2s ease;
`

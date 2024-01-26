import { useState } from 'react'
import Template from './Template'
import GlobalStyle from './GlobalStyles'
import VerticalGraphBar from './VerticalGraphBar'

function App() {

  const verticalGraphData = [
    {title: "Transporte", value: 156326.26, target: 200000},
    {title: "Vida", value: 201978.64, target: 200000},
    {title: "RE Regulação", value: 15463.97, target: 300000},
    {title: "RE Sindicancia", value: 42467.29, target: 80000},
    {title: "Automóvel", value: 32658.78, target: 70000},
  ];

  return (
    <>
      <GlobalStyle />
      <VerticalGraphBar title="Metas" data={verticalGraphData} />
    </>
  )
}

export default App

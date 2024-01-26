import { VerticalGraphBarWrapper, ItemWrapper } from "./Styles"

function VerticalGraphBar({ title, data }){

  let tempdata = data[0]

  return(
    <VerticalGraphBarWrapper>
      <header>
        <h1>{title}</h1>
      </header>
      <main>
        <ItemWrapper>
          <p className="item-name">{tempdata.title}</p>
          <div className="progress-wrapper">
            <div className="progress-bar"></div>
          </div>
          <section className="values">
            <p className="current-value">{tempdata.value}</p>
            <p className="target-value">{tempdata.target}</p>
          </section>
        </ItemWrapper>
      </main>
    </VerticalGraphBarWrapper>
  )
}

export default VerticalGraphBar;
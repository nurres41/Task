import "./gameBox.scss"

const GameBox = ({thumb,name}) => {
  return (
    <div className="gameBox" >
        <div>
          <img src={thumb} alt="slotGame"/>
        </div>
        <p>
          {name}
        </p>
    </div>
  )
}

export default GameBox

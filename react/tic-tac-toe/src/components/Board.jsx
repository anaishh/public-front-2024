
import Square from './Square.jsx'

export default function Board ({values, handleClick}) {
    return (
        <div className="board">
            {values.map ((item, index) => 
                 <Square key={index} handleClick={() =>handleClick(index)}>{item}</Square>
            )}
        </div>
    )
       
       
}
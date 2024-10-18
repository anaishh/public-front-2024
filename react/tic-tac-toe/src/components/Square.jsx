

export default function Square ({children, handleClick}) {
    return (<button className = 'square' onClick={handleClick}>{children}</button>)
}
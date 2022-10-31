import React,{useState} from 'react'

const Category = ( {src} : {src: string } ) => {

    const [isHovering, setIsHovering] = useState(false);

    const handleMouseEnter = () => {
      setIsHovering(true);
    }
  
    const handleMouseLeave = () => {
      setIsHovering(false);
    }

  return (
        <div className='category'>
                <img onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{
                  border: isHovering ? '3px solid black' : ''
                }} height={80} width={80} src={src} alt="" />
        </div>   
  )
}

export default Category
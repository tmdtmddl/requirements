import PropType from 'prop-types'
import { useState } from 'react';



const RItem = ({r,index}) => {
    const [isEditing, setIsEditing]= useState(flase)
    const onStart =()=>setIsEditing(true)
    const onCancel =()=>setIsEditing(false)

    const onDelete =()=>setRequi
    
  return{requirements.map((r, index) => {
    return (
      {
        isEditing ?( <RForm>)
      }
    );
  })}
}

export default RItem



RItem.PropTypes ={
    r: PropType.shape({
        id:PropType.string,
        funcName:PropType.string,
        funcPage:PropType.string,
        staus:PropType.string,
        details:PropType.arrayOf(PropType.string)



    })
}
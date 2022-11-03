import React from 'react'

interface Iuser{
    id: number,
    address: string,
    name: string,
    age: number
}

interface Iprops{
    userprop: Iuser
}

function ItemUser(props : Iprops ) {
    const {userprop} = props;
  return (
    <>
        <p>{userprop.address}</p>
        <p>{userprop.name}</p>
        <p>{userprop.age}</p>
    </>
  )
}



export default ItemUser
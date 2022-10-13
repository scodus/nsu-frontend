import React from 'react'

const bodyContainer = {
    background: "linear-gradient(180deg, #000032 0%, #171720 100%)"
}

function Teams() {
  return (
    <div className='other-body-container' style={bodyContainer}>
        
        <div className="team-member big-container">
            <div className="team-member-title text-center">
                <h1 className='color-white' style={{paddingBottom : '1.1rem'}}>TEAM MEMBERS</h1>
                <p className='font-size-15' >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi reprehenderit vero iure unde. Consectetur saepe numquam architecto, accusantium perferendis id.</p>
            </div>
            <div className="team-member-information">

            </div>
        </div>

    </div>
  )
}

export default Teams;
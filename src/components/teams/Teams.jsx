import React from 'react'
import {motion} from 'framer-motion';

const bodyContainer = {
    background: "linear-gradient(180deg, #000032 0%, #171720 100%)",
    paddingLeft : "15.7rem",
    paddingRight : "15.7rem"
}

function Teams() {
    return (
        <div className='other-body-container' style={bodyContainer}>

            <div className="team-member">
                <div className="team-member-title text-center">
                    <h1 className='color-white h1-small font-family-gravedigger' style={{ paddingBottom: '1.1rem' }}>TEAM MEMBERS</h1>
                    <motion.p initial = {{opacity:0}} animate = {{opacity:1}}  transition={{ delay : 0.30,duration : 0.75}} className='font-size-15 small-height-padding color-grayscale300' >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi reprehenderit vero iure unde. Consectetur saepe numquam architecto, accusantium perferendis id.</motion.p>
                </div>
                <motion.div initial = {{opacity:0}} animate = {{opacity:1}}  transition={{ delay : 0.60,duration : 0.75}} className="team-member-information">
                    <div className="team-member-informations">
                        <div className="info-images">
                            <img src="https://picsum.photos/500/500" alt="" />
                        </div>
                        <div className="info-user-details">
                            <h3 className='text-center pb-05 pt-17 font-size-12' >Ram Sharma Karki</h3>
                            <h3 className='font-size-10 text-center'>Chief Guest</h3>
                        </div>
                    </div>

                    <div className="team-member-informations">
                        <div className="info-images">
                            <img src="https://picsum.photos/500/500" alt="" />
                        </div>
                        <div className="info-user-details">
                            <h3 className='text-center pb-05 pt-17 font-size-12' >Ram Sharma Karki</h3>
                            <h3 className='font-size-10 text-center'>Chief Guest</h3>
                        </div>
                    </div>

                    <div className="team-member-informations">
                        <div className="info-images">
                            <img src="https://picsum.photos/500/500" alt="" />
                        </div>
                        <div className="info-user-details">
                            <h3 className='text-center pb-05 pt-17 font-size-12' >Ram Sharma Karki</h3>
                            <h3 className='font-size-10 text-center'>Chief Guest</h3>
                        </div>
                    </div>

                    <div className="team-member-informations">
                        <div className="info-images">
                            <img src="https://picsum.photos/500/500" alt="" />
                        </div>
                        <div className="info-user-details">
                            <h3 className='text-center pb-05 pt-17 font-size-12' >Ram Sharma Karki</h3>
                            <h3 className='font-size-10 text-center'>Chief Guest</h3>
                        </div>
                    </div>

                    <div className="team-member-informations">
                        <div className="info-images">
                            <img src="https://picsum.photos/500/500" alt="" />
                        </div>
                        <div className="info-user-details">
                            <h3 className='text-center pb-05 pt-17 font-size-12' >Ram Sharma Karki</h3>
                            <h3 className='font-size-10 text-center'>Chief Guest</h3>
                        </div>
                    </div>


                </motion.div>
            </div>

        </div>
    )
}

export default Teams;
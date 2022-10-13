import React from 'react'

const bodyContainer = {
    background: "linear-gradient(180deg, #000032 0%, #171720 100%)",
    paddingLeft: "15.7rem",
    paddingRight: "15.7rem"
}

function PanelList() {
    return (
        <div className='other-body-container' style={bodyContainer} >
            <div className="team-member">
                <div className="team-member-title text-center">
                    <h1 className='color-white h1-small font-family-gravedigger' style={{ paddingBottom: '1.1rem' }}>PANEL LIST</h1>
                </div>
            </div>

            <div className="team-member-information">
                <div className="team-member-informations">
                    <div className="info-images panel-images">
                        <img src="https://picsum.photos/500/500" alt="" />
                    </div>
                    <div className="info-user-details">
                        <h3 className='text-center pb-05 pt-17 font-size-12' >Ram Sharma Karki</h3>
                        <h3 className='font-size-10 text-center'>Chief Guest</h3>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default PanelList
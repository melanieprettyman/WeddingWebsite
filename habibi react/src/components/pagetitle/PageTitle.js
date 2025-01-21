import React from 'react'
import banner from '../../images/banner.png';

const PageTitle = (props) => {
    console.log(`${props.content}`)
    return(
        <section
            className="wpo-page-title"
            style={{
                backgroundImage: `url(${banner})`,
            }}
        >
            <div className="container">
                <div className="row">
                    <div className="col col-xs-12">
                        <div className="wpo-breadcumb-wrap">
                            <h2>{props.pageTitle}</h2>
                            <p className="wpo-breadcumb-wrap">{props.content}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PageTitle;
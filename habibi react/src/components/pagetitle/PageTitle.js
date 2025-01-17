import React from 'react'
import { Link } from 'react-router-dom'

const PageTitle = (props) => {
    return(
        <section className="wpo-page-title">
            <div className="container">
                <div className="row">
                    <div className="col col-xs-12">
                        <div className="wpo-breadcumb-wrap">
                            <h2>{props.pageTitle}</h2>
                            <p className="wpo-breadcumb-wrap">
                                For our wedding, the theme is "Outdo the Bride", and we’re encouraging guests to bring their most show-stopping looks. Think bold, glamorous, and unforgettable—this is your chance to dress to impress and have fun with fashion!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PageTitle;
import React from "react";
import { Slide } from "react-awesome-reveal";
import SectionTitle from "../SectionTitle";
import timg1 from '../../images/team/img-5.jpg'
import timg2 from '../../images/team/img-6.jpg'
import timg3 from '../../images/team/img-7.jpg'
import timg4 from '../../images/team/img-8.jpg'


const Brides = [
  {
    id: '1',
    tImg: timg1,
    name: 'Jenny Wilson',
    title: 'Bridesmaid',
    animation: '1000',
  },
  {
    id: '2',
    tImg: timg2,
    name: 'Robert Fox',
    title: 'Groomsmen',
    animation: '1200',
  },
  {
    id: '3',
    tImg: timg3,
    name: 'Annette Black',
    title: 'Bridesmaids',
    animation: '1400',
  },
  {
    id: '4',
    tImg: timg4,
    name: 'Jenefer Abram',
    title: 'Groomsmen',
    animation: '1600',
  }
]

const BrideGrooms2 = (props) => {
  return (
    <section className="wpo-team-section-s2 section-padding pt-0">
      <div className="container">
        <SectionTitle subTitle={'Important Persons'} MainTitle={'Bridesmaids & Groomsmen'} />
        <div className="wpo-team-wrap">
          <div className="row">
            {Brides.slice(0, 8).map((Bride, tm) => (
              <div className="col col-lg-3 col-md-6 col-sm-6 col-12" key={tm}>
                <Slide direction="up" duration={Bride.animation} triggerOnce="true">
                  <div className="wpo-team-item">
                    <div className="wpo-team-img-wrap">
                      <div className="wpo-team-img">
                        <div className="wpo-team-img-inner">
                          <img src={Bride.tImg} alt="" />
                        </div>
                      </div>
                    </div>
                    <div className="wpo-team-text">
                      <h3>{Bride.name}</h3>
                      <span>{Bride.title}</span>
                    </div>
                  </div>
                </Slide>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

  )
}

export default BrideGrooms2;
import React from 'react';
import './dashboard.css';
import project1 from './project1.png';
import project2 from './project2.jpg';
import project3 from './project3.jpg';
import cc from './cc.png';

const carbon_balance = 32;

const recentTran = [
  {
    id: 1,
    date: "Sunset",
    desc: "Each character will appear one by one",
    keyword : "okay",
  },
  {
    id: 2,
    date: "Dog",
    desc: "Each character will appear one by one",
    keyword : "hello",
  },
  {
    id: 3,
    date: "Sunrise",
    desc: "Each character will appear one by one",
    keyword : "done",
  },
];

const projects = [
  {
    id: 1,
    carboncredits: 50,
    type: "Positive",
    desc: "Each character will appear one by one",
    img : project1
  },
  {
    id: 2,
    carboncredits: 30,
    type: "Negative",
    desc: "Each character will appear one by one",
    img : project2
  },
  {
    id: 3,
    carboncredits: 100,
    type: "Neutral",
    desc: "Each character will appear one by one",
    img : project3
  },
];

const Dashboard = () => { 
  return (
    <div className='dashpage'>
      <div className="dash-wrap">
        <h1>Dashboard</h1>
        <br />
        <div className='topic'> 
          
          
        </div>
        <h2>Recent Transactions</h2>
        <div className="rate-tran">
          <div className='recent-tran'>
          {recentTran.map(({ id, date, desc, keyword }) => {
              return(<div className='tran'>
                <p>Transaction Id : {id}</p>
                <br />
                <p>Date : {date}</p>
                <br />
                <p>Description : {desc}</p>
                <br />
                <p>Keyword : {keyword}</p>
              </div>
              )
            })
          }           
          </div>
          <div className='ratecc'>
            <div className='container'>
              <h2>Balance</h2>
              <div className='balance'>
                <img src={cc} alt="Carbon-credits:" />
                <br />
                <h3 className='value'> = {carbon_balance}</h3>
              </div>
            </div>
          </div>
        </div>
        <br />
        <h2>Projects</h2>
        <div className='projects'>
          {projects.map(({ id, img, carboncredits, type, desc }) => {
                return(<div className='pn'>
                  <p>Company Id : {id}</p>
                  <br />
                  <p>Carbon Credits : {carboncredits}</p>
                  <br />
                  <p>Type Of Project : {type}</p>
                  <br />
                  <p>Description : {desc}</p>
                  <img src={img} alt="project-image" />
                </div>
                )
              })
            }
        </div>
      </div>
    </div>
  )
}

export default Dashboard;
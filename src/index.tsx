import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Proview } from './Proview';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const proviewConfiguration = {
  proviewUrl: "https://cdn.proview.io/v7/init.js",
  proviewToken: process.env.REACT_APP_PROVIEW_TOKEN!,
  profileId: "p-"+Math.random(),
  sessionId: "s-"+Math.random(),
  sessionTitle: "Sample Proview Application",
  sessionType:  "ai_proctor"
}


root.render(
  // <React.StrictMode>
    <Proview proviewConfiguration={proviewConfiguration}/>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import React , {useState} from 'react';
import './App.css';
import InviteFriends from './components/InviteFriends/InviteFriends';
import SmallHeader from './components/Header/SmallHeader';
import {IntlProvider, FormattedMessage} from 'react-intl';
import messages from './lang';


function App() {
 
  const [local , setLocal] = useState('en');

  const handleChange = (e) => {
    setLocal(e.target.value);
  }

  return (
    <div className="App">
      {/* <select onChange={handleChange} defaultValue={local}>
        <option>en</option>
        <option>fa</option>
      </select> */}
      <SmallHeader ChangeLang={handleChange} defaultValue={local} />
      <IntlProvider locale={local} messages={messages[local]}>
        <InviteFriends />
      </IntlProvider >

    </div>
  );
}

export default App;

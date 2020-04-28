import React from 'react';
import logo from './logo.svg';
import './App.css';

import Message from './Message';
import Person from './Person';
import Post from './Post';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Post
          title="5 redenen waarom jij moet kiezen voor Grafische en Digitale Media"
          synopsis="Ben je nog niet volledig overtuigd waarom je moet kiezen voor de opleiding Grafische en Digitale Media aan Arteveldehogeschool? Lees dan snel verder, want derdejaarsstudent Arjan helpt jou de knoop doorhakken."
          author={{
            name: "Philippe",
            picture: "https://scontent-bru2-1.xx.fbcdn.net/v/t1.0-9/42580828_10214673932035654_3017264055002857472_n.jpg?_nc_cat=104&_nc_sid=85a577&_nc_oc=AQnltteq4Yyiw4kT7ciu5J0RKUwgtc0ndKi5hWCm4JHAGzCVGCYl9YgTfFMDjEupNwU&_nc_ht=scontent-bru2-1.xx&oh=6e57d7c0bc89a198abfc8c63b6faa79a&oe=5ECCCFAB"
          }}
         />
        <Post
          title="Herlinde Derycke wint de Febelgra-prijs 2019"
          synopsis="Studente Herlinde Derycke, afgestudeerd in de afstudeerrichting Grafimediabeleid, wint de Febelgra-prijs 2019. Die is uitgereikt op de proclamatieviering 5 oktober 2019 in Gent. Febelgra, de beroepsvereniging van de Belgische grafische industrie, reikt elk jaar de Febelgra-prijs uit aan een student wie uitzonderlijk werk heeft geleverd tijdens zijn of haar studie en uitblonk als ambassadeur is voor de grafische sector."
          author={{
            name: "Lisa",
            picture: "https://dl.airtable.com/.attachments/8216307230f675f3fa6eb2aa90474c67/7ff726d6/lisa.jfif"
          }}
         />
        <Message msg="Greetings Earthling. I am Borg!" createdAt={new Date().toUTCString()} />
        <Person fullName="Philippe" age={37} length={1.72} weight={54} />
        <Person fullName="Lester" age={5} length={1.08} weight={16.8}  />
        <Person fullName="Linus" age={37} length={1.27} weight={23}  />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

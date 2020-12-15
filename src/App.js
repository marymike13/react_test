
import './App.css';
import Photogallery from './data/photos.json';

import CardDeck from "react-bootstrap/CardDeck";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <p>
         Mary Michael
        </p>
      </header>
      <mainContent>
      <Container fluid={true}>
					<Row>
						<CardDeck>
      {Photogallery.map((albumDetail, index)=> {
return (

<Card key={albumDetail.id}>
 <a href={albumDetail.url} target="_blank" rel="noreferrer"><Card.Img variant="top" src={albumDetail.thumbnailUrl} /></a>
<h1>{albumDetail.title}</h1> 
</Card>
)
} ) }
</CardDeck>
					</Row>
				</Container>
      </mainContent>
    </div>
  );
}

export default App;

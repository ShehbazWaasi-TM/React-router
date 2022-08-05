import {React,useState,useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Myblog = () => {
  const [apiData, setApiData] = useState(null);
  const fetchApi = async() => {
    const res = await fetch("http://localhost:3001/blog")
    const data = await res.json()
    console.log(data)
    setApiData(data)
  }
  useEffect(()=>{
    fetchApi()
  },[])
  return (
    <div>
        <h1 className="text-center text-primary">My Blog</h1>
        <Link to="/Create"><Button className="btn" variant="primary">Create</Button></Link>
        <div>
        <Row sm={1} md={5} className="g-4 m-2">
           {apiData && apiData.map((item) => {
             return <Col key={item.id}>
          <Card>
         <Link to={`/blog/${item.id}`}> 
            <Card.Img variant="top" src={item.url} className="p-3" />
          </Link>
            <Card.Body>
              <Card.Title>{item.title}</Card.Title></Card.Body>
          </Card>
        </Col>
          })}
           </Row>
        </div>
    </div>
  )
}

export default Myblog
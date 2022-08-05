import {React,useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router-dom"

const Create = () => {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  let navigate = useNavigate();
  const handleSubmit =async (e) =>{
    e.preventDefault()
      const data = {
        title,
        url
      }
      await fetch('http://localhost:3001/blog', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body : JSON.stringify(data) 
    })
    .then(function (response) {
      console.log(response);
      navigate('/')
    })
      .catch(function (error) {
        console.log(error);
      });
  }
  return (
    <div>
        <h1 className='text-center'>Create a Blog </h1>
        <Form onSubmit={handleSubmit} className="w-50">
          <Form.Group className="mb-3">
            <Form.Label>Blog Titile</Form.Label>
            <Form.Control type="text" placeholder="Enter Title" value={title} onChange={(e) => setTitle(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>URL</Form.Label>
            <Form.Control type="url" placeholder="Enter Url" value={url} onChange={(e) => setUrl(e.target.value)} />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
    </div>
    
  )
}

export default Create
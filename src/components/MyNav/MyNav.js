import {React ,useState , useEffect} from 'react'
import { Nav,Navbar,Container, Button ,Modal,Form} from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import ReactStars from 'react-stars'
import './MyNav.css'
const MyNav = ({search, setSearch,stars,setStars,movies,setMovies}) => {
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [newMovie,setNewmovie]=useState({
    id: uuidv4(),
    title: "",
    posterUrl:"",
    description:"",
    rating:1
  })
  const handleInput =(e)=>{
    setNewmovie({...newMovie,[e.target.name]:e.target.value})
    
  }
  const handleSave =()=>{
    setMovies([...movies, newMovie])
    handleClose()
    console.log(newMovie)
  }
  const handleSearch=(e)=>{
   setSearch(e.target.value)
    console.log(search,"in the handle search")
  }



  const ratingChanged = (newRating) => {
    setStars(newRating)
  }
  return (
   <Navbar className='mynavvv' >
    <Container>
      <Navbar.Brand href="#home" style={{marginRight:"25%"}}>Movie </Navbar.Brand>
      <Nav className="me-auto" >
        <input className='inputauto'   type="text" placeholder='   search here...' style={{ borderRadius:"10px"}} onChange={handleSearch}/>
        <ReactStars
        className='starsrating'
        count={5}
        onChange={ratingChanged}
        half={false}
        value={stars}
        size={25}
        />
        <Button variant="success" style={{width:"125px"}} onClick={handleShow}>Add Movie</Button>
      </Nav>
    </Container>

    <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Movie Details</Modal.Title>
    </Modal.Header>
    <Modal.Body>
    <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="title..." name='title' onChange={handleInput}/>
        <Form.Label>Image Url</Form.Label>
        <Form.Control type="text" placeholder="Your Image Url..."  name='posterUrl'  onChange={handleInput}/>
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" placeholder="description..."  name='description'  onChange={handleInput}/>
        <Form.Label>Rate</Form.Label>
        <Form.Control type="number" name='rating'  onChange={handleInput} defaultValue={1} />
    </Form.Group>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Close
      </Button>
      <Button variant="warning" onClick={handleSave} >
        Save Changes
      </Button>
    </Modal.Footer>
  </Modal>
  </Navbar>
   
   
   
   
    
  )
}

export default MyNav
import {Form,Button} from 'react-bootstrap';

const ReviewForm = () => {
  return (

    <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Write a review</Form.Label>
            <Form.Control />
        </Form.Group>
        <Button variant="outline-info" >Submit</Button>
    </Form>   

  )
}

export default ReviewForm
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
import './task.css';

export default function TaskCard({ready}){
    return (
        // <Form>
        //   <Form.Group className="mb-3" controlId="formBasicEmail">
        //     <Form.Label>Email address</Form.Label>
        //     <Form.Control type="email" placeholder="Enter email" />
        //     <Form.Text className="text-muted">
        //       We'll never share your email with anyone else.
        //     </Form.Text>
        //   </Form.Group>
    
        //   <Form.Group className="mb-3" controlId="formBasicPassword">
        //     <Form.Label>Password</Form.Label>
        //     <Form.Control type="password" placeholder="Password" />
        //   </Form.Group>
        //   <Form.Group className="mb-3" controlId="formBasicCheckbox">
        //     <Form.Check type="checkbox" label="Check me out" />
        //   </Form.Group>
        //   <Button variant="primary" type="submit">
        //     Submit
        //   </Button>
        // </Form>

        <div className="card">
            <h1>Mi primer tarea</h1>
              <span className={ready ? "bg-green" : "bg-red"}>
                {ready ? "Tarea realizada" : "Tarea pendiente"}
              </span>
        </div>
      );
}
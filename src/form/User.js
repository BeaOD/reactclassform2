import Card from 'react-bootstrap/Card';

function User(props) {

  return (
    <>
      {props.userscontact.map((item) => {

        return (
          <Card style={{ width: '18rem' }} key={item.id}>
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{item.contact}</Card.Subtitle>
              <Card.Text>
                {item.location}
              </Card.Text>
              <Card.Link href="#">Edit</Card.Link>
              <Card.Link href="#">Delete</Card.Link>
            </Card.Body>
          </Card>
        )
      })}

    </>
  );
}

export default User;
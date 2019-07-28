
import React from 'react';
import { Jumbotron, Container, Breadcrumb, BreadcrumbItem } from 'reactstrap';

const Home = (props) => {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-2">Aloha!</h1>
          <h1 className="display-5">And welcome to my landing page.</h1>
          <p className="lead">I am in the process of building out the website. In the meantime, check me out on Linkedin and Github</p>
          <hr className="my-2" />
          <p><a href='https://www.linkedin.com/in/mjanders6'>Linkedin</a> | <a href='https://github.com/mjanders6'>Github</a></p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Home;
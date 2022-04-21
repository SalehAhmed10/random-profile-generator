
import FetchButton from "./Components/FetchButton";
import { useState, Fragment } from "react";
import axios from "axios";

import '././App.css';
import './Components/styles/profile.css'
import { Spinner, Figure, Row, Col, Container, Table } from "react-bootstrap";
import Header from "./Components/Header";
import LoadingSpinner from "./Components/LoadingSpinner";




const App = () => {

  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [activeUser, setActiveUser] = useState(false);
  const [activeLink, setActiveLink] = useState(0);


  const onClickHandler = () => {
    

    setLoading(true);

    axios.get("https://randomuser.me/api/")
      .then((response) => {
        // console.log(response.data.results);
        setUserData(response.data.results)
      }).catch((error) => {
        // console.log(error);

        setLoading(true);
      }).finally(() => {
        setLoading(false);
        setActiveUser(true);

      })


      
  }


  return (
    <div className="App">
      <Header/>

      <Container className="app_head">
          <h2> Generate Random Profile </h2>
      </Container>

      <FetchButton isActive={activeUser} clicked={onClickHandler} />


      {loading ? (
        <div className="loader_spinner">
        {/* <Spinner animation="border" variant="success" /> */}
          <LoadingSpinner/>

        </div>

      ) : (
        <div className="profile_main mt-5" style={{ backgroundColor: 'white' }}>
          {userData.map((user, index) => {

            return (

              <>
                <Container>
                  <Row>
                    <Col lg={4}>

                      {/* <img src={user.picture.large} alt="" /> */}

                      <div className="profile_id">
                        <Figure>
                          <Figure.Image
                            width={200}
                            height={200}

                            src={user.picture.large}
                          />
                          <Figure.Caption>
                            {user.name.first} {user.name.last}
                          </Figure.Caption>
                        </Figure>

                      </div>
                    </Col>

                    <Col lg={8} >


                      <div className="profile_id_info" >


                        <p>  Gender : <b> {user.gender}</b>  </p>
                        <p>  Birthday : <b>{user.dob.date.slice(0, 10)} ({user.dob.age}) </b> </p>
                        <p>  Country : <b> {user.location.country} </b> </p>
                        <p>  Street : <b> {user.location.street.number} {user.location.street.name} </b> </p>
                        <p>  City, State, Zip : <b> {user.location.city}, {user.location.state}, {user.location.postcode} </b></p>
                        <p>  Mobile : <b> {user.cell} </b> </p>
                        <p>  Telephone : <b> {user.phone} </b> </p>
                      </div>


                    </Col>

                  </Row>
                 
                  <hr />

                </Container>

                

                <Container>

                  <Table striped bordered hover variant="dark">
                    <thead>
                      <tr>
                       
                        <th colSpan={3}>Basic Information</th>
                      
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                     
                        <td> Email </td>
                        <td>{user.email}</td>
                        
                      </tr>
                      <tr>
                    
                        <td>ID</td>
                        <td>  {user.id.name} {user.id.value}</td>
                        
                      </tr>
                      <tr>
                    
                    <td>Nationality</td>
                    <td>  {user.nat} </td>
                    
                  </tr>

                  <tr>
                    
                    <td>Timezone</td>
                    <td>{user.location.timezone.offset} {user.location.timezone.description}</td>
                    
                  </tr>

                  <tr>
                    
                  <td>Coordinate</td>
                    <td>{user.location.coordinates.latitude} , {user.location.coordinates.longitude}</td>
                    
                  </tr>
       
                    </tbody>

                  </Table>

                  <Table striped bordered hover variant="dark">
                    <thead>
                      <tr>
                       
                        <th colSpan={3}>User Credentials</th>
                      
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                     
                        <td> Email </td>
                        <td>{user.email}</td>
                        
                      </tr>
                      <tr>
                    
                        <td>Username</td>
                        <td>{user.login.username}</td>
                        
                      </tr>
                      <tr>
                    
                      <td>Passowrd</td>
                        <td>{user.login.password}</td>
                    
                  </tr>
       
                    </tbody>

                  </Table>
                </Container>

              </>
            )
          }
          )}

        </div>
      )
      }


    </div>
  );
}


export default App;

import React, { Component } from "react";
import { Paper, Modal } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import ModelView from "../../Model/ModelView";

class ViewRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ourRooms: false
    };
  }
  ourRooms = () => {
    this.setState({
      ourRooms: true , 
     
    });
  };
  CloseRoom = () => {
    this.setState({
      ourRooms: false
    });
  };
  render() {
    return (
      <Paper style={{ height: "250px" }}>
        <Paper
          style={{
            margin: "50px",
            height: "200px",
            backgroundImage: `url(1.jpg)`,
            backgroundPosition: "center center",
            backgroundSize: "cover",
            position: "relative",
            color: "white",
            zIndex: 1
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
              backgroundColor: "#00000077",
              zIndex: -1
            }}
          />
          <div>
            <div style={{ textAlign: "center" }}>
              <h3>Luxury Room</h3>
            </div>
            <br />
            <div style={{ textAlign: "center" }}>
              Deluxe Room Startting ar Rs.1000
            </div>
            <br />
            <div style={{ textAlign: "center" }}>
              <Button
                variant="contained"
                style={{ backgroundColor: "orange" }}
                color="succes"
                onClick={this.ourRooms}
              >
                Our Rooms
              </Button>
            </div>
          </div>
        </Paper>
        
        <ModelView open={this.state.ourRooms}>
            {/* this.state.ourRooms */}
            <div style={{width : '100%' }}>
              {/* <div style={{width : '100px' , 
              height : '100px' , 
              backgroundColor :'red' ,
              margin : '10px' , 
              float : 'left'
              }}>
                </div>
                <div style={{width : '200px' , 
              height : '100px' , 
              backgroundColor :'red' ,
              margin : '10px'}}>
                </div> */}
            <div
                style={{
                  backgroundImage: "url(1.jpg)",
                  backgroundSize: "cover",
                  height: "200px",
                  width: "200px",
                 
                  float :'left'
                }}
              />
              {/* <div
                style={{
                  backgroundImage: "url(1.jpg)",
                  backgroundSize: "cover",
                  height: "200px",
                  width: "200px" ,
                
                  
                }}
              /> */}

            
            <Button
              variant="contained"
              style={{ backgroundColor: "orange" }}
              color="succes"
              onClick={this.CloseRoom}
            >
              Close
            </Button>
          </div>
     
        </ModelView>
      </Paper>
    );
  }
}
export default ViewRoom;

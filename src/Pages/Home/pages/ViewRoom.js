import React, { Component } from "react";
import { Paper } from "@material-ui/core";
import Button from "@material-ui/core/Button";

class ViewRoom extends Component {
  render() {
    return (
      <Paper style={{ height: "250px" }}>
        <Paper
          style={{
            margin: "50px",
            height: "200px",
            backgroundImage: `url(1.jpg)` ,
            backgroundPosition : "center center" ,
            backgroundSize : "cover" , 
            position : 'relative' ,
            color : 'white' ,
            zIndex : 1
          }}
        >
        <div style={{ position : 'absolute' , top : 0 , bottom : 0 , left : 0 , right : 0 , backgroundColor : "#00000077" , zIndex : -1 }}>
          </div>
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
              <Button variant="contained" color="primary">
                Our Rooms
              </Button>
            </div>
          </div>
        </Paper>
      </Paper>
    );
  }
}
export default ViewRoom;

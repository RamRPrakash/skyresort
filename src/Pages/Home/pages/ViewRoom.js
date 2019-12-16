import React, { Component } from "react";
import { Paper } from "@material-ui/core";
import Button from "@material-ui/core/Button";


const styles = {
  paperContainer: {
    
      backgroundImage: `url(${"./../components/gala-banner.jpg"})`
  }
};
class ViewRoom extends Component {

  render() {
    let data =`url(${"./../components/1.jpg"})`
    return (
      <Paper style={{ height: "250px" }}>
        <Paper style={{ margin: "50px", height: "200px" , backgroundImage : data}}>
          <div style={styles.paperContainer}>
            <div style={{ textAlign: "center" }}><h3>Luxury Room</h3></div>
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

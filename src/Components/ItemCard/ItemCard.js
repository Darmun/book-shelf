import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import classnames from "classnames";
import Details from "./Details";
import ExpandMore from "@material-ui/icons/ExpandMore";
import IconButton from "@material-ui/core/IconButton";
import Illustration from "./Illustration.js";
import "./ItemCard.css";
import OverlayContent from "./OverlayContent.js"
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  expand: {
    transform: "rotate(180deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(0deg)"
  },
  container: {
    position: "relative",
    width: "100%"
  },
  card: {
    width: "50%"
  },
  overlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "white",
    overflow: "hidden",
    width: "100%",
    height: 0,
    transition: theme.transitions.create("height", {
      duration: theme.transitions.duration.short
    })
  },
  overlayVisible: {
    height: "100%"
  }
});

class ItemCard extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  fetchData = () => {
    const key = "AIzaSyApxdtD6sWc7fSsKZZiFb6p7b-q14yby3I";
    const apiLink = "https://www.googleapis.com/books/v1/volumes?q=";
    const author = "keyes";
    const title = "Flowers";
    const url = apiLink + title + "+inauthor:" + author + key;
    fetch(url).then(response => {
      if (response.ok) {
        return response.json();
      }
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <Card className={classes.card}>
        <div className={classes.container}>
          <Illustration info="jazda" />
          <Details author="Paolo" pages="654" published="1964" />
          <div
            className={classnames(classes.overlay, {
              [classes.overlayVisible]: this.state.expanded
            })}
          >
            <OverlayContent />
          </div>
        </div>
        <div style={{ backgroundColor: "#dce4f2" }}>
          <IconButton
            className={classnames(classes.expand, {
              [classes.expandOpen]: this.state.expanded
            })}
            onClick={this.handleExpandClick}
            aria-expanded={this.state.expanded}
            aria-label="Show more"
          >
            <ExpandMore />
          </IconButton>
        </div>
      </Card>
    );
  }
}

ItemCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ItemCard);
// AIzaSyApxdtD6sWc7fSsKZZiFb6p7b-q14yby3I klucz

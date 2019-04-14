import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from '@material-ui/core/Card';
import classnames from "classnames";
import ExpandMore from "@material-ui/icons/ExpandMore";
import IconButton from "@material-ui/core/IconButton";
import testCar from "./testImg.jpg";

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
    width: "50%",
  },
  image: {
    display: "block",
    width: "50%",
    height: "auto"
  },
  overlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#008CBA",
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

  render() {
    const { classes } = this.props;
    return (
      <Card className={classnames(classes.card)}>
        <div className={classnames(classes.container)}>
          <img src={testCar} alt="Car" className={classnames(classes.image)} />
          <div
            className={classnames(classes.overlay, {
              [classes.overlayVisible]: this.state.expanded
            })}
          >
            <div className="text">Hello shit show World</div>
          </div>
        </div>
        <div>
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

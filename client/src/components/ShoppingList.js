import { useEffect, createRef } from "react";
import { connect } from "react-redux";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Button, Container, ListGroup, ListGroupItem } from "reactstrap";
import PropTypes from "prop-types";
import { getItems, deleteItem } from "../actions/itemActions";

const ShoppingList = (props) => {
  useEffect(() => {
    props.getItems();
  }, [props.getItems]);

  const onDeleteClick = (id) => {
    props.deleteItem(id);
  };

  return (
    <Container>
      <ListGroup>
        {props.item.items.map(({ _id, name }) => (
          <ListGroupItem key={_id}>
            <Button
              className="remove-btn"
              color="danger"
              size="sm"
              onClick={() => onDeleteClick(_id)}
            >
              &times;
            </Button>
            {name}
          </ListGroupItem>
        ))}
      </ListGroup>
    </Container>
  );
};

ShoppingList.propTypes = {
  getItems: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired,
  deleteItem: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  item: state.item,
});

export default connect(mapStateToProps, { getItems, deleteItem })(ShoppingList);
// https://youtu.be/TO6akRGXhx8?list=PLillGF-RfqbbiTGgA77tGO426V3hRF9iE

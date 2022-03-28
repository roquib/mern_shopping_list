import {
  Button,
  Modal,
  ModalBody,
  ModalHeader,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";

import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addItem } from "../actions/itemActions";
import { v4 as uuid } from "uuid";

const ItemModal = ({ addItem }) => {
  const [modal, setModal] = useState(false);
  const [name, setName] = useState("");

  const toggle = () => {
    setModal(!modal);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      name,
    };

    // Add item via addItem action
    addItem(newItem);

    // Close modal
    toggle();
  };

  return (
    <div>
      <Button color="dark" style={{ marginBottom: "2rem" }} onClick={toggle}>
        Add Item
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Add To Shopping List</ModalHeader>
        <ModalBody>
          <Form onSubmit={(e) => onSubmit(e)}>
            <FormGroup>
              <Label for="item">Item</Label>
              <Input
                type="text"
                name="item"
                id="item"
                placeholder="Add Shopping Item"
                onChange={(e) => setName(e.target.value)}
              />
            </FormGroup>
            <Button color="dark" style={{ marginTop: "2rem" }} block>
              Add Item
            </Button>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
};

const mapStateToProps = (state) => ({
  item: state.item,
});

export default connect(mapStateToProps, { addItem })(ItemModal);

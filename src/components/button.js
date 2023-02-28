import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { useDispatch } from "react-redux";
import {
  addDataThunksuccess,
  addDataThunkfailure,
} from "../reducer/tableReducer";

function MainButton({
  text,
  color,
  title,
  dataId,
  description,
  pattern,
  instruction,
}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();

  const [inputDescription, setDescription] = useState("");
  const [inputPattern, setPattern] = useState("");
  const [inputInstruction, setInstruction] = useState("");

  async function handleDescriptionChange(e) {
    await setDescription(e.target.value);
  }
  async function handlePatternChange(e) {
    await setPattern(e.target.value);
  }
  async function handleInstructionChange(e) {
    await setInstruction(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (text == "Add") {
      try {
        let inputData = {
          description: inputDescription,
          pattern: inputPattern,
          instruction: inputInstruction,
        };
        await axios.post("http://localhost:8080/api/add", inputData);
        await dispatch(addDataThunksuccess(inputData));
        await handleClose();
      } catch (error) {
        await dispatch(addDataThunkfailure(error));
        await handleClose();
      }
    } else if (text == "Edit") {
      try {
        let inputData = {
          id: dataId,
          description: inputDescription,
          pattern: inputPattern,
          instruction: inputInstruction,
        };
        await axios.post("http://localhost:8080/api/edit", inputData);
        await dispatch(addDataThunksuccess(inputData));
        await handleClose();
      } catch (error) {
        await dispatch(addDataThunkfailure(error));
        await handleClose();
      }
    }
  }

  return (
    <>
      <Button variant={color} onClick={handleShow} key={dataId}>
        {text}
      </Button>
      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                defaultValue={description}
                name="description"
                onChange={handleDescriptionChange}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Pattern</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                defaultValue={pattern}
                name="pattern"
                onChange={handlePatternChange}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Instruction</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                defaultValue={instruction}
                name="instruction"
                onChange={handleInstructionChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default MainButton;

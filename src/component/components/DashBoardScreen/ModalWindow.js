import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Form from "./Form";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "auto",

  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const ModalWindow = ({
  show,
  handleClose,
  activeState,
  data,
  actionEditOrAdd,
}) => {
  //   const [show, setShow] = useState(false);

  //   const handleClose = () => setShow(false);

  return (
    <Modal
      open={show}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      className="modalStyling1"
    >
      <Box sx={style}>
        <Form
          activeState={activeState}
          handleClose={handleClose}
          editData={data}
          actionEditOrAdd={actionEditOrAdd}
        />
      </Box>
    </Modal>
  );
};

export default ModalWindow;

import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const products = [
    {
      name: 'Product 1',
      desc: 'A nice thing',
      price: '$9.99',
    },
    {
      name: 'Product 2',
      desc: 'Another thing',
      price: '$3.45',
    },
    {
      name: 'Product 3',
      desc: 'Something else',
      price: '$6.51',
    },
    {
      name: 'Product 4',
      desc: 'Best thing of all',
      price: '$14.11',
    }
]

export default function SummaryCheckoutPage() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" gutterBottom>
            Order Summary
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <React.Fragment>
      <List disablePadding>
        {products.map((product) => (
          <ListItem key={product.name} sx={{ py: 1, px: 0 }}>
            <ListItemText primary={product.name} />
            <Typography variant="body2">{product.price}</Typography>
          </ListItem>
        ))}
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            $34.06
          </Typography>
        </ListItem>
      </List>
      </React.Fragment>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

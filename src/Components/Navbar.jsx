import Box from "@mui/joy/Box";
import IconButton from "@mui/joy/IconButton";
import Stack from "@mui/joy/Stack";
import Dropdown from "@mui/joy/Dropdown";
import Menu from "@mui/joy/Menu";
import MenuButton from "@mui/joy/MenuButton";
import MenuItem from "@mui/joy/MenuItem";
import {
  CardGiftcardOutlined,
  Close,
  Delete,
  Menu as MenuIcon,
} from "@mui/icons-material";
import {
  Badge,
  Button,

  Divider,
  Drawer,
  List,
  ListItem,

 
  Typography,
} from "@mui/joy";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { data } = useSelector((state) => state.cart);
  const {dispatch} = useDispatch()
   
  const deleteHandler = (item) => {
dispatch()
  }

  const toggleDrawer = (inOpen) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setOpen(inOpen);
  };

  const navigate = useNavigate()

  return (
    <Box
      sx={{
        bgcolor: "#860A35",
        display: "flex",
        flexGrow: 1,
        width: "100%",
        flexDirection: "row-reverse",
        justifyContent: "space-between",
        height: "88px",
        boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
      }}
    >
      <Stack
        justifyContent="center"
        alignItems="center"
        spacing={1}
        sx={{ display: "flex", margin: "2vmax" }}
      >
      <Badge
      badgeContent={data?.length}
      variant="soft"
      color="danger"
      >

        <CardGiftcardOutlined
          onClick={toggleDrawer(true)}
          sx={{
            color: "#fff",
            height: "34px",
            width: "34px",
            cursor: "pointer",
          }}
        />
      </Badge>
      </Stack>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: 1.5,
          alignItems: "center",
        }}
      >
        <Dropdown>
          <MenuButton
            sx={{ margin: "2vmax" }}
            slots={{ root: IconButton }}
            slotProps={{ root: { variant: "outlined", color: "secondary" } }}
          >
            <MenuIcon sx={{ height: "34px", width: "34px", color: "#fff" }} />
          </MenuButton>
          <Menu sx={{ margin: "2vmax" }}>
            <MenuItem>Profile</MenuItem>
            <MenuItem>Logout</MenuItem>
          </Menu>
        </Dropdown>
      </Box>
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            background: "#860A35",
            justifyContent: "space-between",
            p: "1vmax",
          }}
        >
          <Typography
            level="body-lg"
            sx={{ fontWeight: "700", fontSize: 30, color: "#fff" }}
          >
            Hamper Items
          </Typography>
          <Close
            onClick={toggleDrawer(false)}
            sx={{ color: "#fff", fontSize: 40, cursor: "pointer" }}
          />
        </Box>

        <Box
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
          sx={{ mt: 4, display: "flex", justifyContent: "flex-start" }}
        >
          <Divider />
          <List>
            {data.map((item) => (
              <ListItem key={item.title}>
              <Typography >{item.title}</Typography>
                <Typography>{item.price}</Typography>
              <Delete onClick={() => deleteHandler(item)} />
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>

        <Button sx={{ mx: "auto" }} onClick={() => {navigate("/checkout"); setOpen(false)}} className="button">
          Proceed to checkout
        </Button>
      </Drawer>
    </Box>
  );
}

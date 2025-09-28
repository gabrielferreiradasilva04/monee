import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Box, Button, IconButton, Drawer, Typography } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import Tooltip from "@mui/material/Tooltip";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SettingsIcon from '@mui/icons-material/Settings';
import ProfileDrawer from "./ProfileDrawer.jsx";
import MenuIcon from "@mui/icons-material/Menu";
import { useAuth } from "./context/AuthContext.jsx";

const pages = [
  { title: "Visão Geral", path: "/overview" },
  { title: "Lançamentos", path: "/transactions" },
  { title: "Metas", path: "/financial-goal" },
  { title: "Open Finance", path: "/open-finance" },
];

export default function Appbar() {
  const navigate = useNavigate();

  //dados do usuário
  const { user } = useAuth();

  // controle do drawer
  const [openDrawer, setOpenDrawer] = React.useState(false);

  const toggleDrawer = (state) => () => {
    setOpenDrawer(state);
  };

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleNavigate = (path) => {
    navigate(path);
    handleCloseNavMenu();
  };

  return (
    <>
      <AppBar position="static" sx={{ minHeight: "48px" }}>
        <Toolbar
          variant="dense"
          sx={{ minHeight: "48px !important", justifyContent: "center" }}
        >
          {/* Menu mobile */}{" "}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              alignItems: "center",
            }}
          >
            {" "}
            <IconButton
              size="small"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              sx={{ p: 0.5 }}
            >
              {" "}
              <MenuIcon fontSize="small" />{" "}
            </IconButton>{" "}
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
              keepMounted
              transformOrigin={{ vertical: "top", horizontal: "left" }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {" "}
              {pages.map((page) => (
                <MenuItem
                  key={page.title}
                  onClick={() => handleNavigate(page.path)}
                  dense
                >
                  {" "}
                  <Typography variant="body2" sx={{ textAlign: "center" }}>
                    {" "}
                    {page.title}{" "}
                  </Typography>{" "}
                </MenuItem>
              ))}{" "}
            </Menu>{" "}
            <Box
              sx={{
                flexGrow: 1,
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                gap: 0.5,
              }}
            >
              {" "}
              <IconButton>
                {" "}
                <SportsEsportsIcon sx={{ color: "white" }} />{" "}
              </IconButton>{" "}
              <IconButton>
                {" "}
                <NotificationsIcon sx={{ color: "white" }} />{" "}
              </IconButton>{" "}
            </Box>{" "}
          </Box>
          {/* Menu Desktop */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              flexDirection: "row",
              alignItems: "center",
              gap: 2,
              width: "100%",
            }}
          >
            <Box
              sx={{ flex: 0.5, display: "flex", justifyContent: "flex-end" }}
            >
              <Tooltip title="Notificações">
                <IconButton size="big">
                  <NotificationsIcon sx={{ color: "white" }} />
                </IconButton>
              </Tooltip>
            </Box>

            <Box
              sx={{
                flex: 2,
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                gap: 1,
              }}
            >
              {pages.map((page) => (
                <Button
                  key={page.title}
                  onClick={() => navigate(page.path)}
                  sx={{
                    color: "white",
                    fontWeight: "bold",
                    textTransform: "none",
                    borderRadius: "8px",
                    "&:hover": {
                      backgroundColor: "rgba(255, 255, 255, 0.2)",
                    },
                  }}
                >
                  {page.title}
                </Button>
              ))}
            </Box>

            <Box
              sx={{
                flex: 0.5,
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                gap: 0.5,
              }}
            >

              <Tooltip title="Configurações">
                <IconButton size="big" onClick={() => navigate('/configuration')}>
                  <SettingsIcon sx={{ color: "white" }} />
                </IconButton>
              </Tooltip>

              <Tooltip title="Praticar">
                <IconButton size="big">
                  <SportsEsportsIcon sx={{ color: "white" }} />
                </IconButton>
              </Tooltip>

              <Tooltip title="Perfil">
                <IconButton size="big" onClick={toggleDrawer(true)}>
                  <AccountCircleIcon sx={{ color: "white" }} />
                </IconButton>
              </Tooltip>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <ProfileDrawer open={openDrawer} onClose={toggleDrawer(false)} user={user} />
    </>
  );
}

import { useState } from "react";
import { Link } from "react-router-dom";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import EqualizerOutlinedIcon from "@mui/icons-material/EqualizerOutlined";
import StickyNote2OutlinedIcon from "@mui/icons-material/StickyNote2Outlined";
import SentimentSatisfiedAltOutlinedIcon from "@mui/icons-material/SentimentSatisfiedAltOutlined";

const Navbar = () => {
  const [value, setValue] = useState();

  return (
    <nav>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          component={Link}
          to="/"
          label="홈"
          icon={<HomeOutlinedIcon />}
        />
        <BottomNavigationAction
          component={Link}
          to="/library"
          label="서재"
          icon={<MenuBookOutlinedIcon />}
        />
        <BottomNavigationAction
          component={Link}
          to="/bookgraph"
          label="북꾸러미"
          icon={<EqualizerOutlinedIcon />}
        />
        <BottomNavigationAction
          component={Link}
          to="/bookreview"
          label="독후감"
          icon={<StickyNote2OutlinedIcon />}
        />
        <BottomNavigationAction
          component={Link}
          to="/profile"
          label="프로필"
          icon={<SentimentSatisfiedAltOutlinedIcon />}
        />
      </BottomNavigation>
    </nav>
  );
};

export default Navbar;

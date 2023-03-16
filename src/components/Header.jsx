import { AppBar, Box, Toolbar, Button, IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Header = (props) => {
  const navigate = useNavigate();

  // 이전 페이지로 이동 핸들
  const handleBackpage = () => {
    navigate(-1);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <StyledHeader position="static">
        <Toolbar variant="dense" sx={{ justifyContent: "space-between" }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleBackpage}
          >
            <ArrowBackIcon />
          </IconButton>

          {/* 페이지에 따라 다른역할의 버튼 */}
          <div>{props.children}</div>
        </Toolbar>
      </StyledHeader>
    </Box>
  );
};

export default Header;

// Material의 AppBar 색 변경
const StyledHeader = styled(AppBar)`
  /* material의 style보다 우선순위를 높히기 위해 &&작성 */
  && {
    background-color: #75daad;
    color: white;
  }
`;

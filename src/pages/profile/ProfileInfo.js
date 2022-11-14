import PropTypes from "prop-types";
// @mui
import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import MyAvatar from "./UserAvatar";
// hooks
// routes
// components

// ----------------------------------------------------------------------

const RootStyle = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(2, 2.5),
  borderRadius: Number(theme.shape.borderRadius) * 1.5,
  backgroundColor: theme.palette.grey[500_12],
  transition: theme.transitions.create("opacity", {
    duration: theme.transitions.duration.shorter,
  }),
}));

// ----------------------------------------------------------------------

ProfileInfo.propTypes = {
  isCollapse: PropTypes.bool,
};

export default function ProfileInfo({ isCollapse }) {
  return (
    <>
      <RootStyle
        sx={{
          ...(isCollapse && {
            bgcolor: "transparent",
          }),
        }}>
        <MyAvatar />

        <Box
          sx={{
            ml: 2,
            transition: (theme) =>
              theme.transitions.create("width", {
                duration: theme.transitions.duration.shorter,
              }),
            ...(isCollapse && {
              ml: 0,
              width: 0,
            }),
          }}>
          <Typography variant='subtitle2' noWrap>
            {"User Name"}
          </Typography>
          <Typography variant='body2' noWrap sx={{ color: "text.secondary" }}>
            {"Description"}
          </Typography>
        </Box>
      </RootStyle>
    </>
  );
}

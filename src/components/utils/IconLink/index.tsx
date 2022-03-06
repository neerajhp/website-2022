import { Box } from "@mui/system";

interface IconLinkProps {
  iconUrl: string;
}

const IconLink = (props: IconLinkProps) => {
  return (
    <Box
      component='img'
      sx={{
        height: 50,
        width: 50,
        maxHeight: { xs: 50 },
        maxWidth: { xs: 50 },
      }}
      alt='Link to my projects'
      src={props.iconUrl}
    />
  );
};

export default IconLink;

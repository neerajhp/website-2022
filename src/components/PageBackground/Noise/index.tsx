import { keyframes, styled } from "@mui/system";
import Texture from "../../../assets/texture.png";

const random = keyframes`
  0%, 100% { transform:translate(0, 0) }
  10% { transform:translate(-5%, -10%) }
  20% { transform:translate(-15%, 5%) }
  30% { transform:translate(7%, -25%) }
  40% { transform:translate(-5%, 25%) }
  50% { transform:translate(-15%, 10%) }
  60% { transform:translate(15%, 0%) }
  70% { transform:translate(0%, 15%) }
  80% { transform:translate(3%, 35%) }
  90% { transform:translate(-10%, 10%) }
`;

const Noise = styled("div")(({ theme }) => ({
  backgroundImage: `url(${Texture})`,
  width: "300%",
  height: "300%",
  animation: `${random} 1s infinite ease`,
  position: "fixed",
  zIndex: 1,
  opacity: 0.6,
  left: "-50%",
  top: "-100%",
}));

export default Noise;

import { useNavigate } from "react-router-dom";
import {
  BackgroundImage,
  Body,
  DirectoryItemContainer,
} from "./directory-item.styles";
function DirectoryItem({ category }) {
  const { imageUrl, title } = category;
  const navigate = useNavigate();
  const navigationHandler = () => {
    navigate(`shop/${title}`);
  };
  return (
    <DirectoryItemContainer onClick={navigationHandler}>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );
}

export default DirectoryItem;

import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
} from "./button.styles";

const BUTTON_TYPE_CLASSES = {
  base: "base",
  google: "google",
  inverted: "inverted",
};

const Button = ({ children, buttonType, ...otherProps }) => {
  const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) =>
    ({
      [BUTTON_TYPE_CLASSES.base]: BaseButton,
      [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
      [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
    }[buttonType]);
  const CustomButton = getButton(buttonType);

  return <CustomButton {...otherProps}>{children}</CustomButton>;
};

export default Button;

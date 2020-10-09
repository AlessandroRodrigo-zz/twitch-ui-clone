import {
  Feather,
  MaterialIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import React from "react";
import colors from "../../styles/colors";
import avatarImg from "../../images/wallhaven-eyl1xr.jpg";

import {
  Container,
  Avatar,
  OnlineStatus,
  RightSide,
  Button,
  ImageAvatar,
} from "./styles";

const Header: React.FC = () => {
  // const { navigate } = useNavigation();

  return (
    <Container>
      <Avatar>
        <ImageAvatar source={avatarImg} />
        <OnlineStatus />
      </Avatar>

      <RightSide>
        <Button>
          <MaterialIcons
            name="notifications-none"
            size={26}
            color={colors.black}
          />
        </Button>
        <Button>
          <MaterialCommunityIcons
            name="message-outline"
            size={26}
            color={colors.black}
          />
        </Button>
        <Button>
          <Feather name="search" size={26} color={colors.black} />
        </Button>
      </RightSide>
    </Container>
  );
};

export default Header;

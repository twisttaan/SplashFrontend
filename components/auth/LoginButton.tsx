import { BanIcon } from "@heroicons/react/outline";
import {
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  MenuList
} from "@mui/material";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useUser } from "../../context/UserProvider";
import sendToast from "../../utils/sendToast";

export default function LoginButton() {
  const router = useRouter();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const { user, setUser } = useUser();

  useEffect(() => {
    axios
      .get(`${process.env.API_URL}/user/me`, {
        withCredentials: true
      })
      .then((res) => {
        sendToast(res.data.message, "success");
        setUser(res.data.user);
      })
      .catch((err) => {});

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <button
        type="button"
        id="user-menu-button"
        className="text-base font-medium leading-6 text-gray-600 whitespace-no-wrap transition duration-150 ease-in-out hover:text-gray-900 dark:text-white dark:hover:text-gray-400"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={user ? handleClick : () => router.push("/auth/login")}
      >
        {user ? user.username : "Login"}
      </button>
      <Menu
        id="user-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button"
        }}
      >
        <MenuList>
          <MenuItem>
            <ListItemIcon>
              <BanIcon
                className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </ListItemIcon>
            <ListItemText
              onClick={
                user
                  ? () => {
                      axios
                        .post(
                          `${process.env.API_URL}/auth/logout`,
                          {},
                          {
                            withCredentials: true
                          }
                        )
                        .then(() => {
                          setUser(null);
                          setAnchorEl(null);
                          sendToast("Logged Out!", "success");
                          router.push("/auth/login");
                        })
                        .catch((err) => {
                          sendToast(err.data.message, "error");
                        });
                    }
                  : () => router.push("/auth/login")
              }
            >
              {user ? "Logout" : "Login"}
            </ListItemText>
          </MenuItem>
        </MenuList>
      </Menu>
    </>
  );
}

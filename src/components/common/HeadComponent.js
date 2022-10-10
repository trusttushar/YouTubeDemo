import React from "react";
import Helmet from "react-helmet";

export default function HeadComponent(props) {
  const getTitle = () => {
    switch (props.pathname) {
      case "/":
        return "Home";
      case "/signin":
        return "Log in";
      case "/signup":
        return "Sign Up";
      case "/add/video":
        return "Add Video";
      case "/my/videos":
        return "My Videos";
      case "/update/video":
        return "Update Video";
      default:
        return "YouTube";
    }
  };
  const link = () => {
    switch (props.pathname) {
      case "/":
        return [
          {
            rel: "stylesheet",
            type: "text/css",
            href: "/assets/bootstrap.min.css",
          },
          {
            rel: "stylesheet",
            type: "text/css",
            href: "/assets/style.css",
          },
          {
            rel: "stylesheet",
            type: "text/css",
            href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css",
          }
        ];
        case "/my/videos":
          return [
            {
              rel: "stylesheet",
              type: "text/css",
              href: "/assets/bootstrap.min.css",
            },
            {
              rel: "stylesheet",
              type: "text/css",
              href: "/assets/style.css",
            },
            {
              rel: "stylesheet",
              type: "text/css",
              href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css",
            }
          ];
      case "/add/video":
        return [
          {
            rel: "stylesheet",
            type: "text/css",
            href: "/assets/bootstrap.min.css",
          },
          {
            rel: "stylesheet",
            type: "text/css",
            href: "/assets/style.css",
          },
          {
            rel: "stylesheet",
            type: "text/css",
            href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css",
          }
        ];
      default:
        return [
          {
            rel: "stylesheet",
            type: "text/css",
            href: "/assets/bootstrap.min.css",
          },
          {
            rel: "stylesheet",
            type: "text/css",
            href: "/assets/style.css",
          },
          {
            rel: "stylesheet",
            type: "text/css",
            href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css",
          }
        ];
    }
  };

  return (
    <Helmet link={link()}>
      <title>{getTitle()}</title>
    </Helmet>
  );
}

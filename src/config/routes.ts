type PublicRoutes = {
  home: string;
};

type PrivateRoutes = {
  chat: string;
  favorites: string;
  contacts: string;
  settings: string;
  profile: (id: string | number) => string;
};

export const PUBLIC_PATHS: PublicRoutes = {
  home: "/",
};

export const PRIVATE_PATHS: PrivateRoutes = {
  profile: (id) => `/profile/${id}`,
  favorites: "/favorites",
  contacts: "/contacts",
  settings: "/settings",
  chat: "/chat",
};

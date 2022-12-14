import { createContext, memo, useContext, useState } from "react";

const ProfileContext = createContext({});
export const ProfileProvider = memo(({ children }) => {
  const [profile, setProfile] = useState({
    firstName: "Arick",
    lastName: "Bulakali",
    age: 25,
  });
  const value = {
    profile,
    setProfile,
  };
  return (
    <ProfileContext.Provider value={value}>{children}</ProfileContext.Provider>
  );
});
export const ProfileData = () => useContext(ProfileContext);

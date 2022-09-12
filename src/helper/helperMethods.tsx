import { FormDataInputs } from "../types/interface/service.signup";

export const checkIfEmailIdExist = (email: string): boolean => {
  let getUsersData: any = localStorage.getItem("AllUsers");
  if (getUsersData === null) {
    return false;
  }
  const arrayOfUsers = JSON.parse(getUsersData);
  let result = arrayOfUsers.some(
    (data: FormDataInputs) => data.email === email
  );
  return result;
};

export const storeDataIntoDb = (formData: FormDataInputs) => {
  let getUsersData: any = localStorage.getItem("AllUsers");
  if (getUsersData === null) {
    localStorage.setItem(
      "AllUsers",
      JSON.stringify([{ ...formData, id: genrateRandomId() }])
    );
  } else {
    const createAllUserData = [
      ...JSON.parse(getUsersData),
      { formData, id: genrateRandomId() },
    ];
    localStorage.setItem("AllUsers", JSON.stringify(createAllUserData));
  }
};

const genrateRandomId = () => {
  return parseInt((Math.random() * 1000000).toFixed());
};

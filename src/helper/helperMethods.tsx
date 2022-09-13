import { FormDataInputs } from "../types/interface/service.signup";

export const checkPassowrdIsValid = (email: string, password: any) => {
  let getUsersData: any = localStorage.getItem("AllUsers");
  const arrayOfUsers = JSON.parse(getUsersData);
  let userDetail: Array<FormDataInputs> = arrayOfUsers.filter(
    (data: FormDataInputs) => data.email === email
  );
  if (!userDetail.length) {
    return false;
  }
  if (userDetail[0].password === password) {
    return true;
  }
};

export const setCurrentLoginUserInfo = (email: string, password: any) => {
  let getUsersData: any = localStorage.getItem("AllUsers");
  const arrayOfUsers = JSON.parse(getUsersData);
  let userDetail = arrayOfUsers.filter(
    (data: FormDataInputs) => data.email === email
  );
  localStorage.setItem("currentUserId", JSON.parse(userDetail[0].id));
};

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

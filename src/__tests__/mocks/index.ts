import { IInstitutionRequest } from "../../interfaces/institutions";
import { IStatusUpdate } from "../../interfaces/statuses";
import { IUserLogin, IUserRequest } from "../../interfaces/users";
import { IadressesCreate } from "../../interfaces/adresses";

export const mockedUser: IUserRequest = {
  name: "Test_01",
  email: "test_01@mail.com",
  age: 21,
  password: "123456",
  cpf: "123.123.123-01",
};

export const mockedUserFail = {
  name: "Test_02",
  email: 123,
  age: 77,
  password: "1234567",
  cpf: "123.123.123-12",
};
export const mockedUserFail2 = {
  name: "Test_02",
  email: "test_01@mail.com",
  age: 77,
  password: "1234567",
};
export const mockedUserLogin: IUserLogin = {
  email: "test_01@mail.com",
  password: "123456",
};

export const mockedUser2Login = {
  email: "test_1@mail.com",
  password: "1234567",
};
export const mockedInstitution: IInstitutionRequest = {
  name: "instituiçãoTest_1",
  email: "astromania@mail.com",
  cnpj: "1234.1234.1234-07",
  password: "123456",
  address: {
    city: "Fortim",
    state: "Ceara",
    number: "333",
    cep: "60321-321",
    district: "Diamar",
  },
};

export const mockedFailInstitution = {
  name: "instituiçãoTest_1",
  email: "astromania@mail.com",
  cnpj: "1234.1234.1234-07",
  password: "123456",
  address: {
    city: "Fortim",
    state: "Ceara",
    number: "333",
    cep: "60321-321",
    district: "Diamar",
  },
};

import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

export const StoreData = async (expenseData, folder) => {
  const responce = await axios.post(
    BACKEND_URL + `/${folder}.json`,
    expenseData
  );
  const id = responce.data.name;
  return id;
};

export const FetchExpenses = async (folder) => {
  const responce = await axios.get(BACKEND_URL + `/${folder}.json`);

  const Expenses = [];
  for (const key in responce.data) {
    if (folder === "Books") {
      const getObject = {
        id: key,
        BookName: responce.data[key].name,
        imageUrl: responce.data[key].imageUrl,
        Url: responce.data[key].Url,
      };

      Expenses.push(getObject);
    } else if (folder === "Notes") {
      const getObject = {
        id: key,
        CourseName: responce.data[key].name,
        Url: responce.data[key].Url,
        Department: responce.data[key].Department,
        Semester: responce.data[key].Semester,
        Year: responce.data[key].Year,
      };
      Expenses.push(getObject);
    } else {
      const getObject = {
        id: key,
        PDFName: responce.data[key].name,
        Url: responce.data[key].Url,
        Department: responce.data[key].Department,
        Semester: responce.data[key].Semester,
        Year: responce.data[key].Year,
      };
      Expenses.push(getObject);
    }
  }

  return Expenses;
};

export const DeleteRecord = async (id, folder) => {
  console.log(id, folder);
  await axios.delete(BACKEND_URL + `/${folder}/${id}.json`);
};

export const Updatedata = async (id, folder, expenseData) => {
  await axios.put(BACKEND_URL + `/${folder}/${id}.json`, expenseData);
};

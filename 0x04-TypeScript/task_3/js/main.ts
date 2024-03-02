/// <reference path="./crud.d.ts" />
import { RowID, RowElement } from "../js/interface";
import * as CRUD from "../js/crud";

const row: RowElement = {
  firstName: "Guillaume",
  lastName: "Salva",
};
const newRowID: RowID = CRUD.insertRow(row);
const updatedRow: RowElement = { ...row, age: 23 };
CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);

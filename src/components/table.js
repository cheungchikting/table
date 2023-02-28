import Table from "react-bootstrap/Table";
import MainButton from "./button";
import axios from "axios";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getDataThunksuccess,
  getDataThunkfailure,
} from "../reducer/tableReducer";

function InstructionTable() {
  const dispatch = useDispatch();
  const table = useSelector((state) => state.table.data);

  useEffect(() => {
    async function getThunk() {
      try {
        let data = await axios.get("http://localhost:8080/api/read");
        let sortData = data.data.sort(function (a, b) {
          return a.id - b.id;
        });
        await dispatch(getDataThunksuccess(sortData));
      } catch (error) {
        await dispatch(getDataThunkfailure(error));
      }
    }
    getThunk();
  }, []);

  return (
    <Table striped>
      <thead style={{ position: "sticky", top: 0 }}>
        <tr>
          <th>Spec ID</th>
          <th>Description</th>
          <th>Pattern</th>
          <th>Instruction</th>
          <th>
            <MainButton text={"Add"} color={"dark"} title={"Add"} />
          </th>
        </tr>
      </thead>
      <tbody>
        {table.map((data) => {
          return (
            <tr>
              <td>{data.id}</td>
              <td>{data.description}</td>
              <td>{data.pattern}</td>
              <td>{data.instruction}</td>
              <td>
                <MainButton
                  text={"Edit"}
                  color={"secondary"}
                  title={"Edit"}
                  dataId={data.id}
                  description={data.description}
                  pattern={data.pattern}
                  instruction={data.instruction}
                />
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

export default InstructionTable;

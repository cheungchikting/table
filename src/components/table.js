import Table from "react-bootstrap/Table";
import TypesExample from "./button";

function StripedRowExample() {
  return (
    <Table striped>
      <thead>
        <tr>
          <th>Spec ID</th>
          <th>Description</th>
          <th>Pattern</th>
          <th>Instruction</th>
          <th>
            <TypesExample text={"Add"} color={"dark"} title={"Add"} />
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>
            <TypesExample text={"Edit"} color={"secondary"} title={"Edit"} />
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
          <td>
            <TypesExample text={"Edit"} color={"secondary"} title={"Edit"} />
          </td>
        </tr>
      </tbody>
    </Table>
  );
}

export default StripedRowExample;

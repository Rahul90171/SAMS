import Layout from "../components/Layout";

function Students() {
  return (
    <Layout>
      <h1>Students</h1>
      <button className="button" style={{ marginTop: "15px" }}>+ Add Student</button>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Department</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>101</td>
            <td>Rahul</td>
            <td>CSE</td>
          </tr>
          <tr>
            <td>102</td>
            <td>Anjali</td>
            <td>ECE</td>
          </tr>
        </tbody>
      </table>
    </Layout>
  );
}

export default Students;
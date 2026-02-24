import Layout from "../components/Layout";

function Achievements() {
  return (
    <Layout>
      <h1>Achievements</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Student</th>
            <th>Achievement</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Rahul</td>
            <td>Hackathon Winner</td>
            <td>2025</td>
          </tr>
          <tr>
            <td>Anjali</td>
            <td>Paper Publication</td>
            <td>2024</td>
          </tr>
        </tbody>
      </table>
    </Layout>
  );
}

export default Achievements;
import React from 'react';


const List = (props) => {
  const { repos } = props;
  if (!repos || repos.length === 0) return <p>No repos, sorry</p>;

return (
  <div>
    <table class="styled-table" >
      <tr>
        <th>Title</th>
        <th>Author</th>
        <th>Description</th>
        <th>Download Url</th>
      </tr>
      {repos.map((val, key) => {
        return (
          <tr key={key}>
            <td>{val.title}</td>
            <td>{val.owner_name}</td>
            <td>{val.description}</td>
            <td>{val.download_url}</td>
          </tr>
        )
      })}
    </table>
  </div>
);
}

export default List;

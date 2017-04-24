import React from "react";

const TableRow = (props) => {
    const row = props.row;
    return (
        <tr>
            <td>{row.id}</td>
            <td>{row.name}</td>
            <td>{row.hash}</td>
            <td>{row.uploaded}</td>
            <td>{row.link}</td>
            <td>{row.sent}</td>
            <td>{row.recipients}</td>
        </tr>
    )
};

export default TableRow;

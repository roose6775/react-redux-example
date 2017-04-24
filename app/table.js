import React from "react";
import TableRow from "./tableRow";
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import {addRow} from "./tableActions";

const Table = (props) => {

    const rows = props.rows.map((row, i) => <TableRow key={i} row={row}/>);

    return(
        <section className='uui-main-container' id='section3'>
            <div className='container'>
                <div className='row'>
                    <h1 className='text-center lato slideInUp animate'>All Documents</h1>
                </div>
                <div className='row'>
                    <div className='table-responsive'>
                        <table id='documents-table-results' className='uui-table dynamic stripe records-per-page search showing-pages paging dataTable no-footer'>
                            <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Hash</th>
                                <th>Uploaded</th>
                                <th>Document link</th>
                                <th>Sent</th>
                                <th>Recipients</th>
                            </tr>
                            </thead>
                            <tbody>
                                {rows}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-12 text-center'>
                        <button id='report-send-btn' className='uui-button lime-green large' onClick={props.addRow}>Send last report</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

const mapStateToProps = (state) => ({
   rows: state.tableReducer.rows
});

const mapDispatchToProps = (dispatch) => ({
    addRow: bindActionCreators(addRow, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);

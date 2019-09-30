import React from "react";
import PropTypes from "prop-types";
import Task from "./Task";
import AddTask from './AddTask';


const renderTask = function (data, onClick) {
    return data.map((t) => 
        <Task data={t} onClick={onClick} uri={t.resource_uri} />
    );
}

const Board = ({ data, onClick }) =>

    <div className="card bg-light shadow board">
        <div className="card-header">
            <ul className="nav nav-tabs card-header-tabs">
                <li className="nav-item">
                    <span className="nav-link active"><strong className="text-body">{data.name}</strong></span>
                </li>
            </ul>
        </div>
        <div className="card-body board-body">
            <AddTask endpoint="" />
            {renderTask(data.tasks, onClick)}
        </div>
    </div>

Board.propTypes = {
  data: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired
};

  export default Board;

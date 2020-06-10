import React, { Component } from "react";
import List from "../../list.json";
import Table from "../Table";

const styles = {
    divStyle: {
        width: "600px"
    },
    textStyle: {
        color: "#f25713",
        fontSize: "20px",
        fontWeight: "bold"
    }
};
class SortAndFilter extends Component {
    state = {
        department: "",
        list: List
    };


    handleChange = event => {
        let value = event.target.value;

        this.setState({
            department: value
        });
    }

    handleSubmit = event => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        event.preventDefault();

        // filter by department
        const filteredList = List.filter(item => item.department === this.state.department);
        this.setState({
            list: filteredList
        });
    };

    // sort according to 
    // sortList = option => {
    //     let newList;
    //     switch (option) {
    //         case "firstName":
    //             // code
    //             newList = List.sort(function (a, b) { return a.firstName - b.firstName });
    //             break;
    //         case "lasttName":
    //             // code block
    //             newList = List.sort(function (a, b) { return a.lastName - b.lastName });
    //             break;
    //         case "employeeID":
    //             // code block
    //             newList = List.sort(function (a, b) { return a.employeeID - b.employeeID });
    //             break;
    //         case "department":
    //             newList = List.sort(function (a, b) { return a.department - b.department });
    //             break;
    //         default:
    //             return;
    //     }
    //     this.setState({
    //         list: newList
    //     });
    // };

    render() {
        return (
            <div className="mx-auto pt-3 pb-3" style={styles.divStyle}>
                <form className="form-inline">
                    <div className="form-group">
                        <label htmlFor="department" style={styles.textStyle}>Filter By Department</label>
                        <select className="form-control ml-2" id="department" onChange={this.handleChange}>
                            <option defaultValue>Choose a department</option>
                            <option value="Sales">Sales</option>
                            <option value="Human Resources">Human Resources</option>
                        </select>
                    </div>
                    <button type="submit" className="btn btn-info ml-5" onClick={this.handleSubmit}>Submit</button>
                </form>
                <div className="btn-toolbar mb-3" role="toolbar" aria-label="Toolbar with button groups">
                    <p style={styles.textStyle}>Sort By</p>
                    <div className="btn-group mr-2" role="group" aria-label="sort options">
                        <button type="button" className="btn btn-info" onClick={this.sortList("firstName")}>First Name</button>
                        <button type="button" className="btn btn-info" onClick={this.sortList("lastName")}>Last Name</button>
                        <button type="button" className="btn btn-info" onClick={this.sortList("employeeID")}>Employee ID</button>
                        <button type="button" className="btn btn-info" onClick={this.sortList("department")}>Department</button>
                    </div>
                </div>
                <Table list={this.state.list} />
            </div>
        );
    }

}




export default SortAndFilter;
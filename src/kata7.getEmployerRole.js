const getEmployerRole = (employeeName, employees) => {
    const staff = employees.find(employee => employee.name === employeeName);

    return staff !== undefined ? staff.role : "No longer works here";
};

module.exports = getEmployerRole;

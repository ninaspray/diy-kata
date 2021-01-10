const getEmployerRole = (employeeName, employees) => {
    const staff = employees.filter(employee => employee.name === employeeName);
    const employee = staff[0];
    return employee.role;
};

module.exports = getEmployerRole;

export const getEmployee = (req, res) => {
	res.status(200).json({
		status: 'success',
		data: 'Get Employee'
	})
};

export const createEmployee = (req, res) => {
	res.status(200).json({
		status: 'success',
		data: 'Create Employee'
	})
};

export const updateEmployee = (req, res) => {
	res.status(200).json({
		status: 'success',
		data: 'Update Employee'
	})
};
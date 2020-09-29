const userInit = require("../Models/User.js").userInit;
const User = userInit(db);

async function findAll(req) {

	let erg = await User.findAll()
		.then((users) => {
			if (users) return users;
			return { error: 404, msg: "No User found" };
		})
		.catch(() => {
			return { error: 500, msg: "Databse Error" };
		});

	return erg;
}

module.exports.findAll = findAll;

async function findOne(req) {
	let erg = await User.findByPk(
	 Number(req.params.id ? req.params.id : req.query.params)
	)
		.then((user) => {
			if (user) return user.dataValues;
			return { error: 404, msg: "No User found" };
		})
		.catch(() => {
			return { error: 500, msg: "Databse Error" };
		});

	return erg;
}

module.exports.findOne = findOne;

async function searchOne(req) {
	  console.log('BODY',req)
	if (!req.params.email && !req.body.email && !req.query.params) {
		return { error: 2, err: "required:email" };
		}

 	if ( req.params.email || req.query.params)
			req.body.email = req.params.email ? req.params.email : req.query.params;
  console.log('BODY',req.body)
	let erg = await User.findOne({
		where: { email: req.body.email},
	})
		.then((user) => {
			if (user) return user.dataValues;
			return { error: 404, msg: "No User found" };
		})
		.catch(() => {
			return { error: 500, msg: "Databse Error" };
		});
	return erg;
}

module.exports.searchOne = searchOne;

async function createOne(req) {
	if (!req.body.firstname || !req.body.lastname || !req.params.email && !req.body.email && !req.query.params) {
				return{ error: 2, err: "required:firstname,lastname,email" };
	}
 	if ( req.params.email || req.query.params)
		req.body.email = req.params.email ? req.params.email : req.query.params;
	let erg = await User.findOrCreate({
		where: { email: req.body.email },
		defaults:
			{ ...req.body }
		,
	})
		.then(([user, created]) => {
			if (created) return { msg: "User created", user: user };
			return { error: 5, msg: "User already exists" };
		})
		.catch(() => {
			return { error: 500, msg: "Databse Error" };
		});
	return erg;
}

module.exports.createOne = createOne;

async function deleteOne(req) {
	let erg = await User.destroy({
		where: {
			email: req.params.email ? req.params.email : req.query.params,
		},
	})
		.then((user) => {
			if (user) return { msg: "User deleted", user: req.params.email };
			return { error: 404, msg: `User not found ${req.params.email}` };
		})
		.catch(() => {
			return { error: 500, msg: "Databse Error" };
		});
	return erg;
}

module.exports.deleteOne = deleteOne;

async function updateOne(req) {

	let erg = await User.update(
		req.body,
		{
			where: {
				email: req.params.email ? req.params.email : req.query.params,
			},
		}
	)
		.then((user) => {
			if (user[0] === 1)
				return { msg: "User updated", user: req.body };
			return { error: 404, msg: 'User not found' };
		})
		.catch(() => {
			return { error: 500, msg: "Databse Error" };
		});
	return erg;
}

module.exports.updateOne = updateOne;

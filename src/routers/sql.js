const express = require("express");
const router = express.Router();
const db = require("../sequelize/db/db");

const checkReqErrors = require("../includes/status").checkReqErrors;
const usersQuery = require("../sequelize/querys/users");

async function auth(db) {
	return db
		.authenticate()
		.then(() => {
			return { msg: "Server alive" };
		})
		.catch((err) => {
			console.log(err);
			checkReqErrors({ msg: "Server down", err: err }, res);
		});
}

router.get("/sql/users", (req, res) => {
	auth(db)
		.then(() => {
			usersQuery.findAll(req).then((erg) => {
				checkReqErrors({ msg: "Found Users", users: erg }, res);
			});
		})
		.catch((err) => {
			checkReqErrors({ error: "Something went wrong", err: err }, res);
		});
});

router.get("/sql/users/search", (req, res) => {
	auth(db)
		.then(() => {
			usersQuery.searchOne(req).then((erg) => {
				checkReqErrors({ msg: "Found Users", user: erg }, res);
			});
		})
		.catch((err) => {
			checkReqErrors({ error: "Something went wrong", err: err }, res);
		});
});


router.get("/sql/users/:id", (req, res) => {
	auth(db)
		.then(() => {
			usersQuery.findOne(req).then((erg) => {
				checkReqErrors({ msg: "Found Users", user: erg }, res);
			});
		})
		.catch((err) => {
			checkReqErrors({ error: "Something went wrong", err: err }, res);
		});
});

router.get("/sql/users/search/:email", (req, res) => {
	auth(db)
		.then(() => {
			usersQuery.searchOne(req).then((erg) => {
				checkReqErrors({ msg: "Found Users", user: erg }, res);
			});
		})
		.catch((err) => {
			checkReqErrors({ error: "Something went wrong", err: err }, res);
		});
});


router.post("/sql/users/:email", (req, res) => {
		auth(db)
			.then(() => {
				usersQuery.createOne(req).then((erg) => {
					checkReqErrors(erg, res);
				});
			})
			.catch((err) => {
				checkReqErrors(err, res);
			});
});

router.delete("/sql/users/:email", (req, res) => {
	if (!req.params.email)
		checkReqErrors({ error: 5, err: "required:email" }, res);
	auth(db)
		.then(() => {
			usersQuery.deleteOne(req).then((erg) => {
				checkReqErrors(erg, res);
			});
		})
		.catch((err) => {
			checkReqErrors(err, res);
		});
});

router.patch("/sql/users/:email", (req, res) => {
	if (!req.params.email)
		checkReqErrors({ error: 5, err: "required:email" }, res);
	auth(db)
		.then(() => {
			usersQuery.updateOne(req).then((erg) => {
				checkReqErrors(erg, res);
			});
		})
		.catch((err) => {
			checkReqErrors(err, res);
		});
});

router.get("/", (res) => {
	auth(db)
		.then((msg) => {
			checkReqErrors(msg, res);
		})
		.catch((err) => {
			checkReqErrors({ error: "Server down", err: err }, res);
		});
});

module.exports = router;

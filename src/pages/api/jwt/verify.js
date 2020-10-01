import JWTUtils from "@/includes/jwt";
import { checkReqErrors } from "@/includes/status";

export default (req, res) => {
	if (req.method === "GET") {
		JWTUtils.verfiyToken(req, res);
	} else {
		checkReqErrors({ error: "No End Point to this Request" }, res);
	}
};

export const config = {
	api: {
		externalResolver: true,
		bodyParser: false,
	},
};
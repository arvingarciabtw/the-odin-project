function shortenTimeFormat(distanceString) {
	return distanceString
		.replace(/^about\s/, "")
		.replace(/^over\s/, "")
		.replace(/^almost\s/, "")
		.replace(/^less than\s/, "<")
		.replace(/\ba\s/g, "1 ")
		.replace(/\ban\s/g, "1 ")
		.replace(/\s?seconds?/, "s")
		.replace(/\s?minutes?/, "m")
		.replace(/\s?hours?/, "h")
		.replace(/\s?days?/, "d")
		.replace(/\s?weeks?/, "w")
		.replace(/\s?months?/, "mo")
		.replace(/\s?years?/, "y")
		.trim();
}

export { shortenTimeFormat };

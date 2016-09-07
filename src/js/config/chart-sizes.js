/**
 * Default dimensions for non-responsive chart sizes.
 * @name chart_sizes
 * @memberof config
 * @static
 */
var chart_sizes = {
	auto: {
		width: 699,
		height: 600,
		sizeClass: "online_full"
	},
	printTwo: {
		width: 342,
		height: 342,
		sizeClass: "print_two"
	},
	onlineVertical: {
		width: 300,
		height: 400,
		sizeClass: "online_vertical"
	},
	onlineHalf: {
		width: 300,
		height: 300,
		sizeClass: "online_half"
	}
};

module.exports = chart_sizes;

export const transition = (t) => `
	-webkit-transition: ${t};
	-moz-transition: ${t};
	-o-transition: ${t};
	-ms-transition: ${t};
	transition: ${t};
`;

export const borderRadius = (radius) => `
	-webkit-border-radius: ${radius};
	-moz-border-radius: ${radius};
	-ms-border-radius: ${radius};
	border-radius: ${radius};
`;

export const boxShadow = (shadows) => `
	-webkit-box-shadow: ${shadows};
	-moz-box-shadow: ${shadows};
	box-shadow: ${shadows};
`;

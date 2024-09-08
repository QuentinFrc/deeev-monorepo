import * as Card from './base';

export const CardPerf = () => (
	<Card.Root>
		<Card.Content>
			<Card.OnTitle icon={'ZapFast'}>Performance</Card.OnTitle>
			<Card.Header>
				<Card.Description
					desc={
						'Nous proposons une navigation fluide avec un chargement rapide des pages et des interactions optimisées.'
					}
				/>
			</Card.Header>
		</Card.Content>
		{/*<PerfGraph />*/}
	</Card.Root>
);

/*
const PerfGraph = () => (
	<Card.SvgCard>
		<svg
			width="350px"
			viewBox="0 0 456 102"
			fill="none"
			xmlns="http://www.w3.org/2000/svg">
			<g clipPath="url(#clip0_1813_14954)">
				<mask id="path-1-inside-1_1813_14954" fill="white">
					<path d="M0 8C0 3.58172 3.58172 0 8 0H448C452.418 0 456 3.58172 456 8V102H0V8Z" />
				</mask>
				<path
					d="M0 8C0 3.58172 3.58172 0 8 0H448C452.418 0 456 3.58172 456 8V102H0V8Z"
					fill="#262626"
					fillOpacity="0.2"
				/>
				<path
					d="M88.6372 69.5778C49.2354 72.1925 -6.2168 100.713 -6.2168 100.713V112.785H465.895V11.7553C465.895 11.7553 447.876 10.7024 436.433 11.7553C402.934 14.8374 388.887 31.7127 357.388 42.2551C319.452 54.9519 296.83 58.5729 258.223 69.5778C231.787 77.1137 218.304 86.7351 190.676 89.2755C150.108 93.0059 129.31 66.8787 88.6372 69.5778Z"
					fill="white"
				/>
				<path
					d="M88.6372 69.5778C49.2354 72.1925 -6.2168 100.713 -6.2168 100.713V112.785H465.895V11.7553C465.895 11.7553 447.876 10.7024 436.433 11.7553C402.934 14.8374 388.887 31.7127 357.388 42.2551C319.452 54.9519 296.83 58.5729 258.223 69.5778C231.787 77.1137 218.304 86.7351 190.676 89.2755C150.108 93.0059 129.31 66.8787 88.6372 69.5778Z"
					fill="url(#paint0_linear_1813_14954)"
				/>
				<path
					d="M88.6372 69.5778C49.2354 72.1925 -6.2168 100.713 -6.2168 100.713V112.785H465.895V11.7553C465.895 11.7553 447.876 10.7024 436.433 11.7553C402.934 14.8374 388.887 31.7127 357.388 42.2551C319.452 54.9519 296.83 58.5729 258.223 69.5778C231.787 77.1137 218.304 86.7351 190.676 89.2755C150.108 93.0059 129.31 66.8787 88.6372 69.5778Z"
					stroke="white"
				/>
				<path
					d="M170.918 32.7593L167.666 24.0113H168.806L171.122 30.4433L171.578 31.7993H171.662L172.118 30.4553L174.458 24.0113H175.574L172.322 32.7593H170.918ZM176.557 25.4153V24.0113H177.529V25.4153H176.557ZM176.557 32.7593V26.4593H177.529V32.7593H176.557ZM181.025 32.7593C180.101 32.7593 179.789 32.3513 179.789 31.5593V27.2633H178.565V26.4593H179.789V24.5753L180.761 24.4433V26.4593H182.225V27.2633H180.761V31.3913C180.761 31.8353 180.893 31.9433 181.325 31.9433H182.225V32.7593H181.025ZM185.73 32.8673C183.918 32.8673 182.874 31.5953 182.874 29.6393C182.874 27.6473 183.906 26.3633 185.694 26.3633C187.602 26.3633 188.538 27.7673 188.394 29.7713H183.822C183.846 31.3313 184.59 32.1113 185.73 32.1113C186.654 32.1113 187.266 31.6073 187.434 30.8513H188.37C188.19 32.1233 187.11 32.8673 185.73 32.8673ZM185.694 27.1193C184.638 27.1193 183.942 27.7913 183.846 29.0753H187.446C187.41 27.7073 186.702 27.1193 185.694 27.1193ZM191.887 32.8793C190.267 32.8793 189.307 32.0393 189.307 30.7913H190.279C190.279 31.7153 190.939 32.1473 191.911 32.1473C192.895 32.1473 193.423 31.7633 193.423 31.0913C193.423 30.3473 192.967 30.1313 191.827 29.9633C190.267 29.7473 189.487 29.3513 189.487 28.1873C189.487 27.0833 190.447 26.3393 191.887 26.3393C193.375 26.3393 194.275 27.1073 194.287 28.3073H193.339C193.315 27.4313 192.751 27.0833 191.875 27.0833C190.975 27.0833 190.459 27.4793 190.459 28.0913C190.459 28.7873 190.975 29.0033 192.151 29.1713C193.567 29.3753 194.407 29.7593 194.407 31.0073C194.407 32.2073 193.399 32.8793 191.887 32.8793ZM197.899 32.8793C196.279 32.8793 195.319 32.0393 195.319 30.7913H196.291C196.291 31.7153 196.951 32.1473 197.923 32.1473C198.907 32.1473 199.435 31.7633 199.435 31.0913C199.435 30.3473 198.979 30.1313 197.839 29.9633C196.279 29.7473 195.499 29.3513 195.499 28.1873C195.499 27.0833 196.459 26.3393 197.899 26.3393C199.387 26.3393 200.287 27.1073 200.299 28.3073H199.351C199.327 27.4313 198.763 27.0833 197.887 27.0833C196.987 27.0833 196.471 27.4793 196.471 28.0913C196.471 28.7873 196.987 29.0033 198.163 29.1713C199.579 29.3753 200.419 29.7593 200.419 31.0073C200.419 32.2073 199.411 32.8793 197.899 32.8793ZM204.281 32.8673C202.469 32.8673 201.425 31.5953 201.425 29.6393C201.425 27.6473 202.457 26.3633 204.245 26.3633C206.153 26.3633 207.089 27.7673 206.945 29.7713H202.373C202.397 31.3313 203.141 32.1113 204.281 32.1113C205.205 32.1113 205.817 31.6073 205.985 30.8513H206.921C206.741 32.1233 205.661 32.8673 204.281 32.8673ZM204.245 27.1193C203.189 27.1193 202.493 27.7913 202.397 29.0753H205.997C205.961 27.7073 205.253 27.1193 204.245 27.1193ZM213.216 32.8673C211.668 32.8673 210.624 31.6793 210.624 29.6033C210.624 27.5273 211.668 26.3513 213.216 26.3513C214.32 26.3513 215.136 26.9153 215.448 27.7673H215.508V24.0113H216.48L216.468 32.7593H215.544L215.508 31.4393H215.448C215.136 32.2913 214.32 32.8673 213.216 32.8673ZM213.54 32.0513C214.8 32.0513 215.496 31.0433 215.496 29.9873V29.2193C215.496 28.1633 214.8 27.1553 213.54 27.1553C212.388 27.1553 211.62 28.0073 211.62 29.6033C211.62 31.1873 212.388 32.0513 213.54 32.0513ZM220.711 32.8673C218.899 32.8673 217.855 31.5953 217.855 29.6393C217.855 27.6473 218.887 26.3633 220.675 26.3633C222.583 26.3633 223.519 27.7673 223.375 29.7713H218.803C218.827 31.3313 219.571 32.1113 220.711 32.1113C221.635 32.1113 222.247 31.6073 222.415 30.8513H223.351C223.171 32.1233 222.091 32.8673 220.711 32.8673ZM220.675 27.1193C219.619 27.1193 218.923 27.7913 218.827 29.0753H222.427C222.391 27.7073 221.683 27.1193 220.675 27.1193ZM230.078 32.8673C228.254 32.8673 227.054 31.5713 227.054 29.6153C227.054 27.6713 228.254 26.3633 230.114 26.3633C231.602 26.3633 232.694 27.2513 232.802 28.5713H231.866C231.698 27.6713 230.99 27.1913 230.09 27.1913C228.794 27.1913 228.038 28.1753 228.038 29.6273C228.038 31.1513 228.842 32.0393 230.078 32.0393C231.086 32.0393 231.782 31.4393 231.89 30.5513H232.838C232.718 31.9553 231.602 32.8673 230.078 32.8673ZM234.178 32.7593V24.0113H235.138V27.7673H235.21C235.594 26.8433 236.458 26.3633 237.406 26.3633C238.714 26.3633 239.674 27.1073 239.674 29.0513V32.7593H238.702V29.2433C238.702 27.8273 238.186 27.1793 237.094 27.1793C235.906 27.1793 235.138 28.1153 235.138 29.3513V32.7593H234.178ZM243.591 32.8673C242.043 32.8673 240.999 31.6793 240.999 29.6033C240.999 27.5273 242.043 26.3513 243.591 26.3513C244.695 26.3513 245.511 26.9153 245.823 27.7673H245.883L245.919 26.4593H246.855V32.7593H245.883V31.4393H245.823C245.511 32.2913 244.695 32.8673 243.591 32.8673ZM243.915 32.0513C245.175 32.0513 245.871 31.0433 245.871 29.9873V29.2193C245.871 28.1633 245.175 27.1553 243.915 27.1553C242.763 27.1553 241.995 28.0073 241.995 29.6033C241.995 31.1873 242.763 32.0513 243.915 32.0513ZM248.674 32.7593V26.4593H249.538L249.598 27.6233H249.646C249.922 26.8193 250.666 26.3753 251.518 26.3753C251.662 26.3753 251.794 26.3873 251.902 26.3993V27.3233C251.794 27.3113 251.662 27.2993 251.518 27.2993C250.414 27.2993 249.718 27.9233 249.634 29.0033V32.7593H248.674ZM255.234 34.8833C253.806 34.8833 252.858 34.2233 252.714 33.1313H253.662C253.77 33.7553 254.37 34.1393 255.258 34.1393C256.446 34.1393 257.154 33.6713 257.154 32.3513V31.0433H257.082C256.794 31.8593 255.99 32.3993 254.934 32.3993C253.386 32.3993 252.378 31.2713 252.378 29.3753C252.378 27.4793 253.41 26.3513 254.958 26.3513C256.002 26.3513 256.794 26.8913 257.082 27.6953H257.154L257.178 26.4593H258.114V32.2673C258.114 34.1753 256.95 34.8833 255.234 34.8833ZM255.246 31.6313C256.458 31.6313 257.142 30.6713 257.154 29.7593V28.9913C257.142 28.0793 256.482 27.1313 255.258 27.1313C254.106 27.1313 253.374 27.9833 253.374 29.3753C253.374 30.8153 254.118 31.6313 255.246 31.6313ZM262.265 32.8673C260.453 32.8673 259.409 31.5953 259.409 29.6393C259.409 27.6473 260.441 26.3633 262.229 26.3633C264.137 26.3633 265.073 27.7673 264.929 29.7713H260.357C260.381 31.3313 261.125 32.1113 262.265 32.1113C263.189 32.1113 263.801 31.6073 263.969 30.8513H264.905C264.725 32.1233 263.645 32.8673 262.265 32.8673ZM262.229 27.1193C261.173 27.1193 260.477 27.7913 260.381 29.0753H263.981C263.945 27.7073 263.237 27.1193 262.229 27.1193ZM266.31 32.7593V26.4593H267.234L267.27 27.7673H267.342C267.714 26.8433 268.554 26.3633 269.502 26.3633C270.462 26.3633 271.254 26.7953 271.566 27.8753H271.662C272.034 26.8793 272.91 26.3633 273.942 26.3633C275.214 26.3633 276.15 27.1073 276.15 29.0513V32.7593H275.19V29.2433C275.19 27.8273 274.686 27.1793 273.606 27.1793C272.454 27.1793 271.722 28.1153 271.722 29.3513V32.7593H270.738V29.2433C270.738 27.8273 270.246 27.1793 269.178 27.1793C268.014 27.1793 267.27 28.1153 267.27 29.3513V32.7593H266.31ZM280.324 32.8673C278.512 32.8673 277.468 31.5953 277.468 29.6393C277.468 27.6473 278.5 26.3633 280.288 26.3633C282.196 26.3633 283.132 27.7673 282.988 29.7713H278.416C278.44 31.3313 279.184 32.1113 280.324 32.1113C281.248 32.1113 281.86 31.6073 282.028 30.8513H282.964C282.784 32.1233 281.704 32.8673 280.324 32.8673ZM280.288 27.1193C279.232 27.1193 278.536 27.7913 278.44 29.0753H282.04C282.004 27.7073 281.296 27.1193 280.288 27.1193ZM284.369 32.7593V26.4593H285.293L285.329 27.7673H285.401C285.785 26.8433 286.649 26.3633 287.597 26.3633C288.905 26.3633 289.865 27.1073 289.865 29.0513V32.7593H288.893V29.2433C288.893 27.8273 288.377 27.1793 287.285 27.1793C286.097 27.1793 285.329 28.1153 285.329 29.3513V32.7593H284.369ZM293.15 32.7593C292.226 32.7593 291.914 32.3513 291.914 31.5593V27.2633H290.69V26.4593H291.914V24.5753L292.886 24.4433V26.4593H294.35V27.2633H292.886V31.3913C292.886 31.8353 293.018 31.9433 293.45 31.9433H294.35V32.7593H293.15ZM298.157 27.5513V26.4593H299.153V27.5513H298.157ZM298.157 32.7593V31.6793H299.153V32.7593H298.157Z"
					fill="#D4D4D4"
				/>
				<path
					d="M303.074 32.7593V32.5073C303.074 28.9313 307.298 28.5833 307.298 26.6753C307.298 25.9553 306.806 25.5113 306.074 25.5113C305.294 25.5113 304.778 26.0153 304.85 26.9273H303.098C303.05 25.1513 304.298 23.9993 306.182 23.9993C307.946 23.9993 309.122 24.9833 309.122 26.5913C309.122 29.1353 305.99 29.7593 305.318 31.2113H309.206V32.7593H303.074ZM310.475 32.7593V26.3273H312.179L312.239 27.4913H312.311C312.635 26.6393 313.415 26.2073 314.279 26.2073C315.179 26.2073 315.971 26.5913 316.319 27.6473H316.415C316.715 26.6873 317.567 26.2073 318.539 26.2073C319.775 26.2073 320.735 26.9393 320.735 28.8713V32.7593H318.971V29.2553C318.971 28.1753 318.635 27.6473 317.831 27.6473C316.979 27.6473 316.487 28.3673 316.487 29.1833V32.7593H314.723V29.2553C314.723 28.1753 314.375 27.6473 313.583 27.6473C312.719 27.6473 312.239 28.3673 312.239 29.1833V32.7593H310.475ZM324.618 32.8793C322.866 32.8793 321.786 32.0153 321.798 30.7193H323.526C323.538 31.3553 323.994 31.6313 324.666 31.6313C325.314 31.6313 325.65 31.3793 325.65 30.9593C325.65 30.4553 325.314 30.3473 324.414 30.2153C322.746 29.9633 321.954 29.5073 321.954 28.2593C321.954 27.0233 323.046 26.2073 324.678 26.2073C326.25 26.2073 327.282 27.0113 327.318 28.2473H325.578C325.578 27.6953 325.206 27.4433 324.63 27.4433C324.066 27.4433 323.718 27.6833 323.718 28.1033C323.718 28.5713 324.114 28.7153 325.122 28.8473C326.706 29.0513 327.45 29.5433 327.45 30.8033C327.45 32.1353 326.322 32.8793 324.618 32.8793Z"
					fill="#FAFAFA"
				/>
				<path
					d="M336.791 -8.58057L336.791 121.34"
					stroke="#FAFAFA"
					strokeDasharray="10 10"
				/>
			</g>
			<path
				d="M-1 8C-1 3.02944 3.02944 -1 8 -1H448C452.971 -1 457 3.02944 457 8H455C455 4.13401 451.866 1 448 1H8C4.13401 1 1 4.13401 1 8H-1ZM456 102H0H456ZM-1 102V8C-1 3.02944 3.02944 -1 8 -1V1C4.13401 1 1 4.13401 1 8V102H-1ZM448 -1C452.971 -1 457 3.02944 457 8V102H455V8C455 4.13401 451.866 1 448 1V-1Z"
				fill="#262626"
				mask="url(#path-1-inside-1_1813_14954)"
			/>
			<defs>
				<linearGradient
					id="paint0_linear_1813_14954"
					x1="229.839"
					y1="11.2874"
					x2="229.839"
					y2="112.785"
					gradientUnits="userSpaceOnUse">
					<stop stopColor="#101010" stopOpacity="0" />
					<stop offset="1" stopColor="#101010" />
				</linearGradient>
				<clipPath id="clip0_1813_14954">
					<path
						d="M0 8C0 3.58172 3.58172 0 8 0H448C452.418 0 456 3.58172 456 8V102H0V8Z"
						fill="white"
					/>
				</clipPath>
			</defs>
		</svg>
	</Card.SvgCard>
);
*/

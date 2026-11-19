import { __toESM } from "../_runtime.mjs";
import { require_jsx_runtime, require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { HeadContent, Scripts, createFileRoute, createRootRoute, createRouter, lazyRouteComponent } from "../_libs/@tanstack/react-router+[2...].mjs";
import { clsx } from "../_libs/clsx.mjs";
import { twMerge } from "../_libs/tailwind-merge.mjs";
// node_modules/.nitro/vite/services/ssr/assets/router-Du22M35a.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
/**
* ─────────────────────────────────────────────────────────────
* WILFA TECH · Favour Williams — all editable site content
* ─────────────────────────────────────────────────────────────
* Everything a visitor reads lives in this one file.
* Edit the values below; the layout and animations adapt.
*
* Placeholders are deliberate. Anything set to null renders
* as a clearly-marked placeholder until you supply the real value.
*/
var person = {
	name: "Favour Williams",
	shortName: "Favour",
	company: "WILFA TECH",
	title: "Founder, WILFA TECH",
	location: "Ogbomoso, Nigeria"
};
var links = {
	email: "williamsfavouroluwasemilore@gmail.com",
	github: "https://github.com/Hooplordz",
	githubHandle: "Hooplordz",
	linkedin: null
};
var navItems = [
	{
		label: "Work",
		href: "#work"
	},
	{
		label: "Expertise",
		href: "#expertise"
	},
	{
		label: "About",
		href: "#about"
	},
	{
		label: "Let's build",
		href: "#collaborate"
	}
];
var hero = {
	eyebrow: "Founder · WILFA TECH",
	headline: ["Machines", "that think"],
	intro: "I'm Favour Williams. I design and build at the meeting point of robotics, artificial intelligence, connected devices and software — from the first sketch to a working system.",
	primaryCta: {
		label: "See my work",
		href: "#work"
	},
	secondaryCta: {
		label: "Contact me",
		href: "#contact"
	},
	ringText: "Robotics · Artificial Intelligence · Internet of Things · Software Engineering · "
};
var stats = [
	{
		value: 3,
		suffix: "",
		label: "Years of hands-on engineering"
	},
	{
		value: 10,
		suffix: "",
		label: "Projects designed & built"
	},
	{
		value: 30,
		suffix: "",
		label: "Hardware prototypes"
	},
	{
		value: 50,
		suffix: "",
		label: "Technology tools in the toolkit"
	}
];
var tickerItems = [
	"Robotics",
	"Artificial Intelligence",
	"IoT",
	"Engineering",
	"Innovation",
	"Software Development"
];
var projects = [
	{
		slug: "smart-home-automation",
		name: "Smart Home Automation",
		category: "Smart Living · IoT",
		role: "Founder & lead engineer — edit to your actual role",
		description: "A connected home system that links sensors, lighting and climate control to a single hub, so a home can respond to the people living in it.",
		stack: [
			"ESP32",
			"C++",
			"MQTT",
			"Node.js",
			"React",
			"TypeScript",
			"Home Assistant"
		],
		image: "/img/smart-home.png",
		imageAlt: "Engraved illustration of a house cutaway with connected sensors and a central hub",
		liveUrl: null,
		caseStudyUrl: null,
		status: "sample"
	},
	{
		slug: "robotics-autonomous-systems",
		name: "Autonomous Rover",
		category: "Robotics & Autonomous Systems",
		role: "Robotics engineer — edit to your actual role",
		description: "A small mobile robot that maps its surroundings and plans its own path — exploring perception, navigation and motor control on real hardware.",
		stack: [
			"ROS 2",
			"Python",
			"C++",
			"OpenCV",
			"LiDAR",
			"Raspberry Pi",
			"Arduino"
		],
		image: "/img/robotics.png",
		imageAlt: "Engraved illustration of a four-wheeled rover with a lidar dome and camera mast",
		liveUrl: null,
		caseStudyUrl: null,
		status: "sample"
	},
	{
		slug: "iot-monitoring-systems",
		name: "Field Sense",
		category: "IoT Monitoring Systems",
		role: "Systems & firmware engineer — edit to your actual role",
		description: "A network of low-power sensor nodes streaming environmental data to a live dashboard, with alerts when readings cross a threshold.",
		stack: [
			"LoRaWAN",
			"ESP32",
			"MicroPython",
			"InfluxDB",
			"Grafana",
			"Docker"
		],
		image: "/img/iot-monitoring.png",
		imageAlt: "Engraved illustration of sensor nodes in a field connected wirelessly to a gateway",
		liveUrl: null,
		caseStudyUrl: null,
		status: "sample"
	},
	{
		slug: "ai-powered-applications",
		name: "Applied Intelligence",
		category: "AI-Powered Applications",
		role: "AI & software engineer — edit to your actual role",
		description: "Software that puts machine learning to practical use — vision, language and prediction features wrapped in interfaces people actually enjoy.",
		stack: [
			"Python",
			"PyTorch",
			"TensorFlow",
			"FastAPI",
			"React",
			"TypeScript",
			"LLM APIs"
		],
		image: "/img/ai-apps.png",
		imageAlt: "Engraved illustration of a neural network forming a human head in profile",
		liveUrl: null,
		caseStudyUrl: null,
		status: "sample"
	}
];
var expertise = [
	{
		domain: "Robotics",
		line: "Machines that sense, decide and move.",
		skills: [
			"ROS 2",
			"Kinematics",
			"Motor control",
			"Sensor fusion",
			"CAD & prototyping",
			"Embedded C/C++"
		]
	},
	{
		domain: "Artificial Intelligence",
		line: "Models that turn data into decisions.",
		skills: [
			"Machine learning",
			"Computer vision",
			"PyTorch",
			"TensorFlow",
			"NLP & LLMs",
			"Data pipelines"
		]
	},
	{
		domain: "Internet of Things",
		line: "Devices that talk to each other — reliably.",
		skills: [
			"ESP32 & Arduino",
			"Raspberry Pi",
			"MQTT",
			"LoRaWAN",
			"Low-power design",
			"Edge computing"
		]
	},
	{
		domain: "Software Engineering",
		line: "Clean systems from firmware to front end.",
		skills: [
			"TypeScript",
			"React",
			"Python",
			"Node.js",
			"REST & APIs",
			"Git & CI"
		]
	}
];
var about = {
	heading: "About",
	paragraphs: [
		"I'm Favour Williams — an engineer who has always wanted to know how things work, and then how to make them work better. That curiosity started with taking things apart and has grown into building systems that combine hardware and software.",
		"My work sits where four fields meet: robotics, artificial intelligence, the Internet of Things and software engineering. I enjoy the whole stack — soldering a sensor, writing the firmware, training the model and shipping the interface on top.",
		"I founded WILFA TECH to give that work a home: a studio for practical, well-engineered technology that solves real problems for real people, starting close to home and built to scale beyond it."
	],
	facts: [
		{
			label: "Education",
			value: "Ladoke Akintola School of Technology",
			hint: "Add your institution & programme"
		},
		{
			label: "Based in",
			value: person.location,
			hint: "Add your city & country"
		},
		{
			label: "Founded",
			value: "WILFA TECH",
			hint: ""
		},
		{
			label: "Focus",
			value: "Robotics · AI · IoT · Software",
			hint: ""
		}
	],
	ambition: "The ambition: build intelligent machines and connected systems that are affordable, dependable and genuinely useful — and help grow the next generation of engineers along the way.",
	mission: {
		label: "The mission behind WILFA TECH",
		statement: "Engineer technology that thinks, senses and serves people."
	}
};
var collaborate = {
	kicker: "Open to collaboration",
	headline: [
		"Got an idea that",
		"needs to move,",
		"sense or think?"
	],
	body: "Whether it's a robot, a connected product, an AI feature or the software that ties it together — I'd love to hear about it. Research partners, startups, teams and fellow builders are all welcome.",
	points: [
		{
			title: "Hardware and software, together",
			body: "One person who understands the circuit, the firmware and the app — so nothing gets lost in between."
		},
		{
			title: "Prototype first",
			body: "Ideas get tested on real hardware early, so decisions are made with evidence rather than guesses."
		},
		{
			title: "Clear communication",
			body: "Honest timelines, plain language and regular progress you can actually see."
		}
	]
};
var contact = {
	stamp: "Let's build",
	sub: "Something remarkable",
	body: "Tell me what you are working on. I read every message and reply personally."
};
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var styles = {
	solid: "bg-bone text-ink hover:bg-white",
	outline: "border border-bone/40 text-bone hover:border-bone hover:bg-bone/5",
	signal: "bg-signal text-ink hover:brightness-110"
};
/** Compact uppercase button with a sliding arrow. Renders a muted
*  placeholder when `href` is null (e.g. a link not supplied yet). */
function ArrowLink({ href, children, variant = "solid", external, disabledLabel, className }) {
	const base = "btn-arrow inline-flex h-11 items-center gap-2 rounded-[3px] px-4 font-heading text-[0.95rem] tracking-[0.12em] uppercase whitespace-nowrap transition-colors duration-300";
	if (!href) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		"aria-disabled": "true",
		className: cn(base, "cursor-not-allowed border border-dashed border-line text-ash", className),
		children: disabledLabel ?? children
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
		href,
		className: cn(base, styles[variant], className),
		...external ? {
			target: "_blank",
			rel: "noreferrer noopener"
		} : {},
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			"aria-hidden": "true",
			className: "arrow",
			children: "→"
		})]
	});
}
function SiteHeader() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 24);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	(0, import_react.useEffect)(() => {
		document.body.style.overflow = open ? "hidden" : "";
		const onKey = (e) => e.key === "Escape" && setOpen(false);
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [open]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: cn("fixed inset-x-0 top-0 z-50 transition-[background-color,backdrop-filter,border-color] duration-500", scrolled || open ? "border-b border-line bg-ink/90 backdrop-blur-md shadow-sm" : "border-b border-transparent"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-16 max-w-8xl items-center justify-between gap-6 px-4 md:h-[4.5rem] md:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#top",
					className: "intro-nav group flex items-baseline gap-2",
					style: { ["--i"]: 0 },
					"aria-label": `${person.company} — home`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-heading text-[1.65rem] leading-none tracking-[0.16em] uppercase text-bone",
						children: "Wilfa"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-mono text-[0.65rem] tracking-[0.3em] text-signal uppercase transition-colors group-hover:text-bone",
						children: "Tech"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					"aria-label": "Main",
					className: "hidden md:block",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "flex gap-7 lg:gap-9",
						children: navItems.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "intro-nav",
							style: { ["--i"]: i + 1 },
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: item.href,
								className: "group relative font-heading text-[0.95rem] tracking-[0.16em] uppercase text-bone/80 transition-colors hover:text-signal",
								children: [item.label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-signal transition-transform duration-500 group-hover:scale-x-100" })]
							})
						}, item.href))
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "intro-nav hidden md:block",
					style: { ["--i"]: navItems.length + 1 },
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLink, {
						href: "#contact",
						className: "h-9 text-[0.85rem]",
						children: "Contact me"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					"aria-label": open ? "Close menu" : "Open menu",
					"aria-expanded": open,
					"aria-controls": "mobile-menu",
					onClick: () => setOpen((o) => !o),
					className: "intro-nav relative grid size-11 place-items-center rounded-full border border-line bg-charcoal transition-colors hover:border-signal md:hidden",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						"aria-hidden": "true",
						className: "relative block h-2.5 w-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("absolute left-0 h-0.5 w-5 bg-bone transition-transform duration-300", open ? "top-1 rotate-45" : "top-0") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("absolute left-0 h-0.5 w-5 bg-bone transition-transform duration-300", open ? "top-1 -rotate-45" : "top-2") })]
					})
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			id: "mobile-menu",
			inert: !open,
			className: cn("fixed inset-x-0 top-16 bottom-0 overflow-y-auto border-t border-line bg-ink transition-[opacity,transform] duration-500 md:hidden", open ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-4 opacity-0"),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				"aria-label": "Mobile",
				className: "flex min-h-full flex-col justify-between px-4 pt-6 pb-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", { children: [...navItems, {
					label: "Contact",
					href: "#contact"
				}].map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "border-b border-line",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: item.href,
						onClick: () => setOpen(false),
						className: "flex items-baseline justify-between py-4 font-heading text-5xl uppercase text-bone transition-colors hover:text-signal",
						children: [item.label, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "font-mono text-xs text-ash",
							children: ["0", i + 1]
						})]
					})
				}, item.href)) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-10 font-mono text-xs tracking-[0.2em] text-ash uppercase",
					children: [
						person.name,
						" · ",
						person.company
					]
				})]
			})
		})]
	});
}
/** Thick + hairline editorial divider. Optionally draws in on scroll. */
function DoubleRule({ className, animate = true, flip = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		"aria-hidden": "true",
		"data-reveal": animate ? "draw" : void 0,
		className: cn("double-rule text-bone/80", flip && "rotate-180", className)
	});
}
function SiteFooter() {
	const year = (/* @__PURE__ */ new Date()).getFullYear();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "bg-ink",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-8xl px-4 md:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DoubleRule, { animate: false }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-10 py-12 md:grid-cols-[1.4fr_1fr_1fr]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col items-start gap-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "flex items-baseline gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-heading text-5xl tracking-[0.14em] uppercase",
									children: "Wilfa"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono text-xs tracking-[0.3em] text-signal uppercase",
									children: "Tech"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "max-w-sm text-sm leading-relaxed text-ash",
								children: [
									"Robotics, artificial intelligence, the Internet of Things and software engineering — founded by ",
									person.name,
									"."
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLink, {
								href: "#top",
								variant: "outline",
								className: "h-9 text-[0.8rem]",
								children: "Back to top"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
						"aria-label": "Footer",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-mono text-[0.7rem] tracking-[0.2em] text-ash uppercase",
							children: "Sections"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-4 space-y-1",
							children: [...navItems, {
								label: "Contact",
								href: "#contact"
							}].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: item.href,
								className: "font-heading text-2xl uppercase underline-offset-4 hover:text-signal",
								children: item.label
							}) }, item.href))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-mono text-[0.7rem] tracking-[0.2em] text-ash uppercase",
						children: "Elsewhere"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-4 space-y-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: links.github,
								target: "_blank",
								rel: "noreferrer noopener",
								className: "font-heading text-2xl uppercase hover:text-signal",
								children: "GitHub ↗"
							}) }),
							links.linkedin && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: links.linkedin,
								target: "_blank",
								rel: "noreferrer noopener",
								className: "font-heading text-2xl uppercase hover:text-signal",
								children: "LinkedIn ↗"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: `mailto:${links.email}`,
								className: "font-heading text-2xl uppercase hover:text-signal",
								children: "Email ↗"
							}) })
						]
					})] })
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-line",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mx-auto flex max-w-8xl flex-wrap justify-between gap-2 px-4 py-5 font-mono text-[0.68rem] tracking-[0.12em] text-ash uppercase md:px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
					"© ",
					year,
					" ",
					person.company,
					" · ",
					person.name
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Built with React, TypeScript & Tailwind CSS" })]
			})
		})]
	});
}
function NotFoundPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto flex min-h-[80svh] max-w-8xl flex-col justify-center px-4 pt-24 md:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-mono text-xs tracking-[0.2em] text-signal uppercase",
				children: "Error 404"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-4 font-heading text-[clamp(4rem,14vw,12rem)] leading-[0.85] uppercase",
				children: "Signal lost"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-6 max-w-md text-lg text-bone/75",
				children: "This page doesn’t exist — but the rest of the system is running fine."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "/",
				className: "mt-8 font-heading text-lg tracking-[0.12em] uppercase underline underline-offset-4 hover:text-signal",
				children: "Back to WILFA TECH →"
			})
		]
	});
}
var site = {
	name: "Favour Williams — WILFA TECH",
	role: "Founder, WILFA TECH",
	description: "Favour Williams is the founder of WILFA TECH, building at the intersection of robotics, artificial intelligence, the Internet of Things and software engineering.",
	summary: "Robotics, AI, IoT and software engineering — designed and built by Favour Williams at WILFA TECH."
};
var siteName = site.name;
var siteDescription = site.description;
var Route$1 = createRootRoute({
	notFoundComponent: NotFoundPage,
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: siteName },
			{
				name: "description",
				content: siteDescription
			},
			{
				property: "og:title",
				content: siteName
			},
			{
				property: "og:description",
				content: siteDescription
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:image",
				content: "/.netlify/images?url=/img/hero.png&w=1200&fm=jpg"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "theme-color",
				content: "#090909"
			}
		],
		links: [{
			rel: "icon",
			type: "image/svg+xml",
			href: "/favicon.svg"
		}]
	}),
	shellComponent: RootDocument
});
function RootDocument({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("head", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", { dangerouslySetInnerHTML: { __html: "document.documentElement.classList.add('js')" } }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": "true",
				className: "scroll-progress"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#main-content",
				className: "sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[70] focus:bg-bone focus:p-4 focus:text-ink",
				children: "Skip to content"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				id: "main-content",
				tabIndex: -1,
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
		] })]
	});
}
var $$splitComponentImporter = () => import("./routes-BAHazncS.mjs");
var rootRouteChildren = { IndexRoute: createFileRoute("/")({
	head: () => ({ meta: [{ title: `${site.name} | Robotics, AI, IoT & Software Engineering` }] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
}).update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$1
}) };
var routeTree = Route$1._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
var getRouter = () => {
	return createRouter({
		routeTree,
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
export { ArrowLink, DoubleRule, about, cn, collaborate, contact, expertise, hero, links, person, projects, router_exports, stats, tickerItems };

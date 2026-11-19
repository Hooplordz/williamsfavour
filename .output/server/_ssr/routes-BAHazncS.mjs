import { __toESM } from "../_runtime.mjs";
import { ArrowLink, DoubleRule, about, cn, collaborate, contact, expertise, hero, links, person, projects, stats, tickerItems } from "./router-Du22M35a.mjs";
import { require_jsx_runtime, require_react } from "../_libs/@tanstack/react-router+[...].mjs";
// node_modules/.nitro/vite/services/ssr/assets/routes-BAHazncS.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/**
* Image helper for Vercel deployment.
* Images are served directly from the public directory.
*/
function cdn(src, _width, _quality = 75) {
	return src;
}
/**
* Use the original image URL.
* Vercel will serve the original public asset.
*/
function cdnSrcSet(_src, _widths) {
	return "";
}
/** Small monospace label used above headings and on metadata. */
function Eyebrow({ children, className, accent }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
		className: cn("flex items-center gap-2 font-mono text-[0.72rem] tracking-[0.18em] uppercase text-ash", className),
		children: [accent && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			"aria-hidden": "true",
			className: "inline-block size-1.5 rotate-45 bg-signal"
		}), children]
	});
}
/** Decorative wall of tiny words used as a background texture. */
function WordWall({ variant = "fade", className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		"aria-hidden": "true",
		className: cn("word-wall", variant === "full" && "word-wall--full", variant === "radial" && "word-wall--radial", className)
	});
}
function Hero() {
	let letter = 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "top",
		className: "relative isolate overflow-hidden pt-16 md:pt-[4.5rem]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WordWall, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": "true",
				className: "absolute inset-x-0 top-16 md:top-[4.5rem]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto max-w-8xl px-4 md:px-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "double-rule intro-nav text-bone/70",
						style: { ["--i"]: 6 }
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto grid min-h-[max(38rem,min(calc(100svh-4.5rem),58rem))] max-w-8xl items-center gap-10 px-4 pt-12 pb-16 md:grid-cols-[1.15fr_1fr] md:gap-6 md:px-6 md:pt-8 md:pb-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-6 md:pl-[4%]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "intro-rise",
							style: { ["--i"]: -4 },
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, {
								accent: true,
								children: hero.eyebrow
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							"aria-label": hero.headline.join(" "),
							className: "font-heading text-[min(21vw,7.5rem)] leading-[0.86] uppercase md:text-[min(10vw,10rem)]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								"aria-hidden": "true",
								children: hero.headline.map((line, li) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block overflow-hidden pb-[0.05em]",
									children: line.split("").map((ch, ci) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: `intro-letter ${li === hero.headline.length - 1 ? "text-outline" : ""}`,
										style: { ["--i"]: letter++ },
										children: ch === " " ? "\xA0" : ch
									}, ci))
								}, li))
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "intro-rise max-w-md text-base leading-relaxed font-medium text-bone/85 md:text-lg",
							style: { ["--i"]: 0 },
							children: hero.intro
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "intro-rise flex flex-wrap gap-3",
							style: { ["--i"]: 1 },
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLink, {
								href: hero.primaryCta.href,
								children: hero.primaryCta.label
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLink, {
								href: hero.secondaryCta.href,
								variant: "outline",
								children: hero.secondaryCta.label
							})]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mx-auto grid w-full max-w-[34rem] place-items-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
							"aria-hidden": "true",
							viewBox: "0 0 200 200",
							className: "spin-slow absolute inset-0 size-full text-ash",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
								id: "ring",
								d: "M100,100 m-92,0 a92,92 0 1,1 184,0 a92,92 0 1,1 -184,0"
							}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
								fill: "currentColor",
								className: "font-mono",
								fontSize: "6.2",
								letterSpacing: "2.4",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textPath", {
									href: "#ring",
									children: hero.ringText.repeat(2).toUpperCase()
								})
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "intro-circle relative m-[9%] aspect-square w-[82%] overflow-hidden rounded-full border-[6px] border-bone bg-ink",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: cdn("/img/hero.png", 800),
								srcSet: cdnSrcSet("/img/hero.png", [
									480,
									800,
									1024
								]),
								sizes: "(min-width: 48rem) 30rem, 80vw",
								alt: `Engraved illustration of a robotic hand reaching for a glowing microchip — the ${person.company} emblem`,
								width: 1024,
								height: 1024,
								fetchPriority: "high",
								className: "size-full scale-[1.12] object-cover object-[50%_35%]"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							"aria-hidden": "true",
							className: "intro-rise absolute right-[6%] bottom-[10%] rounded-full bg-signal px-3 py-1.5 font-mono text-[0.65rem] tracking-[0.2em] text-ink uppercase",
							style: { ["--i"]: 2 },
							children: "Robotics × AI × IoT"
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: "#numbers",
				className: "intro-rise absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 font-mono text-[0.65rem] tracking-[0.3em] text-ash uppercase md:flex",
				style: { ["--i"]: 3 },
				children: ["Scroll", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					"aria-hidden": "true",
					className: "block h-8 w-px animate-pulse bg-ash"
				})]
			})
		]
	});
}
var DURATION = 1600;
/** A giant numeral that counts up once visible. When no value has been
*  supplied yet it scrambles briefly and settles on an "XX" placeholder. */
function StatCounter({ stat }) {
	const ref = (0, import_react.useRef)(null);
	const [display, setDisplay] = (0, import_react.useState)(stat.value === null ? "XX" : "0");
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		const io = new IntersectionObserver(([entry]) => {
			if (!entry.isIntersecting) return;
			io.disconnect();
			if (stat.value === null) {
				if (reduce) return;
				let ticks = 0;
				const id = window.setInterval(() => {
					ticks++;
					setDisplay(ticks > 14 ? "XX" : String(Math.floor(Math.random() * 90 + 10)));
					if (ticks > 14) window.clearInterval(id);
				}, 60);
				return;
			}
			const target = stat.value;
			if (reduce) return setDisplay(String(target));
			const start = performance.now();
			const step = (now) => {
				const t = Math.min(1, (now - start) / DURATION);
				const eased = 1 - Math.pow(1 - t, 4);
				setDisplay(String(Math.round(target * eased)));
				if (t < 1) requestAnimationFrame(step);
			};
			requestAnimationFrame(step);
		}, { threshold: .4 });
		io.observe(el);
		return () => io.disconnect();
	}, [stat.value]);
	const placeholder = stat.value === null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		ref,
		className: placeholder ? "text-outline" : void 0,
		children: [display, !placeholder && stat.suffix ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-signal",
			children: stat.suffix
		}) : null]
	});
}
function Numbers() {
	const pending = stats.some((s) => s.value === null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "numbers",
		"aria-labelledby": "numbers-heading",
		className: "relative overflow-hidden bg-charcoal",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative isolate",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WordWall, { variant: "full" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative mx-auto max-w-8xl px-4 pt-14 md:px-6 md:pt-20",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-end justify-between gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							id: "numbers-heading",
							"data-reveal": "up",
							className: "font-heading text-5xl leading-none uppercase md:text-7xl",
							children: "By the numbers"
						}), pending && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							"data-reveal": "up",
							className: "max-w-xs font-mono text-[0.7rem] leading-relaxed tracking-[0.12em] text-ash uppercase",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-signal",
								children: "●"
							}), " Figures pending verification — they appear here once confirmed."]
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "relative mx-auto grid max-w-[120rem] grid-cols-2 pt-6 pb-10 md:grid-cols-4 md:pt-10 md:pb-16",
					children: stats.map((stat, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: cn("flex flex-col items-center justify-center px-3 py-8 text-center md:py-10", i % 2 === 1 && "border-l", i >= 2 && "border-t md:border-t-0", i === 2 && "md:border-l"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							"data-reveal": "stamp",
							style: { ["--i"]: i },
							className: "font-heading text-[22vw] leading-none tabular-nums md:text-[min(11vw,12rem)]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCounter, { stat })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							"data-reveal": "up",
							style: { ["--i"]: i + 2 },
							className: "mt-3 max-w-[16ch] font-heading text-lg leading-[1.05] uppercase text-bone/85 md:text-2xl",
							children: stat.label
						})]
					}, stat.label))
				})
			]
		})
	});
}
/** Infinite horizontal text strip. Content is duplicated so the loop is seamless. */
function Ticker({ items, reverse, seconds = 38, className }) {
	const group = (hidden) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex shrink-0",
		"aria-hidden": hidden || void 0,
		children: items.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "flex items-center whitespace-nowrap",
			children: [item, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				"aria-hidden": "true",
				className: "mx-[0.9em] inline-block size-[0.32em] rotate-45 bg-signal"
			})]
		}, i))
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("marquee overflow-hidden", className),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: cn("marquee-track", reverse && "marquee-track--reverse"),
			style: { ["--marquee-time"]: `${seconds}s` },
			children: [group(false), group(true)]
		})
	});
}
function TickerStrip() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		"aria-label": tickerItems.join(", "),
		className: "bg-ink text-bone",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DoubleRule, {
				animate: false,
				className: "text-bone/70"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ticker, {
				items: tickerItems,
				className: "py-3 font-heading text-3xl tracking-[0.03em] uppercase md:py-5 md:text-5xl"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": "true",
				className: "border-y border-line",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ticker, {
					items: tickerItems,
					reverse: true,
					seconds: 60,
					className: "py-2 font-mono text-[0.7rem] tracking-[0.3em] text-ash uppercase md:text-xs"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DoubleRule, {
				animate: false,
				flip: true,
				className: "text-bone/70"
			})
		]
	});
}
/** Large heading whose letters rise into place when scrolled into view. */
function SplitHeading({ text, as: Tag = "h2", className, id }) {
	let l = 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, {
		id,
		"aria-label": text,
		"data-reveal": "letters",
		className: cn("font-heading uppercase leading-[0.9]", className),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			"aria-hidden": "true",
			children: text.split(" ").map((word, wi) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_react.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "inline-block overflow-hidden whitespace-nowrap pb-[0.04em] align-bottom",
				children: word.split("").map((ch, ci) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "letter",
					style: { ["--l"]: l++ },
					children: ch
				}, ci))
			}), " "] }, wi))
		})
	});
}
/** Technology chips. Scrolls as a marquee on small screens, wraps on desktop. */
function StackList({ items }) {
	const chips = (hidden) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		"aria-hidden": hidden || void 0,
		className: `flex shrink-0 gap-1.5 pr-1.5 md:shrink md:flex-wrap md:pr-0 ${hidden ? "md:hidden" : ""}`,
		children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
			className: "rounded-[3px] border border-line bg-graphite px-2.5 py-1 font-mono text-[0.7rem] whitespace-nowrap text-bone/85",
			children: item
		}, item))
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "marquee overflow-hidden md:overflow-visible",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "marquee-track md:w-auto! md:animate-none!",
			style: { ["--marquee-time"]: "28s" },
			children: [chips(), chips(true)]
		})
	});
}
var statusLabel = {
	sample: "Project",
	"in-progress": "In development",
	completed: "Completed"
};
function ProjectRow({ project, index, total }) {
	const flipped = index % 2 === 1;
	const num = (n) => String(n).padStart(2, "0");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DoubleRule, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		"aria-labelledby": `${project.slug}-title`,
		className: "grid items-center gap-8 py-10 md:grid-cols-2 md:gap-14 md:py-16",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: cn("flex min-w-0 flex-col items-start gap-4", flipped && "md:order-2"),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					"data-reveal": "up",
					className: "flex w-full flex-wrap items-center justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "font-mono text-[0.72rem] tracking-[0.18em] text-ash uppercase",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-bone",
								children: num(index + 1)
							}),
							" / ",
							num(total),
							" — ",
							project.category
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: cn("rounded-full border px-2.5 py-0.5 font-mono text-[0.62rem] tracking-[0.16em] uppercase", project.status === "completed" ? "border-bone/50 text-bone" : "border-signal/60 text-signal"),
						children: statusLabel[project.status]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					id: `${project.slug}-title`,
					"data-reveal": "up",
					style: { ["--i"]: 1 },
					className: "font-heading text-[clamp(3rem,7vw,6.25rem)] leading-[0.88] uppercase",
					children: project.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					"data-reveal": "up",
					style: { ["--i"]: 2 },
					className: "text-sm font-semibold text-bone/70",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-ash",
							children: "Role:"
						}),
						" ",
						project.role
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					"data-reveal": "up",
					style: { ["--i"]: 3 },
					className: "max-w-xl text-lg leading-snug font-medium md:text-xl",
					children: project.description
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					"data-reveal": "up",
					style: { ["--i"]: 4 },
					className: "w-full max-w-xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-2 font-heading text-sm tracking-[0.2em] text-ash uppercase",
						children: "Stack"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StackList, { items: project.stack })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					"data-reveal": "up",
					style: { ["--i"]: 5 },
					className: "mt-2 flex flex-wrap gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLink, {
						href: project.liveUrl,
						external: true,
						disabledLabel: "Live link · coming soon",
						children: "Live project"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLink, {
						href: project.caseStudyUrl,
						variant: "outline",
						disabledLabel: "Case study · coming soon",
						children: "Case study"
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figure", {
			"data-reveal": "wipe",
			className: cn("media-zoom relative", flipped && "md:order-1"),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative aspect-[4/3] overflow-hidden rounded-[3px] border border-line bg-graphite",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: cdn(project.image, 900),
					srcSet: cdnSrcSet(project.image, [
						600,
						900,
						1200
					]),
					sizes: "(min-width: 48rem) 45vw, 92vw",
					alt: project.imageAlt,
					width: 1200,
					height: 896,
					loading: "lazy",
					decoding: "async",
					className: "size-full object-cover"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "absolute top-3 left-3 rounded-full bg-ink/80 px-2.5 py-1 font-mono text-[0.6rem] tracking-[0.18em] text-bone/80 uppercase backdrop-blur",
					children: "Concept visual"
				})]
			})
		})]
	})] });
}
function Work() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "work",
		className: "relative isolate overflow-hidden bg-ink",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WordWall, { className: "h-[28rem]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto max-w-8xl px-4 py-16 md:px-6 md:py-24",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-end justify-between gap-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SplitHeading, {
						text: "Selected work",
						className: "text-[clamp(3.75rem,11vw,9.5rem)]"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						"data-reveal": "up",
						className: "max-w-sm pb-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, {
							accent: true,
							children: "Robotics · AI · IoT · Software"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm leading-relaxed text-bone/70",
							children: "A selection of engineering projects spanning robotics, artificial intelligence, connected systems and software. Each project reflects a practical approach to designing, building and applying technology."
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-12",
					children: projects.map((project, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectRow, {
						project,
						index: i,
						total: projects.length
					}, project.slug))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DoubleRule, {})
			]
		})]
	});
}
function Expertise() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "expertise",
		className: "relative isolate overflow-hidden bg-charcoal",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-8xl px-4 py-16 md:px-6 md:py-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-6 md:grid-cols-[1fr_auto] md:items-end",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SplitHeading, {
					text: "Expertise",
					className: "text-[clamp(3.75rem,11vw,9.5rem)]"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					"data-reveal": "up",
					className: "max-w-sm pb-2 text-sm leading-relaxed text-bone/70",
					children: "Four disciplines, one practice. Most of what I build needs all of them working together."
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "mt-12 grid gap-px overflow-hidden rounded-[3px] border border-line bg-line md:grid-cols-2",
				children: expertise.map((area, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					"data-reveal": "up",
					style: { ["--i"]: i },
					className: "group relative isolate overflow-hidden bg-charcoal p-6 transition-colors duration-500 hover:bg-ink md:p-10",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WordWall, {
							variant: "radial",
							className: "opacity-0 transition-opacity duration-700 group-hover:opacity-[0.12]"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start justify-between gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: String(i + 1).padStart(2, "0") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								"aria-hidden": "true",
								className: "inline-block size-2 rotate-45 bg-line transition-colors duration-500 group-hover:bg-signal"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-10 font-heading text-[clamp(2.5rem,5vw,4.25rem)] leading-[0.9] uppercase md:mt-16",
							children: area.domain
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 max-w-sm text-base font-medium text-bone/75",
							children: area.line
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-6 flex flex-wrap gap-1.5",
							children: area.skills.map((skill) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "rounded-[3px] border border-line px-2.5 py-1 font-mono text-[0.7rem] text-bone/80 transition-colors duration-300 group-hover:border-bone/25",
								children: skill
							}, skill))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							"aria-hidden": "true",
							className: "absolute bottom-0 left-0 h-[3px] w-full origin-left scale-x-0 bg-signal transition-transform duration-700 group-hover:scale-x-100"
						})
					]
				}, area.domain))
			})]
		})
	});
}
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "about",
		className: "relative isolate overflow-x-clip bg-ink",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WordWall, { className: "h-[30rem]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto max-w-8xl px-4 py-16 md:px-6 md:py-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-12 md:grid-cols-[0.9fr_1.1fr] md:gap-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:sticky md:top-28 md:self-start",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SplitHeading, {
							text: about.heading,
							className: "text-[clamp(3.75rem,11vw,9.5rem)]"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							"data-reveal": "up",
							className: "mt-4 font-heading text-2xl leading-tight uppercase text-bone/80 md:text-3xl",
							children: [person.name, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-ash",
								children: [" — ", person.title]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
							className: "mt-10 border-t border-line",
							children: about.facts.map((fact, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								"data-reveal": "up",
								style: { ["--i"]: i },
								className: "grid grid-cols-[7.5rem_1fr] gap-4 border-b border-line py-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "font-mono text-[0.7rem] tracking-[0.18em] text-ash uppercase",
									children: fact.label
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "text-base font-semibold",
									children: fact.value ?? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "font-medium text-ash italic",
										children: [
											"[",
											fact.hint,
											"]"
										]
									})
								})]
							}, fact.label))
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, {
							accent: true,
							children: "The engineering journey"
						}),
						about.paragraphs.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							"data-reveal": "up",
							className: i === 0 ? "text-2xl leading-snug font-semibold md:text-[1.75rem]" : "text-lg leading-relaxed text-bone/80",
							children: p
						}, i)),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							"data-reveal": "up",
							className: "border-l-2 border-signal pl-5 text-lg leading-relaxed font-medium text-bone",
							children: about.ambition
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							"data-reveal": "up",
							className: "mt-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLink, {
								href: "#contact",
								variant: "outline",
								children: "Work with me"
							})
						})
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-20 md:mt-28",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DoubleRule, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-6 py-10 md:grid-cols-[14rem_1fr] md:py-14",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, {
							accent: true,
							className: "md:pt-4",
							children: about.mission.label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
							"data-reveal": "up",
							className: "font-heading text-[clamp(2.5rem,6.5vw,6rem)] leading-[0.92] uppercase",
							children: [
								"“",
								about.mission.statement,
								"”"
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DoubleRule, { flip: true })
				]
			})]
		})]
	});
}
function Collaborate() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "collaborate",
		"aria-labelledby": "collaborate-heading",
		className: "relative isolate overflow-hidden bg-charcoal",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WordWall, { variant: "full" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto max-w-8xl px-4 py-16 md:px-6 md:py-28",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, {
					accent: true,
					children: collaborate.kicker
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					id: "collaborate-heading",
					className: "mt-6 font-heading text-[clamp(3rem,9.5vw,8.5rem)] leading-[0.9] uppercase",
					children: collaborate.headline.map((line, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						"data-reveal": "up",
						style: { ["--i"]: i },
						className: `block ${i === 2 ? "text-signal" : ""}`,
						children: line
					}, i))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-12 grid gap-12 md:grid-cols-[1fr_1.1fr] md:gap-16",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						"data-reveal": "up",
						className: "flex flex-col items-start gap-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "max-w-xl text-xl leading-relaxed font-medium md:text-2xl",
							children: collaborate.body
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLink, {
							href: `mailto:${links.email}?subject=Collaboration%20with%20WILFA%20TECH`,
							variant: "signal",
							children: "Start a conversation"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "border-t border-line",
						children: collaborate.points.map((point, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							"data-reveal": "up",
							style: { ["--i"]: i },
							className: "grid grid-cols-[2.5rem_1fr] gap-2 border-b border-line py-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-mono text-xs text-signal",
								children: ["0", i + 1]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-heading text-2xl leading-tight uppercase md:text-3xl",
								children: point.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-base leading-relaxed text-bone/70",
								children: point.body
							})] })]
						}, point.title))
					})]
				})
			]
		})]
	});
}
function Contact() {
	const [copied, setCopied] = (0, import_react.useState)(false);
	const channels = [
		{
			label: "Email",
			value: links.email,
			href: `mailto:${links.email}`
		},
		{
			label: "GitHub",
			value: `@${links.githubHandle}`,
			href: links.github,
			external: true
		},
		{
			label: "LinkedIn",
			value: links.linkedin ? "View profile" : "Profile link coming soon",
			href: links.linkedin,
			external: true
		}
	];
	const copyEmail = async () => {
		try {
			await navigator.clipboard.writeText(links.email);
			setCopied(true);
			window.setTimeout(() => setCopied(false), 2e3);
		} catch {
			window.location.href = `mailto:${links.email}`;
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "contact",
		"aria-labelledby": "contact-heading",
		className: "relative isolate overflow-hidden bg-ink",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WordWall, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto max-w-8xl px-4 pt-20 pb-16 md:px-6 md:pt-28",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, {
					accent: true,
					children: "Contact"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					id: "contact-heading",
					"data-reveal": "stamp",
					className: "mt-4 font-heading text-[clamp(4.5rem,17vw,15rem)] leading-[0.82] uppercase",
					children: contact.stamp
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					"data-reveal": "up",
					className: "mt-3 font-heading text-4xl leading-none uppercase text-outline md:text-6xl",
					children: contact.sub
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10 flex flex-wrap items-center gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						"data-reveal": "up",
						className: "max-w-md text-lg leading-relaxed font-medium text-bone/80",
						children: contact.body
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: copyEmail,
						"data-reveal": "up",
						className: "rounded-[3px] border border-line px-3 py-2 font-mono text-[0.7rem] tracking-[0.16em] text-ash uppercase transition-colors hover:border-bone/40 hover:text-bone",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							"aria-live": "polite",
							children: copied ? "Email copied ✓" : "Copy email address"
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-12 grid border-t border-line md:grid-cols-3",
					children: channels.map((c, i) => {
						const inner = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-mono text-[0.7rem] tracking-[0.2em] text-ash uppercase",
								children: [
									"0",
									i + 1,
									" · ",
									c.label
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "mt-8 flex items-end justify-between gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-heading text-3xl leading-none uppercase break-all md:text-[2.1rem]",
									children: c.label
								}), c.href && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									"aria-hidden": "true",
									className: "text-2xl transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1",
									children: "↗"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: cn("mt-2 text-sm font-medium break-all", c.href ? "text-bone/75" : "text-ash italic"),
								children: c.value
							})
						] });
						const cls = cn("group relative flex h-full flex-col border-b border-line p-6 transition-colors duration-500 md:p-8", i > 0 && "md:border-l", c.href && "hover:bg-charcoal");
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							"data-reveal": "up",
							style: { ["--i"]: i },
							children: c.href ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: c.href,
								className: cls,
								...c.external ? {
									target: "_blank",
									rel: "noreferrer noopener"
								} : {},
								children: [inner, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									"aria-hidden": "true",
									className: "absolute bottom-0 left-0 h-[3px] w-full origin-left scale-x-0 bg-signal transition-transform duration-700 group-hover:scale-x-100"
								})]
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: cls,
								children: inner
							})
						}, c.label);
					})
				})
			]
		})]
	});
}
/**
* Watches every element carrying `data-reveal` and marks it with
* `data-shown` the first time it scrolls into view. The visual states
* live in styles.css, so components stay declarative.
*/
function useScrollReveal() {
	(0, import_react.useEffect)(() => {
		const els = Array.from(document.querySelectorAll("[data-reveal]"));
		if (!("IntersectionObserver" in window)) {
			els.forEach((el) => el.setAttribute("data-shown", ""));
			return;
		}
		const io = new IntersectionObserver((entries) => {
			for (const entry of entries) if (entry.isIntersecting) {
				entry.target.setAttribute("data-shown", "");
				io.unobserve(entry.target);
			}
		}, {
			rootMargin: "0px 0px -10% 0px",
			threshold: .12
		});
		els.forEach((el) => io.observe(el));
		return () => io.disconnect();
	}, []);
}
function HomePage() {
	useScrollReveal();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Numbers, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TickerStrip, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Work, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Expertise, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(About, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Collaborate, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {})
	] });
}
export { HomePage as component };

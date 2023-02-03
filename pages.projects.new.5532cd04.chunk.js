(this.webpackJsonp = this.webpackJsonp || []).push([[767, 72, 96], {
    "+iVy": function (t, e, n) {
        "use strict";
        n.d(e, "b", (function () {
            return g
        })), n.d(e, "a", (function () {
            return v
        }));
        var i = n("Z2pp"), r = n("jyii"), o = n("/Zha"), a = n("9CRu"), l = n("gCUY"), s = n("Sq3g"), c = n("ySPH"),
            u = n("yxQL"), d = n("1pIC"), p = n("GpHn"), f = n("R+nN");

        function h(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(t);
                e && (i = i.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), n.push.apply(n, i)
            }
            return n
        }

        function b(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? h(Object(n), !0).forEach((function (e) {
                    m(t, e, n[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : h(Object(n)).forEach((function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }))
            }
            return t
        }

        function m(t, e, n) {
            return e in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n, t
        }

        var g = Object(l.c)(b(b({}, u.b), {}, {
            text: {type: String},
            html: {type: String},
            variant: {type: String, default: "secondary"},
            size: {type: String},
            block: {type: Boolean, default: !1},
            menuClass: {type: [String, Array, Object]},
            toggleTag: {type: String, default: "button"},
            toggleText: {type: String, default: "Toggle dropdown"},
            toggleClass: {type: [String, Array, Object]},
            noCaret: {type: Boolean, default: !1},
            split: {type: Boolean, default: !1},
            splitHref: {type: String},
            splitTo: {type: [String, Object]},
            splitVariant: {type: String},
            splitClass: {type: [String, Array, Object]},
            splitButtonType: {
                type: String, default: "button", validator: function (t) {
                    return Object(a.a)(["button", "submit", "reset"], t)
                }
            },
            lazy: {type: Boolean, default: !1},
            role: {type: String, default: "menu"}
        }), r.m), v = i.a.extend({
            name: r.m, mixins: [d.a, u.a, p.a], props: g, computed: {
                dropdownClasses: function () {
                    var t = this.block, e = this.split;
                    return [this.directionClass, this.boundaryClass, {
                        show: this.visible,
                        "btn-group": e || !t,
                        "d-flex": t && e
                    }]
                }, menuClasses: function () {
                    return [this.menuClass, {"dropdown-menu-right": this.right, show: this.visible}]
                }, toggleClasses: function () {
                    var t = this.split;
                    return [this.toggleClass, {
                        "dropdown-toggle-split": t,
                        "dropdown-toggle-no-caret": this.noCaret && !t
                    }]
                }
            }, render: function (t) {
                var e = this.visible, n = this.variant, i = this.size, r = this.block, a = this.disabled,
                    l = this.split, u = this.role, d = this.hide, p = this.toggle,
                    h = {variant: n, size: i, block: r, disabled: a}, m = this.normalizeSlot("button-content"),
                    g = this.hasNormalizedSlot("button-content") ? {} : Object(s.a)(this.html, this.text), v = t();
                if (l) {
                    var y = this.splitTo, O = this.splitHref, j = this.splitButtonType,
                        w = b(b({}, h), {}, {variant: this.splitVariant || n});
                    y ? w.to = y : O ? w.href = O : j && (w.type = j), v = t(f.a, {
                        class: this.splitClass,
                        attrs: {id: this.safeId("_BV_button_")},
                        props: w,
                        domProps: g,
                        on: {click: this.onSplitClick},
                        ref: "button"
                    }, m), m = [t("span", {class: ["sr-only"]}, [this.toggleText])], g = {}
                }
                var k = t(f.a, {
                    staticClass: "dropdown-toggle",
                    class: this.toggleClasses,
                    attrs: {id: this.safeId("_BV_toggle_"), "aria-haspopup": "true", "aria-expanded": Object(c.e)(e)},
                    props: b(b({}, h), {}, {tag: this.toggleTag, block: r && !l}),
                    domProps: g,
                    on: {mousedown: this.onMousedown, click: p, keydown: p},
                    ref: "toggle"
                }, m), _ = t("ul", {
                    staticClass: "dropdown-menu",
                    class: this.menuClasses,
                    attrs: {role: u, tabindex: "-1", "aria-labelledby": this.safeId(l ? "_BV_button_" : "_BV_toggle_")},
                    on: {keydown: this.onKeydown},
                    ref: "menu"
                }, [!this.lazy || e ? this.normalizeSlot(o.c, {hide: d}) : t()]);
                return t("div", {
                    staticClass: "dropdown b-dropdown",
                    class: this.dropdownClasses,
                    attrs: {id: this.safeId()}
                }, [v, k, _])
            }
        })
    }, "+lve": function (t, e, n) {
        "use strict";
        n.d(e, "f", (function () {
            return o
        })), n.d(e, "e", (function () {
            return l
        })), n.d(e, "a", (function () {
            return s
        })), n.d(e, "c", (function () {
            return c
        })), n.d(e, "d", (function () {
            return u
        })), n.d(e, "b", (function () {
            return d
        }));
        var i = n("mABg"), r = n.n(i);
        n("AfGZ"), n("g+EE"), n("h8Et"), n("uHfJ"), n("R0RX");
        const o = function (t) {
            return !("string" != typeof t || !t.startsWith("gid://gitlab/"))
        }, a = function (t) {
            return parseInt(`${t}`.replace(/gid:\/\/gitlab\/.*\//g, ""), 10)
        }, l = function () {
            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
            const e = a(t);
            return Number.isInteger(e) ? e : null
        }, s = {Append: "APPEND", Remove: "REMOVE", Replace: "REPLACE"}, c = function (t, e) {
            if ("string" != typeof t) throw new TypeError(`type must be a string; got ${typeof t}`);
            if (!["number", "string"].includes(typeof e)) throw new TypeError(`id must be a number or string; got ${typeof e}`);
            return o(e) ? e : `gid://gitlab/${t}/${e}`
        }, u = function (t, e) {
            return e.map((function (e) {
                return c(t, e)
            }))
        }, d = function (t) {
            if (!r()(t)) throw new TypeError(`nodes must be an array; got ${typeof t}`);
            return t.map((function (t) {
                return t.id ? {...t, id: l(t.id)} : t
            }))
        }
    }, "/Jty": function (t, e, n) {
        "use strict";
        n.d(e, "a", (function () {
            return j
        }));
        var i = n("Z2pp"), r = n("jyii"), o = n("9CRu"), a = n("gCUY"), l = n("qx9o"), s = n("BhOj"), c = n("KpC0"),
            u = n("lRgI"), d = n("YxAH"), p = n("p+a6"), f = n("Rd/K"), h = n("HJOD"), b = n("1pIC"), m = n("PrCM");

        function g(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(t);
                e && (i = i.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), n.push.apply(n, i)
            }
            return n
        }

        function v(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? g(Object(n), !0).forEach((function (e) {
                    y(t, e, n[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : g(Object(n)).forEach((function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }))
            }
            return t
        }

        function y(t, e, n) {
            return e in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n, t
        }

        var O = ["text", "password", "email", "number", "url", "tel", "search", "range", "color", "date", "time", "datetime", "datetime-local", "month", "week"],
            j = i.a.extend({
                name: r.x,
                mixins: [m.a, b.a, c.a, d.a, p.a, f.a, u.a, h.a],
                props: Object(a.c)(v(v(v(v(v({}, c.b), d.b), p.b), f.b), {}, {
                    type: {
                        type: String,
                        default: "text",
                        validator: function (t) {
                            return Object(o.a)(O, t)
                        }
                    },
                    noWheel: {type: Boolean, default: !1},
                    min: {type: [String, Number]},
                    max: {type: [String, Number]},
                    step: {type: [String, Number]},
                    list: {type: String}
                }), r.x),
                computed: {
                    localType: function () {
                        return Object(o.a)(O, this.type) ? this.type : "text"
                    }, computedAttrs: function () {
                        var t = this.localType, e = this.disabled, n = this.placeholder, i = this.required,
                            r = this.min, o = this.max, a = this.step;
                        return {
                            id: this.safeId(),
                            name: this.name || null,
                            form: this.form || null,
                            type: t,
                            disabled: e,
                            placeholder: n,
                            required: i,
                            autocomplete: this.autocomplete || null,
                            readonly: this.readonly || this.plaintext,
                            min: r,
                            max: o,
                            step: a,
                            list: "password" !== t ? this.list : null,
                            "aria-required": i ? "true" : null,
                            "aria-invalid": this.computedAriaInvalid
                        }
                    }, computedListeners: function () {
                        return v(v({}, this.bvListeners), {}, {
                            input: this.onInput,
                            change: this.onChange,
                            blur: this.onBlur
                        })
                    }
                },
                watch: {
                    noWheel: function (t) {
                        this.setWheelStopper(t)
                    }
                },
                mounted: function () {
                    this.setWheelStopper(this.noWheel)
                },
                deactivated: function () {
                    this.setWheelStopper(!1)
                },
                activated: function () {
                    this.setWheelStopper(this.noWheel)
                },
                beforeDestroy: function () {
                    this.setWheelStopper(!1)
                },
                methods: {
                    setWheelStopper: function (t) {
                        var e = this.$el;
                        Object(s.c)(t, e, "focus", this.onWheelFocus), Object(s.c)(t, e, "blur", this.onWheelBlur), t || Object(s.a)(document, "wheel", this.stopWheel)
                    }, onWheelFocus: function () {
                        Object(s.b)(document, "wheel", this.stopWheel)
                    }, onWheelBlur: function () {
                        Object(s.a)(document, "wheel", this.stopWheel)
                    }, stopWheel: function (t) {
                        Object(s.d)(t, {propagation: !1}), Object(l.c)(this.$el)
                    }
                },
                render: function (t) {
                    return t("input", {
                        ref: "input",
                        class: this.computedClass,
                        attrs: this.computedAttrs,
                        domProps: {value: this.localValue},
                        on: this.computedListeners
                    })
                }
            })
    }, "/MVl": function (t, e, n) {
        "use strict";
        var i = n("RlQ7"), r = n.n(i), o = n("ly/8"), a = n("cuRJ"), l = n("t9l/"), s = n("qzRy"), c = {
            name: "ClipboardButton",
            i18n: {copied: Object(l.a)("Copied"), error: s.c},
            CLIPBOARD_SUCCESS_EVENT: s.b,
            CLIPBOARD_ERROR_EVENT: s.a,
            directives: {GlTooltip: o.a},
            components: {GlButton: a.a},
            props: {
                text: {type: String, required: !0},
                gfm: {type: String, required: !1, default: null},
                title: {type: String, required: !0},
                tooltipPlacement: {type: String, required: !1, default: "top"},
                tooltipContainer: {type: [String, Boolean], required: !1, default: !1},
                tooltipBoundary: {type: String, required: !1, default: null},
                cssClass: {type: String, required: !1, default: null},
                category: {type: String, required: !1, default: "secondary"},
                size: {type: String, required: !1, default: "medium"},
                variant: {type: String, required: !1, default: "default"}
            },
            data() {
                return {localTitle: this.title, titleTimeout: null, id: null}
            },
            computed: {
                clipboardText() {
                    return null !== this.gfm ? JSON.stringify({text: this.text, gfm: this.gfm}) : this.text
                }, tooltipDirectiveOptions() {
                    return {
                        placement: this.tooltipPlacement,
                        container: this.tooltipContainer,
                        boundary: this.tooltipBoundary
                    }
                }
            },
            created() {
                this.id = r()("clipboard-button-")
            },
            methods: {
                updateTooltip(t) {
                    var e = this;
                    this.localTitle = t, this.$root.$emit("bv::show::tooltip", this.id), clearTimeout(this.titleTimeout), this.titleTimeout = setTimeout((function () {
                        e.localTitle = e.title, e.$root.$emit("bv::hide::tooltip", e.id)
                    }), 1e3)
                }
            }
        }, u = n("bPvS"), d = Object(u.a)(c, (function () {
            var t = this, e = t.$createElement;
            return (t._self._c || e)("gl-button", t._g({
                directives: [{
                    name: "gl-tooltip",
                    rawName: "v-gl-tooltip.hover.focus.click.viewport",
                    value: t.tooltipDirectiveOptions,
                    expression: "tooltipDirectiveOptions",
                    modifiers: {hover: !0, focus: !0, click: !0, viewport: !0}
                }],
                ref: "copyButton",
                class: t.cssClass,
                attrs: {
                    id: t.id,
                    title: t.localTitle,
                    "data-clipboard-text": t.clipboardText,
                    "data-clipboard-handle-tooltip": "false",
                    category: t.category,
                    size: t.size,
                    icon: "copy-to-clipboard",
                    variant: t.variant,
                    "aria-label": t.localTitle,
                    "aria-live": "polite"
                },
                on: t._d({}, [t.$options.CLIPBOARD_SUCCESS_EVENT, function (e) {
                    return t.updateTooltip(t.$options.i18n.copied)
                }, t.$options.CLIPBOARD_ERROR_EVENT, function (e) {
                    return t.updateTooltip(t.$options.i18n.error)
                }])
            }, t.$listeners), [t._t("default")], 2)
        }), [], !1, null, null, null);
        e.a = d.exports
    }, "0R5a": function (t, e, n) {
        "use strict";
        n.r(e);
        n("JHu5"), n("3R5X"), n("XUYm");
        var i = n("q+nE"), r = n("EfTh"), o = n("voi4"), a = n("oj/M"), l = (n("ujLG"), n("HaUQ"), n("9LGn")),
            s = n("t9l/"), c = n("cLiR"), u = n("KFH7"), d = n("9uTP"), p = n("/MVl"), f = {
                components: {GlPopover: u.a, GlFormInputGroup: d.a, ClipboardButton: p.a},
                inject: ["pushToCreateProjectCommand", "workingWithProjectsHelpPath"],
                props: {target: {type: [Function, HTMLElement], required: !0}},
                i18n: {
                    clipboardButtonTitle: Object(s.a)("Copy command"),
                    commandInputAriaLabel: Object(s.a)("Push project from command line"),
                    helpLinkText: Object(s.a)("What does this command do?"),
                    labelText: Object(s.a)("Private projects can be created in your personal namespace with:"),
                    popoverTitle: Object(s.a)("Push to create a project")
                }
            }, h = n("bPvS"), b = Object(h.a)(f, (function () {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return n("gl-popover", {
                    attrs: {
                        target: t.target,
                        title: t.$options.i18n.popoverTitle,
                        triggers: "click blur",
                        placement: "top"
                    }
                }, [n("p", [n("label", {
                    staticClass: "gl-font-weight-normal",
                    attrs: {for: "push-to-create-tip"}
                }, [t._v("\n      " + t._s(t.$options.i18n.labelText) + "\n    ")])]), t._v(" "), n("p", [n("gl-form-input-group", {
                    attrs: {
                        id: "push-to-create-tip",
                        value: t.pushToCreateProjectCommand,
                        readonly: "",
                        "select-on-click": "",
                        "aria-label": t.$options.i18n.commandInputAriaLabel
                    }, scopedSlots: t._u([{
                        key: "append", fn: function () {
                            return [n("clipboard-button", {
                                attrs: {
                                    text: t.pushToCreateProjectCommand,
                                    title: t.$options.i18n.clipboardButtonTitle,
                                    "tooltip-placement": "right"
                                }
                            })]
                        }, proxy: !0
                    }])
                })], 1), t._v(" "), n("p", [n("a", {
                    staticClass: "gl-font-sm",
                    attrs: {href: t.workingWithProjectsHelpPath + "#push-to-create-a-new-project", target: "_blank"}
                }, [t._v(t._s(t.$options.i18n.helpLinkText))])])])
            }), [], !1, null, null, null).exports;
        const m = [{
            key: "blank",
            name: "blank_project",
            selector: "#blank-project-pane",
            title: Object(s.g)("ProjectsNew|Create blank project"),
            description: Object(s.g)("ProjectsNew|Create a blank project to house your files, plan your work, and collaborate on code, among other things."),
            illustration: '<svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M66.191 8.191h11.427c.657 0 1.19.533 1.19 1.191v60.236a1.19 1.19 0 01-1.19 1.19H66.19V8.192z" fill="#F0F0F0" stroke="#DBDBDB" stroke-width="2.382"/><path d="M22.052 19.272l-.043-9.172a2.382 2.382 0 012.006-2.363L63.361 1.44a2.382 2.382 0 012.759 2.353v72.078a2.382 2.382 0 01-2.746 2.354l-39.07-6.03a2.382 2.382 0 01-2.02-2.344l-.041-9.097" stroke="#DBDBDB" stroke-width="2.382"/><circle cx="23" cy="40" r="21" stroke="#6E49CB" stroke-width="2.382"/><circle cx="23" cy="40" r="17" fill="#6E49CB"/><circle cx="23" cy="40" r="17" fill="#fff" fill-opacity=".9"/><path d="M22.313 48V33.366M15 40.305h15" stroke="#6E49CB" stroke-width="2.382" stroke-linecap="round"/></svg>'
        }, {
            key: "template",
            name: "create_from_template",
            selector: "#create-from-template-pane",
            title: Object(s.g)("ProjectsNew|Create from template"),
            description: Object(s.g)("ProjectsNew|Create a project pre-populated with the necessary files to get you started quickly."),
            illustration: '<svg width="82" height="80" viewBox="0 0 82 80" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M68.177 8.176h11.47c.65 0 1.176.527 1.176 1.177v60.294c0 .65-.526 1.176-1.176 1.176h-11.47V8.176z" fill="#F0F0F0" stroke="#DBDBDB" stroke-width="2.353"/><path d="M24.05 19l-.04-8.925a2.353 2.353 0 011.98-2.335l39.403-6.304a2.353 2.353 0 012.725 2.323v72.144a2.353 2.353 0 01-2.712 2.325l-39.127-6.04a2.353 2.353 0 01-1.994-2.314L24.244 61" stroke="#DBDBDB" stroke-width="2.353"/><path d="M60.02 11.18l-30 4.04A1.176 1.176 0 0029 16.386v2.738c0 .691.594 1.234 1.283 1.171l30-2.727a1.176 1.176 0 001.07-1.172v-4.05c0-.713-.628-1.261-1.334-1.166zm-8.85 17.922l-9.28.746a1.176 1.176 0 00-.914 1.778l1.676 2.794c.216.36.605.577 1.024.572l7.603-.095a1.176 1.176 0 001.162-1.176v-3.446c0-.687-.586-1.228-1.27-1.173zm10.04 41.532V40.176c0-.65-.526-1.176-1.176-1.176H44.99c-.544 0-1.017.373-1.144.902l-2.729 11.37c-.036.15-.103.295-.195.42-3.745 5.084-6.2 5.782-11.21 7.99a1.173 1.173 0 00-.697 1.096l.115 5.517a1.176 1.176 0 001.005 1.14l29.727 4.363a1.176 1.176 0 001.347-1.164z" fill="#DBDBDB" stroke="#DBDBDB" stroke-width=".588" stroke-linecap="round" stroke-linejoin="bevel"/><path d="M43.57 24l-7.57.5" stroke="#DBDBDB" stroke-width="1.176" stroke-linecap="round"/><circle cx="23" cy="40" r="21" stroke="#6E49CB" stroke-width="2.353"/><circle cx="23" cy="40" r="17" fill="#6E49CB"/><circle cx="23" cy="40" r="17" fill="#fff" fill-opacity=".9"/><path d="M22.313 48V33M15 41.315h15" stroke="#6E49CB" stroke-width="2.353" stroke-linecap="round"/></svg>'
        }, {
            key: "import",
            name: "import_project",
            selector: "#import-project-pane",
            title: Object(s.g)("ProjectsNew|Import project"),
            description: Object(s.g)("ProjectsNew|Migrate your data from an external source like GitHub, Bitbucket, or another instance of GitLab."),
            illustration: '<svg width="169" height="84" viewBox="0 0 169 84" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M153.5 75.572h12.184c.727 0 1.316-.59 1.316-1.316V9.745c0-.727-.589-1.316-1.316-1.316H153.5M107.941 58l.073 15.906a1.316 1.316 0 001.117 1.295l42.782 6.566a1.316 1.316 0 001.516-1.3V3.542c0-.81-.723-1.427-1.523-1.3l-43.077 6.853a1.316 1.316 0 00-1.109 1.306l.052 11.099" stroke="#DBDBDB" stroke-width="2.632"/><path d="M133.539 53.531l-10.63-.538m14.402.73l11.658.59m-16.744-9.335l-8.224-.282m11.998.412l11.667.401m.572-32.145l-17.048 2.24m-13.908 1.849l9.134-1.222m22.615 21.621l-17.194.182m-6.838.051h2.024m-14.984 29.26l8.544 1.065m27.684 3.454l-13.671-1.706m-9.57-1.193l4.443.554m-15.116-45.124l1.863-.156m13.042-1.092l-9.824.822m17.955-1.503l7.791-.652m-9.349 8.393l-9.852.382m12.744-.603l7.813-.303m-31.422 30.873l13.828 1.324m4.839.463l11.409 1.092" stroke="#DFDFDF" stroke-width="1.316" stroke-linecap="round"/><path d="M53.43 43.429H21.287C10.636 43.429 2 34.794 2 24.143 2 13.492 10.635 4.857 21.286 4.857c10.651 0 19.285 8.635 19.285 19.286 0 5.027-1.923 9.605-5.074 13.038m17.538 6.248H42.356c-7.298 0-13.214 5.916-13.214 13.214s5.916 13.214 13.214 13.214S55.57 63.941 55.57 56.643c0-1.747-.339-3.414-.954-4.94" stroke="#DBDBDB" stroke-width="2.632" stroke-linecap="round"/><path fill-rule="evenodd" clip-rule="evenodd" d="M38.43 52.715c0-.79.64-1.43 1.428-1.43h4.286c.686 0 1.26.485 1.397 1.13l2.17 1.253c.684.394.918 1.268.523 1.951-.915 1.585-2.662 4.606-2.772 4.8-.277.487-.737.867-1.318.867h-4.286c-.789 0-1.428-.64-1.428-1.429v-7.142zm1.428 0h4.286v7.142h-4.286v-7.142zm5.715 4.658l1.424-2.468-1.425-.823v3.29z" fill="#FC6D26"/><path d="M25.597 16.233a1.429 1.429 0 10-2.76-.74l-4.436 16.56a1.428 1.428 0 102.76.739l4.436-16.559zm-8.302 2.614a1.429 1.429 0 010 2.02l-3.276 3.276 3.276 3.276a1.429 1.429 0 01-2.02 2.02l-4.286-4.286a1.429 1.429 0 010-2.02l4.285-4.286a1.429 1.429 0 012.02 0zm9.408 0a1.429 1.429 0 000 2.02l3.276 3.276-3.276 3.276a1.429 1.429 0 102.02 2.02l4.286-4.286a1.429 1.429 0 000-2.02l-4.286-4.286a1.429 1.429 0 00-2.02 0z" fill="#6E49CB"/><path d="M50.572 36.286h11.43a1.429 1.429 0 110 2.857h-11.43a1.429 1.429 0 010-2.857z" fill="#FC6D26"/><path d="M50.572 36.286h11.43a1.429 1.429 0 110 2.857h-11.43a1.429 1.429 0 010-2.857z" fill="#fff" fill-opacity=".6"/><path d="M70.574 36.286H83.43a1.429 1.429 0 110 2.857H70.574a1.429 1.429 0 110-2.857z" fill="#FC6D26"/><path d="M76.288 47.714h15.858a1.429 1.429 0 110 2.858H76.288a1.429 1.429 0 110-2.858z" fill="#6E49CB"/><path d="M76.288 47.714h15.858a1.429 1.429 0 110 2.858H76.288a1.429 1.429 0 110-2.858z" fill="#fff" fill-opacity=".8"/><path d="M62.715 42h27.286a1.429 1.429 0 110 2.857H62.715a1.429 1.429 0 110-2.857z" fill="#6E49CB"/><path d="M62.715 42h27.286a1.429 1.429 0 110 2.857H62.715a1.429 1.429 0 110-2.857z" fill="#fff" fill-opacity=".6"/><path d="M69.857 30.572h21.714a1.429 1.429 0 110 2.857H69.857a1.429 1.429 0 010-2.858z" fill="#6E49CB"/><path d="M69.857 30.572h21.714a1.429 1.429 0 110 2.857H69.857a1.429 1.429 0 010-2.858z" fill="#fff" fill-opacity=".8"/><circle cx="107.713" cy="39.857" r="17.857" stroke="#6E49CB" stroke-width="2.632"/><circle cx="107.716" cy="39.857" r="13.571" fill="#6E49CB"/><circle cx="107.716" cy="39.857" r="13.571" fill="#fff" fill-opacity=".9"/><path d="M111.432 36.087l3.937 3.936-3.937 3.937a1.062 1.062 0 01-1.502-1.502l1.373-1.373h-10.179a1.062 1.062 0 010-2.124h10.179l-1.373-1.373a1.063 1.063 0 011.502-1.501z" fill="#6E49CB"/></svg>'
        }, {
            key: "ci",
            name: "cicd_for_external_repo",
            selector: "#ci-cd-project-pane",
            title: Object(s.g)("ProjectsNew|Run CI/CD for external repository"),
            description: Object(s.g)("ProjectsNew|Connect your external repository to GitLab CI/CD."),
            illustration: '<svg width="169" height="77" viewBox="0 0 169 77" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M115.57 41.571h32.143c10.651 0 19.286-8.634 19.286-19.285C166.999 11.634 158.364 3 147.713 3c-10.651 0-19.286 8.634-19.286 19.286 0 5.027 1.924 9.605 5.075 13.038m-18.396 6.247h10.679c7.298 0 13.214 5.917 13.214 13.215S133.083 68 125.785 68s-13.215-5.916-13.215-13.214c0-1.747.339-3.415.955-4.94" stroke="#DBDBDB" stroke-width="2.632" stroke-linecap="round"/><path d="M146.262 24.235l-3.214-3.22a.76.76 0 00-1.065.016l-1.589 1.593c-.294.294-.306.776-.016 1.066l4.966 4.975c.497.499 1.322.515 1.822.014l.7-.701 7.998-8.013a.763.763 0 00.004-1.086l-1.589-1.593a.77.77 0 00-1.085.004l-6.932 6.945z" fill="#FC6D26"/><path fill-rule="evenodd" clip-rule="evenodd" d="M125.682 56.711l-2.595 2.611a1.217 1.217 0 01-1.729 0 1.236 1.236 0 010-1.74l1.729-1.74-1.729-1.74a1.236 1.236 0 010-1.741 1.218 1.218 0 011.729 0l2.595 2.61a1.236 1.236 0 010 1.74zm6.114 0l-2.594 2.611a1.22 1.22 0 01-2.088-.87 1.228 1.228 0 01.359-.87l1.729-1.74-1.729-1.74a1.228 1.228 0 01-.001-1.74 1.231 1.231 0 01.865-.362 1.214 1.214 0 01.865.36l2.594 2.611c.23.23.358.544.358.87 0 .326-.128.64-.358.87z" fill="#6E49CB"/><path d="M87.549 37H76.394c-.77 0-1.394-.625-1.394-1.397 0-.771.624-1.397 1.394-1.397H87.55c.77 0 1.394.626 1.394 1.397 0 .772-.624 1.397-1.394 1.397zm31.154 0H96.394c-.77 0-1.394-.625-1.394-1.397 0-.771.624-1.397 1.394-1.397h22.309c.77 0 1.394.626 1.394 1.397 0 .772-.624 1.397-1.394 1.397z" fill="#FC6D26"/><path d="M118.703 37H96.394c-.77 0-1.394-.625-1.394-1.397 0-.771.624-1.397 1.394-1.397h22.309c.77 0 1.394.626 1.394 1.397 0 .772-.624 1.397-1.394 1.397z" fill="#fff" fill-opacity=".6"/><path d="M93.857 32H71.394c-.77 0-1.394-.625-1.394-1.397 0-.771.624-1.397 1.394-1.397h22.463c.77 0 1.394.626 1.394 1.397 0 .772-.624 1.397-1.394 1.397z" fill="#6E49CB"/><path d="M93.857 32H71.394c-.77 0-1.394-.625-1.394-1.397 0-.771.624-1.397 1.394-1.397h22.463c.77 0 1.394.626 1.394 1.397 0 .772-.624 1.397-1.394 1.397z" fill="#fff" fill-opacity=".8"/><path d="M86.857 49H71.394c-.77 0-1.394-.625-1.394-1.397 0-.771.624-1.397 1.394-1.397h15.463c.77 0 1.394.626 1.394 1.397 0 .772-.624 1.397-1.394 1.397z" fill="#6E49CB"/><path d="M86.857 49H71.394c-.77 0-1.394-.625-1.394-1.397 0-.771.624-1.397 1.394-1.397h15.463c.77 0 1.394.626 1.394 1.397 0 .772-.624 1.397-1.394 1.397z" fill="#fff" fill-opacity=".8"/><path d="M109.166 43H73.394c-.77 0-1.394-.625-1.394-1.397 0-.771.624-1.397 1.394-1.397h35.772c.77 0 1.394.626 1.394 1.397 0 .772-.624 1.397-1.394 1.397z" fill="#6E49CB"/><path d="M109.166 43H73.394c-.77 0-1.394-.625-1.394-1.397 0-.771.624-1.397 1.394-1.397h35.772c.77 0 1.394.626 1.394 1.397 0 .772-.624 1.397-1.394 1.397z" fill="#fff" fill-opacity=".4"/><path d="M2 26c0 2.415 12.436 4.373 27.777 4.373 3.994 0 7.791-.133 11.223-.372M2 50c0 2.415 12.436 4.373 27.777 4.373 5.836 0 11.252-.284 15.723-.768" stroke="#DBDBDB" stroke-width="1.282"/><path d="M57.554 5v17M2 5v63.667c0 4.506 18.97 6.853 27.777 6.853 8.807 0 27.777-2.347 27.777-6.853V57" stroke="#DBDBDB" stroke-width="2.563" stroke-linejoin="round"/><ellipse cx="29.777" cy="5.644" rx="27.777" ry="3.644" stroke="#DBDBDB" stroke-width="2.563"/><ellipse cx="55.429" cy="39.46" rx="17.429" ry="17.46" stroke="#6E49CB" stroke-width="2.563"/><ellipse cx="55.246" cy="39.27" rx="13.246" ry="13.27" fill="#6E49CB"/><ellipse cx="55.246" cy="39.27" rx="13.246" ry="13.27" fill="#fff" fill-opacity=".9"/><path d="M61.763 38.59c.817.5.817 1.686 0 2.186l-8.812 5.394A1.282 1.282 0 0151 45.077v-10.79a1.282 1.282 0 011.951-1.093l8.812 5.395z" fill="#6E49CB"/></svg>'
        }];
        var g = {
                components: {NewNamespacePage: c.a, NewProjectPushTipPopover: b},
                directives: {SafeHtml: l.a},
                props: {
                    hasErrors: {type: Boolean, required: !1, default: !1},
                    isCiCdAvailable: {type: Boolean, required: !1, default: !1},
                    newProjectGuidelines: {type: String, required: !1, default: ""}
                },
                computed: {
                    availablePanels() {
                        return this.isCiCdAvailable ? m : m.filter((function (t) {
                            return "cicd_for_external_repo" !== t.name
                        }))
                    }
                },
                methods: {
                    resetProjectErrors() {
                        const t = document.querySelector(".project-edit-errors");
                        t && (t.innerHTML = "")
                    }
                }
            }, v = Object(h.a)(g, (function () {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return n("new-namespace-page", {
                    attrs: {
                        "initial-breadcrumb": t.__("New project"),
                        panels: t.availablePanels,
                        "jump-to-last-persisted-panel": t.hasErrors,
                        title: t.s__("ProjectsNew|Create new project"),
                        "persistence-key": "new_project_last_active_tab"
                    },
                    on: {"panel-change": t.resetProjectErrors},
                    scopedSlots: t._u([{
                        key: "extra-description", fn: function () {
                            return [t.newProjectGuidelines ? n("div", {
                                directives: [{
                                    name: "safe-html",
                                    rawName: "v-safe-html",
                                    value: t.newProjectGuidelines,
                                    expression: "newProjectGuidelines"
                                }], attrs: {id: "new-project-guideline"}
                            }) : t._e()]
                        }, proxy: !0
                    }, {
                        key: "welcome-footer", fn: function () {
                            return [n("div", {staticClass: "gl-pt-5 gl-text-center"}, [n("p", [t._v("\n        " + t._s(t.__("You can also create a project from the command line.")) + "\n        "), n("a", {
                                ref: "clipTip",
                                attrs: {href: "#"},
                                on: {
                                    click: function (t) {
                                        t.preventDefault()
                                    }
                                }
                            }, [t._v("\n          " + t._s(t.__("Show command")) + "\n        ")]), t._v(" "), n("new-project-push-tip-popover", {
                                attrs: {
                                    target: function () {
                                        return t.$refs.clipTip
                                    }
                                }
                            })], 1)])]
                        }, proxy: !0
                    }])
                })
            }), [], !1, null, null, null).exports, y = (n("h8Et"), n("cuRJ")), O = n("ZplN"), j = n("OkMp"), w = n("0X+3"),
            k = n("Ox/j"), _ = n("Gr03"), C = n("6HTq"), S = n("yYHy"), P = n("LkRf"), x = n("+lve"), D = n("mWeI"),
            B = n("UosV"), T = n("zwVu"), $ = n.n(T), E = n("mfvC"), I = {
                components: {
                    GlButton: y.a,
                    GlButtonGroup: O.a,
                    GlDropdown: j.a,
                    GlDropdownItem: w.a,
                    GlDropdownText: k.a,
                    GlDropdownSectionHeader: _.a,
                    GlSearchBoxByType: C.a
                }, mixins: [D.a.mixin()], apollo: {
                    currentUser: {
                        query: $.a, variables() {
                            return {search: this.search}
                        }, skip() {
                            const t = this.search.length > 0 && this.search.length < P.a;
                            return this.shouldSkipQuery || t
                        }, debounce: B.a
                    }
                }, inject: ["namespaceFullPath", "namespaceId", "rootUrl", "trackLabel", "userNamespaceId"], data() {
                    return {
                        currentUser: {},
                        groupPathToFilterBy: void 0,
                        search: "",
                        selectedNamespace: this.namespaceId ? {
                            id: this.namespaceId,
                            fullPath: this.namespaceFullPath
                        } : {id: void 0, fullPath: Object(s.g)("ProjectsNew|Pick a group or namespace")},
                        shouldSkipQuery: !0,
                        userNamespaceId: this.userNamespaceId
                    }
                }, computed: {
                    userGroups() {
                        var t;
                        return (null === (t = this.currentUser.groups) || void 0 === t ? void 0 : t.nodes) || []
                    }, userNamespace() {
                        return this.currentUser.namespace || {}
                    }, filteredGroups() {
                        var t = this;
                        return this.groupPathToFilterBy ? this.userGroups.filter((function (e) {
                            return e.fullPath.startsWith(t.groupPathToFilterBy)
                        })) : this.userGroups
                    }, hasGroupMatches() {
                        return this.filteredGroups.length
                    }, hasNamespaceMatches() {
                        var t;
                        return (null === (t = this.userNamespace.fullPath) || void 0 === t ? void 0 : t.toLowerCase().includes(this.search.toLowerCase())) && !this.groupPathToFilterBy
                    }, hasNoMatches() {
                        return !this.hasGroupMatches && !this.hasNamespaceMatches
                    }, dropdownPlaceholderClass() {
                        return this.selectedNamespace.id ? "" : "gl-text-gray-500!"
                    }
                }, created() {
                    E.a.$on("select-template", this.handleSelectTemplate)
                }, beforeDestroy() {
                    E.a.$off("select-template", this.handleSelectTemplate)
                }, methods: {
                    handleDropdownShown() {
                        this.shouldSkipQuery && (this.shouldSkipQuery = !1), this.$refs.search.focusInput()
                    }, handleDropdownItemClick(t) {
                        E.a.$emit("update-visibility", {
                            name: t.name,
                            visibility: t.visibility,
                            showPath: t.webUrl,
                            editPath: Object(S.x)(t.webUrl, "-", "edit")
                        }), this.setNamespace(t)
                    }, handleSelectTemplate(t, e) {
                        this.groupPathToFilterBy = e.split(S.b).shift(), this.setNamespace({id: t, fullPath: e})
                    }, setNamespace(t) {
                        let {id: e, fullPath: n} = t;
                        this.selectedNamespace = {id: Object(x.e)(e), fullPath: n}
                    }
                }
            }, q = Object(h.a)(I, (function () {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return n("gl-button-group", {staticClass: "gl-w-full"}, [n("gl-button", {
                    staticClass: "js-group-namespace-button gl-text-truncate gl-flex-grow-0!",
                    attrs: {label: "", title: t.rootUrl}
                }, [t._v(t._s(t.rootUrl))]), t._v(" "), n("gl-dropdown", {
                    staticClass: "js-group-namespace-dropdown gl-flex-grow-1",
                    attrs: {
                        text: t.selectedNamespace.fullPath,
                        "toggle-class": "gl-rounded-top-right-base! gl-rounded-bottom-right-base! gl-w-20 " + t.dropdownPlaceholderClass,
                        "data-qa-selector": "select_namespace_dropdown"
                    },
                    on: {
                        show: function (e) {
                            return t.track("activate_form_input", {label: t.trackLabel, property: "project_path"})
                        }, shown: t.handleDropdownShown
                    }
                }, [n("gl-search-box-by-type", {
                    ref: "search",
                    attrs: {
                        "is-loading": t.$apollo.queries.currentUser.loading,
                        "data-qa-selector": "select_namespace_dropdown_search_field"
                    },
                    model: {
                        value: t.search, callback: function (e) {
                            t.search = "string" == typeof e ? e.trim() : e
                        }, expression: "search"
                    }
                }), t._v(" "), t.$apollo.queries.currentUser.loading ? t._e() : [t.hasGroupMatches ? [n("gl-dropdown-section-header", [t._v(t._s(t.__("Groups")))]), t._v(" "), t._l(t.filteredGroups, (function (e) {
                    return n("gl-dropdown-item", {
                        key: e.id, on: {
                            click: function (n) {
                                return t.handleDropdownItemClick(e)
                            }
                        }
                    }, [t._v("\n          " + t._s(e.fullPath) + "\n        ")])
                }))] : t._e(), t._v(" "), t.hasNamespaceMatches ? [n("gl-dropdown-section-header", [t._v(t._s(t.__("Users")))]), t._v(" "), n("gl-dropdown-item", {
                    on: {
                        click: function (e) {
                            return t.handleDropdownItemClick(t.userNamespace)
                        }
                    }
                }, [t._v("\n          " + t._s(t.userNamespace.fullPath) + "\n        ")])] : t._e(), t._v(" "), t.hasNoMatches ? n("gl-dropdown-text", [t._v(t._s(t.__("No matches found")))]) : t._e()]], 2), t._v(" "), n("input", {
                    attrs: {
                        type: "hidden",
                        name: "project[selected_namespace_id]"
                    }, domProps: {value: t.selectedNamespace.id}
                }), t._v(" "), n("input", {
                    attrs: {
                        id: "project_namespace_id",
                        type: "hidden",
                        name: "project[namespace_id]"
                    }, domProps: {value: t.selectedNamespace.id || t.userNamespaceId}
                })], 1)
            }), [], !1, null, null, null).exports, L = n("tXCq"), N = n("xFu9"), H = n("VwZc"), F = n("nPFI"),
            z = n("u1ru"), V = n("mcoW");
        const A = Object(s.g)("DeploymentTarget|Kubernetes (GKE, EKS, OpenShift, and so on)"),
            R = [A, Object(s.g)("DeploymentTarget|Managed container runtime (Fargate, Cloud Run, DigitalOcean App)"), Object(s.g)("DeploymentTarget|Self-managed container runtime (Podman, Docker Swarm, Docker Compose)"), Object(s.g)("DeploymentTarget|Heroku"), Object(s.g)("DeploymentTarget|Virtual machine (for example, EC2)"), Object(s.g)("DeploymentTarget|Mobile app store"), Object(s.g)("DeploymentTarget|Registry (package or container)"), Object(s.g)("DeploymentTarget|Infrastructure provider (Terraform, Cloudformation, and so on)"), Object(s.g)("DeploymentTarget|Serverless backend (Lambda, Cloud functions)"), Object(s.g)("DeploymentTarget|GitLab Pages"), Object(s.g)("DeploymentTarget|Other hosting service"), Object(s.g)("DeploymentTarget|No deployment planned")],
            M = D.a.mixin({label: "new_project_deployment_target"});
        var G = {
            i18n: {
                deploymentTargetLabel: Object(s.g)("Deployment Target|Project deployment target (optional)"),
                defaultOption: Object(s.g)("Deployment Target|Select the deployment target"),
                k8sEducationText: Object(s.g)("Deployment Target|%{linkStart}How to provision or deploy to Kubernetes clusters from GitLab?%{linkEnd}")
            },
            deploymentTargets: R,
            VISIT_DOCS_EVENT: "visit_docs",
            DEPLOYMENT_TARGET_LABEL: "new_project_deployment_target",
            selectId: "deployment-target-select",
            helpPageUrl: Object(V.a)("user/clusters/agent/index"),
            components: {GlFormGroup: L.a, GlFormSelect: N.a, GlFormText: H.a, GlSprintf: F.a, GlLink: z.a},
            mixins: [M],
            data: () => ({selectedTarget: null, formSubmitted: !1}),
            computed: {
                isK8sOptionSelected() {
                    return this.selectedTarget === A
                }
            },
            mounted() {
                var t = this;
                document.getElementById("new_project").addEventListener("submit", (function () {
                    t.formSubmitted = !0, t.trackSelection()
                }))
            },
            methods: {
                trackSelection() {
                    this.formSubmitted && this.selectedTarget && this.track("select_deployment_target", {property: this.selectedTarget})
                }
            }
        }, U = Object(h.a)(G, (function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("gl-form-group", {
                attrs: {
                    label: t.$options.i18n.deploymentTargetLabel,
                    "label-for": t.$options.selectId
                }
            }, [n("gl-form-select", {
                staticClass: "input-lg",
                attrs: {id: t.$options.selectId, options: t.$options.deploymentTargets},
                scopedSlots: t._u([{
                    key: "first", fn: function () {
                        return [n("option", {
                            attrs: {disabled: ""},
                            domProps: {value: null}
                        }, [t._v(t._s(t.$options.i18n.defaultOption))])]
                    }, proxy: !0
                }]),
                model: {
                    value: t.selectedTarget, callback: function (e) {
                        t.selectedTarget = e
                    }, expression: "selectedTarget"
                }
            }), t._v(" "), t.isK8sOptionSelected ? n("gl-form-text", [n("gl-sprintf", {
                attrs: {message: t.$options.i18n.k8sEducationText},
                scopedSlots: t._u([{
                    key: "link", fn: function (e) {
                        var i = e.content;
                        return [n("gl-link", {
                            attrs: {
                                href: t.$options.helpPageUrl,
                                "data-track-action": t.$options.VISIT_DOCS_EVENT,
                                "data-track-label": t.$options.DEPLOYMENT_TARGET_LABEL
                            }
                        }, [t._v(t._s(i))])]
                    }
                }], null, !1, 1734076637)
            })], 1) : t._e()], 1)
        }), [], !1, null, null, null).exports;
        var W = n("DQUS"), Y = n("X4fA");
        Object(W.a)(), Y.b.bindEvents(), function () {
            const t = document.querySelector(".js-new-project-creation"), {
                    pushToCreateProjectCommand: e,
                    workingWithProjectsHelpPath: n,
                    newProjectGuidelines: r,
                    hasErrors: o,
                    isCiCdAvailable: l
                } = t.dataset, s = {hasErrors: Object(a.G)(o), isCiCdAvailable: Object(a.G)(l), newProjectGuidelines: r},
                c = {workingWithProjectsHelpPath: n, pushToCreateProjectCommand: e};
            new i.default({el: t, provide: c, render: t => t(v, {props: s})})
        }(), function () {
            const t = document.querySelectorAll(".js-vue-new-project-url-select");
            t.length && (i.default.use(r.default), t.forEach((function (t) {
                return new i.default({
                    el: t,
                    apolloProvider: new r.default({defaultClient: Object(o.default)()}),
                    provide: {
                        namespaceFullPath: t.dataset.namespaceFullPath,
                        namespaceId: t.dataset.namespaceId,
                        rootUrl: t.dataset.rootUrl,
                        trackLabel: t.dataset.trackLabel,
                        userNamespaceId: t.dataset.userNamespaceId
                    },
                    render: function (t) {
                        return t(q)
                    }
                })
            })))
        }(), function () {
            const t = document.querySelector(".js-deployment-target-select");
            t && new i.default({
                el: t, render: function (t) {
                    return t(U)
                }
            })
        }();
        n("WmlO"), n("W9Nl");
        var J = n("6oy4"), Z = n.n(J), Q = n("mphk");
        const X = ".js-custom-instance-project-templates-tab-content",
            K = ".js-custom-group-project-templates-tab-content", tt = function () {
                const t = Z()("#new_project"), e = Z()(".custom-template-button > input"), n = Z()(".project-fields-form"),
                    i = Z()(".selected-icon"), r = Z()(".selected-template"),
                    o = Z()("#template-project-name #project_path"), a = Z()(".change-template"),
                    l = Z()(".project-templates-buttons"),
                    s = Z()(".project-fields-form input#project_use_custom_template"),
                    c = Z()(".js-project-group-with-project-templates-id"), u = n.find(".js-select-namespace"),
                    d = Z()(".gl-pagination");
                let p = !1;
                1 === t.length && 0 !== e.length && (e.on("change", (function () {
                    const t = Z()(this).data("subgroup-id"), e = Z()(this).data("parent-group-id"),
                        a = Z()(this).data("template-name");
                    if (t) {
                        const n = Z()(this).data("subgroup-full-path"), i = Z()(this).data("target-group-full-path");
                        E.a.$emit("select-template", i ? e : t, i || n), c.val(t), u.val(e).trigger("change"), function () {
                            var t;
                            const e = `/${null === (t = u.find("option:selected").data("show-path")) || void 0 === t ? void 0 : t.split("/")[1]}`;
                            u.find("option").filter((function () {
                                return !Z()(this).data("show-path").includes(e)
                            })).addClass("hidden")
                        }(), u.find("optgroup").filter((function () {
                            return !Z()(this).find("option:not(.hidden)").length
                        })).addClass("hidden")
                    }
                    l.addClass("hidden"), n.addClass("selected"), i.empty(), r.text(a), Z()(this).parents(".template-option").find(".avatar").clone().addClass("d-block").removeClass("s40").appendTo(i), o.focus(), s.val(!0);
                    const d = Z()(".tab-pane.active #project_name"), f = Z()(".tab-pane.active #project_path");
                    d.focus(), d.on("keyup", (function () {
                        Y.b.onProjectNameChangeJq(d, f), p = d.val().trim().length > 0
                    })), f.on("keyup", (function () {
                        return Y.b.onProjectPathChangeJq(d, f, p)
                    })), n.find(".js-select-namespace").first().val(e)
                })), a.on("click", (function () {
                    l.removeClass("hidden"), e.prop("checked", !1), u.val(u.find('option[data-options-parent="users"]').val()).trigger("change"), u.find("option, optgroup").removeClass("hidden"), s.val(!1)
                })), d.on("ajax:success", (function (t) {
                    const e = d.closest([X, K].join(",")), n = t.detail[0],
                        i = document.adoptNode(n.body.firstElementChild);
                    e.empty().append(i), tt()
                })), Z()(document).on("click", ".js-template-group-options", (function () {
                    Z()(this).toggleClass("expanded")
                })))
            };
        !function () {
            const t = Z()(".js-custom-instance-project-templates-nav-link"), e = Z()(X),
                n = Z()(".js-custom-group-project-templates-nav-link"), i = Z()(K), r = async function (t) {
                    const e = await Q.a.get(t.data("initialTemplates"));
                    t[0].innerHTML = e.data, tt()
                };
            t.one("click", (function () {
                return r(e)
            })), n.one("click", (function () {
                return r(i)
            })), tt()
        }()
    }, "0X+3": function (t, e, n) {
        "use strict";
        var i = n("Z2pp"), r = n("jyii"), o = n("gCUY"), a = n("qx9o"), l = n("9Q7u"), s = n("ummR"), c = n("GpHn"),
            u = n("lHYX");

        function d(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(t);
                e && (i = i.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), n.push.apply(n, i)
            }
            return n
        }

        function p(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? d(Object(n), !0).forEach((function (e) {
                    f(t, e, n[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : d(Object(n)).forEach((function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }))
            }
            return t
        }

        function f(t, e, n) {
            return e in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n, t
        }

        var h = Object(l.j)(u.b, ["event", "routerTag"]), b = i.a.extend({
            name: r.q,
            mixins: [s.a, c.a],
            inject: {bvDropdown: {default: null}},
            inheritAttrs: !1,
            props: Object(o.c)(p(p({}, h), {}, {
                linkClass: {type: [String, Array, Object]},
                variant: {type: String}
            }), r.q),
            computed: {
                computedAttrs: function () {
                    return p(p({}, this.bvAttrs), {}, {role: "menuitem"})
                }
            },
            methods: {
                closeDropdown: function () {
                    var t = this;
                    Object(a.B)((function () {
                        t.bvDropdown && t.bvDropdown.hide(!0)
                    }))
                }, onClick: function (t) {
                    this.$emit("click", t), this.closeDropdown()
                }
            },
            render: function (t) {
                var e = this.linkClass, n = this.variant, i = this.active, r = this.disabled, o = this.onClick;
                return t("li", {attrs: {role: "presentation"}}, [t(u.a, {
                    staticClass: "dropdown-item",
                    class: [e, f({}, "text-".concat(n), n && !(i || r))],
                    props: this.$props,
                    attrs: this.computedAttrs,
                    on: {click: o},
                    ref: "item"
                }, this.normalizeSlot())])
            }
        });

        function m(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(t);
                e && (i = i.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), n.push.apply(n, i)
            }
            return n
        }

        function g(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? m(Object(n), !0).forEach((function (e) {
                    v(t, e, n[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : m(Object(n)).forEach((function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }))
            }
            return t
        }

        function v(t, e, n) {
            return e in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n, t
        }

        var y = Object(o.c)({
            active: {type: Boolean, default: !1},
            activeClass: {type: String, default: "active"},
            buttonClass: {type: [String, Array, Object]},
            disabled: {type: Boolean, default: !1},
            variant: {type: String}
        }, r.r), O = i.a.extend({
            name: r.r,
            mixins: [s.a, c.a],
            inject: {bvDropdown: {default: null}},
            inheritAttrs: !1,
            props: y,
            computed: {
                computedAttrs: function () {
                    return g(g({}, this.bvAttrs), {}, {role: "menuitem", type: "button", disabled: this.disabled})
                }
            },
            methods: {
                closeDropdown: function () {
                    this.bvDropdown && this.bvDropdown.hide(!0)
                }, onClick: function (t) {
                    this.$emit("click", t), this.closeDropdown()
                }
            },
            render: function (t) {
                var e;
                return t("li", {attrs: {role: "presentation"}}, [t("button", {
                    staticClass: "dropdown-item",
                    class: [this.buttonClass, (e = {}, v(e, this.activeClass, this.active), v(e, "text-".concat(this.variant), this.variant && !(this.active || this.disabled)), e)],
                    attrs: this.computedAttrs,
                    on: {click: this.onClick},
                    ref: "button"
                }, this.normalizeSlot())])
            }
        }), j = n("Fcvx"), w = n("cmjF"), k = n("cuRJ"), _ = n("H8gz"), C = n("6IRw"), S = n.n(C);
        const P = {
            components: {GlIcon: _.a, GlAvatar: w.a, GlButton: k.a},
            inheritAttrs: !1,
            props: {
                avatarUrl: {type: String, required: !1, default: ""},
                iconColor: {type: String, required: !1, default: ""},
                iconName: {type: String, required: !1, default: ""},
                iconRightAriaLabel: {type: String, required: !1, default: ""},
                iconRightName: {type: String, required: !1, default: ""},
                isChecked: {type: Boolean, required: !1, default: !1},
                isCheckItem: {type: Boolean, required: !1, default: !1},
                isCheckCentered: {type: Boolean, required: !1, default: !1},
                secondaryText: {type: String, required: !1, default: ""}
            },
            computed: {
                bootstrapComponent() {
                    const {href: t, to: e} = this.$attrs;
                    return t || e ? b : O
                }, iconColorCss() {
                    return j.H[this.iconColor] || "gl-text-gray-700"
                }, shouldShowCheckIcon() {
                    return this.isChecked || this.isCheckItem
                }, checkedClasses() {
                    return this.isCheckCentered ? "" : "gl-mt-3 gl-align-self-start"
                }
            },
            methods: {
                handleClickIconRight() {
                    this.$emit("click-icon-right")
                }
            }
        };
        const x = S()({
            render: function () {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return n(t.bootstrapComponent, t._g(t._b({
                    tag: "component",
                    staticClass: "gl-new-dropdown-item"
                }, "component", t.$attrs, !1), t.$listeners), [t.shouldShowCheckIcon ? n("gl-icon", {
                    class: ["gl-new-dropdown-item-check-icon", {"gl-visibility-hidden": !t.isChecked}, t.checkedClasses],
                    attrs: {name: "mobile-issue-close", "data-testid": "dropdown-item-checkbox"}
                }) : t._e(), t._v(" "), t.iconName ? n("gl-icon", {
                    class: ["gl-new-dropdown-item-icon", t.iconColorCss],
                    attrs: {name: t.iconName}
                }) : t._e(), t._v(" "), t.avatarUrl ? n("gl-avatar", {
                    attrs: {
                        size: 32,
                        src: t.avatarUrl
                    }
                }) : t._e(), t._v(" "), n("div", {staticClass: "gl-new-dropdown-item-text-wrapper"}, [n("p", {staticClass: "gl-new-dropdown-item-text-primary"}, [t._t("default")], 2), t._v(" "), t.secondaryText ? n("p", {staticClass: "gl-new-dropdown-item-text-secondary"}, [t._v(t._s(t.secondaryText))]) : t._e()]), t._v(" "), t.iconRightName ? n("gl-button", {
                    attrs: {
                        size: "small",
                        icon: t.iconRightName,
                        "aria-label": t.iconRightAriaLabel || t.iconRightName
                    }, on: {
                        click: function (e) {
                            return e.stopPropagation(), e.preventDefault(), t.handleClickIconRight(e)
                        }
                    }
                }) : t._e()], 1)
            }, staticRenderFns: []
        }, void 0, P, void 0, !1, void 0, !1, void 0, void 0, void 0);
        e.a = x
    }, "1pIC": function (t, e, n) {
        "use strict";
        e.a = {
            props: {id: {type: String}}, data: function () {
                return {localId_: null}
            }, computed: {
                safeId: function () {
                    var t = this.id || this.localId_;
                    return function (e) {
                        return t ? (e = String(e || "").replace(/\s+/g, "_")) ? t + "_" + e : t : null
                    }
                }
            }, mounted: function () {
                var t = this;
                this.$nextTick((function () {
                    t.localId_ = "__BVID__".concat(t._uid)
                }))
            }
        }
    }, 203: function (t, e, n) {
        n("uGLJ"), n("sH5Z"), t.exports = n("0R5a")
    }, "34cr": function (t, e, n) {
        "use strict";
        var i = n("ly/8"), r = n("cuRJ"), o = n("6IRw"), a = n.n(o);
        const l = {
            components: {GlButton: r.a},
            directives: {GlTooltip: i.a},
            props: {
                title: {type: String, required: !1, default: "Clear"},
                tooltipContainer: {
                    required: !1,
                    default: !1,
                    validator: t => !1 === t || "string" == typeof t || t instanceof HTMLElement
                }
            }
        };
        const s = a()({
            render: function () {
                var t = this.$createElement;
                return (this._self._c || t)("gl-button", this._g({
                    directives: [{
                        name: "gl-tooltip",
                        rawName: "v-gl-tooltip.hover",
                        value: {container: this.tooltipContainer},
                        expression: "{ container: tooltipContainer }",
                        modifiers: {hover: !0}
                    }],
                    staticClass: "gl-clear-icon-button",
                    attrs: {
                        variant: "default",
                        category: "tertiary",
                        size: "small",
                        name: "clear",
                        icon: "clear",
                        title: this.title,
                        "aria-label": this.title
                    }
                }, this.$listeners))
            }, staticRenderFns: []
        }, void 0, l, void 0, !1, void 0, !1, void 0, void 0, void 0);
        e.a = s
    }, "6HTq": function (t, e, n) {
        "use strict";
        var i = n("34cr"), r = n("tSMP"), o = n("H8gz"), a = n("zLBL"), l = n("6IRw"), s = n.n(l);
        const c = {
            components: {GlClearIconButton: i.a, GlIcon: o.a, GlFormInput: r.a, GlLoadingIcon: a.a},
            inheritAttrs: !1,
            model: {prop: "value", event: "input"},
            props: {
                value: {type: String, required: !1, default: ""},
                clearButtonTitle: {type: String, required: !1, default: "Clear"},
                disabled: {type: Boolean, required: !1, default: !1},
                isLoading: {type: Boolean, required: !1, default: !1},
                tooltipContainer: {
                    required: !1,
                    default: !1,
                    validator: t => !1 === t || "string" == typeof t || t instanceof HTMLElement
                }
            },
            computed: {
                inputAttributes() {
                    const t = {type: "search", placeholder: "Search", ...this.$attrs};
                    return t["aria-label"] || (t["aria-label"] = t.placeholder), t
                }, hasValue() {
                    return Boolean(this.value.length)
                }, inputListeners() {
                    return {
                        ...this.$listeners, input: t => {
                            this.$emit("input", t)
                        }
                    }
                }, showClearButton() {
                    return this.hasValue && !this.disabled
                }
            },
            methods: {
                clearInput() {
                    this.$emit("input", ""), this.focusInput()
                }, focusInput() {
                    this.$refs.input.$el.focus()
                }
            }
        };
        const u = s()({
            render: function () {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return n("div", {staticClass: "gl-search-box-by-type"}, [n("gl-icon", {
                    staticClass: "gl-search-box-by-type-search-icon",
                    attrs: {name: "search"}
                }), t._v(" "), n("gl-form-input", t._g(t._b({
                    ref: "input",
                    staticClass: "gl-search-box-by-type-input",
                    attrs: {value: t.value, disabled: t.disabled}
                }, "gl-form-input", t.inputAttributes, !1), t.inputListeners)), t._v(" "), n("div", {staticClass: "gl-search-box-by-type-right-icons"}, [t.isLoading ? n("gl-loading-icon", {staticClass: "gl-search-box-by-type-loading-icon"}) : t._e(), t._v(" "), t.showClearButton ? n("gl-clear-icon-button", {
                    staticClass: "gl-search-box-by-type-clear gl-clear-icon-button",
                    attrs: {title: t.clearButtonTitle, "tooltip-container": t.tooltipContainer},
                    on: {
                        click: function (e) {
                            return e.stopPropagation(), t.clearInput(e)
                        }
                    }
                }) : t._e()], 1)], 1)
            }, staticRenderFns: []
        }, void 0, c, void 0, !1, void 0, !1, void 0, void 0, void 0);
        e.a = u
    }, "9uTP": function (t, e, n) {
        "use strict";
        var i = n("Z2pp"), r = n("DQ7i"), o = n("jyii"), a = n("/Zha"), l = n("gCUY"), s = n("Sq3g"), c = n("mYXc"),
            u = n("s4Bd");

        function d(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(t);
                e && (i = i.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), n.push.apply(n, i)
            }
            return n
        }

        function p(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? d(Object(n), !0).forEach((function (e) {
                    f(t, e, n[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : d(Object(n)).forEach((function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }))
            }
            return t
        }

        function f(t, e, n) {
            return e in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n, t
        }

        var h = {
            id: {type: String, default: null},
            tag: {type: String, default: "div"},
            isText: {type: Boolean, default: !1}
        }, b = i.a.extend({
            name: o.K,
            functional: !0,
            props: Object(l.c)(p(p({}, h), {}, {append: {type: Boolean, default: !1}}), o.K),
            render: function (t, e) {
                var n = e.props, i = e.data, o = e.children;
                return t(n.tag, Object(r.a)(i, {
                    class: {
                        "input-group-append": n.append,
                        "input-group-prepend": !n.append
                    }, attrs: {id: n.id}
                }), n.isText ? [t(u.a, o)] : o)
            }
        });

        function m(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(t);
                e && (i = i.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), n.push.apply(n, i)
            }
            return n
        }

        function g(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? m(Object(n), !0).forEach((function (e) {
                    v(t, e, n[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : m(Object(n)).forEach((function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }))
            }
            return t
        }

        function v(t, e, n) {
            return e in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n, t
        }

        var y = i.a.extend({
            name: o.L, functional: !0, props: Object(l.c)(h, o.L), render: function (t, e) {
                var n = e.props, i = e.data, o = e.children;
                return t(b, Object(r.a)(i, {props: g(g({}, n), {}, {append: !0})}), o)
            }
        });

        function O(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(t);
                e && (i = i.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), n.push.apply(n, i)
            }
            return n
        }

        function j(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? O(Object(n), !0).forEach((function (e) {
                    w(t, e, n[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : O(Object(n)).forEach((function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }))
            }
            return t
        }

        function w(t, e, n) {
            return e in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n, t
        }

        var k = i.a.extend({
            name: o.M, functional: !0, props: Object(l.c)(h, o.M), render: function (t, e) {
                var n = e.props, i = e.data, o = e.children;
                return t(b, Object(r.a)(i, {props: j(j({}, n), {}, {append: !1})}), o)
            }
        });
        var _ = Object(l.c)({
            id: {type: String},
            size: {type: String},
            prepend: {type: String},
            prependHtml: {type: String},
            append: {type: String},
            appendHtml: {type: String},
            tag: {type: String, default: "div"}
        }, o.J), C = i.a.extend({
            name: o.J, functional: !0, props: _, render: function (t, e) {
                var n = e.props, i = e.data, o = e.slots, l = e.scopedSlots, d = n.prepend, p = n.prependHtml,
                    f = n.append, h = n.appendHtml, b = n.size, m = l || {}, g = o(), v = {}, O = t(),
                    j = Object(c.a)(a.g, m, g);
                (j || d || p) && (O = t(k, [j ? Object(c.b)(a.g, v, m, g) : t(u.a, {domProps: Object(s.a)(p, d)})]));
                var w, _, C, S = t(), P = Object(c.a)(a.a, m, g);
                return (P || f || h) && (S = t(y, [P ? Object(c.b)(a.a, v, m, g) : t(u.a, {domProps: Object(s.a)(h, f)})])), t(n.tag, Object(r.a)(i, {
                    staticClass: "input-group",
                    class: (w = {}, _ = "input-group-".concat(b), C = b, _ in w ? Object.defineProperty(w, _, {
                        value: C,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : w[_] = C, w),
                    attrs: {id: n.id || null, role: "group"}
                }), [O, Object(c.b)(a.c, v, m, g), S])
            }
        }), S = n("/Jty"), P = n("OkMp"), x = n("0X+3");
        const D = {
            props: {value: {type: [String, Number], default: ""}}, data() {
                return {localValue: this.stringifyValue(this.value)}
            }, watch: {
                value(t) {
                    t !== this.localValue && (this.localValue = this.stringifyValue(t))
                }, localValue(t) {
                    t !== this.value && this.$emit("input", t)
                }
            }, mounted() {
                const t = this.stringifyValue(this.value);
                if (this.activeOption) {
                    const t = this.predefinedOptions.find(t => t.name === this.activeOption);
                    this.localValue = t.value
                } else t !== this.localValue && (this.localValue = t)
            }, methods: {stringifyValue: t => null == t ? "" : String(t)}
        };
        var B = n("6IRw"), T = n.n(B);
        const $ = {
            name: "GlFormInputGroup",
            components: {
                BInputGroup: C,
                BInputGroupPrepend: k,
                BInputGroupAppend: y,
                BFormInput: S.a,
                GlDropdown: P.a,
                GlDropdownItem: x.a
            },
            mixins: [D],
            props: {
                selectOnClick: {type: Boolean, required: !1, default: !1},
                predefinedOptions: {
                    type: Array,
                    required: !1,
                    default: () => [{value: "", name: ""}],
                    validator: t => t.every(t => Object.keys(t).includes("name", "value"))
                },
                label: {type: String, required: !1, default: void 0},
                inputClass: {type: [String, Array, Object], required: !1, default: ""}
            },
            data() {
                return {activeOption: this.predefinedOptions && this.predefinedOptions[0].name}
            },
            methods: {
                handleClick() {
                    this.selectOnClick && this.$refs.input.$el.select()
                }, updateValue(t) {
                    const {name: e, value: n} = t;
                    this.activeOption = e, this.localValue = n
                }
            }
        };
        const E = T()({
            render: function () {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return n("b-input-group", [t.activeOption || t.$scopedSlots.prepend ? n("b-input-group-prepend", [t._t("prepend"), t._v(" "), t.activeOption ? n("gl-dropdown", {attrs: {text: t.activeOption}}, t._l(t.predefinedOptions, (function (e) {
                    return n("gl-dropdown-item", {
                        key: e.value,
                        attrs: {"is-check-item": "", "is-checked": t.activeOption === e.name},
                        on: {
                            click: function (n) {
                                return t.updateValue(e)
                            }
                        }
                    }, [t._v("\n        " + t._s(e.name) + "\n      ")])
                })), 1) : t._e()], 2) : t._e(), t._v(" "), t._t("default", [n("b-form-input", t._g(t._b({
                    ref: "input",
                    class: ["gl-form-input", t.inputClass],
                    attrs: {"aria-label": t.label},
                    on: {click: t.handleClick},
                    model: {
                        value: t.localValue, callback: function (e) {
                            t.localValue = e
                        }, expression: "localValue"
                    }
                }, "b-form-input", t.$attrs, !1), t.$listeners))]), t._v(" "), t.$scopedSlots.append ? n("b-input-group-append", [t._t("append")], 2) : t._e()], 2)
            }, staticRenderFns: []
        }, void 0, $, void 0, !1, void 0, !1, void 0, void 0, void 0);
        e.a = E
    }, DQUS: function (t, e, n) {
        "use strict";
        n.d(e, "a", (function () {
            return u
        }));
        var i = n("A1CF"), r = n.n(i), o = (n("JHu5"), n("3R5X"), n("XUYm"), n("t9l/")), a = n("mfvC");
        const l = {private: 0, internal: 10, public: 20};

        function s(t) {
            let {name: e, visibility: n, showPath: i, editPath: a} = t;
            document.querySelectorAll(".visibility-level-setting .form-check").forEach((function (t) {
                if (t.classList.contains("restricted")) return;
                const s = t.querySelector("input[type=radio]"), c = s ? parseInt(s.value, 10) : 0;
                if (l[n] < c) {
                    t.classList.add("disabled"), s.disabled = !0;
                    const l = t.querySelector(".option-disabled-reason");
                    if (l) {
                        const s = t.querySelector(".option-title"), c = s ? s.innerText.toLowerCase() : "";
                        l.innerHTML = Object(o.h)(Object(o.a)("This project cannot be %{visibilityLevel} because the visibility of %{openShowLink}%{name}%{closeShowLink} is %{visibility}. To make this project %{visibilityLevel}, you must first %{openEditLink}change the visibility%{closeEditLink} of the parent group."), {
                            visibilityLevel: c,
                            name: r()(e),
                            visibility: n,
                            openShowLink: `<a href="${i}">`,
                            closeShowLink: "</a>",
                            openEditLink: `<a href="${a}">`,
                            closeEditLink: "</a>"
                        }, !1)
                    }
                } else t.classList.remove("disabled"), s.disabled = !1
            }))
        }

        function c(t) {
            if (!(t && "selectedIndex" in t)) return;
            s(t.options[t.selectedIndex].dataset)
        }

        function u() {
            a.a.$on("update-visibility", s);
            const t = document.querySelector("select.js-select-namespace");
            if (t) {
                document.querySelector(".select2.js-select-namespace").addEventListener("change", (function () {
                    return c(t)
                })), c(t)
            }
        }
    }, EhLH: function (t, e, n) {
        "use strict";
        n.d(e, "b", (function () {
            return c
        }));
        var i = n("7DqY"), r = n("gCUY"), o = n("Sq3g"), a = n("G55H"), l = n("9Q7u"), s = n("iryQ"), c = Object(r.c)({
            options: {
                type: [Array, Object], default: function () {
                    return []
                }
            },
            valueField: {type: String, default: "value"},
            textField: {type: String, default: "text"},
            htmlField: {type: String, default: "html"},
            disabledField: {type: String, default: "disabled"}
        }, "formOptionControls");
        e.a = {
            props: c, computed: {
                formOptions: function () {
                    return this.normalizeOptions(this.options)
                }
            }, methods: {
                normalizeOption: function (t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                    if (Object(a.j)(t)) {
                        var n = Object(i.a)(t, this.valueField), r = Object(i.a)(t, this.textField);
                        return {
                            value: Object(a.n)(n) ? e || r : n,
                            text: Object(o.b)(String(Object(a.n)(r) ? e : r)),
                            html: Object(i.a)(t, this.htmlField),
                            disabled: Boolean(Object(i.a)(t, this.disabledField))
                        }
                    }
                    return {value: e || t, text: Object(o.b)(String(t)), disabled: !1}
                }, normalizeOptions: function (t) {
                    var e = this;
                    return Object(a.a)(t) ? t.map((function (t) {
                        return e.normalizeOption(t)
                    })) : Object(a.j)(t) ? (Object(s.a)('Setting prop "options" to an object is deprecated. Use the array format instead.', this.$options.name), Object(l.h)(t).map((function (n) {
                        return e.normalizeOption(t[n] || {}, n)
                    }))) : []
                }
            }
        }
    }, Gr03: function (t, e, n) {
        "use strict";
        var i = n("Z2pp"), r = n("DQ7i"), o = n("jyii"), a = n("gCUY");

        function l(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(t);
                e && (i = i.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), n.push.apply(n, i)
            }
            return n
        }

        function s(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? l(Object(n), !0).forEach((function (e) {
                    c(t, e, n[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : l(Object(n)).forEach((function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }))
            }
            return t
        }

        function c(t, e, n) {
            return e in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n, t
        }

        var u = Object(a.c)({id: {type: String}, tag: {type: String, default: "header"}, variant: {type: String}}, o.p),
            d = i.a.extend({
                name: o.p, functional: !0, props: u, render: function (t, e) {
                    var n = e.props, i = e.data, o = e.children, a = i.attrs || {};
                    return i.attrs = {}, t("li", Object(r.a)(i, {attrs: {role: "presentation"}}), [t(n.tag, {
                        staticClass: "dropdown-header",
                        class: c({}, "text-".concat(n.variant), n.variant),
                        attrs: s(s({}, a), {}, {id: n.id || null, role: "heading"}),
                        ref: "header"
                    }, o)])
                }
            }), p = n("6IRw");
        const f = {components: {BDropdownHeader: d}, inheritAttrs: !1};
        const h = n.n(p)()({
            render: function () {
                var t = this.$createElement;
                return (this._self._c || t)("b-dropdown-header", this._g(this._b({staticClass: "gl-new-dropdown-section-header"}, "b-dropdown-header", this.$attrs, !1), this.$listeners), [this._t("default")], 2)
            }, staticRenderFns: []
        }, void 0, f, void 0, !1, void 0, !1, void 0, void 0, void 0);
        e.a = h
    }, HJOD: function (t, e, n) {
        "use strict";
        e.a = {
            computed: {
                validity: {
                    cache: !1, get: function () {
                        return this.$refs.input.validity
                    }
                }, validationMessage: {
                    cache: !1, get: function () {
                        return this.$refs.input.validationMessage
                    }
                }, willValidate: {
                    cache: !1, get: function () {
                        return this.$refs.input.willValidate
                    }
                }
            }, methods: {
                setCustomValidity: function () {
                    var t;
                    return (t = this.$refs.input).setCustomValidity.apply(t, arguments)
                }, checkValidity: function () {
                    var t;
                    return (t = this.$refs.input).checkValidity.apply(t, arguments)
                }, reportValidity: function () {
                    var t;
                    return (t = this.$refs.input).reportValidity.apply(t, arguments)
                }
            }
        }
    }, KpC0: function (t, e, n) {
        "use strict";
        n.d(e, "b", (function () {
            return l
        }));
        var i = n("gCUY"), r = n("qx9o");

        function o(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(t);
                e && (i = i.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), n.push.apply(n, i)
            }
            return n
        }

        function a(t, e, n) {
            return e in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n, t
        }

        var l = function (t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? o(Object(n), !0).forEach((function (e) {
                    a(t, e, n[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach((function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }))
            }
            return t
        }({id: {type: String}, name: {type: String}}, Object(i.c)({
            disabled: {type: Boolean, default: !1},
            required: {type: Boolean, default: !1},
            form: {type: String},
            autofocus: {type: Boolean, default: !1}
        }, "formControls"));
        e.a = {
            props: l, mounted: function () {
                this.handleAutofocus()
            }, activated: function () {
                this.handleAutofocus()
            }, methods: {
                handleAutofocus: function () {
                    var t = this;
                    this.$nextTick((function () {
                        Object(r.B)((function () {
                            var e = t.$el;
                            t.autofocus && Object(r.u)(e) && (Object(r.v)(e, "input, textarea, select") || (e = Object(r.C)("input, textarea, select", e)), Object(r.d)(e))
                        }))
                    }))
                }
            }
        }
    }, LkRf: function (t, e, n) {
        "use strict";
        n.d(e, "a", (function () {
            return i
        })), n.d(e, "b", (function () {
            return r
        })), n.d(e, "c", (function () {
            return o
        })), n.d(e, "d", (function () {
            return a
        })), n.d(e, "e", (function () {
            return l
        })), n.d(e, "f", (function () {
            return s
        })), n.d(e, "g", (function () {
            return c
        })), n.d(e, "h", (function () {
            return u
        })), n.d(e, "i", (function () {
            return d
        })), n.d(e, "j", (function () {
            return p
        })), n.d(e, "k", (function () {
            return f
        })), n.d(e, "l", (function () {
            return h
        })), n.d(e, "m", (function () {
            return b
        })), n.d(e, "n", (function () {
            return m
        })), n.d(e, "o", (function () {
            return g
        })), n.d(e, "p", (function () {
            return v
        })), n.d(e, "q", (function () {
            return y
        })), n.d(e, "r", (function () {
            return O
        })), n.d(e, "s", (function () {
            return j
        })), n.d(e, "t", (function () {
            return w
        })), n.d(e, "u", (function () {
            return k
        })), n.d(e, "v", (function () {
            return _
        }));
        const i = 3, r = "Board", o = "Ci::Runner", a = "CustomerRelations::Contact",
            l = "CustomerRelations::Organization", s = "Discussion", c = "Epic", u = "Boards::EpicBoard", d = "Group",
            p = "Issue", f = "Iteration", h = "Iterations::Cadence", b = "MergeRequest", m = "Milestone", g = "Note",
            v = "Packages::Package", y = "Project", O = "DastScannerProfile", j = "DastSiteProfile", w = "User",
            k = "Vulnerability", _ = "WorkItem"
    }, ObLM: function (t, e, n) {
        "use strict";
        n.d(e, "c", (function () {
            return i
        })), n.d(e, "b", (function () {
            return r
        })), n.d(e, "a", (function () {
            return o
        }));
        const i = "Escape", r = "Enter", o = "Backspace"
    }, OkMp: function (t, e, n) {
        "use strict";
        var i = n("+iVy"), r = n("qx9o"), o = n("Fcvx");
        const a = {
            computed: {
                buttonSize() {
                    return o.m[this.size]
                }
            }
        };
        var l = n("cuRJ"), s = n("H8gz"), c = n("zLBL"), u = n("OqKX"), d = n("6IRw"), p = n.n(d);
        const f = ".dropdown-item:not(.disabled):not([disabled]),.form-control:not(.disabled):not([disabled])";
        const h = {
            components: {
                BDropdown: {
                    extends: i.a, methods: {
                        getItems() {
                            return (Object(r.D)(f, this.$refs.menu) || []).filter(r.u)
                        }
                    }
                }, GlButton: l.a, GlDropdownDivider: u.a, GlIcon: s.a, GlLoadingIcon: c.a
            }, mixins: [a], props: {
                headerText: {type: String, required: !1, default: ""},
                hideHeaderBorder: {type: Boolean, required: !1, default: !0},
                showClearAll: {type: Boolean, required: !1, default: !1},
                clearAllText: {type: String, required: !1, default: "Clear all"},
                clearAllTextClass: {type: String, required: !1, default: "gl-px-5"},
                text: {type: String, required: !1, default: ""},
                showHighlightedItemsTitle: {type: Boolean, required: !1, default: !1},
                highlightedItemsTitle: {type: String, required: !1, default: "Selected"},
                highlightedItemsTitleClass: {type: String, required: !1, default: "gl-px-5"},
                textSrOnly: {type: Boolean, required: !1, default: !1},
                split: {type: Boolean, required: !1, default: !1},
                category: {
                    type: String,
                    required: !1,
                    default: o.k.primary,
                    validator: t => Object.keys(o.k).includes(t)
                },
                variant: {
                    type: String,
                    required: !1,
                    default: o.r.default,
                    validator: t => Object.keys(o.r).includes(t)
                },
                size: {type: String, required: !1, default: o.l.medium, validator: t => Object.keys(o.l).includes(t)},
                icon: {type: String, required: !1, default: null},
                block: {type: Boolean, required: !1, default: !1},
                disabled: {type: Boolean, required: !1, default: !1},
                loading: {type: Boolean, required: !1, default: !1},
                toggleClass: {type: [String, Array, Object], required: !1, default: null},
                right: {type: Boolean, required: !1, default: !1}
            }, computed: {
                renderCaret() {
                    return !this.split
                }, isIconOnly() {
                    var t;
                    return Boolean(this.icon && (!(null !== (t = this.text) && void 0 !== t && t.length) || this.textSrOnly) && !this.hasSlotContents("button-text"))
                }, isIconWithText() {
                    var t;
                    return Boolean(this.icon && (null === (t = this.text) || void 0 === t ? void 0 : t.length) && !this.textSrOnly)
                }, toggleButtonClasses() {
                    return [this.toggleClass, {
                        "gl-button": !0,
                        "gl-dropdown-toggle": !0,
                        [`btn-${this.variant}-secondary`]: this.category === o.k.secondary || this.category === o.k.tertiary && this.split,
                        [`btn-${this.variant}-tertiary`]: this.category === o.k.tertiary && !this.split,
                        "dropdown-icon-only": this.isIconOnly,
                        "dropdown-icon-text": this.isIconWithText
                    }]
                }, splitButtonClasses() {
                    return [this.toggleClass, {
                        "gl-button": !0,
                        "split-content-button": Boolean(this.text),
                        "icon-split-content-button": Boolean(this.icon),
                        [`btn-${this.variant}-secondary`]: this.category === o.k.secondary || this.category === o.k.tertiary
                    }]
                }, buttonText() {
                    return this.split && this.icon ? null : this.text
                }, hasHighlightedItemsContent() {
                    return this.hasSlotContents("highlighted-items")
                }, hasHighlightedItemsOrClearAll() {
                    return this.hasHighlightedItemsContent && this.showHighlightedItemsTitle || this.showClearAll
                }
            }, methods: {
                hasSlotContents(t) {
                    return Boolean(this.$slots[t])
                }, show() {
                    this.$refs.dropdown.show(...arguments)
                }, hide() {
                    this.$refs.dropdown.hide(...arguments)
                }
            }
        };
        const b = p()({
            render: function () {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return n("b-dropdown", t._g(t._b({
                    ref: "dropdown",
                    staticClass: "gl-new-dropdown",
                    attrs: {
                        split: t.split,
                        variant: t.variant,
                        size: t.buttonSize,
                        "toggle-class": [t.toggleButtonClasses],
                        "split-class": t.splitButtonClasses,
                        block: t.block,
                        disabled: t.disabled || t.loading,
                        right: t.right
                    },
                    scopedSlots: t._u([{
                        key: "button-content", fn: function () {
                            return [t._t("button-content", [t.loading ? n("gl-loading-icon", {class: {"gl-mr-2": !t.isIconOnly}}) : t._e(), t._v(" "), !t.icon || t.isIconOnly && t.loading ? t._e() : n("gl-icon", {
                                staticClass: "dropdown-icon",
                                attrs: {name: t.icon}
                            }), t._v(" "), n("span", {
                                staticClass: "gl-new-dropdown-button-text",
                                class: {"gl-sr-only": t.textSrOnly}
                            }, [t._t("button-text", [t._v(t._s(t.buttonText))])], 2), t._v(" "), t.renderCaret ? n("gl-icon", {
                                staticClass: "gl-button-icon dropdown-chevron",
                                attrs: {name: "chevron-down"}
                            }) : t._e()])]
                        }, proxy: !0
                    }], null, !0)
                }, "b-dropdown", t.$attrs, !1), t.$listeners), [n("div", {staticClass: "gl-new-dropdown-inner"}, [t.hasSlotContents("header") || t.headerText ? n("div", {
                    staticClass: "gl-new-dropdown-header",
                    class: {"gl-border-b-0!": t.hideHeaderBorder}
                }, [t.headerText ? n("p", {staticClass: "gl-new-dropdown-header-top"}, [t._v("\n        " + t._s(t.headerText) + "\n      ")]) : t._e(), t._v(" "), t._t("header")], 2) : t._e(), t._v(" "), t.hasHighlightedItemsOrClearAll ? n("div", {staticClass: "gl-display-flex gl-flex-direction-row gl-justify-content-space-between gl-align-items-center"}, [t.hasHighlightedItemsContent && t.showHighlightedItemsTitle ? n("div", {
                    staticClass: "gl-display-flex gl-flex-grow-1 gl-justify-content-flex-start",
                    class: t.highlightedItemsTitleClass
                }, [n("span", {
                    staticClass: "gl-font-weight-bold",
                    attrs: {"data-testid": "highlighted-items-title"}
                }, [t._v(t._s(t.highlightedItemsTitle))])]) : t._e(), t._v(" "), t.showClearAll ? n("div", {
                    staticClass: "gl-display-flex gl-flex-grow-1 gl-justify-content-end",
                    class: t.clearAllTextClass
                }, [n("gl-button", {
                    attrs: {
                        size: "small",
                        category: "tertiary",
                        variant: "link",
                        "data-testid": "clear-all-button"
                    }, on: {
                        click: function (e) {
                            return t.$emit("clear-all", e)
                        }
                    }
                }, [t._v(t._s(t.clearAllText))])], 1) : t._e()]) : t._e(), t._v(" "), n("div", {staticClass: "gl-new-dropdown-contents"}, [t.hasHighlightedItemsContent ? n("div", {
                    staticClass: "gl-overflow-visible",
                    attrs: {"data-testid": "highlighted-items"}
                }, [t._t("highlighted-items"), t._v(" "), n("gl-dropdown-divider")], 2) : t._e(), t._v(" "), t._t("default")], 2), t._v(" "), t.hasSlotContents("footer") ? n("div", {staticClass: "gl-new-dropdown-footer"}, [t._t("footer")], 2) : t._e()])])
            }, staticRenderFns: []
        }, void 0, h, void 0, !1, void 0, !1, void 0, void 0, void 0);
        e.a = b
    }, OqKX: function (t, e, n) {
        "use strict";
        var i = n("Z2pp"), r = n("DQ7i"), o = n("jyii"), a = n("gCUY");

        function l(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(t);
                e && (i = i.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), n.push.apply(n, i)
            }
            return n
        }

        function s(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? l(Object(n), !0).forEach((function (e) {
                    c(t, e, n[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : l(Object(n)).forEach((function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }))
            }
            return t
        }

        function c(t, e, n) {
            return e in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n, t
        }

        var u = Object(a.c)({tag: {type: String, default: "hr"}}, o.n), d = i.a.extend({
            name: o.n, functional: !0, props: u, render: function (t, e) {
                var n = e.props, i = e.data, o = i.attrs || {};
                return i.attrs = {}, t("li", Object(r.a)(i, {attrs: {role: "presentation"}}), [t(n.tag, {
                    staticClass: "dropdown-divider",
                    attrs: s(s({}, o), {}, {role: "separator", "aria-orientation": "horizontal"}),
                    ref: "divider"
                })])
            }
        }), p = n("6IRw");
        const f = {components: {BDropdownDivider: d}, inheritAttrs: !1};
        const h = n.n(p)()({
            render: function () {
                var t = this.$createElement;
                return (this._self._c || t)("b-dropdown-divider", this._g(this._b({staticClass: "gl-new-dropdown-divider"}, "b-dropdown-divider", this.$attrs, !1), this.$listeners))
            }, staticRenderFns: []
        }, void 0, f, void 0, !1, void 0, !1, void 0, void 0, void 0);
        e.a = h
    }, "Ox/j": function (t, e, n) {
        "use strict";
        var i = n("Z2pp"), r = n("DQ7i"), o = n("jyii"), a = n("gCUY");
        var l = i.a.extend({
            name: o.s,
            functional: !0,
            props: Object(a.c)({
                tag: {type: String, default: "p"},
                textClass: {type: [String, Array, Object]},
                variant: {type: String}
            }, o.s),
            render: function (t, e) {
                var n, i, o, a = e.props, l = e.data, s = e.children, c = a.tag, u = a.textClass, d = a.variant,
                    p = l.attrs || {};
                return l.attrs = {}, t("li", Object(r.a)(l, {attrs: {role: "presentation"}}), [t(c, {
                    staticClass: "b-dropdown-text",
                    class: [u, (n = {}, i = "text-".concat(d), o = d, i in n ? Object.defineProperty(n, i, {
                        value: o,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : n[i] = o, n)],
                    props: a,
                    attrs: p,
                    ref: "text"
                }, s)])
            }
        }), s = n("6IRw");
        const c = {components: {BDropdownText: l}, inheritAttrs: !1};
        const u = n.n(s)()({
            render: function () {
                var t = this.$createElement;
                return (this._self._c || t)("b-dropdown-text", this._g(this._b({staticClass: "gl-new-dropdown-text"}, "b-dropdown-text", this.$attrs, !1), this.$listeners), [this._t("default")], 2)
            }, staticRenderFns: []
        }, void 0, c, void 0, !1, void 0, !1, void 0, void 0, void 0);
        e.a = u
    }, "Rd/K": function (t, e, n) {
        "use strict";
        n.d(e, "b", (function () {
            return c
        }));
        var i = n("gCUY"), r = n("qx9o"), o = n("BhOj"), a = n("ST6S"), l = n("8Vyw"), s = n("ySPH"), c = Object(i.c)({
            value: {type: [String, Number], default: ""},
            ariaInvalid: {type: [Boolean, String], default: !1},
            readonly: {type: Boolean, default: !1},
            plaintext: {type: Boolean, default: !1},
            autocomplete: {type: String},
            placeholder: {type: String},
            formatter: {type: Function},
            lazyFormatter: {type: Boolean, default: !1},
            trim: {type: Boolean, default: !1},
            number: {type: Boolean, default: !1},
            lazy: {type: Boolean, default: !1},
            debounce: {type: [Number, String], default: 0}
        }, "formTextControls");
        e.a = {
            model: {prop: "value", event: "update"}, props: c, data: function () {
                var t = this.value;
                return {localValue: Object(s.e)(t), vModelValue: this.modifyValue(t)}
            }, computed: {
                computedClass: function () {
                    return [{
                        "custom-range": "range" === this.type,
                        "form-control-plaintext": this.plaintext && "range" !== this.type && "color" !== this.type,
                        "form-control": !this.plaintext && "range" !== this.type || "color" === this.type
                    }, this.sizeFormClass, this.stateClass]
                }, computedDebounce: function () {
                    return Object(a.d)(Object(l.c)(this.debounce, 0), 0)
                }, hasFormatter: function () {
                    return this.formatter.name !== c.formatter.default.name
                }
            }, watch: {
                value: function (t) {
                    var e = Object(s.e)(t), n = this.modifyValue(t);
                    e === this.localValue && n === this.vModelValue || (this.clearDebounce(), this.localValue = e, this.vModelValue = n)
                }
            }, created: function () {
                this.$_inputDebounceTimer = null
            }, mounted: function () {
                this.$on("hook:beforeDestroy", this.clearDebounce)
            }, methods: {
                clearDebounce: function () {
                    clearTimeout(this.$_inputDebounceTimer), this.$_inputDebounceTimer = null
                }, formatValue: function (t, e) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    return t = Object(s.e)(t), !this.hasFormatter || this.lazyFormatter && !n || (t = this.formatter(t, e)), t
                }, modifyValue: function (t) {
                    return t = Object(s.e)(t), this.trim && (t = t.trim()), this.number && (t = Object(l.b)(t, t)), t
                }, updateValue: function (t) {
                    var e = this, n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], i = this.lazy;
                    if (!i || n) {
                        this.clearDebounce();
                        var r = function () {
                            if ((t = e.modifyValue(t)) !== e.vModelValue) e.vModelValue = t, e.$emit("update", t); else if (e.hasFormatter) {
                                var n = e.$refs.input;
                                n && t !== n.value && (n.value = t)
                            }
                        }, o = this.computedDebounce;
                        o > 0 && !i && !n ? this.$_inputDebounceTimer = setTimeout(r, o) : r()
                    }
                }, onInput: function (t) {
                    if (!t.target.composing) {
                        var e = t.target.value, n = this.formatValue(e, t);
                        !1 === n || t.defaultPrevented ? Object(o.d)(t, {propagation: !1}) : (this.localValue = n, this.updateValue(n), this.$emit("input", n))
                    }
                }, onChange: function (t) {
                    var e = t.target.value, n = this.formatValue(e, t);
                    !1 === n || t.defaultPrevented ? Object(o.d)(t, {propagation: !1}) : (this.localValue = n, this.updateValue(n, !0), this.$emit("change", n))
                }, onBlur: function (t) {
                    var e = t.target.value, n = this.formatValue(e, t, !0);
                    !1 !== n && (this.localValue = Object(s.e)(this.modifyValue(n)), this.updateValue(n, !0)), this.$emit("blur", t)
                }, focus: function () {
                    this.disabled || Object(r.d)(this.$el)
                }, blur: function () {
                    this.disabled || Object(r.c)(this.$el)
                }
            }
        }
    }, SYh6: function (t, e, n) {
        "use strict";
        n("N8nX"), n("c5nz"), n("OZcL"), n("x5O4"), n("lxnW"), n("5sVn"), n("4xRc"), n("LM9r"), n("51O6"), n("une/"), n("Kypc"), n("yt6R"), n("6v3E"), n("RsOv"), n("ujLG"), n("3R5X"), n("HaUQ"), n("JHu5"), n("XUYm");

        class i {
            constructor() {
                this.$_all = new Map
            }

            dispose() {
                this.$_all.clear()
            }

            $on(t, e) {
                const n = this.$_all.get(t);
                n && n.push(e) || this.$_all.set(t, [e])
            }

            $off(t, e) {
                const n = this.$_all.get(t) || [], i = e ? n.filter((function (t) {
                    return t !== e
                })) : [];
                i.length ? this.$_all.set(t, i) : this.$_all.delete(t)
            }

            $once(t, e) {
                var n = this;
                const i = function () {
                    n.$off(t, i), e(...arguments)
                };
                this.$on(t, i)
            }

            $emit(t) {
                for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), i = 1; i < e; i++) n[i - 1] = arguments[i];
                (this.$_all.get(t) || []).forEach((function (t) {
                    t(...n)
                }))
            }
        }

        e.a = function () {
            return new i
        }
    }, UosV: function (t, e, n) {
        "use strict";
        n.d(e, "a", (function () {
            return r
        })), n.d(e, "m", (function () {
            return o
        })), n.d(e, "i", (function () {
            return a
        })), n.d(e, "g", (function () {
            return l
        })), n.d(e, "h", (function () {
            return s
        })), n.d(e, "l", (function () {
            return c
        })), n.d(e, "k", (function () {
            return u
        })), n.d(e, "j", (function () {
            return d
        })), n.d(e, "n", (function () {
            return p
        })), n.d(e, "p", (function () {
            return h
        })), n.d(e, "q", (function () {
            return m
        })), n.d(e, "o", (function () {
            return v
        })), n.d(e, "b", (function () {
            return O
        })), n.d(e, "d", (function () {
            return j
        })), n.d(e, "c", (function () {
            return _
        })), n.d(e, "r", (function () {
            return C
        })), n.d(e, "e", (function () {
            return S
        })), n.d(e, "f", (function () {
            return P
        })), n.d(e, "s", (function () {
            return x
        })), n.d(e, "t", (function () {
            return D
        })), n.d(e, "u", (function () {
            return B
        })), n.d(e, "v", (function () {
            return T
        })), n.d(e, "w", (function () {
            return $
        })), n.d(e, "x", (function () {
            return E
        })), n.d(e, "y", (function () {
            return I
        })), n.d(e, "z", (function () {
            return q
        })), n.d(e, "A", (function () {
            return L
        })), n.d(e, "B", (function () {
            return N
        }));
        var i = n("t9l/");
        const r = 500, o = 3, a = "None", l = "Any", s = "Current", c = "Upcoming", u = "Started", d = [a, l], p = "=",
            f = Object(i.a)("is"), h = "!=", b = Object(i.a)("is not"), m = [{value: p, description: f}],
            g = [{value: h, description: b}], v = [...m, ...g],
            y = {value: a, text: Object(i.a)("None"), title: Object(i.a)("None")},
            O = {value: l, text: Object(i.a)("Any"), title: Object(i.a)("Any")}, j = [y, O],
            w = {value: c, text: Object(i.a)("Upcoming"), title: Object(i.a)("Upcoming")},
            k = {value: u, text: Object(i.a)("Started"), title: Object(i.a)("Started")}, _ = j.concat([w, k]),
            C = {descending: "descending", ascending: "ascending"}, S = "labels", P = "filtered-search-term",
            x = Object(i.a)("Assignee"), D = Object(i.a)("Author"), B = Object(i.a)("Confidential"),
            T = Object(i.g)("Crm|Contact"), $ = Object(i.a)("Label"), E = Object(i.a)("Milestone"),
            I = Object(i.a)("My-Reaction"), q = Object(i.g)("Crm|Organization"), L = Object(i.a)("Release"),
            N = Object(i.a)("Type")
    }, VwZc: function (t, e, n) {
        "use strict";
        var i = n("lHHz"), r = n("6IRw"), o = n.n(r);
        const a = i.a, l = o()({}, void 0, a, void 0, void 0, void 0, !1, void 0, void 0, void 0);
        e.a = l
    }, X4fA: function (t, e, n) {
        "use strict";
        n.d(e, "a", (function () {
            return P
        }));
        var i = n("4pZC"), r = n.n(i),
            o = (n("AfGZ"), n("JHu5"), n("3R5X"), n("XUYm"), n("WmlO"), n("W9Nl"), n("6oy4")), a = n.n(o),
            l = n("t9l/"), s = {
                ...{
                    sample: {
                        text: Object(l.g)("ProjectTemplates|Sample GitLab Project"),
                        icon: ".template-option .icon-sample"
                    },
                    rails: {text: Object(l.g)("ProjectTemplates|Ruby on Rails"), icon: ".template-option .icon-rails"},
                    express: {text: Object(l.g)("ProjectTemplates|NodeJS Express"), icon: ".template-option .icon-express"},
                    spring: {text: Object(l.g)("ProjectTemplates|Spring"), icon: ".template-option .icon-spring"},
                    iosswift: {text: Object(l.g)("ProjectTemplates|iOS (Swift)"), icon: ".template-option .icon-iosswift"},
                    dotnetcore: {
                        text: Object(l.g)("ProjectTemplates|.NET Core"),
                        icon: ".template-option .icon-dotnetcore"
                    },
                    android: {text: Object(l.g)("ProjectTemplates|Android"), icon: ".template-option .icon-android"},
                    gomicro: {text: Object(l.g)("ProjectTemplates|Go Micro"), icon: ".template-option .icon-gomicro"},
                    gatsby: {text: Object(l.g)("ProjectTemplates|Pages/Gatsby"), icon: ".template-option .icon-gatsby"},
                    hugo: {text: Object(l.g)("ProjectTemplates|Pages/Hugo"), icon: ".template-option .icon-hugo"},
                    pelican: {text: Object(l.g)("ProjectTemplates|Pages/Pelican"), icon: ".template-option .icon-pelican"},
                    jekyll: {text: Object(l.g)("ProjectTemplates|Pages/Jekyll"), icon: ".template-option .icon-jekyll"},
                    plainhtml: {
                        text: Object(l.g)("ProjectTemplates|Pages/Plain HTML"),
                        icon: ".template-option .icon-plainhtml"
                    },
                    gitbook: {text: Object(l.g)("ProjectTemplates|Pages/GitBook"), icon: ".template-option .icon-gitbook"},
                    hexo: {text: Object(l.g)("ProjectTemplates|Pages/Hexo"), icon: ".template-option .icon-hexo"},
                    middleman: {
                        text: Object(l.g)("ProjectTemplates|Pages/Middleman"),
                        icon: ".template-option .icon-middleman"
                    },
                    gitpod_spring_petclinic: {
                        text: Object(l.g)("ProjectTemplates|Gitpod/Spring Petclinic"),
                        icon: ".template-option .icon-gitpod_spring_petclinic"
                    },
                    nfhugo: {text: Object(l.g)("ProjectTemplates|Netlify/Hugo"), icon: ".template-option .icon-nfhugo"},
                    nfjekyll: {
                        text: Object(l.g)("ProjectTemplates|Netlify/Jekyll"),
                        icon: ".template-option .icon-nfjekyll"
                    },
                    nfplainhtml: {
                        text: Object(l.g)("ProjectTemplates|Netlify/Plain HTML"),
                        icon: ".template-option .icon-nfplainhtml"
                    },
                    nfgitbook: {
                        text: Object(l.g)("ProjectTemplates|Netlify/GitBook"),
                        icon: ".template-option .icon-nfgitbook"
                    },
                    nfhexo: {text: Object(l.g)("ProjectTemplates|Netlify/Hexo"), icon: ".template-option .icon-nfhexo"},
                    salesforcedx: {
                        text: Object(l.g)("ProjectTemplates|SalesforceDX"),
                        icon: ".template-option .icon-salesforcedx"
                    },
                    serverless_framework: {
                        text: Object(l.g)("ProjectTemplates|Serverless Framework/JS"),
                        icon: ".template-option .icon-serverless_framework"
                    },
                    tencent_serverless_framework: {
                        text: Object(l.g)("ProjectTemplates|Tencent Serverless Framework/NextjsSSR"),
                        icon: ".template-option .icon-tencent_serverless_framework"
                    },
                    cluster_management: {
                        text: Object(l.g)("ProjectTemplates|GitLab Cluster Management"),
                        icon: ".template-option .icon-cluster_management"
                    },
                    kotlin_native_linux: {
                        text: Object(l.g)("ProjectTemplates|Kotlin Native for Linux"),
                        icon: ".template-option .icon-gitlab_logo"
                    },
                    jsonnet: {
                        text: Object(l.g)("ProjectTemplates|Jsonnet for Dynamic Child Pipelines"),
                        icon: ".template-option .icon-gitlab_logo"
                    }
                },
                hipaa_audit_protocol: {
                    text: Object(l.g)("ProjectTemplates|HIPAA Audit Protocol"),
                    icon: ".template-option .icon-hipaa_audit_protocol"
                }
            }, c = n("0nrL"), u = n("/LsX"), d = n("ObLM"), p = n("mphk"), f = n("vRHk");
        let h = !1, b = !1;
        const m = p.a.CancelToken.source(), g = `${gon.relative_url_root}/import/url/validate`;
        let v = null;
        const y = function (t, e) {
            const n = Object(f.t)(Object(f.j)(t.value));
            e.value = n
        }, O = function (t, e, n) {
            const i = e.value;
            n || (t.value = Object(f.i)(Object(f.p)(i, "[-_]")))
        }, j = function () {
            return document.querySelector('[name="project[selected_namespace_id]"]')
        }, w = function () {
            return document.querySelector(".js-group-namespace-dropdown > button")
        }, k = function () {
            return document.querySelector(".js-group-namespace-button")
        }, _ = function () {
            return document.querySelector(".js-group-namespace-error")
        }, C = function (t, e) {
            const n = document.querySelector(".js-user-readme-repo"), i = function () {
                y(t, e), b = t.value.trim().length > 0, h = e.value.trim().length > 0
            };
            t.removeEventListener("keyup", i), t.addEventListener("keyup", i), t.removeEventListener("change", i), t.addEventListener("change", i);
            const r = function () {
                O(t, e, b), h = e.value.trim().length > 0, n.classList.toggle("gl-display-none", e.value !== e.dataset.username)
            };
            e.removeEventListener("keyup", r), e.addEventListener("keyup", r), e.removeEventListener("change", r), e.addEventListener("change", r), document.querySelector(".js-create-project-button").addEventListener("click", (function (t) {
                !function (t) {
                    j() && !j().attributes.value ? (document.querySelector('input[data-qa-selector="project_name"]').reportValidity(), t.preventDefault(), w().classList.add("gl-inset-border-1-red-400!"), k().classList.add("gl-inset-border-1-red-400!"), _().classList.remove("gl-display-none")) : (w().classList.remove("gl-inset-border-1-red-400!"), k().classList.remove("gl-inset-border-1-red-400!"), _().classList.add("gl-display-none"))
                }(t)
            }))
        }, S = function (t) {
            const e = t.closest(".toggle-import-form").querySelector("#project_name"),
                n = t.closest(".toggle-import-form").querySelector("#project_path");
            if (h || 0 === n.length) return;
            let i = t.value.trim();
            if (0 === i.length) return;
            i = i.replace(/\/?(\.git\/?)?(\?.*)?(#.*)?$/, "");
            const r = /\/([^/]+)$/.exec(i);
            if (r) {
                const [t, i] = r;
                n.value = i, O(e, n, !1)
            }
        }, P = function () {
            document.querySelectorAll(".js-how-to-import-link").forEach((function (t) {
                const {modalTitle: e, modalMessage: n} = t.dataset;
                t.addEventListener("click", (function (t) {
                    t.preventDefault(), Object(c.a)("", {modalHtmlMessage: n, title: e, hideCancel: !0})
                }))
            }))
        };
        e.b = {
            bindEvents: function () {
                const t = a()("#new_project"), e = a()("#project_import_url_user"),
                    n = a()("#project_import_url_password"), i = a()(".js-import-url-error"),
                    o = a()("form.js-project-import"), l = a()(".template-button > input"), c = a()(".change-template"),
                    f = document.querySelector("#project_import_url"),
                    h = document.querySelector(".tab-pane.active #project_path"),
                    b = document.querySelector(".project-fields-form"), y = document.querySelector(".selected-icon"),
                    O = document.querySelector(".selected-template"),
                    j = document.querySelector(".tab-pane.active #project_name"),
                    w = document.querySelectorAll(".project-templates-buttons");
                if (1 !== t.length && 1 !== o.length) return;
                P(), a()(".btn_import_gitlab_project").on("click contextmenu", (function () {
                    const t = document.querySelector(".btn_import_gitlab_project"),
                        e = document.querySelector("#project_namespace_id"), {href: n} = t.dataset,
                        i = `${n}?namespace_id=${e.value}&name=${j.value}&path=${h.value}`;
                    t.setAttribute("href", i)
                }));
                const k = function (t) {
                    for (; t.firstChild;) t.removeChild(t.firstChild)
                };

                function _() {
                    w.forEach((function (t) {
                        return t.classList.add("hidden")
                    })), b.classList.add("selected"), k(y);
                    this.checked = !0;
                    const {value: t} = this, e = s[t];
                    O.textContent = e.text;
                    const n = document.querySelector(e.icon).cloneNode(!0);
                    n.classList.add("d-block"), y.append(n);
                    const i = document.querySelector(".tab-pane.active #project_name"),
                        r = document.querySelector(".tab-pane.active #project_path");
                    i.focus(), C(i, r)
                }

                l.on("click", _), l.on("focus focusout", (function (t) {
                    a()(t.target).parent().toggleClass("active")
                })), l.on("keypress", (function (t) {
                    t.code === d.b && _.call(this)
                })), c.on("click", (function () {
                    w.forEach((function (t) {
                        return t.classList.remove("hidden")
                    })), b.classList.remove("selected"), l.prop("checked", !1)
                })), t.on("submit", (function () {
                    h.val(h.val().trim())
                }));
                const x = async function () {
                    const {
                        success: t,
                        cancelled: r
                    } = await (o = f.value, a = e.val(), l = n.val(), m.cancel(), v = p.a.post(g, {
                        url: o,
                        user: a,
                        password: l
                    }, {cancelToken: m.cancel()}).then((function (t) {
                        let {data: e} = t;
                        return e
                    })).catch((function (t) {
                        return p.a.isCancel(t) ? {cancelled: !0} : {success: !0}
                    })));
                    var o, a, l;
                    r || (f.classList.toggle("gl-field-error-outline", !t), i.toggleClass("hide", t))
                }, D = r()(x, u.h);
                let B = !1;
                f.addEventListener("blur", (function () {
                    B = !0, D()
                })), f.addEventListener("keyup", (function () {
                    S(f)
                })), [f, e, n].forEach((function (t) {
                    null != t && t.on ? t.on("input", (function () {
                        B && D()
                    })) : t.addEventListener("input", (function () {
                        B && D()
                    }))
                })), o.on("submit", (async function (t) {
                    t.preventDefault(), null === v && (D.cancel(), x());
                    const e = o.find('input[type="submit"]');
                    e.disable(), await v, e.enable();
                    const n = o.find(".gl-field-error-outline");
                    n.length > 0 ? n[0].focus() : o[0].submit()
                })), a()(".js-import-git-toggle-button").on("click", (function () {
                    C(document.querySelector(".tab-pane.active #project_name"), document.querySelector(".tab-pane.active #project_path"))
                })), C(j, h)
            },
            deriveProjectPathFromUrl: S,
            onProjectNameChange: y,
            onProjectPathChange: O,
            onProjectNameChangeJq: function (t, e) {
                const n = Object(f.t)(Object(f.j)(t.val()));
                e.val(n)
            },
            onProjectPathChangeJq: function (t, e, n) {
                const i = e.val();
                n || t.val(Object(f.i)(Object(f.p)(i, "[-_]")))
            }
        }
    }, YxAH: function (t, e, n) {
        "use strict";
        n.d(e, "b", (function () {
            return r
        }));
        var i = n("gCUY"), r = Object(i.c)({size: {type: String}}, "formControls");
        e.a = {
            props: r, computed: {
                sizeFormClass: function () {
                    return [this.size ? "form-control-".concat(this.size) : null]
                }
            }
        }
    }, ZplN: function (t, e, n) {
        "use strict";
        var i = n("Z2pp"), r = n("DQ7i"), o = n("jyii"), a = n("gCUY"), l = n("9Q7u"), s = n("R+nN");

        function c(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(t);
                e && (i = i.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), n.push.apply(n, i)
            }
            return n
        }

        function u(t, e, n) {
            return e in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n, t
        }

        var d = Object(a.c)(function (t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? c(Object(n), !0).forEach((function (e) {
                    u(t, e, n[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : c(Object(n)).forEach((function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }))
            }
            return t
        }({
            vertical: {type: Boolean, default: !1},
            size: {type: String},
            tag: {type: String, default: "div"},
            ariaRole: {type: String, default: "group"}
        }, Object(l.k)(s.b, ["size"])), o.g), p = i.a.extend({
            name: o.g, functional: !0, props: d, render: function (t, e) {
                var n = e.props, i = e.data, o = e.children;
                return t(n.tag, Object(r.a)(i, {
                    class: u({
                        "btn-group": !n.vertical,
                        "btn-group-vertical": n.vertical
                    }, "btn-group-".concat(n.size), n.size), attrs: {role: n.ariaRole}
                }), o)
            }
        }), f = n("6IRw");
        const h = {components: {BButtonGroup: p}};
        const b = n.n(f)()({
            render: function () {
                var t = this.$createElement;
                return (this._self._c || t)("b-button-group", this._g(this._b({}, "b-button-group", this.$attrs, !1), this.$listeners), [this._t("default")], 2)
            }, staticRenderFns: []
        }, void 0, h, void 0, !1, void 0, !1, void 0, void 0, void 0);
        e.a = b
    }, fRhx: function (t, e, n) {
        "use strict";
        n.d(e, "b", (function () {
            return r
        }));
        var i = n("gCUY"), r = Object(i.c)({plain: {type: Boolean, default: !1}}, "formControls");
        e.a = {
            props: r, computed: {
                custom: function () {
                    return !this.plain
                }
            }
        }
    }, lHHz: function (t, e, n) {
        "use strict";
        n.d(e, "a", (function () {
            return s
        }));
        var i = n("Z2pp"), r = n("DQ7i"), o = n("jyii"), a = n("gCUY");
        var l = Object(a.c)({
            id: {type: String},
            tag: {type: String, default: "small"},
            textVariant: {type: String, default: "muted"},
            inline: {type: Boolean, default: !1}
        }, o.F), s = i.a.extend({
            name: o.F, functional: !0, props: l, render: function (t, e) {
                var n, i, o, a = e.props, l = e.data, s = e.children;
                return t(a.tag, Object(r.a)(l, {
                    class: (n = {"form-text": !a.inline}, i = "text-".concat(a.textVariant), o = a.textVariant, i in n ? Object.defineProperty(n, i, {
                        value: o,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : n[i] = o, n), attrs: {id: a.id}
                }), s)
            }
        })
    }, lRgI: function (t, e, n) {
        "use strict";
        e.a = {
            computed: {
                selectionStart: {
                    cache: !1, get: function () {
                        return this.$refs.input.selectionStart
                    }, set: function (t) {
                        this.$refs.input.selectionStart = t
                    }
                }, selectionEnd: {
                    cache: !1, get: function () {
                        return this.$refs.input.selectionEnd
                    }, set: function (t) {
                        this.$refs.input.selectionEnd = t
                    }
                }, selectionDirection: {
                    cache: !1, get: function () {
                        return this.$refs.input.selectionDirection
                    }, set: function (t) {
                        this.$refs.input.selectionDirection = t
                    }
                }
            }, methods: {
                select: function () {
                    var t;
                    (t = this.$refs.input).select.apply(t, arguments)
                }, setSelectionRange: function () {
                    var t;
                    (t = this.$refs.input).setSelectionRange.apply(t, arguments)
                }, setRangeText: function () {
                    var t;
                    (t = this.$refs.input).setRangeText.apply(t, arguments)
                }
            }
        }
    }, mfvC: function (t, e, n) {
        "use strict";
        var i = n("SYh6");
        e.a = Object(i.a)()
    }, "p+a6": function (t, e, n) {
        "use strict";
        n.d(e, "b", (function () {
            return o
        }));
        var i = n("G55H"), r = n("gCUY"), o = Object(r.c)({state: {type: Boolean, default: null}}, "formState");
        e.a = {
            props: o, computed: {
                computedState: function () {
                    return Object(i.b)(this.state) ? this.state : null
                }, stateClass: function () {
                    var t = this.computedState;
                    return !0 === t ? "is-valid" : !1 === t ? "is-invalid" : null
                }, computedAriaInvalid: function () {
                    var t = this.ariaInvalid;
                    return !0 === t || "true" === t || "" === t ? "true" : !1 === this.computedState ? "true" : t
                }
            }
        }
    }, s4Bd: function (t, e, n) {
        "use strict";
        n.d(e, "a", (function () {
            return s
        }));
        var i = n("Z2pp"), r = n("DQ7i"), o = n("jyii"), a = n("gCUY"),
            l = Object(a.c)({tag: {type: String, default: "div"}}, o.N), s = i.a.extend({
                name: o.N, functional: !0, props: l, render: function (t, e) {
                    var n = e.props, i = e.data, o = e.children;
                    return t(n.tag, Object(r.a)(i, {staticClass: "input-group-text"}), o)
                }
            })
    }, tSMP: function (t, e, n) {
        "use strict";
        var i = n("kMtG"), r = n.n(i), o = n("/Jty"), a = n("Fcvx"), l = n("6IRw"), s = n.n(l);
        const c = {
            components: {BFormInput: o.a},
            inheritAttrs: !1,
            model: {prop: "value", event: "input"},
            props: {
                size: {
                    type: [String, Object], required: !1, default: null, validator: t => {
                        return (r()(t) ? Object.values(t) : [t]).every(t => Object.values(a.t).includes(t))
                    }
                }
            },
            computed: {
                cssClasses() {
                    if (null === this.size) return [];
                    if (r()(this.size)) {
                        const {default: t, ...e} = this.size;
                        return [...t ? [`gl-form-input-${t}`] : [], ...Object.entries(e).map(t => {
                            let [e, n] = t;
                            return `gl-${e}-form-input-${n}`
                        })]
                    }
                    return [`gl-form-input-${this.size}`]
                }, listeners() {
                    var t = this;
                    return {
                        ...this.$listeners, input: function () {
                            for (var e = arguments.length, n = new Array(e), i = 0; i < e; i++) n[i] = arguments[i];
                            t.$emit("update", ...n)
                        }, update: function () {
                            for (var e = arguments.length, n = new Array(e), i = 0; i < e; i++) n[i] = arguments[i];
                            t.$emit("input", ...n)
                        }
                    }
                }
            }
        };
        const u = s()({
            render: function () {
                var t = this.$createElement;
                return (this._self._c || t)("b-form-input", this._g(this._b({
                    staticClass: "gl-form-input",
                    class: this.cssClasses
                }, "b-form-input", this.$attrs, !1), this.listeners))
            }, staticRenderFns: []
        }, void 0, c, void 0, !1, void 0, !1, void 0, void 0, void 0);
        e.a = u
    }, tXCq: function (t, e, n) {
        "use strict";
        var i = n("Zqnx"), r = n.n(i), o = n("mABg"), a = n.n(o), l = n("SEpv"), s = n.n(l), c = n("jyii"),
            u = n("/Zha"), d = n("ySPH"), p = function (t) {
                return "\\" + t
            }, f = function (t) {
                var e = (t = Object(d.e)(t)).length, n = t.charCodeAt(0);
                return t.split("").reduce((function (i, r, o) {
                    var a = t.charCodeAt(o);
                    return 0 === a ? i + "�" : 127 === a || a >= 1 && a <= 31 || 0 === o && a >= 48 && a <= 57 || 1 === o && a >= 48 && a <= 57 && 45 === n ? i + p("".concat(a.toString(16), " ")) : 0 === o && 45 === a && 1 === e ? i + p(r) : a >= 128 || 45 === a || 95 === a || a >= 48 && a <= 57 || a >= 65 && a <= 90 || a >= 97 && a <= 122 ? i + r : i + p(r)
                }), "")
            }, h = n("moDj"), b = n("9CRu"), m = n("gCUY"), g = n("qx9o"), v = n("x/db"), y = n("G55H"), O = n("8Vyw"),
            j = n("9Q7u"), w = n("p+a6"), k = n("1pIC"), _ = n("GpHn"), C = n("DQ7i"), S = n("pkvD"), P = n("ZVxY"),
            x = n("DwzX");

        function D(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(t);
                e && (i = i.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), n.push.apply(n, i)
            }
            return n
        }

        function B(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? D(Object(n), !0).forEach((function (e) {
                    T(t, e, n[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : D(Object(n)).forEach((function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }))
            }
            return t
        }

        function T(t, e, n) {
            return e in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n, t
        }

        var $ = ["auto", "start", "end", "center", "baseline", "stretch"], E = function () {
            return {type: [String, Number], default: null}
        }, I = Object(h.a)((function (t, e, n) {
            var i = t;
            if (!Object(y.o)(n) && !1 !== n) return e && (i += "-".concat(e)), "col" !== t || "" !== n && !0 !== n ? (i += "-".concat(n), Object(d.b)(i)) : Object(d.b)(i)
        })), q = Object(j.c)(null), L = function () {
            var t = Object(m.a)().filter(P.a), e = t.reduce((function (t, e) {
                return e && (t[e] = {type: [Boolean, String, Number], default: !1}), t
            }), Object(j.c)(null)), n = t.reduce((function (t, e) {
                return t[Object(x.b)(e, "offset")] = E(), t
            }), Object(j.c)(null)), i = t.reduce((function (t, e) {
                return t[Object(x.b)(e, "order")] = E(), t
            }), Object(j.c)(null));
            return q = Object(j.a)(Object(j.c)(null), {
                col: Object(j.h)(e),
                offset: Object(j.h)(n),
                order: Object(j.h)(i)
            }), B(B(B(B({
                col: {type: Boolean, default: !1},
                cols: E()
            }, e), {}, {offset: E()}, n), {}, {order: E()}, i), {}, {
                alignSelf: {
                    type: String,
                    default: null,
                    validator: function (t) {
                        return Object(b.a)($, t)
                    }
                }, tag: {type: String, default: "div"}
            })
        }, N = {
            name: c.j, functional: !0, get props() {
                return delete this.props, this.props = L()
            }, render: function (t, e) {
                var n, i = e.props, r = e.data, o = e.children, a = [];
                for (var l in q) for (var s = q[l], c = 0; c < s.length; c++) {
                    var u = I(l, s[c].replace(l, ""), i[s[c]]);
                    u && a.push(u)
                }
                var d = a.some((function (t) {
                    return S.b.test(t)
                }));
                return a.push((T(n = {col: i.col || !d && !i.cols}, "col-".concat(i.cols), i.cols), T(n, "offset-".concat(i.offset), i.offset), T(n, "order-".concat(i.order), i.order), T(n, "align-self-".concat(i.alignSelf), i.alignSelf), n)), t(i.tag, Object(C.a)(r, {class: a}), o)
            }
        }, H = n("Z2pp"), F = Object(m.c)({tag: {type: String, default: "div"}}, c.B), z = H.a.extend({
            name: c.B, functional: !0, props: F, render: function (t, e) {
                var n = e.props, i = e.data, r = e.children;
                return t(n.tag, Object(C.a)(i, {staticClass: "form-row"}), r)
            }
        }), V = n("lHHz"), A = Object(m.c)({
            id: {type: String},
            tag: {type: String, default: "div"},
            tooltip: {type: Boolean, default: !1},
            forceShow: {type: Boolean, default: !1},
            state: {type: Boolean, default: null},
            ariaLive: {type: String},
            role: {type: String}
        }, c.y), R = H.a.extend({
            name: c.y, functional: !0, props: A, render: function (t, e) {
                var n = e.props, i = e.data, r = e.children, o = !0 === n.forceShow || !1 === n.state;
                return t(n.tag, Object(C.a)(i, {
                    class: {
                        "invalid-feedback": !n.tooltip,
                        "invalid-tooltip": n.tooltip,
                        "d-block": o
                    },
                    attrs: {
                        id: n.id || null,
                        role: n.role || null,
                        "aria-live": n.ariaLive || null,
                        "aria-atomic": n.ariaLive ? "true" : null
                    }
                }), r)
            }
        }), M = Object(m.c)({
            id: {type: String},
            tag: {type: String, default: "div"},
            tooltip: {type: Boolean, default: !1},
            forceShow: {type: Boolean, default: !1},
            state: {type: Boolean, default: null},
            ariaLive: {type: String},
            role: {type: String}
        }, c.H), G = H.a.extend({
            name: c.H, functional: !0, props: M, render: function (t, e) {
                var n = e.props, i = e.data, r = e.children, o = !0 === n.forceShow || !0 === n.state;
                return t(n.tag, Object(C.a)(i, {
                    class: {
                        "valid-feedback": !n.tooltip,
                        "valid-tooltip": n.tooltip,
                        "d-block": o
                    },
                    attrs: {
                        id: n.id || null,
                        role: n.role || null,
                        "aria-live": n.ariaLive || null,
                        "aria-atomic": n.ariaLive ? "true" : null
                    }
                }), r)
            }
        });

        function U(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(t);
                e && (i = i.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), n.push.apply(n, i)
            }
            return n
        }

        function W(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? U(Object(n), !0).forEach((function (e) {
                    Y(t, e, n[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : U(Object(n)).forEach((function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }))
            }
            return t
        }

        function Y(t, e, n) {
            return e in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n, t
        }

        var J = ["input", "select", "textarea", "label", "button", "a"], Z = Object(h.a)((function () {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
            return "".concat(e).concat(Object(d.g)(t))
        })), Q = {
            name: c.w, mixins: [k.a, w.a, _.a], get props() {
                return delete this.props, this.props = (t = Object(m.a)(), e = t.reduce((function (t, e) {
                    return t[Z(e, "labelCols")] = {type: [Number, String, Boolean], default: !e && null}, t
                }), Object(j.c)(null)), n = t.reduce((function (t, e) {
                    return t[Z(e, "labelAlign")] = {type: String}, t
                }), Object(j.c)(null)), Object(m.c)(W(W(W(W({}, w.b), {}, {
                    label: {type: String},
                    labelFor: {type: String},
                    labelSize: {type: String},
                    labelSrOnly: {type: Boolean, default: !1}
                }, e), n), {}, {
                    labelClass: {type: [String, Array, Object]},
                    description: {type: String},
                    invalidFeedback: {type: String},
                    validFeedback: {type: String},
                    tooltip: {type: Boolean, default: !1},
                    feedbackAriaLive: {type: String, default: "assertive"},
                    validated: {type: Boolean, default: !1},
                    disabled: {type: Boolean, default: !1}
                }), c.w));
                var t, e, n
            }, data: function () {
                return {describedByIds: ""}
            }, computed: {
                labelColProps: function () {
                    var t = this, e = {};
                    return Object(m.a)().forEach((function (n) {
                        var i = t[Z(n, "labelCols")];
                        i = "" === i || (i || !1), Object(y.b)(i) || "auto" === i || (i = (i = Object(O.c)(i, 0)) > 0 && i), i && (e[n || (Object(y.b)(i) ? "col" : "cols")] = i)
                    })), e
                }, labelAlignClasses: function () {
                    var t = this, e = [];
                    return Object(m.a)().forEach((function (n) {
                        var i = t[Z(n, "labelAlign")] || null;
                        if (i) {
                            var r = n ? "text-".concat(n, "-").concat(i) : "text-".concat(i);
                            e.push(r)
                        }
                    })), e
                }, isHorizontal: function () {
                    return Object(j.h)(this.labelColProps).length > 0
                }
            }, watch: {
                describedByIds: function (t, e) {
                    t !== e && this.setInputDescribedBy(t, e)
                }
            }, mounted: function () {
                var t = this;
                this.$nextTick((function () {
                    t.setInputDescribedBy(t.describedByIds)
                }))
            }, methods: {
                legendClick: function (t) {
                    if (!this.labelFor) {
                        var e = t.target, n = e ? e.tagName : "";
                        if (-1 === J.indexOf(n)) {
                            var i = Object(g.D)("input:not([disabled]),textarea:not([disabled]),select:not([disabled])", this.$refs.content).filter(g.u);
                            i && 1 === i.length && Object(g.d)(i[0])
                        }
                    }
                }, setInputDescribedBy: function (t, e) {
                    if (this.labelFor && v.i) {
                        var n = Object(g.C)("#".concat(f(this.labelFor)), this.$refs.content);
                        if (n) {
                            var i = "aria-describedby", r = (Object(g.h)(n, i) || "").split(/\s+/);
                            t = (t || "").split(/\s+/), e = (e || "").split(/\s+/), r = r.filter((function (t) {
                                return !Object(b.a)(e, t)
                            })).concat(t).filter(Boolean), (r = Object(j.h)(r.reduce((function (t, e) {
                                return W(W({}, t), {}, Y({}, e, !0))
                            }), {})).join(" ").trim()) ? Object(g.E)(n, i, r) : Object(g.x)(n, i)
                        }
                    }
                }
            }, render: function (t) {
                var e = this.labelFor, n = this.tooltip, i = this.feedbackAriaLive, r = this.computedState,
                    o = this.isHorizontal, a = this.normalizeSlot, l = !e, s = t(), c = a(u.f) || this.label,
                    d = c ? this.safeId("_BV_label_") : null;
                if (c || o) {
                    var p = this.labelSize, f = this.labelColProps, h = l, b = h ? "legend" : "label";
                    this.labelSrOnly ? (c && (s = t(b, {
                        class: "sr-only",
                        attrs: {id: d, for: e || null}
                    }, [c])), s = t(o ? N : "div", {props: o ? f : {}}, [s])) : s = t(o ? N : b, {
                        on: h ? {click: this.legendClick} : {},
                        props: o ? W({tag: b}, f) : {},
                        attrs: {id: d, for: e || null, tabindex: h ? "-1" : null},
                        class: [h ? "bv-no-focus-ring" : "", o || h ? "col-form-label" : "", !o && h ? "pt-0" : "", o || h ? "" : "d-block", p ? "col-form-label-".concat(p) : "", this.labelAlignClasses, this.labelClass]
                    }, [c])
                }
                var m = t(), g = a("invalid-feedback") || this.invalidFeedback,
                    v = g ? this.safeId("_BV_feedback_invalid_") : null;
                g && (m = t(R, {
                    props: {id: v, state: r, tooltip: n, ariaLive: i, role: i ? "alert" : null},
                    attrs: {tabindex: g ? "-1" : null}
                }, [g]));
                var y = t(), O = a("valid-feedback") || this.validFeedback,
                    j = O ? this.safeId("_BV_feedback_valid_") : null;
                O && (y = t(G, {
                    props: {id: j, state: r, tooltip: n, ariaLive: i, role: i ? "alert" : null},
                    attrs: {tabindex: O ? "-1" : null}
                }, [O]));
                var w = t(), k = a(u.d) || this.description, _ = k ? this.safeId("_BV_description_") : null;
                k && (w = t(V.a, {attrs: {id: _, tabindex: k ? "-1" : null}}, [k]));
                var C = t(o ? N : "div", {
                    ref: "content",
                    staticClass: "bv-no-focus-ring",
                    attrs: {tabindex: l ? "-1" : null, role: l ? "group" : null, "aria-labelledby": l ? d : null}
                }, [a() || t(), m, y, w]);
                return this.describedByIds = [_, !1 === r ? v : null, !0 === r ? j : null].filter(Boolean).join(" "), t(l ? "fieldset" : o ? z : "div", {
                    staticClass: "form-group",
                    class: [this.validated ? "was-validated" : null, this.stateClass],
                    attrs: {
                        id: this.safeId(),
                        disabled: l ? this.disabled : null,
                        role: l ? null : "group",
                        "aria-invalid": this.computedAriaInvalid,
                        "aria-labelledby": l && o ? d : null,
                        "aria-describedby": l ? this.describedByIds : null
                    }
                }, o && l ? [t(z, [s, C])] : [s, C])
            }
        }, X = n("VwZc"), K = n("6IRw"), tt = n.n(K);
        const et = {
            components: {BFormGroup: Q, GlFormText: X.a},
            inheritAttrs: !1,
            props: {
                labelClass: {type: [String, Array, Object], required: !1, default: null},
                labelDescription: {type: String, required: !1, default: ""},
                optional: {type: Boolean, required: !1, default: !1},
                optionalText: {type: String, required: !1, default: "(optional)"}
            },
            computed: {
                actualLabelClass() {
                    const {labelClass: t} = this;
                    return s()(t) ? `${t} col-form-label` : a()(t) ? [...t, "col-form-label"] : r()(t) ? {
                        ...t,
                        "col-form-label": !0
                    } : "col-form-label"
                }, hasLabelDescription() {
                    return Boolean(this.labelDescription || this.$slots["label-description"])
                }
            }
        };
        const nt = tt()({
            render: function () {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return n("b-form-group", t._b({
                    staticClass: "gl-form-group",
                    attrs: {"label-class": t.actualLabelClass},
                    scopedSlots: t._u([{
                        key: "label", fn: function () {
                            return [t._t("label", [t._v("\n      " + t._s(t.$attrs.label) + "\n      "), t.optional ? n("span", {
                                staticClass: "optional-label",
                                attrs: {"data-testid": "optional-label"}
                            }, [t._v(t._s(t.optionalText))]) : t._e()]), t._v(" "), t.hasLabelDescription ? n("gl-form-text", {attrs: {"data-testid": "label-description"}}, [t._t("label-description", [t._v(t._s(t.labelDescription))])], 2) : t._e()]
                        }, proxy: !0
                    }, t._l(Object.keys(t.$slots), (function (e) {
                        return {
                            key: e, fn: function () {
                                return [t._t(e)]
                            }, proxy: !0
                        }
                    }))], null, !0)
                }, "b-form-group", t.$attrs, !1))
            }, staticRenderFns: []
        }, void 0, et, void 0, !1, void 0, !1, void 0, void 0, void 0);
        e.a = nt
    }, xFu9: function (t, e, n) {
        "use strict";
        var i = n("Z2pp"), r = n("jyii"), o = n("/Zha"), a = n("gCUY"), l = n("9CRu"), s = n("qx9o"), c = n("Sq3g"),
            u = n("G55H"), d = n("KpC0"), p = n("fRhx"), f = n("YxAH"), h = n("p+a6"), b = n("1pIC"), m = n("GpHn"),
            g = n("7DqY"), v = n("EhLH");

        function y(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(t);
                e && (i = i.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), n.push.apply(n, i)
            }
            return n
        }

        function O(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? y(Object(n), !0).forEach((function (e) {
                    j(t, e, n[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : y(Object(n)).forEach((function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }))
            }
            return t
        }

        function j(t, e, n) {
            return e in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n, t
        }

        var w = {
                mixins: [v.a],
                props: Object(a.c)(O(O({}, v.b), {}, {
                    labelField: {type: String, default: "label"},
                    optionsField: {type: String, default: "options"}
                }), "formOptions"),
                methods: {
                    normalizeOption: function (t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                        if (Object(u.j)(t)) {
                            var n = Object(g.a)(t, this.valueField), i = Object(g.a)(t, this.textField),
                                r = Object(g.a)(t, this.optionsField, null);
                            return Object(u.f)(r) ? {
                                value: Object(u.n)(n) ? e || i : n,
                                text: String(Object(u.n)(i) ? e : i),
                                html: Object(g.a)(t, this.htmlField),
                                disabled: Boolean(Object(g.a)(t, this.disabledField))
                            } : {label: String(Object(g.a)(t, this.labelField) || i), options: this.normalizeOptions(r)}
                        }
                        return {value: e || t, text: String(t), disabled: !1}
                    }
                }
            }, k = n("DQ7i"), _ = Object(a.c)({value: {required: !0}, disabled: {type: Boolean, default: !1}}, r.D),
            C = i.a.extend({
                name: r.D, functional: !0, props: _, render: function (t, e) {
                    var n = e.props, i = e.data, r = e.children, o = n.value, a = n.disabled;
                    return t("option", Object(k.a)(i, {attrs: {disabled: a}, domProps: {value: o}}), r)
                }
            });

        function S(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(t);
                e && (i = i.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), n.push.apply(n, i)
            }
            return n
        }

        function P(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? S(Object(n), !0).forEach((function (e) {
                    x(t, e, n[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : S(Object(n)).forEach((function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }))
            }
            return t
        }

        function x(t, e, n) {
            return e in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n, t
        }

        var D = i.a.extend({
            name: r.E,
            mixins: [m.a, v.a],
            props: Object(a.c)(P(P({}, v.b), {}, {label: {type: String, required: !0}}), r.E),
            render: function (t) {
                var e = this.formOptions.map((function (e, n) {
                    var i = e.value, r = e.text, o = e.html, a = e.disabled;
                    return t(C, {attrs: {value: i, disabled: a}, domProps: Object(c.a)(o, r), key: "option_".concat(n)})
                }));
                return t("optgroup", {attrs: {label: this.label}}, [this.normalizeSlot(o.e), e, this.normalizeSlot()])
            }
        });

        function B(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(t);
                e && (i = i.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), n.push.apply(n, i)
            }
            return n
        }

        function T(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? B(Object(n), !0).forEach((function (e) {
                    $(t, e, n[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : B(Object(n)).forEach((function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }))
            }
            return t
        }

        function $(t, e, n) {
            return e in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n, t
        }

        var E = i.a.extend({
            name: r.C,
            mixins: [b.a, m.a, d.a, f.a, h.a, p.a, w],
            model: {prop: "value", event: "input"},
            props: Object(a.c)(T(T(T(T(T({}, d.b), p.b), f.b), h.b), {}, {
                value: {},
                multiple: {type: Boolean, default: !1},
                selectSize: {type: Number, default: 0},
                ariaInvalid: {type: [Boolean, String], default: !1}
            }), r.C),
            data: function () {
                return {localValue: this.value}
            },
            computed: {
                computedSelectSize: function () {
                    return this.plain || 0 !== this.selectSize ? this.selectSize : null
                }, inputClass: function () {
                    return [this.plain ? "form-control" : "custom-select", this.size && this.plain ? "form-control-".concat(this.size) : null, this.size && !this.plain ? "custom-select-".concat(this.size) : null, this.stateClass]
                }
            },
            watch: {
                value: function (t) {
                    this.localValue = t
                }, localValue: function () {
                    this.$emit("input", this.localValue)
                }
            },
            methods: {
                focus: function () {
                    Object(s.d)(this.$refs.input)
                }, blur: function () {
                    Object(s.c)(this.$refs.input)
                }, onChange: function (t) {
                    var e = this, n = t.target, i = Object(l.c)(n.options).filter((function (t) {
                        return t.selected
                    })).map((function (t) {
                        return "_value" in t ? t._value : t.value
                    }));
                    this.localValue = n.multiple ? i : i[0], this.$nextTick((function () {
                        e.$emit("change", e.localValue)
                    }))
                }
            },
            render: function (t) {
                var e = this.name, n = this.disabled, i = this.required, r = this.computedSelectSize,
                    a = this.localValue, l = this.formOptions.map((function (e, n) {
                        var i = e.value, r = e.label, o = e.options, a = e.disabled, l = "option_".concat(n);
                        return Object(u.a)(o) ? t(D, {props: {label: r, options: o}, key: l}) : t(C, {
                            props: {
                                value: i,
                                disabled: a
                            }, domProps: Object(c.a)(e.html, e.text), key: l
                        })
                    }));
                return t("select", {
                    class: this.inputClass,
                    attrs: {
                        id: this.safeId(),
                        name: e,
                        form: this.form || null,
                        multiple: this.multiple || null,
                        size: r,
                        disabled: n,
                        required: i,
                        "aria-required": i ? "true" : null,
                        "aria-invalid": this.computedAriaInvalid
                    },
                    on: {change: this.onChange},
                    directives: [{name: "model", value: a}],
                    ref: "input"
                }, [this.normalizeSlot(o.e), l, this.normalizeSlot()])
            }
        }), I = n("6IRw");
        const q = {components: {BFormSelect: E}, inheritAttrs: !1};
        const L = n.n(I)()({
            render: function () {
                var t = this, e = t.$createElement;
                return (t._self._c || e)("b-form-select", t._g(t._b({
                    staticClass: "gl-form-select",
                    scopedSlots: t._u([t._l(Object.keys(t.$slots), (function (e) {
                        return {
                            key: e, fn: function () {
                                return [t._t(e)]
                            }, proxy: !0
                        }
                    }))], null, !0)
                }, "b-form-select", t.$attrs, !1), t.$listeners))
            }, staticRenderFns: []
        }, void 0, q, void 0, !1, void 0, !1, void 0, void 0, void 0);
        e.a = L
    }, yxQL: function (t, e, n) {
        "use strict";
        n.d(e, "b", (function () {
            return _
        }));
        var i = n("ZOY3"), r = n("jyii"), o = n("ryFn"), a = n("ioEp"), l = n("gCUY"), s = n("qx9o"), c = n("BhOj"),
            u = n("G55H"), d = n("9Q7u"), p = n("gHjZ"), f = n("iryQ"), h = n("UVyR"), b = {
                data: function () {
                    return {listenForClickOut: !1}
                }, watch: {
                    listenForClickOut: function (t, e) {
                        t !== e && (Object(c.a)(this.clickOutElement, this.clickOutEventName, this._clickOutHandler, h.a), t && Object(c.b)(this.clickOutElement, this.clickOutEventName, this._clickOutHandler, h.a))
                    }
                }, beforeCreate: function () {
                    this.clickOutElement = null, this.clickOutEventName = null
                }, mounted: function () {
                    this.clickOutElement || (this.clickOutElement = document), this.clickOutEventName || (this.clickOutEventName = "click"), this.listenForClickOut && Object(c.b)(this.clickOutElement, this.clickOutEventName, this._clickOutHandler, h.a)
                }, beforeDestroy: function () {
                    Object(c.a)(this.clickOutElement, this.clickOutEventName, this._clickOutHandler, h.a)
                }, methods: {
                    isClickOut: function (t) {
                        return !Object(s.f)(this.$el, t.target)
                    }, _clickOutHandler: function (t) {
                        this.clickOutHandler && this.isClickOut(t) && this.clickOutHandler(t)
                    }
                }
            }, m = {
                data: function () {
                    return {listenForFocusIn: !1}
                }, watch: {
                    listenForFocusIn: function (t, e) {
                        t !== e && (Object(c.a)(this.focusInElement, "focusin", this._focusInHandler, h.a), t && Object(c.b)(this.focusInElement, "focusin", this._focusInHandler, h.a))
                    }
                }, beforeCreate: function () {
                    this.focusInElement = null
                }, mounted: function () {
                    this.focusInElement || (this.focusInElement = document), this.listenForFocusIn && Object(c.b)(this.focusInElement, "focusin", this._focusInHandler, h.a)
                }, beforeDestroy: function () {
                    Object(c.a)(this.focusInElement, "focusin", this._focusInHandler, h.a)
                }, methods: {
                    _focusInHandler: function (t) {
                        this.focusInHandler && this.focusInHandler(t)
                    }
                }
            }, g = n("1pIC");

        function v(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(t);
                e && (i = i.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), n.push.apply(n, i)
            }
            return n
        }

        function y(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? v(Object(n), !0).forEach((function (e) {
                    O(t, e, n[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : v(Object(n)).forEach((function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }))
            }
            return t
        }

        function O(t, e, n) {
            return e in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n, t
        }

        var j = "".concat("bv::dropdown::", "shown"), w = "".concat("bv::dropdown::", "hidden"),
            k = [".dropdown-item", ".b-dropdown-form"].map((function (t) {
                return "".concat(t, ":not(.disabled):not([disabled])")
            })).join(", "), _ = y(y({}, Object(l.c)({
                dropup: {type: Boolean, default: !1},
                dropright: {type: Boolean, default: !1},
                dropleft: {type: Boolean, default: !1},
                right: {type: Boolean, default: !1},
                offset: {type: [Number, String], default: 0},
                noFlip: {type: Boolean, default: !1},
                popperOpts: {
                    type: Object, default: function () {
                    }
                },
                boundary: {type: [String, p.b], default: "scrollParent"}
            }, r.m)), Object(l.c)({disabled: {type: Boolean, default: !1}}, r.m));
        e.a = {
            mixins: [g.a, b, m], provide: function () {
                return {bvDropdown: this}
            }, inject: {bvNavbar: {default: null}}, props: _, data: function () {
                return {visible: !1, visibleChangePrevented: !1}
            }, computed: {
                inNavbar: function () {
                    return !Object(u.f)(this.bvNavbar)
                }, toggler: function () {
                    var t = this.$refs.toggle;
                    return t ? t.$el || t : null
                }, directionClass: function () {
                    return this.dropup ? "dropup" : this.dropright ? "dropright" : this.dropleft ? "dropleft" : ""
                }, boundaryClass: function () {
                    return "scrollParent" === this.boundary || this.inNavbar ? "" : "position-static"
                }
            }, watch: {
                visible: function (t, e) {
                    if (this.visibleChangePrevented) this.visibleChangePrevented = !1; else if (t !== e) {
                        var n = t ? "show" : "hide", i = new a.a(n, {
                            cancelable: !0,
                            vueTarget: this,
                            target: this.$refs.menu,
                            relatedTarget: null,
                            componentId: this.safeId ? this.safeId() : this.id || null
                        });
                        if (this.emitEvent(i), i.defaultPrevented) return this.visibleChangePrevented = !0, this.visible = e, void this.$off("hidden", this.focusToggler);
                        "show" === n ? this.showMenu() : this.hideMenu()
                    }
                }, disabled: function (t, e) {
                    t !== e && t && this.visible && (this.visible = !1)
                }
            }, created: function () {
                this.$_popper = null, this.$_hideTimeout = null
            }, deactivated: function () {
                this.visible = !1, this.whileOpenListen(!1), this.destroyPopper()
            }, beforeDestroy: function () {
                this.visible = !1, this.whileOpenListen(!1), this.destroyPopper(), this.clearHideTimeout()
            }, methods: {
                emitEvent: function (t) {
                    var e = t.type;
                    this.$emit(e, t), this.$root.$emit("".concat("bv::dropdown::").concat(e), t)
                }, showMenu: function () {
                    var t = this;
                    if (!this.disabled) {
                        if (!this.inNavbar) if (void 0 === i.default) Object(f.a)("Popper.js not found. Falling back to CSS positioning", r.m); else {
                            var e = this.dropup && this.right || this.split ? this.$el : this.$refs.toggle;
                            e = e.$el || e, this.createPopper(e)
                        }
                        this.$root.$emit(j, this), this.whileOpenListen(!0), this.$nextTick((function () {
                            t.focusMenu(), t.$emit("shown")
                        }))
                    }
                }, hideMenu: function () {
                    this.whileOpenListen(!1), this.$root.$emit(w, this), this.$emit("hidden"), this.destroyPopper()
                }, createPopper: function (t) {
                    this.destroyPopper(), this.$_popper = new i.default(t, this.$refs.menu, this.getPopperConfig())
                }, destroyPopper: function () {
                    this.$_popper && this.$_popper.destroy(), this.$_popper = null
                }, updatePopper: function () {
                    try {
                        this.$_popper.scheduleUpdate()
                    } catch (t) {
                    }
                }, clearHideTimeout: function () {
                    clearTimeout(this.$_hideTimeout), this.$_hideTimeout = null
                }, getPopperConfig: function () {
                    var t = "bottom-start";
                    this.dropup ? t = this.right ? "top-end" : "top-start" : this.dropright ? t = "right-start" : this.dropleft ? t = "left-start" : this.right && (t = "bottom-end");
                    var e = {
                        placement: t,
                        modifiers: {offset: {offset: this.offset || 0}, flip: {enabled: !this.noFlip}}
                    }, n = this.boundary;
                    return n && (e.modifiers.preventOverflow = {boundariesElement: n}), Object(d.i)(e, this.popperOpts || {})
                }, whileOpenListen: function (t) {
                    this.listenForClickOut = t, this.listenForFocusIn = t;
                    var e = t ? "$on" : "$off";
                    this.$root[e](j, this.rootCloseListener)
                }, rootCloseListener: function (t) {
                    t !== this && (this.visible = !1)
                }, show: function () {
                    var t = this;
                    this.disabled || Object(s.B)((function () {
                        t.visible = !0
                    }))
                }, hide: function () {
                    var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    this.disabled || (this.visible = !1, t && this.$once("hidden", this.focusToggler))
                }, toggle: function (t) {
                    var e = t = t || {}, n = e.type, i = e.keyCode;
                    ("click" === n || "keydown" === n && -1 !== [o.c, o.h, o.a].indexOf(i)) && (this.disabled ? this.visible = !1 : (this.$emit("toggle", t), Object(c.d)(t), this.visible ? this.hide(!0) : this.show()))
                }, onMousedown: function (t) {
                    Object(c.d)(t, {propagation: !1})
                }, onKeydown: function (t) {
                    var e = t.keyCode;
                    e === o.d ? this.onEsc(t) : e === o.a ? this.focusNext(t, !1) : e === o.i && this.focusNext(t, !0)
                }, onEsc: function (t) {
                    this.visible && (this.visible = !1, Object(c.d)(t), this.$once("hidden", this.focusToggler))
                }, onSplitClick: function (t) {
                    this.disabled ? this.visible = !1 : this.$emit("click", t)
                }, hideHandler: function (t) {
                    var e = this, n = t.target;
                    !this.visible || Object(s.f)(this.$refs.menu, n) || Object(s.f)(this.toggler, n) || (this.clearHideTimeout(), this.$_hideTimeout = setTimeout((function () {
                        return e.hide()
                    }), this.inNavbar ? 300 : 0))
                }, clickOutHandler: function (t) {
                    this.hideHandler(t)
                }, focusInHandler: function (t) {
                    this.hideHandler(t)
                }, focusNext: function (t, e) {
                    var n = this, i = t.target;
                    !this.visible || t && Object(s.e)(".dropdown form", i) || (Object(c.d)(t), this.$nextTick((function () {
                        var t = n.getItems();
                        if (!(t.length < 1)) {
                            var r = t.indexOf(i);
                            e && r > 0 ? r-- : !e && r < t.length - 1 && r++, r < 0 && (r = 0), n.focusItem(r, t)
                        }
                    })))
                }, focusItem: function (t, e) {
                    var n = e.find((function (e, n) {
                        return n === t
                    }));
                    Object(s.d)(n)
                }, getItems: function () {
                    return (Object(s.D)(k, this.$refs.menu) || []).filter(s.u)
                }, focusMenu: function () {
                    Object(s.d)(this.$refs.menu)
                }, focusToggler: function () {
                    var t = this;
                    this.$nextTick((function () {
                        Object(s.d)(t.toggler)
                    }))
                }
            }
        }
    }, zwVu: function (t, e) {
        var n = {
            kind: "Document", definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {kind: "Name", value: "searchNamespacesWhereUserCanCreateProjects"},
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {kind: "Variable", name: {kind: "Name", value: "search"}},
                    type: {kind: "NamedType", name: {kind: "Name", value: "String"}},
                    directives: []
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet", selections: [{
                        kind: "Field",
                        name: {kind: "Name", value: "currentUser"},
                        arguments: [],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {kind: "Name", value: "id"},
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {kind: "Name", value: "groups"},
                                arguments: [{
                                    kind: "Argument",
                                    name: {kind: "Name", value: "permissionScope"},
                                    value: {kind: "EnumValue", value: "CREATE_PROJECTS"}
                                }, {
                                    kind: "Argument",
                                    name: {kind: "Name", value: "search"},
                                    value: {kind: "Variable", name: {kind: "Name", value: "search"}}
                                }],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {kind: "Name", value: "nodes"},
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {kind: "Name", value: "id"},
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {kind: "Name", value: "fullPath"},
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {kind: "Name", value: "name"},
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {kind: "Name", value: "visibility"},
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {kind: "Name", value: "webUrl"},
                                                arguments: [],
                                                directives: []
                                            }]
                                        }
                                    }]
                                }
                            }, {
                                kind: "Field",
                                name: {kind: "Name", value: "namespace"},
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {kind: "Name", value: "id"},
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {kind: "Name", value: "fullPath"},
                                        arguments: [],
                                        directives: []
                                    }]
                                }
                            }]
                        }
                    }]
                }
            }], loc: {start: 0, end: 310}
        };
        n.loc.source = {
            body: "query searchNamespacesWhereUserCanCreateProjects($search: String) {\n  currentUser {\n    id\n    groups(permissionScope: CREATE_PROJECTS, search: $search) {\n      nodes {\n        id\n        fullPath\n        name\n        visibility\n        webUrl\n      }\n    }\n    namespace {\n      id\n      fullPath\n    }\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {line: 1, column: 1}
        };
        var i = {};

        function r(t, e) {
            for (var n = 0; n < t.definitions.length; n++) {
                var i = t.definitions[n];
                if (i.name && i.name.value == e) return i
            }
        }

        n.definitions.forEach((function (t) {
            if (t.name) {
                var e = new Set;
                !function t(e, n) {
                    if ("FragmentSpread" === e.kind) n.add(e.name.value); else if ("VariableDefinition" === e.kind) {
                        var i = e.type;
                        "NamedType" === i.kind && n.add(i.name.value)
                    }
                    e.selectionSet && e.selectionSet.selections.forEach((function (e) {
                        t(e, n)
                    })), e.variableDefinitions && e.variableDefinitions.forEach((function (e) {
                        t(e, n)
                    })), e.definitions && e.definitions.forEach((function (e) {
                        t(e, n)
                    }))
                }(t, e), i[t.name.value] = e
            }
        })), t.exports = n, t.exports.searchNamespacesWhereUserCanCreateProjects = function (t, e) {
            var n = {kind: t.kind, definitions: [r(t, e)]};
            t.hasOwnProperty("loc") && (n.loc = t.loc);
            var o = i[e] || new Set, a = new Set, l = new Set;
            for (o.forEach((function (t) {
                l.add(t)
            })); l.size > 0;) {
                var s = l;
                l = new Set, s.forEach((function (t) {
                    a.has(t) || (a.add(t), (i[t] || new Set).forEach((function (t) {
                        l.add(t)
                    })))
                }))
            }
            return a.forEach((function (e) {
                var i = r(t, e);
                i && n.definitions.push(i)
            })), n
        }(n, "searchNamespacesWhereUserCanCreateProjects")
    }
}, [[203, 1, 0, 2, 3, 4, 5, 6, 7, 190]]]);
//# sourceMappingURL=pages.projects.new.5532cd04.chunk.js.map
(this.webpackJsonp = this.webpackJsonp || []).push([[805], {
    "0R5a": function (e, t, n) {
        "use strict";
        n.r(t);
        var c = n("XyBh"), o = n("A1CF"), i = n.n(o), r = (n("JHu5"), n("3R5X"), n("XUYm"), n("t9l/")), a = n("mfvC"),
            s = n("MKfA");

        function u(e) {
            let {name: t, visibility: n, showPath: c, editPath: o} = e;
            document.querySelectorAll(".visibility-level-setting .gl-form-radio").forEach((function (e) {
                if (e.classList.contains("restricted")) return;
                const a = e.querySelector("input[type=radio]"), u = a ? parseInt(a.value, 10) : 0;
                if (s.b[n] < u) {
                    e.classList.add("disabled"), a.disabled = !0;
                    const s = e.querySelector(".option-disabled-reason");
                    if (s) {
                        const a = e.querySelector(".js-visibility-level-radio span"),
                            u = a ? a.innerText.toLowerCase() : "";
                        s.innerHTML = Object(r.h)(Object(r.a)("This project cannot be %{visibilityLevel} because the visibility of %{openShowLink}%{name}%{closeShowLink} is %{visibility}. To make this project %{visibilityLevel}, you must first %{openEditLink}change the visibility%{closeEditLink} of the parent group."), {
                            visibilityLevel: u,
                            name: i()(t),
                            visibility: n,
                            openShowLink: `<a href="${c}">`,
                            closeShowLink: "</a>",
                            openEditLink: `<a href="${o}">`,
                            closeEditLink: "</a>"
                        }, !1)
                    }
                } else e.classList.remove("disabled"), a.disabled = !1
            }))
        }

        function l(e) {
            if (!e || !("selectedIndex" in e)) return;
            u(e.options[e.selectedIndex].dataset)
        }

        !function () {
            a.a.$on("update-visibility", u);
            const e = document.querySelector("select.js-select-namespace");
            if (e) {
                document.querySelector(".select2.js-select-namespace").addEventListener("change", (function () {
                    return l(e)
                })), l(e)
            }
        }(), Object(c.b)(), Object(c.c)(), Object(c.a)();
        var d = n("mphk"), p = n("X4fA");
        const m = ".js-custom-instance-project-templates-tab-content",
            f = ".js-custom-group-project-templates-tab-content", h = function () {
                const e = document.querySelectorAll(".custom-template-button > input"),
                    t = document.querySelectorAll(".project-templates-buttons"),
                    n = document.querySelector(".project-fields-form"), c = document.querySelector(".selected-icon"),
                    o = document.querySelector(".selected-template"),
                    i = document.querySelector("#template-project-name #project_path"),
                    r = document.querySelector(".change-template"),
                    s = document.querySelector(".project-fields-form input#project_use_custom_template"),
                    u = document.querySelector(".js-project-group-with-project-templates-id"),
                    l = document.querySelector(".gl-pagination");
                let d = !1;

                function b(e) {
                    const r = e.currentTarget, {subgroupId: l, parentGroupId: m, templateName: f} = r.dataset,
                        h = document.querySelector(".tab-pane.active #project_name"),
                        b = document.querySelector(".tab-pane.active #project_path"),
                        v = r.closest(".template-option").querySelector(".avatar").cloneNode(!0);
                    if (l) {
                        const {subgroupFullPath: e, targetGroupFullPath: t} = r.dataset;
                        a.a.$emit("select-template", t ? m : null, t || e), u.value = l
                    }
                    t.forEach((function (e) {
                        e.classList.add("hidden")
                    })), n.classList.add("selected"), c.innerHTML = "", o.textContent = f, v.classList.replace("s40", "d-block"), c.append(v), i.focus(), s.value = !0, h.focus(), h.addEventListener("keyup", (function () {
                        p.b.onProjectNameChange(h, b), d = h.value.trim().length > 0
                    })), b.addEventListener("keyup", (function () {
                        return p.b.onProjectPathChange(h, b, d)
                    }))
                }

                0 !== e.length && (e.forEach((function (e) {
                    e.addEventListener("change", (function (e) {
                        b(e)
                    }))
                })), r.addEventListener("click", (function () {
                    t.forEach((function (e) {
                        e.classList.remove("hidden")
                    })), e.forEach((function (e) {
                        e.checked = !1
                    })), s.value = !1
                })), null == l || l.addEventListener("ajax:success", (function (e) {
                    const t = l.closest([m, f].join(",")), n = e.detail[0],
                        c = document.adoptNode(n.body.firstElementChild);
                    t.innerHTML = "", t.append(c), h()
                })), document.querySelectorAll(".js-template-group-options").forEach((function (e) {
                    e.addEventListener("click", (function (e) {
                        e.currentTarget.classList.toggle("expanded")
                    }))
                })), document.querySelector(".js-create-project-button").addEventListener("click", (function (e) {
                    p.b.validateGroupNamespaceDropdown(e)
                })))
            };
        !function () {
            const e = document.querySelector(".js-custom-instance-project-templates-nav-link"),
                t = document.querySelector(m),
                n = document.querySelector(".js-custom-group-project-templates-nav-link"),
                c = document.querySelector(f), o = async function (e) {
                    const t = await d.a.get(e.dataset.initialTemplates);
                    e.innerHTML = t.data, h()
                };
            e.addEventListener("click", (function () {
                return o(t)
            }), {once: !0}), n.addEventListener("click", (function () {
                return o(c)
            }), {once: !0}), h()
        }()
    }, 221: function (e, t, n) {
        n("uGLJ"), n("sH5Z"), e.exports = n("0R5a")
    }, MKfA: function (e, t, n) {
        "use strict";
        n.d(t, "f", (function () {
            return c
        })), n.d(t, "d", (function () {
            return o
        })), n.d(t, "h", (function () {
            return i
        })), n.d(t, "e", (function () {
            return r
        })), n.d(t, "c", (function () {
            return a
        })), n.d(t, "g", (function () {
            return s
        })), n.d(t, "b", (function () {
            return u
        })), n.d(t, "a", (function () {
            return l
        }));
        const c = "private", o = "internal", i = "public", r = 0, a = 10, s = 20, u = {[c]: r, [o]: a, [i]: s},
            l = {[r]: c, [a]: o, [s]: i}
    }
}, [[221, 1, 0, 2, 3, 4, 5, 6, 7, 36, 41, 102, 126]]]);
//# sourceMappingURL=pages.projects.new.5b691961.chunk.js.map
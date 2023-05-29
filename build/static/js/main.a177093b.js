/*! For license information please see main.a177093b.js.LICENSE.txt */
!(function () {
	'use strict';
	var e = {
			463: function (e, t, n) {
				var r = n(791),
					a = n(296);
				function l(e) {
					for (var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, n = 1; n < arguments.length; n++)
						t += '&args[]=' + encodeURIComponent(arguments[n]);
					return (
						'Minified React error #' +
						e +
						'; visit ' +
						t +
						' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
					);
				}
				var i = new Set(),
					o = {};
				function s(e, t) {
					u(e, t), u(e + 'Capture', t);
				}
				function u(e, t) {
					for (o[e] = t, e = 0; e < t.length; e++) i.add(t[e]);
				}
				var c = !(
						'undefined' === typeof window ||
						'undefined' === typeof window.document ||
						'undefined' === typeof window.document.createElement
					),
					d = Object.prototype.hasOwnProperty,
					f =
						/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
					p = {},
					v = {};
				function h(e, t, n, r, a, l, i) {
					(this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
						(this.attributeName = r),
						(this.attributeNamespace = a),
						(this.mustUseProperty = n),
						(this.propertyName = e),
						(this.type = t),
						(this.sanitizeURL = l),
						(this.removeEmptyString = i);
				}
				var m = {};
				'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
					.split(' ')
					.forEach(function (e) {
						m[e] = new h(e, 0, !1, e, null, !1, !1);
					}),
					[
						['acceptCharset', 'accept-charset'],
						['className', 'class'],
						['htmlFor', 'for'],
						['httpEquiv', 'http-equiv'],
					].forEach(function (e) {
						var t = e[0];
						m[t] = new h(t, 1, !1, e[1], null, !1, !1);
					}),
					['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
						m[e] = new h(e, 2, !1, e.toLowerCase(), null, !1, !1);
					}),
					['autoReverse', 'externalResourcesRequired', 'focusable', 'preserveAlpha'].forEach(function (e) {
						m[e] = new h(e, 2, !1, e, null, !1, !1);
					}),
					'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
						.split(' ')
						.forEach(function (e) {
							m[e] = new h(e, 3, !1, e.toLowerCase(), null, !1, !1);
						}),
					['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
						m[e] = new h(e, 3, !0, e, null, !1, !1);
					}),
					['capture', 'download'].forEach(function (e) {
						m[e] = new h(e, 4, !1, e, null, !1, !1);
					}),
					['cols', 'rows', 'size', 'span'].forEach(function (e) {
						m[e] = new h(e, 6, !1, e, null, !1, !1);
					}),
					['rowSpan', 'start'].forEach(function (e) {
						m[e] = new h(e, 5, !1, e.toLowerCase(), null, !1, !1);
					});
				var g = /[\-:]([a-z])/g;
				function y(e) {
					return e[1].toUpperCase();
				}
				function b(e, t, n, r) {
					var a = m.hasOwnProperty(t) ? m[t] : null;
					(null !== a
						? 0 !== a.type
						: r || !(2 < t.length) || ('o' !== t[0] && 'O' !== t[0]) || ('n' !== t[1] && 'N' !== t[1])) &&
						((function (e, t, n, r) {
							if (
								null === t ||
								'undefined' === typeof t ||
								(function (e, t, n, r) {
									if (null !== n && 0 === n.type) return !1;
									switch (typeof t) {
										case 'function':
										case 'symbol':
											return !0;
										case 'boolean':
											return (
												!r &&
												(null !== n
													? !n.acceptsBooleans
													: 'data-' !== (e = e.toLowerCase().slice(0, 5)) && 'aria-' !== e)
											);
										default:
											return !1;
									}
								})(e, t, n, r)
							)
								return !0;
							if (r) return !1;
							if (null !== n)
								switch (n.type) {
									case 3:
										return !t;
									case 4:
										return !1 === t;
									case 5:
										return isNaN(t);
									case 6:
										return isNaN(t) || 1 > t;
								}
							return !1;
						})(t, n, a, r) && (n = null),
						r || null === a
							? (function (e) {
									return !!d.call(v, e) || (!d.call(p, e) && (f.test(e) ? (v[e] = !0) : ((p[e] = !0), !1)));
							  })(t) && (null === n ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
							: a.mustUseProperty
							? (e[a.propertyName] = null === n ? 3 !== a.type && '' : n)
							: ((t = a.attributeName),
							  (r = a.attributeNamespace),
							  null === n
									? e.removeAttribute(t)
									: ((n = 3 === (a = a.type) || (4 === a && !0 === n) ? '' : '' + n),
									  r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
				}
				'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
					.split(' ')
					.forEach(function (e) {
						var t = e.replace(g, y);
						m[t] = new h(t, 1, !1, e, null, !1, !1);
					}),
					'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'.split(' ').forEach(function (e) {
						var t = e.replace(g, y);
						m[t] = new h(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
					}),
					['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
						var t = e.replace(g, y);
						m[t] = new h(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
					}),
					['tabIndex', 'crossOrigin'].forEach(function (e) {
						m[e] = new h(e, 1, !1, e.toLowerCase(), null, !1, !1);
					}),
					(m.xlinkHref = new h('xlinkHref', 1, !1, 'xlink:href', 'http://www.w3.org/1999/xlink', !0, !1)),
					['src', 'href', 'action', 'formAction'].forEach(function (e) {
						m[e] = new h(e, 1, !1, e.toLowerCase(), null, !0, !0);
					});
				var w = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
					S = Symbol.for('react.element'),
					k = Symbol.for('react.portal'),
					x = Symbol.for('react.fragment'),
					E = Symbol.for('react.strict_mode'),
					C = Symbol.for('react.profiler'),
					T = Symbol.for('react.provider'),
					P = Symbol.for('react.context'),
					_ = Symbol.for('react.forward_ref'),
					M = Symbol.for('react.suspense'),
					z = Symbol.for('react.suspense_list'),
					L = Symbol.for('react.memo'),
					O = Symbol.for('react.lazy');
				Symbol.for('react.scope'), Symbol.for('react.debug_trace_mode');
				var N = Symbol.for('react.offscreen');
				Symbol.for('react.legacy_hidden'), Symbol.for('react.cache'), Symbol.for('react.tracing_marker');
				var I = Symbol.iterator;
				function j(e) {
					return null === e || 'object' !== typeof e
						? null
						: 'function' === typeof (e = (I && e[I]) || e['@@iterator'])
						? e
						: null;
				}
				var D,
					R = Object.assign;
				function A(e) {
					if (void 0 === D)
						try {
							throw Error();
						} catch (n) {
							var t = n.stack.trim().match(/\n( *(at )?)/);
							D = (t && t[1]) || '';
						}
					return '\n' + D + e;
				}
				var F = !1;
				function B(e, t) {
					if (!e || F) return '';
					F = !0;
					var n = Error.prepareStackTrace;
					Error.prepareStackTrace = void 0;
					try {
						if (t)
							if (
								((t = function () {
									throw Error();
								}),
								Object.defineProperty(t.prototype, 'props', {
									set: function () {
										throw Error();
									},
								}),
								'object' === typeof Reflect && Reflect.construct)
							) {
								try {
									Reflect.construct(t, []);
								} catch (u) {
									var r = u;
								}
								Reflect.construct(e, [], t);
							} else {
								try {
									t.call();
								} catch (u) {
									r = u;
								}
								e.call(t.prototype);
							}
						else {
							try {
								throw Error();
							} catch (u) {
								r = u;
							}
							e();
						}
					} catch (u) {
						if (u && r && 'string' === typeof u.stack) {
							for (
								var a = u.stack.split('\n'), l = r.stack.split('\n'), i = a.length - 1, o = l.length - 1;
								1 <= i && 0 <= o && a[i] !== l[o];

							)
								o--;
							for (; 1 <= i && 0 <= o; i--, o--)
								if (a[i] !== l[o]) {
									if (1 !== i || 1 !== o)
										do {
											if ((i--, 0 > --o || a[i] !== l[o])) {
												var s = '\n' + a[i].replace(' at new ', ' at ');
												return (
													e.displayName && s.includes('<anonymous>') && (s = s.replace('<anonymous>', e.displayName)), s
												);
											}
										} while (1 <= i && 0 <= o);
									break;
								}
						}
					} finally {
						(F = !1), (Error.prepareStackTrace = n);
					}
					return (e = e ? e.displayName || e.name : '') ? A(e) : '';
				}
				function V(e) {
					switch (e.tag) {
						case 5:
							return A(e.type);
						case 16:
							return A('Lazy');
						case 13:
							return A('Suspense');
						case 19:
							return A('SuspenseList');
						case 0:
						case 2:
						case 15:
							return (e = B(e.type, !1));
						case 11:
							return (e = B(e.type.render, !1));
						case 1:
							return (e = B(e.type, !0));
						default:
							return '';
					}
				}
				function H(e) {
					if (null == e) return null;
					if ('function' === typeof e) return e.displayName || e.name || null;
					if ('string' === typeof e) return e;
					switch (e) {
						case x:
							return 'Fragment';
						case k:
							return 'Portal';
						case C:
							return 'Profiler';
						case E:
							return 'StrictMode';
						case M:
							return 'Suspense';
						case z:
							return 'SuspenseList';
					}
					if ('object' === typeof e)
						switch (e.$$typeof) {
							case P:
								return (e.displayName || 'Context') + '.Consumer';
							case T:
								return (e._context.displayName || 'Context') + '.Provider';
							case _:
								var t = e.render;
								return (
									(e = e.displayName) ||
										(e = '' !== (e = t.displayName || t.name || '') ? 'ForwardRef(' + e + ')' : 'ForwardRef'),
									e
								);
							case L:
								return null !== (t = e.displayName || null) ? t : H(e.type) || 'Memo';
							case O:
								(t = e._payload), (e = e._init);
								try {
									return H(e(t));
								} catch (n) {}
						}
					return null;
				}
				function U(e) {
					var t = e.type;
					switch (e.tag) {
						case 24:
							return 'Cache';
						case 9:
							return (t.displayName || 'Context') + '.Consumer';
						case 10:
							return (t._context.displayName || 'Context') + '.Provider';
						case 18:
							return 'DehydratedFragment';
						case 11:
							return (
								(e = (e = t.render).displayName || e.name || ''),
								t.displayName || ('' !== e ? 'ForwardRef(' + e + ')' : 'ForwardRef')
							);
						case 7:
							return 'Fragment';
						case 5:
							return t;
						case 4:
							return 'Portal';
						case 3:
							return 'Root';
						case 6:
							return 'Text';
						case 16:
							return H(t);
						case 8:
							return t === E ? 'StrictMode' : 'Mode';
						case 22:
							return 'Offscreen';
						case 12:
							return 'Profiler';
						case 21:
							return 'Scope';
						case 13:
							return 'Suspense';
						case 19:
							return 'SuspenseList';
						case 25:
							return 'TracingMarker';
						case 1:
						case 0:
						case 17:
						case 2:
						case 14:
						case 15:
							if ('function' === typeof t) return t.displayName || t.name || null;
							if ('string' === typeof t) return t;
					}
					return null;
				}
				function G(e) {
					switch (typeof e) {
						case 'boolean':
						case 'number':
						case 'string':
						case 'undefined':
						case 'object':
							return e;
						default:
							return '';
					}
				}
				function W(e) {
					var t = e.type;
					return (e = e.nodeName) && 'input' === e.toLowerCase() && ('checkbox' === t || 'radio' === t);
				}
				function $(e) {
					e._valueTracker ||
						(e._valueTracker = (function (e) {
							var t = W(e) ? 'checked' : 'value',
								n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
								r = '' + e[t];
							if (
								!e.hasOwnProperty(t) &&
								'undefined' !== typeof n &&
								'function' === typeof n.get &&
								'function' === typeof n.set
							) {
								var a = n.get,
									l = n.set;
								return (
									Object.defineProperty(e, t, {
										configurable: !0,
										get: function () {
											return a.call(this);
										},
										set: function (e) {
											(r = '' + e), l.call(this, e);
										},
									}),
									Object.defineProperty(e, t, { enumerable: n.enumerable }),
									{
										getValue: function () {
											return r;
										},
										setValue: function (e) {
											r = '' + e;
										},
										stopTracking: function () {
											(e._valueTracker = null), delete e[t];
										},
									}
								);
							}
						})(e));
				}
				function q(e) {
					if (!e) return !1;
					var t = e._valueTracker;
					if (!t) return !0;
					var n = t.getValue(),
						r = '';
					return e && (r = W(e) ? (e.checked ? 'true' : 'false') : e.value), (e = r) !== n && (t.setValue(e), !0);
				}
				function Q(e) {
					if ('undefined' === typeof (e = e || ('undefined' !== typeof document ? document : void 0))) return null;
					try {
						return e.activeElement || e.body;
					} catch (t) {
						return e.body;
					}
				}
				function X(e, t) {
					var n = t.checked;
					return R({}, t, {
						defaultChecked: void 0,
						defaultValue: void 0,
						value: void 0,
						checked: null != n ? n : e._wrapperState.initialChecked,
					});
				}
				function Y(e, t) {
					var n = null == t.defaultValue ? '' : t.defaultValue,
						r = null != t.checked ? t.checked : t.defaultChecked;
					(n = G(null != t.value ? t.value : n)),
						(e._wrapperState = {
							initialChecked: r,
							initialValue: n,
							controlled: 'checkbox' === t.type || 'radio' === t.type ? null != t.checked : null != t.value,
						});
				}
				function K(e, t) {
					null != (t = t.checked) && b(e, 'checked', t, !1);
				}
				function J(e, t) {
					K(e, t);
					var n = G(t.value),
						r = t.type;
					if (null != n)
						'number' === r
							? ((0 === n && '' === e.value) || e.value != n) && (e.value = '' + n)
							: e.value !== '' + n && (e.value = '' + n);
					else if ('submit' === r || 'reset' === r) return void e.removeAttribute('value');
					t.hasOwnProperty('value')
						? ee(e, t.type, n)
						: t.hasOwnProperty('defaultValue') && ee(e, t.type, G(t.defaultValue)),
						null == t.checked && null != t.defaultChecked && (e.defaultChecked = !!t.defaultChecked);
				}
				function Z(e, t, n) {
					if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
						var r = t.type;
						if (!(('submit' !== r && 'reset' !== r) || (void 0 !== t.value && null !== t.value))) return;
						(t = '' + e._wrapperState.initialValue), n || t === e.value || (e.value = t), (e.defaultValue = t);
					}
					'' !== (n = e.name) && (e.name = ''),
						(e.defaultChecked = !!e._wrapperState.initialChecked),
						'' !== n && (e.name = n);
				}
				function ee(e, t, n) {
					('number' === t && Q(e.ownerDocument) === e) ||
						(null == n
							? (e.defaultValue = '' + e._wrapperState.initialValue)
							: e.defaultValue !== '' + n && (e.defaultValue = '' + n));
				}
				var te = Array.isArray;
				function ne(e, t, n, r) {
					if (((e = e.options), t)) {
						t = {};
						for (var a = 0; a < n.length; a++) t['$' + n[a]] = !0;
						for (n = 0; n < e.length; n++)
							(a = t.hasOwnProperty('$' + e[n].value)),
								e[n].selected !== a && (e[n].selected = a),
								a && r && (e[n].defaultSelected = !0);
					} else {
						for (n = '' + G(n), t = null, a = 0; a < e.length; a++) {
							if (e[a].value === n) return (e[a].selected = !0), void (r && (e[a].defaultSelected = !0));
							null !== t || e[a].disabled || (t = e[a]);
						}
						null !== t && (t.selected = !0);
					}
				}
				function re(e, t) {
					if (null != t.dangerouslySetInnerHTML) throw Error(l(91));
					return R({}, t, { value: void 0, defaultValue: void 0, children: '' + e._wrapperState.initialValue });
				}
				function ae(e, t) {
					var n = t.value;
					if (null == n) {
						if (((n = t.children), (t = t.defaultValue), null != n)) {
							if (null != t) throw Error(l(92));
							if (te(n)) {
								if (1 < n.length) throw Error(l(93));
								n = n[0];
							}
							t = n;
						}
						null == t && (t = ''), (n = t);
					}
					e._wrapperState = { initialValue: G(n) };
				}
				function le(e, t) {
					var n = G(t.value),
						r = G(t.defaultValue);
					null != n &&
						((n = '' + n) !== e.value && (e.value = n),
						null == t.defaultValue && e.defaultValue !== n && (e.defaultValue = n)),
						null != r && (e.defaultValue = '' + r);
				}
				function ie(e) {
					var t = e.textContent;
					t === e._wrapperState.initialValue && '' !== t && null !== t && (e.value = t);
				}
				function oe(e) {
					switch (e) {
						case 'svg':
							return 'http://www.w3.org/2000/svg';
						case 'math':
							return 'http://www.w3.org/1998/Math/MathML';
						default:
							return 'http://www.w3.org/1999/xhtml';
					}
				}
				function se(e, t) {
					return null == e || 'http://www.w3.org/1999/xhtml' === e
						? oe(t)
						: 'http://www.w3.org/2000/svg' === e && 'foreignObject' === t
						? 'http://www.w3.org/1999/xhtml'
						: e;
				}
				var ue,
					ce,
					de =
						((ce = function (e, t) {
							if ('http://www.w3.org/2000/svg' !== e.namespaceURI || 'innerHTML' in e) e.innerHTML = t;
							else {
								for (
									(ue = ue || document.createElement('div')).innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
										t = ue.firstChild;
									e.firstChild;

								)
									e.removeChild(e.firstChild);
								for (; t.firstChild; ) e.appendChild(t.firstChild);
							}
						}),
						'undefined' !== typeof MSApp && MSApp.execUnsafeLocalFunction
							? function (e, t, n, r) {
									MSApp.execUnsafeLocalFunction(function () {
										return ce(e, t);
									});
							  }
							: ce);
				function fe(e, t) {
					if (t) {
						var n = e.firstChild;
						if (n && n === e.lastChild && 3 === n.nodeType) return void (n.nodeValue = t);
					}
					e.textContent = t;
				}
				var pe = {
						animationIterationCount: !0,
						aspectRatio: !0,
						borderImageOutset: !0,
						borderImageSlice: !0,
						borderImageWidth: !0,
						boxFlex: !0,
						boxFlexGroup: !0,
						boxOrdinalGroup: !0,
						columnCount: !0,
						columns: !0,
						flex: !0,
						flexGrow: !0,
						flexPositive: !0,
						flexShrink: !0,
						flexNegative: !0,
						flexOrder: !0,
						gridArea: !0,
						gridRow: !0,
						gridRowEnd: !0,
						gridRowSpan: !0,
						gridRowStart: !0,
						gridColumn: !0,
						gridColumnEnd: !0,
						gridColumnSpan: !0,
						gridColumnStart: !0,
						fontWeight: !0,
						lineClamp: !0,
						lineHeight: !0,
						opacity: !0,
						order: !0,
						orphans: !0,
						tabSize: !0,
						widows: !0,
						zIndex: !0,
						zoom: !0,
						fillOpacity: !0,
						floodOpacity: !0,
						stopOpacity: !0,
						strokeDasharray: !0,
						strokeDashoffset: !0,
						strokeMiterlimit: !0,
						strokeOpacity: !0,
						strokeWidth: !0,
					},
					ve = ['Webkit', 'ms', 'Moz', 'O'];
				function he(e, t, n) {
					return null == t || 'boolean' === typeof t || '' === t
						? ''
						: n || 'number' !== typeof t || 0 === t || (pe.hasOwnProperty(e) && pe[e])
						? ('' + t).trim()
						: t + 'px';
				}
				function me(e, t) {
					for (var n in ((e = e.style), t))
						if (t.hasOwnProperty(n)) {
							var r = 0 === n.indexOf('--'),
								a = he(n, t[n], r);
							'float' === n && (n = 'cssFloat'), r ? e.setProperty(n, a) : (e[n] = a);
						}
				}
				Object.keys(pe).forEach(function (e) {
					ve.forEach(function (t) {
						(t = t + e.charAt(0).toUpperCase() + e.substring(1)), (pe[t] = pe[e]);
					});
				});
				var ge = R(
					{ menuitem: !0 },
					{
						area: !0,
						base: !0,
						br: !0,
						col: !0,
						embed: !0,
						hr: !0,
						img: !0,
						input: !0,
						keygen: !0,
						link: !0,
						meta: !0,
						param: !0,
						source: !0,
						track: !0,
						wbr: !0,
					},
				);
				function ye(e, t) {
					if (t) {
						if (ge[e] && (null != t.children || null != t.dangerouslySetInnerHTML)) throw Error(l(137, e));
						if (null != t.dangerouslySetInnerHTML) {
							if (null != t.children) throw Error(l(60));
							if ('object' !== typeof t.dangerouslySetInnerHTML || !('__html' in t.dangerouslySetInnerHTML))
								throw Error(l(61));
						}
						if (null != t.style && 'object' !== typeof t.style) throw Error(l(62));
					}
				}
				function be(e, t) {
					if (-1 === e.indexOf('-')) return 'string' === typeof t.is;
					switch (e) {
						case 'annotation-xml':
						case 'color-profile':
						case 'font-face':
						case 'font-face-src':
						case 'font-face-uri':
						case 'font-face-format':
						case 'font-face-name':
						case 'missing-glyph':
							return !1;
						default:
							return !0;
					}
				}
				var we = null;
				function Se(e) {
					return (
						(e = e.target || e.srcElement || window).correspondingUseElement && (e = e.correspondingUseElement),
						3 === e.nodeType ? e.parentNode : e
					);
				}
				var ke = null,
					xe = null,
					Ee = null;
				function Ce(e) {
					if ((e = ba(e))) {
						if ('function' !== typeof ke) throw Error(l(280));
						var t = e.stateNode;
						t && ((t = Sa(t)), ke(e.stateNode, e.type, t));
					}
				}
				function Te(e) {
					xe ? (Ee ? Ee.push(e) : (Ee = [e])) : (xe = e);
				}
				function Pe() {
					if (xe) {
						var e = xe,
							t = Ee;
						if (((Ee = xe = null), Ce(e), t)) for (e = 0; e < t.length; e++) Ce(t[e]);
					}
				}
				function _e(e, t) {
					return e(t);
				}
				function Me() {}
				var ze = !1;
				function Le(e, t, n) {
					if (ze) return e(t, n);
					ze = !0;
					try {
						return _e(e, t, n);
					} finally {
						(ze = !1), (null !== xe || null !== Ee) && (Me(), Pe());
					}
				}
				function Oe(e, t) {
					var n = e.stateNode;
					if (null === n) return null;
					var r = Sa(n);
					if (null === r) return null;
					n = r[t];
					e: switch (t) {
						case 'onClick':
						case 'onClickCapture':
						case 'onDoubleClick':
						case 'onDoubleClickCapture':
						case 'onMouseDown':
						case 'onMouseDownCapture':
						case 'onMouseMove':
						case 'onMouseMoveCapture':
						case 'onMouseUp':
						case 'onMouseUpCapture':
						case 'onMouseEnter':
							(r = !r.disabled) ||
								(r = !('button' === (e = e.type) || 'input' === e || 'select' === e || 'textarea' === e)),
								(e = !r);
							break e;
						default:
							e = !1;
					}
					if (e) return null;
					if (n && 'function' !== typeof n) throw Error(l(231, t, typeof n));
					return n;
				}
				var Ne = !1;
				if (c)
					try {
						var Ie = {};
						Object.defineProperty(Ie, 'passive', {
							get: function () {
								Ne = !0;
							},
						}),
							window.addEventListener('test', Ie, Ie),
							window.removeEventListener('test', Ie, Ie);
					} catch (ce) {
						Ne = !1;
					}
				function je(e, t, n, r, a, l, i, o, s) {
					var u = Array.prototype.slice.call(arguments, 3);
					try {
						t.apply(n, u);
					} catch (c) {
						this.onError(c);
					}
				}
				var De = !1,
					Re = null,
					Ae = !1,
					Fe = null,
					Be = {
						onError: function (e) {
							(De = !0), (Re = e);
						},
					};
				function Ve(e, t, n, r, a, l, i, o, s) {
					(De = !1), (Re = null), je.apply(Be, arguments);
				}
				function He(e) {
					var t = e,
						n = e;
					if (e.alternate) for (; t.return; ) t = t.return;
					else {
						e = t;
						do {
							0 !== (4098 & (t = e).flags) && (n = t.return), (e = t.return);
						} while (e);
					}
					return 3 === t.tag ? n : null;
				}
				function Ue(e) {
					if (13 === e.tag) {
						var t = e.memoizedState;
						if ((null === t && null !== (e = e.alternate) && (t = e.memoizedState), null !== t)) return t.dehydrated;
					}
					return null;
				}
				function Ge(e) {
					if (He(e) !== e) throw Error(l(188));
				}
				function We(e) {
					return null !==
						(e = (function (e) {
							var t = e.alternate;
							if (!t) {
								if (null === (t = He(e))) throw Error(l(188));
								return t !== e ? null : e;
							}
							for (var n = e, r = t; ; ) {
								var a = n.return;
								if (null === a) break;
								var i = a.alternate;
								if (null === i) {
									if (null !== (r = a.return)) {
										n = r;
										continue;
									}
									break;
								}
								if (a.child === i.child) {
									for (i = a.child; i; ) {
										if (i === n) return Ge(a), e;
										if (i === r) return Ge(a), t;
										i = i.sibling;
									}
									throw Error(l(188));
								}
								if (n.return !== r.return) (n = a), (r = i);
								else {
									for (var o = !1, s = a.child; s; ) {
										if (s === n) {
											(o = !0), (n = a), (r = i);
											break;
										}
										if (s === r) {
											(o = !0), (r = a), (n = i);
											break;
										}
										s = s.sibling;
									}
									if (!o) {
										for (s = i.child; s; ) {
											if (s === n) {
												(o = !0), (n = i), (r = a);
												break;
											}
											if (s === r) {
												(o = !0), (r = i), (n = a);
												break;
											}
											s = s.sibling;
										}
										if (!o) throw Error(l(189));
									}
								}
								if (n.alternate !== r) throw Error(l(190));
							}
							if (3 !== n.tag) throw Error(l(188));
							return n.stateNode.current === n ? e : t;
						})(e))
						? $e(e)
						: null;
				}
				function $e(e) {
					if (5 === e.tag || 6 === e.tag) return e;
					for (e = e.child; null !== e; ) {
						var t = $e(e);
						if (null !== t) return t;
						e = e.sibling;
					}
					return null;
				}
				var qe = a.unstable_scheduleCallback,
					Qe = a.unstable_cancelCallback,
					Xe = a.unstable_shouldYield,
					Ye = a.unstable_requestPaint,
					Ke = a.unstable_now,
					Je = a.unstable_getCurrentPriorityLevel,
					Ze = a.unstable_ImmediatePriority,
					et = a.unstable_UserBlockingPriority,
					tt = a.unstable_NormalPriority,
					nt = a.unstable_LowPriority,
					rt = a.unstable_IdlePriority,
					at = null,
					lt = null;
				var it = Math.clz32
						? Math.clz32
						: function (e) {
								return (e >>>= 0), 0 === e ? 32 : (31 - ((ot(e) / st) | 0)) | 0;
						  },
					ot = Math.log,
					st = Math.LN2;
				var ut = 64,
					ct = 4194304;
				function dt(e) {
					switch (e & -e) {
						case 1:
							return 1;
						case 2:
							return 2;
						case 4:
							return 4;
						case 8:
							return 8;
						case 16:
							return 16;
						case 32:
							return 32;
						case 64:
						case 128:
						case 256:
						case 512:
						case 1024:
						case 2048:
						case 4096:
						case 8192:
						case 16384:
						case 32768:
						case 65536:
						case 131072:
						case 262144:
						case 524288:
						case 1048576:
						case 2097152:
							return 4194240 & e;
						case 4194304:
						case 8388608:
						case 16777216:
						case 33554432:
						case 67108864:
							return 130023424 & e;
						case 134217728:
							return 134217728;
						case 268435456:
							return 268435456;
						case 536870912:
							return 536870912;
						case 1073741824:
							return 1073741824;
						default:
							return e;
					}
				}
				function ft(e, t) {
					var n = e.pendingLanes;
					if (0 === n) return 0;
					var r = 0,
						a = e.suspendedLanes,
						l = e.pingedLanes,
						i = 268435455 & n;
					if (0 !== i) {
						var o = i & ~a;
						0 !== o ? (r = dt(o)) : 0 !== (l &= i) && (r = dt(l));
					} else 0 !== (i = n & ~a) ? (r = dt(i)) : 0 !== l && (r = dt(l));
					if (0 === r) return 0;
					if (
						0 !== t &&
						t !== r &&
						0 === (t & a) &&
						((a = r & -r) >= (l = t & -t) || (16 === a && 0 !== (4194240 & l)))
					)
						return t;
					if ((0 !== (4 & r) && (r |= 16 & n), 0 !== (t = e.entangledLanes)))
						for (e = e.entanglements, t &= r; 0 < t; ) (a = 1 << (n = 31 - it(t))), (r |= e[n]), (t &= ~a);
					return r;
				}
				function pt(e, t) {
					switch (e) {
						case 1:
						case 2:
						case 4:
							return t + 250;
						case 8:
						case 16:
						case 32:
						case 64:
						case 128:
						case 256:
						case 512:
						case 1024:
						case 2048:
						case 4096:
						case 8192:
						case 16384:
						case 32768:
						case 65536:
						case 131072:
						case 262144:
						case 524288:
						case 1048576:
						case 2097152:
							return t + 5e3;
						default:
							return -1;
					}
				}
				function vt(e) {
					return 0 !== (e = -1073741825 & e.pendingLanes) ? e : 1073741824 & e ? 1073741824 : 0;
				}
				function ht() {
					var e = ut;
					return 0 === (4194240 & (ut <<= 1)) && (ut = 64), e;
				}
				function mt(e) {
					for (var t = [], n = 0; 31 > n; n++) t.push(e);
					return t;
				}
				function gt(e, t, n) {
					(e.pendingLanes |= t),
						536870912 !== t && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
						((e = e.eventTimes)[(t = 31 - it(t))] = n);
				}
				function yt(e, t) {
					var n = (e.entangledLanes |= t);
					for (e = e.entanglements; n; ) {
						var r = 31 - it(n),
							a = 1 << r;
						(a & t) | (e[r] & t) && (e[r] |= t), (n &= ~a);
					}
				}
				var bt = 0;
				function wt(e) {
					return 1 < (e &= -e) ? (4 < e ? (0 !== (268435455 & e) ? 16 : 536870912) : 4) : 1;
				}
				var St,
					kt,
					xt,
					Et,
					Ct,
					Tt = !1,
					Pt = [],
					_t = null,
					Mt = null,
					zt = null,
					Lt = new Map(),
					Ot = new Map(),
					Nt = [],
					It =
						'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
							' ',
						);
				function jt(e, t) {
					switch (e) {
						case 'focusin':
						case 'focusout':
							_t = null;
							break;
						case 'dragenter':
						case 'dragleave':
							Mt = null;
							break;
						case 'mouseover':
						case 'mouseout':
							zt = null;
							break;
						case 'pointerover':
						case 'pointerout':
							Lt.delete(t.pointerId);
							break;
						case 'gotpointercapture':
						case 'lostpointercapture':
							Ot.delete(t.pointerId);
					}
				}
				function Dt(e, t, n, r, a, l) {
					return null === e || e.nativeEvent !== l
						? ((e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: l, targetContainers: [a] }),
						  null !== t && null !== (t = ba(t)) && kt(t),
						  e)
						: ((e.eventSystemFlags |= r), (t = e.targetContainers), null !== a && -1 === t.indexOf(a) && t.push(a), e);
				}
				function Rt(e) {
					var t = ya(e.target);
					if (null !== t) {
						var n = He(t);
						if (null !== n)
							if (13 === (t = n.tag)) {
								if (null !== (t = Ue(n)))
									return (
										(e.blockedOn = t),
										void Ct(e.priority, function () {
											xt(n);
										})
									);
							} else if (3 === t && n.stateNode.current.memoizedState.isDehydrated)
								return void (e.blockedOn = 3 === n.tag ? n.stateNode.containerInfo : null);
					}
					e.blockedOn = null;
				}
				function At(e) {
					if (null !== e.blockedOn) return !1;
					for (var t = e.targetContainers; 0 < t.length; ) {
						var n = Xt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
						if (null !== n) return null !== (t = ba(n)) && kt(t), (e.blockedOn = n), !1;
						var r = new (n = e.nativeEvent).constructor(n.type, n);
						(we = r), n.target.dispatchEvent(r), (we = null), t.shift();
					}
					return !0;
				}
				function Ft(e, t, n) {
					At(e) && n.delete(t);
				}
				function Bt() {
					(Tt = !1),
						null !== _t && At(_t) && (_t = null),
						null !== Mt && At(Mt) && (Mt = null),
						null !== zt && At(zt) && (zt = null),
						Lt.forEach(Ft),
						Ot.forEach(Ft);
				}
				function Vt(e, t) {
					e.blockedOn === t &&
						((e.blockedOn = null), Tt || ((Tt = !0), a.unstable_scheduleCallback(a.unstable_NormalPriority, Bt)));
				}
				function Ht(e) {
					function t(t) {
						return Vt(t, e);
					}
					if (0 < Pt.length) {
						Vt(Pt[0], e);
						for (var n = 1; n < Pt.length; n++) {
							var r = Pt[n];
							r.blockedOn === e && (r.blockedOn = null);
						}
					}
					for (
						null !== _t && Vt(_t, e),
							null !== Mt && Vt(Mt, e),
							null !== zt && Vt(zt, e),
							Lt.forEach(t),
							Ot.forEach(t),
							n = 0;
						n < Nt.length;
						n++
					)
						(r = Nt[n]).blockedOn === e && (r.blockedOn = null);
					for (; 0 < Nt.length && null === (n = Nt[0]).blockedOn; ) Rt(n), null === n.blockedOn && Nt.shift();
				}
				var Ut = w.ReactCurrentBatchConfig,
					Gt = !0;
				function Wt(e, t, n, r) {
					var a = bt,
						l = Ut.transition;
					Ut.transition = null;
					try {
						(bt = 1), qt(e, t, n, r);
					} finally {
						(bt = a), (Ut.transition = l);
					}
				}
				function $t(e, t, n, r) {
					var a = bt,
						l = Ut.transition;
					Ut.transition = null;
					try {
						(bt = 4), qt(e, t, n, r);
					} finally {
						(bt = a), (Ut.transition = l);
					}
				}
				function qt(e, t, n, r) {
					if (Gt) {
						var a = Xt(e, t, n, r);
						if (null === a) Gr(e, t, r, Qt, n), jt(e, r);
						else if (
							(function (e, t, n, r, a) {
								switch (t) {
									case 'focusin':
										return (_t = Dt(_t, e, t, n, r, a)), !0;
									case 'dragenter':
										return (Mt = Dt(Mt, e, t, n, r, a)), !0;
									case 'mouseover':
										return (zt = Dt(zt, e, t, n, r, a)), !0;
									case 'pointerover':
										var l = a.pointerId;
										return Lt.set(l, Dt(Lt.get(l) || null, e, t, n, r, a)), !0;
									case 'gotpointercapture':
										return (l = a.pointerId), Ot.set(l, Dt(Ot.get(l) || null, e, t, n, r, a)), !0;
								}
								return !1;
							})(a, e, t, n, r)
						)
							r.stopPropagation();
						else if ((jt(e, r), 4 & t && -1 < It.indexOf(e))) {
							for (; null !== a; ) {
								var l = ba(a);
								if ((null !== l && St(l), null === (l = Xt(e, t, n, r)) && Gr(e, t, r, Qt, n), l === a)) break;
								a = l;
							}
							null !== a && r.stopPropagation();
						} else Gr(e, t, r, null, n);
					}
				}
				var Qt = null;
				function Xt(e, t, n, r) {
					if (((Qt = null), null !== (e = ya((e = Se(r))))))
						if (null === (t = He(e))) e = null;
						else if (13 === (n = t.tag)) {
							if (null !== (e = Ue(t))) return e;
							e = null;
						} else if (3 === n) {
							if (t.stateNode.current.memoizedState.isDehydrated) return 3 === t.tag ? t.stateNode.containerInfo : null;
							e = null;
						} else t !== e && (e = null);
					return (Qt = e), null;
				}
				function Yt(e) {
					switch (e) {
						case 'cancel':
						case 'click':
						case 'close':
						case 'contextmenu':
						case 'copy':
						case 'cut':
						case 'auxclick':
						case 'dblclick':
						case 'dragend':
						case 'dragstart':
						case 'drop':
						case 'focusin':
						case 'focusout':
						case 'input':
						case 'invalid':
						case 'keydown':
						case 'keypress':
						case 'keyup':
						case 'mousedown':
						case 'mouseup':
						case 'paste':
						case 'pause':
						case 'play':
						case 'pointercancel':
						case 'pointerdown':
						case 'pointerup':
						case 'ratechange':
						case 'reset':
						case 'resize':
						case 'seeked':
						case 'submit':
						case 'touchcancel':
						case 'touchend':
						case 'touchstart':
						case 'volumechange':
						case 'change':
						case 'selectionchange':
						case 'textInput':
						case 'compositionstart':
						case 'compositionend':
						case 'compositionupdate':
						case 'beforeblur':
						case 'afterblur':
						case 'beforeinput':
						case 'blur':
						case 'fullscreenchange':
						case 'focus':
						case 'hashchange':
						case 'popstate':
						case 'select':
						case 'selectstart':
							return 1;
						case 'drag':
						case 'dragenter':
						case 'dragexit':
						case 'dragleave':
						case 'dragover':
						case 'mousemove':
						case 'mouseout':
						case 'mouseover':
						case 'pointermove':
						case 'pointerout':
						case 'pointerover':
						case 'scroll':
						case 'toggle':
						case 'touchmove':
						case 'wheel':
						case 'mouseenter':
						case 'mouseleave':
						case 'pointerenter':
						case 'pointerleave':
							return 4;
						case 'message':
							switch (Je()) {
								case Ze:
									return 1;
								case et:
									return 4;
								case tt:
								case nt:
									return 16;
								case rt:
									return 536870912;
								default:
									return 16;
							}
						default:
							return 16;
					}
				}
				var Kt = null,
					Jt = null,
					Zt = null;
				function en() {
					if (Zt) return Zt;
					var e,
						t,
						n = Jt,
						r = n.length,
						a = 'value' in Kt ? Kt.value : Kt.textContent,
						l = a.length;
					for (e = 0; e < r && n[e] === a[e]; e++);
					var i = r - e;
					for (t = 1; t <= i && n[r - t] === a[l - t]; t++);
					return (Zt = a.slice(e, 1 < t ? 1 - t : void 0));
				}
				function tn(e) {
					var t = e.keyCode;
					return (
						'charCode' in e ? 0 === (e = e.charCode) && 13 === t && (e = 13) : (e = t),
						10 === e && (e = 13),
						32 <= e || 13 === e ? e : 0
					);
				}
				function nn() {
					return !0;
				}
				function rn() {
					return !1;
				}
				function an(e) {
					function t(t, n, r, a, l) {
						for (var i in ((this._reactName = t),
						(this._targetInst = r),
						(this.type = n),
						(this.nativeEvent = a),
						(this.target = l),
						(this.currentTarget = null),
						e))
							e.hasOwnProperty(i) && ((t = e[i]), (this[i] = t ? t(a) : a[i]));
						return (
							(this.isDefaultPrevented = (null != a.defaultPrevented ? a.defaultPrevented : !1 === a.returnValue)
								? nn
								: rn),
							(this.isPropagationStopped = rn),
							this
						);
					}
					return (
						R(t.prototype, {
							preventDefault: function () {
								this.defaultPrevented = !0;
								var e = this.nativeEvent;
								e &&
									(e.preventDefault ? e.preventDefault() : 'unknown' !== typeof e.returnValue && (e.returnValue = !1),
									(this.isDefaultPrevented = nn));
							},
							stopPropagation: function () {
								var e = this.nativeEvent;
								e &&
									(e.stopPropagation
										? e.stopPropagation()
										: 'unknown' !== typeof e.cancelBubble && (e.cancelBubble = !0),
									(this.isPropagationStopped = nn));
							},
							persist: function () {},
							isPersistent: nn,
						}),
						t
					);
				}
				var ln,
					on,
					sn,
					un = {
						eventPhase: 0,
						bubbles: 0,
						cancelable: 0,
						timeStamp: function (e) {
							return e.timeStamp || Date.now();
						},
						defaultPrevented: 0,
						isTrusted: 0,
					},
					cn = an(un),
					dn = R({}, un, { view: 0, detail: 0 }),
					fn = an(dn),
					pn = R({}, dn, {
						screenX: 0,
						screenY: 0,
						clientX: 0,
						clientY: 0,
						pageX: 0,
						pageY: 0,
						ctrlKey: 0,
						shiftKey: 0,
						altKey: 0,
						metaKey: 0,
						getModifierState: Cn,
						button: 0,
						buttons: 0,
						relatedTarget: function (e) {
							return void 0 === e.relatedTarget
								? e.fromElement === e.srcElement
									? e.toElement
									: e.fromElement
								: e.relatedTarget;
						},
						movementX: function (e) {
							return 'movementX' in e
								? e.movementX
								: (e !== sn &&
										(sn && 'mousemove' === e.type
											? ((ln = e.screenX - sn.screenX), (on = e.screenY - sn.screenY))
											: (on = ln = 0),
										(sn = e)),
								  ln);
						},
						movementY: function (e) {
							return 'movementY' in e ? e.movementY : on;
						},
					}),
					vn = an(pn),
					hn = an(R({}, pn, { dataTransfer: 0 })),
					mn = an(R({}, dn, { relatedTarget: 0 })),
					gn = an(R({}, un, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })),
					yn = R({}, un, {
						clipboardData: function (e) {
							return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
						},
					}),
					bn = an(yn),
					wn = an(R({}, un, { data: 0 })),
					Sn = {
						Esc: 'Escape',
						Spacebar: ' ',
						Left: 'ArrowLeft',
						Up: 'ArrowUp',
						Right: 'ArrowRight',
						Down: 'ArrowDown',
						Del: 'Delete',
						Win: 'OS',
						Menu: 'ContextMenu',
						Apps: 'ContextMenu',
						Scroll: 'ScrollLock',
						MozPrintableKey: 'Unidentified',
					},
					kn = {
						8: 'Backspace',
						9: 'Tab',
						12: 'Clear',
						13: 'Enter',
						16: 'Shift',
						17: 'Control',
						18: 'Alt',
						19: 'Pause',
						20: 'CapsLock',
						27: 'Escape',
						32: ' ',
						33: 'PageUp',
						34: 'PageDown',
						35: 'End',
						36: 'Home',
						37: 'ArrowLeft',
						38: 'ArrowUp',
						39: 'ArrowRight',
						40: 'ArrowDown',
						45: 'Insert',
						46: 'Delete',
						112: 'F1',
						113: 'F2',
						114: 'F3',
						115: 'F4',
						116: 'F5',
						117: 'F6',
						118: 'F7',
						119: 'F8',
						120: 'F9',
						121: 'F10',
						122: 'F11',
						123: 'F12',
						144: 'NumLock',
						145: 'ScrollLock',
						224: 'Meta',
					},
					xn = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' };
				function En(e) {
					var t = this.nativeEvent;
					return t.getModifierState ? t.getModifierState(e) : !!(e = xn[e]) && !!t[e];
				}
				function Cn() {
					return En;
				}
				var Tn = R({}, dn, {
						key: function (e) {
							if (e.key) {
								var t = Sn[e.key] || e.key;
								if ('Unidentified' !== t) return t;
							}
							return 'keypress' === e.type
								? 13 === (e = tn(e))
									? 'Enter'
									: String.fromCharCode(e)
								: 'keydown' === e.type || 'keyup' === e.type
								? kn[e.keyCode] || 'Unidentified'
								: '';
						},
						code: 0,
						location: 0,
						ctrlKey: 0,
						shiftKey: 0,
						altKey: 0,
						metaKey: 0,
						repeat: 0,
						locale: 0,
						getModifierState: Cn,
						charCode: function (e) {
							return 'keypress' === e.type ? tn(e) : 0;
						},
						keyCode: function (e) {
							return 'keydown' === e.type || 'keyup' === e.type ? e.keyCode : 0;
						},
						which: function (e) {
							return 'keypress' === e.type ? tn(e) : 'keydown' === e.type || 'keyup' === e.type ? e.keyCode : 0;
						},
					}),
					Pn = an(Tn),
					_n = an(
						R({}, pn, {
							pointerId: 0,
							width: 0,
							height: 0,
							pressure: 0,
							tangentialPressure: 0,
							tiltX: 0,
							tiltY: 0,
							twist: 0,
							pointerType: 0,
							isPrimary: 0,
						}),
					),
					Mn = an(
						R({}, dn, {
							touches: 0,
							targetTouches: 0,
							changedTouches: 0,
							altKey: 0,
							metaKey: 0,
							ctrlKey: 0,
							shiftKey: 0,
							getModifierState: Cn,
						}),
					),
					zn = an(R({}, un, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })),
					Ln = R({}, pn, {
						deltaX: function (e) {
							return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0;
						},
						deltaY: function (e) {
							return 'deltaY' in e
								? e.deltaY
								: 'wheelDeltaY' in e
								? -e.wheelDeltaY
								: 'wheelDelta' in e
								? -e.wheelDelta
								: 0;
						},
						deltaZ: 0,
						deltaMode: 0,
					}),
					On = an(Ln),
					Nn = [9, 13, 27, 32],
					In = c && 'CompositionEvent' in window,
					jn = null;
				c && 'documentMode' in document && (jn = document.documentMode);
				var Dn = c && 'TextEvent' in window && !jn,
					Rn = c && (!In || (jn && 8 < jn && 11 >= jn)),
					An = String.fromCharCode(32),
					Fn = !1;
				function Bn(e, t) {
					switch (e) {
						case 'keyup':
							return -1 !== Nn.indexOf(t.keyCode);
						case 'keydown':
							return 229 !== t.keyCode;
						case 'keypress':
						case 'mousedown':
						case 'focusout':
							return !0;
						default:
							return !1;
					}
				}
				function Vn(e) {
					return 'object' === typeof (e = e.detail) && 'data' in e ? e.data : null;
				}
				var Hn = !1;
				var Un = {
					color: !0,
					date: !0,
					datetime: !0,
					'datetime-local': !0,
					email: !0,
					month: !0,
					number: !0,
					password: !0,
					range: !0,
					search: !0,
					tel: !0,
					text: !0,
					time: !0,
					url: !0,
					week: !0,
				};
				function Gn(e) {
					var t = e && e.nodeName && e.nodeName.toLowerCase();
					return 'input' === t ? !!Un[e.type] : 'textarea' === t;
				}
				function Wn(e, t, n, r) {
					Te(r),
						0 < (t = $r(t, 'onChange')).length &&
							((n = new cn('onChange', 'change', null, n, r)), e.push({ event: n, listeners: t }));
				}
				var $n = null,
					qn = null;
				function Qn(e) {
					Ar(e, 0);
				}
				function Xn(e) {
					if (q(wa(e))) return e;
				}
				function Yn(e, t) {
					if ('change' === e) return t;
				}
				var Kn = !1;
				if (c) {
					var Jn;
					if (c) {
						var Zn = 'oninput' in document;
						if (!Zn) {
							var er = document.createElement('div');
							er.setAttribute('oninput', 'return;'), (Zn = 'function' === typeof er.oninput);
						}
						Jn = Zn;
					} else Jn = !1;
					Kn = Jn && (!document.documentMode || 9 < document.documentMode);
				}
				function tr() {
					$n && ($n.detachEvent('onpropertychange', nr), (qn = $n = null));
				}
				function nr(e) {
					if ('value' === e.propertyName && Xn(qn)) {
						var t = [];
						Wn(t, qn, e, Se(e)), Le(Qn, t);
					}
				}
				function rr(e, t, n) {
					'focusin' === e ? (tr(), (qn = n), ($n = t).attachEvent('onpropertychange', nr)) : 'focusout' === e && tr();
				}
				function ar(e) {
					if ('selectionchange' === e || 'keyup' === e || 'keydown' === e) return Xn(qn);
				}
				function lr(e, t) {
					if ('click' === e) return Xn(t);
				}
				function ir(e, t) {
					if ('input' === e || 'change' === e) return Xn(t);
				}
				var or =
					'function' === typeof Object.is
						? Object.is
						: function (e, t) {
								return (e === t && (0 !== e || 1 / e === 1 / t)) || (e !== e && t !== t);
						  };
				function sr(e, t) {
					if (or(e, t)) return !0;
					if ('object' !== typeof e || null === e || 'object' !== typeof t || null === t) return !1;
					var n = Object.keys(e),
						r = Object.keys(t);
					if (n.length !== r.length) return !1;
					for (r = 0; r < n.length; r++) {
						var a = n[r];
						if (!d.call(t, a) || !or(e[a], t[a])) return !1;
					}
					return !0;
				}
				function ur(e) {
					for (; e && e.firstChild; ) e = e.firstChild;
					return e;
				}
				function cr(e, t) {
					var n,
						r = ur(e);
					for (e = 0; r; ) {
						if (3 === r.nodeType) {
							if (((n = e + r.textContent.length), e <= t && n >= t)) return { node: r, offset: t - e };
							e = n;
						}
						e: {
							for (; r; ) {
								if (r.nextSibling) {
									r = r.nextSibling;
									break e;
								}
								r = r.parentNode;
							}
							r = void 0;
						}
						r = ur(r);
					}
				}
				function dr(e, t) {
					return (
						!(!e || !t) &&
						(e === t ||
							((!e || 3 !== e.nodeType) &&
								(t && 3 === t.nodeType
									? dr(e, t.parentNode)
									: 'contains' in e
									? e.contains(t)
									: !!e.compareDocumentPosition && !!(16 & e.compareDocumentPosition(t)))))
					);
				}
				function fr() {
					for (var e = window, t = Q(); t instanceof e.HTMLIFrameElement; ) {
						try {
							var n = 'string' === typeof t.contentWindow.location.href;
						} catch (r) {
							n = !1;
						}
						if (!n) break;
						t = Q((e = t.contentWindow).document);
					}
					return t;
				}
				function pr(e) {
					var t = e && e.nodeName && e.nodeName.toLowerCase();
					return (
						t &&
						(('input' === t &&
							('text' === e.type ||
								'search' === e.type ||
								'tel' === e.type ||
								'url' === e.type ||
								'password' === e.type)) ||
							'textarea' === t ||
							'true' === e.contentEditable)
					);
				}
				function vr(e) {
					var t = fr(),
						n = e.focusedElem,
						r = e.selectionRange;
					if (t !== n && n && n.ownerDocument && dr(n.ownerDocument.documentElement, n)) {
						if (null !== r && pr(n))
							if (((t = r.start), void 0 === (e = r.end) && (e = t), 'selectionStart' in n))
								(n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
							else if ((e = ((t = n.ownerDocument || document) && t.defaultView) || window).getSelection) {
								e = e.getSelection();
								var a = n.textContent.length,
									l = Math.min(r.start, a);
								(r = void 0 === r.end ? l : Math.min(r.end, a)),
									!e.extend && l > r && ((a = r), (r = l), (l = a)),
									(a = cr(n, l));
								var i = cr(n, r);
								a &&
									i &&
									(1 !== e.rangeCount ||
										e.anchorNode !== a.node ||
										e.anchorOffset !== a.offset ||
										e.focusNode !== i.node ||
										e.focusOffset !== i.offset) &&
									((t = t.createRange()).setStart(a.node, a.offset),
									e.removeAllRanges(),
									l > r ? (e.addRange(t), e.extend(i.node, i.offset)) : (t.setEnd(i.node, i.offset), e.addRange(t)));
							}
						for (t = [], e = n; (e = e.parentNode); )
							1 === e.nodeType && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
						for ('function' === typeof n.focus && n.focus(), n = 0; n < t.length; n++)
							((e = t[n]).element.scrollLeft = e.left), (e.element.scrollTop = e.top);
					}
				}
				var hr = c && 'documentMode' in document && 11 >= document.documentMode,
					mr = null,
					gr = null,
					yr = null,
					br = !1;
				function wr(e, t, n) {
					var r = n.window === n ? n.document : 9 === n.nodeType ? n : n.ownerDocument;
					br ||
						null == mr ||
						mr !== Q(r) ||
						('selectionStart' in (r = mr) && pr(r)
							? (r = { start: r.selectionStart, end: r.selectionEnd })
							: (r = {
									anchorNode: (r = ((r.ownerDocument && r.ownerDocument.defaultView) || window).getSelection())
										.anchorNode,
									anchorOffset: r.anchorOffset,
									focusNode: r.focusNode,
									focusOffset: r.focusOffset,
							  }),
						(yr && sr(yr, r)) ||
							((yr = r),
							0 < (r = $r(gr, 'onSelect')).length &&
								((t = new cn('onSelect', 'select', null, t, n)), e.push({ event: t, listeners: r }), (t.target = mr))));
				}
				function Sr(e, t) {
					var n = {};
					return (
						(n[e.toLowerCase()] = t.toLowerCase()), (n['Webkit' + e] = 'webkit' + t), (n['Moz' + e] = 'moz' + t), n
					);
				}
				var kr = {
						animationend: Sr('Animation', 'AnimationEnd'),
						animationiteration: Sr('Animation', 'AnimationIteration'),
						animationstart: Sr('Animation', 'AnimationStart'),
						transitionend: Sr('Transition', 'TransitionEnd'),
					},
					xr = {},
					Er = {};
				function Cr(e) {
					if (xr[e]) return xr[e];
					if (!kr[e]) return e;
					var t,
						n = kr[e];
					for (t in n) if (n.hasOwnProperty(t) && t in Er) return (xr[e] = n[t]);
					return e;
				}
				c &&
					((Er = document.createElement('div').style),
					'AnimationEvent' in window ||
						(delete kr.animationend.animation,
						delete kr.animationiteration.animation,
						delete kr.animationstart.animation),
					'TransitionEvent' in window || delete kr.transitionend.transition);
				var Tr = Cr('animationend'),
					Pr = Cr('animationiteration'),
					_r = Cr('animationstart'),
					Mr = Cr('transitionend'),
					zr = new Map(),
					Lr =
						'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
							' ',
						);
				function Or(e, t) {
					zr.set(e, t), s(t, [e]);
				}
				for (var Nr = 0; Nr < Lr.length; Nr++) {
					var Ir = Lr[Nr];
					Or(Ir.toLowerCase(), 'on' + (Ir[0].toUpperCase() + Ir.slice(1)));
				}
				Or(Tr, 'onAnimationEnd'),
					Or(Pr, 'onAnimationIteration'),
					Or(_r, 'onAnimationStart'),
					Or('dblclick', 'onDoubleClick'),
					Or('focusin', 'onFocus'),
					Or('focusout', 'onBlur'),
					Or(Mr, 'onTransitionEnd'),
					u('onMouseEnter', ['mouseout', 'mouseover']),
					u('onMouseLeave', ['mouseout', 'mouseover']),
					u('onPointerEnter', ['pointerout', 'pointerover']),
					u('onPointerLeave', ['pointerout', 'pointerover']),
					s('onChange', 'change click focusin focusout input keydown keyup selectionchange'.split(' ')),
					s(
						'onSelect',
						'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(' '),
					),
					s('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']),
					s('onCompositionEnd', 'compositionend focusout keydown keypress keyup mousedown'.split(' ')),
					s('onCompositionStart', 'compositionstart focusout keydown keypress keyup mousedown'.split(' ')),
					s('onCompositionUpdate', 'compositionupdate focusout keydown keypress keyup mousedown'.split(' '));
				var jr =
						'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
							' ',
						),
					Dr = new Set('cancel close invalid load scroll toggle'.split(' ').concat(jr));
				function Rr(e, t, n) {
					var r = e.type || 'unknown-event';
					(e.currentTarget = n),
						(function (e, t, n, r, a, i, o, s, u) {
							if ((Ve.apply(this, arguments), De)) {
								if (!De) throw Error(l(198));
								var c = Re;
								(De = !1), (Re = null), Ae || ((Ae = !0), (Fe = c));
							}
						})(r, t, void 0, e),
						(e.currentTarget = null);
				}
				function Ar(e, t) {
					t = 0 !== (4 & t);
					for (var n = 0; n < e.length; n++) {
						var r = e[n],
							a = r.event;
						r = r.listeners;
						e: {
							var l = void 0;
							if (t)
								for (var i = r.length - 1; 0 <= i; i--) {
									var o = r[i],
										s = o.instance,
										u = o.currentTarget;
									if (((o = o.listener), s !== l && a.isPropagationStopped())) break e;
									Rr(a, o, u), (l = s);
								}
							else
								for (i = 0; i < r.length; i++) {
									if (
										((s = (o = r[i]).instance),
										(u = o.currentTarget),
										(o = o.listener),
										s !== l && a.isPropagationStopped())
									)
										break e;
									Rr(a, o, u), (l = s);
								}
						}
					}
					if (Ae) throw ((e = Fe), (Ae = !1), (Fe = null), e);
				}
				function Fr(e, t) {
					var n = t[ha];
					void 0 === n && (n = t[ha] = new Set());
					var r = e + '__bubble';
					n.has(r) || (Ur(t, e, 2, !1), n.add(r));
				}
				function Br(e, t, n) {
					var r = 0;
					t && (r |= 4), Ur(n, e, r, t);
				}
				var Vr = '_reactListening' + Math.random().toString(36).slice(2);
				function Hr(e) {
					if (!e[Vr]) {
						(e[Vr] = !0),
							i.forEach(function (t) {
								'selectionchange' !== t && (Dr.has(t) || Br(t, !1, e), Br(t, !0, e));
							});
						var t = 9 === e.nodeType ? e : e.ownerDocument;
						null === t || t[Vr] || ((t[Vr] = !0), Br('selectionchange', !1, t));
					}
				}
				function Ur(e, t, n, r) {
					switch (Yt(t)) {
						case 1:
							var a = Wt;
							break;
						case 4:
							a = $t;
							break;
						default:
							a = qt;
					}
					(n = a.bind(null, t, n, e)),
						(a = void 0),
						!Ne || ('touchstart' !== t && 'touchmove' !== t && 'wheel' !== t) || (a = !0),
						r
							? void 0 !== a
								? e.addEventListener(t, n, { capture: !0, passive: a })
								: e.addEventListener(t, n, !0)
							: void 0 !== a
							? e.addEventListener(t, n, { passive: a })
							: e.addEventListener(t, n, !1);
				}
				function Gr(e, t, n, r, a) {
					var l = r;
					if (0 === (1 & t) && 0 === (2 & t) && null !== r)
						e: for (;;) {
							if (null === r) return;
							var i = r.tag;
							if (3 === i || 4 === i) {
								var o = r.stateNode.containerInfo;
								if (o === a || (8 === o.nodeType && o.parentNode === a)) break;
								if (4 === i)
									for (i = r.return; null !== i; ) {
										var s = i.tag;
										if (
											(3 === s || 4 === s) &&
											((s = i.stateNode.containerInfo) === a || (8 === s.nodeType && s.parentNode === a))
										)
											return;
										i = i.return;
									}
								for (; null !== o; ) {
									if (null === (i = ya(o))) return;
									if (5 === (s = i.tag) || 6 === s) {
										r = l = i;
										continue e;
									}
									o = o.parentNode;
								}
							}
							r = r.return;
						}
					Le(function () {
						var r = l,
							a = Se(n),
							i = [];
						e: {
							var o = zr.get(e);
							if (void 0 !== o) {
								var s = cn,
									u = e;
								switch (e) {
									case 'keypress':
										if (0 === tn(n)) break e;
									case 'keydown':
									case 'keyup':
										s = Pn;
										break;
									case 'focusin':
										(u = 'focus'), (s = mn);
										break;
									case 'focusout':
										(u = 'blur'), (s = mn);
										break;
									case 'beforeblur':
									case 'afterblur':
										s = mn;
										break;
									case 'click':
										if (2 === n.button) break e;
									case 'auxclick':
									case 'dblclick':
									case 'mousedown':
									case 'mousemove':
									case 'mouseup':
									case 'mouseout':
									case 'mouseover':
									case 'contextmenu':
										s = vn;
										break;
									case 'drag':
									case 'dragend':
									case 'dragenter':
									case 'dragexit':
									case 'dragleave':
									case 'dragover':
									case 'dragstart':
									case 'drop':
										s = hn;
										break;
									case 'touchcancel':
									case 'touchend':
									case 'touchmove':
									case 'touchstart':
										s = Mn;
										break;
									case Tr:
									case Pr:
									case _r:
										s = gn;
										break;
									case Mr:
										s = zn;
										break;
									case 'scroll':
										s = fn;
										break;
									case 'wheel':
										s = On;
										break;
									case 'copy':
									case 'cut':
									case 'paste':
										s = bn;
										break;
									case 'gotpointercapture':
									case 'lostpointercapture':
									case 'pointercancel':
									case 'pointerdown':
									case 'pointermove':
									case 'pointerout':
									case 'pointerover':
									case 'pointerup':
										s = _n;
								}
								var c = 0 !== (4 & t),
									d = !c && 'scroll' === e,
									f = c ? (null !== o ? o + 'Capture' : null) : o;
								c = [];
								for (var p, v = r; null !== v; ) {
									var h = (p = v).stateNode;
									if (
										(5 === p.tag &&
											null !== h &&
											((p = h), null !== f && null != (h = Oe(v, f)) && c.push(Wr(v, h, p))),
										d)
									)
										break;
									v = v.return;
								}
								0 < c.length && ((o = new s(o, u, null, n, a)), i.push({ event: o, listeners: c }));
							}
						}
						if (0 === (7 & t)) {
							if (
								((s = 'mouseout' === e || 'pointerout' === e),
								(!(o = 'mouseover' === e || 'pointerover' === e) ||
									n === we ||
									!(u = n.relatedTarget || n.fromElement) ||
									(!ya(u) && !u[va])) &&
									(s || o) &&
									((o = a.window === a ? a : (o = a.ownerDocument) ? o.defaultView || o.parentWindow : window),
									s
										? ((s = r),
										  null !== (u = (u = n.relatedTarget || n.toElement) ? ya(u) : null) &&
												(u !== (d = He(u)) || (5 !== u.tag && 6 !== u.tag)) &&
												(u = null))
										: ((s = null), (u = r)),
									s !== u))
							) {
								if (
									((c = vn),
									(h = 'onMouseLeave'),
									(f = 'onMouseEnter'),
									(v = 'mouse'),
									('pointerout' !== e && 'pointerover' !== e) ||
										((c = _n), (h = 'onPointerLeave'), (f = 'onPointerEnter'), (v = 'pointer')),
									(d = null == s ? o : wa(s)),
									(p = null == u ? o : wa(u)),
									((o = new c(h, v + 'leave', s, n, a)).target = d),
									(o.relatedTarget = p),
									(h = null),
									ya(a) === r && (((c = new c(f, v + 'enter', u, n, a)).target = p), (c.relatedTarget = d), (h = c)),
									(d = h),
									s && u)
								)
									e: {
										for (f = u, v = 0, p = c = s; p; p = qr(p)) v++;
										for (p = 0, h = f; h; h = qr(h)) p++;
										for (; 0 < v - p; ) (c = qr(c)), v--;
										for (; 0 < p - v; ) (f = qr(f)), p--;
										for (; v--; ) {
											if (c === f || (null !== f && c === f.alternate)) break e;
											(c = qr(c)), (f = qr(f));
										}
										c = null;
									}
								else c = null;
								null !== s && Qr(i, o, s, c, !1), null !== u && null !== d && Qr(i, d, u, c, !0);
							}
							if (
								'select' === (s = (o = r ? wa(r) : window).nodeName && o.nodeName.toLowerCase()) ||
								('input' === s && 'file' === o.type)
							)
								var m = Yn;
							else if (Gn(o))
								if (Kn) m = ir;
								else {
									m = ar;
									var g = rr;
								}
							else
								(s = o.nodeName) &&
									'input' === s.toLowerCase() &&
									('checkbox' === o.type || 'radio' === o.type) &&
									(m = lr);
							switch (
								(m && (m = m(e, r))
									? Wn(i, m, n, a)
									: (g && g(e, o, r),
									  'focusout' === e &&
											(g = o._wrapperState) &&
											g.controlled &&
											'number' === o.type &&
											ee(o, 'number', o.value)),
								(g = r ? wa(r) : window),
								e)
							) {
								case 'focusin':
									(Gn(g) || 'true' === g.contentEditable) && ((mr = g), (gr = r), (yr = null));
									break;
								case 'focusout':
									yr = gr = mr = null;
									break;
								case 'mousedown':
									br = !0;
									break;
								case 'contextmenu':
								case 'mouseup':
								case 'dragend':
									(br = !1), wr(i, n, a);
									break;
								case 'selectionchange':
									if (hr) break;
								case 'keydown':
								case 'keyup':
									wr(i, n, a);
							}
							var y;
							if (In)
								e: {
									switch (e) {
										case 'compositionstart':
											var b = 'onCompositionStart';
											break e;
										case 'compositionend':
											b = 'onCompositionEnd';
											break e;
										case 'compositionupdate':
											b = 'onCompositionUpdate';
											break e;
									}
									b = void 0;
								}
							else
								Hn
									? Bn(e, n) && (b = 'onCompositionEnd')
									: 'keydown' === e && 229 === n.keyCode && (b = 'onCompositionStart');
							b &&
								(Rn &&
									'ko' !== n.locale &&
									(Hn || 'onCompositionStart' !== b
										? 'onCompositionEnd' === b && Hn && (y = en())
										: ((Jt = 'value' in (Kt = a) ? Kt.value : Kt.textContent), (Hn = !0))),
								0 < (g = $r(r, b)).length &&
									((b = new wn(b, e, null, n, a)),
									i.push({ event: b, listeners: g }),
									y ? (b.data = y) : null !== (y = Vn(n)) && (b.data = y))),
								(y = Dn
									? (function (e, t) {
											switch (e) {
												case 'compositionend':
													return Vn(t);
												case 'keypress':
													return 32 !== t.which ? null : ((Fn = !0), An);
												case 'textInput':
													return (e = t.data) === An && Fn ? null : e;
												default:
													return null;
											}
									  })(e, n)
									: (function (e, t) {
											if (Hn)
												return 'compositionend' === e || (!In && Bn(e, t))
													? ((e = en()), (Zt = Jt = Kt = null), (Hn = !1), e)
													: null;
											switch (e) {
												case 'paste':
												default:
													return null;
												case 'keypress':
													if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
														if (t.char && 1 < t.char.length) return t.char;
														if (t.which) return String.fromCharCode(t.which);
													}
													return null;
												case 'compositionend':
													return Rn && 'ko' !== t.locale ? null : t.data;
											}
									  })(e, n)) &&
									0 < (r = $r(r, 'onBeforeInput')).length &&
									((a = new wn('onBeforeInput', 'beforeinput', null, n, a)),
									i.push({ event: a, listeners: r }),
									(a.data = y));
						}
						Ar(i, t);
					});
				}
				function Wr(e, t, n) {
					return { instance: e, listener: t, currentTarget: n };
				}
				function $r(e, t) {
					for (var n = t + 'Capture', r = []; null !== e; ) {
						var a = e,
							l = a.stateNode;
						5 === a.tag &&
							null !== l &&
							((a = l),
							null != (l = Oe(e, n)) && r.unshift(Wr(e, l, a)),
							null != (l = Oe(e, t)) && r.push(Wr(e, l, a))),
							(e = e.return);
					}
					return r;
				}
				function qr(e) {
					if (null === e) return null;
					do {
						e = e.return;
					} while (e && 5 !== e.tag);
					return e || null;
				}
				function Qr(e, t, n, r, a) {
					for (var l = t._reactName, i = []; null !== n && n !== r; ) {
						var o = n,
							s = o.alternate,
							u = o.stateNode;
						if (null !== s && s === r) break;
						5 === o.tag &&
							null !== u &&
							((o = u),
							a
								? null != (s = Oe(n, l)) && i.unshift(Wr(n, s, o))
								: a || (null != (s = Oe(n, l)) && i.push(Wr(n, s, o)))),
							(n = n.return);
					}
					0 !== i.length && e.push({ event: t, listeners: i });
				}
				var Xr = /\r\n?/g,
					Yr = /\u0000|\uFFFD/g;
				function Kr(e) {
					return ('string' === typeof e ? e : '' + e).replace(Xr, '\n').replace(Yr, '');
				}
				function Jr(e, t, n) {
					if (((t = Kr(t)), Kr(e) !== t && n)) throw Error(l(425));
				}
				function Zr() {}
				var ea = null,
					ta = null;
				function na(e, t) {
					return (
						'textarea' === e ||
						'noscript' === e ||
						'string' === typeof t.children ||
						'number' === typeof t.children ||
						('object' === typeof t.dangerouslySetInnerHTML &&
							null !== t.dangerouslySetInnerHTML &&
							null != t.dangerouslySetInnerHTML.__html)
					);
				}
				var ra = 'function' === typeof setTimeout ? setTimeout : void 0,
					aa = 'function' === typeof clearTimeout ? clearTimeout : void 0,
					la = 'function' === typeof Promise ? Promise : void 0,
					ia =
						'function' === typeof queueMicrotask
							? queueMicrotask
							: 'undefined' !== typeof la
							? function (e) {
									return la.resolve(null).then(e).catch(oa);
							  }
							: ra;
				function oa(e) {
					setTimeout(function () {
						throw e;
					});
				}
				function sa(e, t) {
					var n = t,
						r = 0;
					do {
						var a = n.nextSibling;
						if ((e.removeChild(n), a && 8 === a.nodeType))
							if ('/$' === (n = a.data)) {
								if (0 === r) return e.removeChild(a), void Ht(t);
								r--;
							} else ('$' !== n && '$?' !== n && '$!' !== n) || r++;
						n = a;
					} while (n);
					Ht(t);
				}
				function ua(e) {
					for (; null != e; e = e.nextSibling) {
						var t = e.nodeType;
						if (1 === t || 3 === t) break;
						if (8 === t) {
							if ('$' === (t = e.data) || '$!' === t || '$?' === t) break;
							if ('/$' === t) return null;
						}
					}
					return e;
				}
				function ca(e) {
					e = e.previousSibling;
					for (var t = 0; e; ) {
						if (8 === e.nodeType) {
							var n = e.data;
							if ('$' === n || '$!' === n || '$?' === n) {
								if (0 === t) return e;
								t--;
							} else '/$' === n && t++;
						}
						e = e.previousSibling;
					}
					return null;
				}
				var da = Math.random().toString(36).slice(2),
					fa = '__reactFiber$' + da,
					pa = '__reactProps$' + da,
					va = '__reactContainer$' + da,
					ha = '__reactEvents$' + da,
					ma = '__reactListeners$' + da,
					ga = '__reactHandles$' + da;
				function ya(e) {
					var t = e[fa];
					if (t) return t;
					for (var n = e.parentNode; n; ) {
						if ((t = n[va] || n[fa])) {
							if (((n = t.alternate), null !== t.child || (null !== n && null !== n.child)))
								for (e = ca(e); null !== e; ) {
									if ((n = e[fa])) return n;
									e = ca(e);
								}
							return t;
						}
						n = (e = n).parentNode;
					}
					return null;
				}
				function ba(e) {
					return !(e = e[fa] || e[va]) || (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag) ? null : e;
				}
				function wa(e) {
					if (5 === e.tag || 6 === e.tag) return e.stateNode;
					throw Error(l(33));
				}
				function Sa(e) {
					return e[pa] || null;
				}
				var ka = [],
					xa = -1;
				function Ea(e) {
					return { current: e };
				}
				function Ca(e) {
					0 > xa || ((e.current = ka[xa]), (ka[xa] = null), xa--);
				}
				function Ta(e, t) {
					xa++, (ka[xa] = e.current), (e.current = t);
				}
				var Pa = {},
					_a = Ea(Pa),
					Ma = Ea(!1),
					za = Pa;
				function La(e, t) {
					var n = e.type.contextTypes;
					if (!n) return Pa;
					var r = e.stateNode;
					if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
						return r.__reactInternalMemoizedMaskedChildContext;
					var a,
						l = {};
					for (a in n) l[a] = t[a];
					return (
						r &&
							(((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = t),
							(e.__reactInternalMemoizedMaskedChildContext = l)),
						l
					);
				}
				function Oa(e) {
					return null !== (e = e.childContextTypes) && void 0 !== e;
				}
				function Na() {
					Ca(Ma), Ca(_a);
				}
				function Ia(e, t, n) {
					if (_a.current !== Pa) throw Error(l(168));
					Ta(_a, t), Ta(Ma, n);
				}
				function ja(e, t, n) {
					var r = e.stateNode;
					if (((t = t.childContextTypes), 'function' !== typeof r.getChildContext)) return n;
					for (var a in (r = r.getChildContext())) if (!(a in t)) throw Error(l(108, U(e) || 'Unknown', a));
					return R({}, n, r);
				}
				function Da(e) {
					return (
						(e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Pa),
						(za = _a.current),
						Ta(_a, e),
						Ta(Ma, Ma.current),
						!0
					);
				}
				function Ra(e, t, n) {
					var r = e.stateNode;
					if (!r) throw Error(l(169));
					n
						? ((e = ja(e, t, za)), (r.__reactInternalMemoizedMergedChildContext = e), Ca(Ma), Ca(_a), Ta(_a, e))
						: Ca(Ma),
						Ta(Ma, n);
				}
				var Aa = null,
					Fa = !1,
					Ba = !1;
				function Va(e) {
					null === Aa ? (Aa = [e]) : Aa.push(e);
				}
				function Ha() {
					if (!Ba && null !== Aa) {
						Ba = !0;
						var e = 0,
							t = bt;
						try {
							var n = Aa;
							for (bt = 1; e < n.length; e++) {
								var r = n[e];
								do {
									r = r(!0);
								} while (null !== r);
							}
							(Aa = null), (Fa = !1);
						} catch (a) {
							throw (null !== Aa && (Aa = Aa.slice(e + 1)), qe(Ze, Ha), a);
						} finally {
							(bt = t), (Ba = !1);
						}
					}
					return null;
				}
				var Ua = [],
					Ga = 0,
					Wa = null,
					$a = 0,
					qa = [],
					Qa = 0,
					Xa = null,
					Ya = 1,
					Ka = '';
				function Ja(e, t) {
					(Ua[Ga++] = $a), (Ua[Ga++] = Wa), (Wa = e), ($a = t);
				}
				function Za(e, t, n) {
					(qa[Qa++] = Ya), (qa[Qa++] = Ka), (qa[Qa++] = Xa), (Xa = e);
					var r = Ya;
					e = Ka;
					var a = 32 - it(r) - 1;
					(r &= ~(1 << a)), (n += 1);
					var l = 32 - it(t) + a;
					if (30 < l) {
						var i = a - (a % 5);
						(l = (r & ((1 << i) - 1)).toString(32)),
							(r >>= i),
							(a -= i),
							(Ya = (1 << (32 - it(t) + a)) | (n << a) | r),
							(Ka = l + e);
					} else (Ya = (1 << l) | (n << a) | r), (Ka = e);
				}
				function el(e) {
					null !== e.return && (Ja(e, 1), Za(e, 1, 0));
				}
				function tl(e) {
					for (; e === Wa; ) (Wa = Ua[--Ga]), (Ua[Ga] = null), ($a = Ua[--Ga]), (Ua[Ga] = null);
					for (; e === Xa; )
						(Xa = qa[--Qa]), (qa[Qa] = null), (Ka = qa[--Qa]), (qa[Qa] = null), (Ya = qa[--Qa]), (qa[Qa] = null);
				}
				var nl = null,
					rl = null,
					al = !1,
					ll = null;
				function il(e, t) {
					var n = Ou(5, null, null, 0);
					(n.elementType = 'DELETED'),
						(n.stateNode = t),
						(n.return = e),
						null === (t = e.deletions) ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
				}
				function ol(e, t) {
					switch (e.tag) {
						case 5:
							var n = e.type;
							return (
								null !== (t = 1 !== t.nodeType || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t) &&
								((e.stateNode = t), (nl = e), (rl = ua(t.firstChild)), !0)
							);
						case 6:
							return (
								null !== (t = '' === e.pendingProps || 3 !== t.nodeType ? null : t) &&
								((e.stateNode = t), (nl = e), (rl = null), !0)
							);
						case 13:
							return (
								null !== (t = 8 !== t.nodeType ? null : t) &&
								((n = null !== Xa ? { id: Ya, overflow: Ka } : null),
								(e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }),
								((n = Ou(18, null, null, 0)).stateNode = t),
								(n.return = e),
								(e.child = n),
								(nl = e),
								(rl = null),
								!0)
							);
						default:
							return !1;
					}
				}
				function sl(e) {
					return 0 !== (1 & e.mode) && 0 === (128 & e.flags);
				}
				function ul(e) {
					if (al) {
						var t = rl;
						if (t) {
							var n = t;
							if (!ol(e, t)) {
								if (sl(e)) throw Error(l(418));
								t = ua(n.nextSibling);
								var r = nl;
								t && ol(e, t) ? il(r, n) : ((e.flags = (-4097 & e.flags) | 2), (al = !1), (nl = e));
							}
						} else {
							if (sl(e)) throw Error(l(418));
							(e.flags = (-4097 & e.flags) | 2), (al = !1), (nl = e);
						}
					}
				}
				function cl(e) {
					for (e = e.return; null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag; ) e = e.return;
					nl = e;
				}
				function dl(e) {
					if (e !== nl) return !1;
					if (!al) return cl(e), (al = !0), !1;
					var t;
					if (
						((t = 3 !== e.tag) &&
							!(t = 5 !== e.tag) &&
							(t = 'head' !== (t = e.type) && 'body' !== t && !na(e.type, e.memoizedProps)),
						t && (t = rl))
					) {
						if (sl(e)) throw (fl(), Error(l(418)));
						for (; t; ) il(e, t), (t = ua(t.nextSibling));
					}
					if ((cl(e), 13 === e.tag)) {
						if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null)) throw Error(l(317));
						e: {
							for (e = e.nextSibling, t = 0; e; ) {
								if (8 === e.nodeType) {
									var n = e.data;
									if ('/$' === n) {
										if (0 === t) {
											rl = ua(e.nextSibling);
											break e;
										}
										t--;
									} else ('$' !== n && '$!' !== n && '$?' !== n) || t++;
								}
								e = e.nextSibling;
							}
							rl = null;
						}
					} else rl = nl ? ua(e.stateNode.nextSibling) : null;
					return !0;
				}
				function fl() {
					for (var e = rl; e; ) e = ua(e.nextSibling);
				}
				function pl() {
					(rl = nl = null), (al = !1);
				}
				function vl(e) {
					null === ll ? (ll = [e]) : ll.push(e);
				}
				var hl = w.ReactCurrentBatchConfig;
				function ml(e, t) {
					if (e && e.defaultProps) {
						for (var n in ((t = R({}, t)), (e = e.defaultProps))) void 0 === t[n] && (t[n] = e[n]);
						return t;
					}
					return t;
				}
				var gl = Ea(null),
					yl = null,
					bl = null,
					wl = null;
				function Sl() {
					wl = bl = yl = null;
				}
				function kl(e) {
					var t = gl.current;
					Ca(gl), (e._currentValue = t);
				}
				function xl(e, t, n) {
					for (; null !== e; ) {
						var r = e.alternate;
						if (
							((e.childLanes & t) !== t
								? ((e.childLanes |= t), null !== r && (r.childLanes |= t))
								: null !== r && (r.childLanes & t) !== t && (r.childLanes |= t),
							e === n)
						)
							break;
						e = e.return;
					}
				}
				function El(e, t) {
					(yl = e),
						(wl = bl = null),
						null !== (e = e.dependencies) &&
							null !== e.firstContext &&
							(0 !== (e.lanes & t) && (wo = !0), (e.firstContext = null));
				}
				function Cl(e) {
					var t = e._currentValue;
					if (wl !== e)
						if (((e = { context: e, memoizedValue: t, next: null }), null === bl)) {
							if (null === yl) throw Error(l(308));
							(bl = e), (yl.dependencies = { lanes: 0, firstContext: e });
						} else bl = bl.next = e;
					return t;
				}
				var Tl = null;
				function Pl(e) {
					null === Tl ? (Tl = [e]) : Tl.push(e);
				}
				function _l(e, t, n, r) {
					var a = t.interleaved;
					return null === a ? ((n.next = n), Pl(t)) : ((n.next = a.next), (a.next = n)), (t.interleaved = n), Ml(e, r);
				}
				function Ml(e, t) {
					e.lanes |= t;
					var n = e.alternate;
					for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; )
						(e.childLanes |= t), null !== (n = e.alternate) && (n.childLanes |= t), (n = e), (e = e.return);
					return 3 === n.tag ? n.stateNode : null;
				}
				var zl = !1;
				function Ll(e) {
					e.updateQueue = {
						baseState: e.memoizedState,
						firstBaseUpdate: null,
						lastBaseUpdate: null,
						shared: { pending: null, interleaved: null, lanes: 0 },
						effects: null,
					};
				}
				function Ol(e, t) {
					(e = e.updateQueue),
						t.updateQueue === e &&
							(t.updateQueue = {
								baseState: e.baseState,
								firstBaseUpdate: e.firstBaseUpdate,
								lastBaseUpdate: e.lastBaseUpdate,
								shared: e.shared,
								effects: e.effects,
							});
				}
				function Nl(e, t) {
					return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
				}
				function Il(e, t, n) {
					var r = e.updateQueue;
					if (null === r) return null;
					if (((r = r.shared), 0 !== (2 & Ms))) {
						var a = r.pending;
						return null === a ? (t.next = t) : ((t.next = a.next), (a.next = t)), (r.pending = t), Ml(e, n);
					}
					return (
						null === (a = r.interleaved) ? ((t.next = t), Pl(r)) : ((t.next = a.next), (a.next = t)),
						(r.interleaved = t),
						Ml(e, n)
					);
				}
				function jl(e, t, n) {
					if (null !== (t = t.updateQueue) && ((t = t.shared), 0 !== (4194240 & n))) {
						var r = t.lanes;
						(n |= r &= e.pendingLanes), (t.lanes = n), yt(e, n);
					}
				}
				function Dl(e, t) {
					var n = e.updateQueue,
						r = e.alternate;
					if (null !== r && n === (r = r.updateQueue)) {
						var a = null,
							l = null;
						if (null !== (n = n.firstBaseUpdate)) {
							do {
								var i = {
									eventTime: n.eventTime,
									lane: n.lane,
									tag: n.tag,
									payload: n.payload,
									callback: n.callback,
									next: null,
								};
								null === l ? (a = l = i) : (l = l.next = i), (n = n.next);
							} while (null !== n);
							null === l ? (a = l = t) : (l = l.next = t);
						} else a = l = t;
						return (
							(n = {
								baseState: r.baseState,
								firstBaseUpdate: a,
								lastBaseUpdate: l,
								shared: r.shared,
								effects: r.effects,
							}),
							void (e.updateQueue = n)
						);
					}
					null === (e = n.lastBaseUpdate) ? (n.firstBaseUpdate = t) : (e.next = t), (n.lastBaseUpdate = t);
				}
				function Rl(e, t, n, r) {
					var a = e.updateQueue;
					zl = !1;
					var l = a.firstBaseUpdate,
						i = a.lastBaseUpdate,
						o = a.shared.pending;
					if (null !== o) {
						a.shared.pending = null;
						var s = o,
							u = s.next;
						(s.next = null), null === i ? (l = u) : (i.next = u), (i = s);
						var c = e.alternate;
						null !== c &&
							(o = (c = c.updateQueue).lastBaseUpdate) !== i &&
							(null === o ? (c.firstBaseUpdate = u) : (o.next = u), (c.lastBaseUpdate = s));
					}
					if (null !== l) {
						var d = a.baseState;
						for (i = 0, c = u = s = null, o = l; ; ) {
							var f = o.lane,
								p = o.eventTime;
							if ((r & f) === f) {
								null !== c &&
									(c = c.next =
										{ eventTime: p, lane: 0, tag: o.tag, payload: o.payload, callback: o.callback, next: null });
								e: {
									var v = e,
										h = o;
									switch (((f = t), (p = n), h.tag)) {
										case 1:
											if ('function' === typeof (v = h.payload)) {
												d = v.call(p, d, f);
												break e;
											}
											d = v;
											break e;
										case 3:
											v.flags = (-65537 & v.flags) | 128;
										case 0:
											if (null === (f = 'function' === typeof (v = h.payload) ? v.call(p, d, f) : v) || void 0 === f)
												break e;
											d = R({}, d, f);
											break e;
										case 2:
											zl = !0;
									}
								}
								null !== o.callback &&
									0 !== o.lane &&
									((e.flags |= 64), null === (f = a.effects) ? (a.effects = [o]) : f.push(o));
							} else
								(p = { eventTime: p, lane: f, tag: o.tag, payload: o.payload, callback: o.callback, next: null }),
									null === c ? ((u = c = p), (s = d)) : (c = c.next = p),
									(i |= f);
							if (null === (o = o.next)) {
								if (null === (o = a.shared.pending)) break;
								(o = (f = o).next), (f.next = null), (a.lastBaseUpdate = f), (a.shared.pending = null);
							}
						}
						if (
							(null === c && (s = d),
							(a.baseState = s),
							(a.firstBaseUpdate = u),
							(a.lastBaseUpdate = c),
							null !== (t = a.shared.interleaved))
						) {
							a = t;
							do {
								(i |= a.lane), (a = a.next);
							} while (a !== t);
						} else null === l && (a.shared.lanes = 0);
						(Rs |= i), (e.lanes = i), (e.memoizedState = d);
					}
				}
				function Al(e, t, n) {
					if (((e = t.effects), (t.effects = null), null !== e))
						for (t = 0; t < e.length; t++) {
							var r = e[t],
								a = r.callback;
							if (null !== a) {
								if (((r.callback = null), (r = n), 'function' !== typeof a)) throw Error(l(191, a));
								a.call(r);
							}
						}
				}
				var Fl = new r.Component().refs;
				function Bl(e, t, n, r) {
					(n = null === (n = n(r, (t = e.memoizedState))) || void 0 === n ? t : R({}, t, n)),
						(e.memoizedState = n),
						0 === e.lanes && (e.updateQueue.baseState = n);
				}
				var Vl = {
					isMounted: function (e) {
						return !!(e = e._reactInternals) && He(e) === e;
					},
					enqueueSetState: function (e, t, n) {
						e = e._reactInternals;
						var r = tu(),
							a = nu(e),
							l = Nl(r, a);
						(l.payload = t),
							void 0 !== n && null !== n && (l.callback = n),
							null !== (t = Il(e, l, a)) && (ru(t, e, a, r), jl(t, e, a));
					},
					enqueueReplaceState: function (e, t, n) {
						e = e._reactInternals;
						var r = tu(),
							a = nu(e),
							l = Nl(r, a);
						(l.tag = 1),
							(l.payload = t),
							void 0 !== n && null !== n && (l.callback = n),
							null !== (t = Il(e, l, a)) && (ru(t, e, a, r), jl(t, e, a));
					},
					enqueueForceUpdate: function (e, t) {
						e = e._reactInternals;
						var n = tu(),
							r = nu(e),
							a = Nl(n, r);
						(a.tag = 2),
							void 0 !== t && null !== t && (a.callback = t),
							null !== (t = Il(e, a, r)) && (ru(t, e, r, n), jl(t, e, r));
					},
				};
				function Hl(e, t, n, r, a, l, i) {
					return 'function' === typeof (e = e.stateNode).shouldComponentUpdate
						? e.shouldComponentUpdate(r, l, i)
						: !t.prototype || !t.prototype.isPureReactComponent || !sr(n, r) || !sr(a, l);
				}
				function Ul(e, t, n) {
					var r = !1,
						a = Pa,
						l = t.contextType;
					return (
						'object' === typeof l && null !== l
							? (l = Cl(l))
							: ((a = Oa(t) ? za : _a.current),
							  (l = (r = null !== (r = t.contextTypes) && void 0 !== r) ? La(e, a) : Pa)),
						(t = new t(n, l)),
						(e.memoizedState = null !== t.state && void 0 !== t.state ? t.state : null),
						(t.updater = Vl),
						(e.stateNode = t),
						(t._reactInternals = e),
						r &&
							(((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = a),
							(e.__reactInternalMemoizedMaskedChildContext = l)),
						t
					);
				}
				function Gl(e, t, n, r) {
					(e = t.state),
						'function' === typeof t.componentWillReceiveProps && t.componentWillReceiveProps(n, r),
						'function' === typeof t.UNSAFE_componentWillReceiveProps && t.UNSAFE_componentWillReceiveProps(n, r),
						t.state !== e && Vl.enqueueReplaceState(t, t.state, null);
				}
				function Wl(e, t, n, r) {
					var a = e.stateNode;
					(a.props = n), (a.state = e.memoizedState), (a.refs = Fl), Ll(e);
					var l = t.contextType;
					'object' === typeof l && null !== l
						? (a.context = Cl(l))
						: ((l = Oa(t) ? za : _a.current), (a.context = La(e, l))),
						(a.state = e.memoizedState),
						'function' === typeof (l = t.getDerivedStateFromProps) && (Bl(e, t, l, n), (a.state = e.memoizedState)),
						'function' === typeof t.getDerivedStateFromProps ||
							'function' === typeof a.getSnapshotBeforeUpdate ||
							('function' !== typeof a.UNSAFE_componentWillMount && 'function' !== typeof a.componentWillMount) ||
							((t = a.state),
							'function' === typeof a.componentWillMount && a.componentWillMount(),
							'function' === typeof a.UNSAFE_componentWillMount && a.UNSAFE_componentWillMount(),
							t !== a.state && Vl.enqueueReplaceState(a, a.state, null),
							Rl(e, n, a, r),
							(a.state = e.memoizedState)),
						'function' === typeof a.componentDidMount && (e.flags |= 4194308);
				}
				function $l(e, t, n) {
					if (null !== (e = n.ref) && 'function' !== typeof e && 'object' !== typeof e) {
						if (n._owner) {
							if ((n = n._owner)) {
								if (1 !== n.tag) throw Error(l(309));
								var r = n.stateNode;
							}
							if (!r) throw Error(l(147, e));
							var a = r,
								i = '' + e;
							return null !== t && null !== t.ref && 'function' === typeof t.ref && t.ref._stringRef === i
								? t.ref
								: ((t = function (e) {
										var t = a.refs;
										t === Fl && (t = a.refs = {}), null === e ? delete t[i] : (t[i] = e);
								  }),
								  (t._stringRef = i),
								  t);
						}
						if ('string' !== typeof e) throw Error(l(284));
						if (!n._owner) throw Error(l(290, e));
					}
					return e;
				}
				function ql(e, t) {
					throw (
						((e = Object.prototype.toString.call(t)),
						Error(l(31, '[object Object]' === e ? 'object with keys {' + Object.keys(t).join(', ') + '}' : e)))
					);
				}
				function Ql(e) {
					return (0, e._init)(e._payload);
				}
				function Xl(e) {
					function t(t, n) {
						if (e) {
							var r = t.deletions;
							null === r ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n);
						}
					}
					function n(n, r) {
						if (!e) return null;
						for (; null !== r; ) t(n, r), (r = r.sibling);
						return null;
					}
					function r(e, t) {
						for (e = new Map(); null !== t; ) null !== t.key ? e.set(t.key, t) : e.set(t.index, t), (t = t.sibling);
						return e;
					}
					function a(e, t) {
						return ((e = Iu(e, t)).index = 0), (e.sibling = null), e;
					}
					function i(t, n, r) {
						return (
							(t.index = r),
							e
								? null !== (r = t.alternate)
									? (r = r.index) < n
										? ((t.flags |= 2), n)
										: r
									: ((t.flags |= 2), n)
								: ((t.flags |= 1048576), n)
						);
					}
					function o(t) {
						return e && null === t.alternate && (t.flags |= 2), t;
					}
					function s(e, t, n, r) {
						return null === t || 6 !== t.tag
							? (((t = Au(n, e.mode, r)).return = e), t)
							: (((t = a(t, n)).return = e), t);
					}
					function u(e, t, n, r) {
						var l = n.type;
						return l === x
							? d(e, t, n.props.children, r, n.key)
							: null !== t &&
							  (t.elementType === l || ('object' === typeof l && null !== l && l.$$typeof === O && Ql(l) === t.type))
							? (((r = a(t, n.props)).ref = $l(e, t, n)), (r.return = e), r)
							: (((r = ju(n.type, n.key, n.props, null, e.mode, r)).ref = $l(e, t, n)), (r.return = e), r);
					}
					function c(e, t, n, r) {
						return null === t ||
							4 !== t.tag ||
							t.stateNode.containerInfo !== n.containerInfo ||
							t.stateNode.implementation !== n.implementation
							? (((t = Fu(n, e.mode, r)).return = e), t)
							: (((t = a(t, n.children || [])).return = e), t);
					}
					function d(e, t, n, r, l) {
						return null === t || 7 !== t.tag
							? (((t = Du(n, e.mode, r, l)).return = e), t)
							: (((t = a(t, n)).return = e), t);
					}
					function f(e, t, n) {
						if (('string' === typeof t && '' !== t) || 'number' === typeof t)
							return ((t = Au('' + t, e.mode, n)).return = e), t;
						if ('object' === typeof t && null !== t) {
							switch (t.$$typeof) {
								case S:
									return ((n = ju(t.type, t.key, t.props, null, e.mode, n)).ref = $l(e, null, t)), (n.return = e), n;
								case k:
									return ((t = Fu(t, e.mode, n)).return = e), t;
								case O:
									return f(e, (0, t._init)(t._payload), n);
							}
							if (te(t) || j(t)) return ((t = Du(t, e.mode, n, null)).return = e), t;
							ql(e, t);
						}
						return null;
					}
					function p(e, t, n, r) {
						var a = null !== t ? t.key : null;
						if (('string' === typeof n && '' !== n) || 'number' === typeof n)
							return null !== a ? null : s(e, t, '' + n, r);
						if ('object' === typeof n && null !== n) {
							switch (n.$$typeof) {
								case S:
									return n.key === a ? u(e, t, n, r) : null;
								case k:
									return n.key === a ? c(e, t, n, r) : null;
								case O:
									return p(e, t, (a = n._init)(n._payload), r);
							}
							if (te(n) || j(n)) return null !== a ? null : d(e, t, n, r, null);
							ql(e, n);
						}
						return null;
					}
					function v(e, t, n, r, a) {
						if (('string' === typeof r && '' !== r) || 'number' === typeof r)
							return s(t, (e = e.get(n) || null), '' + r, a);
						if ('object' === typeof r && null !== r) {
							switch (r.$$typeof) {
								case S:
									return u(t, (e = e.get(null === r.key ? n : r.key) || null), r, a);
								case k:
									return c(t, (e = e.get(null === r.key ? n : r.key) || null), r, a);
								case O:
									return v(e, t, n, (0, r._init)(r._payload), a);
							}
							if (te(r) || j(r)) return d(t, (e = e.get(n) || null), r, a, null);
							ql(t, r);
						}
						return null;
					}
					function h(a, l, o, s) {
						for (var u = null, c = null, d = l, h = (l = 0), m = null; null !== d && h < o.length; h++) {
							d.index > h ? ((m = d), (d = null)) : (m = d.sibling);
							var g = p(a, d, o[h], s);
							if (null === g) {
								null === d && (d = m);
								break;
							}
							e && d && null === g.alternate && t(a, d),
								(l = i(g, l, h)),
								null === c ? (u = g) : (c.sibling = g),
								(c = g),
								(d = m);
						}
						if (h === o.length) return n(a, d), al && Ja(a, h), u;
						if (null === d) {
							for (; h < o.length; h++)
								null !== (d = f(a, o[h], s)) && ((l = i(d, l, h)), null === c ? (u = d) : (c.sibling = d), (c = d));
							return al && Ja(a, h), u;
						}
						for (d = r(a, d); h < o.length; h++)
							null !== (m = v(d, a, h, o[h], s)) &&
								(e && null !== m.alternate && d.delete(null === m.key ? h : m.key),
								(l = i(m, l, h)),
								null === c ? (u = m) : (c.sibling = m),
								(c = m));
						return (
							e &&
								d.forEach(function (e) {
									return t(a, e);
								}),
							al && Ja(a, h),
							u
						);
					}
					function m(a, o, s, u) {
						var c = j(s);
						if ('function' !== typeof c) throw Error(l(150));
						if (null == (s = c.call(s))) throw Error(l(151));
						for (
							var d = (c = null), h = o, m = (o = 0), g = null, y = s.next();
							null !== h && !y.done;
							m++, y = s.next()
						) {
							h.index > m ? ((g = h), (h = null)) : (g = h.sibling);
							var b = p(a, h, y.value, u);
							if (null === b) {
								null === h && (h = g);
								break;
							}
							e && h && null === b.alternate && t(a, h),
								(o = i(b, o, m)),
								null === d ? (c = b) : (d.sibling = b),
								(d = b),
								(h = g);
						}
						if (y.done) return n(a, h), al && Ja(a, m), c;
						if (null === h) {
							for (; !y.done; m++, y = s.next())
								null !== (y = f(a, y.value, u)) && ((o = i(y, o, m)), null === d ? (c = y) : (d.sibling = y), (d = y));
							return al && Ja(a, m), c;
						}
						for (h = r(a, h); !y.done; m++, y = s.next())
							null !== (y = v(h, a, m, y.value, u)) &&
								(e && null !== y.alternate && h.delete(null === y.key ? m : y.key),
								(o = i(y, o, m)),
								null === d ? (c = y) : (d.sibling = y),
								(d = y));
						return (
							e &&
								h.forEach(function (e) {
									return t(a, e);
								}),
							al && Ja(a, m),
							c
						);
					}
					return function e(r, l, i, s) {
						if (
							('object' === typeof i && null !== i && i.type === x && null === i.key && (i = i.props.children),
							'object' === typeof i && null !== i)
						) {
							switch (i.$$typeof) {
								case S:
									e: {
										for (var u = i.key, c = l; null !== c; ) {
											if (c.key === u) {
												if ((u = i.type) === x) {
													if (7 === c.tag) {
														n(r, c.sibling), ((l = a(c, i.props.children)).return = r), (r = l);
														break e;
													}
												} else if (
													c.elementType === u ||
													('object' === typeof u && null !== u && u.$$typeof === O && Ql(u) === c.type)
												) {
													n(r, c.sibling), ((l = a(c, i.props)).ref = $l(r, c, i)), (l.return = r), (r = l);
													break e;
												}
												n(r, c);
												break;
											}
											t(r, c), (c = c.sibling);
										}
										i.type === x
											? (((l = Du(i.props.children, r.mode, s, i.key)).return = r), (r = l))
											: (((s = ju(i.type, i.key, i.props, null, r.mode, s)).ref = $l(r, l, i)),
											  (s.return = r),
											  (r = s));
									}
									return o(r);
								case k:
									e: {
										for (c = i.key; null !== l; ) {
											if (l.key === c) {
												if (
													4 === l.tag &&
													l.stateNode.containerInfo === i.containerInfo &&
													l.stateNode.implementation === i.implementation
												) {
													n(r, l.sibling), ((l = a(l, i.children || [])).return = r), (r = l);
													break e;
												}
												n(r, l);
												break;
											}
											t(r, l), (l = l.sibling);
										}
										((l = Fu(i, r.mode, s)).return = r), (r = l);
									}
									return o(r);
								case O:
									return e(r, l, (c = i._init)(i._payload), s);
							}
							if (te(i)) return h(r, l, i, s);
							if (j(i)) return m(r, l, i, s);
							ql(r, i);
						}
						return ('string' === typeof i && '' !== i) || 'number' === typeof i
							? ((i = '' + i),
							  null !== l && 6 === l.tag
									? (n(r, l.sibling), ((l = a(l, i)).return = r), (r = l))
									: (n(r, l), ((l = Au(i, r.mode, s)).return = r), (r = l)),
							  o(r))
							: n(r, l);
					};
				}
				var Yl = Xl(!0),
					Kl = Xl(!1),
					Jl = {},
					Zl = Ea(Jl),
					ei = Ea(Jl),
					ti = Ea(Jl);
				function ni(e) {
					if (e === Jl) throw Error(l(174));
					return e;
				}
				function ri(e, t) {
					switch ((Ta(ti, t), Ta(ei, e), Ta(Zl, Jl), (e = t.nodeType))) {
						case 9:
						case 11:
							t = (t = t.documentElement) ? t.namespaceURI : se(null, '');
							break;
						default:
							t = se((t = (e = 8 === e ? t.parentNode : t).namespaceURI || null), (e = e.tagName));
					}
					Ca(Zl), Ta(Zl, t);
				}
				function ai() {
					Ca(Zl), Ca(ei), Ca(ti);
				}
				function li(e) {
					ni(ti.current);
					var t = ni(Zl.current),
						n = se(t, e.type);
					t !== n && (Ta(ei, e), Ta(Zl, n));
				}
				function ii(e) {
					ei.current === e && (Ca(Zl), Ca(ei));
				}
				var oi = Ea(0);
				function si(e) {
					for (var t = e; null !== t; ) {
						if (13 === t.tag) {
							var n = t.memoizedState;
							if (null !== n && (null === (n = n.dehydrated) || '$?' === n.data || '$!' === n.data)) return t;
						} else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
							if (0 !== (128 & t.flags)) return t;
						} else if (null !== t.child) {
							(t.child.return = t), (t = t.child);
							continue;
						}
						if (t === e) break;
						for (; null === t.sibling; ) {
							if (null === t.return || t.return === e) return null;
							t = t.return;
						}
						(t.sibling.return = t.return), (t = t.sibling);
					}
					return null;
				}
				var ui = [];
				function ci() {
					for (var e = 0; e < ui.length; e++) ui[e]._workInProgressVersionPrimary = null;
					ui.length = 0;
				}
				var di = w.ReactCurrentDispatcher,
					fi = w.ReactCurrentBatchConfig,
					pi = 0,
					vi = null,
					hi = null,
					mi = null,
					gi = !1,
					yi = !1,
					bi = 0,
					wi = 0;
				function Si() {
					throw Error(l(321));
				}
				function ki(e, t) {
					if (null === t) return !1;
					for (var n = 0; n < t.length && n < e.length; n++) if (!or(e[n], t[n])) return !1;
					return !0;
				}
				function xi(e, t, n, r, a, i) {
					if (
						((pi = i),
						(vi = t),
						(t.memoizedState = null),
						(t.updateQueue = null),
						(t.lanes = 0),
						(di.current = null === e || null === e.memoizedState ? io : oo),
						(e = n(r, a)),
						yi)
					) {
						i = 0;
						do {
							if (((yi = !1), (bi = 0), 25 <= i)) throw Error(l(301));
							(i += 1), (mi = hi = null), (t.updateQueue = null), (di.current = so), (e = n(r, a));
						} while (yi);
					}
					if (((di.current = lo), (t = null !== hi && null !== hi.next), (pi = 0), (mi = hi = vi = null), (gi = !1), t))
						throw Error(l(300));
					return e;
				}
				function Ei() {
					var e = 0 !== bi;
					return (bi = 0), e;
				}
				function Ci() {
					var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
					return null === mi ? (vi.memoizedState = mi = e) : (mi = mi.next = e), mi;
				}
				function Ti() {
					if (null === hi) {
						var e = vi.alternate;
						e = null !== e ? e.memoizedState : null;
					} else e = hi.next;
					var t = null === mi ? vi.memoizedState : mi.next;
					if (null !== t) (mi = t), (hi = e);
					else {
						if (null === e) throw Error(l(310));
						(e = {
							memoizedState: (hi = e).memoizedState,
							baseState: hi.baseState,
							baseQueue: hi.baseQueue,
							queue: hi.queue,
							next: null,
						}),
							null === mi ? (vi.memoizedState = mi = e) : (mi = mi.next = e);
					}
					return mi;
				}
				function Pi(e, t) {
					return 'function' === typeof t ? t(e) : t;
				}
				function _i(e) {
					var t = Ti(),
						n = t.queue;
					if (null === n) throw Error(l(311));
					n.lastRenderedReducer = e;
					var r = hi,
						a = r.baseQueue,
						i = n.pending;
					if (null !== i) {
						if (null !== a) {
							var o = a.next;
							(a.next = i.next), (i.next = o);
						}
						(r.baseQueue = a = i), (n.pending = null);
					}
					if (null !== a) {
						(i = a.next), (r = r.baseState);
						var s = (o = null),
							u = null,
							c = i;
						do {
							var d = c.lane;
							if ((pi & d) === d)
								null !== u &&
									(u = u.next =
										{
											lane: 0,
											action: c.action,
											hasEagerState: c.hasEagerState,
											eagerState: c.eagerState,
											next: null,
										}),
									(r = c.hasEagerState ? c.eagerState : e(r, c.action));
							else {
								var f = {
									lane: d,
									action: c.action,
									hasEagerState: c.hasEagerState,
									eagerState: c.eagerState,
									next: null,
								};
								null === u ? ((s = u = f), (o = r)) : (u = u.next = f), (vi.lanes |= d), (Rs |= d);
							}
							c = c.next;
						} while (null !== c && c !== i);
						null === u ? (o = r) : (u.next = s),
							or(r, t.memoizedState) || (wo = !0),
							(t.memoizedState = r),
							(t.baseState = o),
							(t.baseQueue = u),
							(n.lastRenderedState = r);
					}
					if (null !== (e = n.interleaved)) {
						a = e;
						do {
							(i = a.lane), (vi.lanes |= i), (Rs |= i), (a = a.next);
						} while (a !== e);
					} else null === a && (n.lanes = 0);
					return [t.memoizedState, n.dispatch];
				}
				function Mi(e) {
					var t = Ti(),
						n = t.queue;
					if (null === n) throw Error(l(311));
					n.lastRenderedReducer = e;
					var r = n.dispatch,
						a = n.pending,
						i = t.memoizedState;
					if (null !== a) {
						n.pending = null;
						var o = (a = a.next);
						do {
							(i = e(i, o.action)), (o = o.next);
						} while (o !== a);
						or(i, t.memoizedState) || (wo = !0),
							(t.memoizedState = i),
							null === t.baseQueue && (t.baseState = i),
							(n.lastRenderedState = i);
					}
					return [i, r];
				}
				function zi() {}
				function Li(e, t) {
					var n = vi,
						r = Ti(),
						a = t(),
						i = !or(r.memoizedState, a);
					if (
						(i && ((r.memoizedState = a), (wo = !0)),
						(r = r.queue),
						Ui(Ii.bind(null, n, r, e), [e]),
						r.getSnapshot !== t || i || (null !== mi && 1 & mi.memoizedState.tag))
					) {
						if (((n.flags |= 2048), Ai(9, Ni.bind(null, n, r, a, t), void 0, null), null === zs)) throw Error(l(349));
						0 !== (30 & pi) || Oi(n, t, a);
					}
					return a;
				}
				function Oi(e, t, n) {
					(e.flags |= 16384),
						(e = { getSnapshot: t, value: n }),
						null === (t = vi.updateQueue)
							? ((t = { lastEffect: null, stores: null }), (vi.updateQueue = t), (t.stores = [e]))
							: null === (n = t.stores)
							? (t.stores = [e])
							: n.push(e);
				}
				function Ni(e, t, n, r) {
					(t.value = n), (t.getSnapshot = r), ji(t) && Di(e);
				}
				function Ii(e, t, n) {
					return n(function () {
						ji(t) && Di(e);
					});
				}
				function ji(e) {
					var t = e.getSnapshot;
					e = e.value;
					try {
						var n = t();
						return !or(e, n);
					} catch (r) {
						return !0;
					}
				}
				function Di(e) {
					var t = Ml(e, 1);
					null !== t && ru(t, e, 1, -1);
				}
				function Ri(e) {
					var t = Ci();
					return (
						'function' === typeof e && (e = e()),
						(t.memoizedState = t.baseState = e),
						(e = {
							pending: null,
							interleaved: null,
							lanes: 0,
							dispatch: null,
							lastRenderedReducer: Pi,
							lastRenderedState: e,
						}),
						(t.queue = e),
						(e = e.dispatch = to.bind(null, vi, e)),
						[t.memoizedState, e]
					);
				}
				function Ai(e, t, n, r) {
					return (
						(e = { tag: e, create: t, destroy: n, deps: r, next: null }),
						null === (t = vi.updateQueue)
							? ((t = { lastEffect: null, stores: null }), (vi.updateQueue = t), (t.lastEffect = e.next = e))
							: null === (n = t.lastEffect)
							? (t.lastEffect = e.next = e)
							: ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
						e
					);
				}
				function Fi() {
					return Ti().memoizedState;
				}
				function Bi(e, t, n, r) {
					var a = Ci();
					(vi.flags |= e), (a.memoizedState = Ai(1 | t, n, void 0, void 0 === r ? null : r));
				}
				function Vi(e, t, n, r) {
					var a = Ti();
					r = void 0 === r ? null : r;
					var l = void 0;
					if (null !== hi) {
						var i = hi.memoizedState;
						if (((l = i.destroy), null !== r && ki(r, i.deps))) return void (a.memoizedState = Ai(t, n, l, r));
					}
					(vi.flags |= e), (a.memoizedState = Ai(1 | t, n, l, r));
				}
				function Hi(e, t) {
					return Bi(8390656, 8, e, t);
				}
				function Ui(e, t) {
					return Vi(2048, 8, e, t);
				}
				function Gi(e, t) {
					return Vi(4, 2, e, t);
				}
				function Wi(e, t) {
					return Vi(4, 4, e, t);
				}
				function $i(e, t) {
					return 'function' === typeof t
						? ((e = e()),
						  t(e),
						  function () {
								t(null);
						  })
						: null !== t && void 0 !== t
						? ((e = e()),
						  (t.current = e),
						  function () {
								t.current = null;
						  })
						: void 0;
				}
				function qi(e, t, n) {
					return (n = null !== n && void 0 !== n ? n.concat([e]) : null), Vi(4, 4, $i.bind(null, t, e), n);
				}
				function Qi() {}
				function Xi(e, t) {
					var n = Ti();
					t = void 0 === t ? null : t;
					var r = n.memoizedState;
					return null !== r && null !== t && ki(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
				}
				function Yi(e, t) {
					var n = Ti();
					t = void 0 === t ? null : t;
					var r = n.memoizedState;
					return null !== r && null !== t && ki(t, r[1]) ? r[0] : ((e = e()), (n.memoizedState = [e, t]), e);
				}
				function Ki(e, t, n) {
					return 0 === (21 & pi)
						? (e.baseState && ((e.baseState = !1), (wo = !0)), (e.memoizedState = n))
						: (or(n, t) || ((n = ht()), (vi.lanes |= n), (Rs |= n), (e.baseState = !0)), t);
				}
				function Ji(e, t) {
					var n = bt;
					(bt = 0 !== n && 4 > n ? n : 4), e(!0);
					var r = fi.transition;
					fi.transition = {};
					try {
						e(!1), t();
					} finally {
						(bt = n), (fi.transition = r);
					}
				}
				function Zi() {
					return Ti().memoizedState;
				}
				function eo(e, t, n) {
					var r = nu(e);
					if (((n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }), no(e))) ro(t, n);
					else if (null !== (n = _l(e, t, n, r))) {
						ru(n, e, r, tu()), ao(n, t, r);
					}
				}
				function to(e, t, n) {
					var r = nu(e),
						a = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
					if (no(e)) ro(t, a);
					else {
						var l = e.alternate;
						if (0 === e.lanes && (null === l || 0 === l.lanes) && null !== (l = t.lastRenderedReducer))
							try {
								var i = t.lastRenderedState,
									o = l(i, n);
								if (((a.hasEagerState = !0), (a.eagerState = o), or(o, i))) {
									var s = t.interleaved;
									return (
										null === s ? ((a.next = a), Pl(t)) : ((a.next = s.next), (s.next = a)), void (t.interleaved = a)
									);
								}
							} catch (u) {}
						null !== (n = _l(e, t, a, r)) && (ru(n, e, r, (a = tu())), ao(n, t, r));
					}
				}
				function no(e) {
					var t = e.alternate;
					return e === vi || (null !== t && t === vi);
				}
				function ro(e, t) {
					yi = gi = !0;
					var n = e.pending;
					null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t);
				}
				function ao(e, t, n) {
					if (0 !== (4194240 & n)) {
						var r = t.lanes;
						(n |= r &= e.pendingLanes), (t.lanes = n), yt(e, n);
					}
				}
				var lo = {
						readContext: Cl,
						useCallback: Si,
						useContext: Si,
						useEffect: Si,
						useImperativeHandle: Si,
						useInsertionEffect: Si,
						useLayoutEffect: Si,
						useMemo: Si,
						useReducer: Si,
						useRef: Si,
						useState: Si,
						useDebugValue: Si,
						useDeferredValue: Si,
						useTransition: Si,
						useMutableSource: Si,
						useSyncExternalStore: Si,
						useId: Si,
						unstable_isNewReconciler: !1,
					},
					io = {
						readContext: Cl,
						useCallback: function (e, t) {
							return (Ci().memoizedState = [e, void 0 === t ? null : t]), e;
						},
						useContext: Cl,
						useEffect: Hi,
						useImperativeHandle: function (e, t, n) {
							return (n = null !== n && void 0 !== n ? n.concat([e]) : null), Bi(4194308, 4, $i.bind(null, t, e), n);
						},
						useLayoutEffect: function (e, t) {
							return Bi(4194308, 4, e, t);
						},
						useInsertionEffect: function (e, t) {
							return Bi(4, 2, e, t);
						},
						useMemo: function (e, t) {
							var n = Ci();
							return (t = void 0 === t ? null : t), (e = e()), (n.memoizedState = [e, t]), e;
						},
						useReducer: function (e, t, n) {
							var r = Ci();
							return (
								(t = void 0 !== n ? n(t) : t),
								(r.memoizedState = r.baseState = t),
								(e = {
									pending: null,
									interleaved: null,
									lanes: 0,
									dispatch: null,
									lastRenderedReducer: e,
									lastRenderedState: t,
								}),
								(r.queue = e),
								(e = e.dispatch = eo.bind(null, vi, e)),
								[r.memoizedState, e]
							);
						},
						useRef: function (e) {
							return (e = { current: e }), (Ci().memoizedState = e);
						},
						useState: Ri,
						useDebugValue: Qi,
						useDeferredValue: function (e) {
							return (Ci().memoizedState = e);
						},
						useTransition: function () {
							var e = Ri(!1),
								t = e[0];
							return (e = Ji.bind(null, e[1])), (Ci().memoizedState = e), [t, e];
						},
						useMutableSource: function () {},
						useSyncExternalStore: function (e, t, n) {
							var r = vi,
								a = Ci();
							if (al) {
								if (void 0 === n) throw Error(l(407));
								n = n();
							} else {
								if (((n = t()), null === zs)) throw Error(l(349));
								0 !== (30 & pi) || Oi(r, t, n);
							}
							a.memoizedState = n;
							var i = { value: n, getSnapshot: t };
							return (
								(a.queue = i),
								Hi(Ii.bind(null, r, i, e), [e]),
								(r.flags |= 2048),
								Ai(9, Ni.bind(null, r, i, n, t), void 0, null),
								n
							);
						},
						useId: function () {
							var e = Ci(),
								t = zs.identifierPrefix;
							if (al) {
								var n = Ka;
								(t = ':' + t + 'R' + (n = (Ya & ~(1 << (32 - it(Ya) - 1))).toString(32) + n)),
									0 < (n = bi++) && (t += 'H' + n.toString(32)),
									(t += ':');
							} else t = ':' + t + 'r' + (n = wi++).toString(32) + ':';
							return (e.memoizedState = t);
						},
						unstable_isNewReconciler: !1,
					},
					oo = {
						readContext: Cl,
						useCallback: Xi,
						useContext: Cl,
						useEffect: Ui,
						useImperativeHandle: qi,
						useInsertionEffect: Gi,
						useLayoutEffect: Wi,
						useMemo: Yi,
						useReducer: _i,
						useRef: Fi,
						useState: function () {
							return _i(Pi);
						},
						useDebugValue: Qi,
						useDeferredValue: function (e) {
							return Ki(Ti(), hi.memoizedState, e);
						},
						useTransition: function () {
							return [_i(Pi)[0], Ti().memoizedState];
						},
						useMutableSource: zi,
						useSyncExternalStore: Li,
						useId: Zi,
						unstable_isNewReconciler: !1,
					},
					so = {
						readContext: Cl,
						useCallback: Xi,
						useContext: Cl,
						useEffect: Ui,
						useImperativeHandle: qi,
						useInsertionEffect: Gi,
						useLayoutEffect: Wi,
						useMemo: Yi,
						useReducer: Mi,
						useRef: Fi,
						useState: function () {
							return Mi(Pi);
						},
						useDebugValue: Qi,
						useDeferredValue: function (e) {
							var t = Ti();
							return null === hi ? (t.memoizedState = e) : Ki(t, hi.memoizedState, e);
						},
						useTransition: function () {
							return [Mi(Pi)[0], Ti().memoizedState];
						},
						useMutableSource: zi,
						useSyncExternalStore: Li,
						useId: Zi,
						unstable_isNewReconciler: !1,
					};
				function uo(e, t) {
					try {
						var n = '',
							r = t;
						do {
							(n += V(r)), (r = r.return);
						} while (r);
						var a = n;
					} catch (l) {
						a = '\nError generating stack: ' + l.message + '\n' + l.stack;
					}
					return { value: e, source: t, stack: a, digest: null };
				}
				function co(e, t, n) {
					return { value: e, source: null, stack: null != n ? n : null, digest: null != t ? t : null };
				}
				function fo(e, t) {
					try {
						console.error(t.value);
					} catch (n) {
						setTimeout(function () {
							throw n;
						});
					}
				}
				var po = 'function' === typeof WeakMap ? WeakMap : Map;
				function vo(e, t, n) {
					((n = Nl(-1, n)).tag = 3), (n.payload = { element: null });
					var r = t.value;
					return (
						(n.callback = function () {
							Ws || ((Ws = !0), ($s = r)), fo(0, t);
						}),
						n
					);
				}
				function ho(e, t, n) {
					(n = Nl(-1, n)).tag = 3;
					var r = e.type.getDerivedStateFromError;
					if ('function' === typeof r) {
						var a = t.value;
						(n.payload = function () {
							return r(a);
						}),
							(n.callback = function () {
								fo(0, t);
							});
					}
					var l = e.stateNode;
					return (
						null !== l &&
							'function' === typeof l.componentDidCatch &&
							(n.callback = function () {
								fo(0, t), 'function' !== typeof r && (null === qs ? (qs = new Set([this])) : qs.add(this));
								var e = t.stack;
								this.componentDidCatch(t.value, { componentStack: null !== e ? e : '' });
							}),
						n
					);
				}
				function mo(e, t, n) {
					var r = e.pingCache;
					if (null === r) {
						r = e.pingCache = new po();
						var a = new Set();
						r.set(t, a);
					} else void 0 === (a = r.get(t)) && ((a = new Set()), r.set(t, a));
					a.has(n) || (a.add(n), (e = Tu.bind(null, e, t, n)), t.then(e, e));
				}
				function go(e) {
					do {
						var t;
						if (((t = 13 === e.tag) && (t = null === (t = e.memoizedState) || null !== t.dehydrated), t)) return e;
						e = e.return;
					} while (null !== e);
					return null;
				}
				function yo(e, t, n, r, a) {
					return 0 === (1 & e.mode)
						? (e === t
								? (e.flags |= 65536)
								: ((e.flags |= 128),
								  (n.flags |= 131072),
								  (n.flags &= -52805),
								  1 === n.tag && (null === n.alternate ? (n.tag = 17) : (((t = Nl(-1, 1)).tag = 2), Il(n, t, 1))),
								  (n.lanes |= 1)),
						  e)
						: ((e.flags |= 65536), (e.lanes = a), e);
				}
				var bo = w.ReactCurrentOwner,
					wo = !1;
				function So(e, t, n, r) {
					t.child = null === e ? Kl(t, null, n, r) : Yl(t, e.child, n, r);
				}
				function ko(e, t, n, r, a) {
					n = n.render;
					var l = t.ref;
					return (
						El(t, a),
						(r = xi(e, t, n, r, l, a)),
						(n = Ei()),
						null === e || wo
							? (al && n && el(t), (t.flags |= 1), So(e, t, r, a), t.child)
							: ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~a), Wo(e, t, a))
					);
				}
				function xo(e, t, n, r, a) {
					if (null === e) {
						var l = n.type;
						return 'function' !== typeof l ||
							Nu(l) ||
							void 0 !== l.defaultProps ||
							null !== n.compare ||
							void 0 !== n.defaultProps
							? (((e = ju(n.type, null, r, t, t.mode, a)).ref = t.ref), (e.return = t), (t.child = e))
							: ((t.tag = 15), (t.type = l), Eo(e, t, l, r, a));
					}
					if (((l = e.child), 0 === (e.lanes & a))) {
						var i = l.memoizedProps;
						if ((n = null !== (n = n.compare) ? n : sr)(i, r) && e.ref === t.ref) return Wo(e, t, a);
					}
					return (t.flags |= 1), ((e = Iu(l, r)).ref = t.ref), (e.return = t), (t.child = e);
				}
				function Eo(e, t, n, r, a) {
					if (null !== e) {
						var l = e.memoizedProps;
						if (sr(l, r) && e.ref === t.ref) {
							if (((wo = !1), (t.pendingProps = r = l), 0 === (e.lanes & a))) return (t.lanes = e.lanes), Wo(e, t, a);
							0 !== (131072 & e.flags) && (wo = !0);
						}
					}
					return Po(e, t, n, r, a);
				}
				function Co(e, t, n) {
					var r = t.pendingProps,
						a = r.children,
						l = null !== e ? e.memoizedState : null;
					if ('hidden' === r.mode)
						if (0 === (1 & t.mode))
							(t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }), Ta(Is, Ns), (Ns |= n);
						else {
							if (0 === (1073741824 & n))
								return (
									(e = null !== l ? l.baseLanes | n : n),
									(t.lanes = t.childLanes = 1073741824),
									(t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }),
									(t.updateQueue = null),
									Ta(Is, Ns),
									(Ns |= e),
									null
								);
							(t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
								(r = null !== l ? l.baseLanes : n),
								Ta(Is, Ns),
								(Ns |= r);
						}
					else null !== l ? ((r = l.baseLanes | n), (t.memoizedState = null)) : (r = n), Ta(Is, Ns), (Ns |= r);
					return So(e, t, a, n), t.child;
				}
				function To(e, t) {
					var n = t.ref;
					((null === e && null !== n) || (null !== e && e.ref !== n)) && ((t.flags |= 512), (t.flags |= 2097152));
				}
				function Po(e, t, n, r, a) {
					var l = Oa(n) ? za : _a.current;
					return (
						(l = La(t, l)),
						El(t, a),
						(n = xi(e, t, n, r, l, a)),
						(r = Ei()),
						null === e || wo
							? (al && r && el(t), (t.flags |= 1), So(e, t, n, a), t.child)
							: ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~a), Wo(e, t, a))
					);
				}
				function _o(e, t, n, r, a) {
					if (Oa(n)) {
						var l = !0;
						Da(t);
					} else l = !1;
					if ((El(t, a), null === t.stateNode)) Go(e, t), Ul(t, n, r), Wl(t, n, r, a), (r = !0);
					else if (null === e) {
						var i = t.stateNode,
							o = t.memoizedProps;
						i.props = o;
						var s = i.context,
							u = n.contextType;
						'object' === typeof u && null !== u ? (u = Cl(u)) : (u = La(t, (u = Oa(n) ? za : _a.current)));
						var c = n.getDerivedStateFromProps,
							d = 'function' === typeof c || 'function' === typeof i.getSnapshotBeforeUpdate;
						d ||
							('function' !== typeof i.UNSAFE_componentWillReceiveProps &&
								'function' !== typeof i.componentWillReceiveProps) ||
							((o !== r || s !== u) && Gl(t, i, r, u)),
							(zl = !1);
						var f = t.memoizedState;
						(i.state = f),
							Rl(t, r, i, a),
							(s = t.memoizedState),
							o !== r || f !== s || Ma.current || zl
								? ('function' === typeof c && (Bl(t, n, c, r), (s = t.memoizedState)),
								  (o = zl || Hl(t, n, o, r, f, s, u))
										? (d ||
												('function' !== typeof i.UNSAFE_componentWillMount &&
													'function' !== typeof i.componentWillMount) ||
												('function' === typeof i.componentWillMount && i.componentWillMount(),
												'function' === typeof i.UNSAFE_componentWillMount && i.UNSAFE_componentWillMount()),
										  'function' === typeof i.componentDidMount && (t.flags |= 4194308))
										: ('function' === typeof i.componentDidMount && (t.flags |= 4194308),
										  (t.memoizedProps = r),
										  (t.memoizedState = s)),
								  (i.props = r),
								  (i.state = s),
								  (i.context = u),
								  (r = o))
								: ('function' === typeof i.componentDidMount && (t.flags |= 4194308), (r = !1));
					} else {
						(i = t.stateNode),
							Ol(e, t),
							(o = t.memoizedProps),
							(u = t.type === t.elementType ? o : ml(t.type, o)),
							(i.props = u),
							(d = t.pendingProps),
							(f = i.context),
							'object' === typeof (s = n.contextType) && null !== s
								? (s = Cl(s))
								: (s = La(t, (s = Oa(n) ? za : _a.current)));
						var p = n.getDerivedStateFromProps;
						(c = 'function' === typeof p || 'function' === typeof i.getSnapshotBeforeUpdate) ||
							('function' !== typeof i.UNSAFE_componentWillReceiveProps &&
								'function' !== typeof i.componentWillReceiveProps) ||
							((o !== d || f !== s) && Gl(t, i, r, s)),
							(zl = !1),
							(f = t.memoizedState),
							(i.state = f),
							Rl(t, r, i, a);
						var v = t.memoizedState;
						o !== d || f !== v || Ma.current || zl
							? ('function' === typeof p && (Bl(t, n, p, r), (v = t.memoizedState)),
							  (u = zl || Hl(t, n, u, r, f, v, s) || !1)
									? (c ||
											('function' !== typeof i.UNSAFE_componentWillUpdate &&
												'function' !== typeof i.componentWillUpdate) ||
											('function' === typeof i.componentWillUpdate && i.componentWillUpdate(r, v, s),
											'function' === typeof i.UNSAFE_componentWillUpdate && i.UNSAFE_componentWillUpdate(r, v, s)),
									  'function' === typeof i.componentDidUpdate && (t.flags |= 4),
									  'function' === typeof i.getSnapshotBeforeUpdate && (t.flags |= 1024))
									: ('function' !== typeof i.componentDidUpdate ||
											(o === e.memoizedProps && f === e.memoizedState) ||
											(t.flags |= 4),
									  'function' !== typeof i.getSnapshotBeforeUpdate ||
											(o === e.memoizedProps && f === e.memoizedState) ||
											(t.flags |= 1024),
									  (t.memoizedProps = r),
									  (t.memoizedState = v)),
							  (i.props = r),
							  (i.state = v),
							  (i.context = s),
							  (r = u))
							: ('function' !== typeof i.componentDidUpdate ||
									(o === e.memoizedProps && f === e.memoizedState) ||
									(t.flags |= 4),
							  'function' !== typeof i.getSnapshotBeforeUpdate ||
									(o === e.memoizedProps && f === e.memoizedState) ||
									(t.flags |= 1024),
							  (r = !1));
					}
					return Mo(e, t, n, r, l, a);
				}
				function Mo(e, t, n, r, a, l) {
					To(e, t);
					var i = 0 !== (128 & t.flags);
					if (!r && !i) return a && Ra(t, n, !1), Wo(e, t, l);
					(r = t.stateNode), (bo.current = t);
					var o = i && 'function' !== typeof n.getDerivedStateFromError ? null : r.render();
					return (
						(t.flags |= 1),
						null !== e && i ? ((t.child = Yl(t, e.child, null, l)), (t.child = Yl(t, null, o, l))) : So(e, t, o, l),
						(t.memoizedState = r.state),
						a && Ra(t, n, !0),
						t.child
					);
				}
				function zo(e) {
					var t = e.stateNode;
					t.pendingContext
						? Ia(0, t.pendingContext, t.pendingContext !== t.context)
						: t.context && Ia(0, t.context, !1),
						ri(e, t.containerInfo);
				}
				function Lo(e, t, n, r, a) {
					return pl(), vl(a), (t.flags |= 256), So(e, t, n, r), t.child;
				}
				var Oo,
					No,
					Io,
					jo,
					Do = { dehydrated: null, treeContext: null, retryLane: 0 };
				function Ro(e) {
					return { baseLanes: e, cachePool: null, transitions: null };
				}
				function Ao(e, t, n) {
					var r,
						a = t.pendingProps,
						i = oi.current,
						o = !1,
						s = 0 !== (128 & t.flags);
					if (
						((r = s) || (r = (null === e || null !== e.memoizedState) && 0 !== (2 & i)),
						r ? ((o = !0), (t.flags &= -129)) : (null !== e && null === e.memoizedState) || (i |= 1),
						Ta(oi, 1 & i),
						null === e)
					)
						return (
							ul(t),
							null !== (e = t.memoizedState) && null !== (e = e.dehydrated)
								? (0 === (1 & t.mode) ? (t.lanes = 1) : '$!' === e.data ? (t.lanes = 8) : (t.lanes = 1073741824), null)
								: ((s = a.children),
								  (e = a.fallback),
								  o
										? ((a = t.mode),
										  (o = t.child),
										  (s = { mode: 'hidden', children: s }),
										  0 === (1 & a) && null !== o
												? ((o.childLanes = 0), (o.pendingProps = s))
												: (o = Ru(s, a, 0, null)),
										  (e = Du(e, a, n, null)),
										  (o.return = t),
										  (e.return = t),
										  (o.sibling = e),
										  (t.child = o),
										  (t.child.memoizedState = Ro(n)),
										  (t.memoizedState = Do),
										  e)
										: Fo(t, s))
						);
					if (null !== (i = e.memoizedState) && null !== (r = i.dehydrated))
						return (function (e, t, n, r, a, i, o) {
							if (n)
								return 256 & t.flags
									? ((t.flags &= -257), Bo(e, t, o, (r = co(Error(l(422))))))
									: null !== t.memoizedState
									? ((t.child = e.child), (t.flags |= 128), null)
									: ((i = r.fallback),
									  (a = t.mode),
									  (r = Ru({ mode: 'visible', children: r.children }, a, 0, null)),
									  ((i = Du(i, a, o, null)).flags |= 2),
									  (r.return = t),
									  (i.return = t),
									  (r.sibling = i),
									  (t.child = r),
									  0 !== (1 & t.mode) && Yl(t, e.child, null, o),
									  (t.child.memoizedState = Ro(o)),
									  (t.memoizedState = Do),
									  i);
							if (0 === (1 & t.mode)) return Bo(e, t, o, null);
							if ('$!' === a.data) {
								if ((r = a.nextSibling && a.nextSibling.dataset)) var s = r.dgst;
								return (r = s), Bo(e, t, o, (r = co((i = Error(l(419))), r, void 0)));
							}
							if (((s = 0 !== (o & e.childLanes)), wo || s)) {
								if (null !== (r = zs)) {
									switch (o & -o) {
										case 4:
											a = 2;
											break;
										case 16:
											a = 8;
											break;
										case 64:
										case 128:
										case 256:
										case 512:
										case 1024:
										case 2048:
										case 4096:
										case 8192:
										case 16384:
										case 32768:
										case 65536:
										case 131072:
										case 262144:
										case 524288:
										case 1048576:
										case 2097152:
										case 4194304:
										case 8388608:
										case 16777216:
										case 33554432:
										case 67108864:
											a = 32;
											break;
										case 536870912:
											a = 268435456;
											break;
										default:
											a = 0;
									}
									0 !== (a = 0 !== (a & (r.suspendedLanes | o)) ? 0 : a) &&
										a !== i.retryLane &&
										((i.retryLane = a), Ml(e, a), ru(r, e, a, -1));
								}
								return mu(), Bo(e, t, o, (r = co(Error(l(421)))));
							}
							return '$?' === a.data
								? ((t.flags |= 128), (t.child = e.child), (t = _u.bind(null, e)), (a._reactRetry = t), null)
								: ((e = i.treeContext),
								  (rl = ua(a.nextSibling)),
								  (nl = t),
								  (al = !0),
								  (ll = null),
								  null !== e &&
										((qa[Qa++] = Ya), (qa[Qa++] = Ka), (qa[Qa++] = Xa), (Ya = e.id), (Ka = e.overflow), (Xa = t)),
								  (t = Fo(t, r.children)),
								  (t.flags |= 4096),
								  t);
						})(e, t, s, a, r, i, n);
					if (o) {
						(o = a.fallback), (s = t.mode), (r = (i = e.child).sibling);
						var u = { mode: 'hidden', children: a.children };
						return (
							0 === (1 & s) && t.child !== i
								? (((a = t.child).childLanes = 0), (a.pendingProps = u), (t.deletions = null))
								: ((a = Iu(i, u)).subtreeFlags = 14680064 & i.subtreeFlags),
							null !== r ? (o = Iu(r, o)) : ((o = Du(o, s, n, null)).flags |= 2),
							(o.return = t),
							(a.return = t),
							(a.sibling = o),
							(t.child = a),
							(a = o),
							(o = t.child),
							(s =
								null === (s = e.child.memoizedState)
									? Ro(n)
									: { baseLanes: s.baseLanes | n, cachePool: null, transitions: s.transitions }),
							(o.memoizedState = s),
							(o.childLanes = e.childLanes & ~n),
							(t.memoizedState = Do),
							a
						);
					}
					return (
						(e = (o = e.child).sibling),
						(a = Iu(o, { mode: 'visible', children: a.children })),
						0 === (1 & t.mode) && (a.lanes = n),
						(a.return = t),
						(a.sibling = null),
						null !== e && (null === (n = t.deletions) ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
						(t.child = a),
						(t.memoizedState = null),
						a
					);
				}
				function Fo(e, t) {
					return ((t = Ru({ mode: 'visible', children: t }, e.mode, 0, null)).return = e), (e.child = t);
				}
				function Bo(e, t, n, r) {
					return (
						null !== r && vl(r),
						Yl(t, e.child, null, n),
						((e = Fo(t, t.pendingProps.children)).flags |= 2),
						(t.memoizedState = null),
						e
					);
				}
				function Vo(e, t, n) {
					e.lanes |= t;
					var r = e.alternate;
					null !== r && (r.lanes |= t), xl(e.return, t, n);
				}
				function Ho(e, t, n, r, a) {
					var l = e.memoizedState;
					null === l
						? (e.memoizedState = {
								isBackwards: t,
								rendering: null,
								renderingStartTime: 0,
								last: r,
								tail: n,
								tailMode: a,
						  })
						: ((l.isBackwards = t),
						  (l.rendering = null),
						  (l.renderingStartTime = 0),
						  (l.last = r),
						  (l.tail = n),
						  (l.tailMode = a));
				}
				function Uo(e, t, n) {
					var r = t.pendingProps,
						a = r.revealOrder,
						l = r.tail;
					if ((So(e, t, r.children, n), 0 !== (2 & (r = oi.current)))) (r = (1 & r) | 2), (t.flags |= 128);
					else {
						if (null !== e && 0 !== (128 & e.flags))
							e: for (e = t.child; null !== e; ) {
								if (13 === e.tag) null !== e.memoizedState && Vo(e, n, t);
								else if (19 === e.tag) Vo(e, n, t);
								else if (null !== e.child) {
									(e.child.return = e), (e = e.child);
									continue;
								}
								if (e === t) break e;
								for (; null === e.sibling; ) {
									if (null === e.return || e.return === t) break e;
									e = e.return;
								}
								(e.sibling.return = e.return), (e = e.sibling);
							}
						r &= 1;
					}
					if ((Ta(oi, r), 0 === (1 & t.mode))) t.memoizedState = null;
					else
						switch (a) {
							case 'forwards':
								for (n = t.child, a = null; null !== n; )
									null !== (e = n.alternate) && null === si(e) && (a = n), (n = n.sibling);
								null === (n = a) ? ((a = t.child), (t.child = null)) : ((a = n.sibling), (n.sibling = null)),
									Ho(t, !1, a, n, l);
								break;
							case 'backwards':
								for (n = null, a = t.child, t.child = null; null !== a; ) {
									if (null !== (e = a.alternate) && null === si(e)) {
										t.child = a;
										break;
									}
									(e = a.sibling), (a.sibling = n), (n = a), (a = e);
								}
								Ho(t, !0, n, null, l);
								break;
							case 'together':
								Ho(t, !1, null, null, void 0);
								break;
							default:
								t.memoizedState = null;
						}
					return t.child;
				}
				function Go(e, t) {
					0 === (1 & t.mode) && null !== e && ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
				}
				function Wo(e, t, n) {
					if ((null !== e && (t.dependencies = e.dependencies), (Rs |= t.lanes), 0 === (n & t.childLanes))) return null;
					if (null !== e && t.child !== e.child) throw Error(l(153));
					if (null !== t.child) {
						for (n = Iu((e = t.child), e.pendingProps), t.child = n, n.return = t; null !== e.sibling; )
							(e = e.sibling), ((n = n.sibling = Iu(e, e.pendingProps)).return = t);
						n.sibling = null;
					}
					return t.child;
				}
				function $o(e, t) {
					if (!al)
						switch (e.tailMode) {
							case 'hidden':
								t = e.tail;
								for (var n = null; null !== t; ) null !== t.alternate && (n = t), (t = t.sibling);
								null === n ? (e.tail = null) : (n.sibling = null);
								break;
							case 'collapsed':
								n = e.tail;
								for (var r = null; null !== n; ) null !== n.alternate && (r = n), (n = n.sibling);
								null === r ? (t || null === e.tail ? (e.tail = null) : (e.tail.sibling = null)) : (r.sibling = null);
						}
				}
				function qo(e) {
					var t = null !== e.alternate && e.alternate.child === e.child,
						n = 0,
						r = 0;
					if (t)
						for (var a = e.child; null !== a; )
							(n |= a.lanes | a.childLanes),
								(r |= 14680064 & a.subtreeFlags),
								(r |= 14680064 & a.flags),
								(a.return = e),
								(a = a.sibling);
					else
						for (a = e.child; null !== a; )
							(n |= a.lanes | a.childLanes), (r |= a.subtreeFlags), (r |= a.flags), (a.return = e), (a = a.sibling);
					return (e.subtreeFlags |= r), (e.childLanes = n), t;
				}
				function Qo(e, t, n) {
					var r = t.pendingProps;
					switch ((tl(t), t.tag)) {
						case 2:
						case 16:
						case 15:
						case 0:
						case 11:
						case 7:
						case 8:
						case 12:
						case 9:
						case 14:
							return qo(t), null;
						case 1:
						case 17:
							return Oa(t.type) && Na(), qo(t), null;
						case 3:
							return (
								(r = t.stateNode),
								ai(),
								Ca(Ma),
								Ca(_a),
								ci(),
								r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
								(null !== e && null !== e.child) ||
									(dl(t)
										? (t.flags |= 4)
										: null === e ||
										  (e.memoizedState.isDehydrated && 0 === (256 & t.flags)) ||
										  ((t.flags |= 1024), null !== ll && (ou(ll), (ll = null)))),
								No(e, t),
								qo(t),
								null
							);
						case 5:
							ii(t);
							var a = ni(ti.current);
							if (((n = t.type), null !== e && null != t.stateNode))
								Io(e, t, n, r, a), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
							else {
								if (!r) {
									if (null === t.stateNode) throw Error(l(166));
									return qo(t), null;
								}
								if (((e = ni(Zl.current)), dl(t))) {
									(r = t.stateNode), (n = t.type);
									var i = t.memoizedProps;
									switch (((r[fa] = t), (r[pa] = i), (e = 0 !== (1 & t.mode)), n)) {
										case 'dialog':
											Fr('cancel', r), Fr('close', r);
											break;
										case 'iframe':
										case 'object':
										case 'embed':
											Fr('load', r);
											break;
										case 'video':
										case 'audio':
											for (a = 0; a < jr.length; a++) Fr(jr[a], r);
											break;
										case 'source':
											Fr('error', r);
											break;
										case 'img':
										case 'image':
										case 'link':
											Fr('error', r), Fr('load', r);
											break;
										case 'details':
											Fr('toggle', r);
											break;
										case 'input':
											Y(r, i), Fr('invalid', r);
											break;
										case 'select':
											(r._wrapperState = { wasMultiple: !!i.multiple }), Fr('invalid', r);
											break;
										case 'textarea':
											ae(r, i), Fr('invalid', r);
									}
									for (var s in (ye(n, i), (a = null), i))
										if (i.hasOwnProperty(s)) {
											var u = i[s];
											'children' === s
												? 'string' === typeof u
													? r.textContent !== u &&
													  (!0 !== i.suppressHydrationWarning && Jr(r.textContent, u, e), (a = ['children', u]))
													: 'number' === typeof u &&
													  r.textContent !== '' + u &&
													  (!0 !== i.suppressHydrationWarning && Jr(r.textContent, u, e), (a = ['children', '' + u]))
												: o.hasOwnProperty(s) && null != u && 'onScroll' === s && Fr('scroll', r);
										}
									switch (n) {
										case 'input':
											$(r), Z(r, i, !0);
											break;
										case 'textarea':
											$(r), ie(r);
											break;
										case 'select':
										case 'option':
											break;
										default:
											'function' === typeof i.onClick && (r.onclick = Zr);
									}
									(r = a), (t.updateQueue = r), null !== r && (t.flags |= 4);
								} else {
									(s = 9 === a.nodeType ? a : a.ownerDocument),
										'http://www.w3.org/1999/xhtml' === e && (e = oe(n)),
										'http://www.w3.org/1999/xhtml' === e
											? 'script' === n
												? (((e = s.createElement('div')).innerHTML = '<script></script>'),
												  (e = e.removeChild(e.firstChild)))
												: 'string' === typeof r.is
												? (e = s.createElement(n, { is: r.is }))
												: ((e = s.createElement(n)),
												  'select' === n && ((s = e), r.multiple ? (s.multiple = !0) : r.size && (s.size = r.size)))
											: (e = s.createElementNS(e, n)),
										(e[fa] = t),
										(e[pa] = r),
										Oo(e, t, !1, !1),
										(t.stateNode = e);
									e: {
										switch (((s = be(n, r)), n)) {
											case 'dialog':
												Fr('cancel', e), Fr('close', e), (a = r);
												break;
											case 'iframe':
											case 'object':
											case 'embed':
												Fr('load', e), (a = r);
												break;
											case 'video':
											case 'audio':
												for (a = 0; a < jr.length; a++) Fr(jr[a], e);
												a = r;
												break;
											case 'source':
												Fr('error', e), (a = r);
												break;
											case 'img':
											case 'image':
											case 'link':
												Fr('error', e), Fr('load', e), (a = r);
												break;
											case 'details':
												Fr('toggle', e), (a = r);
												break;
											case 'input':
												Y(e, r), (a = X(e, r)), Fr('invalid', e);
												break;
											case 'option':
											default:
												a = r;
												break;
											case 'select':
												(e._wrapperState = { wasMultiple: !!r.multiple }),
													(a = R({}, r, { value: void 0 })),
													Fr('invalid', e);
												break;
											case 'textarea':
												ae(e, r), (a = re(e, r)), Fr('invalid', e);
										}
										for (i in (ye(n, a), (u = a)))
											if (u.hasOwnProperty(i)) {
												var c = u[i];
												'style' === i
													? me(e, c)
													: 'dangerouslySetInnerHTML' === i
													? null != (c = c ? c.__html : void 0) && de(e, c)
													: 'children' === i
													? 'string' === typeof c
														? ('textarea' !== n || '' !== c) && fe(e, c)
														: 'number' === typeof c && fe(e, '' + c)
													: 'suppressContentEditableWarning' !== i &&
													  'suppressHydrationWarning' !== i &&
													  'autoFocus' !== i &&
													  (o.hasOwnProperty(i)
															? null != c && 'onScroll' === i && Fr('scroll', e)
															: null != c && b(e, i, c, s));
											}
										switch (n) {
											case 'input':
												$(e), Z(e, r, !1);
												break;
											case 'textarea':
												$(e), ie(e);
												break;
											case 'option':
												null != r.value && e.setAttribute('value', '' + G(r.value));
												break;
											case 'select':
												(e.multiple = !!r.multiple),
													null != (i = r.value)
														? ne(e, !!r.multiple, i, !1)
														: null != r.defaultValue && ne(e, !!r.multiple, r.defaultValue, !0);
												break;
											default:
												'function' === typeof a.onClick && (e.onclick = Zr);
										}
										switch (n) {
											case 'button':
											case 'input':
											case 'select':
											case 'textarea':
												r = !!r.autoFocus;
												break e;
											case 'img':
												r = !0;
												break e;
											default:
												r = !1;
										}
									}
									r && (t.flags |= 4);
								}
								null !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
							}
							return qo(t), null;
						case 6:
							if (e && null != t.stateNode) jo(e, t, e.memoizedProps, r);
							else {
								if ('string' !== typeof r && null === t.stateNode) throw Error(l(166));
								if (((n = ni(ti.current)), ni(Zl.current), dl(t))) {
									if (
										((r = t.stateNode),
										(n = t.memoizedProps),
										(r[fa] = t),
										(i = r.nodeValue !== n) && null !== (e = nl))
									)
										switch (e.tag) {
											case 3:
												Jr(r.nodeValue, n, 0 !== (1 & e.mode));
												break;
											case 5:
												!0 !== e.memoizedProps.suppressHydrationWarning && Jr(r.nodeValue, n, 0 !== (1 & e.mode));
										}
									i && (t.flags |= 4);
								} else ((r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(r))[fa] = t), (t.stateNode = r);
							}
							return qo(t), null;
						case 13:
							if (
								(Ca(oi),
								(r = t.memoizedState),
								null === e || (null !== e.memoizedState && null !== e.memoizedState.dehydrated))
							) {
								if (al && null !== rl && 0 !== (1 & t.mode) && 0 === (128 & t.flags))
									fl(), pl(), (t.flags |= 98560), (i = !1);
								else if (((i = dl(t)), null !== r && null !== r.dehydrated)) {
									if (null === e) {
										if (!i) throw Error(l(318));
										if (!(i = null !== (i = t.memoizedState) ? i.dehydrated : null)) throw Error(l(317));
										i[fa] = t;
									} else pl(), 0 === (128 & t.flags) && (t.memoizedState = null), (t.flags |= 4);
									qo(t), (i = !1);
								} else null !== ll && (ou(ll), (ll = null)), (i = !0);
								if (!i) return 65536 & t.flags ? t : null;
							}
							return 0 !== (128 & t.flags)
								? ((t.lanes = n), t)
								: ((r = null !== r) !== (null !== e && null !== e.memoizedState) &&
										r &&
										((t.child.flags |= 8192),
										0 !== (1 & t.mode) && (null === e || 0 !== (1 & oi.current) ? 0 === js && (js = 3) : mu())),
								  null !== t.updateQueue && (t.flags |= 4),
								  qo(t),
								  null);
						case 4:
							return ai(), No(e, t), null === e && Hr(t.stateNode.containerInfo), qo(t), null;
						case 10:
							return kl(t.type._context), qo(t), null;
						case 19:
							if ((Ca(oi), null === (i = t.memoizedState))) return qo(t), null;
							if (((r = 0 !== (128 & t.flags)), null === (s = i.rendering)))
								if (r) $o(i, !1);
								else {
									if (0 !== js || (null !== e && 0 !== (128 & e.flags)))
										for (e = t.child; null !== e; ) {
											if (null !== (s = si(e))) {
												for (
													t.flags |= 128,
														$o(i, !1),
														null !== (r = s.updateQueue) && ((t.updateQueue = r), (t.flags |= 4)),
														t.subtreeFlags = 0,
														r = n,
														n = t.child;
													null !== n;

												)
													(e = r),
														((i = n).flags &= 14680066),
														null === (s = i.alternate)
															? ((i.childLanes = 0),
															  (i.lanes = e),
															  (i.child = null),
															  (i.subtreeFlags = 0),
															  (i.memoizedProps = null),
															  (i.memoizedState = null),
															  (i.updateQueue = null),
															  (i.dependencies = null),
															  (i.stateNode = null))
															: ((i.childLanes = s.childLanes),
															  (i.lanes = s.lanes),
															  (i.child = s.child),
															  (i.subtreeFlags = 0),
															  (i.deletions = null),
															  (i.memoizedProps = s.memoizedProps),
															  (i.memoizedState = s.memoizedState),
															  (i.updateQueue = s.updateQueue),
															  (i.type = s.type),
															  (e = s.dependencies),
															  (i.dependencies =
																	null === e ? null : { lanes: e.lanes, firstContext: e.firstContext })),
														(n = n.sibling);
												return Ta(oi, (1 & oi.current) | 2), t.child;
											}
											e = e.sibling;
										}
									null !== i.tail && Ke() > Us && ((t.flags |= 128), (r = !0), $o(i, !1), (t.lanes = 4194304));
								}
							else {
								if (!r)
									if (null !== (e = si(s))) {
										if (
											((t.flags |= 128),
											(r = !0),
											null !== (n = e.updateQueue) && ((t.updateQueue = n), (t.flags |= 4)),
											$o(i, !0),
											null === i.tail && 'hidden' === i.tailMode && !s.alternate && !al)
										)
											return qo(t), null;
									} else
										2 * Ke() - i.renderingStartTime > Us &&
											1073741824 !== n &&
											((t.flags |= 128), (r = !0), $o(i, !1), (t.lanes = 4194304));
								i.isBackwards
									? ((s.sibling = t.child), (t.child = s))
									: (null !== (n = i.last) ? (n.sibling = s) : (t.child = s), (i.last = s));
							}
							return null !== i.tail
								? ((t = i.tail),
								  (i.rendering = t),
								  (i.tail = t.sibling),
								  (i.renderingStartTime = Ke()),
								  (t.sibling = null),
								  (n = oi.current),
								  Ta(oi, r ? (1 & n) | 2 : 1 & n),
								  t)
								: (qo(t), null);
						case 22:
						case 23:
							return (
								fu(),
								(r = null !== t.memoizedState),
								null !== e && (null !== e.memoizedState) !== r && (t.flags |= 8192),
								r && 0 !== (1 & t.mode)
									? 0 !== (1073741824 & Ns) && (qo(t), 6 & t.subtreeFlags && (t.flags |= 8192))
									: qo(t),
								null
							);
						case 24:
						case 25:
							return null;
					}
					throw Error(l(156, t.tag));
				}
				function Xo(e, t) {
					switch ((tl(t), t.tag)) {
						case 1:
							return Oa(t.type) && Na(), 65536 & (e = t.flags) ? ((t.flags = (-65537 & e) | 128), t) : null;
						case 3:
							return (
								ai(),
								Ca(Ma),
								Ca(_a),
								ci(),
								0 !== (65536 & (e = t.flags)) && 0 === (128 & e) ? ((t.flags = (-65537 & e) | 128), t) : null
							);
						case 5:
							return ii(t), null;
						case 13:
							if ((Ca(oi), null !== (e = t.memoizedState) && null !== e.dehydrated)) {
								if (null === t.alternate) throw Error(l(340));
								pl();
							}
							return 65536 & (e = t.flags) ? ((t.flags = (-65537 & e) | 128), t) : null;
						case 19:
							return Ca(oi), null;
						case 4:
							return ai(), null;
						case 10:
							return kl(t.type._context), null;
						case 22:
						case 23:
							return fu(), null;
						default:
							return null;
					}
				}
				(Oo = function (e, t) {
					for (var n = t.child; null !== n; ) {
						if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
						else if (4 !== n.tag && null !== n.child) {
							(n.child.return = n), (n = n.child);
							continue;
						}
						if (n === t) break;
						for (; null === n.sibling; ) {
							if (null === n.return || n.return === t) return;
							n = n.return;
						}
						(n.sibling.return = n.return), (n = n.sibling);
					}
				}),
					(No = function () {}),
					(Io = function (e, t, n, r) {
						var a = e.memoizedProps;
						if (a !== r) {
							(e = t.stateNode), ni(Zl.current);
							var l,
								i = null;
							switch (n) {
								case 'input':
									(a = X(e, a)), (r = X(e, r)), (i = []);
									break;
								case 'select':
									(a = R({}, a, { value: void 0 })), (r = R({}, r, { value: void 0 })), (i = []);
									break;
								case 'textarea':
									(a = re(e, a)), (r = re(e, r)), (i = []);
									break;
								default:
									'function' !== typeof a.onClick && 'function' === typeof r.onClick && (e.onclick = Zr);
							}
							for (c in (ye(n, r), (n = null), a))
								if (!r.hasOwnProperty(c) && a.hasOwnProperty(c) && null != a[c])
									if ('style' === c) {
										var s = a[c];
										for (l in s) s.hasOwnProperty(l) && (n || (n = {}), (n[l] = ''));
									} else
										'dangerouslySetInnerHTML' !== c &&
											'children' !== c &&
											'suppressContentEditableWarning' !== c &&
											'suppressHydrationWarning' !== c &&
											'autoFocus' !== c &&
											(o.hasOwnProperty(c) ? i || (i = []) : (i = i || []).push(c, null));
							for (c in r) {
								var u = r[c];
								if (((s = null != a ? a[c] : void 0), r.hasOwnProperty(c) && u !== s && (null != u || null != s)))
									if ('style' === c)
										if (s) {
											for (l in s) !s.hasOwnProperty(l) || (u && u.hasOwnProperty(l)) || (n || (n = {}), (n[l] = ''));
											for (l in u) u.hasOwnProperty(l) && s[l] !== u[l] && (n || (n = {}), (n[l] = u[l]));
										} else n || (i || (i = []), i.push(c, n)), (n = u);
									else
										'dangerouslySetInnerHTML' === c
											? ((u = u ? u.__html : void 0),
											  (s = s ? s.__html : void 0),
											  null != u && s !== u && (i = i || []).push(c, u))
											: 'children' === c
											? ('string' !== typeof u && 'number' !== typeof u) || (i = i || []).push(c, '' + u)
											: 'suppressContentEditableWarning' !== c &&
											  'suppressHydrationWarning' !== c &&
											  (o.hasOwnProperty(c)
													? (null != u && 'onScroll' === c && Fr('scroll', e), i || s === u || (i = []))
													: (i = i || []).push(c, u));
							}
							n && (i = i || []).push('style', n);
							var c = i;
							(t.updateQueue = c) && (t.flags |= 4);
						}
					}),
					(jo = function (e, t, n, r) {
						n !== r && (t.flags |= 4);
					});
				var Yo = !1,
					Ko = !1,
					Jo = 'function' === typeof WeakSet ? WeakSet : Set,
					Zo = null;
				function es(e, t) {
					var n = e.ref;
					if (null !== n)
						if ('function' === typeof n)
							try {
								n(null);
							} catch (r) {
								Cu(e, t, r);
							}
						else n.current = null;
				}
				function ts(e, t, n) {
					try {
						n();
					} catch (r) {
						Cu(e, t, r);
					}
				}
				var ns = !1;
				function rs(e, t, n) {
					var r = t.updateQueue;
					if (null !== (r = null !== r ? r.lastEffect : null)) {
						var a = (r = r.next);
						do {
							if ((a.tag & e) === e) {
								var l = a.destroy;
								(a.destroy = void 0), void 0 !== l && ts(t, n, l);
							}
							a = a.next;
						} while (a !== r);
					}
				}
				function as(e, t) {
					if (null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)) {
						var n = (t = t.next);
						do {
							if ((n.tag & e) === e) {
								var r = n.create;
								n.destroy = r();
							}
							n = n.next;
						} while (n !== t);
					}
				}
				function ls(e) {
					var t = e.ref;
					if (null !== t) {
						var n = e.stateNode;
						e.tag, (e = n), 'function' === typeof t ? t(e) : (t.current = e);
					}
				}
				function is(e) {
					var t = e.alternate;
					null !== t && ((e.alternate = null), is(t)),
						(e.child = null),
						(e.deletions = null),
						(e.sibling = null),
						5 === e.tag &&
							null !== (t = e.stateNode) &&
							(delete t[fa], delete t[pa], delete t[ha], delete t[ma], delete t[ga]),
						(e.stateNode = null),
						(e.return = null),
						(e.dependencies = null),
						(e.memoizedProps = null),
						(e.memoizedState = null),
						(e.pendingProps = null),
						(e.stateNode = null),
						(e.updateQueue = null);
				}
				function os(e) {
					return 5 === e.tag || 3 === e.tag || 4 === e.tag;
				}
				function ss(e) {
					e: for (;;) {
						for (; null === e.sibling; ) {
							if (null === e.return || os(e.return)) return null;
							e = e.return;
						}
						for (e.sibling.return = e.return, e = e.sibling; 5 !== e.tag && 6 !== e.tag && 18 !== e.tag; ) {
							if (2 & e.flags) continue e;
							if (null === e.child || 4 === e.tag) continue e;
							(e.child.return = e), (e = e.child);
						}
						if (!(2 & e.flags)) return e.stateNode;
					}
				}
				function us(e, t, n) {
					var r = e.tag;
					if (5 === r || 6 === r)
						(e = e.stateNode),
							t
								? 8 === n.nodeType
									? n.parentNode.insertBefore(e, t)
									: n.insertBefore(e, t)
								: (8 === n.nodeType ? (t = n.parentNode).insertBefore(e, n) : (t = n).appendChild(e),
								  (null !== (n = n._reactRootContainer) && void 0 !== n) || null !== t.onclick || (t.onclick = Zr));
					else if (4 !== r && null !== (e = e.child))
						for (us(e, t, n), e = e.sibling; null !== e; ) us(e, t, n), (e = e.sibling);
				}
				function cs(e, t, n) {
					var r = e.tag;
					if (5 === r || 6 === r) (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
					else if (4 !== r && null !== (e = e.child))
						for (cs(e, t, n), e = e.sibling; null !== e; ) cs(e, t, n), (e = e.sibling);
				}
				var ds = null,
					fs = !1;
				function ps(e, t, n) {
					for (n = n.child; null !== n; ) vs(e, t, n), (n = n.sibling);
				}
				function vs(e, t, n) {
					if (lt && 'function' === typeof lt.onCommitFiberUnmount)
						try {
							lt.onCommitFiberUnmount(at, n);
						} catch (o) {}
					switch (n.tag) {
						case 5:
							Ko || es(n, t);
						case 6:
							var r = ds,
								a = fs;
							(ds = null),
								ps(e, t, n),
								(fs = a),
								null !== (ds = r) &&
									(fs
										? ((e = ds), (n = n.stateNode), 8 === e.nodeType ? e.parentNode.removeChild(n) : e.removeChild(n))
										: ds.removeChild(n.stateNode));
							break;
						case 18:
							null !== ds &&
								(fs
									? ((e = ds),
									  (n = n.stateNode),
									  8 === e.nodeType ? sa(e.parentNode, n) : 1 === e.nodeType && sa(e, n),
									  Ht(e))
									: sa(ds, n.stateNode));
							break;
						case 4:
							(r = ds), (a = fs), (ds = n.stateNode.containerInfo), (fs = !0), ps(e, t, n), (ds = r), (fs = a);
							break;
						case 0:
						case 11:
						case 14:
						case 15:
							if (!Ko && null !== (r = n.updateQueue) && null !== (r = r.lastEffect)) {
								a = r = r.next;
								do {
									var l = a,
										i = l.destroy;
									(l = l.tag), void 0 !== i && (0 !== (2 & l) || 0 !== (4 & l)) && ts(n, t, i), (a = a.next);
								} while (a !== r);
							}
							ps(e, t, n);
							break;
						case 1:
							if (!Ko && (es(n, t), 'function' === typeof (r = n.stateNode).componentWillUnmount))
								try {
									(r.props = n.memoizedProps), (r.state = n.memoizedState), r.componentWillUnmount();
								} catch (o) {
									Cu(n, t, o);
								}
							ps(e, t, n);
							break;
						case 21:
							ps(e, t, n);
							break;
						case 22:
							1 & n.mode ? ((Ko = (r = Ko) || null !== n.memoizedState), ps(e, t, n), (Ko = r)) : ps(e, t, n);
							break;
						default:
							ps(e, t, n);
					}
				}
				function hs(e) {
					var t = e.updateQueue;
					if (null !== t) {
						e.updateQueue = null;
						var n = e.stateNode;
						null === n && (n = e.stateNode = new Jo()),
							t.forEach(function (t) {
								var r = Mu.bind(null, e, t);
								n.has(t) || (n.add(t), t.then(r, r));
							});
					}
				}
				function ms(e, t) {
					var n = t.deletions;
					if (null !== n)
						for (var r = 0; r < n.length; r++) {
							var a = n[r];
							try {
								var i = e,
									o = t,
									s = o;
								e: for (; null !== s; ) {
									switch (s.tag) {
										case 5:
											(ds = s.stateNode), (fs = !1);
											break e;
										case 3:
										case 4:
											(ds = s.stateNode.containerInfo), (fs = !0);
											break e;
									}
									s = s.return;
								}
								if (null === ds) throw Error(l(160));
								vs(i, o, a), (ds = null), (fs = !1);
								var u = a.alternate;
								null !== u && (u.return = null), (a.return = null);
							} catch (c) {
								Cu(a, t, c);
							}
						}
					if (12854 & t.subtreeFlags) for (t = t.child; null !== t; ) gs(t, e), (t = t.sibling);
				}
				function gs(e, t) {
					var n = e.alternate,
						r = e.flags;
					switch (e.tag) {
						case 0:
						case 11:
						case 14:
						case 15:
							if ((ms(t, e), ys(e), 4 & r)) {
								try {
									rs(3, e, e.return), as(3, e);
								} catch (m) {
									Cu(e, e.return, m);
								}
								try {
									rs(5, e, e.return);
								} catch (m) {
									Cu(e, e.return, m);
								}
							}
							break;
						case 1:
							ms(t, e), ys(e), 512 & r && null !== n && es(n, n.return);
							break;
						case 5:
							if ((ms(t, e), ys(e), 512 & r && null !== n && es(n, n.return), 32 & e.flags)) {
								var a = e.stateNode;
								try {
									fe(a, '');
								} catch (m) {
									Cu(e, e.return, m);
								}
							}
							if (4 & r && null != (a = e.stateNode)) {
								var i = e.memoizedProps,
									o = null !== n ? n.memoizedProps : i,
									s = e.type,
									u = e.updateQueue;
								if (((e.updateQueue = null), null !== u))
									try {
										'input' === s && 'radio' === i.type && null != i.name && K(a, i), be(s, o);
										var c = be(s, i);
										for (o = 0; o < u.length; o += 2) {
											var d = u[o],
												f = u[o + 1];
											'style' === d
												? me(a, f)
												: 'dangerouslySetInnerHTML' === d
												? de(a, f)
												: 'children' === d
												? fe(a, f)
												: b(a, d, f, c);
										}
										switch (s) {
											case 'input':
												J(a, i);
												break;
											case 'textarea':
												le(a, i);
												break;
											case 'select':
												var p = a._wrapperState.wasMultiple;
												a._wrapperState.wasMultiple = !!i.multiple;
												var v = i.value;
												null != v
													? ne(a, !!i.multiple, v, !1)
													: p !== !!i.multiple &&
													  (null != i.defaultValue
															? ne(a, !!i.multiple, i.defaultValue, !0)
															: ne(a, !!i.multiple, i.multiple ? [] : '', !1));
										}
										a[pa] = i;
									} catch (m) {
										Cu(e, e.return, m);
									}
							}
							break;
						case 6:
							if ((ms(t, e), ys(e), 4 & r)) {
								if (null === e.stateNode) throw Error(l(162));
								(a = e.stateNode), (i = e.memoizedProps);
								try {
									a.nodeValue = i;
								} catch (m) {
									Cu(e, e.return, m);
								}
							}
							break;
						case 3:
							if ((ms(t, e), ys(e), 4 & r && null !== n && n.memoizedState.isDehydrated))
								try {
									Ht(t.containerInfo);
								} catch (m) {
									Cu(e, e.return, m);
								}
							break;
						case 4:
						default:
							ms(t, e), ys(e);
							break;
						case 13:
							ms(t, e),
								ys(e),
								8192 & (a = e.child).flags &&
									((i = null !== a.memoizedState),
									(a.stateNode.isHidden = i),
									!i || (null !== a.alternate && null !== a.alternate.memoizedState) || (Hs = Ke())),
								4 & r && hs(e);
							break;
						case 22:
							if (
								((d = null !== n && null !== n.memoizedState),
								1 & e.mode ? ((Ko = (c = Ko) || d), ms(t, e), (Ko = c)) : ms(t, e),
								ys(e),
								8192 & r)
							) {
								if (((c = null !== e.memoizedState), (e.stateNode.isHidden = c) && !d && 0 !== (1 & e.mode)))
									for (Zo = e, d = e.child; null !== d; ) {
										for (f = Zo = d; null !== Zo; ) {
											switch (((v = (p = Zo).child), p.tag)) {
												case 0:
												case 11:
												case 14:
												case 15:
													rs(4, p, p.return);
													break;
												case 1:
													es(p, p.return);
													var h = p.stateNode;
													if ('function' === typeof h.componentWillUnmount) {
														(r = p), (n = p.return);
														try {
															(t = r),
																(h.props = t.memoizedProps),
																(h.state = t.memoizedState),
																h.componentWillUnmount();
														} catch (m) {
															Cu(r, n, m);
														}
													}
													break;
												case 5:
													es(p, p.return);
													break;
												case 22:
													if (null !== p.memoizedState) {
														ks(f);
														continue;
													}
											}
											null !== v ? ((v.return = p), (Zo = v)) : ks(f);
										}
										d = d.sibling;
									}
								e: for (d = null, f = e; ; ) {
									if (5 === f.tag) {
										if (null === d) {
											d = f;
											try {
												(a = f.stateNode),
													c
														? 'function' === typeof (i = a.style).setProperty
															? i.setProperty('display', 'none', 'important')
															: (i.display = 'none')
														: ((s = f.stateNode),
														  (o =
																void 0 !== (u = f.memoizedProps.style) && null !== u && u.hasOwnProperty('display')
																	? u.display
																	: null),
														  (s.style.display = he('display', o)));
											} catch (m) {
												Cu(e, e.return, m);
											}
										}
									} else if (6 === f.tag) {
										if (null === d)
											try {
												f.stateNode.nodeValue = c ? '' : f.memoizedProps;
											} catch (m) {
												Cu(e, e.return, m);
											}
									} else if (
										((22 !== f.tag && 23 !== f.tag) || null === f.memoizedState || f === e) &&
										null !== f.child
									) {
										(f.child.return = f), (f = f.child);
										continue;
									}
									if (f === e) break e;
									for (; null === f.sibling; ) {
										if (null === f.return || f.return === e) break e;
										d === f && (d = null), (f = f.return);
									}
									d === f && (d = null), (f.sibling.return = f.return), (f = f.sibling);
								}
							}
							break;
						case 19:
							ms(t, e), ys(e), 4 & r && hs(e);
						case 21:
					}
				}
				function ys(e) {
					var t = e.flags;
					if (2 & t) {
						try {
							e: {
								for (var n = e.return; null !== n; ) {
									if (os(n)) {
										var r = n;
										break e;
									}
									n = n.return;
								}
								throw Error(l(160));
							}
							switch (r.tag) {
								case 5:
									var a = r.stateNode;
									32 & r.flags && (fe(a, ''), (r.flags &= -33)), cs(e, ss(e), a);
									break;
								case 3:
								case 4:
									var i = r.stateNode.containerInfo;
									us(e, ss(e), i);
									break;
								default:
									throw Error(l(161));
							}
						} catch (o) {
							Cu(e, e.return, o);
						}
						e.flags &= -3;
					}
					4096 & t && (e.flags &= -4097);
				}
				function bs(e, t, n) {
					(Zo = e), ws(e, t, n);
				}
				function ws(e, t, n) {
					for (var r = 0 !== (1 & e.mode); null !== Zo; ) {
						var a = Zo,
							l = a.child;
						if (22 === a.tag && r) {
							var i = null !== a.memoizedState || Yo;
							if (!i) {
								var o = a.alternate,
									s = (null !== o && null !== o.memoizedState) || Ko;
								o = Yo;
								var u = Ko;
								if (((Yo = i), (Ko = s) && !u))
									for (Zo = a; null !== Zo; )
										(s = (i = Zo).child),
											22 === i.tag && null !== i.memoizedState
												? xs(a)
												: null !== s
												? ((s.return = i), (Zo = s))
												: xs(a);
								for (; null !== l; ) (Zo = l), ws(l, t, n), (l = l.sibling);
								(Zo = a), (Yo = o), (Ko = u);
							}
							Ss(e);
						} else 0 !== (8772 & a.subtreeFlags) && null !== l ? ((l.return = a), (Zo = l)) : Ss(e);
					}
				}
				function Ss(e) {
					for (; null !== Zo; ) {
						var t = Zo;
						if (0 !== (8772 & t.flags)) {
							var n = t.alternate;
							try {
								if (0 !== (8772 & t.flags))
									switch (t.tag) {
										case 0:
										case 11:
										case 15:
											Ko || as(5, t);
											break;
										case 1:
											var r = t.stateNode;
											if (4 & t.flags && !Ko)
												if (null === n) r.componentDidMount();
												else {
													var a = t.elementType === t.type ? n.memoizedProps : ml(t.type, n.memoizedProps);
													r.componentDidUpdate(a, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
												}
											var i = t.updateQueue;
											null !== i && Al(t, i, r);
											break;
										case 3:
											var o = t.updateQueue;
											if (null !== o) {
												if (((n = null), null !== t.child))
													switch (t.child.tag) {
														case 5:
														case 1:
															n = t.child.stateNode;
													}
												Al(t, o, n);
											}
											break;
										case 5:
											var s = t.stateNode;
											if (null === n && 4 & t.flags) {
												n = s;
												var u = t.memoizedProps;
												switch (t.type) {
													case 'button':
													case 'input':
													case 'select':
													case 'textarea':
														u.autoFocus && n.focus();
														break;
													case 'img':
														u.src && (n.src = u.src);
												}
											}
											break;
										case 6:
										case 4:
										case 12:
										case 19:
										case 17:
										case 21:
										case 22:
										case 23:
										case 25:
											break;
										case 13:
											if (null === t.memoizedState) {
												var c = t.alternate;
												if (null !== c) {
													var d = c.memoizedState;
													if (null !== d) {
														var f = d.dehydrated;
														null !== f && Ht(f);
													}
												}
											}
											break;
										default:
											throw Error(l(163));
									}
								Ko || (512 & t.flags && ls(t));
							} catch (p) {
								Cu(t, t.return, p);
							}
						}
						if (t === e) {
							Zo = null;
							break;
						}
						if (null !== (n = t.sibling)) {
							(n.return = t.return), (Zo = n);
							break;
						}
						Zo = t.return;
					}
				}
				function ks(e) {
					for (; null !== Zo; ) {
						var t = Zo;
						if (t === e) {
							Zo = null;
							break;
						}
						var n = t.sibling;
						if (null !== n) {
							(n.return = t.return), (Zo = n);
							break;
						}
						Zo = t.return;
					}
				}
				function xs(e) {
					for (; null !== Zo; ) {
						var t = Zo;
						try {
							switch (t.tag) {
								case 0:
								case 11:
								case 15:
									var n = t.return;
									try {
										as(4, t);
									} catch (s) {
										Cu(t, n, s);
									}
									break;
								case 1:
									var r = t.stateNode;
									if ('function' === typeof r.componentDidMount) {
										var a = t.return;
										try {
											r.componentDidMount();
										} catch (s) {
											Cu(t, a, s);
										}
									}
									var l = t.return;
									try {
										ls(t);
									} catch (s) {
										Cu(t, l, s);
									}
									break;
								case 5:
									var i = t.return;
									try {
										ls(t);
									} catch (s) {
										Cu(t, i, s);
									}
							}
						} catch (s) {
							Cu(t, t.return, s);
						}
						if (t === e) {
							Zo = null;
							break;
						}
						var o = t.sibling;
						if (null !== o) {
							(o.return = t.return), (Zo = o);
							break;
						}
						Zo = t.return;
					}
				}
				var Es,
					Cs = Math.ceil,
					Ts = w.ReactCurrentDispatcher,
					Ps = w.ReactCurrentOwner,
					_s = w.ReactCurrentBatchConfig,
					Ms = 0,
					zs = null,
					Ls = null,
					Os = 0,
					Ns = 0,
					Is = Ea(0),
					js = 0,
					Ds = null,
					Rs = 0,
					As = 0,
					Fs = 0,
					Bs = null,
					Vs = null,
					Hs = 0,
					Us = 1 / 0,
					Gs = null,
					Ws = !1,
					$s = null,
					qs = null,
					Qs = !1,
					Xs = null,
					Ys = 0,
					Ks = 0,
					Js = null,
					Zs = -1,
					eu = 0;
				function tu() {
					return 0 !== (6 & Ms) ? Ke() : -1 !== Zs ? Zs : (Zs = Ke());
				}
				function nu(e) {
					return 0 === (1 & e.mode)
						? 1
						: 0 !== (2 & Ms) && 0 !== Os
						? Os & -Os
						: null !== hl.transition
						? (0 === eu && (eu = ht()), eu)
						: 0 !== (e = bt)
						? e
						: (e = void 0 === (e = window.event) ? 16 : Yt(e.type));
				}
				function ru(e, t, n, r) {
					if (50 < Ks) throw ((Ks = 0), (Js = null), Error(l(185)));
					gt(e, n, r),
						(0 !== (2 & Ms) && e === zs) ||
							(e === zs && (0 === (2 & Ms) && (As |= n), 4 === js && su(e, Os)),
							au(e, r),
							1 === n && 0 === Ms && 0 === (1 & t.mode) && ((Us = Ke() + 500), Fa && Ha()));
				}
				function au(e, t) {
					var n = e.callbackNode;
					!(function (e, t) {
						for (var n = e.suspendedLanes, r = e.pingedLanes, a = e.expirationTimes, l = e.pendingLanes; 0 < l; ) {
							var i = 31 - it(l),
								o = 1 << i,
								s = a[i];
							-1 === s ? (0 !== (o & n) && 0 === (o & r)) || (a[i] = pt(o, t)) : s <= t && (e.expiredLanes |= o),
								(l &= ~o);
						}
					})(e, t);
					var r = ft(e, e === zs ? Os : 0);
					if (0 === r) null !== n && Qe(n), (e.callbackNode = null), (e.callbackPriority = 0);
					else if (((t = r & -r), e.callbackPriority !== t)) {
						if ((null != n && Qe(n), 1 === t))
							0 === e.tag
								? (function (e) {
										(Fa = !0), Va(e);
								  })(uu.bind(null, e))
								: Va(uu.bind(null, e)),
								ia(function () {
									0 === (6 & Ms) && Ha();
								}),
								(n = null);
						else {
							switch (wt(r)) {
								case 1:
									n = Ze;
									break;
								case 4:
									n = et;
									break;
								case 16:
								default:
									n = tt;
									break;
								case 536870912:
									n = rt;
							}
							n = zu(n, lu.bind(null, e));
						}
						(e.callbackPriority = t), (e.callbackNode = n);
					}
				}
				function lu(e, t) {
					if (((Zs = -1), (eu = 0), 0 !== (6 & Ms))) throw Error(l(327));
					var n = e.callbackNode;
					if (xu() && e.callbackNode !== n) return null;
					var r = ft(e, e === zs ? Os : 0);
					if (0 === r) return null;
					if (0 !== (30 & r) || 0 !== (r & e.expiredLanes) || t) t = gu(e, r);
					else {
						t = r;
						var a = Ms;
						Ms |= 2;
						var i = hu();
						for ((zs === e && Os === t) || ((Gs = null), (Us = Ke() + 500), pu(e, t)); ; )
							try {
								bu();
								break;
							} catch (s) {
								vu(e, s);
							}
						Sl(), (Ts.current = i), (Ms = a), null !== Ls ? (t = 0) : ((zs = null), (Os = 0), (t = js));
					}
					if (0 !== t) {
						if ((2 === t && 0 !== (a = vt(e)) && ((r = a), (t = iu(e, a))), 1 === t))
							throw ((n = Ds), pu(e, 0), su(e, r), au(e, Ke()), n);
						if (6 === t) su(e, r);
						else {
							if (
								((a = e.current.alternate),
								0 === (30 & r) &&
									!(function (e) {
										for (var t = e; ; ) {
											if (16384 & t.flags) {
												var n = t.updateQueue;
												if (null !== n && null !== (n = n.stores))
													for (var r = 0; r < n.length; r++) {
														var a = n[r],
															l = a.getSnapshot;
														a = a.value;
														try {
															if (!or(l(), a)) return !1;
														} catch (o) {
															return !1;
														}
													}
											}
											if (((n = t.child), 16384 & t.subtreeFlags && null !== n)) (n.return = t), (t = n);
											else {
												if (t === e) break;
												for (; null === t.sibling; ) {
													if (null === t.return || t.return === e) return !0;
													t = t.return;
												}
												(t.sibling.return = t.return), (t = t.sibling);
											}
										}
										return !0;
									})(a) &&
									(2 === (t = gu(e, r)) && 0 !== (i = vt(e)) && ((r = i), (t = iu(e, i))), 1 === t))
							)
								throw ((n = Ds), pu(e, 0), su(e, r), au(e, Ke()), n);
							switch (((e.finishedWork = a), (e.finishedLanes = r), t)) {
								case 0:
								case 1:
									throw Error(l(345));
								case 2:
								case 5:
									ku(e, Vs, Gs);
									break;
								case 3:
									if ((su(e, r), (130023424 & r) === r && 10 < (t = Hs + 500 - Ke()))) {
										if (0 !== ft(e, 0)) break;
										if (((a = e.suspendedLanes) & r) !== r) {
											tu(), (e.pingedLanes |= e.suspendedLanes & a);
											break;
										}
										e.timeoutHandle = ra(ku.bind(null, e, Vs, Gs), t);
										break;
									}
									ku(e, Vs, Gs);
									break;
								case 4:
									if ((su(e, r), (4194240 & r) === r)) break;
									for (t = e.eventTimes, a = -1; 0 < r; ) {
										var o = 31 - it(r);
										(i = 1 << o), (o = t[o]) > a && (a = o), (r &= ~i);
									}
									if (
										((r = a),
										10 <
											(r =
												(120 > (r = Ke() - r)
													? 120
													: 480 > r
													? 480
													: 1080 > r
													? 1080
													: 1920 > r
													? 1920
													: 3e3 > r
													? 3e3
													: 4320 > r
													? 4320
													: 1960 * Cs(r / 1960)) - r))
									) {
										e.timeoutHandle = ra(ku.bind(null, e, Vs, Gs), r);
										break;
									}
									ku(e, Vs, Gs);
									break;
								default:
									throw Error(l(329));
							}
						}
					}
					return au(e, Ke()), e.callbackNode === n ? lu.bind(null, e) : null;
				}
				function iu(e, t) {
					var n = Bs;
					return (
						e.current.memoizedState.isDehydrated && (pu(e, t).flags |= 256),
						2 !== (e = gu(e, t)) && ((t = Vs), (Vs = n), null !== t && ou(t)),
						e
					);
				}
				function ou(e) {
					null === Vs ? (Vs = e) : Vs.push.apply(Vs, e);
				}
				function su(e, t) {
					for (t &= ~Fs, t &= ~As, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
						var n = 31 - it(t),
							r = 1 << n;
						(e[n] = -1), (t &= ~r);
					}
				}
				function uu(e) {
					if (0 !== (6 & Ms)) throw Error(l(327));
					xu();
					var t = ft(e, 0);
					if (0 === (1 & t)) return au(e, Ke()), null;
					var n = gu(e, t);
					if (0 !== e.tag && 2 === n) {
						var r = vt(e);
						0 !== r && ((t = r), (n = iu(e, r)));
					}
					if (1 === n) throw ((n = Ds), pu(e, 0), su(e, t), au(e, Ke()), n);
					if (6 === n) throw Error(l(345));
					return (e.finishedWork = e.current.alternate), (e.finishedLanes = t), ku(e, Vs, Gs), au(e, Ke()), null;
				}
				function cu(e, t) {
					var n = Ms;
					Ms |= 1;
					try {
						return e(t);
					} finally {
						0 === (Ms = n) && ((Us = Ke() + 500), Fa && Ha());
					}
				}
				function du(e) {
					null !== Xs && 0 === Xs.tag && 0 === (6 & Ms) && xu();
					var t = Ms;
					Ms |= 1;
					var n = _s.transition,
						r = bt;
					try {
						if (((_s.transition = null), (bt = 1), e)) return e();
					} finally {
						(bt = r), (_s.transition = n), 0 === (6 & (Ms = t)) && Ha();
					}
				}
				function fu() {
					(Ns = Is.current), Ca(Is);
				}
				function pu(e, t) {
					(e.finishedWork = null), (e.finishedLanes = 0);
					var n = e.timeoutHandle;
					if ((-1 !== n && ((e.timeoutHandle = -1), aa(n)), null !== Ls))
						for (n = Ls.return; null !== n; ) {
							var r = n;
							switch ((tl(r), r.tag)) {
								case 1:
									null !== (r = r.type.childContextTypes) && void 0 !== r && Na();
									break;
								case 3:
									ai(), Ca(Ma), Ca(_a), ci();
									break;
								case 5:
									ii(r);
									break;
								case 4:
									ai();
									break;
								case 13:
								case 19:
									Ca(oi);
									break;
								case 10:
									kl(r.type._context);
									break;
								case 22:
								case 23:
									fu();
							}
							n = n.return;
						}
					if (
						((zs = e),
						(Ls = e = Iu(e.current, null)),
						(Os = Ns = t),
						(js = 0),
						(Ds = null),
						(Fs = As = Rs = 0),
						(Vs = Bs = null),
						null !== Tl)
					) {
						for (t = 0; t < Tl.length; t++)
							if (null !== (r = (n = Tl[t]).interleaved)) {
								n.interleaved = null;
								var a = r.next,
									l = n.pending;
								if (null !== l) {
									var i = l.next;
									(l.next = a), (r.next = i);
								}
								n.pending = r;
							}
						Tl = null;
					}
					return e;
				}
				function vu(e, t) {
					for (;;) {
						var n = Ls;
						try {
							if ((Sl(), (di.current = lo), gi)) {
								for (var r = vi.memoizedState; null !== r; ) {
									var a = r.queue;
									null !== a && (a.pending = null), (r = r.next);
								}
								gi = !1;
							}
							if (
								((pi = 0),
								(mi = hi = vi = null),
								(yi = !1),
								(bi = 0),
								(Ps.current = null),
								null === n || null === n.return)
							) {
								(js = 1), (Ds = t), (Ls = null);
								break;
							}
							e: {
								var i = e,
									o = n.return,
									s = n,
									u = t;
								if (
									((t = Os), (s.flags |= 32768), null !== u && 'object' === typeof u && 'function' === typeof u.then)
								) {
									var c = u,
										d = s,
										f = d.tag;
									if (0 === (1 & d.mode) && (0 === f || 11 === f || 15 === f)) {
										var p = d.alternate;
										p
											? ((d.updateQueue = p.updateQueue), (d.memoizedState = p.memoizedState), (d.lanes = p.lanes))
											: ((d.updateQueue = null), (d.memoizedState = null));
									}
									var v = go(o);
									if (null !== v) {
										(v.flags &= -257), yo(v, o, s, 0, t), 1 & v.mode && mo(i, c, t), (u = c);
										var h = (t = v).updateQueue;
										if (null === h) {
											var m = new Set();
											m.add(u), (t.updateQueue = m);
										} else h.add(u);
										break e;
									}
									if (0 === (1 & t)) {
										mo(i, c, t), mu();
										break e;
									}
									u = Error(l(426));
								} else if (al && 1 & s.mode) {
									var g = go(o);
									if (null !== g) {
										0 === (65536 & g.flags) && (g.flags |= 256), yo(g, o, s, 0, t), vl(uo(u, s));
										break e;
									}
								}
								(i = u = uo(u, s)), 4 !== js && (js = 2), null === Bs ? (Bs = [i]) : Bs.push(i), (i = o);
								do {
									switch (i.tag) {
										case 3:
											(i.flags |= 65536), (t &= -t), (i.lanes |= t), Dl(i, vo(0, u, t));
											break e;
										case 1:
											s = u;
											var y = i.type,
												b = i.stateNode;
											if (
												0 === (128 & i.flags) &&
												('function' === typeof y.getDerivedStateFromError ||
													(null !== b && 'function' === typeof b.componentDidCatch && (null === qs || !qs.has(b))))
											) {
												(i.flags |= 65536), (t &= -t), (i.lanes |= t), Dl(i, ho(i, s, t));
												break e;
											}
									}
									i = i.return;
								} while (null !== i);
							}
							Su(n);
						} catch (w) {
							(t = w), Ls === n && null !== n && (Ls = n = n.return);
							continue;
						}
						break;
					}
				}
				function hu() {
					var e = Ts.current;
					return (Ts.current = lo), null === e ? lo : e;
				}
				function mu() {
					(0 !== js && 3 !== js && 2 !== js) || (js = 4),
						null === zs || (0 === (268435455 & Rs) && 0 === (268435455 & As)) || su(zs, Os);
				}
				function gu(e, t) {
					var n = Ms;
					Ms |= 2;
					var r = hu();
					for ((zs === e && Os === t) || ((Gs = null), pu(e, t)); ; )
						try {
							yu();
							break;
						} catch (a) {
							vu(e, a);
						}
					if ((Sl(), (Ms = n), (Ts.current = r), null !== Ls)) throw Error(l(261));
					return (zs = null), (Os = 0), js;
				}
				function yu() {
					for (; null !== Ls; ) wu(Ls);
				}
				function bu() {
					for (; null !== Ls && !Xe(); ) wu(Ls);
				}
				function wu(e) {
					var t = Es(e.alternate, e, Ns);
					(e.memoizedProps = e.pendingProps), null === t ? Su(e) : (Ls = t), (Ps.current = null);
				}
				function Su(e) {
					var t = e;
					do {
						var n = t.alternate;
						if (((e = t.return), 0 === (32768 & t.flags))) {
							if (null !== (n = Qo(n, t, Ns))) return void (Ls = n);
						} else {
							if (null !== (n = Xo(n, t))) return (n.flags &= 32767), void (Ls = n);
							if (null === e) return (js = 6), void (Ls = null);
							(e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
						}
						if (null !== (t = t.sibling)) return void (Ls = t);
						Ls = t = e;
					} while (null !== t);
					0 === js && (js = 5);
				}
				function ku(e, t, n) {
					var r = bt,
						a = _s.transition;
					try {
						(_s.transition = null),
							(bt = 1),
							(function (e, t, n, r) {
								do {
									xu();
								} while (null !== Xs);
								if (0 !== (6 & Ms)) throw Error(l(327));
								n = e.finishedWork;
								var a = e.finishedLanes;
								if (null === n) return null;
								if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current)) throw Error(l(177));
								(e.callbackNode = null), (e.callbackPriority = 0);
								var i = n.lanes | n.childLanes;
								if (
									((function (e, t) {
										var n = e.pendingLanes & ~t;
										(e.pendingLanes = t),
											(e.suspendedLanes = 0),
											(e.pingedLanes = 0),
											(e.expiredLanes &= t),
											(e.mutableReadLanes &= t),
											(e.entangledLanes &= t),
											(t = e.entanglements);
										var r = e.eventTimes;
										for (e = e.expirationTimes; 0 < n; ) {
											var a = 31 - it(n),
												l = 1 << a;
											(t[a] = 0), (r[a] = -1), (e[a] = -1), (n &= ~l);
										}
									})(e, i),
									e === zs && ((Ls = zs = null), (Os = 0)),
									(0 === (2064 & n.subtreeFlags) && 0 === (2064 & n.flags)) ||
										Qs ||
										((Qs = !0),
										zu(tt, function () {
											return xu(), null;
										})),
									(i = 0 !== (15990 & n.flags)),
									0 !== (15990 & n.subtreeFlags) || i)
								) {
									(i = _s.transition), (_s.transition = null);
									var o = bt;
									bt = 1;
									var s = Ms;
									(Ms |= 4),
										(Ps.current = null),
										(function (e, t) {
											if (((ea = Gt), pr((e = fr())))) {
												if ('selectionStart' in e) var n = { start: e.selectionStart, end: e.selectionEnd };
												else
													e: {
														var r =
															(n = ((n = e.ownerDocument) && n.defaultView) || window).getSelection && n.getSelection();
														if (r && 0 !== r.rangeCount) {
															n = r.anchorNode;
															var a = r.anchorOffset,
																i = r.focusNode;
															r = r.focusOffset;
															try {
																n.nodeType, i.nodeType;
															} catch (S) {
																n = null;
																break e;
															}
															var o = 0,
																s = -1,
																u = -1,
																c = 0,
																d = 0,
																f = e,
																p = null;
															t: for (;;) {
																for (
																	var v;
																	f !== n || (0 !== a && 3 !== f.nodeType) || (s = o + a),
																		f !== i || (0 !== r && 3 !== f.nodeType) || (u = o + r),
																		3 === f.nodeType && (o += f.nodeValue.length),
																		null !== (v = f.firstChild);

																)
																	(p = f), (f = v);
																for (;;) {
																	if (f === e) break t;
																	if (
																		(p === n && ++c === a && (s = o),
																		p === i && ++d === r && (u = o),
																		null !== (v = f.nextSibling))
																	)
																		break;
																	p = (f = p).parentNode;
																}
																f = v;
															}
															n = -1 === s || -1 === u ? null : { start: s, end: u };
														} else n = null;
													}
												n = n || { start: 0, end: 0 };
											} else n = null;
											for (ta = { focusedElem: e, selectionRange: n }, Gt = !1, Zo = t; null !== Zo; )
												if (((e = (t = Zo).child), 0 !== (1028 & t.subtreeFlags) && null !== e))
													(e.return = t), (Zo = e);
												else
													for (; null !== Zo; ) {
														t = Zo;
														try {
															var h = t.alternate;
															if (0 !== (1024 & t.flags))
																switch (t.tag) {
																	case 0:
																	case 11:
																	case 15:
																	case 5:
																	case 6:
																	case 4:
																	case 17:
																		break;
																	case 1:
																		if (null !== h) {
																			var m = h.memoizedProps,
																				g = h.memoizedState,
																				y = t.stateNode,
																				b = y.getSnapshotBeforeUpdate(t.elementType === t.type ? m : ml(t.type, m), g);
																			y.__reactInternalSnapshotBeforeUpdate = b;
																		}
																		break;
																	case 3:
																		var w = t.stateNode.containerInfo;
																		1 === w.nodeType
																			? (w.textContent = '')
																			: 9 === w.nodeType && w.documentElement && w.removeChild(w.documentElement);
																		break;
																	default:
																		throw Error(l(163));
																}
														} catch (S) {
															Cu(t, t.return, S);
														}
														if (null !== (e = t.sibling)) {
															(e.return = t.return), (Zo = e);
															break;
														}
														Zo = t.return;
													}
											(h = ns), (ns = !1);
										})(e, n),
										gs(n, e),
										vr(ta),
										(Gt = !!ea),
										(ta = ea = null),
										(e.current = n),
										bs(n, e, a),
										Ye(),
										(Ms = s),
										(bt = o),
										(_s.transition = i);
								} else e.current = n;
								if (
									(Qs && ((Qs = !1), (Xs = e), (Ys = a)),
									(i = e.pendingLanes),
									0 === i && (qs = null),
									(function (e) {
										if (lt && 'function' === typeof lt.onCommitFiberRoot)
											try {
												lt.onCommitFiberRoot(at, e, void 0, 128 === (128 & e.current.flags));
											} catch (t) {}
									})(n.stateNode),
									au(e, Ke()),
									null !== t)
								)
									for (r = e.onRecoverableError, n = 0; n < t.length; n++)
										(a = t[n]), r(a.value, { componentStack: a.stack, digest: a.digest });
								if (Ws) throw ((Ws = !1), (e = $s), ($s = null), e);
								0 !== (1 & Ys) && 0 !== e.tag && xu(),
									(i = e.pendingLanes),
									0 !== (1 & i) ? (e === Js ? Ks++ : ((Ks = 0), (Js = e))) : (Ks = 0),
									Ha();
							})(e, t, n, r);
					} finally {
						(_s.transition = a), (bt = r);
					}
					return null;
				}
				function xu() {
					if (null !== Xs) {
						var e = wt(Ys),
							t = _s.transition,
							n = bt;
						try {
							if (((_s.transition = null), (bt = 16 > e ? 16 : e), null === Xs)) var r = !1;
							else {
								if (((e = Xs), (Xs = null), (Ys = 0), 0 !== (6 & Ms))) throw Error(l(331));
								var a = Ms;
								for (Ms |= 4, Zo = e.current; null !== Zo; ) {
									var i = Zo,
										o = i.child;
									if (0 !== (16 & Zo.flags)) {
										var s = i.deletions;
										if (null !== s) {
											for (var u = 0; u < s.length; u++) {
												var c = s[u];
												for (Zo = c; null !== Zo; ) {
													var d = Zo;
													switch (d.tag) {
														case 0:
														case 11:
														case 15:
															rs(8, d, i);
													}
													var f = d.child;
													if (null !== f) (f.return = d), (Zo = f);
													else
														for (; null !== Zo; ) {
															var p = (d = Zo).sibling,
																v = d.return;
															if ((is(d), d === c)) {
																Zo = null;
																break;
															}
															if (null !== p) {
																(p.return = v), (Zo = p);
																break;
															}
															Zo = v;
														}
												}
											}
											var h = i.alternate;
											if (null !== h) {
												var m = h.child;
												if (null !== m) {
													h.child = null;
													do {
														var g = m.sibling;
														(m.sibling = null), (m = g);
													} while (null !== m);
												}
											}
											Zo = i;
										}
									}
									if (0 !== (2064 & i.subtreeFlags) && null !== o) (o.return = i), (Zo = o);
									else
										e: for (; null !== Zo; ) {
											if (0 !== (2048 & (i = Zo).flags))
												switch (i.tag) {
													case 0:
													case 11:
													case 15:
														rs(9, i, i.return);
												}
											var y = i.sibling;
											if (null !== y) {
												(y.return = i.return), (Zo = y);
												break e;
											}
											Zo = i.return;
										}
								}
								var b = e.current;
								for (Zo = b; null !== Zo; ) {
									var w = (o = Zo).child;
									if (0 !== (2064 & o.subtreeFlags) && null !== w) (w.return = o), (Zo = w);
									else
										e: for (o = b; null !== Zo; ) {
											if (0 !== (2048 & (s = Zo).flags))
												try {
													switch (s.tag) {
														case 0:
														case 11:
														case 15:
															as(9, s);
													}
												} catch (k) {
													Cu(s, s.return, k);
												}
											if (s === o) {
												Zo = null;
												break e;
											}
											var S = s.sibling;
											if (null !== S) {
												(S.return = s.return), (Zo = S);
												break e;
											}
											Zo = s.return;
										}
								}
								if (((Ms = a), Ha(), lt && 'function' === typeof lt.onPostCommitFiberRoot))
									try {
										lt.onPostCommitFiberRoot(at, e);
									} catch (k) {}
								r = !0;
							}
							return r;
						} finally {
							(bt = n), (_s.transition = t);
						}
					}
					return !1;
				}
				function Eu(e, t, n) {
					(e = Il(e, (t = vo(0, (t = uo(n, t)), 1)), 1)), (t = tu()), null !== e && (gt(e, 1, t), au(e, t));
				}
				function Cu(e, t, n) {
					if (3 === e.tag) Eu(e, e, n);
					else
						for (; null !== t; ) {
							if (3 === t.tag) {
								Eu(t, e, n);
								break;
							}
							if (1 === t.tag) {
								var r = t.stateNode;
								if (
									'function' === typeof t.type.getDerivedStateFromError ||
									('function' === typeof r.componentDidCatch && (null === qs || !qs.has(r)))
								) {
									(t = Il(t, (e = ho(t, (e = uo(n, e)), 1)), 1)), (e = tu()), null !== t && (gt(t, 1, e), au(t, e));
									break;
								}
							}
							t = t.return;
						}
				}
				function Tu(e, t, n) {
					var r = e.pingCache;
					null !== r && r.delete(t),
						(t = tu()),
						(e.pingedLanes |= e.suspendedLanes & n),
						zs === e &&
							(Os & n) === n &&
							(4 === js || (3 === js && (130023424 & Os) === Os && 500 > Ke() - Hs) ? pu(e, 0) : (Fs |= n)),
						au(e, t);
				}
				function Pu(e, t) {
					0 === t && (0 === (1 & e.mode) ? (t = 1) : ((t = ct), 0 === (130023424 & (ct <<= 1)) && (ct = 4194304)));
					var n = tu();
					null !== (e = Ml(e, t)) && (gt(e, t, n), au(e, n));
				}
				function _u(e) {
					var t = e.memoizedState,
						n = 0;
					null !== t && (n = t.retryLane), Pu(e, n);
				}
				function Mu(e, t) {
					var n = 0;
					switch (e.tag) {
						case 13:
							var r = e.stateNode,
								a = e.memoizedState;
							null !== a && (n = a.retryLane);
							break;
						case 19:
							r = e.stateNode;
							break;
						default:
							throw Error(l(314));
					}
					null !== r && r.delete(t), Pu(e, n);
				}
				function zu(e, t) {
					return qe(e, t);
				}
				function Lu(e, t, n, r) {
					(this.tag = e),
						(this.key = n),
						(this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null),
						(this.index = 0),
						(this.ref = null),
						(this.pendingProps = t),
						(this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
						(this.mode = r),
						(this.subtreeFlags = this.flags = 0),
						(this.deletions = null),
						(this.childLanes = this.lanes = 0),
						(this.alternate = null);
				}
				function Ou(e, t, n, r) {
					return new Lu(e, t, n, r);
				}
				function Nu(e) {
					return !(!(e = e.prototype) || !e.isReactComponent);
				}
				function Iu(e, t) {
					var n = e.alternate;
					return (
						null === n
							? (((n = Ou(e.tag, t, e.key, e.mode)).elementType = e.elementType),
							  (n.type = e.type),
							  (n.stateNode = e.stateNode),
							  (n.alternate = e),
							  (e.alternate = n))
							: ((n.pendingProps = t), (n.type = e.type), (n.flags = 0), (n.subtreeFlags = 0), (n.deletions = null)),
						(n.flags = 14680064 & e.flags),
						(n.childLanes = e.childLanes),
						(n.lanes = e.lanes),
						(n.child = e.child),
						(n.memoizedProps = e.memoizedProps),
						(n.memoizedState = e.memoizedState),
						(n.updateQueue = e.updateQueue),
						(t = e.dependencies),
						(n.dependencies = null === t ? null : { lanes: t.lanes, firstContext: t.firstContext }),
						(n.sibling = e.sibling),
						(n.index = e.index),
						(n.ref = e.ref),
						n
					);
				}
				function ju(e, t, n, r, a, i) {
					var o = 2;
					if (((r = e), 'function' === typeof e)) Nu(e) && (o = 1);
					else if ('string' === typeof e) o = 5;
					else
						e: switch (e) {
							case x:
								return Du(n.children, a, i, t);
							case E:
								(o = 8), (a |= 8);
								break;
							case C:
								return ((e = Ou(12, n, t, 2 | a)).elementType = C), (e.lanes = i), e;
							case M:
								return ((e = Ou(13, n, t, a)).elementType = M), (e.lanes = i), e;
							case z:
								return ((e = Ou(19, n, t, a)).elementType = z), (e.lanes = i), e;
							case N:
								return Ru(n, a, i, t);
							default:
								if ('object' === typeof e && null !== e)
									switch (e.$$typeof) {
										case T:
											o = 10;
											break e;
										case P:
											o = 9;
											break e;
										case _:
											o = 11;
											break e;
										case L:
											o = 14;
											break e;
										case O:
											(o = 16), (r = null);
											break e;
									}
								throw Error(l(130, null == e ? e : typeof e, ''));
						}
					return ((t = Ou(o, n, t, a)).elementType = e), (t.type = r), (t.lanes = i), t;
				}
				function Du(e, t, n, r) {
					return ((e = Ou(7, e, r, t)).lanes = n), e;
				}
				function Ru(e, t, n, r) {
					return ((e = Ou(22, e, r, t)).elementType = N), (e.lanes = n), (e.stateNode = { isHidden: !1 }), e;
				}
				function Au(e, t, n) {
					return ((e = Ou(6, e, null, t)).lanes = n), e;
				}
				function Fu(e, t, n) {
					return (
						((t = Ou(4, null !== e.children ? e.children : [], e.key, t)).lanes = n),
						(t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }),
						t
					);
				}
				function Bu(e, t, n, r, a) {
					(this.tag = t),
						(this.containerInfo = e),
						(this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
						(this.timeoutHandle = -1),
						(this.callbackNode = this.pendingContext = this.context = null),
						(this.callbackPriority = 0),
						(this.eventTimes = mt(0)),
						(this.expirationTimes = mt(-1)),
						(this.entangledLanes =
							this.finishedLanes =
							this.mutableReadLanes =
							this.expiredLanes =
							this.pingedLanes =
							this.suspendedLanes =
							this.pendingLanes =
								0),
						(this.entanglements = mt(0)),
						(this.identifierPrefix = r),
						(this.onRecoverableError = a),
						(this.mutableSourceEagerHydrationData = null);
				}
				function Vu(e, t, n, r, a, l, i, o, s) {
					return (
						(e = new Bu(e, t, n, o, s)),
						1 === t ? ((t = 1), !0 === l && (t |= 8)) : (t = 0),
						(l = Ou(3, null, null, t)),
						(e.current = l),
						(l.stateNode = e),
						(l.memoizedState = {
							element: r,
							isDehydrated: n,
							cache: null,
							transitions: null,
							pendingSuspenseBoundaries: null,
						}),
						Ll(l),
						e
					);
				}
				function Hu(e) {
					if (!e) return Pa;
					e: {
						if (He((e = e._reactInternals)) !== e || 1 !== e.tag) throw Error(l(170));
						var t = e;
						do {
							switch (t.tag) {
								case 3:
									t = t.stateNode.context;
									break e;
								case 1:
									if (Oa(t.type)) {
										t = t.stateNode.__reactInternalMemoizedMergedChildContext;
										break e;
									}
							}
							t = t.return;
						} while (null !== t);
						throw Error(l(171));
					}
					if (1 === e.tag) {
						var n = e.type;
						if (Oa(n)) return ja(e, n, t);
					}
					return t;
				}
				function Uu(e, t, n, r, a, l, i, o, s) {
					return (
						((e = Vu(n, r, !0, e, 0, l, 0, o, s)).context = Hu(null)),
						(n = e.current),
						((l = Nl((r = tu()), (a = nu(n)))).callback = void 0 !== t && null !== t ? t : null),
						Il(n, l, a),
						(e.current.lanes = a),
						gt(e, a, r),
						au(e, r),
						e
					);
				}
				function Gu(e, t, n, r) {
					var a = t.current,
						l = tu(),
						i = nu(a);
					return (
						(n = Hu(n)),
						null === t.context ? (t.context = n) : (t.pendingContext = n),
						((t = Nl(l, i)).payload = { element: e }),
						null !== (r = void 0 === r ? null : r) && (t.callback = r),
						null !== (e = Il(a, t, i)) && (ru(e, a, i, l), jl(e, a, i)),
						i
					);
				}
				function Wu(e) {
					return (e = e.current).child ? (e.child.tag, e.child.stateNode) : null;
				}
				function $u(e, t) {
					if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
						var n = e.retryLane;
						e.retryLane = 0 !== n && n < t ? n : t;
					}
				}
				function qu(e, t) {
					$u(e, t), (e = e.alternate) && $u(e, t);
				}
				Es = function (e, t, n) {
					if (null !== e)
						if (e.memoizedProps !== t.pendingProps || Ma.current) wo = !0;
						else {
							if (0 === (e.lanes & n) && 0 === (128 & t.flags))
								return (
									(wo = !1),
									(function (e, t, n) {
										switch (t.tag) {
											case 3:
												zo(t), pl();
												break;
											case 5:
												li(t);
												break;
											case 1:
												Oa(t.type) && Da(t);
												break;
											case 4:
												ri(t, t.stateNode.containerInfo);
												break;
											case 10:
												var r = t.type._context,
													a = t.memoizedProps.value;
												Ta(gl, r._currentValue), (r._currentValue = a);
												break;
											case 13:
												if (null !== (r = t.memoizedState))
													return null !== r.dehydrated
														? (Ta(oi, 1 & oi.current), (t.flags |= 128), null)
														: 0 !== (n & t.child.childLanes)
														? Ao(e, t, n)
														: (Ta(oi, 1 & oi.current), null !== (e = Wo(e, t, n)) ? e.sibling : null);
												Ta(oi, 1 & oi.current);
												break;
											case 19:
												if (((r = 0 !== (n & t.childLanes)), 0 !== (128 & e.flags))) {
													if (r) return Uo(e, t, n);
													t.flags |= 128;
												}
												if (
													(null !== (a = t.memoizedState) &&
														((a.rendering = null), (a.tail = null), (a.lastEffect = null)),
													Ta(oi, oi.current),
													r)
												)
													break;
												return null;
											case 22:
											case 23:
												return (t.lanes = 0), Co(e, t, n);
										}
										return Wo(e, t, n);
									})(e, t, n)
								);
							wo = 0 !== (131072 & e.flags);
						}
					else (wo = !1), al && 0 !== (1048576 & t.flags) && Za(t, $a, t.index);
					switch (((t.lanes = 0), t.tag)) {
						case 2:
							var r = t.type;
							Go(e, t), (e = t.pendingProps);
							var a = La(t, _a.current);
							El(t, n), (a = xi(null, t, r, e, a, n));
							var i = Ei();
							return (
								(t.flags |= 1),
								'object' === typeof a && null !== a && 'function' === typeof a.render && void 0 === a.$$typeof
									? ((t.tag = 1),
									  (t.memoizedState = null),
									  (t.updateQueue = null),
									  Oa(r) ? ((i = !0), Da(t)) : (i = !1),
									  (t.memoizedState = null !== a.state && void 0 !== a.state ? a.state : null),
									  Ll(t),
									  (a.updater = Vl),
									  (t.stateNode = a),
									  (a._reactInternals = t),
									  Wl(t, r, e, n),
									  (t = Mo(null, t, r, !0, i, n)))
									: ((t.tag = 0), al && i && el(t), So(null, t, a, n), (t = t.child)),
								t
							);
						case 16:
							r = t.elementType;
							e: {
								switch (
									(Go(e, t),
									(e = t.pendingProps),
									(r = (a = r._init)(r._payload)),
									(t.type = r),
									(a = t.tag =
										(function (e) {
											if ('function' === typeof e) return Nu(e) ? 1 : 0;
											if (void 0 !== e && null !== e) {
												if ((e = e.$$typeof) === _) return 11;
												if (e === L) return 14;
											}
											return 2;
										})(r)),
									(e = ml(r, e)),
									a)
								) {
									case 0:
										t = Po(null, t, r, e, n);
										break e;
									case 1:
										t = _o(null, t, r, e, n);
										break e;
									case 11:
										t = ko(null, t, r, e, n);
										break e;
									case 14:
										t = xo(null, t, r, ml(r.type, e), n);
										break e;
								}
								throw Error(l(306, r, ''));
							}
							return t;
						case 0:
							return (r = t.type), (a = t.pendingProps), Po(e, t, r, (a = t.elementType === r ? a : ml(r, a)), n);
						case 1:
							return (r = t.type), (a = t.pendingProps), _o(e, t, r, (a = t.elementType === r ? a : ml(r, a)), n);
						case 3:
							e: {
								if ((zo(t), null === e)) throw Error(l(387));
								(r = t.pendingProps), (a = (i = t.memoizedState).element), Ol(e, t), Rl(t, r, null, n);
								var o = t.memoizedState;
								if (((r = o.element), i.isDehydrated)) {
									if (
										((i = {
											element: r,
											isDehydrated: !1,
											cache: o.cache,
											pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
											transitions: o.transitions,
										}),
										(t.updateQueue.baseState = i),
										(t.memoizedState = i),
										256 & t.flags)
									) {
										t = Lo(e, t, r, n, (a = uo(Error(l(423)), t)));
										break e;
									}
									if (r !== a) {
										t = Lo(e, t, r, n, (a = uo(Error(l(424)), t)));
										break e;
									}
									for (
										rl = ua(t.stateNode.containerInfo.firstChild),
											nl = t,
											al = !0,
											ll = null,
											n = Kl(t, null, r, n),
											t.child = n;
										n;

									)
										(n.flags = (-3 & n.flags) | 4096), (n = n.sibling);
								} else {
									if ((pl(), r === a)) {
										t = Wo(e, t, n);
										break e;
									}
									So(e, t, r, n);
								}
								t = t.child;
							}
							return t;
						case 5:
							return (
								li(t),
								null === e && ul(t),
								(r = t.type),
								(a = t.pendingProps),
								(i = null !== e ? e.memoizedProps : null),
								(o = a.children),
								na(r, a) ? (o = null) : null !== i && na(r, i) && (t.flags |= 32),
								To(e, t),
								So(e, t, o, n),
								t.child
							);
						case 6:
							return null === e && ul(t), null;
						case 13:
							return Ao(e, t, n);
						case 4:
							return (
								ri(t, t.stateNode.containerInfo),
								(r = t.pendingProps),
								null === e ? (t.child = Yl(t, null, r, n)) : So(e, t, r, n),
								t.child
							);
						case 11:
							return (r = t.type), (a = t.pendingProps), ko(e, t, r, (a = t.elementType === r ? a : ml(r, a)), n);
						case 7:
							return So(e, t, t.pendingProps, n), t.child;
						case 8:
						case 12:
							return So(e, t, t.pendingProps.children, n), t.child;
						case 10:
							e: {
								if (
									((r = t.type._context),
									(a = t.pendingProps),
									(i = t.memoizedProps),
									(o = a.value),
									Ta(gl, r._currentValue),
									(r._currentValue = o),
									null !== i)
								)
									if (or(i.value, o)) {
										if (i.children === a.children && !Ma.current) {
											t = Wo(e, t, n);
											break e;
										}
									} else
										for (null !== (i = t.child) && (i.return = t); null !== i; ) {
											var s = i.dependencies;
											if (null !== s) {
												o = i.child;
												for (var u = s.firstContext; null !== u; ) {
													if (u.context === r) {
														if (1 === i.tag) {
															(u = Nl(-1, n & -n)).tag = 2;
															var c = i.updateQueue;
															if (null !== c) {
																var d = (c = c.shared).pending;
																null === d ? (u.next = u) : ((u.next = d.next), (d.next = u)), (c.pending = u);
															}
														}
														(i.lanes |= n),
															null !== (u = i.alternate) && (u.lanes |= n),
															xl(i.return, n, t),
															(s.lanes |= n);
														break;
													}
													u = u.next;
												}
											} else if (10 === i.tag) o = i.type === t.type ? null : i.child;
											else if (18 === i.tag) {
												if (null === (o = i.return)) throw Error(l(341));
												(o.lanes |= n), null !== (s = o.alternate) && (s.lanes |= n), xl(o, n, t), (o = i.sibling);
											} else o = i.child;
											if (null !== o) o.return = i;
											else
												for (o = i; null !== o; ) {
													if (o === t) {
														o = null;
														break;
													}
													if (null !== (i = o.sibling)) {
														(i.return = o.return), (o = i);
														break;
													}
													o = o.return;
												}
											i = o;
										}
								So(e, t, a.children, n), (t = t.child);
							}
							return t;
						case 9:
							return (
								(a = t.type),
								(r = t.pendingProps.children),
								El(t, n),
								(r = r((a = Cl(a)))),
								(t.flags |= 1),
								So(e, t, r, n),
								t.child
							);
						case 14:
							return (a = ml((r = t.type), t.pendingProps)), xo(e, t, r, (a = ml(r.type, a)), n);
						case 15:
							return Eo(e, t, t.type, t.pendingProps, n);
						case 17:
							return (
								(r = t.type),
								(a = t.pendingProps),
								(a = t.elementType === r ? a : ml(r, a)),
								Go(e, t),
								(t.tag = 1),
								Oa(r) ? ((e = !0), Da(t)) : (e = !1),
								El(t, n),
								Ul(t, r, a),
								Wl(t, r, a, n),
								Mo(null, t, r, !0, e, n)
							);
						case 19:
							return Uo(e, t, n);
						case 22:
							return Co(e, t, n);
					}
					throw Error(l(156, t.tag));
				};
				var Qu =
					'function' === typeof reportError
						? reportError
						: function (e) {
								console.error(e);
						  };
				function Xu(e) {
					this._internalRoot = e;
				}
				function Yu(e) {
					this._internalRoot = e;
				}
				function Ku(e) {
					return !(!e || (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType));
				}
				function Ju(e) {
					return !(
						!e ||
						(1 !== e.nodeType &&
							9 !== e.nodeType &&
							11 !== e.nodeType &&
							(8 !== e.nodeType || ' react-mount-point-unstable ' !== e.nodeValue))
					);
				}
				function Zu() {}
				function ec(e, t, n, r, a) {
					var l = n._reactRootContainer;
					if (l) {
						var i = l;
						if ('function' === typeof a) {
							var o = a;
							a = function () {
								var e = Wu(i);
								o.call(e);
							};
						}
						Gu(t, i, e, a);
					} else
						i = (function (e, t, n, r, a) {
							if (a) {
								if ('function' === typeof r) {
									var l = r;
									r = function () {
										var e = Wu(i);
										l.call(e);
									};
								}
								var i = Uu(t, r, e, 0, null, !1, 0, '', Zu);
								return (
									(e._reactRootContainer = i), (e[va] = i.current), Hr(8 === e.nodeType ? e.parentNode : e), du(), i
								);
							}
							for (; (a = e.lastChild); ) e.removeChild(a);
							if ('function' === typeof r) {
								var o = r;
								r = function () {
									var e = Wu(s);
									o.call(e);
								};
							}
							var s = Vu(e, 0, !1, null, 0, !1, 0, '', Zu);
							return (
								(e._reactRootContainer = s),
								(e[va] = s.current),
								Hr(8 === e.nodeType ? e.parentNode : e),
								du(function () {
									Gu(t, s, n, r);
								}),
								s
							);
						})(n, t, e, a, r);
					return Wu(i);
				}
				(Yu.prototype.render = Xu.prototype.render =
					function (e) {
						var t = this._internalRoot;
						if (null === t) throw Error(l(409));
						Gu(e, t, null, null);
					}),
					(Yu.prototype.unmount = Xu.prototype.unmount =
						function () {
							var e = this._internalRoot;
							if (null !== e) {
								this._internalRoot = null;
								var t = e.containerInfo;
								du(function () {
									Gu(null, e, null, null);
								}),
									(t[va] = null);
							}
						}),
					(Yu.prototype.unstable_scheduleHydration = function (e) {
						if (e) {
							var t = Et();
							e = { blockedOn: null, target: e, priority: t };
							for (var n = 0; n < Nt.length && 0 !== t && t < Nt[n].priority; n++);
							Nt.splice(n, 0, e), 0 === n && Rt(e);
						}
					}),
					(St = function (e) {
						switch (e.tag) {
							case 3:
								var t = e.stateNode;
								if (t.current.memoizedState.isDehydrated) {
									var n = dt(t.pendingLanes);
									0 !== n && (yt(t, 1 | n), au(t, Ke()), 0 === (6 & Ms) && ((Us = Ke() + 500), Ha()));
								}
								break;
							case 13:
								du(function () {
									var t = Ml(e, 1);
									if (null !== t) {
										var n = tu();
										ru(t, e, 1, n);
									}
								}),
									qu(e, 1);
						}
					}),
					(kt = function (e) {
						if (13 === e.tag) {
							var t = Ml(e, 134217728);
							if (null !== t) ru(t, e, 134217728, tu());
							qu(e, 134217728);
						}
					}),
					(xt = function (e) {
						if (13 === e.tag) {
							var t = nu(e),
								n = Ml(e, t);
							if (null !== n) ru(n, e, t, tu());
							qu(e, t);
						}
					}),
					(Et = function () {
						return bt;
					}),
					(Ct = function (e, t) {
						var n = bt;
						try {
							return (bt = e), t();
						} finally {
							bt = n;
						}
					}),
					(ke = function (e, t, n) {
						switch (t) {
							case 'input':
								if ((J(e, n), (t = n.name), 'radio' === n.type && null != t)) {
									for (n = e; n.parentNode; ) n = n.parentNode;
									for (
										n = n.querySelectorAll('input[name=' + JSON.stringify('' + t) + '][type="radio"]'), t = 0;
										t < n.length;
										t++
									) {
										var r = n[t];
										if (r !== e && r.form === e.form) {
											var a = Sa(r);
											if (!a) throw Error(l(90));
											q(r), J(r, a);
										}
									}
								}
								break;
							case 'textarea':
								le(e, n);
								break;
							case 'select':
								null != (t = n.value) && ne(e, !!n.multiple, t, !1);
						}
					}),
					(_e = cu),
					(Me = du);
				var tc = { usingClientEntryPoint: !1, Events: [ba, wa, Sa, Te, Pe, cu] },
					nc = { findFiberByHostInstance: ya, bundleType: 0, version: '18.2.0', rendererPackageName: 'react-dom' },
					rc = {
						bundleType: nc.bundleType,
						version: nc.version,
						rendererPackageName: nc.rendererPackageName,
						rendererConfig: nc.rendererConfig,
						overrideHookState: null,
						overrideHookStateDeletePath: null,
						overrideHookStateRenamePath: null,
						overrideProps: null,
						overridePropsDeletePath: null,
						overridePropsRenamePath: null,
						setErrorHandler: null,
						setSuspenseHandler: null,
						scheduleUpdate: null,
						currentDispatcherRef: w.ReactCurrentDispatcher,
						findHostInstanceByFiber: function (e) {
							return null === (e = We(e)) ? null : e.stateNode;
						},
						findFiberByHostInstance:
							nc.findFiberByHostInstance ||
							function () {
								return null;
							},
						findHostInstancesForRefresh: null,
						scheduleRefresh: null,
						scheduleRoot: null,
						setRefreshHandler: null,
						getCurrentFiber: null,
						reconcilerVersion: '18.2.0-next-9e3b772b8-20220608',
					};
				if ('undefined' !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
					var ac = __REACT_DEVTOOLS_GLOBAL_HOOK__;
					if (!ac.isDisabled && ac.supportsFiber)
						try {
							(at = ac.inject(rc)), (lt = ac);
						} catch (ce) {}
				}
				(t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tc),
					(t.createPortal = function (e, t) {
						var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
						if (!Ku(t)) throw Error(l(200));
						return (function (e, t, n) {
							var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
							return { $$typeof: k, key: null == r ? null : '' + r, children: e, containerInfo: t, implementation: n };
						})(e, t, null, n);
					}),
					(t.createRoot = function (e, t) {
						if (!Ku(e)) throw Error(l(299));
						var n = !1,
							r = '',
							a = Qu;
						return (
							null !== t &&
								void 0 !== t &&
								(!0 === t.unstable_strictMode && (n = !0),
								void 0 !== t.identifierPrefix && (r = t.identifierPrefix),
								void 0 !== t.onRecoverableError && (a = t.onRecoverableError)),
							(t = Vu(e, 1, !1, null, 0, n, 0, r, a)),
							(e[va] = t.current),
							Hr(8 === e.nodeType ? e.parentNode : e),
							new Xu(t)
						);
					}),
					(t.findDOMNode = function (e) {
						if (null == e) return null;
						if (1 === e.nodeType) return e;
						var t = e._reactInternals;
						if (void 0 === t) {
							if ('function' === typeof e.render) throw Error(l(188));
							throw ((e = Object.keys(e).join(',')), Error(l(268, e)));
						}
						return (e = null === (e = We(t)) ? null : e.stateNode);
					}),
					(t.flushSync = function (e) {
						return du(e);
					}),
					(t.hydrate = function (e, t, n) {
						if (!Ju(t)) throw Error(l(200));
						return ec(null, e, t, !0, n);
					}),
					(t.hydrateRoot = function (e, t, n) {
						if (!Ku(e)) throw Error(l(405));
						var r = (null != n && n.hydratedSources) || null,
							a = !1,
							i = '',
							o = Qu;
						if (
							(null !== n &&
								void 0 !== n &&
								(!0 === n.unstable_strictMode && (a = !0),
								void 0 !== n.identifierPrefix && (i = n.identifierPrefix),
								void 0 !== n.onRecoverableError && (o = n.onRecoverableError)),
							(t = Uu(t, null, e, 1, null != n ? n : null, a, 0, i, o)),
							(e[va] = t.current),
							Hr(e),
							r)
						)
							for (e = 0; e < r.length; e++)
								(a = (a = (n = r[e])._getVersion)(n._source)),
									null == t.mutableSourceEagerHydrationData
										? (t.mutableSourceEagerHydrationData = [n, a])
										: t.mutableSourceEagerHydrationData.push(n, a);
						return new Yu(t);
					}),
					(t.render = function (e, t, n) {
						if (!Ju(t)) throw Error(l(200));
						return ec(null, e, t, !1, n);
					}),
					(t.unmountComponentAtNode = function (e) {
						if (!Ju(e)) throw Error(l(40));
						return (
							!!e._reactRootContainer &&
							(du(function () {
								ec(null, null, e, !1, function () {
									(e._reactRootContainer = null), (e[va] = null);
								});
							}),
							!0)
						);
					}),
					(t.unstable_batchedUpdates = cu),
					(t.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
						if (!Ju(n)) throw Error(l(200));
						if (null == e || void 0 === e._reactInternals) throw Error(l(38));
						return ec(e, t, n, !1, r);
					}),
					(t.version = '18.2.0-next-9e3b772b8-20220608');
			},
			250: function (e, t, n) {
				var r = n(164);
				(t.createRoot = r.createRoot), (t.hydrateRoot = r.hydrateRoot);
			},
			164: function (e, t, n) {
				!(function e() {
					if (
						'undefined' !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
						'function' === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
					)
						try {
							__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
						} catch (t) {
							console.error(t);
						}
				})(),
					(e.exports = n(463));
			},
			374: function (e, t, n) {
				var r = n(791),
					a = Symbol.for('react.element'),
					l = Symbol.for('react.fragment'),
					i = Object.prototype.hasOwnProperty,
					o = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
					s = { key: !0, ref: !0, __self: !0, __source: !0 };
				function u(e, t, n) {
					var r,
						l = {},
						u = null,
						c = null;
					for (r in (void 0 !== n && (u = '' + n),
					void 0 !== t.key && (u = '' + t.key),
					void 0 !== t.ref && (c = t.ref),
					t))
						i.call(t, r) && !s.hasOwnProperty(r) && (l[r] = t[r]);
					if (e && e.defaultProps) for (r in (t = e.defaultProps)) void 0 === l[r] && (l[r] = t[r]);
					return { $$typeof: a, type: e, key: u, ref: c, props: l, _owner: o.current };
				}
				(t.Fragment = l), (t.jsx = u), (t.jsxs = u);
			},
			117: function (e, t) {
				var n = Symbol.for('react.element'),
					r = Symbol.for('react.portal'),
					a = Symbol.for('react.fragment'),
					l = Symbol.for('react.strict_mode'),
					i = Symbol.for('react.profiler'),
					o = Symbol.for('react.provider'),
					s = Symbol.for('react.context'),
					u = Symbol.for('react.forward_ref'),
					c = Symbol.for('react.suspense'),
					d = Symbol.for('react.memo'),
					f = Symbol.for('react.lazy'),
					p = Symbol.iterator;
				var v = {
						isMounted: function () {
							return !1;
						},
						enqueueForceUpdate: function () {},
						enqueueReplaceState: function () {},
						enqueueSetState: function () {},
					},
					h = Object.assign,
					m = {};
				function g(e, t, n) {
					(this.props = e), (this.context = t), (this.refs = m), (this.updater = n || v);
				}
				function y() {}
				function b(e, t, n) {
					(this.props = e), (this.context = t), (this.refs = m), (this.updater = n || v);
				}
				(g.prototype.isReactComponent = {}),
					(g.prototype.setState = function (e, t) {
						if ('object' !== typeof e && 'function' !== typeof e && null != e)
							throw Error(
								'setState(...): takes an object of state variables to update or a function which returns an object of state variables.',
							);
						this.updater.enqueueSetState(this, e, t, 'setState');
					}),
					(g.prototype.forceUpdate = function (e) {
						this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
					}),
					(y.prototype = g.prototype);
				var w = (b.prototype = new y());
				(w.constructor = b), h(w, g.prototype), (w.isPureReactComponent = !0);
				var S = Array.isArray,
					k = Object.prototype.hasOwnProperty,
					x = { current: null },
					E = { key: !0, ref: !0, __self: !0, __source: !0 };
				function C(e, t, r) {
					var a,
						l = {},
						i = null,
						o = null;
					if (null != t)
						for (a in (void 0 !== t.ref && (o = t.ref), void 0 !== t.key && (i = '' + t.key), t))
							k.call(t, a) && !E.hasOwnProperty(a) && (l[a] = t[a]);
					var s = arguments.length - 2;
					if (1 === s) l.children = r;
					else if (1 < s) {
						for (var u = Array(s), c = 0; c < s; c++) u[c] = arguments[c + 2];
						l.children = u;
					}
					if (e && e.defaultProps) for (a in (s = e.defaultProps)) void 0 === l[a] && (l[a] = s[a]);
					return { $$typeof: n, type: e, key: i, ref: o, props: l, _owner: x.current };
				}
				function T(e) {
					return 'object' === typeof e && null !== e && e.$$typeof === n;
				}
				var P = /\/+/g;
				function _(e, t) {
					return 'object' === typeof e && null !== e && null != e.key
						? (function (e) {
								var t = { '=': '=0', ':': '=2' };
								return (
									'$' +
									e.replace(/[=:]/g, function (e) {
										return t[e];
									})
								);
						  })('' + e.key)
						: t.toString(36);
				}
				function M(e, t, a, l, i) {
					var o = typeof e;
					('undefined' !== o && 'boolean' !== o) || (e = null);
					var s = !1;
					if (null === e) s = !0;
					else
						switch (o) {
							case 'string':
							case 'number':
								s = !0;
								break;
							case 'object':
								switch (e.$$typeof) {
									case n:
									case r:
										s = !0;
								}
						}
					if (s)
						return (
							(i = i((s = e))),
							(e = '' === l ? '.' + _(s, 0) : l),
							S(i)
								? ((a = ''),
								  null != e && (a = e.replace(P, '$&/') + '/'),
								  M(i, t, a, '', function (e) {
										return e;
								  }))
								: null != i &&
								  (T(i) &&
										(i = (function (e, t) {
											return { $$typeof: n, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
										})(i, a + (!i.key || (s && s.key === i.key) ? '' : ('' + i.key).replace(P, '$&/') + '/') + e)),
								  t.push(i)),
							1
						);
					if (((s = 0), (l = '' === l ? '.' : l + ':'), S(e)))
						for (var u = 0; u < e.length; u++) {
							var c = l + _((o = e[u]), u);
							s += M(o, t, a, c, i);
						}
					else if (
						((c = (function (e) {
							return null === e || 'object' !== typeof e
								? null
								: 'function' === typeof (e = (p && e[p]) || e['@@iterator'])
								? e
								: null;
						})(e)),
						'function' === typeof c)
					)
						for (e = c.call(e), u = 0; !(o = e.next()).done; ) s += M((o = o.value), t, a, (c = l + _(o, u++)), i);
					else if ('object' === o)
						throw (
							((t = String(e)),
							Error(
								'Objects are not valid as a React child (found: ' +
									('[object Object]' === t ? 'object with keys {' + Object.keys(e).join(', ') + '}' : t) +
									'). If you meant to render a collection of children, use an array instead.',
							))
						);
					return s;
				}
				function z(e, t, n) {
					if (null == e) return e;
					var r = [],
						a = 0;
					return (
						M(e, r, '', '', function (e) {
							return t.call(n, e, a++);
						}),
						r
					);
				}
				function L(e) {
					if (-1 === e._status) {
						var t = e._result;
						(t = t()).then(
							function (t) {
								(0 !== e._status && -1 !== e._status) || ((e._status = 1), (e._result = t));
							},
							function (t) {
								(0 !== e._status && -1 !== e._status) || ((e._status = 2), (e._result = t));
							},
						),
							-1 === e._status && ((e._status = 0), (e._result = t));
					}
					if (1 === e._status) return e._result.default;
					throw e._result;
				}
				var O = { current: null },
					N = { transition: null },
					I = { ReactCurrentDispatcher: O, ReactCurrentBatchConfig: N, ReactCurrentOwner: x };
				(t.Children = {
					map: z,
					forEach: function (e, t, n) {
						z(
							e,
							function () {
								t.apply(this, arguments);
							},
							n,
						);
					},
					count: function (e) {
						var t = 0;
						return (
							z(e, function () {
								t++;
							}),
							t
						);
					},
					toArray: function (e) {
						return (
							z(e, function (e) {
								return e;
							}) || []
						);
					},
					only: function (e) {
						if (!T(e)) throw Error('React.Children.only expected to receive a single React element child.');
						return e;
					},
				}),
					(t.Component = g),
					(t.Fragment = a),
					(t.Profiler = i),
					(t.PureComponent = b),
					(t.StrictMode = l),
					(t.Suspense = c),
					(t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = I),
					(t.cloneElement = function (e, t, r) {
						if (null === e || void 0 === e)
							throw Error('React.cloneElement(...): The argument must be a React element, but you passed ' + e + '.');
						var a = h({}, e.props),
							l = e.key,
							i = e.ref,
							o = e._owner;
						if (null != t) {
							if (
								(void 0 !== t.ref && ((i = t.ref), (o = x.current)),
								void 0 !== t.key && (l = '' + t.key),
								e.type && e.type.defaultProps)
							)
								var s = e.type.defaultProps;
							for (u in t)
								k.call(t, u) && !E.hasOwnProperty(u) && (a[u] = void 0 === t[u] && void 0 !== s ? s[u] : t[u]);
						}
						var u = arguments.length - 2;
						if (1 === u) a.children = r;
						else if (1 < u) {
							s = Array(u);
							for (var c = 0; c < u; c++) s[c] = arguments[c + 2];
							a.children = s;
						}
						return { $$typeof: n, type: e.type, key: l, ref: i, props: a, _owner: o };
					}),
					(t.createContext = function (e) {
						return (
							((e = {
								$$typeof: s,
								_currentValue: e,
								_currentValue2: e,
								_threadCount: 0,
								Provider: null,
								Consumer: null,
								_defaultValue: null,
								_globalName: null,
							}).Provider = { $$typeof: o, _context: e }),
							(e.Consumer = e)
						);
					}),
					(t.createElement = C),
					(t.createFactory = function (e) {
						var t = C.bind(null, e);
						return (t.type = e), t;
					}),
					(t.createRef = function () {
						return { current: null };
					}),
					(t.forwardRef = function (e) {
						return { $$typeof: u, render: e };
					}),
					(t.isValidElement = T),
					(t.lazy = function (e) {
						return { $$typeof: f, _payload: { _status: -1, _result: e }, _init: L };
					}),
					(t.memo = function (e, t) {
						return { $$typeof: d, type: e, compare: void 0 === t ? null : t };
					}),
					(t.startTransition = function (e) {
						var t = N.transition;
						N.transition = {};
						try {
							e();
						} finally {
							N.transition = t;
						}
					}),
					(t.unstable_act = function () {
						throw Error('act(...) is not supported in production builds of React.');
					}),
					(t.useCallback = function (e, t) {
						return O.current.useCallback(e, t);
					}),
					(t.useContext = function (e) {
						return O.current.useContext(e);
					}),
					(t.useDebugValue = function () {}),
					(t.useDeferredValue = function (e) {
						return O.current.useDeferredValue(e);
					}),
					(t.useEffect = function (e, t) {
						return O.current.useEffect(e, t);
					}),
					(t.useId = function () {
						return O.current.useId();
					}),
					(t.useImperativeHandle = function (e, t, n) {
						return O.current.useImperativeHandle(e, t, n);
					}),
					(t.useInsertionEffect = function (e, t) {
						return O.current.useInsertionEffect(e, t);
					}),
					(t.useLayoutEffect = function (e, t) {
						return O.current.useLayoutEffect(e, t);
					}),
					(t.useMemo = function (e, t) {
						return O.current.useMemo(e, t);
					}),
					(t.useReducer = function (e, t, n) {
						return O.current.useReducer(e, t, n);
					}),
					(t.useRef = function (e) {
						return O.current.useRef(e);
					}),
					(t.useState = function (e) {
						return O.current.useState(e);
					}),
					(t.useSyncExternalStore = function (e, t, n) {
						return O.current.useSyncExternalStore(e, t, n);
					}),
					(t.useTransition = function () {
						return O.current.useTransition();
					}),
					(t.version = '18.2.0');
			},
			791: function (e, t, n) {
				e.exports = n(117);
			},
			184: function (e, t, n) {
				e.exports = n(374);
			},
			813: function (e, t) {
				function n(e, t) {
					var n = e.length;
					e.push(t);
					e: for (; 0 < n; ) {
						var r = (n - 1) >>> 1,
							a = e[r];
						if (!(0 < l(a, t))) break e;
						(e[r] = t), (e[n] = a), (n = r);
					}
				}
				function r(e) {
					return 0 === e.length ? null : e[0];
				}
				function a(e) {
					if (0 === e.length) return null;
					var t = e[0],
						n = e.pop();
					if (n !== t) {
						e[0] = n;
						e: for (var r = 0, a = e.length, i = a >>> 1; r < i; ) {
							var o = 2 * (r + 1) - 1,
								s = e[o],
								u = o + 1,
								c = e[u];
							if (0 > l(s, n))
								u < a && 0 > l(c, s) ? ((e[r] = c), (e[u] = n), (r = u)) : ((e[r] = s), (e[o] = n), (r = o));
							else {
								if (!(u < a && 0 > l(c, n))) break e;
								(e[r] = c), (e[u] = n), (r = u);
							}
						}
					}
					return t;
				}
				function l(e, t) {
					var n = e.sortIndex - t.sortIndex;
					return 0 !== n ? n : e.id - t.id;
				}
				if ('object' === typeof performance && 'function' === typeof performance.now) {
					var i = performance;
					t.unstable_now = function () {
						return i.now();
					};
				} else {
					var o = Date,
						s = o.now();
					t.unstable_now = function () {
						return o.now() - s;
					};
				}
				var u = [],
					c = [],
					d = 1,
					f = null,
					p = 3,
					v = !1,
					h = !1,
					m = !1,
					g = 'function' === typeof setTimeout ? setTimeout : null,
					y = 'function' === typeof clearTimeout ? clearTimeout : null,
					b = 'undefined' !== typeof setImmediate ? setImmediate : null;
				function w(e) {
					for (var t = r(c); null !== t; ) {
						if (null === t.callback) a(c);
						else {
							if (!(t.startTime <= e)) break;
							a(c), (t.sortIndex = t.expirationTime), n(u, t);
						}
						t = r(c);
					}
				}
				function S(e) {
					if (((m = !1), w(e), !h))
						if (null !== r(u)) (h = !0), N(k);
						else {
							var t = r(c);
							null !== t && I(S, t.startTime - e);
						}
				}
				function k(e, n) {
					(h = !1), m && ((m = !1), y(T), (T = -1)), (v = !0);
					var l = p;
					try {
						for (w(n), f = r(u); null !== f && (!(f.expirationTime > n) || (e && !M())); ) {
							var i = f.callback;
							if ('function' === typeof i) {
								(f.callback = null), (p = f.priorityLevel);
								var o = i(f.expirationTime <= n);
								(n = t.unstable_now()), 'function' === typeof o ? (f.callback = o) : f === r(u) && a(u), w(n);
							} else a(u);
							f = r(u);
						}
						if (null !== f) var s = !0;
						else {
							var d = r(c);
							null !== d && I(S, d.startTime - n), (s = !1);
						}
						return s;
					} finally {
						(f = null), (p = l), (v = !1);
					}
				}
				'undefined' !== typeof navigator &&
					void 0 !== navigator.scheduling &&
					void 0 !== navigator.scheduling.isInputPending &&
					navigator.scheduling.isInputPending.bind(navigator.scheduling);
				var x,
					E = !1,
					C = null,
					T = -1,
					P = 5,
					_ = -1;
				function M() {
					return !(t.unstable_now() - _ < P);
				}
				function z() {
					if (null !== C) {
						var e = t.unstable_now();
						_ = e;
						var n = !0;
						try {
							n = C(!0, e);
						} finally {
							n ? x() : ((E = !1), (C = null));
						}
					} else E = !1;
				}
				if ('function' === typeof b)
					x = function () {
						b(z);
					};
				else if ('undefined' !== typeof MessageChannel) {
					var L = new MessageChannel(),
						O = L.port2;
					(L.port1.onmessage = z),
						(x = function () {
							O.postMessage(null);
						});
				} else
					x = function () {
						g(z, 0);
					};
				function N(e) {
					(C = e), E || ((E = !0), x());
				}
				function I(e, n) {
					T = g(function () {
						e(t.unstable_now());
					}, n);
				}
				(t.unstable_IdlePriority = 5),
					(t.unstable_ImmediatePriority = 1),
					(t.unstable_LowPriority = 4),
					(t.unstable_NormalPriority = 3),
					(t.unstable_Profiling = null),
					(t.unstable_UserBlockingPriority = 2),
					(t.unstable_cancelCallback = function (e) {
						e.callback = null;
					}),
					(t.unstable_continueExecution = function () {
						h || v || ((h = !0), N(k));
					}),
					(t.unstable_forceFrameRate = function (e) {
						0 > e || 125 < e
							? console.error(
									'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported',
							  )
							: (P = 0 < e ? Math.floor(1e3 / e) : 5);
					}),
					(t.unstable_getCurrentPriorityLevel = function () {
						return p;
					}),
					(t.unstable_getFirstCallbackNode = function () {
						return r(u);
					}),
					(t.unstable_next = function (e) {
						switch (p) {
							case 1:
							case 2:
							case 3:
								var t = 3;
								break;
							default:
								t = p;
						}
						var n = p;
						p = t;
						try {
							return e();
						} finally {
							p = n;
						}
					}),
					(t.unstable_pauseExecution = function () {}),
					(t.unstable_requestPaint = function () {}),
					(t.unstable_runWithPriority = function (e, t) {
						switch (e) {
							case 1:
							case 2:
							case 3:
							case 4:
							case 5:
								break;
							default:
								e = 3;
						}
						var n = p;
						p = e;
						try {
							return t();
						} finally {
							p = n;
						}
					}),
					(t.unstable_scheduleCallback = function (e, a, l) {
						var i = t.unstable_now();
						switch (
							('object' === typeof l && null !== l
								? (l = 'number' === typeof (l = l.delay) && 0 < l ? i + l : i)
								: (l = i),
							e)
						) {
							case 1:
								var o = -1;
								break;
							case 2:
								o = 250;
								break;
							case 5:
								o = 1073741823;
								break;
							case 4:
								o = 1e4;
								break;
							default:
								o = 5e3;
						}
						return (
							(e = {
								id: d++,
								callback: a,
								priorityLevel: e,
								startTime: l,
								expirationTime: (o = l + o),
								sortIndex: -1,
							}),
							l > i
								? ((e.sortIndex = l),
								  n(c, e),
								  null === r(u) && e === r(c) && (m ? (y(T), (T = -1)) : (m = !0), I(S, l - i)))
								: ((e.sortIndex = o), n(u, e), h || v || ((h = !0), N(k))),
							e
						);
					}),
					(t.unstable_shouldYield = M),
					(t.unstable_wrapCallback = function (e) {
						var t = p;
						return function () {
							var n = p;
							p = t;
							try {
								return e.apply(this, arguments);
							} finally {
								p = n;
							}
						};
					});
			},
			296: function (e, t, n) {
				e.exports = n(813);
			},
		},
		t = {};
	function n(r) {
		var a = t[r];
		if (void 0 !== a) return a.exports;
		var l = (t[r] = { exports: {} });
		return e[r](l, l.exports, n), l.exports;
	}
	!(function () {
		var e = n(791),
			t = n(250),
			r = n(184),
			a = function (e) {
				var t = e.homeRef,
					n = e.aboutRef,
					a = e.portfolioRef;
				return (0, r.jsxs)('div', {
					className: 'App',
					children: [
						(0, r.jsxs)('header', {
							className: 'header',
							children: [
								(0, r.jsx)('a', { href: '#', rel: 'noopener noreferrer', className: 'logo', children: 'James.' }),
								(0, r.jsxs)('nav', {
									className: 'navbar',
									children: [
										(0, r.jsx)('a', {
											href: '',
											className: 'hoverUnderlineEffect',
											onClick: function (e) {
												e.preventDefault(), t.current.scrollIntoView({ behavior: 'smooth' });
											},
											children: 'Home',
										}),
										(0, r.jsx)('a', {
											href: '',
											className: 'hoverUnderlineEffect',
											onClick: function (e) {
												e.preventDefault(), n.current.scrollIntoView({ behavior: 'smooth' });
											},
											children: 'About',
										}),
										(0, r.jsx)('a', {
											href: '',
											className: 'hoverUnderlineEffect',
											onClick: function (e) {
												e.preventDefault(), a.current.scrollIntoView({ behavior: 'smooth' });
											},
											children: 'Portfolio',
										}),
										(0, r.jsx)('a', {
											href: 'mailto:jtkanedev@gmail.com',
											target: '_blank',
											rel: 'noopener noreferrer',
											className: 'hoverUnderlineEffect',
											children: 'Contact',
										}),
									],
								}),
							],
						}),
						(0, r.jsx)('section', {
							className: 'home',
							ref: t,
							children: (0, r.jsxs)('div', {
								className: 'home-content',
								children: [
									(0, r.jsx)('h1', { children: "Hi, I'm James Kane" }),
									(0, r.jsx)('h3', { children: 'Blockchain Developer' }),
									(0, r.jsx)('p', {
										children:
											"Web3 enthusiast on an adventure to build the future of the internet and participating in the revolution of a decentralized web. Fostering an ever-growing obsession with Blockchain and NFTs. Wondering if I'm the only one that has frequent dreams about Smart Contracts.",
									}),
									(0, r.jsxs)('div', {
										className: 'btn-wrapper',
										children: [
											(0, r.jsx)('a', {
												href: 'https://dl.dropboxusercontent.com/s/pmbo3wzykfmmfc7/CV%201.pdf?dl=0',
												download: !0,
												target: '_blank',
												rel: 'noopener noreferrer',
												children: 'Download CV',
											}),
											(0, r.jsx)('a', {
												href: 'mailto:jtkanedev@gmail.com',
												target: '_blank',
												rel: 'noopener noreferrer',
												children: 'Reach Out',
											}),
										],
									}),
									(0, r.jsxs)('div', {
										className: 'link-wrapper',
										children: [
											(0, r.jsx)('a', {
												href: 'https://twitter.com/_jtkane',
												children: (0, r.jsx)('i', {
													className: 'bx bxl-twitter',
													target: '_blank',
													rel: 'noopener noreferrer',
												}),
											}),
											(0, r.jsx)('a', {
												href: 'https://www.linkedin.com/in/james-kane-3190b8276/',
												children: (0, r.jsx)('i', {
													className: 'bx bxl-linkedin',
													target: '_blank',
													rel: 'noopener noreferrer',
												}),
											}),
											(0, r.jsx)('a', {
												href: 'https://github.com/JKaneDev',
												children: (0, r.jsx)('i', {
													className: 'bx bxl-github',
													target: '_blank',
													rel: 'noopener noreferrer',
												}),
											}),
										],
									}),
								],
							}),
						}),
					],
				});
			},
			l = (0, e.forwardRef)(function (e, t) {
				return (0,
				r.jsx)('section', { className: 'about', 'data-target': 'about', ref: t, children: (0, r.jsxs)('div', { className: 'about-info', children: [(0, r.jsxs)('h2', { className: 'heading', children: ['About ', (0, r.jsx)('span', { children: 'Me' })] }), (0, r.jsx)('h3', {}), (0, r.jsx)('p', { children: "In 2022 I decided to become a Blockchain Developer. After going through the curriculum of Harvard's CS50, The Odin Project's Full-Stack Javascript Path & DApp University's Blockchain Developer Bootcamp - I developed a solid set of skills in various technologies and a strong grasp of programming fundamentals that gave me the confidence to develop my own Web3 projects. I demonstrate these skills in my capstone project - a Twitter Clone built on Ethereum. Click the link below to see this project and a few others I had a blast making." }), (0, r.jsx)('a', { href: '', className: 'btn', children: 'See Projects' })] }) });
			});
		function i(e, t) {
			(null == t || t > e.length) && (t = e.length);
			for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
			return r;
		}
		function o(e, t) {
			if (e) {
				if ('string' === typeof e) return i(e, t);
				var n = Object.prototype.toString.call(e).slice(8, -1);
				return (
					'Object' === n && e.constructor && (n = e.constructor.name),
					'Map' === n || 'Set' === n
						? Array.from(e)
						: 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
						? i(e, t)
						: void 0
				);
			}
		}
		function s(e, t) {
			return (
				(function (e) {
					if (Array.isArray(e)) return e;
				})(e) ||
				(function (e, t) {
					var n = null == e ? null : ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
					if (null != n) {
						var r,
							a,
							l,
							i,
							o = [],
							s = !0,
							u = !1;
						try {
							if (((l = (n = n.call(e)).next), 0 === t)) {
								if (Object(n) !== n) return;
								s = !1;
							} else for (; !(s = (r = l.call(n)).done) && (o.push(r.value), o.length !== t); s = !0);
						} catch (c) {
							(u = !0), (a = c);
						} finally {
							try {
								if (!s && null != n.return && ((i = n.return()), Object(i) !== i)) return;
							} finally {
								if (u) throw a;
							}
						}
						return o;
					}
				})(e, t) ||
				o(e, t) ||
				(function () {
					throw new TypeError(
						'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
					);
				})()
			);
		}
		function u(e) {
			return (
				(u =
					'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
						? function (e) {
								return typeof e;
						  }
						: function (e) {
								return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
									? 'symbol'
									: typeof e;
						  }),
				u(e)
			);
		}
		function c(e) {
			var t = (function (e, t) {
				if ('object' !== u(e) || null === e) return e;
				var n = e[Symbol.toPrimitive];
				if (void 0 !== n) {
					var r = n.call(e, t || 'default');
					if ('object' !== u(r)) return r;
					throw new TypeError('@@toPrimitive must return a primitive value.');
				}
				return ('string' === t ? String : Number)(e);
			})(e, 'string');
			return 'symbol' === u(t) ? t : String(t);
		}
		function d(e, t, n) {
			return (
				(t = c(t)) in e
					? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
					: (e[t] = n),
				e
			);
		}
		function f(e, t) {
			var n = Object.keys(e);
			if (Object.getOwnPropertySymbols) {
				var r = Object.getOwnPropertySymbols(e);
				t &&
					(r = r.filter(function (t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable;
					})),
					n.push.apply(n, r);
			}
			return n;
		}
		function p(e, t) {
			if (null == e) return {};
			var n,
				r,
				a = (function (e, t) {
					if (null == e) return {};
					var n,
						r,
						a = {},
						l = Object.keys(e);
					for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
					return a;
				})(e, t);
			if (Object.getOwnPropertySymbols) {
				var l = Object.getOwnPropertySymbols(e);
				for (r = 0; r < l.length; r++)
					(n = l[r]), t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n]));
			}
			return a;
		}
		function v(e) {
			return (
				(function (e) {
					if (Array.isArray(e)) return i(e);
				})(e) ||
				(function (e) {
					if (('undefined' !== typeof Symbol && null != e[Symbol.iterator]) || null != e['@@iterator'])
						return Array.from(e);
				})(e) ||
				o(e) ||
				(function () {
					throw new TypeError(
						'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
					);
				})()
			);
		}
		function h(e, t) {
			for (var n = 0; n < t.length; n++) {
				var r = t[n];
				(r.enumerable = r.enumerable || !1),
					(r.configurable = !0),
					'value' in r && (r.writable = !0),
					Object.defineProperty(e, c(r.key), r);
			}
		}
		function m(e) {
			return null !== e && 'object' === typeof e && 'constructor' in e && e.constructor === Object;
		}
		function g() {
			var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
				t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
			Object.keys(t).forEach(function (n) {
				'undefined' === typeof e[n]
					? (e[n] = t[n])
					: m(t[n]) && m(e[n]) && Object.keys(t[n]).length > 0 && g(e[n], t[n]);
			});
		}
		var y = {
			body: {},
			addEventListener: function () {},
			removeEventListener: function () {},
			activeElement: { blur: function () {}, nodeName: '' },
			querySelector: function () {
				return null;
			},
			querySelectorAll: function () {
				return [];
			},
			getElementById: function () {
				return null;
			},
			createEvent: function () {
				return { initEvent: function () {} };
			},
			createElement: function () {
				return {
					children: [],
					childNodes: [],
					style: {},
					setAttribute: function () {},
					getElementsByTagName: function () {
						return [];
					},
				};
			},
			createElementNS: function () {
				return {};
			},
			importNode: function () {
				return null;
			},
			location: { hash: '', host: '', hostname: '', href: '', origin: '', pathname: '', protocol: '', search: '' },
		};
		function b() {
			var e = 'undefined' !== typeof document ? document : {};
			return g(e, y), e;
		}
		var w,
			S,
			k,
			x = {
				document: y,
				navigator: { userAgent: '' },
				location: { hash: '', host: '', hostname: '', href: '', origin: '', pathname: '', protocol: '', search: '' },
				history: { replaceState: function () {}, pushState: function () {}, go: function () {}, back: function () {} },
				CustomEvent: function () {
					return this;
				},
				addEventListener: function () {},
				removeEventListener: function () {},
				getComputedStyle: function () {
					return {
						getPropertyValue: function () {
							return '';
						},
					};
				},
				Image: function () {},
				Date: function () {},
				screen: {},
				setTimeout: function () {},
				clearTimeout: function () {},
				matchMedia: function () {
					return {};
				},
				requestAnimationFrame: function (e) {
					return 'undefined' === typeof setTimeout ? (e(), null) : setTimeout(e, 0);
				},
				cancelAnimationFrame: function (e) {
					'undefined' !== typeof setTimeout && clearTimeout(e);
				},
			};
		function E() {
			var e = 'undefined' !== typeof window ? window : {};
			return g(e, x), e;
		}
		function C(e) {
			return setTimeout(e, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0);
		}
		function T() {
			return Date.now();
		}
		function P(e) {
			var t,
				n,
				r,
				a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'x',
				l = E(),
				i = (function (e) {
					var t,
						n = E();
					return (
						n.getComputedStyle && (t = n.getComputedStyle(e, null)),
						!t && e.currentStyle && (t = e.currentStyle),
						t || (t = e.style),
						t
					);
				})(e);
			return (
				l.WebKitCSSMatrix
					? ((n = i.transform || i.webkitTransform).split(',').length > 6 &&
							(n = n
								.split(', ')
								.map(function (e) {
									return e.replace(',', '.');
								})
								.join(', ')),
					  (r = new l.WebKitCSSMatrix('none' === n ? '' : n)))
					: (t = (r =
							i.MozTransform ||
							i.OTransform ||
							i.MsTransform ||
							i.msTransform ||
							i.transform ||
							i.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,'))
							.toString()
							.split(',')),
				'x' === a && (n = l.WebKitCSSMatrix ? r.m41 : 16 === t.length ? parseFloat(t[12]) : parseFloat(t[4])),
				'y' === a && (n = l.WebKitCSSMatrix ? r.m42 : 16 === t.length ? parseFloat(t[13]) : parseFloat(t[5])),
				n || 0
			);
		}
		function _(e) {
			return (
				'object' === typeof e &&
				null !== e &&
				e.constructor &&
				'Object' === Object.prototype.toString.call(e).slice(8, -1)
			);
		}
		function M() {
			for (
				var e,
					t = Object(arguments.length <= 0 ? void 0 : arguments[0]),
					n = ['__proto__', 'constructor', 'prototype'],
					r = 1;
				r < arguments.length;
				r += 1
			) {
				var a = r < 0 || arguments.length <= r ? void 0 : arguments[r];
				if (
					void 0 !== a &&
					null !== a &&
					((e = a),
					!('undefined' !== typeof window && 'undefined' !== typeof window.HTMLElement
						? e instanceof HTMLElement
						: e && (1 === e.nodeType || 11 === e.nodeType)))
				)
					for (
						var l = Object.keys(Object(a)).filter(function (e) {
								return n.indexOf(e) < 0;
							}),
							i = 0,
							o = l.length;
						i < o;
						i += 1
					) {
						var s = l[i],
							u = Object.getOwnPropertyDescriptor(a, s);
						void 0 !== u &&
							u.enumerable &&
							(_(t[s]) && _(a[s])
								? a[s].__swiper__
									? (t[s] = a[s])
									: M(t[s], a[s])
								: !_(t[s]) && _(a[s])
								? ((t[s] = {}), a[s].__swiper__ ? (t[s] = a[s]) : M(t[s], a[s]))
								: (t[s] = a[s]));
					}
			}
			return t;
		}
		function z(e, t, n) {
			e.style.setProperty(t, n);
		}
		function L(e) {
			var t,
				n = e.swiper,
				r = e.targetPosition,
				a = e.side,
				l = E(),
				i = -n.translate,
				o = null,
				s = n.params.speed;
			(n.wrapperEl.style.scrollSnapType = 'none'), l.cancelAnimationFrame(n.cssModeFrameID);
			var u = r > i ? 'next' : 'prev',
				c = function (e, t) {
					return ('next' === u && e >= t) || ('prev' === u && e <= t);
				};
			!(function e() {
				(t = new Date().getTime()), null === o && (o = t);
				var u = Math.max(Math.min((t - o) / s, 1), 0),
					f = 0.5 - Math.cos(u * Math.PI) / 2,
					p = i + f * (r - i);
				if ((c(p, r) && (p = r), n.wrapperEl.scrollTo(d({}, a, p)), c(p, r)))
					return (
						(n.wrapperEl.style.overflow = 'hidden'),
						(n.wrapperEl.style.scrollSnapType = ''),
						setTimeout(function () {
							(n.wrapperEl.style.overflow = ''), n.wrapperEl.scrollTo(d({}, a, p));
						}),
						void l.cancelAnimationFrame(n.cssModeFrameID)
					);
				n.cssModeFrameID = l.requestAnimationFrame(e);
			})();
		}
		function O(e) {
			var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : '';
			return v(e.children).filter(function (e) {
				return e.matches(t);
			});
		}
		function N(e) {
			var t,
				n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
				r = document.createElement(e);
			return (t = r.classList).add.apply(t, v(Array.isArray(n) ? n : [n])), r;
		}
		function I(e, t) {
			return E().getComputedStyle(e, null).getPropertyValue(t);
		}
		function j(e) {
			var t,
				n = e;
			if (n) {
				for (t = 0; null !== (n = n.previousSibling); ) 1 === n.nodeType && (t += 1);
				return t;
			}
		}
		function D(e, t) {
			for (var n = [], r = e.parentElement; r; ) t ? r.matches(t) && n.push(r) : n.push(r), (r = r.parentElement);
			return n;
		}
		function R(e, t, n) {
			var r = E();
			return n
				? e['width' === t ? 'offsetWidth' : 'offsetHeight'] +
						parseFloat(r.getComputedStyle(e, null).getPropertyValue('width' === t ? 'margin-right' : 'margin-top')) +
						parseFloat(r.getComputedStyle(e, null).getPropertyValue('width' === t ? 'margin-left' : 'margin-bottom'))
				: e.offsetWidth;
		}
		function A() {
			return (
				w ||
					(w = (function () {
						var e = E(),
							t = b();
						return {
							smoothScroll: t.documentElement && 'scrollBehavior' in t.documentElement.style,
							touch: !!('ontouchstart' in e || (e.DocumentTouch && t instanceof e.DocumentTouch)),
						};
					})()),
				w
			);
		}
		function F() {
			return (
				S ||
					(S = (function () {
						var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).userAgent,
							t = A(),
							n = E(),
							r = n.navigator.platform,
							a = e || n.navigator.userAgent,
							l = { ios: !1, android: !1 },
							i = n.screen.width,
							o = n.screen.height,
							s = a.match(/(Android);?[\s\/]+([\d.]+)?/),
							u = a.match(/(iPad).*OS\s([\d_]+)/),
							c = a.match(/(iPod)(.*OS\s([\d_]+))?/),
							d = !u && a.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
							f = 'Win32' === r,
							p = 'MacIntel' === r;
						return (
							!u &&
								p &&
								t.touch &&
								[
									'1024x1366',
									'1366x1024',
									'834x1194',
									'1194x834',
									'834x1112',
									'1112x834',
									'768x1024',
									'1024x768',
									'820x1180',
									'1180x820',
									'810x1080',
									'1080x810',
								].indexOf(''.concat(i, 'x').concat(o)) >= 0 &&
								((u = a.match(/(Version)\/([\d.]+)/)) || (u = [0, 1, '13_0_0']), (p = !1)),
							s && !f && ((l.os = 'android'), (l.android = !0)),
							(u || d || c) && ((l.os = 'ios'), (l.ios = !0)),
							l
						);
					})(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {})),
				S
			);
		}
		function B() {
			return (
				k ||
					(k = (function () {
						var e = E(),
							t = !1;
						function n() {
							var t = e.navigator.userAgent.toLowerCase();
							return t.indexOf('safari') >= 0 && t.indexOf('chrome') < 0 && t.indexOf('android') < 0;
						}
						if (n()) {
							var r = String(e.navigator.userAgent);
							if (r.includes('Version/')) {
								var a = s(
										r
											.split('Version/')[1]
											.split(' ')[0]
											.split('.')
											.map(function (e) {
												return Number(e);
											}),
										2,
									),
									l = a[0],
									i = a[1];
								t = l < 16 || (16 === l && i < 2);
							}
						}
						return {
							isSafari: t || n(),
							needPerspectiveFix: t,
							isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent),
						};
					})()),
				k
			);
		}
		var V = {
			on: function (e, t, n) {
				var r = this;
				if (!r.eventsListeners || r.destroyed) return r;
				if ('function' !== typeof t) return r;
				var a = n ? 'unshift' : 'push';
				return (
					e.split(' ').forEach(function (e) {
						r.eventsListeners[e] || (r.eventsListeners[e] = []), r.eventsListeners[e][a](t);
					}),
					r
				);
			},
			once: function (e, t, n) {
				var r = this;
				if (!r.eventsListeners || r.destroyed) return r;
				if ('function' !== typeof t) return r;
				function a() {
					r.off(e, a), a.__emitterProxy && delete a.__emitterProxy;
					for (var n = arguments.length, l = new Array(n), i = 0; i < n; i++) l[i] = arguments[i];
					t.apply(r, l);
				}
				return (a.__emitterProxy = t), r.on(e, a, n);
			},
			onAny: function (e, t) {
				var n = this;
				if (!n.eventsListeners || n.destroyed) return n;
				if ('function' !== typeof e) return n;
				var r = t ? 'unshift' : 'push';
				return n.eventsAnyListeners.indexOf(e) < 0 && n.eventsAnyListeners[r](e), n;
			},
			offAny: function (e) {
				var t = this;
				if (!t.eventsListeners || t.destroyed) return t;
				if (!t.eventsAnyListeners) return t;
				var n = t.eventsAnyListeners.indexOf(e);
				return n >= 0 && t.eventsAnyListeners.splice(n, 1), t;
			},
			off: function (e, t) {
				var n = this;
				return !n.eventsListeners || n.destroyed
					? n
					: n.eventsListeners
					? (e.split(' ').forEach(function (e) {
							'undefined' === typeof t
								? (n.eventsListeners[e] = [])
								: n.eventsListeners[e] &&
								  n.eventsListeners[e].forEach(function (r, a) {
										(r === t || (r.__emitterProxy && r.__emitterProxy === t)) && n.eventsListeners[e].splice(a, 1);
								  });
					  }),
					  n)
					: n;
			},
			emit: function () {
				var e,
					t,
					n,
					r = this;
				if (!r.eventsListeners || r.destroyed) return r;
				if (!r.eventsListeners) return r;
				for (var a = arguments.length, l = new Array(a), i = 0; i < a; i++) l[i] = arguments[i];
				return (
					'string' === typeof l[0] || Array.isArray(l[0])
						? ((e = l[0]), (t = l.slice(1, l.length)), (n = r))
						: ((e = l[0].events), (t = l[0].data), (n = l[0].context || r)),
					t.unshift(n),
					(Array.isArray(e) ? e : e.split(' ')).forEach(function (e) {
						r.eventsAnyListeners &&
							r.eventsAnyListeners.length &&
							r.eventsAnyListeners.forEach(function (r) {
								r.apply(n, [e].concat(v(t)));
							}),
							r.eventsListeners &&
								r.eventsListeners[e] &&
								r.eventsListeners[e].forEach(function (e) {
									e.apply(n, t);
								});
					}),
					r
				);
			},
		};
		var H = function (e, t) {
				if (e && !e.destroyed && e.params) {
					var n = t.closest(e.isElement ? 'swiper-slide' : '.'.concat(e.params.slideClass));
					if (n) {
						var r = n.querySelector('.'.concat(e.params.lazyPreloaderClass));
						r && r.remove();
					}
				}
			},
			U = function (e, t) {
				if (e.slides[t]) {
					var n = e.slides[t].querySelector('[loading="lazy"]');
					n && n.removeAttribute('loading');
				}
			},
			G = function (e) {
				if (e && !e.destroyed && e.params) {
					var t = e.params.lazyPreloadPrevNext,
						n = e.slides.length;
					if (n && t && !(t < 0)) {
						t = Math.min(t, n);
						var r = 'auto' === e.params.slidesPerView ? e.slidesPerViewDynamic() : Math.ceil(e.params.slidesPerView),
							a = e.activeIndex,
							l = a + r - 1;
						if (e.params.rewind)
							for (var i = a - t; i <= l + t; i += 1) {
								var o = ((i % n) + n) % n;
								o !== a && o > l && U(e, o);
							}
						else for (var s = Math.max(l - t, 0); s <= Math.min(l + t, n - 1); s += 1) s !== a && s > l && U(e, s);
					}
				}
			};
		var W = {
			updateSize: function () {
				var e,
					t,
					n = this,
					r = n.el;
				(e = 'undefined' !== typeof n.params.width && null !== n.params.width ? n.params.width : r.clientWidth),
					(t = 'undefined' !== typeof n.params.height && null !== n.params.height ? n.params.height : r.clientHeight),
					(0 === e && n.isHorizontal()) ||
						(0 === t && n.isVertical()) ||
						((e = e - parseInt(I(r, 'padding-left') || 0, 10) - parseInt(I(r, 'padding-right') || 0, 10)),
						(t = t - parseInt(I(r, 'padding-top') || 0, 10) - parseInt(I(r, 'padding-bottom') || 0, 10)),
						Number.isNaN(e) && (e = 0),
						Number.isNaN(t) && (t = 0),
						Object.assign(n, { width: e, height: t, size: n.isHorizontal() ? e : t }));
			},
			updateSlides: function () {
				var e = this;
				function t(t) {
					return e.isHorizontal()
						? t
						: {
								width: 'height',
								'margin-top': 'margin-left',
								'margin-bottom ': 'margin-right',
								'margin-left': 'margin-top',
								'margin-right': 'margin-bottom',
								'padding-left': 'padding-top',
								'padding-right': 'padding-bottom',
								marginRight: 'marginBottom',
						  }[t];
				}
				function n(e, n) {
					return parseFloat(e.getPropertyValue(t(n)) || 0);
				}
				var r = e.params,
					a = e.wrapperEl,
					l = e.slidesEl,
					i = e.size,
					o = e.rtlTranslate,
					s = e.wrongRTL,
					u = e.virtual && r.virtual.enabled,
					c = u ? e.virtual.slides.length : e.slides.length,
					d = O(l, '.'.concat(e.params.slideClass, ', swiper-slide')),
					f = u ? e.virtual.slides.length : d.length,
					p = [],
					v = [],
					h = [],
					m = r.slidesOffsetBefore;
				'function' === typeof m && (m = r.slidesOffsetBefore.call(e));
				var g = r.slidesOffsetAfter;
				'function' === typeof g && (g = r.slidesOffsetAfter.call(e));
				var y = e.snapGrid.length,
					b = e.slidesGrid.length,
					w = r.spaceBetween,
					S = -m,
					k = 0,
					x = 0;
				if ('undefined' !== typeof i) {
					'string' === typeof w && w.indexOf('%') >= 0
						? (w = (parseFloat(w.replace('%', '')) / 100) * i)
						: 'string' === typeof w && (w = parseFloat(w)),
						(e.virtualSize = -w),
						d.forEach(function (e) {
							o ? (e.style.marginLeft = '') : (e.style.marginRight = ''),
								(e.style.marginBottom = ''),
								(e.style.marginTop = '');
						}),
						r.centeredSlides &&
							r.cssMode &&
							(z(a, '--swiper-centered-offset-before', ''), z(a, '--swiper-centered-offset-after', ''));
					var E,
						C = r.grid && r.grid.rows > 1 && e.grid;
					C && e.grid.initSlides(f);
					for (
						var T =
								'auto' === r.slidesPerView &&
								r.breakpoints &&
								Object.keys(r.breakpoints).filter(function (e) {
									return 'undefined' !== typeof r.breakpoints[e].slidesPerView;
								}).length > 0,
							P = 0;
						P < f;
						P += 1
					) {
						E = 0;
						var _ = void 0;
						if ((d[P] && (_ = d[P]), C && e.grid.updateSlide(P, _, f, t), !d[P] || 'none' !== I(_, 'display'))) {
							if ('auto' === r.slidesPerView) {
								T && (d[P].style[t('width')] = '');
								var M = getComputedStyle(_),
									L = _.style.transform,
									N = _.style.webkitTransform;
								if ((L && (_.style.transform = 'none'), N && (_.style.webkitTransform = 'none'), r.roundLengths))
									E = e.isHorizontal() ? R(_, 'width', !0) : R(_, 'height', !0);
								else {
									var j = n(M, 'width'),
										D = n(M, 'padding-left'),
										A = n(M, 'padding-right'),
										F = n(M, 'margin-left'),
										B = n(M, 'margin-right'),
										V = M.getPropertyValue('box-sizing');
									if (V && 'border-box' === V) E = j + F + B;
									else {
										var H = _,
											U = H.clientWidth;
										E = j + D + A + F + B + (H.offsetWidth - U);
									}
								}
								L && (_.style.transform = L), N && (_.style.webkitTransform = N), r.roundLengths && (E = Math.floor(E));
							} else
								(E = (i - (r.slidesPerView - 1) * w) / r.slidesPerView),
									r.roundLengths && (E = Math.floor(E)),
									d[P] && (d[P].style[t('width')] = ''.concat(E, 'px'));
							d[P] && (d[P].swiperSlideSize = E),
								h.push(E),
								r.centeredSlides
									? ((S = S + E / 2 + k / 2 + w),
									  0 === k && 0 !== P && (S = S - i / 2 - w),
									  0 === P && (S = S - i / 2 - w),
									  Math.abs(S) < 0.001 && (S = 0),
									  r.roundLengths && (S = Math.floor(S)),
									  x % r.slidesPerGroup === 0 && p.push(S),
									  v.push(S))
									: (r.roundLengths && (S = Math.floor(S)),
									  (x - Math.min(e.params.slidesPerGroupSkip, x)) % e.params.slidesPerGroup === 0 && p.push(S),
									  v.push(S),
									  (S = S + E + w)),
								(e.virtualSize += E + w),
								(k = E),
								(x += 1);
						}
					}
					if (
						((e.virtualSize = Math.max(e.virtualSize, i) + g),
						o &&
							s &&
							('slide' === r.effect || 'coverflow' === r.effect) &&
							(a.style.width = ''.concat(e.virtualSize + w, 'px')),
						r.setWrapperSize && (a.style[t('width')] = ''.concat(e.virtualSize + w, 'px')),
						C && e.grid.updateWrapperSize(E, p, t),
						!r.centeredSlides)
					) {
						for (var G = [], W = 0; W < p.length; W += 1) {
							var $ = p[W];
							r.roundLengths && ($ = Math.floor($)), p[W] <= e.virtualSize - i && G.push($);
						}
						(p = G), Math.floor(e.virtualSize - i) - Math.floor(p[p.length - 1]) > 1 && p.push(e.virtualSize - i);
					}
					if (u && r.loop) {
						var q = h[0] + w;
						if (r.slidesPerGroup > 1)
							for (
								var Q = Math.ceil((e.virtual.slidesBefore + e.virtual.slidesAfter) / r.slidesPerGroup),
									X = q * r.slidesPerGroup,
									Y = 0;
								Y < Q;
								Y += 1
							)
								p.push(p[p.length - 1] + X);
						for (var K = 0; K < e.virtual.slidesBefore + e.virtual.slidesAfter; K += 1)
							1 === r.slidesPerGroup && p.push(p[p.length - 1] + q), v.push(v[v.length - 1] + q), (e.virtualSize += q);
					}
					if ((0 === p.length && (p = [0]), 0 !== w)) {
						var J = e.isHorizontal() && o ? 'marginLeft' : t('marginRight');
						d.filter(function (e, t) {
							return !(r.cssMode && !r.loop) || t !== d.length - 1;
						}).forEach(function (e) {
							e.style[J] = ''.concat(w, 'px');
						});
					}
					if (r.centeredSlides && r.centeredSlidesBounds) {
						var Z = 0;
						h.forEach(function (e) {
							Z += e + (w || 0);
						});
						var ee = (Z -= w) - i;
						p = p.map(function (e) {
							return e < 0 ? -m : e > ee ? ee + g : e;
						});
					}
					if (r.centerInsufficientSlides) {
						var te = 0;
						if (
							(h.forEach(function (e) {
								te += e + (w || 0);
							}),
							(te -= w) < i)
						) {
							var ne = (i - te) / 2;
							p.forEach(function (e, t) {
								p[t] = e - ne;
							}),
								v.forEach(function (e, t) {
									v[t] = e + ne;
								});
						}
					}
					if (
						(Object.assign(e, { slides: d, snapGrid: p, slidesGrid: v, slidesSizesGrid: h }),
						r.centeredSlides && r.cssMode && !r.centeredSlidesBounds)
					) {
						z(a, '--swiper-centered-offset-before', ''.concat(-p[0], 'px')),
							z(a, '--swiper-centered-offset-after', ''.concat(e.size / 2 - h[h.length - 1] / 2, 'px'));
						var re = -e.snapGrid[0],
							ae = -e.slidesGrid[0];
						(e.snapGrid = e.snapGrid.map(function (e) {
							return e + re;
						})),
							(e.slidesGrid = e.slidesGrid.map(function (e) {
								return e + ae;
							}));
					}
					if (
						(f !== c && e.emit('slidesLengthChange'),
						p.length !== y && (e.params.watchOverflow && e.checkOverflow(), e.emit('snapGridLengthChange')),
						v.length !== b && e.emit('slidesGridLengthChange'),
						r.watchSlidesProgress && e.updateSlidesOffset(),
						!u && !r.cssMode && ('slide' === r.effect || 'fade' === r.effect))
					) {
						var le = ''.concat(r.containerModifierClass, 'backface-hidden'),
							ie = e.el.classList.contains(le);
						f <= r.maxBackfaceHiddenSlides ? ie || e.el.classList.add(le) : ie && e.el.classList.remove(le);
					}
				}
			},
			updateAutoHeight: function (e) {
				var t,
					n = this,
					r = [],
					a = n.virtual && n.params.virtual.enabled,
					l = 0;
				'number' === typeof e ? n.setTransition(e) : !0 === e && n.setTransition(n.params.speed);
				var i = function (e) {
					return a ? n.slides[n.getSlideIndexByData(e)] : n.slides[e];
				};
				if ('auto' !== n.params.slidesPerView && n.params.slidesPerView > 1)
					if (n.params.centeredSlides)
						(n.visibleSlides || []).forEach(function (e) {
							r.push(e);
						});
					else
						for (t = 0; t < Math.ceil(n.params.slidesPerView); t += 1) {
							var o = n.activeIndex + t;
							if (o > n.slides.length && !a) break;
							r.push(i(o));
						}
				else r.push(i(n.activeIndex));
				for (t = 0; t < r.length; t += 1)
					if ('undefined' !== typeof r[t]) {
						var s = r[t].offsetHeight;
						l = s > l ? s : l;
					}
				(l || 0 === l) && (n.wrapperEl.style.height = ''.concat(l, 'px'));
			},
			updateSlidesOffset: function () {
				for (
					var e = this,
						t = e.slides,
						n = e.isElement ? (e.isHorizontal() ? e.wrapperEl.offsetLeft : e.wrapperEl.offsetTop) : 0,
						r = 0;
					r < t.length;
					r += 1
				)
					t[r].swiperSlideOffset =
						(e.isHorizontal() ? t[r].offsetLeft : t[r].offsetTop) - n - e.cssOverflowAdjustment();
			},
			updateSlidesProgress: function () {
				var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (this && this.translate) || 0,
					t = this,
					n = t.params,
					r = t.slides,
					a = t.rtlTranslate,
					l = t.snapGrid;
				if (0 !== r.length) {
					'undefined' === typeof r[0].swiperSlideOffset && t.updateSlidesOffset();
					var i = -e;
					a && (i = e),
						r.forEach(function (e) {
							e.classList.remove(n.slideVisibleClass);
						}),
						(t.visibleSlidesIndexes = []),
						(t.visibleSlides = []);
					var o = n.spaceBetween;
					'string' === typeof o && o.indexOf('%') >= 0
						? (o = (parseFloat(o.replace('%', '')) / 100) * t.size)
						: 'string' === typeof o && (o = parseFloat(o));
					for (var s = 0; s < r.length; s += 1) {
						var u = r[s],
							c = u.swiperSlideOffset;
						n.cssMode && n.centeredSlides && (c -= r[0].swiperSlideOffset);
						var d = (i + (n.centeredSlides ? t.minTranslate() : 0) - c) / (u.swiperSlideSize + o),
							f = (i - l[0] + (n.centeredSlides ? t.minTranslate() : 0) - c) / (u.swiperSlideSize + o),
							p = -(i - c),
							v = p + t.slidesSizesGrid[s];
						((p >= 0 && p < t.size - 1) || (v > 1 && v <= t.size) || (p <= 0 && v >= t.size)) &&
							(t.visibleSlides.push(u), t.visibleSlidesIndexes.push(s), r[s].classList.add(n.slideVisibleClass)),
							(u.progress = a ? -d : d),
							(u.originalProgress = a ? -f : f);
					}
				}
			},
			updateProgress: function (e) {
				var t = this;
				if ('undefined' === typeof e) {
					var n = t.rtlTranslate ? -1 : 1;
					e = (t && t.translate && t.translate * n) || 0;
				}
				var r = t.params,
					a = t.maxTranslate() - t.minTranslate(),
					l = t.progress,
					i = t.isBeginning,
					o = t.isEnd,
					s = t.progressLoop,
					u = i,
					c = o;
				if (0 === a) (l = 0), (i = !0), (o = !0);
				else {
					l = (e - t.minTranslate()) / a;
					var d = Math.abs(e - t.minTranslate()) < 1,
						f = Math.abs(e - t.maxTranslate()) < 1;
					(i = d || l <= 0), (o = f || l >= 1), d && (l = 0), f && (l = 1);
				}
				if (r.loop) {
					var p = t.getSlideIndexByData(0),
						v = t.getSlideIndexByData(t.slides.length - 1),
						h = t.slidesGrid[p],
						m = t.slidesGrid[v],
						g = t.slidesGrid[t.slidesGrid.length - 1],
						y = Math.abs(e);
					(s = y >= h ? (y - h) / g : (y + g - m) / g) > 1 && (s -= 1);
				}
				Object.assign(t, { progress: l, progressLoop: s, isBeginning: i, isEnd: o }),
					(r.watchSlidesProgress || (r.centeredSlides && r.autoHeight)) && t.updateSlidesProgress(e),
					i && !u && t.emit('reachBeginning toEdge'),
					o && !c && t.emit('reachEnd toEdge'),
					((u && !i) || (c && !o)) && t.emit('fromEdge'),
					t.emit('progress', l);
			},
			updateSlidesClasses: function () {
				var e,
					t = this,
					n = t.slides,
					r = t.params,
					a = t.slidesEl,
					l = t.activeIndex,
					i = t.virtual && r.virtual.enabled,
					o = function (e) {
						return O(a, '.'.concat(r.slideClass).concat(e, ', swiper-slide').concat(e))[0];
					};
				if (
					(n.forEach(function (e) {
						e.classList.remove(r.slideActiveClass, r.slideNextClass, r.slidePrevClass);
					}),
					i)
				)
					if (r.loop) {
						var s = l - t.virtual.slidesBefore;
						s < 0 && (s = t.virtual.slides.length + s),
							s >= t.virtual.slides.length && (s -= t.virtual.slides.length),
							(e = o('[data-swiper-slide-index="'.concat(s, '"]')));
					} else e = o('[data-swiper-slide-index="'.concat(l, '"]'));
				else e = n[l];
				if (e) {
					e.classList.add(r.slideActiveClass);
					var u = (function (e, t) {
						for (var n = []; e.nextElementSibling; ) {
							var r = e.nextElementSibling;
							t ? r.matches(t) && n.push(r) : n.push(r), (e = r);
						}
						return n;
					})(e, '.'.concat(r.slideClass, ', swiper-slide'))[0];
					r.loop && !u && (u = n[0]), u && u.classList.add(r.slideNextClass);
					var c = (function (e, t) {
						for (var n = []; e.previousElementSibling; ) {
							var r = e.previousElementSibling;
							t ? r.matches(t) && n.push(r) : n.push(r), (e = r);
						}
						return n;
					})(e, '.'.concat(r.slideClass, ', swiper-slide'))[0];
					r.loop && 0 === !c && (c = n[n.length - 1]), c && c.classList.add(r.slidePrevClass);
				}
				t.emitSlidesClasses();
			},
			updateActiveIndex: function (e) {
				var t,
					n,
					r = this,
					a = r.rtlTranslate ? r.translate : -r.translate,
					l = r.snapGrid,
					i = r.params,
					o = r.activeIndex,
					s = r.realIndex,
					u = r.snapIndex,
					c = e,
					d = function (e) {
						var t = e - r.virtual.slidesBefore;
						return (
							t < 0 && (t = r.virtual.slides.length + t),
							t >= r.virtual.slides.length && (t -= r.virtual.slides.length),
							t
						);
					};
				if (
					('undefined' === typeof c &&
						(c = (function (e) {
							for (
								var t, n = e.slidesGrid, r = e.params, a = e.rtlTranslate ? e.translate : -e.translate, l = 0;
								l < n.length;
								l += 1
							)
								'undefined' !== typeof n[l + 1]
									? a >= n[l] && a < n[l + 1] - (n[l + 1] - n[l]) / 2
										? (t = l)
										: a >= n[l] && a < n[l + 1] && (t = l + 1)
									: a >= n[l] && (t = l);
							return r.normalizeSlideIndex && (t < 0 || 'undefined' === typeof t) && (t = 0), t;
						})(r)),
					l.indexOf(a) >= 0)
				)
					t = l.indexOf(a);
				else {
					var f = Math.min(i.slidesPerGroupSkip, c);
					t = f + Math.floor((c - f) / i.slidesPerGroup);
				}
				if ((t >= l.length && (t = l.length - 1), c === o))
					return (
						t !== u && ((r.snapIndex = t), r.emit('snapIndexChange')),
						void (r.params.loop && r.virtual && r.params.virtual.enabled && (r.realIndex = d(c)))
					);
				(n =
					r.virtual && i.virtual.enabled && i.loop
						? d(c)
						: r.slides[c]
						? parseInt(r.slides[c].getAttribute('data-swiper-slide-index') || c, 10)
						: c),
					Object.assign(r, {
						previousSnapIndex: u,
						snapIndex: t,
						previousRealIndex: s,
						realIndex: n,
						previousIndex: o,
						activeIndex: c,
					}),
					r.initialized && G(r),
					r.emit('activeIndexChange'),
					r.emit('snapIndexChange'),
					s !== n && r.emit('realIndexChange'),
					(r.initialized || r.params.runCallbacksOnInit) && r.emit('slideChange');
			},
			updateClickedSlide: function (e) {
				var t,
					n = this,
					r = n.params,
					a = e.closest('.'.concat(r.slideClass, ', swiper-slide')),
					l = !1;
				if (a)
					for (var i = 0; i < n.slides.length; i += 1)
						if (n.slides[i] === a) {
							(l = !0), (t = i);
							break;
						}
				if (!a || !l) return (n.clickedSlide = void 0), void (n.clickedIndex = void 0);
				(n.clickedSlide = a),
					n.virtual && n.params.virtual.enabled
						? (n.clickedIndex = parseInt(a.getAttribute('data-swiper-slide-index'), 10))
						: (n.clickedIndex = t),
					r.slideToClickedSlide &&
						void 0 !== n.clickedIndex &&
						n.clickedIndex !== n.activeIndex &&
						n.slideToClickedSlide();
			},
		};
		var $ = {
			getTranslate: function () {
				var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.isHorizontal() ? 'x' : 'y',
					t = this,
					n = t.params,
					r = t.rtlTranslate,
					a = t.translate,
					l = t.wrapperEl;
				if (n.virtualTranslate) return r ? -a : a;
				if (n.cssMode) return a;
				var i = P(l, e);
				return (i += t.cssOverflowAdjustment()), r && (i = -i), i || 0;
			},
			setTranslate: function (e, t) {
				var n = this,
					r = n.rtlTranslate,
					a = n.params,
					l = n.wrapperEl,
					i = n.progress,
					o = 0,
					s = 0;
				n.isHorizontal() ? (o = r ? -e : e) : (s = e),
					a.roundLengths && ((o = Math.floor(o)), (s = Math.floor(s))),
					(n.previousTranslate = n.translate),
					(n.translate = n.isHorizontal() ? o : s),
					a.cssMode
						? (l[n.isHorizontal() ? 'scrollLeft' : 'scrollTop'] = n.isHorizontal() ? -o : -s)
						: a.virtualTranslate ||
						  (n.isHorizontal() ? (o -= n.cssOverflowAdjustment()) : (s -= n.cssOverflowAdjustment()),
						  (l.style.transform = 'translate3d('.concat(o, 'px, ').concat(s, 'px, ').concat(0, 'px)')));
				var u = n.maxTranslate() - n.minTranslate();
				(0 === u ? 0 : (e - n.minTranslate()) / u) !== i && n.updateProgress(e), n.emit('setTranslate', n.translate, t);
			},
			minTranslate: function () {
				return -this.snapGrid[0];
			},
			maxTranslate: function () {
				return -this.snapGrid[this.snapGrid.length - 1];
			},
			translateTo: function () {
				var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
					t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.params.speed,
					n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
					r = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
					a = arguments.length > 4 ? arguments[4] : void 0,
					l = this,
					i = l.params,
					o = l.wrapperEl;
				if (l.animating && i.preventInteractionOnTransition) return !1;
				var s,
					u = l.minTranslate(),
					c = l.maxTranslate();
				if (((s = r && e > u ? u : r && e < c ? c : e), l.updateProgress(s), i.cssMode)) {
					var f = l.isHorizontal();
					if (0 === t) o[f ? 'scrollLeft' : 'scrollTop'] = -s;
					else {
						var p;
						if (!l.support.smoothScroll) return L({ swiper: l, targetPosition: -s, side: f ? 'left' : 'top' }), !0;
						o.scrollTo((d((p = {}), f ? 'left' : 'top', -s), d(p, 'behavior', 'smooth'), p));
					}
					return !0;
				}
				return (
					0 === t
						? (l.setTransition(0),
						  l.setTranslate(s),
						  n && (l.emit('beforeTransitionStart', t, a), l.emit('transitionEnd')))
						: (l.setTransition(t),
						  l.setTranslate(s),
						  n && (l.emit('beforeTransitionStart', t, a), l.emit('transitionStart')),
						  l.animating ||
								((l.animating = !0),
								l.onTranslateToWrapperTransitionEnd ||
									(l.onTranslateToWrapperTransitionEnd = function (e) {
										l &&
											!l.destroyed &&
											e.target === this &&
											(l.wrapperEl.removeEventListener('transitionend', l.onTranslateToWrapperTransitionEnd),
											(l.onTranslateToWrapperTransitionEnd = null),
											delete l.onTranslateToWrapperTransitionEnd,
											n && l.emit('transitionEnd'));
									}),
								l.wrapperEl.addEventListener('transitionend', l.onTranslateToWrapperTransitionEnd))),
					!0
				);
			},
		};
		function q(e) {
			var t = e.swiper,
				n = e.runCallbacks,
				r = e.direction,
				a = e.step,
				l = t.activeIndex,
				i = t.previousIndex,
				o = r;
			if ((o || (o = l > i ? 'next' : l < i ? 'prev' : 'reset'), t.emit('transition'.concat(a)), n && l !== i)) {
				if ('reset' === o) return void t.emit('slideResetTransition'.concat(a));
				t.emit('slideChangeTransition'.concat(a)),
					'next' === o ? t.emit('slideNextTransition'.concat(a)) : t.emit('slidePrevTransition'.concat(a));
			}
		}
		var Q = {
			setTransition: function (e, t) {
				var n = this;
				n.params.cssMode || (n.wrapperEl.style.transitionDuration = ''.concat(e, 'ms')), n.emit('setTransition', e, t);
			},
			transitionStart: function () {
				var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0,
					n = this,
					r = n.params;
				r.cssMode ||
					(r.autoHeight && n.updateAutoHeight(), q({ swiper: n, runCallbacks: e, direction: t, step: 'Start' }));
			},
			transitionEnd: function () {
				var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0,
					n = this,
					r = n.params;
				(n.animating = !1),
					r.cssMode || (n.setTransition(0), q({ swiper: n, runCallbacks: e, direction: t, step: 'End' }));
			},
		};
		var X = {
			slideTo: function () {
				var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
					t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.params.speed,
					n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
					r = arguments.length > 3 ? arguments[3] : void 0,
					a = arguments.length > 4 ? arguments[4] : void 0;
				'string' === typeof e && (e = parseInt(e, 10));
				var l = this,
					i = e;
				i < 0 && (i = 0);
				var o = l.params,
					s = l.snapGrid,
					u = l.slidesGrid,
					c = l.previousIndex,
					f = l.activeIndex,
					p = l.rtlTranslate,
					v = l.wrapperEl,
					h = l.enabled;
				if ((l.animating && o.preventInteractionOnTransition) || (!h && !r && !a)) return !1;
				var m = Math.min(l.params.slidesPerGroupSkip, i),
					g = m + Math.floor((i - m) / l.params.slidesPerGroup);
				g >= s.length && (g = s.length - 1);
				var y,
					b = -s[g];
				if (o.normalizeSlideIndex)
					for (var w = 0; w < u.length; w += 1) {
						var S = -Math.floor(100 * b),
							k = Math.floor(100 * u[w]),
							x = Math.floor(100 * u[w + 1]);
						'undefined' !== typeof u[w + 1]
							? S >= k && S < x - (x - k) / 2
								? (i = w)
								: S >= k && S < x && (i = w + 1)
							: S >= k && (i = w);
					}
				if (l.initialized && i !== f) {
					if (!l.allowSlideNext && b < l.translate && b < l.minTranslate()) return !1;
					if (!l.allowSlidePrev && b > l.translate && b > l.maxTranslate() && (f || 0) !== i) return !1;
				}
				if (
					(i !== (c || 0) && n && l.emit('beforeSlideChangeStart'),
					l.updateProgress(b),
					(y = i > f ? 'next' : i < f ? 'prev' : 'reset'),
					(p && -b === l.translate) || (!p && b === l.translate))
				)
					return (
						l.updateActiveIndex(i),
						o.autoHeight && l.updateAutoHeight(),
						l.updateSlidesClasses(),
						'slide' !== o.effect && l.setTranslate(b),
						'reset' !== y && (l.transitionStart(n, y), l.transitionEnd(n, y)),
						!1
					);
				if (o.cssMode) {
					var E = l.isHorizontal(),
						C = p ? b : -b;
					if (0 === t) {
						var T = l.virtual && l.params.virtual.enabled;
						T && ((l.wrapperEl.style.scrollSnapType = 'none'), (l._immediateVirtual = !0)),
							T && !l._cssModeVirtualInitialSet && l.params.initialSlide > 0
								? ((l._cssModeVirtualInitialSet = !0),
								  requestAnimationFrame(function () {
										v[E ? 'scrollLeft' : 'scrollTop'] = C;
								  }))
								: (v[E ? 'scrollLeft' : 'scrollTop'] = C),
							T &&
								requestAnimationFrame(function () {
									(l.wrapperEl.style.scrollSnapType = ''), (l._immediateVirtual = !1);
								});
					} else {
						var P;
						if (!l.support.smoothScroll) return L({ swiper: l, targetPosition: C, side: E ? 'left' : 'top' }), !0;
						v.scrollTo((d((P = {}), E ? 'left' : 'top', C), d(P, 'behavior', 'smooth'), P));
					}
					return !0;
				}
				return (
					l.setTransition(t),
					l.setTranslate(b),
					l.updateActiveIndex(i),
					l.updateSlidesClasses(),
					l.emit('beforeTransitionStart', t, r),
					l.transitionStart(n, y),
					0 === t
						? l.transitionEnd(n, y)
						: l.animating ||
						  ((l.animating = !0),
						  l.onSlideToWrapperTransitionEnd ||
								(l.onSlideToWrapperTransitionEnd = function (e) {
									l &&
										!l.destroyed &&
										e.target === this &&
										(l.wrapperEl.removeEventListener('transitionend', l.onSlideToWrapperTransitionEnd),
										(l.onSlideToWrapperTransitionEnd = null),
										delete l.onSlideToWrapperTransitionEnd,
										l.transitionEnd(n, y));
								}),
						  l.wrapperEl.addEventListener('transitionend', l.onSlideToWrapperTransitionEnd)),
					!0
				);
			},
			slideToLoop: function () {
				var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
					t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.params.speed,
					n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
					r = arguments.length > 3 ? arguments[3] : void 0;
				'string' === typeof e && (e = parseInt(e, 10));
				var a = this,
					l = e;
				return (
					a.params.loop &&
						(a.virtual && a.params.virtual.enabled ? (l += a.virtual.slidesBefore) : (l = a.getSlideIndexByData(l))),
					a.slideTo(l, t, n, r)
				);
			},
			slideNext: function () {
				var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.params.speed,
					t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
					n = arguments.length > 2 ? arguments[2] : void 0,
					r = this,
					a = r.enabled,
					l = r.params,
					i = r.animating;
				if (!a) return r;
				var o = l.slidesPerGroup;
				'auto' === l.slidesPerView &&
					1 === l.slidesPerGroup &&
					l.slidesPerGroupAuto &&
					(o = Math.max(r.slidesPerViewDynamic('current', !0), 1));
				var s = r.activeIndex < l.slidesPerGroupSkip ? 1 : o,
					u = r.virtual && l.virtual.enabled;
				if (l.loop) {
					if (i && !u && l.loopPreventsSliding) return !1;
					r.loopFix({ direction: 'next' }), (r._clientLeft = r.wrapperEl.clientLeft);
				}
				return l.rewind && r.isEnd ? r.slideTo(0, e, t, n) : r.slideTo(r.activeIndex + s, e, t, n);
			},
			slidePrev: function () {
				var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.params.speed,
					t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
					n = arguments.length > 2 ? arguments[2] : void 0,
					r = this,
					a = r.params,
					l = r.snapGrid,
					i = r.slidesGrid,
					o = r.rtlTranslate,
					s = r.enabled,
					u = r.animating;
				if (!s) return r;
				var c = r.virtual && a.virtual.enabled;
				if (a.loop) {
					if (u && !c && a.loopPreventsSliding) return !1;
					r.loopFix({ direction: 'prev' }), (r._clientLeft = r.wrapperEl.clientLeft);
				}
				function d(e) {
					return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
				}
				var f,
					p = d(o ? r.translate : -r.translate),
					v = l.map(function (e) {
						return d(e);
					}),
					h = l[v.indexOf(p) - 1];
				'undefined' === typeof h &&
					a.cssMode &&
					(l.forEach(function (e, t) {
						p >= e && (f = t);
					}),
					'undefined' !== typeof f && (h = l[f > 0 ? f - 1 : f]));
				var m = 0;
				if (
					('undefined' !== typeof h &&
						((m = i.indexOf(h)) < 0 && (m = r.activeIndex - 1),
						'auto' === a.slidesPerView &&
							1 === a.slidesPerGroup &&
							a.slidesPerGroupAuto &&
							((m = m - r.slidesPerViewDynamic('previous', !0) + 1), (m = Math.max(m, 0)))),
					a.rewind && r.isBeginning)
				) {
					var g =
						r.params.virtual && r.params.virtual.enabled && r.virtual
							? r.virtual.slides.length - 1
							: r.slides.length - 1;
					return r.slideTo(g, e, t, n);
				}
				return r.slideTo(m, e, t, n);
			},
			slideReset: function () {
				var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.params.speed,
					t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
					n = arguments.length > 2 ? arguments[2] : void 0;
				return this.slideTo(this.activeIndex, e, t, n);
			},
			slideToClosest: function () {
				var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.params.speed,
					t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
					n = arguments.length > 2 ? arguments[2] : void 0,
					r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0.5,
					a = this,
					l = a.activeIndex,
					i = Math.min(a.params.slidesPerGroupSkip, l),
					o = i + Math.floor((l - i) / a.params.slidesPerGroup),
					s = a.rtlTranslate ? a.translate : -a.translate;
				if (s >= a.snapGrid[o]) {
					var u = a.snapGrid[o];
					s - u > (a.snapGrid[o + 1] - u) * r && (l += a.params.slidesPerGroup);
				} else {
					var c = a.snapGrid[o - 1];
					s - c <= (a.snapGrid[o] - c) * r && (l -= a.params.slidesPerGroup);
				}
				return (l = Math.max(l, 0)), (l = Math.min(l, a.slidesGrid.length - 1)), a.slideTo(l, e, t, n);
			},
			slideToClickedSlide: function () {
				var e,
					t = this,
					n = t.params,
					r = t.slidesEl,
					a = 'auto' === n.slidesPerView ? t.slidesPerViewDynamic() : n.slidesPerView,
					l = t.clickedIndex,
					i = t.isElement ? 'swiper-slide' : '.'.concat(n.slideClass);
				if (n.loop) {
					if (t.animating) return;
					(e = parseInt(t.clickedSlide.getAttribute('data-swiper-slide-index'), 10)),
						n.centeredSlides
							? l < t.loopedSlides - a / 2 || l > t.slides.length - t.loopedSlides + a / 2
								? (t.loopFix(),
								  (l = t.getSlideIndex(O(r, ''.concat(i, '[data-swiper-slide-index="').concat(e, '"]'))[0])),
								  C(function () {
										t.slideTo(l);
								  }))
								: t.slideTo(l)
							: l > t.slides.length - a
							? (t.loopFix(),
							  (l = t.getSlideIndex(O(r, ''.concat(i, '[data-swiper-slide-index="').concat(e, '"]'))[0])),
							  C(function () {
									t.slideTo(l);
							  }))
							: t.slideTo(l);
				} else t.slideTo(l);
			},
		};
		var Y = {
			loopCreate: function (e) {
				var t = this,
					n = t.params,
					r = t.slidesEl;
				!n.loop ||
					(t.virtual && t.params.virtual.enabled) ||
					(O(r, '.'.concat(n.slideClass, ', swiper-slide')).forEach(function (e, t) {
						e.setAttribute('data-swiper-slide-index', t);
					}),
					t.loopFix({ slideRealIndex: e, direction: n.centeredSlides ? void 0 : 'next' }));
			},
			loopFix: function () {
				var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
					t = e.slideRealIndex,
					n = e.slideTo,
					r = void 0 === n || n,
					a = e.direction,
					l = e.setTranslate,
					i = e.activeSlideIndex,
					o = e.byController,
					s = e.byMousewheel,
					u = this;
				if (u.params.loop) {
					u.emit('beforeLoopFix');
					var c = u.slides,
						d = u.allowSlidePrev,
						f = u.allowSlideNext,
						p = u.slidesEl,
						v = u.params;
					if (((u.allowSlidePrev = !0), (u.allowSlideNext = !0), u.virtual && v.virtual.enabled))
						return (
							r &&
								(v.centeredSlides || 0 !== u.snapIndex
									? v.centeredSlides && u.snapIndex < v.slidesPerView
										? u.slideTo(u.virtual.slides.length + u.snapIndex, 0, !1, !0)
										: u.snapIndex === u.snapGrid.length - 1 && u.slideTo(u.virtual.slidesBefore, 0, !1, !0)
									: u.slideTo(u.virtual.slides.length, 0, !1, !0)),
							(u.allowSlidePrev = d),
							(u.allowSlideNext = f),
							void u.emit('loopFix')
						);
					var h = 'auto' === v.slidesPerView ? u.slidesPerViewDynamic() : Math.ceil(parseFloat(v.slidesPerView, 10)),
						m = v.loopedSlides || h;
					m % v.slidesPerGroup !== 0 && (m += v.slidesPerGroup - (m % v.slidesPerGroup)), (u.loopedSlides = m);
					var g = [],
						y = [],
						b = u.activeIndex;
					'undefined' === typeof i
						? (i = u.getSlideIndex(
								u.slides.filter(function (e) {
									return e.classList.contains(v.slideActiveClass);
								})[0],
						  ))
						: (b = i);
					var w = 'next' === a || !a,
						S = 'prev' === a || !a,
						k = 0,
						x = 0;
					if (i < m) {
						k = Math.max(m - i, v.slidesPerGroup);
						for (var E = 0; E < m - i; E += 1) {
							var C = E - Math.floor(E / c.length) * c.length;
							g.push(c.length - C - 1);
						}
					} else if (i > u.slides.length - 2 * m) {
						x = Math.max(i - (u.slides.length - 2 * m), v.slidesPerGroup);
						for (var T = 0; T < x; T += 1) {
							var P = T - Math.floor(T / c.length) * c.length;
							y.push(P);
						}
					}
					if (
						(S &&
							g.forEach(function (e) {
								(u.slides[e].swiperLoopMoveDOM = !0), p.prepend(u.slides[e]), (u.slides[e].swiperLoopMoveDOM = !1);
							}),
						w &&
							y.forEach(function (e) {
								(u.slides[e].swiperLoopMoveDOM = !0), p.append(u.slides[e]), (u.slides[e].swiperLoopMoveDOM = !1);
							}),
						u.recalcSlides(),
						'auto' === v.slidesPerView && u.updateSlides(),
						v.watchSlidesProgress && u.updateSlidesOffset(),
						r)
					)
						if (g.length > 0 && S)
							if ('undefined' === typeof t) {
								var _ = u.slidesGrid[b],
									M = u.slidesGrid[b + k] - _;
								s
									? u.setTranslate(u.translate - M)
									: (u.slideTo(b + k, 0, !1, !0), l && (u.touches[u.isHorizontal() ? 'startX' : 'startY'] += M));
							} else l && u.slideToLoop(t, 0, !1, !0);
						else if (y.length > 0 && w)
							if ('undefined' === typeof t) {
								var z = u.slidesGrid[b],
									L = u.slidesGrid[b - x] - z;
								s
									? u.setTranslate(u.translate - L)
									: (u.slideTo(b - x, 0, !1, !0), l && (u.touches[u.isHorizontal() ? 'startX' : 'startY'] += L));
							} else u.slideToLoop(t, 0, !1, !0);
					if (((u.allowSlidePrev = d), (u.allowSlideNext = f), u.controller && u.controller.control && !o)) {
						var O = {
							slideRealIndex: t,
							slideTo: !1,
							direction: a,
							setTranslate: l,
							activeSlideIndex: i,
							byController: !0,
						};
						Array.isArray(u.controller.control)
							? u.controller.control.forEach(function (e) {
									!e.destroyed && e.params.loop && e.loopFix(O);
							  })
							: u.controller.control instanceof u.constructor &&
							  u.controller.control.params.loop &&
							  u.controller.control.loopFix(O);
					}
					u.emit('loopFix');
				}
			},
			loopDestroy: function () {
				var e = this,
					t = e.params,
					n = e.slidesEl;
				if (!(!t.loop || (e.virtual && e.params.virtual.enabled))) {
					e.recalcSlides();
					var r = [];
					e.slides.forEach(function (e) {
						var t =
							'undefined' === typeof e.swiperSlideIndex
								? 1 * e.getAttribute('data-swiper-slide-index')
								: e.swiperSlideIndex;
						r[t] = e;
					}),
						e.slides.forEach(function (e) {
							e.removeAttribute('data-swiper-slide-index');
						}),
						r.forEach(function (e) {
							n.append(e);
						}),
						e.recalcSlides(),
						e.slideTo(e.realIndex, 0);
				}
			},
		};
		function K(e) {
			var t = this,
				n = b(),
				r = E(),
				a = t.touchEventsData;
			a.evCache.push(e);
			var l = t.params,
				i = t.touches;
			if (
				t.enabled &&
				(l.simulateTouch || 'mouse' !== e.pointerType) &&
				(!t.animating || !l.preventInteractionOnTransition)
			) {
				!t.animating && l.cssMode && l.loop && t.loopFix();
				var o = e;
				o.originalEvent && (o = o.originalEvent);
				var s = o.target;
				if (
					('wrapper' !== l.touchEventsTarget || t.wrapperEl.contains(s)) &&
					(!('which' in o) || 3 !== o.which) &&
					!('button' in o && o.button > 0) &&
					(!a.isTouched || !a.isMoved)
				) {
					var u = !!l.noSwipingClass && '' !== l.noSwipingClass,
						c = e.composedPath ? e.composedPath() : e.path;
					u && o.target && o.target.shadowRoot && c && (s = c[0]);
					var d = l.noSwipingSelector ? l.noSwipingSelector : '.'.concat(l.noSwipingClass),
						f = !(!o.target || !o.target.shadowRoot);
					if (
						l.noSwiping &&
						(f
							? (function (e) {
									return (function t(n) {
										if (!n || n === b() || n === E()) return null;
										n.assignedSlot && (n = n.assignedSlot);
										var r = n.closest(e);
										return r || n.getRootNode ? r || t(n.getRootNode().host) : null;
									})(arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this);
							  })(d, s)
							: s.closest(d))
					)
						t.allowClick = !0;
					else if (!l.swipeHandler || s.closest(l.swipeHandler)) {
						(i.currentX = o.pageX), (i.currentY = o.pageY);
						var p = i.currentX,
							v = i.currentY,
							h = l.edgeSwipeDetection || l.iOSEdgeSwipeDetection,
							m = l.edgeSwipeThreshold || l.iOSEdgeSwipeThreshold;
						if (h && (p <= m || p >= r.innerWidth - m)) {
							if ('prevent' !== h) return;
							e.preventDefault();
						}
						Object.assign(a, {
							isTouched: !0,
							isMoved: !1,
							allowTouchCallbacks: !0,
							isScrolling: void 0,
							startMoving: void 0,
						}),
							(i.startX = p),
							(i.startY = v),
							(a.touchStartTime = T()),
							(t.allowClick = !0),
							t.updateSize(),
							(t.swipeDirection = void 0),
							l.threshold > 0 && (a.allowThresholdMove = !1);
						var g = !0;
						s.matches(a.focusableElements) && ((g = !1), 'SELECT' === s.nodeName && (a.isTouched = !1)),
							n.activeElement &&
								n.activeElement.matches(a.focusableElements) &&
								n.activeElement !== s &&
								n.activeElement.blur();
						var y = g && t.allowTouchMove && l.touchStartPreventDefault;
						(!l.touchStartForcePreventDefault && !y) || s.isContentEditable || o.preventDefault(),
							t.params.freeMode &&
								t.params.freeMode.enabled &&
								t.freeMode &&
								t.animating &&
								!l.cssMode &&
								t.freeMode.onTouchStart(),
							t.emit('touchStart', o);
					}
				}
			}
		}
		function J(e) {
			var t = b(),
				n = this,
				r = n.touchEventsData,
				a = n.params,
				l = n.touches,
				i = n.rtlTranslate;
			if (n.enabled && (a.simulateTouch || 'mouse' !== e.pointerType)) {
				var o = e;
				if ((o.originalEvent && (o = o.originalEvent), r.isTouched)) {
					var s = r.evCache.findIndex(function (e) {
						return e.pointerId === o.pointerId;
					});
					s >= 0 && (r.evCache[s] = o);
					var u = r.evCache.length > 1 ? r.evCache[0] : o,
						c = u.pageX,
						d = u.pageY;
					if (o.preventedByNestedSwiper) return (l.startX = c), void (l.startY = d);
					if (!n.allowTouchMove)
						return (
							o.target.matches(r.focusableElements) || (n.allowClick = !1),
							void (
								r.isTouched &&
								(Object.assign(l, {
									startX: c,
									startY: d,
									prevX: n.touches.currentX,
									prevY: n.touches.currentY,
									currentX: c,
									currentY: d,
								}),
								(r.touchStartTime = T()))
							)
						);
					if (a.touchReleaseOnEdges && !a.loop)
						if (n.isVertical()) {
							if (
								(d < l.startY && n.translate <= n.maxTranslate()) ||
								(d > l.startY && n.translate >= n.minTranslate())
							)
								return (r.isTouched = !1), void (r.isMoved = !1);
						} else if (
							(c < l.startX && n.translate <= n.maxTranslate()) ||
							(c > l.startX && n.translate >= n.minTranslate())
						)
							return;
					if (t.activeElement && o.target === t.activeElement && o.target.matches(r.focusableElements))
						return (r.isMoved = !0), void (n.allowClick = !1);
					if ((r.allowTouchCallbacks && n.emit('touchMove', o), !(o.targetTouches && o.targetTouches.length > 1))) {
						(l.currentX = c), (l.currentY = d);
						var f = l.currentX - l.startX,
							p = l.currentY - l.startY;
						if (!(n.params.threshold && Math.sqrt(Math.pow(f, 2) + Math.pow(p, 2)) < n.params.threshold)) {
							var v;
							if ('undefined' === typeof r.isScrolling)
								(n.isHorizontal() && l.currentY === l.startY) || (n.isVertical() && l.currentX === l.startX)
									? (r.isScrolling = !1)
									: f * f + p * p >= 25 &&
									  ((v = (180 * Math.atan2(Math.abs(p), Math.abs(f))) / Math.PI),
									  (r.isScrolling = n.isHorizontal() ? v > a.touchAngle : 90 - v > a.touchAngle));
							if (
								(r.isScrolling && n.emit('touchMoveOpposite', o),
								'undefined' === typeof r.startMoving &&
									((l.currentX === l.startX && l.currentY === l.startY) || (r.startMoving = !0)),
								r.isScrolling || (n.zoom && n.params.zoom && n.params.zoom.enabled && r.evCache.length > 1))
							)
								r.isTouched = !1;
							else if (r.startMoving) {
								(n.allowClick = !1),
									!a.cssMode && o.cancelable && o.preventDefault(),
									a.touchMoveStopPropagation && !a.nested && o.stopPropagation();
								var h = n.isHorizontal() ? f : p,
									m = n.isHorizontal() ? l.currentX - l.previousX : l.currentY - l.previousY;
								a.oneWayMovement && ((h = Math.abs(h) * (i ? 1 : -1)), (m = Math.abs(m) * (i ? 1 : -1))),
									(l.diff = h),
									(h *= a.touchRatio),
									i && ((h = -h), (m = -m));
								var g = n.touchesDirection;
								(n.swipeDirection = h > 0 ? 'prev' : 'next'), (n.touchesDirection = m > 0 ? 'prev' : 'next');
								var y,
									w = n.params.loop && !a.cssMode;
								if (!r.isMoved) {
									if (
										(w && n.loopFix({ direction: n.swipeDirection }),
										(r.startTranslate = n.getTranslate()),
										n.setTransition(0),
										n.animating)
									) {
										var S = new window.CustomEvent('transitionend', { bubbles: !0, cancelable: !0 });
										n.wrapperEl.dispatchEvent(S);
									}
									(r.allowMomentumBounce = !1),
										!a.grabCursor || (!0 !== n.allowSlideNext && !0 !== n.allowSlidePrev) || n.setGrabCursor(!0),
										n.emit('sliderFirstMove', o);
								}
								r.isMoved &&
									g !== n.touchesDirection &&
									w &&
									Math.abs(h) >= 1 &&
									(n.loopFix({ direction: n.swipeDirection, setTranslate: !0 }), (y = !0)),
									n.emit('sliderMove', o),
									(r.isMoved = !0),
									(r.currentTranslate = h + r.startTranslate);
								var k = !0,
									x = a.resistanceRatio;
								if (
									(a.touchReleaseOnEdges && (x = 0),
									h > 0
										? (w &&
												!y &&
												r.currentTranslate > (a.centeredSlides ? n.minTranslate() - n.size / 2 : n.minTranslate()) &&
												n.loopFix({ direction: 'prev', setTranslate: !0, activeSlideIndex: 0 }),
										  r.currentTranslate > n.minTranslate() &&
												((k = !1),
												a.resistance &&
													(r.currentTranslate =
														n.minTranslate() - 1 + Math.pow(-n.minTranslate() + r.startTranslate + h, x))))
										: h < 0 &&
										  (w &&
												!y &&
												r.currentTranslate < (a.centeredSlides ? n.maxTranslate() + n.size / 2 : n.maxTranslate()) &&
												n.loopFix({
													direction: 'next',
													setTranslate: !0,
													activeSlideIndex:
														n.slides.length -
														('auto' === a.slidesPerView
															? n.slidesPerViewDynamic()
															: Math.ceil(parseFloat(a.slidesPerView, 10))),
												}),
										  r.currentTranslate < n.maxTranslate() &&
												((k = !1),
												a.resistance &&
													(r.currentTranslate =
														n.maxTranslate() + 1 - Math.pow(n.maxTranslate() - r.startTranslate - h, x)))),
									k && (o.preventedByNestedSwiper = !0),
									!n.allowSlideNext &&
										'next' === n.swipeDirection &&
										r.currentTranslate < r.startTranslate &&
										(r.currentTranslate = r.startTranslate),
									!n.allowSlidePrev &&
										'prev' === n.swipeDirection &&
										r.currentTranslate > r.startTranslate &&
										(r.currentTranslate = r.startTranslate),
									n.allowSlidePrev || n.allowSlideNext || (r.currentTranslate = r.startTranslate),
									a.threshold > 0)
								) {
									if (!(Math.abs(h) > a.threshold || r.allowThresholdMove))
										return void (r.currentTranslate = r.startTranslate);
									if (!r.allowThresholdMove)
										return (
											(r.allowThresholdMove = !0),
											(l.startX = l.currentX),
											(l.startY = l.currentY),
											(r.currentTranslate = r.startTranslate),
											void (l.diff = n.isHorizontal() ? l.currentX - l.startX : l.currentY - l.startY)
										);
								}
								a.followFinger &&
									!a.cssMode &&
									(((a.freeMode && a.freeMode.enabled && n.freeMode) || a.watchSlidesProgress) &&
										(n.updateActiveIndex(), n.updateSlidesClasses()),
									n.params.freeMode && a.freeMode.enabled && n.freeMode && n.freeMode.onTouchMove(),
									n.updateProgress(r.currentTranslate),
									n.setTranslate(r.currentTranslate));
							}
						}
					}
				} else r.startMoving && r.isScrolling && n.emit('touchMoveOpposite', o);
			}
		}
		function Z(e) {
			var t = this,
				n = t.touchEventsData,
				r = n.evCache.findIndex(function (t) {
					return t.pointerId === e.pointerId;
				});
			if (
				(r >= 0 && n.evCache.splice(r, 1), ['pointercancel', 'pointerout', 'pointerleave'].includes(e.type)) &&
				!('pointercancel' === e.type && (t.browser.isSafari || t.browser.isWebView))
			)
				return;
			var a = t.params,
				l = t.touches,
				i = t.rtlTranslate,
				o = t.slidesGrid;
			if (t.enabled && (a.simulateTouch || 'mouse' !== e.pointerType)) {
				var s = e;
				if (
					(s.originalEvent && (s = s.originalEvent),
					n.allowTouchCallbacks && t.emit('touchEnd', s),
					(n.allowTouchCallbacks = !1),
					!n.isTouched)
				)
					return n.isMoved && a.grabCursor && t.setGrabCursor(!1), (n.isMoved = !1), void (n.startMoving = !1);
				a.grabCursor &&
					n.isMoved &&
					n.isTouched &&
					(!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
					t.setGrabCursor(!1);
				var u,
					c = T(),
					d = c - n.touchStartTime;
				if (t.allowClick) {
					var f = s.path || (s.composedPath && s.composedPath());
					t.updateClickedSlide((f && f[0]) || s.target),
						t.emit('tap click', s),
						d < 300 && c - n.lastClickTime < 300 && t.emit('doubleTap doubleClick', s);
				}
				if (
					((n.lastClickTime = T()),
					C(function () {
						t.destroyed || (t.allowClick = !0);
					}),
					!n.isTouched || !n.isMoved || !t.swipeDirection || 0 === l.diff || n.currentTranslate === n.startTranslate)
				)
					return (n.isTouched = !1), (n.isMoved = !1), void (n.startMoving = !1);
				if (
					((n.isTouched = !1),
					(n.isMoved = !1),
					(n.startMoving = !1),
					(u = a.followFinger ? (i ? t.translate : -t.translate) : -n.currentTranslate),
					!a.cssMode)
				)
					if (t.params.freeMode && a.freeMode.enabled) t.freeMode.onTouchEnd({ currentPos: u });
					else {
						for (
							var p = 0, v = t.slidesSizesGrid[0], h = 0;
							h < o.length;
							h += h < a.slidesPerGroupSkip ? 1 : a.slidesPerGroup
						) {
							var m = h < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
							'undefined' !== typeof o[h + m]
								? u >= o[h] && u < o[h + m] && ((p = h), (v = o[h + m] - o[h]))
								: u >= o[h] && ((p = h), (v = o[o.length - 1] - o[o.length - 2]));
						}
						var g = null,
							y = null;
						a.rewind &&
							(t.isBeginning
								? (y =
										t.params.virtual && t.params.virtual.enabled && t.virtual
											? t.virtual.slides.length - 1
											: t.slides.length - 1)
								: t.isEnd && (g = 0));
						var b = (u - o[p]) / v,
							w = p < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
						if (d > a.longSwipesMs) {
							if (!a.longSwipes) return void t.slideTo(t.activeIndex);
							'next' === t.swipeDirection &&
								(b >= a.longSwipesRatio ? t.slideTo(a.rewind && t.isEnd ? g : p + w) : t.slideTo(p)),
								'prev' === t.swipeDirection &&
									(b > 1 - a.longSwipesRatio
										? t.slideTo(p + w)
										: null !== y && b < 0 && Math.abs(b) > a.longSwipesRatio
										? t.slideTo(y)
										: t.slideTo(p));
						} else {
							if (!a.shortSwipes) return void t.slideTo(t.activeIndex);
							t.navigation && (s.target === t.navigation.nextEl || s.target === t.navigation.prevEl)
								? s.target === t.navigation.nextEl
									? t.slideTo(p + w)
									: t.slideTo(p)
								: ('next' === t.swipeDirection && t.slideTo(null !== g ? g : p + w),
								  'prev' === t.swipeDirection && t.slideTo(null !== y ? y : p));
						}
					}
			}
		}
		function ee() {
			var e = this,
				t = e.params,
				n = e.el;
			if (!n || 0 !== n.offsetWidth) {
				t.breakpoints && e.setBreakpoint();
				var r = e.allowSlideNext,
					a = e.allowSlidePrev,
					l = e.snapGrid,
					i = e.virtual && e.params.virtual.enabled;
				(e.allowSlideNext = !0), (e.allowSlidePrev = !0), e.updateSize(), e.updateSlides(), e.updateSlidesClasses();
				var o = i && t.loop;
				!('auto' === t.slidesPerView || t.slidesPerView > 1) ||
				!e.isEnd ||
				e.isBeginning ||
				e.params.centeredSlides ||
				o
					? e.params.loop && !i
						? e.slideToLoop(e.realIndex, 0, !1, !0)
						: e.slideTo(e.activeIndex, 0, !1, !0)
					: e.slideTo(e.slides.length - 1, 0, !1, !0),
					e.autoplay &&
						e.autoplay.running &&
						e.autoplay.paused &&
						(clearTimeout(e.autoplay.resizeTimeout),
						(e.autoplay.resizeTimeout = setTimeout(function () {
							e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.resume();
						}, 500))),
					(e.allowSlidePrev = a),
					(e.allowSlideNext = r),
					e.params.watchOverflow && l !== e.snapGrid && e.checkOverflow();
			}
		}
		function te(e) {
			var t = this;
			t.enabled &&
				(t.allowClick ||
					(t.params.preventClicks && e.preventDefault(),
					t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation())));
		}
		function ne() {
			var e = this,
				t = e.wrapperEl,
				n = e.rtlTranslate;
			if (e.enabled) {
				(e.previousTranslate = e.translate),
					e.isHorizontal() ? (e.translate = -t.scrollLeft) : (e.translate = -t.scrollTop),
					0 === e.translate && (e.translate = 0),
					e.updateActiveIndex(),
					e.updateSlidesClasses();
				var r = e.maxTranslate() - e.minTranslate();
				(0 === r ? 0 : (e.translate - e.minTranslate()) / r) !== e.progress &&
					e.updateProgress(n ? -e.translate : e.translate),
					e.emit('setTranslate', e.translate, !1);
			}
		}
		function re(e) {
			H(this, e.target), this.update();
		}
		var ae = !1;
		function le() {}
		var ie = function (e, t) {
			var n = b(),
				r = e.params,
				a = e.el,
				l = e.wrapperEl,
				i = e.device,
				o = !!r.nested,
				s = 'on' === t ? 'addEventListener' : 'removeEventListener',
				u = t;
			a[s]('pointerdown', e.onTouchStart, { passive: !1 }),
				n[s]('pointermove', e.onTouchMove, { passive: !1, capture: o }),
				n[s]('pointerup', e.onTouchEnd, { passive: !0 }),
				n[s]('pointercancel', e.onTouchEnd, { passive: !0 }),
				n[s]('pointerout', e.onTouchEnd, { passive: !0 }),
				n[s]('pointerleave', e.onTouchEnd, { passive: !0 }),
				(r.preventClicks || r.preventClicksPropagation) && a[s]('click', e.onClick, !0),
				r.cssMode && l[s]('scroll', e.onScroll),
				r.updateOnWindowResize
					? e[u](i.ios || i.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate', ee, !0)
					: e[u]('observerUpdate', ee, !0),
				a[s]('load', e.onLoad, { capture: !0 });
		};
		var oe = function (e, t) {
			return e.grid && t.grid && t.grid.rows > 1;
		};
		var se = {
			setBreakpoint: function () {
				var e = this,
					t = e.realIndex,
					n = e.initialized,
					r = e.params,
					a = e.el,
					l = r.breakpoints;
				if (l && (!l || 0 !== Object.keys(l).length)) {
					var i = e.getBreakpoint(l, e.params.breakpointsBase, e.el);
					if (i && e.currentBreakpoint !== i) {
						var o = (i in l ? l[i] : void 0) || e.originalParams,
							s = oe(e, r),
							u = oe(e, o),
							c = r.enabled;
						s && !u
							? (a.classList.remove(
									''.concat(r.containerModifierClass, 'grid'),
									''.concat(r.containerModifierClass, 'grid-column'),
							  ),
							  e.emitContainerClasses())
							: !s &&
							  u &&
							  (a.classList.add(''.concat(r.containerModifierClass, 'grid')),
							  ((o.grid.fill && 'column' === o.grid.fill) || (!o.grid.fill && 'column' === r.grid.fill)) &&
									a.classList.add(''.concat(r.containerModifierClass, 'grid-column')),
							  e.emitContainerClasses()),
							['navigation', 'pagination', 'scrollbar'].forEach(function (t) {
								var n = r[t] && r[t].enabled,
									a = o[t] && o[t].enabled;
								n && !a && e[t].disable(), !n && a && e[t].enable();
							});
						var d = o.direction && o.direction !== r.direction,
							f = r.loop && (o.slidesPerView !== r.slidesPerView || d);
						d && n && e.changeDirection(), M(e.params, o);
						var p = e.params.enabled;
						Object.assign(e, {
							allowTouchMove: e.params.allowTouchMove,
							allowSlideNext: e.params.allowSlideNext,
							allowSlidePrev: e.params.allowSlidePrev,
						}),
							c && !p ? e.disable() : !c && p && e.enable(),
							(e.currentBreakpoint = i),
							e.emit('_beforeBreakpoint', o),
							f && n && (e.loopDestroy(), e.loopCreate(t), e.updateSlides()),
							e.emit('breakpoint', o);
					}
				}
			},
			getBreakpoint: function (e) {
				var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'window',
					n = arguments.length > 2 ? arguments[2] : void 0;
				if (e && ('container' !== t || n)) {
					var r = !1,
						a = E(),
						l = 'window' === t ? a.innerHeight : n.clientHeight,
						i = Object.keys(e).map(function (e) {
							if ('string' === typeof e && 0 === e.indexOf('@')) {
								var t = parseFloat(e.substr(1));
								return { value: l * t, point: e };
							}
							return { value: e, point: e };
						});
					i.sort(function (e, t) {
						return parseInt(e.value, 10) - parseInt(t.value, 10);
					});
					for (var o = 0; o < i.length; o += 1) {
						var s = i[o],
							u = s.point,
							c = s.value;
						'window' === t
							? a.matchMedia('(min-width: '.concat(c, 'px)')).matches && (r = u)
							: c <= n.clientWidth && (r = u);
					}
					return r || 'max';
				}
			},
		};
		var ue = {
			init: !0,
			direction: 'horizontal',
			oneWayMovement: !1,
			touchEventsTarget: 'wrapper',
			initialSlide: 0,
			speed: 300,
			cssMode: !1,
			updateOnWindowResize: !0,
			resizeObserver: !0,
			nested: !1,
			createElements: !1,
			enabled: !0,
			focusableElements: 'input, select, option, textarea, button, video, label',
			width: null,
			height: null,
			preventInteractionOnTransition: !1,
			userAgent: null,
			url: null,
			edgeSwipeDetection: !1,
			edgeSwipeThreshold: 20,
			autoHeight: !1,
			setWrapperSize: !1,
			virtualTranslate: !1,
			effect: 'slide',
			breakpoints: void 0,
			breakpointsBase: 'window',
			spaceBetween: 0,
			slidesPerView: 1,
			slidesPerGroup: 1,
			slidesPerGroupSkip: 0,
			slidesPerGroupAuto: !1,
			centeredSlides: !1,
			centeredSlidesBounds: !1,
			slidesOffsetBefore: 0,
			slidesOffsetAfter: 0,
			normalizeSlideIndex: !0,
			centerInsufficientSlides: !1,
			watchOverflow: !0,
			roundLengths: !1,
			touchRatio: 1,
			touchAngle: 45,
			simulateTouch: !0,
			shortSwipes: !0,
			longSwipes: !0,
			longSwipesRatio: 0.5,
			longSwipesMs: 300,
			followFinger: !0,
			allowTouchMove: !0,
			threshold: 5,
			touchMoveStopPropagation: !1,
			touchStartPreventDefault: !0,
			touchStartForcePreventDefault: !1,
			touchReleaseOnEdges: !1,
			uniqueNavElements: !0,
			resistance: !0,
			resistanceRatio: 0.85,
			watchSlidesProgress: !1,
			grabCursor: !1,
			preventClicks: !0,
			preventClicksPropagation: !0,
			slideToClickedSlide: !1,
			loop: !1,
			loopedSlides: null,
			loopPreventsSliding: !0,
			rewind: !1,
			allowSlidePrev: !0,
			allowSlideNext: !0,
			swipeHandler: null,
			noSwiping: !0,
			noSwipingClass: 'swiper-no-swiping',
			noSwipingSelector: null,
			passiveListeners: !0,
			maxBackfaceHiddenSlides: 10,
			containerModifierClass: 'swiper-',
			slideClass: 'swiper-slide',
			slideActiveClass: 'swiper-slide-active',
			slideVisibleClass: 'swiper-slide-visible',
			slideNextClass: 'swiper-slide-next',
			slidePrevClass: 'swiper-slide-prev',
			wrapperClass: 'swiper-wrapper',
			lazyPreloaderClass: 'swiper-lazy-preloader',
			lazyPreloadPrevNext: 0,
			runCallbacksOnInit: !0,
			_emitClasses: !1,
		};
		function ce(e, t) {
			return function () {
				var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
					r = Object.keys(n)[0],
					a = n[r];
				'object' === typeof a && null !== a
					? (['navigation', 'pagination', 'scrollbar'].indexOf(r) >= 0 && !0 === e[r] && (e[r] = { auto: !0 }),
					  r in e && 'enabled' in a
							? (!0 === e[r] && (e[r] = { enabled: !0 }),
							  'object' !== typeof e[r] || 'enabled' in e[r] || (e[r].enabled = !0),
							  e[r] || (e[r] = { enabled: !1 }),
							  M(t, n))
							: M(t, n))
					: M(t, n);
			};
		}
		var de = {
				eventsEmitter: V,
				update: W,
				translate: $,
				transition: Q,
				slide: X,
				loop: Y,
				grabCursor: {
					setGrabCursor: function (e) {
						var t = this;
						if (!(!t.params.simulateTouch || (t.params.watchOverflow && t.isLocked) || t.params.cssMode)) {
							var n = 'container' === t.params.touchEventsTarget ? t.el : t.wrapperEl;
							t.isElement && (t.__preventObserver__ = !0),
								(n.style.cursor = 'move'),
								(n.style.cursor = e ? 'grabbing' : 'grab'),
								t.isElement &&
									requestAnimationFrame(function () {
										t.__preventObserver__ = !1;
									});
						}
					},
					unsetGrabCursor: function () {
						var e = this;
						(e.params.watchOverflow && e.isLocked) ||
							e.params.cssMode ||
							(e.isElement && (e.__preventObserver__ = !0),
							(e['container' === e.params.touchEventsTarget ? 'el' : 'wrapperEl'].style.cursor = ''),
							e.isElement &&
								requestAnimationFrame(function () {
									e.__preventObserver__ = !1;
								}));
					},
				},
				events: {
					attachEvents: function () {
						var e = this,
							t = b(),
							n = e.params;
						(e.onTouchStart = K.bind(e)),
							(e.onTouchMove = J.bind(e)),
							(e.onTouchEnd = Z.bind(e)),
							n.cssMode && (e.onScroll = ne.bind(e)),
							(e.onClick = te.bind(e)),
							(e.onLoad = re.bind(e)),
							ae || (t.addEventListener('touchstart', le), (ae = !0)),
							ie(e, 'on');
					},
					detachEvents: function () {
						ie(this, 'off');
					},
				},
				breakpoints: se,
				checkOverflow: {
					checkOverflow: function () {
						var e = this,
							t = e.isLocked,
							n = e.params,
							r = n.slidesOffsetBefore;
						if (r) {
							var a = e.slides.length - 1,
								l = e.slidesGrid[a] + e.slidesSizesGrid[a] + 2 * r;
							e.isLocked = e.size > l;
						} else e.isLocked = 1 === e.snapGrid.length;
						!0 === n.allowSlideNext && (e.allowSlideNext = !e.isLocked),
							!0 === n.allowSlidePrev && (e.allowSlidePrev = !e.isLocked),
							t && t !== e.isLocked && (e.isEnd = !1),
							t !== e.isLocked && e.emit(e.isLocked ? 'lock' : 'unlock');
					},
				},
				classes: {
					addClasses: function () {
						var e,
							t = this,
							n = t.classNames,
							r = t.params,
							a = t.rtl,
							l = t.el,
							i = t.device,
							o = (function (e, t) {
								var n = [];
								return (
									e.forEach(function (e) {
										'object' === typeof e
											? Object.keys(e).forEach(function (r) {
													e[r] && n.push(t + r);
											  })
											: 'string' === typeof e && n.push(t + e);
									}),
									n
								);
							})(
								[
									'initialized',
									r.direction,
									{ 'free-mode': t.params.freeMode && r.freeMode.enabled },
									{ autoheight: r.autoHeight },
									{ rtl: a },
									{ grid: r.grid && r.grid.rows > 1 },
									{ 'grid-column': r.grid && r.grid.rows > 1 && 'column' === r.grid.fill },
									{ android: i.android },
									{ ios: i.ios },
									{ 'css-mode': r.cssMode },
									{ centered: r.cssMode && r.centeredSlides },
									{ 'watch-progress': r.watchSlidesProgress },
								],
								r.containerModifierClass,
							);
						n.push.apply(n, v(o)), (e = l.classList).add.apply(e, v(n)), t.emitContainerClasses();
					},
					removeClasses: function () {
						var e,
							t = this,
							n = t.el,
							r = t.classNames;
						(e = n.classList).remove.apply(e, v(r)), t.emitContainerClasses();
					},
				},
			},
			fe = {},
			pe = (function () {
				function e() {
					var t, n;
					!(function (e, t) {
						if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
					})(this, e);
					for (var r = arguments.length, a = new Array(r), l = 0; l < r; l++) a[l] = arguments[l];
					1 === a.length && a[0].constructor && 'Object' === Object.prototype.toString.call(a[0]).slice(8, -1)
						? (n = a[0])
						: ((t = a[0]), (n = a[1])),
						n || (n = {}),
						(n = M({}, n)),
						t && !n.el && (n.el = t);
					var i = b();
					if (n.el && 'string' === typeof n.el && i.querySelectorAll(n.el).length > 1) {
						var o = [];
						return (
							i.querySelectorAll(n.el).forEach(function (t) {
								var r = M({}, n, { el: t });
								o.push(new e(r));
							}),
							o
						);
					}
					var s,
						u = this;
					((u.__swiper__ = !0),
					(u.support = A()),
					(u.device = F({ userAgent: n.userAgent })),
					(u.browser = B()),
					(u.eventsListeners = {}),
					(u.eventsAnyListeners = []),
					(u.modules = v(u.__modules__)),
					n.modules && Array.isArray(n.modules)) && (s = u.modules).push.apply(s, v(n.modules));
					var c = {};
					u.modules.forEach(function (e) {
						e({
							params: n,
							swiper: u,
							extendParams: ce(n, c),
							on: u.on.bind(u),
							once: u.once.bind(u),
							off: u.off.bind(u),
							emit: u.emit.bind(u),
						});
					});
					var d = M({}, ue, c);
					return (
						(u.params = M({}, d, fe, n)),
						(u.originalParams = M({}, u.params)),
						(u.passedParams = M({}, n)),
						u.params &&
							u.params.on &&
							Object.keys(u.params.on).forEach(function (e) {
								u.on(e, u.params.on[e]);
							}),
						u.params && u.params.onAny && u.onAny(u.params.onAny),
						Object.assign(u, {
							enabled: u.params.enabled,
							el: t,
							classNames: [],
							slides: [],
							slidesGrid: [],
							snapGrid: [],
							slidesSizesGrid: [],
							isHorizontal: function () {
								return 'horizontal' === u.params.direction;
							},
							isVertical: function () {
								return 'vertical' === u.params.direction;
							},
							activeIndex: 0,
							realIndex: 0,
							isBeginning: !0,
							isEnd: !1,
							translate: 0,
							previousTranslate: 0,
							progress: 0,
							velocity: 0,
							animating: !1,
							cssOverflowAdjustment: function () {
								return Math.trunc(this.translate / Math.pow(2, 23)) * Math.pow(2, 23);
							},
							allowSlideNext: u.params.allowSlideNext,
							allowSlidePrev: u.params.allowSlidePrev,
							touchEventsData: {
								isTouched: void 0,
								isMoved: void 0,
								allowTouchCallbacks: void 0,
								touchStartTime: void 0,
								isScrolling: void 0,
								currentTranslate: void 0,
								startTranslate: void 0,
								allowThresholdMove: void 0,
								focusableElements: u.params.focusableElements,
								lastClickTime: 0,
								clickTimeout: void 0,
								velocities: [],
								allowMomentumBounce: void 0,
								startMoving: void 0,
								evCache: [],
							},
							allowClick: !0,
							allowTouchMove: u.params.allowTouchMove,
							touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
							imagesToLoad: [],
							imagesLoaded: 0,
						}),
						u.emit('_swiper'),
						u.params.init && u.init(),
						u
					);
				}
				var t, n, r;
				return (
					(t = e),
					(n = [
						{
							key: 'getSlideIndex',
							value: function (e) {
								var t = this.slidesEl,
									n = this.params,
									r = j(O(t, '.'.concat(n.slideClass, ', swiper-slide'))[0]);
								return j(e) - r;
							},
						},
						{
							key: 'getSlideIndexByData',
							value: function (e) {
								return this.getSlideIndex(
									this.slides.filter(function (t) {
										return 1 * t.getAttribute('data-swiper-slide-index') === e;
									})[0],
								);
							},
						},
						{
							key: 'recalcSlides',
							value: function () {
								var e = this,
									t = e.slidesEl,
									n = e.params;
								e.slides = O(t, '.'.concat(n.slideClass, ', swiper-slide'));
							},
						},
						{
							key: 'enable',
							value: function () {
								var e = this;
								e.enabled || ((e.enabled = !0), e.params.grabCursor && e.setGrabCursor(), e.emit('enable'));
							},
						},
						{
							key: 'disable',
							value: function () {
								var e = this;
								e.enabled && ((e.enabled = !1), e.params.grabCursor && e.unsetGrabCursor(), e.emit('disable'));
							},
						},
						{
							key: 'setProgress',
							value: function (e, t) {
								var n = this;
								e = Math.min(Math.max(e, 0), 1);
								var r = n.minTranslate(),
									a = (n.maxTranslate() - r) * e + r;
								n.translateTo(a, 'undefined' === typeof t ? 0 : t), n.updateActiveIndex(), n.updateSlidesClasses();
							},
						},
						{
							key: 'emitContainerClasses',
							value: function () {
								var e = this;
								if (e.params._emitClasses && e.el) {
									var t = e.el.className.split(' ').filter(function (t) {
										return 0 === t.indexOf('swiper') || 0 === t.indexOf(e.params.containerModifierClass);
									});
									e.emit('_containerClasses', t.join(' '));
								}
							},
						},
						{
							key: 'getSlideClasses',
							value: function (e) {
								var t = this;
								return t.destroyed
									? ''
									: e.className
											.split(' ')
											.filter(function (e) {
												return 0 === e.indexOf('swiper-slide') || 0 === e.indexOf(t.params.slideClass);
											})
											.join(' ');
							},
						},
						{
							key: 'emitSlidesClasses',
							value: function () {
								var e = this;
								if (e.params._emitClasses && e.el) {
									var t = [];
									e.slides.forEach(function (n) {
										var r = e.getSlideClasses(n);
										t.push({ slideEl: n, classNames: r }), e.emit('_slideClass', n, r);
									}),
										e.emit('_slideClasses', t);
								}
							},
						},
						{
							key: 'slidesPerViewDynamic',
							value: function () {
								var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 'current',
									t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
									n = this,
									r = n.params,
									a = n.slides,
									l = n.slidesGrid,
									i = n.slidesSizesGrid,
									o = n.size,
									s = n.activeIndex,
									u = 1;
								if (r.centeredSlides) {
									for (var c, d = a[s].swiperSlideSize, f = s + 1; f < a.length; f += 1)
										a[f] && !c && ((u += 1), (d += a[f].swiperSlideSize) > o && (c = !0));
									for (var p = s - 1; p >= 0; p -= 1)
										a[p] && !c && ((u += 1), (d += a[p].swiperSlideSize) > o && (c = !0));
								} else if ('current' === e)
									for (var v = s + 1; v < a.length; v += 1) (t ? l[v] + i[v] - l[s] < o : l[v] - l[s] < o) && (u += 1);
								else for (var h = s - 1; h >= 0; h -= 1) l[s] - l[h] < o && (u += 1);
								return u;
							},
						},
						{
							key: 'update',
							value: function () {
								var e = this;
								if (e && !e.destroyed) {
									var t,
										n = e.snapGrid,
										r = e.params;
									if (
										(r.breakpoints && e.setBreakpoint(),
										v(e.el.querySelectorAll('[loading="lazy"]')).forEach(function (t) {
											t.complete && H(e, t);
										}),
										e.updateSize(),
										e.updateSlides(),
										e.updateProgress(),
										e.updateSlidesClasses(),
										e.params.freeMode && e.params.freeMode.enabled)
									)
										l(), e.params.autoHeight && e.updateAutoHeight();
									else {
										if (
											('auto' === e.params.slidesPerView || e.params.slidesPerView > 1) &&
											e.isEnd &&
											!e.params.centeredSlides
										) {
											var a = e.virtual && e.params.virtual.enabled ? e.virtual.slides : e.slides;
											t = e.slideTo(a.length - 1, 0, !1, !0);
										} else t = e.slideTo(e.activeIndex, 0, !1, !0);
										t || l();
									}
									r.watchOverflow && n !== e.snapGrid && e.checkOverflow(), e.emit('update');
								}
								function l() {
									var t = e.rtlTranslate ? -1 * e.translate : e.translate,
										n = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
									e.setTranslate(n), e.updateActiveIndex(), e.updateSlidesClasses();
								}
							},
						},
						{
							key: 'changeDirection',
							value: function (e) {
								var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
									n = this,
									r = n.params.direction;
								return (
									e || (e = 'horizontal' === r ? 'vertical' : 'horizontal'),
									e === r ||
										('horizontal' !== e && 'vertical' !== e) ||
										(n.el.classList.remove(''.concat(n.params.containerModifierClass).concat(r)),
										n.el.classList.add(''.concat(n.params.containerModifierClass).concat(e)),
										n.emitContainerClasses(),
										(n.params.direction = e),
										n.slides.forEach(function (t) {
											'vertical' === e ? (t.style.width = '') : (t.style.height = '');
										}),
										n.emit('changeDirection'),
										t && n.update()),
									n
								);
							},
						},
						{
							key: 'changeLanguageDirection',
							value: function (e) {
								var t = this;
								(t.rtl && 'rtl' === e) ||
									(!t.rtl && 'ltr' === e) ||
									((t.rtl = 'rtl' === e),
									(t.rtlTranslate = 'horizontal' === t.params.direction && t.rtl),
									t.rtl
										? (t.el.classList.add(''.concat(t.params.containerModifierClass, 'rtl')), (t.el.dir = 'rtl'))
										: (t.el.classList.remove(''.concat(t.params.containerModifierClass, 'rtl')), (t.el.dir = 'ltr')),
									t.update());
							},
						},
						{
							key: 'mount',
							value: function (e) {
								var t = this;
								if (t.mounted) return !0;
								var n = e || t.params.el;
								if (('string' === typeof n && (n = document.querySelector(n)), !n)) return !1;
								(n.swiper = t), n.shadowEl && (t.isElement = !0);
								var r = function () {
										return '.'.concat((t.params.wrapperClass || '').trim().split(' ').join('.'));
									},
									a = n && n.shadowRoot && n.shadowRoot.querySelector ? n.shadowRoot.querySelector(r()) : O(n, r())[0];
								return (
									!a &&
										t.params.createElements &&
										((a = N('div', t.params.wrapperClass)),
										n.append(a),
										O(n, '.'.concat(t.params.slideClass)).forEach(function (e) {
											a.append(e);
										})),
									Object.assign(t, {
										el: n,
										wrapperEl: a,
										slidesEl: t.isElement ? n : a,
										mounted: !0,
										rtl: 'rtl' === n.dir.toLowerCase() || 'rtl' === I(n, 'direction'),
										rtlTranslate:
											'horizontal' === t.params.direction &&
											('rtl' === n.dir.toLowerCase() || 'rtl' === I(n, 'direction')),
										wrongRTL: '-webkit-box' === I(a, 'display'),
									}),
									!0
								);
							},
						},
						{
							key: 'init',
							value: function (e) {
								var t = this;
								return (
									t.initialized ||
										!1 === t.mount(e) ||
										(t.emit('beforeInit'),
										t.params.breakpoints && t.setBreakpoint(),
										t.addClasses(),
										t.updateSize(),
										t.updateSlides(),
										t.params.watchOverflow && t.checkOverflow(),
										t.params.grabCursor && t.enabled && t.setGrabCursor(),
										t.params.loop && t.virtual && t.params.virtual.enabled
											? t.slideTo(
													t.params.initialSlide + t.virtual.slidesBefore,
													0,
													t.params.runCallbacksOnInit,
													!1,
													!0,
											  )
											: t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0),
										t.params.loop && t.loopCreate(),
										t.attachEvents(),
										v(t.el.querySelectorAll('[loading="lazy"]')).forEach(function (e) {
											e.complete
												? H(t, e)
												: e.addEventListener('load', function (e) {
														H(t, e.target);
												  });
										}),
										G(t),
										(t.initialized = !0),
										G(t),
										t.emit('init'),
										t.emit('afterInit')),
									t
								);
							},
						},
						{
							key: 'destroy',
							value: function () {
								var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
									t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
									n = this,
									r = n.params,
									a = n.el,
									l = n.wrapperEl,
									i = n.slides;
								return (
									'undefined' === typeof n.params ||
										n.destroyed ||
										(n.emit('beforeDestroy'),
										(n.initialized = !1),
										n.detachEvents(),
										r.loop && n.loopDestroy(),
										t &&
											(n.removeClasses(),
											a.removeAttribute('style'),
											l.removeAttribute('style'),
											i &&
												i.length &&
												i.forEach(function (e) {
													e.classList.remove(
														r.slideVisibleClass,
														r.slideActiveClass,
														r.slideNextClass,
														r.slidePrevClass,
													),
														e.removeAttribute('style'),
														e.removeAttribute('data-swiper-slide-index');
												})),
										n.emit('destroy'),
										Object.keys(n.eventsListeners).forEach(function (e) {
											n.off(e);
										}),
										!1 !== e &&
											((n.el.swiper = null),
											(function (e) {
												var t = e;
												Object.keys(t).forEach(function (e) {
													try {
														t[e] = null;
													} catch (n) {}
													try {
														delete t[e];
													} catch (n) {}
												});
											})(n)),
										(n.destroyed = !0)),
									null
								);
							},
						},
					]),
					(r = [
						{
							key: 'extendDefaults',
							value: function (e) {
								M(fe, e);
							},
						},
						{
							key: 'extendedDefaults',
							get: function () {
								return fe;
							},
						},
						{
							key: 'defaults',
							get: function () {
								return ue;
							},
						},
						{
							key: 'installModule',
							value: function (t) {
								e.prototype.__modules__ || (e.prototype.__modules__ = []);
								var n = e.prototype.__modules__;
								'function' === typeof t && n.indexOf(t) < 0 && n.push(t);
							},
						},
						{
							key: 'use',
							value: function (t) {
								return Array.isArray(t)
									? (t.forEach(function (t) {
											return e.installModule(t);
									  }),
									  e)
									: (e.installModule(t), e);
							},
						},
					]),
					n && h(t.prototype, n),
					r && h(t, r),
					Object.defineProperty(t, 'prototype', { writable: !1 }),
					e
				);
			})();
		Object.keys(de).forEach(function (e) {
			Object.keys(de[e]).forEach(function (t) {
				pe.prototype[t] = de[e][t];
			});
		}),
			pe.use([
				function (e) {
					var t = e.swiper,
						n = e.on,
						r = e.emit,
						a = E(),
						l = null,
						i = null,
						o = function () {
							t && !t.destroyed && t.initialized && (r('beforeResize'), r('resize'));
						},
						s = function () {
							t && !t.destroyed && t.initialized && r('orientationchange');
						};
					n('init', function () {
						t.params.resizeObserver && 'undefined' !== typeof a.ResizeObserver
							? t &&
							  !t.destroyed &&
							  t.initialized &&
							  (l = new ResizeObserver(function (e) {
									i = a.requestAnimationFrame(function () {
										var n = t.width,
											r = t.height,
											a = n,
											l = r;
										e.forEach(function (e) {
											var n = e.contentBoxSize,
												r = e.contentRect,
												i = e.target;
											(i && i !== t.el) ||
												((a = r ? r.width : (n[0] || n).inlineSize), (l = r ? r.height : (n[0] || n).blockSize));
										}),
											(a === n && l === r) || o();
									});
							  })).observe(t.el)
							: (a.addEventListener('resize', o), a.addEventListener('orientationchange', s));
					}),
						n('destroy', function () {
							i && a.cancelAnimationFrame(i),
								l && l.unobserve && t.el && (l.unobserve(t.el), (l = null)),
								a.removeEventListener('resize', o),
								a.removeEventListener('orientationchange', s);
						});
				},
				function (e) {
					var t = e.swiper,
						n = e.extendParams,
						r = e.on,
						a = e.emit,
						l = [],
						i = E(),
						o = function (e) {
							var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
								r = new (i.MutationObserver || i.WebkitMutationObserver)(function (e) {
									if (!t.__preventObserver__)
										if (1 !== e.length) {
											var n = function () {
												a('observerUpdate', e[0]);
											};
											i.requestAnimationFrame ? i.requestAnimationFrame(n) : i.setTimeout(n, 0);
										} else a('observerUpdate', e[0]);
								});
							r.observe(e, {
								attributes: 'undefined' === typeof n.attributes || n.attributes,
								childList: 'undefined' === typeof n.childList || n.childList,
								characterData: 'undefined' === typeof n.characterData || n.characterData,
							}),
								l.push(r);
						};
					n({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
						r('init', function () {
							if (t.params.observer) {
								if (t.params.observeParents) for (var e = D(t.el), n = 0; n < e.length; n += 1) o(e[n]);
								o(t.el, { childList: t.params.observeSlideChildren }), o(t.wrapperEl, { attributes: !1 });
							}
						}),
						r('destroy', function () {
							l.forEach(function (e) {
								e.disconnect();
							}),
								l.splice(0, l.length);
						});
				},
			]);
		var ve = pe;
		function he(e, t, n, r) {
			return (
				e.params.createElements &&
					Object.keys(r).forEach(function (a) {
						if (!n[a] && !0 === n.auto) {
							var l = O(e.el, '.'.concat(r[a]))[0];
							l || (((l = N('div', r[a])).className = r[a]), e.el.append(l)), (n[a] = l), (t[a] = l);
						}
					}),
				n
			);
		}
		function me(e) {
			var t = e.swiper,
				n = e.extendParams,
				r = e.on,
				a = e.emit;
			n({
				navigation: {
					nextEl: null,
					prevEl: null,
					hideOnClick: !1,
					disabledClass: 'swiper-button-disabled',
					hiddenClass: 'swiper-button-hidden',
					lockClass: 'swiper-button-lock',
					navigationDisabledClass: 'swiper-navigation-disabled',
				},
			}),
				(t.navigation = { nextEl: null, prevEl: null });
			var l = function (e) {
				return (
					Array.isArray(e) ||
						(e = [e].filter(function (e) {
							return !!e;
						})),
					e
				);
			};
			function i(e) {
				var n;
				return e && 'string' === typeof e && t.isElement && (n = t.el.shadowRoot.querySelector(e))
					? n
					: (e &&
							('string' === typeof e && (n = v(document.querySelectorAll(e))),
							t.params.uniqueNavElements &&
								'string' === typeof e &&
								n.length > 1 &&
								1 === t.el.querySelectorAll(e).length &&
								(n = t.el.querySelector(e))),
					  e && !n ? e : n);
			}
			function o(e, n) {
				var r = t.params.navigation;
				(e = l(e)).forEach(function (e) {
					var a;
					e &&
						((a = e.classList)[n ? 'add' : 'remove'].apply(a, v(r.disabledClass.split(' '))),
						'BUTTON' === e.tagName && (e.disabled = n),
						t.params.watchOverflow && t.enabled && e.classList[t.isLocked ? 'add' : 'remove'](r.lockClass));
				});
			}
			function s() {
				var e = t.navigation,
					n = e.nextEl,
					r = e.prevEl;
				if (t.params.loop) return o(r, !1), void o(n, !1);
				o(r, t.isBeginning && !t.params.rewind), o(n, t.isEnd && !t.params.rewind);
			}
			function u(e) {
				e.preventDefault(),
					(!t.isBeginning || t.params.loop || t.params.rewind) && (t.slidePrev(), a('navigationPrev'));
			}
			function c(e) {
				e.preventDefault(), (!t.isEnd || t.params.loop || t.params.rewind) && (t.slideNext(), a('navigationNext'));
			}
			function d() {
				var e = t.params.navigation;
				if (
					((t.params.navigation = he(t, t.originalParams.navigation, t.params.navigation, {
						nextEl: 'swiper-button-next',
						prevEl: 'swiper-button-prev',
					})),
					e.nextEl || e.prevEl)
				) {
					var n = i(e.nextEl),
						r = i(e.prevEl);
					Object.assign(t.navigation, { nextEl: n, prevEl: r }), (n = l(n)), (r = l(r));
					var a = function (n, r) {
						var a;
						(n && n.addEventListener('click', 'next' === r ? c : u), !t.enabled && n) &&
							(a = n.classList).add.apply(a, v(e.lockClass.split(' ')));
					};
					n.forEach(function (e) {
						return a(e, 'next');
					}),
						r.forEach(function (e) {
							return a(e, 'prev');
						});
				}
			}
			function f() {
				var e = t.navigation,
					n = e.nextEl,
					r = e.prevEl;
				(n = l(n)), (r = l(r));
				var a = function (e, n) {
					var r;
					e.removeEventListener('click', 'next' === n ? c : u),
						(r = e.classList).remove.apply(r, v(t.params.navigation.disabledClass.split(' ')));
				};
				n.forEach(function (e) {
					return a(e, 'next');
				}),
					r.forEach(function (e) {
						return a(e, 'prev');
					});
			}
			r('init', function () {
				!1 === t.params.navigation.enabled ? p() : (d(), s());
			}),
				r('toEdge fromEdge lock unlock', function () {
					s();
				}),
				r('destroy', function () {
					f();
				}),
				r('enable disable', function () {
					var e = t.navigation,
						n = e.nextEl,
						r = e.prevEl;
					(n = l(n)),
						(r = l(r)),
						[]
							.concat(v(n), v(r))
							.filter(function (e) {
								return !!e;
							})
							.forEach(function (e) {
								return e.classList[t.enabled ? 'remove' : 'add'](t.params.navigation.lockClass);
							});
				}),
				r('click', function (e, n) {
					var r = t.navigation,
						i = r.nextEl,
						o = r.prevEl;
					(i = l(i)), (o = l(o));
					var s = n.target;
					if (t.params.navigation.hideOnClick && !o.includes(s) && !i.includes(s)) {
						if (
							t.pagination &&
							t.params.pagination &&
							t.params.pagination.clickable &&
							(t.pagination.el === s || t.pagination.el.contains(s))
						)
							return;
						var u;
						i.length
							? (u = i[0].classList.contains(t.params.navigation.hiddenClass))
							: o.length && (u = o[0].classList.contains(t.params.navigation.hiddenClass)),
							a(!0 === u ? 'navigationShow' : 'navigationHide'),
							[]
								.concat(v(i), v(o))
								.filter(function (e) {
									return !!e;
								})
								.forEach(function (e) {
									return e.classList.toggle(t.params.navigation.hiddenClass);
								});
					}
				});
			var p = function () {
				var e;
				(e = t.el.classList).add.apply(e, v(t.params.navigation.navigationDisabledClass.split(' '))), f();
			};
			Object.assign(t.navigation, {
				enable: function () {
					var e;
					(e = t.el.classList).remove.apply(e, v(t.params.navigation.navigationDisabledClass.split(' '))), d(), s();
				},
				disable: p,
				update: s,
				init: d,
				destroy: f,
			});
		}
		function ge() {
			return '.'.concat(
				(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '')
					.trim()
					.replace(/([\.:!+\/])/g, '\\$1')
					.replace(/ /g, '.'),
			);
		}
		function ye(e) {
			var t,
				n = e.swiper,
				r = e.extendParams,
				a = e.on,
				l = e.emit,
				i = 'swiper-pagination';
			r({
				pagination: {
					el: null,
					bulletElement: 'span',
					clickable: !1,
					hideOnClick: !1,
					renderBullet: null,
					renderProgressbar: null,
					renderFraction: null,
					renderCustom: null,
					progressbarOpposite: !1,
					type: 'bullets',
					dynamicBullets: !1,
					dynamicMainBullets: 1,
					formatFractionCurrent: function (e) {
						return e;
					},
					formatFractionTotal: function (e) {
						return e;
					},
					bulletClass: ''.concat(i, '-bullet'),
					bulletActiveClass: ''.concat(i, '-bullet-active'),
					modifierClass: ''.concat(i, '-'),
					currentClass: ''.concat(i, '-current'),
					totalClass: ''.concat(i, '-total'),
					hiddenClass: ''.concat(i, '-hidden'),
					progressbarFillClass: ''.concat(i, '-progressbar-fill'),
					progressbarOppositeClass: ''.concat(i, '-progressbar-opposite'),
					clickableClass: ''.concat(i, '-clickable'),
					lockClass: ''.concat(i, '-lock'),
					horizontalClass: ''.concat(i, '-horizontal'),
					verticalClass: ''.concat(i, '-vertical'),
					paginationDisabledClass: ''.concat(i, '-disabled'),
				},
			}),
				(n.pagination = { el: null, bullets: [] });
			var o = 0,
				s = function (e) {
					return (
						Array.isArray(e) ||
							(e = [e].filter(function (e) {
								return !!e;
							})),
						e
					);
				};
			function u() {
				return (
					!n.params.pagination.el ||
					!n.pagination.el ||
					(Array.isArray(n.pagination.el) && 0 === n.pagination.el.length)
				);
			}
			function c(e, t) {
				var r = n.params.pagination.bulletActiveClass;
				e &&
					(e = e[''.concat('prev' === t ? 'previous' : 'next', 'ElementSibling')]) &&
					(e.classList.add(''.concat(r, '-').concat(t)),
					(e = e[''.concat('prev' === t ? 'previous' : 'next', 'ElementSibling')]) &&
						e.classList.add(''.concat(r, '-').concat(t, '-').concat(t)));
			}
			function d(e) {
				var t = e.target.closest(ge(n.params.pagination.bulletClass));
				if (t) {
					e.preventDefault();
					var r = j(t) * n.params.slidesPerGroup;
					if (n.params.loop) {
						if (n.realIndex === r) return;
						var a = n.getSlideIndexByData(r),
							l = n.getSlideIndexByData(n.realIndex);
						a > n.slides.length - n.loopedSlides &&
							n.loopFix({ direction: a > l ? 'next' : 'prev', activeSlideIndex: a, slideTo: !1 }),
							n.slideToLoop(r);
					} else n.slideTo(r);
				}
			}
			function f() {
				var e = n.rtl,
					r = n.params.pagination;
				if (!u()) {
					var a,
						i,
						d = n.pagination.el;
					d = s(d);
					var f = n.virtual && n.params.virtual.enabled ? n.virtual.slides.length : n.slides.length,
						p = n.params.loop ? Math.ceil(f / n.params.slidesPerGroup) : n.snapGrid.length;
					if (
						(n.params.loop
							? ((i = n.previousRealIndex || 0),
							  (a = n.params.slidesPerGroup > 1 ? Math.floor(n.realIndex / n.params.slidesPerGroup) : n.realIndex))
							: 'undefined' !== typeof n.snapIndex
							? ((a = n.snapIndex), (i = n.previousSnapIndex))
							: ((i = n.previousIndex || 0), (a = n.activeIndex || 0)),
						'bullets' === r.type && n.pagination.bullets && n.pagination.bullets.length > 0)
					) {
						var h,
							m,
							g,
							y = n.pagination.bullets;
						if (
							(r.dynamicBullets &&
								((t = R(y[0], n.isHorizontal() ? 'width' : 'height', !0)),
								d.forEach(function (e) {
									e.style[n.isHorizontal() ? 'width' : 'height'] = ''.concat(t * (r.dynamicMainBullets + 4), 'px');
								}),
								r.dynamicMainBullets > 1 &&
									void 0 !== i &&
									((o += a - (i || 0)) > r.dynamicMainBullets - 1 ? (o = r.dynamicMainBullets - 1) : o < 0 && (o = 0)),
								(h = Math.max(a - o, 0)),
								(g = ((m = h + (Math.min(y.length, r.dynamicMainBullets) - 1)) + h) / 2)),
							y.forEach(function (e) {
								var t,
									n = v(
										['', '-next', '-next-next', '-prev', '-prev-prev', '-main'].map(function (e) {
											return ''.concat(r.bulletActiveClass).concat(e);
										}),
									)
										.map(function (e) {
											return 'string' === typeof e && e.includes(' ') ? e.split(' ') : e;
										})
										.flat();
								(t = e.classList).remove.apply(t, v(n));
							}),
							d.length > 1)
						)
							y.forEach(function (e) {
								var t,
									n = j(e);
								n === a && (t = e.classList).add.apply(t, v(r.bulletActiveClass.split(' ')));
								if (r.dynamicBullets) {
									var l;
									if (n >= h && n <= m)
										(l = e.classList).add.apply(l, v(''.concat(r.bulletActiveClass, '-main').split(' ')));
									n === h && c(e, 'prev'), n === m && c(e, 'next');
								}
							});
						else {
							var b,
								w = y[a];
							if (w) (b = w.classList).add.apply(b, v(r.bulletActiveClass.split(' ')));
							if (r.dynamicBullets) {
								for (var S = y[h], k = y[m], x = h; x <= m; x += 1) {
									var E;
									if (y[x]) (E = y[x].classList).add.apply(E, v(''.concat(r.bulletActiveClass, '-main').split(' ')));
								}
								c(S, 'prev'), c(k, 'next');
							}
						}
						if (r.dynamicBullets) {
							var C = Math.min(y.length, r.dynamicMainBullets + 4),
								T = (t * C - t) / 2 - g * t,
								P = e ? 'right' : 'left';
							y.forEach(function (e) {
								e.style[n.isHorizontal() ? P : 'top'] = ''.concat(T, 'px');
							});
						}
					}
					d.forEach(function (e, t) {
						if (
							('fraction' === r.type &&
								(e.querySelectorAll(ge(r.currentClass)).forEach(function (e) {
									e.textContent = r.formatFractionCurrent(a + 1);
								}),
								e.querySelectorAll(ge(r.totalClass)).forEach(function (e) {
									e.textContent = r.formatFractionTotal(p);
								})),
							'progressbar' === r.type)
						) {
							var i;
							i = r.progressbarOpposite
								? n.isHorizontal()
									? 'vertical'
									: 'horizontal'
								: n.isHorizontal()
								? 'horizontal'
								: 'vertical';
							var o = (a + 1) / p,
								s = 1,
								u = 1;
							'horizontal' === i ? (s = o) : (u = o),
								e.querySelectorAll(ge(r.progressbarFillClass)).forEach(function (e) {
									(e.style.transform = 'translate3d(0,0,0) scaleX('.concat(s, ') scaleY(').concat(u, ')')),
										(e.style.transitionDuration = ''.concat(n.params.speed, 'ms'));
								});
						}
						'custom' === r.type && r.renderCustom
							? ((e.innerHTML = r.renderCustom(n, a + 1, p)), 0 === t && l('paginationRender', e))
							: (0 === t && l('paginationRender', e), l('paginationUpdate', e)),
							n.params.watchOverflow && n.enabled && e.classList[n.isLocked ? 'add' : 'remove'](r.lockClass);
					});
				}
			}
			function p() {
				var e = n.params.pagination;
				if (!u()) {
					var t = n.virtual && n.params.virtual.enabled ? n.virtual.slides.length : n.slides.length,
						r = n.pagination.el;
					r = s(r);
					var a = '';
					if ('bullets' === e.type) {
						var i = n.params.loop ? Math.ceil(t / n.params.slidesPerGroup) : n.snapGrid.length;
						n.params.freeMode && n.params.freeMode.enabled && i > t && (i = t);
						for (var o = 0; o < i; o += 1)
							e.renderBullet
								? (a += e.renderBullet.call(n, o, e.bulletClass))
								: (a += '<'
										.concat(e.bulletElement, ' class="')
										.concat(e.bulletClass, '"></')
										.concat(e.bulletElement, '>'));
					}
					'fraction' === e.type &&
						(a = e.renderFraction
							? e.renderFraction.call(n, e.currentClass, e.totalClass)
							: '<span class="'.concat(e.currentClass, '"></span>') +
							  ' / ' +
							  '<span class="'.concat(e.totalClass, '"></span>')),
						'progressbar' === e.type &&
							(a = e.renderProgressbar
								? e.renderProgressbar.call(n, e.progressbarFillClass)
								: '<span class="'.concat(e.progressbarFillClass, '"></span>')),
						(n.pagination.bullets = []),
						r.forEach(function (t) {
							var r;
							('custom' !== e.type && (t.innerHTML = a || ''), 'bullets' === e.type) &&
								(r = n.pagination.bullets).push.apply(r, v(t.querySelectorAll(ge(e.bulletClass))));
						}),
						'custom' !== e.type && l('paginationRender', r[0]);
				}
			}
			function h() {
				n.params.pagination = he(n, n.originalParams.pagination, n.params.pagination, { el: 'swiper-pagination' });
				var e,
					t = n.params.pagination;
				t.el &&
					('string' === typeof t.el && n.isElement && (e = n.el.shadowRoot.querySelector(t.el)),
					e || 'string' !== typeof t.el || (e = v(document.querySelectorAll(t.el))),
					e || (e = t.el),
					e &&
						0 !== e.length &&
						(n.params.uniqueNavElements &&
							'string' === typeof t.el &&
							Array.isArray(e) &&
							e.length > 1 &&
							(e = v(n.el.querySelectorAll(t.el))).length > 1 &&
							(e = e.filter(function (e) {
								return D(e, '.swiper')[0] === n.el;
							})[0]),
						Array.isArray(e) && 1 === e.length && (e = e[0]),
						Object.assign(n.pagination, { el: e }),
						(e = s(e)).forEach(function (e) {
							'bullets' === t.type && t.clickable && e.classList.add(t.clickableClass),
								e.classList.add(t.modifierClass + t.type),
								e.classList.add(n.isHorizontal() ? t.horizontalClass : t.verticalClass),
								'bullets' === t.type &&
									t.dynamicBullets &&
									(e.classList.add(''.concat(t.modifierClass).concat(t.type, '-dynamic')),
									(o = 0),
									t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)),
								'progressbar' === t.type && t.progressbarOpposite && e.classList.add(t.progressbarOppositeClass),
								t.clickable && e.addEventListener('click', d),
								n.enabled || e.classList.add(t.lockClass);
						})));
			}
			function m() {
				var e = n.params.pagination;
				if (!u()) {
					var t = n.pagination.el;
					t &&
						(t = s(t)).forEach(function (t) {
							t.classList.remove(e.hiddenClass),
								t.classList.remove(e.modifierClass + e.type),
								t.classList.remove(n.isHorizontal() ? e.horizontalClass : e.verticalClass),
								e.clickable && t.removeEventListener('click', d);
						}),
						n.pagination.bullets &&
							n.pagination.bullets.forEach(function (t) {
								var n;
								return (n = t.classList).remove.apply(n, v(e.bulletActiveClass.split(' ')));
							});
				}
			}
			a('changeDirection', function () {
				if (n.pagination && n.pagination.el) {
					var e = n.params.pagination,
						t = n.pagination.el;
					(t = s(t)).forEach(function (t) {
						t.classList.remove(e.horizontalClass, e.verticalClass),
							t.classList.add(n.isHorizontal() ? e.horizontalClass : e.verticalClass);
					});
				}
			}),
				a('init', function () {
					!1 === n.params.pagination.enabled ? g() : (h(), p(), f());
				}),
				a('activeIndexChange', function () {
					'undefined' === typeof n.snapIndex && f();
				}),
				a('snapIndexChange', function () {
					f();
				}),
				a('snapGridLengthChange', function () {
					p(), f();
				}),
				a('destroy', function () {
					m();
				}),
				a('enable disable', function () {
					var e = n.pagination.el;
					e &&
						(e = s(e)).forEach(function (e) {
							return e.classList[n.enabled ? 'remove' : 'add'](n.params.pagination.lockClass);
						});
				}),
				a('lock unlock', function () {
					f();
				}),
				a('click', function (e, t) {
					var r = t.target,
						a = n.pagination.el;
					if (
						(Array.isArray(a) ||
							(a = [a].filter(function (e) {
								return !!e;
							})),
						n.params.pagination.el &&
							n.params.pagination.hideOnClick &&
							a &&
							a.length > 0 &&
							!r.classList.contains(n.params.pagination.bulletClass))
					) {
						if (
							n.navigation &&
							((n.navigation.nextEl && r === n.navigation.nextEl) || (n.navigation.prevEl && r === n.navigation.prevEl))
						)
							return;
						var i = a[0].classList.contains(n.params.pagination.hiddenClass);
						l(!0 === i ? 'paginationShow' : 'paginationHide'),
							a.forEach(function (e) {
								return e.classList.toggle(n.params.pagination.hiddenClass);
							});
					}
				});
			var g = function () {
				n.el.classList.add(n.params.pagination.paginationDisabledClass);
				var e = n.pagination.el;
				e &&
					(e = s(e)).forEach(function (e) {
						return e.classList.add(n.params.pagination.paginationDisabledClass);
					}),
					m();
			};
			Object.assign(n.pagination, {
				enable: function () {
					n.el.classList.remove(n.params.pagination.paginationDisabledClass);
					var e = n.pagination.el;
					e &&
						(e = s(e)).forEach(function (e) {
							return e.classList.remove(n.params.pagination.paginationDisabledClass);
						}),
						h(),
						p(),
						f();
				},
				disable: g,
				render: p,
				update: f,
				init: h,
				destroy: m,
			});
		}
		function be(e) {
			return (
				'object' === typeof e &&
				null !== e &&
				e.constructor &&
				'Object' === Object.prototype.toString.call(e).slice(8, -1)
			);
		}
		function we(e, t) {
			var n = ['__proto__', 'constructor', 'prototype'];
			Object.keys(t)
				.filter(function (e) {
					return n.indexOf(e) < 0;
				})
				.forEach(function (n) {
					'undefined' === typeof e[n]
						? (e[n] = t[n])
						: be(t[n]) && be(e[n]) && Object.keys(t[n]).length > 0
						? t[n].__swiper__
							? (e[n] = t[n])
							: we(e[n], t[n])
						: (e[n] = t[n]);
				});
		}
		function Se() {
			var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
			return e.navigation && 'undefined' === typeof e.navigation.nextEl && 'undefined' === typeof e.navigation.prevEl;
		}
		function ke() {
			var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
			return e.pagination && 'undefined' === typeof e.pagination.el;
		}
		function xe() {
			var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
			return e.scrollbar && 'undefined' === typeof e.scrollbar.el;
		}
		function Ee() {
			var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '')
					.split(' ')
					.map(function (e) {
						return e.trim();
					})
					.filter(function (e) {
						return !!e;
					}),
				t = [];
			return (
				e.forEach(function (e) {
					t.indexOf(e) < 0 && t.push(e);
				}),
				t.join(' ')
			);
		}
		function Ce() {
			var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '';
			return e ? (e.includes('swiper-wrapper') ? e : 'swiper-wrapper '.concat(e)) : 'swiper-wrapper';
		}
		var Te = [
			'eventsPrefix',
			'injectStyles',
			'injectStylesUrls',
			'modules',
			'init',
			'_direction',
			'oneWayMovement',
			'touchEventsTarget',
			'initialSlide',
			'_speed',
			'cssMode',
			'updateOnWindowResize',
			'resizeObserver',
			'nested',
			'focusableElements',
			'_enabled',
			'_width',
			'_height',
			'preventInteractionOnTransition',
			'userAgent',
			'url',
			'_edgeSwipeDetection',
			'_edgeSwipeThreshold',
			'_freeMode',
			'_autoHeight',
			'setWrapperSize',
			'virtualTranslate',
			'_effect',
			'breakpoints',
			'_spaceBetween',
			'_slidesPerView',
			'maxBackfaceHiddenSlides',
			'_grid',
			'_slidesPerGroup',
			'_slidesPerGroupSkip',
			'_slidesPerGroupAuto',
			'_centeredSlides',
			'_centeredSlidesBounds',
			'_slidesOffsetBefore',
			'_slidesOffsetAfter',
			'normalizeSlideIndex',
			'_centerInsufficientSlides',
			'_watchOverflow',
			'roundLengths',
			'touchRatio',
			'touchAngle',
			'simulateTouch',
			'_shortSwipes',
			'_longSwipes',
			'longSwipesRatio',
			'longSwipesMs',
			'_followFinger',
			'allowTouchMove',
			'_threshold',
			'touchMoveStopPropagation',
			'touchStartPreventDefault',
			'touchStartForcePreventDefault',
			'touchReleaseOnEdges',
			'uniqueNavElements',
			'_resistance',
			'_resistanceRatio',
			'_watchSlidesProgress',
			'_grabCursor',
			'preventClicks',
			'preventClicksPropagation',
			'_slideToClickedSlide',
			'_loop',
			'loopedSlides',
			'loopPreventsSliding',
			'_rewind',
			'_allowSlidePrev',
			'_allowSlideNext',
			'_swipeHandler',
			'_noSwiping',
			'noSwipingClass',
			'noSwipingSelector',
			'passiveListeners',
			'containerModifierClass',
			'slideClass',
			'slideActiveClass',
			'slideVisibleClass',
			'slideNextClass',
			'slidePrevClass',
			'wrapperClass',
			'lazyPreloaderClass',
			'lazyPreloadPrevNext',
			'runCallbacksOnInit',
			'observer',
			'observeParents',
			'observeSlideChildren',
			'a11y',
			'_autoplay',
			'_controller',
			'coverflowEffect',
			'cubeEffect',
			'fadeEffect',
			'flipEffect',
			'creativeEffect',
			'cardsEffect',
			'hashNavigation',
			'history',
			'keyboard',
			'mousewheel',
			'_navigation',
			'_pagination',
			'parallax',
			'_scrollbar',
			'_thumbs',
			'virtual',
			'zoom',
			'control',
		];
		function Pe(e) {
			return e.type && e.type.displayName && e.type.displayName.includes('SwiperSlide');
		}
		function _e(t) {
			var n = [];
			return (
				e.Children.toArray(t).forEach(function (e) {
					Pe(e)
						? n.push(e)
						: e.props &&
						  e.props.children &&
						  _e(e.props.children).forEach(function (e) {
								return n.push(e);
						  });
				}),
				n
			);
		}
		function Me(t) {
			var n = [],
				r = { 'container-start': [], 'container-end': [], 'wrapper-start': [], 'wrapper-end': [] };
			return (
				e.Children.toArray(t).forEach(function (e) {
					if (Pe(e)) n.push(e);
					else if (e.props && e.props.slot && r[e.props.slot]) r[e.props.slot].push(e);
					else if (e.props && e.props.children) {
						var t = _e(e.props.children);
						t.length > 0
							? t.forEach(function (e) {
									return n.push(e);
							  })
							: r['container-end'].push(e);
					} else r['container-end'].push(e);
				}),
				{ slides: n, slots: r }
			);
		}
		function ze(e) {
			var t,
				n,
				r,
				a,
				l,
				i,
				o,
				s,
				u = e.swiper,
				c = e.slides,
				d = e.passedParams,
				f = e.changedParams,
				p = e.nextEl,
				v = e.prevEl,
				h = e.scrollbarEl,
				m = e.paginationEl,
				g = f.filter(function (e) {
					return 'children' !== e && 'direction' !== e && 'wrapperClass' !== e;
				}),
				y = u.params,
				b = u.pagination,
				w = u.navigation,
				S = u.scrollbar,
				k = u.virtual,
				x = u.thumbs;
			f.includes('thumbs') && d.thumbs && d.thumbs.swiper && y.thumbs && !y.thumbs.swiper && (t = !0),
				f.includes('controller') &&
					d.controller &&
					d.controller.control &&
					y.controller &&
					!y.controller.control &&
					(n = !0),
				f.includes('pagination') &&
					d.pagination &&
					(d.pagination.el || m) &&
					(y.pagination || !1 === y.pagination) &&
					b &&
					!b.el &&
					(r = !0),
				f.includes('scrollbar') &&
					d.scrollbar &&
					(d.scrollbar.el || h) &&
					(y.scrollbar || !1 === y.scrollbar) &&
					S &&
					!S.el &&
					(a = !0),
				f.includes('navigation') &&
					d.navigation &&
					(d.navigation.prevEl || v) &&
					(d.navigation.nextEl || p) &&
					(y.navigation || !1 === y.navigation) &&
					w &&
					!w.prevEl &&
					!w.nextEl &&
					(l = !0);
			(f.includes('loop') && u.isElement && (y.loop && !d.loop ? (i = !0) : !y.loop && d.loop ? (o = !0) : (s = !0)),
			g.forEach(function (e) {
				if (be(y[e]) && be(d[e])) we(y[e], d[e]);
				else {
					var t = d[e];
					(!0 !== t && !1 !== t) || ('navigation' !== e && 'pagination' !== e && 'scrollbar' !== e)
						? (y[e] = d[e])
						: !1 === t &&
						  u[(n = e)] &&
						  (u[n].destroy(),
						  'navigation' === n
								? (u.isElement && (u[n].prevEl.remove(), u[n].nextEl.remove()),
								  (y[n].prevEl = void 0),
								  (y[n].nextEl = void 0),
								  (u[n].prevEl = void 0),
								  (u[n].nextEl = void 0))
								: (u.isElement && u[n].el.remove(), (y[n].el = void 0), (u[n].el = void 0)));
				}
				var n;
			}),
			g.includes('controller') &&
				!n &&
				u.controller &&
				u.controller.control &&
				y.controller &&
				y.controller.control &&
				(u.controller.control = y.controller.control),
			f.includes('children') && c && k && y.virtual.enabled && ((k.slides = c), k.update(!0)),
			f.includes('children') && c && y.loop && (s = !0),
			t) &&
				x.init() &&
				x.update(!0);
			n && (u.controller.control = y.controller.control),
				r &&
					(!u.isElement ||
						(m && 'string' !== typeof m) ||
						((m = document.createElement('div')).classList.add('swiper-pagination'), u.el.shadowEl.appendChild(m)),
					m && (y.pagination.el = m),
					b.init(),
					b.render(),
					b.update()),
				a &&
					(!u.isElement ||
						(h && 'string' !== typeof h) ||
						((h = document.createElement('div')).classList.add('swiper-scrollbar'), u.el.shadowEl.appendChild(h)),
					h && (y.scrollbar.el = h),
					S.init(),
					S.updateSize(),
					S.setTranslate()),
				l &&
					(u.isElement &&
						((p && 'string' !== typeof p) ||
							((p = document.createElement('div')).classList.add('swiper-button-next'), u.el.shadowEl.appendChild(p)),
						(v && 'string' !== typeof v) ||
							((v = document.createElement('div')).classList.add('swiper-button-prev'), u.el.shadowEl.appendChild(v))),
					p && (y.navigation.nextEl = p),
					v && (y.navigation.prevEl = v),
					w.init(),
					w.update()),
				f.includes('allowSlideNext') && (u.allowSlideNext = d.allowSlideNext),
				f.includes('allowSlidePrev') && (u.allowSlidePrev = d.allowSlidePrev),
				f.includes('direction') && u.changeDirection(d.direction, !1),
				(i || s) && u.loopDestroy(),
				(o || s) && u.loopCreate(),
				u.update();
		}
		function Le(t, n) {
			return 'undefined' === typeof window ? (0, e.useEffect)(t, n) : (0, e.useLayoutEffect)(t, n);
		}
		var Oe = (0, e.createContext)(null),
			Ne = (0, e.createContext)(null),
			Ie = ['className', 'tag', 'wrapperTag', 'children', 'onSwiper'];
		function je() {
			return (
				(je = Object.assign
					? Object.assign.bind()
					: function (e) {
							for (var t = 1; t < arguments.length; t++) {
								var n = arguments[t];
								for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
							}
							return e;
					  }),
				je.apply(this, arguments)
			);
		}
		var De = (0, e.forwardRef)(function (t, n) {
			var r = void 0 === t ? {} : t,
				a = r.className,
				l = r.tag,
				i = void 0 === l ? 'div' : l,
				o = r.wrapperTag,
				u = void 0 === o ? 'div' : o,
				c = r.children,
				v = r.onSwiper,
				h = p(r, Ie),
				m = !1,
				g = s((0, e.useState)('swiper'), 2),
				y = g[0],
				b = g[1],
				w = s((0, e.useState)(null), 2),
				S = w[0],
				k = w[1],
				x = s((0, e.useState)(!1), 2),
				E = x[0],
				C = x[1],
				T = (0, e.useRef)(!1),
				P = (0, e.useRef)(null),
				_ = (0, e.useRef)(null),
				M = (0, e.useRef)(null),
				z = (0, e.useRef)(null),
				L = (0, e.useRef)(null),
				O = (0, e.useRef)(null),
				N = (0, e.useRef)(null),
				I = (0, e.useRef)(null),
				j = (function () {
					var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
						t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
						n = { on: {} },
						r = {},
						a = {};
					we(n, ve.defaults), we(n, ve.extendedDefaults), (n._emitClasses = !0), (n.init = !1);
					var l = {},
						i = Te.map(function (e) {
							return e.replace(/_/, '');
						}),
						o = Object.assign({}, e);
					return (
						Object.keys(o).forEach(function (o) {
							'undefined' !== typeof e[o] &&
								(i.indexOf(o) >= 0
									? be(e[o])
										? ((n[o] = {}), (a[o] = {}), we(n[o], e[o]), we(a[o], e[o]))
										: ((n[o] = e[o]), (a[o] = e[o]))
									: 0 === o.search(/on[A-Z]/) && 'function' === typeof e[o]
									? t
										? (r[''.concat(o[2].toLowerCase()).concat(o.substr(3))] = e[o])
										: (n.on[''.concat(o[2].toLowerCase()).concat(o.substr(3))] = e[o])
									: (l[o] = e[o]));
						}),
						['navigation', 'pagination', 'scrollbar'].forEach(function (e) {
							!0 === n[e] && (n[e] = {}), !1 === n[e] && delete n[e];
						}),
						{ params: n, passedParams: a, rest: l, events: r }
					);
				})(h),
				D = j.params,
				R = j.passedParams,
				A = j.rest,
				F = j.events,
				B = Me(c),
				V = B.slides,
				H = B.slots,
				U = function () {
					C(!E);
				};
			Object.assign(D.on, {
				_containerClasses: function (e, t) {
					b(t);
				},
			});
			var G = function () {
				Object.assign(D.on, F), (m = !0);
				var e = (function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = null != arguments[t] ? arguments[t] : {};
						t % 2
							? f(Object(n), !0).forEach(function (t) {
									d(e, t, n[t]);
							  })
							: Object.getOwnPropertyDescriptors
							? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
							: f(Object(n)).forEach(function (t) {
									Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
							  });
					}
					return e;
				})({}, D);
				if ((delete e.wrapperClass, (_.current = new ve(e)), _.current.virtual && _.current.params.virtual.enabled)) {
					_.current.virtual.slides = V;
					var t = { cache: !1, slides: V, renderExternal: k, renderExternalUpdate: !1 };
					we(_.current.params.virtual, t), we(_.current.originalParams.virtual, t);
				}
			};
			P.current || G(), _.current && _.current.on('_beforeBreakpoint', U);
			return (
				(0, e.useEffect)(function () {
					return function () {
						_.current && _.current.off('_beforeBreakpoint', U);
					};
				}),
				(0, e.useEffect)(function () {
					!T.current && _.current && (_.current.emitSlidesClasses(), (T.current = !0));
				}),
				Le(function () {
					if ((n && (n.current = P.current), P.current))
						return (
							_.current.destroyed && G(),
							(function (e, t) {
								var n = e.el,
									r = e.nextEl,
									a = e.prevEl,
									l = e.paginationEl,
									i = e.scrollbarEl,
									o = e.swiper;
								Se(t) &&
									r &&
									a &&
									((o.params.navigation.nextEl = r),
									(o.originalParams.navigation.nextEl = r),
									(o.params.navigation.prevEl = a),
									(o.originalParams.navigation.prevEl = a)),
									ke(t) && l && ((o.params.pagination.el = l), (o.originalParams.pagination.el = l)),
									xe(t) && i && ((o.params.scrollbar.el = i), (o.originalParams.scrollbar.el = i)),
									o.init(n);
							})(
								{
									el: P.current,
									nextEl: L.current,
									prevEl: O.current,
									paginationEl: N.current,
									scrollbarEl: I.current,
									swiper: _.current,
								},
								D,
							),
							v && v(_.current),
							function () {
								_.current && !_.current.destroyed && _.current.destroy(!0, !1);
							}
						);
				}, []),
				Le(function () {
					!m &&
						F &&
						_.current &&
						Object.keys(F).forEach(function (e) {
							_.current.on(e, F[e]);
						});
					var e = (function (e, t, n, r, a) {
						var l = [];
						if (!t) return l;
						var i = function (e) {
							l.indexOf(e) < 0 && l.push(e);
						};
						if (n && r) {
							var o = r.map(a),
								s = n.map(a);
							o.join('') !== s.join('') && i('children'), r.length !== n.length && i('children');
						}
						return (
							Te.filter(function (e) {
								return '_' === e[0];
							})
								.map(function (e) {
									return e.replace(/_/, '');
								})
								.forEach(function (n) {
									if (n in e && n in t)
										if (be(e[n]) && be(t[n])) {
											var r = Object.keys(e[n]),
												a = Object.keys(t[n]);
											r.length !== a.length
												? i(n)
												: (r.forEach(function (r) {
														e[n][r] !== t[n][r] && i(n);
												  }),
												  a.forEach(function (r) {
														e[n][r] !== t[n][r] && i(n);
												  }));
										} else e[n] !== t[n] && i(n);
								}),
							l
						);
					})(R, M.current, V, z.current, function (e) {
						return e.key;
					});
					return (
						(M.current = R),
						(z.current = V),
						e.length &&
							_.current &&
							!_.current.destroyed &&
							ze({
								swiper: _.current,
								slides: V,
								passedParams: R,
								changedParams: e,
								nextEl: L.current,
								prevEl: O.current,
								scrollbarEl: I.current,
								paginationEl: N.current,
							}),
						function () {
							F &&
								_.current &&
								Object.keys(F).forEach(function (e) {
									_.current.off(e, F[e]);
								});
						}
					);
				}),
				Le(
					function () {
						var e;
						!(e = _.current) ||
							e.destroyed ||
							!e.params.virtual ||
							(e.params.virtual && !e.params.virtual.enabled) ||
							(e.updateSlides(),
							e.updateProgress(),
							e.updateSlidesClasses(),
							e.parallax && e.params.parallax && e.params.parallax.enabled && e.parallax.setTranslate());
					},
					[S],
				),
				e.createElement(
					i,
					je({ ref: P, className: Ee(''.concat(y).concat(a ? ' '.concat(a) : '')) }, A),
					e.createElement(
						Ne.Provider,
						{ value: _.current },
						H['container-start'],
						e.createElement(
							u,
							{ className: Ce(D.wrapperClass) },
							H['wrapper-start'],
							D.virtual
								? (function (t, n, r) {
										if (!r) return null;
										for (
											var a = function (e) {
													var t = e;
													return e < 0 ? (t = n.length + e) : t >= n.length && (t -= n.length), t;
												},
												l = t.isHorizontal()
													? d({}, t.rtlTranslate ? 'right' : 'left', ''.concat(r.offset, 'px'))
													: { top: ''.concat(r.offset, 'px') },
												i = r.from,
												o = r.to,
												s = t.params.loop ? -n.length : 0,
												u = t.params.loop ? 2 * n.length : n.length,
												c = [],
												f = s;
											f < u;
											f += 1
										)
											f >= i && f <= o && c.push(n[a(f)]);
										return c.map(function (n, r) {
											return e.cloneElement(n, { swiper: t, style: l, key: 'slide-'.concat(r) });
										});
								  })(_.current, V, S)
								: V.map(function (t, n) {
										return e.cloneElement(t, { swiper: _.current, swiperSlideIndex: n });
								  }),
							H['wrapper-end'],
						),
						Se(D) &&
							e.createElement(
								e.Fragment,
								null,
								e.createElement('div', { ref: O, className: 'swiper-button-prev' }),
								e.createElement('div', { ref: L, className: 'swiper-button-next' }),
							),
						xe(D) && e.createElement('div', { ref: I, className: 'swiper-scrollbar' }),
						ke(D) && e.createElement('div', { ref: N, className: 'swiper-pagination' }),
						H['container-end'],
					),
				)
			);
		});
		De.displayName = 'Swiper';
		var Re = ['tag', 'children', 'className', 'swiper', 'zoom', 'lazy', 'virtualIndex', 'swiperSlideIndex'];
		function Ae() {
			return (
				(Ae = Object.assign
					? Object.assign.bind()
					: function (e) {
							for (var t = 1; t < arguments.length; t++) {
								var n = arguments[t];
								for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
							}
							return e;
					  }),
				Ae.apply(this, arguments)
			);
		}
		var Fe = (0, e.forwardRef)(function (t, n) {
			var r = void 0 === t ? {} : t,
				a = r.tag,
				l = void 0 === a ? 'div' : a,
				i = r.children,
				o = r.className,
				u = void 0 === o ? '' : o,
				c = r.swiper,
				d = r.zoom,
				f = r.lazy,
				v = r.virtualIndex,
				h = r.swiperSlideIndex,
				m = p(r, Re),
				g = (0, e.useRef)(null),
				y = s((0, e.useState)('swiper-slide'), 2),
				b = y[0],
				w = y[1],
				S = s((0, e.useState)(!1), 2),
				k = S[0],
				x = S[1];
			function E(e, t, n) {
				t === g.current && w(n);
			}
			Le(function () {
				if (
					('undefined' !== typeof h && (g.current.swiperSlideIndex = h), n && (n.current = g.current), g.current && c)
				) {
					if (!c.destroyed)
						return (
							c.on('_slideClass', E),
							function () {
								c && c.off('_slideClass', E);
							}
						);
					'swiper-slide' !== b && w('swiper-slide');
				}
			}),
				Le(
					function () {
						c && g.current && !c.destroyed && w(c.getSlideClasses(g.current));
					},
					[c],
				);
			var C = {
					isActive: b.indexOf('swiper-slide-active') >= 0,
					isVisible: b.indexOf('swiper-slide-visible') >= 0,
					isPrev: b.indexOf('swiper-slide-prev') >= 0,
					isNext: b.indexOf('swiper-slide-next') >= 0,
				},
				T = function () {
					return 'function' === typeof i ? i(C) : i;
				};
			return e.createElement(
				l,
				Ae(
					{
						ref: g,
						className: Ee(''.concat(b).concat(u ? ' '.concat(u) : '')),
						'data-swiper-slide-index': v,
						onLoad: function () {
							x(!0);
						},
					},
					m,
				),
				d &&
					e.createElement(
						Oe.Provider,
						{ value: C },
						e.createElement(
							'div',
							{ className: 'swiper-zoom-container', 'data-swiper-zoom': 'number' === typeof d ? d : void 0 },
							T(),
							f && !k && e.createElement('div', { className: 'swiper-lazy-preloader' }),
						),
					),
				!d &&
					e.createElement(
						Oe.Provider,
						{ value: C },
						T(),
						f && !k && e.createElement('div', { className: 'swiper-lazy-preloader' }),
					),
			);
		});
		Fe.displayName = 'SwiperSlide';
		var Be = {
				'Twitter-Ethereum': {
					images: [
						'https://dl.dropboxusercontent.com/s/dpad8edfh0wsujh/Feed-smaller.jpg?dl=0',
						'https://dl.dropboxusercontent.com/s/mnhi4p4w1cahxru/Twitter-comments.jpg?dl=0',
						'https://dl.dropboxusercontent.com/s/3wptb2dxp0bsy4g/CreateProfile-smaller.jpg?dl=0',
						'https://dl.dropboxusercontent.com/s/wssc2um22v16ega/Auction-smaller.jpg?dl=0',
					],
					github: 'https://github.com/JKaneDev/decentralized-twitter',
					livesite: 'https://twitter-ethereum.herokuapp.com/',
					walkthrough: 'https://www.youtube.com/watch?v=0VoMZnc1dDk',
				},
				'XTK Exchange': {
					images: ['https://dl.dropboxusercontent.com/s/14xg275trdtkxnd/Exchange-new.jpg?dl=0'],
					github: 'https://github.com/JKaneDev/decentralized-exchange',
					livesite: 'https://x-token-exchange.herokuapp.com/',
					walkthrough: '',
				},
				'Gaming Store': {
					images: [
						'https://dl.dropboxusercontent.com/s/6ei83g3h776xs8l/home.jpg?dl=0',
						'https://dl.dropboxusercontent.com/s/tqjr868hmewcvkd/checkout.jpg?dl=0',
						'https://dl.dropboxusercontent.com/s/lex6jiwehpa826y/wishlist.jpg?dl=0',
						'https://dl.dropboxusercontent.com/s/rb0issrj73b8vql/search.jpg?dl=0',
					],
					github: 'https://github.com/JKaneDev/e-commerce-store',
					livesite: 'https://react-ecommerce-store.herokuapp.com/store',
					walkthrough: '',
				},
			},
			Ve = (0, e.forwardRef)(function (t, n) {
				var a = s((0, e.useState)([]), 2),
					l = a[0],
					i = a[1],
					o = s((0, e.useState)(null), 2),
					u = o[0],
					c = o[1];
				(0, e.useEffect)(function () {
					i(Be['Twitter-Ethereum']);
				}, []);
				var d = function (e) {
					i(Be[e]);
				};
				return (0, r.jsxs)('section', {
					className: 'portfolio',
					'data-target': 'portfolio',
					ref: n,
					children: [
						(0, r.jsxs)('h2', {
							className: 'heading',
							children: ['Recent ', (0, r.jsx)('span', { children: 'Projects' })],
						}),
						(0, r.jsxs)('div', {
							className: 'project-select-wrapper',
							children: [
								(0, r.jsx)('button', {
									className: 'project-btns '.concat('Twitter-Ethereum' === u ? 'selected' : ''),
									onClick: function () {
										d('Twitter-Ethereum'), c('Twitter-Ethereum');
									},
									children: 'Twitter-Ethereum',
								}),
								(0, r.jsx)('button', {
									className: 'project-btns '.concat('XTK Exchange' === u ? 'selected' : ''),
									onClick: function () {
										d('XTK Exchange'), c('XTK Exchange');
									},
									children: 'XTK Exchange',
								}),
								(0, r.jsx)('button', {
									className: 'project-btns '.concat('Gaming Store' === u ? 'selected' : ''),
									onClick: function () {
										d('Gaming Store'), c('Gaming Store');
									},
									children: 'Gaming Store',
								}),
							],
						}),
						l.images
							? (0, r.jsx)('div', {
									className: 'portfolio-container',
									children: (0, r.jsx)(De, {
										modules: [me, ye],
										spaceBetween: 50,
										slidesPerView: 1,
										navigation: !0,
										loop: !0,
										pagination: { clickable: !0 },
										className: 'swiper',
										children: l.images.map(function (e, t) {
											return (0,
											r.jsx)(Fe, { className: 'swiper-slide', children: (0, r.jsx)('img', { src: e, alt: 'Slide '.concat(t) }) }, t);
										}),
									}),
							  })
							: (0, r.jsx)(r.Fragment, {}),
						(0, r.jsxs)('div', {
							className: 'project-options',
							children: [
								(0, r.jsx)('a', {
									href: l.github,
									target: '_blank',
									rel: 'noopener noreferrer',
									className: 'project-options',
									children: (0, r.jsx)('i', { class: 'bx bxl-github' }),
								}),
								(0, r.jsx)('a', {
									href: l.livesite,
									target: '_blank',
									rel: 'noopener noreferrer',
									className: 'project-options',
									children: (0, r.jsx)('i', { class: 'bx bx-show' }),
								}),
								(0, r.jsx)('a', {
									href: l.walkthrough,
									target: '_blank',
									rel: 'noopener noreferrer',
									className: 'project-options',
									children: (0, r.jsx)('i', { class: 'bx bx-video-recording' }),
								}),
							],
						}),
					],
				});
			});
		var He = function () {
			var t = (0, e.useRef)(null),
				n = (0, e.useRef)(null),
				i = (0, e.useRef)(null);
			return (0, r.jsxs)(r.Fragment, {
				children: [
					(0, r.jsx)(a, { homeRef: t, aboutRef: n, portfolioRef: i }),
					(0, r.jsx)(l, { ref: n }),
					(0, r.jsx)(Ve, { ref: i }),
				],
			});
		};
		t.createRoot(document.getElementById('root')).render((0, r.jsx)(e.StrictMode, { children: (0, r.jsx)(He, {}) }));
	})();
})();
//# sourceMappingURL=main.a177093b.js.map

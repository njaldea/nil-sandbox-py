function s(n) {
  return n;
}
function f(n) {
  const u = 2.5949095;
  return (n *= 2) < 1 ? 0.5 * (n * n * ((u + 1) * n - u)) : 0.5 * ((n -= 2) * n * ((u + 1) * n + u) + 2);
}
function h(n) {
  return n * n * ((1.70158 + 1) * n - 1.70158);
}
function M(n) {
  return --n * n * ((1.70158 + 1) * n + 1.70158) + 1;
}
function c(n) {
  const u = 0.36363636363636365, t = 8 / 11, o = 9 / 10, i = 4356 / 361, e = 35442 / 1805, a = 16061 / 1805, r = n * n;
  return n < u ? 7.5625 * r : n < t ? 9.075 * r - 9.9 * n + 3.4 : n < o ? i * r - e * n + a : 10.8 * n * n - 20.52 * n + 10.72;
}
function I(n) {
  return n < 0.5 ? 0.5 * (1 - c(1 - n * 2)) : 0.5 * c(n * 2 - 1) + 0.5;
}
function O(n) {
  return 1 - c(1 - n);
}
function p(n) {
  return (n *= 2) < 1 ? -0.5 * (Math.sqrt(1 - n * n) - 1) : 0.5 * (Math.sqrt(1 - (n -= 2) * n) + 1);
}
function q(n) {
  return 1 - Math.sqrt(1 - n * n);
}
function w(n) {
  return Math.sqrt(1 - --n * n);
}
function b(n) {
  return n < 0.5 ? 4 * n * n * n : 0.5 * Math.pow(2 * n - 2, 3) + 1;
}
function P(n) {
  return n * n * n;
}
function l(n) {
  const u = n - 1;
  return u * u * u + 1;
}
function x(n) {
  return n < 0.5 ? 0.5 * Math.sin(13 * Math.PI / 2 * 2 * n) * Math.pow(2, 10 * (2 * n - 1)) : 0.5 * Math.sin(-13 * Math.PI / 2 * (2 * n - 1 + 1)) * Math.pow(2, -10 * (2 * n - 1)) + 1;
}
function d(n) {
  return Math.sin(13 * n * Math.PI / 2) * Math.pow(2, 10 * (n - 1));
}
function k(n) {
  return Math.sin(-13 * (n + 1) * Math.PI / 2) * Math.pow(2, -10 * n) + 1;
}
function v(n) {
  return n === 0 || n === 1 ? n : n < 0.5 ? 0.5 * Math.pow(2, 20 * n - 10) : -0.5 * Math.pow(2, 10 - n * 20) + 1;
}
function g(n) {
  return n === 0 ? n : Math.pow(2, 10 * (n - 1));
}
function j(n) {
  return n === 1 ? n : 1 - Math.pow(2, -10 * n);
}
function m(n) {
  return n /= 0.5, n < 1 ? 0.5 * n * n : (n--, -0.5 * (n * (n - 2) - 1));
}
function y(n) {
  return n * n;
}
function z(n) {
  return -n * (n - 2);
}
function A(n) {
  return n < 0.5 ? 8 * Math.pow(n, 4) : -8 * Math.pow(n - 1, 4) + 1;
}
function B(n) {
  return Math.pow(n, 4);
}
function C(n) {
  return Math.pow(n - 1, 3) * (1 - n) + 1;
}
function D(n) {
  return (n *= 2) < 1 ? 0.5 * n * n * n * n * n : 0.5 * ((n -= 2) * n * n * n * n + 2);
}
function E(n) {
  return n * n * n * n * n;
}
function F(n) {
  return --n * n * n * n * n + 1;
}
function G(n) {
  return -0.5 * (Math.cos(Math.PI * n) - 1);
}
function H(n) {
  const u = Math.cos(n * Math.PI * 0.5);
  return Math.abs(u) < 1e-14 ? 1 : 1 - u;
}
function J(n) {
  return Math.sin(n * Math.PI / 2);
}
export {
  h as backIn,
  f as backInOut,
  M as backOut,
  O as bounceIn,
  I as bounceInOut,
  c as bounceOut,
  q as circIn,
  p as circInOut,
  w as circOut,
  P as cubicIn,
  b as cubicInOut,
  l as cubicOut,
  d as elasticIn,
  x as elasticInOut,
  k as elasticOut,
  g as expoIn,
  v as expoInOut,
  j as expoOut,
  s as linear,
  y as quadIn,
  m as quadInOut,
  z as quadOut,
  B as quartIn,
  A as quartInOut,
  C as quartOut,
  E as quintIn,
  D as quintInOut,
  F as quintOut,
  H as sineIn,
  G as sineInOut,
  J as sineOut
};

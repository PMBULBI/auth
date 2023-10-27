import { setInner } from "https://jscroot.github.io/element/croot.js";.
import { getCookie } from "https://jscroot.github.io/cookie/croot.js";

token=getCookie("login");
setInner("nama","Bambang Pamungkas "+token);

import _regeneratorRuntime from "foo/regenerator";
import _Symbol from "foo/core-js/symbol";

var _marked =
/*#__PURE__*/
_regeneratorRuntime.mark(giveWord);

import foo, * as bar from "someModule";
export const myWord = _Symbol("abc");
export function giveWord() {
  return _regeneratorRuntime.wrap(function giveWord$(_context) {
    while (1) switch (_context.prev = _context.next) {
      case 0:
        _context.next = 2;
        return myWord;

      case 2:
      case "end":
        return _context.stop();
    }
  }, _marked, this);
}
foo;
bar;

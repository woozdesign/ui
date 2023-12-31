export type WoozCommandCode =
  | 'Ctrl'
  | 'Alt'
  | 'Shift'
  | 'Meta'
  | 'A'
  | 'B'
  | 'C'
  | 'D'
  | 'E'
  | 'F'
  | 'G'
  | 'H'
  | 'I'
  | 'J'
  | 'K'
  | 'L'
  | 'M'
  | 'N'
  | 'O'
  | 'P'
  | 'Q'
  | 'R'
  | 'S'
  | 'T'
  | 'U'
  | 'V'
  | 'W'
  | 'X'
  | 'Y'
  | 'Z'
  | '0'
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | 'F1'
  | 'F2'
  | 'F3'
  | 'F4'
  | 'F5'
  | 'F6'
  | 'F7'
  | 'F8'
  | 'F9'
  | 'F10'
  | 'F11'
  | 'F12'
  | 'Enter'
  | 'Escape'
  | 'Backspace'
  | 'Tab'
  | 'Space'
  | 'Delete'
  | 'Insert'
  | 'Home'
  | 'End'
  | 'PageUp'
  | 'PageDown'
  | 'ArrowUp'
  | 'ArrowDown'
  | 'ArrowLeft'
  | 'ArrowRight'
  | 'NumLock'
  | 'CapsLock'
  | 'ScrollLock'
  | 'PauseBreak'
  | 'Numpad0'
  | 'Numpad1'
  | 'Numpad2'
  | 'Numpad3'
  | 'Numpad4'
  | 'Numpad5'
  | 'Numpad6'
  | 'Numpad7'
  | 'Numpad8'
  | 'Numpad9'
  | 'NumpadAdd'
  | 'NumpadSubtract'
  | 'NumpadMultiply'
  | 'NumpadDivide'
  | 'NumpadEnter'
  | 'NumpadDecimal';

export const KEY_CODES: { [key: number]: WoozCommandCode } = {
  16: 'Shift',
  17: 'Ctrl',
  18: 'Alt',
  91: 'Meta', // Left Command or Windows key
  93: 'Meta', // Right Command or Windows key
  65: 'A',
  66: 'B',
  67: 'C',
  68: 'D',
  69: 'E',
  70: 'F',
  71: 'G',
  72: 'H',
  73: 'I',
  74: 'J',
  75: 'K',
  76: 'L',
  77: 'M',
  78: 'N',
  79: 'O',
  80: 'P',
  81: 'Q',
  82: 'R',
  83: 'S',
  84: 'T',
  85: 'U',
  86: 'V',
  87: 'W',
  88: 'X',
  89: 'Y',
  90: 'Z',
  48: '0',
  49: '1',
  50: '2',
  51: '3',
  52: '4',
  53: '5',
  54: '6',
  55: '7',
  56: '8',
  57: '9',
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
  13: 'Enter',
  27: 'Escape',
  8: 'Backspace',
  9: 'Tab',
  32: 'Space',
  46: 'Delete',
  45: 'Insert',
  36: 'Home',
  35: 'End',
  33: 'PageUp',
  34: 'PageDown',
  38: 'ArrowUp',
  40: 'ArrowDown',
  37: 'ArrowLeft',
  39: 'ArrowRight',
  144: 'NumLock',
  20: 'CapsLock',
  145: 'ScrollLock',
  19: 'PauseBreak',
  // 96: 'Numpad0',
  // 97: 'Numpad1',
  // 98: 'Numpad2',
  // 99: 'Numpad3',
  // 100: 'Numpad4',
  // 101: 'Numpad5',
  // 102: 'Numpad6',
  // 103: 'Numpad7',
  // 104: 'Numpad8',
  // 105: 'Numpad9',
  // 107: 'NumpadAdd',
  // 109: 'NumpadSubtract',
  // 106: 'NumpadMultiply',
  // 111: 'NumpadDivide',
  // 13: 'NumpadEnter', // Note: Numpad Enter shares the same keyCode with regular Enter
  // 110: 'NumpadDecimal',
};

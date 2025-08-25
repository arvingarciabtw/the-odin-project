import caesarCipher from "../scripts/caesarCipher";

describe("lowercase only", () => {
  test("xyz, 3", () => {
    expect(caesarCipher("xyz", 3)).toBe("abc");
  });
  test("xyz, 6", () => {
    expect(caesarCipher("xyz", 6)).toBe("def");
  });
  test("abc, 10", () => {
    expect(caesarCipher("abc", 10)).toBe("klm");
  });
  test("rgb, 5", () => {
    expect(caesarCipher("rgb", 5)).toBe("wlg");
  });
  test("ggs, 0", () => {
    expect(caesarCipher("ggs", 0)).toBe("ggs");
  });
});

describe("lowercase and uppercase, no symbols", () => {
  test("HeLLo, 3", () => {
    expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
  });
  test("HeLLo, 6", () => {
    expect(caesarCipher("HeLLo", 6)).toBe("NkRRu");
  });
  test("lIgMA, 4", () => {
    expect(caesarCipher("lIgMA", 4)).toBe("pMkQE");
  });
  test("SilkSong, 0", () => {
    expect(caesarCipher("SilkSong", 0)).toBe("SilkSong");
  });
  test("hoRNet, 1", () => {
    expect(caesarCipher("hoRNet", 1)).toBe("ipSOfu");
  });
});

describe("with symbols", () => {
  test("Hello, World!, 3", () => {
    expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
  });
  test("?!?!?!, 69", () => {
    expect(caesarCipher("?!?!?!", 69)).toBe("?!?!?!");
  });
  test("H!E!L!L!O, 6", () => {
    expect(caesarCipher("H!E!L!L!O", 6)).toBe("N!K!R!R!U");
  });
  test("Hello, World!, 0", () => {
    expect(caesarCipher("Hello, World!", 0)).toBe("Hello, World!");
  });
  test("Hello, World!, -1", () => {
    expect(caesarCipher("Hello, World!", -1)).toBe("Gdkkn, Vnqkc!");
  });
});

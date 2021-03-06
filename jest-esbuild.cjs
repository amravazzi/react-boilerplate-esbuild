module.exports = {
  process(src) {
    const { code } = require("esbuild").transformSync(src, {
      target: ["es2020"],
      format: "cjs",
      loader: "jsx",
    });

    return { code };
  },
};

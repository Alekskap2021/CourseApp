module.exports = {
  process() {
    const componentName = "MockComponent";
    return {
      code: `module.exports = function ${componentName}() {
        return "SomeString";
      };`,
    };
  },
};

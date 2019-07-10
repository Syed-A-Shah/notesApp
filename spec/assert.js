var assert = {
  isTrue: function(assertToCheck, testName) {
    if (!assertToCheck) {
      throw new Error(testName + ". Assertion failed: " + assertToCheck + " is not truthy");
    }
    console.log(testName)
  }
};

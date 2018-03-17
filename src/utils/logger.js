const { performance } = require("perf_hooks");

const logResult = (status, task, t0) => {
  const t1 = performance.now();
  const duration = Math.round((t1 - t0) * 1e2) / 1e2;
  console.log(`${status} task "${task}" in ${duration} ms`);
};

module.exports = (task, promisefulFunction) => {
  console.log(`Started task "${task}"`);
  const t0 = performance.now();
  return promisefulFunction()
    .then(result => {
      logResult("Finished", task, t0);
      return result;
    })
    .catch(error => {
      logResult("Failed", task, t0);
      throw error;
    });
};

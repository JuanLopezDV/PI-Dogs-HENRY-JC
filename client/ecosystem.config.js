module.exports = {
  apps: [
    {
      name: "Front-Dogs",
      script: "npm",
      args: "start",
      cwd: "./src",
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};

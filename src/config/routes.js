const express = require("express");

module.exports = function (server) {
  const router = express.Router();

  // URL base para todas as rotas
  server.use("/api", router);

  // Rotas de ciclos de pagamentos
  const BillingCycle = require("../api/billingCycle/billingCycleService");
  BillingCycle.register(router, "/billingCycles");
};

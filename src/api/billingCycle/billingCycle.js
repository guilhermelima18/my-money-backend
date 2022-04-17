const nodeRestful = require("node-restful");
const mongoose = nodeRestful.mongoose;

const creditSchema = new mongoose.Schema({
  name: { type: String, required: [true, "Informe o nome do crédito."] },
  value: {
    type: Number,
    min: 0,
    required: [true, "Informe o valor do crédito."],
  },
});

const debitSchema = new mongoose.Schema({
  name: { type: String, required: [true, "Informe o nome do débito."] },
  value: {
    type: Number,
    min: 0,
    required: [true, "Informe o valor do débito."],
  },
  status: {
    type: String,
    required: false,
    uppercase: true,
    enum: ["PAGO", "PENDENTE", "AGENDADO"],
  },
});

const billingCycleSchema = mongoose.Schema({
  name: { type: String, required: true },
  month: { type: Number, min: 1, max: 12, required: true },
  year: { type: Number, min: 1970, max: 2100, required: true },
  credits: [creditSchema],
  debits: [debitSchema],
});

module.exports = nodeRestful.model("BillingCycle", billingCycleSchema);

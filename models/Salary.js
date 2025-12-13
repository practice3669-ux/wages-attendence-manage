import mongoose from 'mongoose'

const SalarySchema = new mongoose.Schema({
  worker: { type: mongoose.Schema.Types.ObjectId, ref: 'Worker', required: true },
  month: { type: String, required: true }, // YYYY-MM
  totalDays: { type: Number, required: true },
  presentDays: { type: Number, required: true },
  totalSalary: { type: Number, required: true },
  paid: { type: Boolean, default: false },
  paidDate: { type: Date },
  notes: { type: String }
})

export default mongoose.models.Salary || mongoose.model('Salary', SalarySchema)
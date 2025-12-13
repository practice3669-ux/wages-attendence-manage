import mongoose from 'mongoose'

const WorkerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String },
  address: { type: String },
  dailyWage: { type: Number, required: true },
  joinDate: { type: Date, default: Date.now },
  status: { type: String, default: 'active' } // active, inactive
})

export default mongoose.models.Worker || mongoose.model('Worker', WorkerSchema)